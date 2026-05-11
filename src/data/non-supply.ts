import type { NonSupplyCard } from "@/types";

// ── ADVENTURES – Events ───────────────────────────────────────────────────────

const ADVENTURES_EVENTS: NonSupplyCard[] = [
  { id: "ev-alms",            name: "Alms",            expansion: "adventures", type: "event", cost: 0,  description: "Once per turn: if no Treasure in play, gain a card costing up to $4." },
  { id: "ev-ball",            name: "Ball",            expansion: "adventures", type: "event", cost: 5,  description: "Take a -$1 token; gain 2 cards each costing up to $4." },
  { id: "ev-borrow",         name: "Borrow",          expansion: "adventures", type: "event", cost: 0,  description: "Once per turn: +1 Buy; take a -1 Card token (−1 card drawn next shuffle); +$1." },
  { id: "ev-expedition",     name: "Expedition",      expansion: "adventures", type: "event", cost: 3,  description: "Draw 2 extra cards for your next hand." },
  { id: "ev-ferry",          name: "Ferry",           expansion: "adventures", type: "event", cost: 3,  description: "Move your -$2 cost token to an Action supply pile (cards from that pile cost $2 less on your turns)." },
  { id: "ev-inheritance",    name: "Inheritance",     expansion: "adventures", type: "event", cost: 7,  description: "Once per game: set aside a non-Victory Action card costing up to $4; Estates gain its abilities." },
  { id: "ev-pathfinding",    name: "Pathfinding",     expansion: "adventures", type: "event", cost: 8,  description: "Move your +1 Card token to an Action supply pile (cards from that pile give +1 Card when played)." },
  { id: "ev-pilgrimage",     name: "Pilgrimage",      expansion: "adventures", type: "event", cost: 4,  description: "Once per turn: flip Journey token; if face-up, gain a copy of up to 3 in-play cards." },
  { id: "ev-plan",           name: "Plan",            expansion: "adventures", type: "event", cost: 3,  description: "Move your Trashing token to an Action supply pile; when you buy a card from it, you may trash a card from hand." },
  { id: "ev-quest",          name: "Quest",           expansion: "adventures", type: "event", cost: 0,  description: "Discard an Attack card, or 2 Curses, or 6 cards; if you did, gain a Gold." },
  { id: "ev-raid",           name: "Raid",            expansion: "adventures", type: "event", cost: 5,  description: "Gain a Silver per card in hand; each player who has more cards in hand than you places a -1 Card token on their deck." },
  { id: "ev-scouting-party", name: "Scouting Party",  expansion: "adventures", type: "event", cost: 2,  description: "+1 Buy; look at the top 5 cards of your deck, discard 3, put the rest back in any order." },
  { id: "ev-seaway",         name: "Seaway",          expansion: "adventures", type: "event", cost: 4,  description: "Gain an Action card costing up to $4; move your +1 Buy token to that card's supply pile." },
  { id: "ev-trade",          name: "Trade",           expansion: "adventures", type: "event", cost: 5,  description: "Trash up to 2 cards from your hand; gain a Silver per trashed card." },
  { id: "ev-training",       name: "Training",        expansion: "adventures", type: "event", cost: 6,  description: "Move your +$1 token to an Action supply pile (cards from that pile give +$1 when played)." },
  { id: "ev-travelling-fair",name: "Travelling Fair",  expansion: "adventures", type: "event", cost: 2,  description: "+2 Buys; when you gain a card this turn, you may topdeck it." },
];

// ── ADVENTURES – Landmarks ────────────────────────────────────────────────────

