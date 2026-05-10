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
  plusActions: number;   // how many +Actions the card gives
  plusBuys: number;      // how many +Buys the card gives
  roles: CardRole[];
  notes: string;
}

export interface Combination {
  id: string;
  name: string;
  expansions: string[];       // sorted; must exactly match user selection
  cards: string[];            // exactly 10 card IDs (Kingdom supply cards)
  nonSupplyCard?: string;     // optional 11th card (non-supply, e.g. Horse)
  strategy: string;           // 1–3 sentence description of how to play it
  keyCards: string[];         // 2–3 card IDs to highlight as the engine core
  difficulty: "beginner" | "intermediate" | "advanced";
  tags: string[];             // e.g. ["engine", "attack-heavy", "alt-victory"]
}

export interface Expansion {
  id: string;
  name: string;
  year: number;
  color: string;             // tailwind bg color class for UI theming
}
