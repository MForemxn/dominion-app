import type { Card } from "@/types";

export interface Filters {
  costCurve:       boolean;
  maxTerminals:    number | null;
  drawLevel:       "any" | "some" | "many";
  attackIntensity: "any" | "none" | "light" | "heavy";
  requireGainer:   boolean;
  difficulty:      "any" | "beginner" | "intermediate" | "advanced";
  minVillages:     number | null;
}

export const DEFAULT_FILTERS: Filters = {
  costCurve:       false,
  maxTerminals:    null,
  drawLevel:       "any",
  attackIntensity: "any",
  requireGainer:   false,
  difficulty:      "any",
  minVillages:     null,
};

export function countActiveFilters(filters: Filters): number {
  let n = 0;
  if (filters.costCurve)                 n++;
  if (filters.maxTerminals !== null)     n++;
  if (filters.drawLevel !== "any")       n++;
  if (filters.attackIntensity !== "any") n++;
  if (filters.requireGainer)             n++;
  if (filters.difficulty !== "any")      n++;
  if (filters.minVillages !== null)      n++;
  return n;
}

export function meetsFilters(cards: Card[], filters: Filters): boolean {
  const numCost = (c: Card) => typeof c.cost === "number" ? c.cost : 5;

  if (filters.costCurve) {
    const earlyGame = cards.filter((c) => numCost(c) >= 2 && numCost(c) <= 3).length;
    const midGame   = cards.filter((c) => numCost(c) >= 4 && numCost(c) <= 5).length;
    if (earlyGame < 2 || midGame < 2) return false;
  }

  if (filters.maxTerminals !== null) {
    const terminals = cards.filter((c) => c.types.includes("Action") && c.plusActions === 0).length;
    if (terminals > filters.maxTerminals) return false;
  }

  const drawCount = cards.filter((c) => c.roles.includes("draw")).length;
  if (filters.drawLevel === "some" && drawCount < 1) return false;
  if (filters.drawLevel === "many" && drawCount < 2) return false;

  const attackCount = cards.filter((c) => c.types.includes("Attack")).length;
  if (filters.attackIntensity === "none"  && attackCount > 0) return false;
  if (filters.attackIntensity === "light" && attackCount !== 1) return false;
  if (filters.attackIntensity === "heavy" && attackCount < 2) return false;

  if (filters.requireGainer && !cards.some((c) => c.roles.includes("gain"))) return false;

  if (filters.minVillages !== null) {
    const villages = cards.filter((c) => c.types.includes("Action") && c.plusActions >= 1).length;
    if (villages < filters.minVillages) return false;
  }

  // difficulty has no card-level equivalent — only applied when filtering Combinations
  return true;
}