const ADVENTURES_LANDMARKS: NonSupplyCard[] = [
  { id: "lm-aqueduct",       name: "Aqueduct",        expansion: "adventures", type: "landmark", description: "When you gain a Silver or Gold, take 1VP from the Aqueduct pile (starts with 8VP). At game end, take remaining VP." },
  { id: "lm-arena",          name: "Arena",           expansion: "adventures", type: "landmark", description: "At the start of your Buy phase, you may discard an Action card for 2VP from the Arena pile (starts with 6VP per player)." },
  { id: "lm-bandit-fort",    name: "Bandit Fort",     expansion: "adventures", type: "landmark", description: "At game end, −2VP per Silver and −2VP per Gold in your deck." },
  { id: "lm-battlefield",    name: "Battlefield",     expansion: "adventures", type: "landmark", description: "When a Province is gained, take 2VP from the Battlefield pile (starts with 6VP per player)." },
  { id: "lm-colonnade",      name: "Colonnade",       expansion: "adventures", type: "landmark", description: "When you buy an Action card you already have a copy of in play, take 2VP from the Colonnade pile (starts with 6VP per player)." },
  { id: "lm-defiled-shrine", name: "Defiled Shrine",  expansion: "adventures", type: "landmark", description: "When you gain a card from an Action pile, move 1VP from it to your Defiled Shrine mat. Take them all when the Curse pile is empty." },
  { id: "lm-fountain",       name: "Fountain",        expansion: "adventures", type: "landmark", description: "At game end, +15VP if you have at least 10 Coppers in your deck." },
  { id: "lm-keep",           name: "Keep",            expansion: "adventures", type: "landmark", description: "At game end, +5VP for each type of Treasure you have the most of (or tied for most) among all players." },
  { id: "lm-labyrinth",      name: "Labyrinth",       expansion: "adventures", type: "landmark", description: "When you gain your second card in one turn, take 2VP from the Labyrinth pile (starts with 6VP per player)." },
  { id: "lm-mountain-pass",  name: "Mountain Pass",   expansion: "adventures", type: "landmark", description: "When the first Province is gained, players bid Debt tokens; highest bidder takes 8VP but owes that much Debt." },
  { id: "lm-museum",         name: "Museum",          expansion: "adventures", type: "landmark", description: "At game end, +2VP per differently named card in your deck." },
  { id: "lm-obelisk",        name: "Obelisk",         expansion: "adventures", type: "landmark", description: "Choose a Kingdom supply pile at setup; at game end, +2VP per card from that pile in your deck." },
  { id: "lm-orchard",        name: "Orchard",         expansion: "adventures", type: "landmark", description: "At game end, +4VP for each Action supply pile from which you have at least 3 differently named cards." },
  { id: "lm-palace",         name: "Palace",          expansion: "adventures", type: "landmark", description: "At game end, +3VP per matched set of one Copper, one Silver, and one Gold in your deck." },
  { id: "lm-ritual",         name: "Ritual",          expansion: "adventures", type: "landmark", description: "When you buy a Curse, trash a card from hand; +VP equal to its cost in coins." },
  { id: "lm-saltmarsh",      name: "Saltmarsh",       expansion: "adventures", type: "landmark", description: "When you gain a Treasure costing at least $3, take 1VP from the Saltmarsh pile (starts with 4VP per player)." },
  { id: "lm-tomb",           name: "Tomb",            expansion: "adventures", type: "landmark", description: "When you trash a card, +1VP." },
  { id: "lm-tower",          name: "Tower",           expansion: "adventures", type: "landmark", description: "At game end, +1VP per non-Victory card in your deck from any empty supply pile." },
  { id: "lm-triumphal-arch", name: "Triumphal Arch",  expansion: "adventures", type: "landmark", description: "At game end, +3VP per copy of the second most common Action card in your deck (fewest copies if tied)." },
  { id: "lm-wall",           name: "Wall",            expansion: "adventures", type: "landmark", description: "At game end, −1VP per card in your deck beyond 15." },
  { id: "lm-wolf-den",       name: "Wolf Den",        expansion: "adventures", type: "landmark", description: "At game end, −3VP per card type in your deck of which you have exactly one copy." },
];

// ── EMPIRES – Events ──────────────────────────────────────────────────────────

