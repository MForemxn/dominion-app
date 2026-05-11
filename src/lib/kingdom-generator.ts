import type { Card, GeneratorConstraints, KingdomScore, ComponentRequirement, SelectedNonSupply } from "@/types";
import { CARDS, CARD_MAP } from "@/data/cards";
import { scoreKingdom, DEFAULT_WEIGHTS, type ScoringWeights } from "./kingdom-scorer";
import { selectNonSupply } from "@/data/non-supply";
import { detectRequiredComponents } from "@/data/expansion-components";

export interface GeneratedKingdom {
  cards: Card[];
  score: KingdomScore;
  fitScore?: KingdomScore;
  selectedNonSupply?: SelectedNonSupply;
  requiredComponents?: ComponentRequirement[];
}

function getCardPool(constraints: GeneratorConstraints): Card[] {
  const { editionOverrides = {} } = constraints;

  return CARDS.filter((c) => {
    if (!constraints.expansions.includes(c.expansion)) return false;
    if (constraints.mustExclude?.includes(c.id)) return false;

    // Edition filtering: if the expansion has editions and an override is set,
    // exclude cards that belong only to the other edition.
    if (c.edition !== undefined) {
      const override = editionOverrides[c.expansion] ?? 2; // default to 2nd edition
      if (c.edition !== override) return false;
    }

    if (constraints.costRange) {
      const cost = typeof c.cost === "number" ? c.cost : 99;
      if (cost < constraints.costRange[0] || cost > constraints.costRange[1]) return false;
    }

    return true;
  });
}

function meetsStatRequirements(
  selected: Card[],
  constraints: GeneratorConstraints
): boolean {
  if (constraints.minPlusActions) {
    const total = selected.filter((c) => c.plusActions >= 1).length;
    if (total < constraints.minPlusActions) return false;
  }
  if (constraints.minPlusBuys) {
    const total = selected.filter((c) => c.plusBuys >= 1).length;
    if (total < constraints.minPlusBuys) return false;
  }
  if (constraints.minPlusCards) {
    const total = selected.filter((c) => c.plusCards >= 1).length;
    if (total < constraints.minPlusCards) return false;
  }
  if (constraints.minPlusCoins) {
    const total = selected.filter((c) => c.plusCoins >= 1).length;
    if (total < constraints.minPlusCoins) return false;
  }
  if (constraints.requireRoles) {
    for (const [role, minCount] of Object.entries(constraints.requireRoles)) {
      const count = selected.filter((c) => c.roles.includes(role as any)).length;
      if (count < (minCount ?? 0)) return false;
    }
  }
  return true;
}

function weightedSelect(pool: Card[], currentSelection: Card[]): Card {
  const currentCosts = currentSelection.map((c) =>
    typeof c.cost === "number" ? c.cost : 5
  );
  const currentRoles = new Set(currentSelection.flatMap((c) => c.roles));
  const hasVillage = currentSelection.some((c) => c.plusActions >= 2 || c.roles.includes("village"));
  const terminals = currentSelection.filter(
    (c) => c.types.includes("Action") && c.plusActions === 0 && !c.roles.includes("village")
  ).length;

  const weights = pool.map((card) => {
    let w = 1.0;
    const cost = typeof card.cost === "number" ? card.cost : 5;

    const cheapCount = currentCosts.filter((c) => c <= 3).length;
    const midCount = currentCosts.filter((c) => c >= 4 && c <= 5).length;
    const expCount = currentCosts.filter((c) => c >= 6).length;

    if (cheapCount < 2 && cost <= 3) w *= 1.5;
    if (midCount < 3 && cost >= 4 && cost <= 5) w *= 1.3;
    if (expCount < 1 && cost >= 6) w *= 1.4;
    if (expCount >= 3 && cost >= 6) w *= 0.4;
    if (cheapCount >= 4 && cost <= 3) w *= 0.5;

    if (terminals >= 4 && !hasVillage && (card.plusActions >= 2 || card.roles.includes("village"))) w *= 2.5;
    if (terminals >= 3 && card.plusActions === 0 && !card.roles.includes("village") && !hasVillage) w *= 0.4;

    if (!currentSelection.some((c) => c.plusCards >= 2) && card.plusCards >= 2) w *= 1.8;

    const newRoles = card.roles.filter((r) => !currentRoles.has(r));
    w *= 1 + newRoles.length * 0.3;

    if (card.types.includes("Duration")) w *= 1.1;

    return w;
  });

  const totalWeight = weights.reduce((a, b) => a + b, 0);
  let roll = Math.random() * totalWeight;

  for (let i = 0; i < pool.length; i++) {
    roll -= weights[i];
    if (roll <= 0) return pool[i];
  }

  return pool[pool.length - 1];
}

