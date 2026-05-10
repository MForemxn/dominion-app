import type { Card, KingdomScore } from "@/types";

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

function scoreVillageCoverage(cards: Card[]): number {
  const actionCards = cards.filter((c) => c.types.includes("Action"));
  const villages = cards.filter(
    (c) => c.plusActions >= 2 || c.roles.includes("village")
  ).length;
  const terminals = actionCards.filter(
    (c) => c.plusActions === 0 && !c.roles.includes("village")
  ).length;

  if (terminals <= 1) return 9;
  if (terminals === 2 && villages === 0) return 7;
  if (villages === 0 && terminals >= 4) return 2;
  if (villages === 0 && terminals === 3) return 4;

  // Ratio: need roughly 1 village per terminal beyond the first
  const needed = terminals - 1;
  const ratio = villages / needed;

  if (ratio >= 1.0) return 10;
  if (ratio >= 0.7) return 8;
  if (ratio >= 0.5) return 6;
  if (ratio >= 0.3) return 4;
  return 3;
}

function scoreDrawAvailability(cards: Card[]): number {
  // Only +2 Cards or more counts as draw (cantrips are deck-neutral)
  const drawCards = cards.filter((c) => c.plusCards >= 2);
  const nonTerminalDraw = drawCards.filter((c) => c.plusActions >= 1);
  const terminalDraw = drawCards.filter((c) => c.plusActions === 0);
  const hasVillages = cards.some((c) => c.plusActions >= 2 || c.roles.includes("village"));

  // Non-terminal draw is unconditionally great
  if (nonTerminalDraw.length >= 2) return 10;
  if (nonTerminalDraw.length === 1 && drawCards.length >= 2) return 9;
  if (nonTerminalDraw.length === 1) return 8;

  // Terminal draw needs village support
  if (terminalDraw.length >= 2 && hasVillages) return 8;
  if (terminalDraw.length >= 1 && hasVillages) return 7;
  if (terminalDraw.length >= 2 && !hasVillages) return 5;
  if (terminalDraw.length === 1 && !hasVillages) return 4;

  return 2;
}

function scoreCostCurve(cards: Card[]): number {
  const costs = cards.map((c) => (typeof c.cost === "number" ? c.cost : 5));
  const cheap = costs.filter((c) => c >= 2 && c <= 3).length;
  const mid = costs.filter((c) => c >= 4 && c <= 5).length;
  const expensive = costs.filter((c) => c >= 6).length;

  // Check how spread out the costs are (not all clumped)
  const uniqueCosts = new Set(costs).size;

  if (cheap >= 2 && mid >= 3 && expensive >= 1) return 10;
  if (cheap >= 2 && mid >= 3 && uniqueCosts >= 4) return 9;
  if (cheap >= 2 && mid >= 2 && expensive >= 1) return 8;
  if (cheap >= 2 && mid >= 2 && uniqueCosts >= 3) return 7;
  if (cheap >= 1 && mid >= 2 && expensive >= 1 && uniqueCosts >= 3) return 7;
  if (cheap >= 1 && mid >= 4 && uniqueCosts >= 3) return 6;
  if (cheap >= 1 && mid >= 4) return 5; // 1 cheap + all mid = flat
  if (cheap === 0 && mid >= 6) return 4;
  if (expensive >= 5) return 3;
  if (cheap >= 6) return 3;
  if (uniqueCosts <= 2) return 3; // almost everything at 1-2 costs
  return 5;
}

function scoreInteraction(cards: Card[]): number {
  const attacks = cards.filter((c) => c.types.includes("Attack"));
  const reactions = cards.filter((c) => c.types.includes("Reaction"));
  const hasThinning = cards.some((c) => c.roles.includes("thinning"));

  // Cursing attacks are specifically oppressive
  const cursingAttacks = attacks.filter(
    (c) => c.notes.toLowerCase().includes("curse") || c.notes.toLowerCase().includes("junk")
  ).length;

  // Multiple cursing attacks without thinning = miserable
  if (cursingAttacks >= 2 && !hasThinning) return 2;
  if (cursingAttacks >= 3) return 3;

  // 4+ attacks is oppressive regardless
  if (attacks.length >= 4) return 4;

  // Sweet spots
  if (attacks.length === 1 || attacks.length === 2) {
    if (reactions.length >= 1) return 10;
    return 8;
  }

  if (attacks.length === 3 && reactions.length >= 1) return 7;
  if (attacks.length === 3) return 6;

  // Zero attacks — not bad, just less interactive
  if (attacks.length === 0) return 5;

  return 5;
}

function scoreEconomy(cards: Card[]): number {
  const coinCards = cards.filter((c) => c.plusCoins >= 1);
  const totalCoins = coinCards.reduce((sum, c) => sum + c.plusCoins, 0);
  const economyRoleCards = cards.filter((c) => c.roles.includes("economy"));

  // Count cards that provide economy beyond just plusCoins
  const econSources = Math.max(coinCards.length, economyRoleCards.length);

  if (totalCoins >= 8 && econSources >= 3) return 10;
  if (totalCoins >= 6 && econSources >= 2) return 9;
  if (totalCoins >= 5) return 8;
  if (totalCoins >= 4) return 7;
  if (totalCoins >= 2) return 5;
  if (econSources >= 2) return 4;
  return 3;
}