const EMPIRES_EVENTS: NonSupplyCard[] = [
  { id: "ev-annex",      name: "Annex",       expansion: "empires", type: "event", cost: "8D",  description: "Set aside your deck; shuffle your discard into a new deck; gain a Duchy." },
  { id: "ev-banquet",    name: "Banquet",     expansion: "empires", type: "event", cost: 3,    description: "Gain 2 Coppers and a non-Victory card costing up to $5." },
  { id: "ev-conquest",   name: "Conquest",    expansion: "empires", type: "event", cost: 6,    description: "Gain 2 Silvers; +1VP per Silver you've gained this turn." },
  { id: "ev-delve",      name: "Delve",       expansion: "empires", type: "event", cost: 2,    description: "+1 Buy; gain a Silver." },
  { id: "ev-dominate",   name: "Dominate",    expansion: "empires", type: "event", cost: 14,   description: "Gain a Province; if you did, +9VP." },
  { id: "ev-donate",     name: "Donate",      expansion: "empires", type: "event", cost: "8D",  description: "After this turn, put all your cards in hand and play, deck, and discard into your hand; trash any number; shuffle the rest into a new deck." },
  { id: "ev-ritual",     name: "Ritual",      expansion: "empires", type: "event", cost: 4,    description: "Gain a Curse; trash a card from your hand; +VP equal to its cost in coins." },
  { id: "ev-salt-earth", name: "Salt the Earth",expansion: "empires", type: "event", cost: 4,  description: "+1VP; trash a Victory card from the supply." },
  { id: "ev-tax",        name: "Tax",         expansion: "empires", type: "event", cost: 2,    description: "Add 2 Debt to a supply pile; players who buy cards from that pile take the Debt." },
  { id: "ev-triumph",    name: "Triumph",     expansion: "empires", type: "event", cost: "5D",  description: "Gain an Estate; +1VP per card you've gained this turn." },
  { id: "ev-toil",       name: "Toil",        expansion: "empires", type: "event", cost: 2,    description: "+1 Buy; you may play an Action card from your hand." },
  { id: "ev-wedding",    name: "Wedding",     expansion: "empires", type: "event", cost: "4+3D",description: "+1VP; gain a Gold." },
  { id: "ev-windfall",   name: "Windfall",    expansion: "empires", type: "event", cost: 5,    description: "If your deck and discard pile are both empty, gain 3 Golds." },
];

// ── MENAGERIE – Events ────────────────────────────────────────────────────────

const MENAGERIE_EVENTS: NonSupplyCard[] = [
  { id: "ev-alliance",    name: "Alliance",     expansion: "menagerie", type: "event", cost: 10, description: "Gain a Province, a Duchy, an Estate, a Gold, a Silver, and a Copper." },
  { id: "ev-banish",      name: "Banish",       expansion: "menagerie", type: "event", cost: 4,  description: "Exile any number of cards with the same name from your hand." },
  { id: "ev-bargain",     name: "Bargain",      expansion: "menagerie", type: "event", cost: 4,  description: "Gain a non-Victory card costing up to $5; each other player gains a Horse." },
  { id: "ev-commerce",    name: "Commerce",     expansion: "menagerie", type: "event", cost: 5,  description: "+1 Favor; gain a Gold per differently named card you've gained this turn." },
  { id: "ev-delay",       name: "Delay",        expansion: "menagerie", type: "event", cost: 0,  description: "You may set aside an Action card from your hand; put it into your hand at the start of your next turn." },
  { id: "ev-demand",      name: "Demand",       expansion: "menagerie", type: "event", cost: 5,  description: "Gain a Horse and a card costing up to $4, both onto your deck." },
  { id: "ev-desperation", name: "Desperation",  expansion: "menagerie", type: "event", cost: 0,  description: "Once per turn: gain a Curse; +$2." },
  { id: "ev-enclave",     name: "Enclave",      expansion: "menagerie", type: "event", cost: 8,  description: "Gain a Gold; Exile a Duchy from the supply." },
  { id: "ev-enhance",     name: "Enhance",      expansion: "menagerie", type: "event", cost: 3,  description: "You may trash a non-Victory card from your hand; gain a card costing up to $2 more than it." },
  { id: "ev-gamble",      name: "Gamble",       expansion: "menagerie", type: "event", cost: 2,  description: "+1 Buy; reveal the top card of your deck; if it's an Action or Treasure, you may play it; otherwise discard it." },
  { id: "ev-invest",      name: "Invest",       expansion: "menagerie", type: "event", cost: 4,  description: "Exile a card from the supply; +1 Favor per copy of it in your deck and Exile." },
  { id: "ev-march",       name: "March",        expansion: "menagerie", type: "event", cost: 3,  description: "Look through your discard pile; you may play an Action card from it." },
  { id: "ev-populate",    name: "Populate",     expansion: "menagerie", type: "event", cost: 10, description: "Gain one card from each Action supply pile." },
  { id: "ev-pursue",      name: "Pursue",       expansion: "menagerie", type: "event", cost: 2,  description: "Name a card; +1 Buy; look at the top 4 cards of your deck; put the named card(s) back and discard the rest." },
  { id: "ev-reap",        name: "Reap",         expansion: "menagerie", type: "event", cost: 7,  description: "Gain a Gold; set it aside; at the start of your next turn, play it." },
  { id: "ev-ride",        name: "Ride",         expansion: "menagerie", type: "event", cost: 2,  description: "Gain a Horse." },
  { id: "ev-seize-day",   name: "Seize the Day",expansion: "menagerie", type: "event", cost: 4,  description: "Once per game: take an extra turn after this one." },
  { id: "ev-stampede",    name: "Stampede",     expansion: "menagerie", type: "event", cost: 5,  description: "If you have 5 or fewer cards in play, gain 5 Horses onto your deck." },
  { id: "ev-toil-men",    name: "Toil",         expansion: "menagerie", type: "event", cost: 2,  description: "+1 Buy; you may play an Action card from your hand." },
  { id: "ev-transport",   name: "Transport",    expansion: "menagerie", type: "event", cost: 3,  description: "Choose: Exile an Action card from the supply; or put an Action card you have in Exile into your hand." },
];