function buildExtras(cards: Card[], expansionIds: string[]): {
  selectedNonSupply: SelectedNonSupply;
  requiredComponents: ComponentRequirement[];
} {
  // Determine which expansions are actually represented in the selected cards
  const cardExpansions = Array.from(new Set(cards.map((c) => c.expansion)));
  // Also include all expansions that were explicitly selected (for component detection)
  const allExpansions = Array.from(new Set([...cardExpansions, ...expansionIds]));

  // Only suggest non-supply for expansions that have cards in the kingdom
  const nonSupplyExpansions = cardExpansions.filter((e) => e !== "base");

  const { events, way, projects, landmark, traits } = selectNonSupply(nonSupplyExpansions);

  const selectedNonSupply: SelectedNonSupply = {};
  if (events.length > 0)    selectedNonSupply.events   = events;
  if (way)                   selectedNonSupply.way      = way;
  if (projects.length > 0)  selectedNonSupply.projects = projects;
  if (landmark)              selectedNonSupply.landmark = landmark;
  if (traits.length > 0)    selectedNonSupply.traits   = traits;

  const requiredComponents = detectRequiredComponents(cards, allExpansions);

  return { selectedNonSupply, requiredComponents };
}

export function generateKingdom(
  constraints: GeneratorConstraints,
  weights?: ScoringWeights,
  maxAttempts = 50
): GeneratedKingdom | null {
  const noOptimization = weights && Object.values(weights).every((v) => v === 0);
  const minScore = noOptimization ? 0 : (constraints.minScore ?? 5.0);

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const pool = getCardPool(constraints);
    const selected: Card[] = [];

    if (constraints.mustInclude) {
      for (const id of constraints.mustInclude) {
        const card = CARD_MAP[id];
        if (card) selected.push(card);
      }
    }

    const remaining = pool.filter((c) => !selected.some((s) => s.id === c.id));

    if (remaining.length + selected.length < 10) {
      return null;
    }

    let available = [...remaining];
    while (selected.length < 10 && available.length > 0) {
      const pick = weightedSelect(available, selected);
      selected.push(pick);
      available = available.filter((c) => c.id !== pick.id);
    }

    if (selected.length < 10) continue;

    if (!meetsStatRequirements(selected, constraints)) continue;

    const qualityScore = scoreKingdom(selected, DEFAULT_WEIGHTS);
    const fitScore = weights ? scoreKingdom(selected, weights) : undefined;
    const checkScore = fitScore ?? qualityScore;

    if (checkScore.overall >= minScore) {
      const { selectedNonSupply, requiredComponents } = buildExtras(selected, constraints.expansions);
      return { cards: selected, score: qualityScore, fitScore, selectedNonSupply, requiredComponents };
    }
  }

  return null;
}

export function generateBest(
  constraints: GeneratorConstraints,
  weights?: ScoringWeights,
  candidates = 20
): GeneratedKingdom | null {
  let best: GeneratedKingdom | null = null;

  for (let i = 0; i < candidates; i++) {
    const result = generateKingdom(constraints, weights, 10);
    if (!result) continue;
    const resultOverall = result.fitScore?.overall ?? result.score.overall;
    const bestOverall = best?.fitScore?.overall ?? best?.score.overall ?? 0;
    if (resultOverall > bestOverall) {
      best = result;
    }
  }

  return best;
}