function scoreBuyAvailability(cards: Card[]): number {
  const buyCards = cards.filter((c) => c.plusBuys >= 1);
  const nonTerminalBuy = buyCards.filter((c) => c.plusActions >= 1);
  const terminalBuy = buyCards.filter((c) => c.plusActions === 0 && c.types.includes("Action"));
  const treasureBuy = buyCards.filter((c) => c.types.includes("Treasure"));

  const totalBuySources = buyCards.length;

  if (nonTerminalBuy.length >= 2) return 10;
  if (nonTerminalBuy.length >= 1 && totalBuySources >= 2) return 9;
  if (nonTerminalBuy.length === 1) return 8;
  if (totalBuySources >= 2) return 7;
  if (terminalBuy.length === 1 || treasureBuy.length >= 1) return 6;
  if (totalBuySources === 1) return 5;

  // Zero +Buy — engines cap at 1 purchase per turn
  return 3;
}

function scoreStrategicDiversity(cards: Card[]): number {
  let paths = 0;

  const hasVillages = cards.some((c) => c.plusActions >= 2);
  const hasDraw = cards.some((c) => c.plusCards >= 2);
  const hasNonTerminalDraw = cards.some((c) => c.plusCards >= 2 && c.plusActions >= 1);
  const hasStrongEcon = cards.filter((c) => c.plusCoins >= 2).length >= 2;
  const hasAltVP = cards.some((c) => c.roles.includes("alt-victory"));
  const hasThinning = cards.some((c) => c.roles.includes("thinning"));
  const hasGainers = cards.some((c) => c.roles.includes("gain"));
  const hasBuy = cards.some((c) => c.plusBuys >= 1);
  const hasMultiplier = cards.some((c) => c.roles.includes("multiplier"));
  const hasAttacks = cards.some((c) => c.types.includes("Attack"));
  const hasTerminalDraw = cards.some(
    (c) => c.plusCards >= 2 && c.plusActions === 0
  );
  const strongTerminals = cards.filter(
    (c) => c.types.includes("Action") && c.plusActions === 0 && (c.plusCoins >= 2 || c.plusCards >= 3)
  ).length;

  // Engine path: villages + draw + (thinning or +buy)
  if (hasVillages && hasDraw && (hasThinning || hasBuy)) paths++;

  // Big Money+ path: strong terminal draw or strong economy without needing engine
  if ((hasTerminalDraw || strongTerminals >= 2) && hasStrongEcon) paths++;

  // Rush/alt-VP path: gainers + alt-victory or cheap alt-VP
  if (hasAltVP && (hasGainers || hasBuy)) paths++;

  // Slog/grinding: attacks that slow everyone down + economy to weather it
  if (hasAttacks && hasStrongEcon && !hasVillages) paths++;

  // Combo/multiplier: throne room effects with strong targets
  if (hasMultiplier && (hasDraw || hasStrongEcon)) paths++;

  if (paths >= 4) return 10;
  if (paths === 3) return 9;
  if (paths === 2) return 7;
  if (paths === 1) return 5;
  return 3;
}

function scoreThinningAccess(cards: Card[]): number {
  const trashers = cards.filter((c) => c.roles.includes("thinning"));

  // Distinguish strong vs weak trashers via notes
  const strongTrashers = trashers.filter(
    (c) =>
      c.notes.toLowerCase().includes("trash up to") ||
      c.notes.toLowerCase().includes("trash 2") ||
      c.notes.toLowerCase().includes("trash a card") ||
      c.notes.toLowerCase().includes("look at top") // Sentry-type
  );

  if (strongTrashers.length >= 2) return 10;
  if (strongTrashers.length === 1 && trashers.length >= 2) return 9;
  if (strongTrashers.length === 1) return 8;
  if (trashers.length >= 2) return 7;
  if (trashers.length === 1) return 6;
  return 3;
}

// ─── Scoring Weights & Presets ──────────────────────────────────────────────────

export interface ScoringWeights {
  villageCoverage: number;
  drawAvailability: number;
  costCurve: number;
  interaction: number;
  economy: number;
  buyAvailability: number;
  strategicDiversity: number;
  thinningAccess: number;
}

export const DEFAULT_WEIGHTS: ScoringWeights = {
  villageCoverage: 1.4,
  drawAvailability: 1.5,
  costCurve: 0.8,
  interaction: 0.6,
  economy: 1.3,
  buyAvailability: 1.0,
  strategicDiversity: 0.4,
  thinningAccess: 1.3,
};

export type OptimizationPreset = {
  id: string;
  name: string;
  description: string;
  weights: ScoringWeights;
};