// ── MENAGERIE – Ways ──────────────────────────────────────────────────────────

const MENAGERIE_WAYS: NonSupplyCard[] = [
  { id: "way-butterfly", name: "Way of the Butterfly", expansion: "menagerie", type: "way", description: "You may exchange this for a card from the supply costing exactly $1 more." },
  { id: "way-camel",     name: "Way of the Camel",     expansion: "menagerie", type: "way", description: "Exile a Gold from the supply." },
  { id: "way-chameleon", name: "Way of the Chameleon", expansion: "menagerie", type: "way", description: "This turn, each time you would draw a card, +$1 instead; and each time you would get +$1, draw a card instead." },
  { id: "way-frog",      name: "Way of the Frog",      expansion: "menagerie", type: "way", description: "+1 Action; at the end of your Action phase, put this on top of your deck." },
  { id: "way-horse",     name: "Way of the Horse",     expansion: "menagerie", type: "way", description: "+2 Cards, +1 Action; return this to its supply pile." },
  { id: "way-mole",      name: "Way of the Mole",      expansion: "menagerie", type: "way", description: "+1 Action; discard your hand; +3 Cards." },
  { id: "way-monkey",    name: "Way of the Monkey",    expansion: "menagerie", type: "way", description: "+1 Buy, +$1." },
  { id: "way-mouse",     name: "Way of the Mouse",     expansion: "menagerie", type: "way", description: "Set aside a non-Way Action card at game start; each time you use Way of the Mouse, follow that card's instructions instead." },
  { id: "way-mule",      name: "Way of the Mule",      expansion: "menagerie", type: "way", description: "+1 Action, +$1." },
  { id: "way-otter",     name: "Way of the Otter",     expansion: "menagerie", type: "way", description: "+2 Cards." },
  { id: "way-owl",       name: "Way of the Owl",       expansion: "menagerie", type: "way", description: "Draw until you have 6 cards in hand." },
  { id: "way-pig",       name: "Way of the Pig",       expansion: "menagerie", type: "way", description: "+1 Card, +1 Action." },
  { id: "way-rat",       name: "Way of the Rat",       expansion: "menagerie", type: "way", description: "Discard a card from your hand; gain a copy of this card." },
  { id: "way-seal",      name: "Way of the Seal",      expansion: "menagerie", type: "way", description: "+$1; this turn, when you gain a card, you may topdeck it." },
  { id: "way-squirrel",  name: "Way of the Squirrel",  expansion: "menagerie", type: "way", description: "+2 Buys at end of this turn." },
  { id: "way-turtle",    name: "Way of the Turtle",    expansion: "menagerie", type: "way", description: "Set this aside; play it at the start of your next turn." },
  { id: "way-worm",      name: "Way of the Worm",      expansion: "menagerie", type: "way", description: "Exile an Estate from the supply." },
];

