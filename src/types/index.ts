export type CardType =
  | "Action"
  | "Attack"
  | "Reaction"
  | "Treasure"
  | "Victory"
  | "Duration"
  | "Night"
  | "Reserve"
  | "Liaison"
  | "Omen"
  | "Prophecy"
  | "Ally"
  | "Way"
  | "Artifact"
  | "Event"
  | "Landmark"
  | "Project"
  | "Boon"
  | "Hex"
  | "Looter"
  | "Command";

export type CardRole =
  | "village"
  | "draw"
  | "economy"
  | "thinning"
  | "attack"
  | "reaction"
  | "gain"
  | "topdeck"
  | "discard"
  | "duration"
  | "payload"
  | "alt-victory"
  | "multiplier"
  | "sifting";

export interface Card {
  id: string;
  name: string;
  expansion: string;
  cost: number | string;
  types: CardType[];
  plusActions: number;
  plusBuys: number;
  plusCards: number;
  plusCoins: number;
  roles: CardRole[];
  notes: string;
  /** undefined = present in all editions of this expansion */
  edition?: 1 | 2;
}

export interface KingdomScore {
  overall: number;
  villageCoverage: number;
  drawAvailability: number;
  costCurve: number;
  terminalBalance: number;
  interaction: number;
  economy: number;
  strategicDiversity: number;
  thinningAccess: number;
}

export interface GeneratorConstraints {
  expansions: string[];
  costRange?: [number, number];
  minPlusActions?: number;
  minPlusBuys?: number;
  minPlusCards?: number;
  minPlusCoins?: number;
  requireRoles?: Partial<Record<CardRole, number>>;
  mustInclude?: string[];
  mustExclude?: string[];
  minScore?: number;
  /** Per-expansion edition override: 1 = first edition, 2 = second edition (default) */
  editionOverrides?: Record<string, 1 | 2>;
}

export interface Combination {
  id: string;
  name: string;
  expansions: string[];
  cards: string[];
  nonSupplyCard?: string;
  strategy: string;
  keyCards: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  tags: string[];
}

export interface Expansion {
  id: string;
  name: string;
  year: number;
  color: string;
  /** True if this expansion has 1st and 2nd editions with different card lists */
  hasEditions?: boolean;
  /** Year each edition was released */
  editionYears?: { 1: number; 2: number };
}

// ── Non-supply cards (Events, Ways, Projects, Landmarks, Traits, Allies) ──────

export type NonSupplyType =
  | "event"
  | "way"
  | "project"
  | "landmark"
  | "trait"
  | "ally";

export interface NonSupplyCard {
  id: string;
  name: string;
  expansion: string;
  type: NonSupplyType;
  /** Cost in coins; some events cost Debt (string like "4D") */
  cost?: number | string;
  description: string;
}

/** How many non-supply cards of each type to include per kingdom */
export interface NonSupplyCounts {
  events: number;
  ways: number;
  projects: number;
  landmarks: number;
  traits: number;
}

export interface SelectedNonSupply {
  events?: NonSupplyCard[];
  way?: NonSupplyCard;
  projects?: NonSupplyCard[];
  landmark?: NonSupplyCard;
  traits?: NonSupplyCard[];
  ally?: NonSupplyCard;
}

// ── Physical component requirements ───────────────────────────────────────────

export interface ComponentRequirement {
  id: string;
  name: string;
  /** Why this component is needed */
  reason: string;
  /** Which card/expansion triggers this requirement */
  triggeredBy: string;
}