export const OPTIMIZATION_PRESETS: OptimizationPreset[] = [
  {
    id: "none",
    name: "None",
    description: "Pure random — no optimization, just pick 10 cards",
    weights: {
      villageCoverage: 0,
      drawAvailability: 0,
      costCurve: 0,
      interaction: 0,
      economy: 0,
      buyAvailability: 0,
      strategicDiversity: 0,
      thinningAccess: 0,
    },
  },
  {
    id: "balanced",
    name: "Balanced",
    description: "Even spread across all dimensions",
    weights: DEFAULT_WEIGHTS,
  },
  {
    id: "engine",
    name: "Engine Builder",
    description: "Villages + draw + thinning + buy for combo-heavy games",
    weights: {
      villageCoverage: 2.5,
      drawAvailability: 2.5,
      costCurve: 0.6,
      interaction: 0.4,
      economy: 1.0,
      buyAvailability: 2.0,
      strategicDiversity: 0.8,
      thinningAccess: 2.2,
    },
  },
  {
    id: "cutthroat",
    name: "Cutthroat",
    description: "Attacks and interaction with enough thinning to survive",
    weights: {
      villageCoverage: 1.0,
      drawAvailability: 1.0,
      costCurve: 0.8,
      interaction: 2.5,
      economy: 1.5,
      buyAvailability: 0.8,
      strategicDiversity: 1.0,
      thinningAccess: 1.5,
    },
  },
  {
    id: "big-money",
    name: "Big Money+",
    description: "Strong economy, terminal draw, minimal engine support",
    weights: {
      villageCoverage: 0.4,
      drawAvailability: 1.2,
      costCurve: 1.5,
      interaction: 0.6,
      economy: 3.0,
      buyAvailability: 1.5,
      strategicDiversity: 0.8,
      thinningAccess: 0.5,
    },
  },
  {
    id: "beginner",
    name: "Beginner Friendly",
    description: "Clear cost curve, good diversity, low oppression",
    weights: {
      villageCoverage: 1.5,
      drawAvailability: 1.5,
      costCurve: 2.0,
      interaction: 0.4,
      economy: 1.5,
      buyAvailability: 1.2,
      strategicDiversity: 2.5,
      thinningAccess: 1.0,
    },
  },
  {
    id: "creative",
    name: "Creative / Alt-VP",
    description: "Strategic diversity, alt-victory, unconventional paths",
    weights: {
      villageCoverage: 0.8,
      drawAvailability: 1.0,
      costCurve: 0.8,
      interaction: 0.8,
      economy: 0.8,
      buyAvailability: 1.0,
      strategicDiversity: 3.0,
      thinningAccess: 1.2,
    },
  },
];

// ─── Main Scoring Function ──────────────────────────────────────────────────────

export function scoreKingdom(cards: Card[], weights?: ScoringWeights): KingdomScore {
  const w = weights ?? DEFAULT_WEIGHTS;

  const villageCoverage = scoreVillageCoverage(cards);
  const drawAvailability = scoreDrawAvailability(cards);
  const costCurve = scoreCostCurve(cards);
  const interaction = scoreInteraction(cards);
  const economy = scoreEconomy(cards);
  const buyAvailability = scoreBuyAvailability(cards);
  const strategicDiversity = scoreStrategicDiversity(cards);
  const thinningAccess = scoreThinningAccess(cards);

  const weightedSum =
    villageCoverage * w.villageCoverage +
    drawAvailability * w.drawAvailability +
    costCurve * w.costCurve +
    interaction * w.interaction +
    economy * w.economy +
    buyAvailability * w.buyAvailability +
    strategicDiversity * w.strategicDiversity +
    thinningAccess * w.thinningAccess;

  const totalWeight = Object.values(w).reduce((a, b) => a + b, 0);

  if (totalWeight === 0) {
    return {
      overall: 5,
      villageCoverage,
      drawAvailability,
      costCurve,
      terminalBalance: buyAvailability,
      interaction,
      economy,
      strategicDiversity,
      thinningAccess,
    };
  }

  const rawAverage = weightedSum / totalWeight;

  // Penalty for weak dimensions: any score <= 3 drags down the overall
  // regardless of its weight. Prevents "10 overall with holes."
  const allScores = [
    villageCoverage, drawAvailability, costCurve, interaction,
    economy, buyAvailability, strategicDiversity, thinningAccess,
  ];
  const weakSpots = allScores.filter((s) => s <= 3).length;
  const veryWeakSpots = allScores.filter((s) => s <= 2).length;

  let penalty = 0;
  penalty += weakSpots * 0.4;
  penalty += veryWeakSpots * 0.6;

  const overall = clamp(
    Math.round((rawAverage - penalty) * 10) / 10,
    1, 10
  );

  return {
    overall,
    villageCoverage,
    drawAvailability,
    costCurve,
    terminalBalance: buyAvailability, // repurposed slot for +Buy
    interaction,
    economy,
    strategicDiversity,
    thinningAccess,
  };
}