// ── RENAISSANCE – Projects ────────────────────────────────────────────────────

const RENAISSANCE_PROJECTS: NonSupplyCard[] = [
  { id: "proj-academy",       name: "Academy",       expansion: "renaissance", type: "project", cost: 5,  description: "When you gain an Action card, +1 Villager." },
  { id: "proj-barracks",      name: "Barracks",      expansion: "renaissance", type: "project", cost: 6,  description: "At the start of your turn, you may spend a Villager to gain +1 Action this turn." },
  { id: "proj-canal",         name: "Canal",         expansion: "renaissance", type: "project", cost: 7,  description: "During your turns, cards cost $1 less (but not less than $0)." },
  { id: "proj-capitalism",    name: "Capitalism",    expansion: "renaissance", type: "project", cost: 5,  description: "During your turns, Actions with +$ in their text are also Treasures." },
  { id: "proj-cathedral",     name: "Cathedral",     expansion: "renaissance", type: "project", cost: 3,  description: "At the start of your turn, trash a card from your hand." },
  { id: "proj-citadel",       name: "Citadel",       expansion: "renaissance", type: "project", cost: 8,  description: "At the start of your turn, play your first Action card twice." },
  { id: "proj-city-gate",     name: "City Gate",     expansion: "renaissance", type: "project", cost: 3,  description: "At the start of your turn, +1 Card; then put a card from your hand on top of your deck." },
  { id: "proj-crop-rotation", name: "Crop Rotation", expansion: "renaissance", type: "project", cost: 6,  description: "At the start of your turn, you may discard a Victory card for +2 Cards." },
  { id: "proj-exploration",   name: "Exploration",   expansion: "renaissance", type: "project", cost: 4,  description: "At the end of your Buy phase, if you didn't buy any cards, +1 Coffer and +1 Villager." },
  { id: "proj-fair",          name: "Fair",          expansion: "renaissance", type: "project", cost: 4,  description: "At the start of your turn, +1 Buy." },
  { id: "proj-fleet",         name: "Fleet",         expansion: "renaissance", type: "project", cost: 5,  description: "After the game ends, players who have this take one final turn." },
  { id: "proj-guildhall",     name: "Guildhall",     expansion: "renaissance", type: "project", cost: 5,  description: "When you gain a Treasure, +1 Coffer." },
  { id: "proj-innovation",    name: "Innovation",    expansion: "renaissance", type: "project", cost: 6,  description: "Once per turn: when you gain an Action card, set it aside and play it." },
  { id: "proj-pageant",       name: "Pageant",       expansion: "renaissance", type: "project", cost: 3,  description: "At the end of your Buy phase, you may pay $1 for +1 Coffer." },
  { id: "proj-piazza",        name: "Piazza",        expansion: "renaissance", type: "project", cost: 5,  description: "At the start of your turn, reveal the top card of your deck; if it's an Action, play it." },
  { id: "proj-road-network",  name: "Road Network",  expansion: "renaissance", type: "project", cost: 5,  description: "When another player gains a Victory card, +1 Card." },
  { id: "proj-sewers",        name: "Sewers",        expansion: "renaissance", type: "project", cost: 3,  description: "When you trash a card other than by Sewers, you may trash a card from your hand." },
  { id: "proj-silos",         name: "Silos",         expansion: "renaissance", type: "project", cost: 4,  description: "At the start of your turn, discard any Coppers for +1 Card each." },
  { id: "proj-sinister-plot", name: "Sinister Plot",  expansion: "renaissance", type: "project", cost: 4,  description: "At the start of your turn, add a token here or remove all tokens for +1 Card each." },
  { id: "proj-star-chart",    name: "Star Chart",    expansion: "renaissance", type: "project", cost: 3,  description: "When you shuffle, you may put one of the shuffled cards on top." },
];

// ── PLUNDER – Events ──────────────────────────────────────────────────────────

const PLUNDER_EVENTS: NonSupplyCard[] = [
  { id: "ev-bury",     name: "Bury",     expansion: "plunder", type: "event", cost: 1, description: "+1 Buy; put your discard pile under your deck." },
  { id: "ev-avoid",    name: "Avoid",    expansion: "plunder", type: "event", cost: 2, description: "+1 Buy; put up to 3 cards from the top of your deck into your discard." },
  { id: "ev-deliver",  name: "Deliver",  expansion: "plunder", type: "event", cost: 2, description: "+1 Buy; this turn, the next time you gain a card, set it aside and put it into your hand at the end of the turn." },
  { id: "ev-peril",    name: "Peril",    expansion: "plunder", type: "event", cost: 2, description: "You may trash an Action card from your hand; if you did, gain Loot." },
  { id: "ev-rush",     name: "Rush",     expansion: "plunder", type: "event", cost: 0, description: "+1 Buy; the next time you gain an Action card this turn, put it into your hand." },
  { id: "ev-foray",    name: "Foray",    expansion: "plunder", type: "event", cost: 3, description: "Discard 3 cards with different names; if you did, gain Loot." },
  { id: "ev-launch",   name: "Launch",   expansion: "plunder", type: "event", cost: 3, description: "Once per turn: +1 Card, +1 Action, +1 Buy; return this to the Supply." },
  { id: "ev-mirror",   name: "Mirror",   expansion: "plunder", type: "event", cost: 3, description: "+1 Buy; this turn, the next time you gain an Action card, gain a copy of it." },
  { id: "ev-prepare",  name: "Prepare",  expansion: "plunder", type: "event", cost: 0, description: "Set aside your hand face-down; at the start of your next turn, play those cards one at a time in any order." },
  { id: "ev-scrounge", name: "Scrounge", expansion: "plunder", type: "event", cost: 3, description: "Choose: trash a card from your hand; or gain an Estate and gain a card costing up to $5." },
  { id: "ev-journey",  name: "Journey",  expansion: "plunder", type: "event", cost: 4, description: "+1 Buy; you may return an Action card from your hand to its supply pile; gain a non-Victory card costing up to $6." },
  { id: "ev-maelstrom",name: "Maelstrom",expansion: "plunder", type: "event", cost: 3, description: "+1 Buy; trash a card from your hand; each other player with 3+ cards trashes a card from their hand." },
];

// ── PLUNDER – Traits ──────────────────────────────────────────────────────────

const PLUNDER_TRAITS: NonSupplyCard[] = [
  { id: "trait-cheap",     name: "Cheap",     expansion: "plunder", type: "trait", description: "Cards from this pile cost $1 less (to a minimum of $0)." },
  { id: "trait-cursed",    name: "Cursed",    expansion: "plunder", type: "trait", description: "When you gain a card from this pile, gain a Curse." },
  { id: "trait-fated",     name: "Fated",     expansion: "plunder", type: "trait", description: "When you shuffle, you may look through your deck and put any cards from this pile on top or bottom." },
  { id: "trait-fawning",   name: "Fawning",   expansion: "plunder", type: "trait", description: "When you gain a Province, gain a card from this pile." },
  { id: "trait-friendly",  name: "Friendly",  expansion: "plunder", type: "trait", description: "At the end of your Buy phase, you may discard a card from this pile from your hand for +1 Buy." },
  { id: "trait-hasty",     name: "Hasty",     expansion: "plunder", type: "trait", description: "When you gain a card from this pile, set it aside; put it into your hand at the start of your next turn." },
  { id: "trait-inherited", name: "Inherited", expansion: "plunder", type: "trait", description: "Set aside a starting Estate; replace it with a card from this pile." },
  { id: "trait-inspiring", name: "Inspiring", expansion: "plunder", type: "trait", description: "When you play a card from this pile, if you haven't played an Action since your last turn, +1 Action." },
  { id: "trait-nearby",    name: "Nearby",    expansion: "plunder", type: "trait", description: "When you buy a card, you may also gain a card from this pile." },
  { id: "trait-patient",   name: "Patient",   expansion: "plunder", type: "trait", description: "At the end of your Buy phase, you may set aside any cards from this pile from your hand; return them to your hand at the start of your next turn." },
  { id: "trait-pious",     name: "Pious",     expansion: "plunder", type: "trait", description: "When you gain a card from this pile, you may trash a card from your hand." },
  { id: "trait-reckless",  name: "Reckless",  expansion: "plunder", type: "trait", description: "Follow the instructions of cards from this pile twice; return the card to its supply pile after playing." },
  { id: "trait-rich",      name: "Rich",      expansion: "plunder", type: "trait", description: "When you gain a card from this pile, gain a Silver." },
  { id: "trait-shy",       name: "Shy",       expansion: "plunder", type: "trait", description: "At the start of your turn, you may discard a card from this pile from your hand for +2 Cards." },
  { id: "trait-tireless",  name: "Tireless",  expansion: "plunder", type: "trait", description: "When you discard a card from this pile from play, set it aside; put it into your hand at the end of your turn." },
];

// ── Combined exports ──────────────────────────────────────────────────────────

export const NON_SUPPLY_CARDS: NonSupplyCard[] = [
  ...ADVENTURES_EVENTS,
  ...ADVENTURES_LANDMARKS,
  ...EMPIRES_EVENTS,
  ...MENAGERIE_EVENTS,
  ...MENAGERIE_WAYS,
  ...RENAISSANCE_PROJECTS,
  ...PLUNDER_EVENTS,
  ...PLUNDER_TRAITS,
];

export const NON_SUPPLY_BY_EXPANSION: Record<string, NonSupplyCard[]> = {
  adventures: [...ADVENTURES_EVENTS, ...ADVENTURES_LANDMARKS],
  empires:    [...EMPIRES_EVENTS],
  menagerie:  [...MENAGERIE_EVENTS, ...MENAGERIE_WAYS],
  renaissance:[...RENAISSANCE_PROJECTS],
  plunder:    [...PLUNDER_EVENTS, ...PLUNDER_TRAITS],
};

export const NON_SUPPLY_MAP = Object.fromEntries(
  NON_SUPPLY_CARDS.map((c) => [c.id, c])
);

/** How many of each non-supply type to include when that expansion is represented */
export const NON_SUPPLY_COUNTS: Record<string, { events?: number; ways?: number; projects?: number; landmarks?: number; traits?: number }> = {
  adventures:  { events: 2, landmarks: 1 },
  empires:     { events: 2, landmarks: 1 },
  menagerie:   { events: 2, ways: 1 },
  renaissance: { projects: 2 },
  plunder:     { events: 2, traits: 2 },
};

/** Given a set of expansion IDs in the kingdom, return the non-supply cards to suggest */
export function selectNonSupply(expansionIds: string[]): {
  events: NonSupplyCard[];
  way: NonSupplyCard | undefined;
  projects: NonSupplyCard[];
  landmark: NonSupplyCard | undefined;
  traits: NonSupplyCard[];
} {
  const shuffle = <T>(arr: T[]): T[] => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const pick = <T>(arr: T[], n: number): T[] => shuffle(arr).slice(0, n);

  const eventPool:   NonSupplyCard[] = [];
  const wayPool:     NonSupplyCard[] = [];
  const projectPool: NonSupplyCard[] = [];
  const landmarkPool:NonSupplyCard[] = [];
  const traitPool:   NonSupplyCard[] = [];

  for (const expId of expansionIds) {
    const cards = NON_SUPPLY_BY_EXPANSION[expId] ?? [];
    for (const c of cards) {
      if (c.type === "event")    eventPool.push(c);
      else if (c.type === "way") wayPool.push(c);
      else if (c.type === "project") projectPool.push(c);
      else if (c.type === "landmark") landmarkPool.push(c);
      else if (c.type === "trait") traitPool.push(c);
    }
  }

  const hasProjects  = expansionIds.includes("renaissance");
  const hasWays      = expansionIds.includes("menagerie");
  const hasLandmarks = expansionIds.some((e) => e === "adventures" || e === "empires");
  const hasTraits    = expansionIds.includes("plunder");
  const hasEvents    = expansionIds.some((e) => NON_SUPPLY_BY_EXPANSION[e]?.some((c) => c.type === "event"));

  return {
    events:   hasEvents    ? pick(eventPool, 2)   : [],
    way:      hasWays      ? pick(wayPool, 1)[0]   : undefined,
    projects: hasProjects  ? pick(projectPool, 2)  : [],
    landmark: hasLandmarks ? pick(landmarkPool, 1)[0] : undefined,
    traits:   hasTraits    ? pick(traitPool, 2)   : [],
  };
}
