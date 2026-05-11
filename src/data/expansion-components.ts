import type { Card, ComponentRequirement } from "@/types";

// ── Per-expansion base components ─────────────────────────────────────────────
// These are always needed when that expansion is in the kingdom.

const EXPANSION_BASE_COMPONENTS: Record<string, ComponentRequirement[]> = {
  prosperity: [
    { id: "platinum-colony", name: "Platinum & Colony",    reason: "Prosperity adds a Platinum ($5 Treasure) and Colony (10VP) to the supply.", triggeredBy: "prosperity" },
    { id: "vp-tokens",       name: "VP tokens",             reason: "Several Prosperity cards (Bishop, Monument, etc.) award Victory Point tokens.", triggeredBy: "prosperity" },
  ],
  "dark-ages": [
    { id: "ruins",    name: "Ruins pile (5 types)",  reason: "Looter cards cause opponents to gain Ruins. Keep a shuffled Ruins deck.", triggeredBy: "dark-ages" },
    { id: "spoils",   name: "Spoils pile",            reason: "Several Dark Ages cards (Marauder, Bandit Camp, Pillage) grant Spoils.", triggeredBy: "dark-ages" },
    { id: "shelters", name: "Shelters",               reason: "Dark Ages replaces starting Estates with Shelters (Necropolis, Hovel, Overgrown Estate).", triggeredBy: "dark-ages" },
  ],
  nocturne: [
    { id: "boons",          name: "Boons deck",             reason: "Fate cards reward players with a Boon from the shuffled Boon deck.", triggeredBy: "nocturne" },
    { id: "hexes",          name: "Hexes deck",             reason: "Doom cards inflict a Hex from the shuffled Hex deck on opponents.", triggeredBy: "nocturne" },
    { id: "will-o-wisp",    name: "Will-o'-Wisps pile",     reason: "Certain Nocturne cards can gain Will-o'-Wisps (non-supply Spirit).", triggeredBy: "nocturne" },
    { id: "imp-pile",       name: "Imps pile",              reason: "Several Nocturne cards can gain Imps (non-supply Spirit).", triggeredBy: "nocturne" },
    { id: "ghost-pile",     name: "Ghosts pile",            reason: "Exorcist can gain Ghosts (non-supply Spirit).", triggeredBy: "nocturne" },
  ],
  renaissance: [
    { id: "coffers",   name: "Coffers tokens & mat",  reason: "Many Renaissance cards produce Coffers (saved coin tokens). Use the Coffers mat to track them.", triggeredBy: "renaissance" },
    { id: "villagers", name: "Villagers tokens & mat", reason: "Some Renaissance cards produce Villagers (saved action tokens). Use the Villagers mat.", triggeredBy: "renaissance" },
  ],
  guilds: [
    { id: "coffers-guilds", name: "Coffers tokens & mat", reason: "Guilds cards use Coffer tokens (same mechanic as Renaissance Coffers). Use a Coffers mat.", triggeredBy: "guilds" },
  ],
  menagerie: [
    { id: "exile-mats", name: "Exile mats (one per player)", reason: "Several Menagerie cards and Events exile cards. Each player needs an Exile mat.", triggeredBy: "menagerie" },
    { id: "horses",     name: "Horses pile",                  reason: "Many Menagerie cards and Events grant Horses (non-supply Action cards).", triggeredBy: "menagerie" },
  ],
  allies: [
    { id: "favor-tokens", name: "Favor tokens",  reason: "Allies uses Favor tokens earned by Liaison cards and spent at Ally cards.", triggeredBy: "allies" },
    { id: "ally-card",    name: "Ally card",      reason: "One random Ally card is placed beside the Kingdom and governs Favor use.", triggeredBy: "allies" },
  ],
  plunder: [
    { id: "loot",         name: "Loot pile",      reason: "Several Plunder cards and Events grant Loot (random powerful Treasures from a shuffled deck).", triggeredBy: "plunder" },
  ],
  adventures: [
    { id: "tavern-mat",     name: "Tavern mat",            reason: "Reserve cards and certain Events use the Tavern mat to set cards aside.", triggeredBy: "adventures" },
    { id: "journey-tokens", name: "Journey tokens",        reason: "Several Adventures cards and Events use a per-player flip Journey token.", triggeredBy: "adventures" },
    { id: "plus-tokens",    name: "Bonus tokens (set)",    reason: "Adventures uses +Card, +Action, +Buy, +Coin, −Cost, Trashing, and −1 Card tokens placed on supply piles.", triggeredBy: "adventures" },
  ],
  empires: [
    { id: "debt-tokens",  name: "Debt tokens",    reason: "Several Empires cards and Events cost or accumulate Debt tokens instead of coin.", triggeredBy: "empires" },
    { id: "vp-tokens-emp","name": "VP tokens",   reason: "Landmarks and some Empires cards track points with VP tokens during play.", triggeredBy: "empires" },
  ],
};

// ── Per-card triggered components ─────────────────────────────────────────────
// These are only needed when a specific card is in the kingdom.

interface CardTrigger {
  /** Substring match on card ID, or exact match */
  cardId: string;
  components: ComponentRequirement[];
}

const CARD_TRIGGERS: CardTrigger[] = [
  // Seaside
  { cardId: "native-village",  components: [{ id: "native-village-mat", name: "Native Village mat", reason: "Native Village sets cards aside on its own mat.", triggeredBy: "Native Village" }] },
  { cardId: "island",          components: [{ id: "island-mat",          name: "Island mat",         reason: "Island sets aside itself and a card from hand on its mat.", triggeredBy: "Island" }] },
  { cardId: "pirate-ship",     components: [{ id: "pirate-ship-mat",     name: "Pirate Ship mat",    reason: "Pirate Ship stores Coin tokens on its mat.", triggeredBy: "Pirate Ship" }] },
  { cardId: "embargo",         components: [{ id: "embargo-tokens",      name: "Embargo tokens",     reason: "Embargo places Embargo tokens on supply piles.", triggeredBy: "Embargo" }] },
  // Prosperity
  { cardId: "trade-route",     components: [{ id: "trade-route-mat",     name: "Trade Route mat",    reason: "Trade Route tracks a token per Victory supply pile emptied.", triggeredBy: "Trade Route" }] },
  { cardId: "bishop",          components: [{ id: "vp-tokens",           name: "VP tokens",          reason: "Bishop awards VP tokens for trashed cards.", triggeredBy: "Bishop" }] },
  { cardId: "monument",        components: [{ id: "vp-tokens",           name: "VP tokens",          reason: "Monument gives +1VP token when played.", triggeredBy: "Monument" }] },
  { cardId: "goons",           components: [{ id: "vp-tokens",           name: "VP tokens",          reason: "Goons gives +1VP token per card bought while in play.", triggeredBy: "Goons" }] },
  { cardId: "collection",      components: [{ id: "vp-tokens",           name: "VP tokens",          reason: "Collection awards VP tokens for gaining Actions.", triggeredBy: "Collection" }] },
  // Dark Ages
  { cardId: "hermit",          components: [{ id: "madman",              name: "Madman cards",       reason: "Hermit transforms into a Madman when no buy is made.", triggeredBy: "Hermit" }] },
  { cardId: "urchin",          components: [{ id: "mercenary",           name: "Mercenary cards",    reason: "Urchin can transform into a Mercenary.", triggeredBy: "Urchin" }] },
  // Cornucopia
  { cardId: "young-witch",     components: [{ id: "bane-card",           name: "Bane card (11th Kingdom pile)", reason: "Young Witch adds an 11th Kingdom pile costing $2–$3 as the Bane.", triggeredBy: "Young Witch" }] },
  { cardId: "tournament",      components: [{ id: "prizes",              name: "Prize cards (5)",    reason: "Tournament can gain one of five Prize cards (non-supply).", triggeredBy: "Tournament" }] },
  // Nocturne
  { cardId: "secret-cave",     components: [{ id: "magic-lamp",          name: "Magic Lamp heirloom", reason: "Secret Cave's starting player receives the Magic Lamp heirloom Treasure.", triggeredBy: "Secret Cave" }] },
  { cardId: "pooka",           components: [{ id: "cursed-gold",         name: "Cursed Gold heirloom",reason: "Pooka's starting player receives the Cursed Gold heirloom Treasure.", triggeredBy: "Pooka" }] },
  { cardId: "shepherd",        components: [{ id: "pasture",             name: "Pasture heirloom",   reason: "Shepherd's starting player receives the Pasture heirloom.", triggeredBy: "Shepherd" }] },
  { cardId: "tracker",         components: [{ id: "pouch",               name: "Pouch heirloom",     reason: "Tracker's starting player receives the Pouch heirloom.", triggeredBy: "Tracker" }] },
  { cardId: "cemetery",        components: [{ id: "haunted-mirror",      name: "Haunted Mirror heirloom", reason: "Cemetery's starting player receives the Haunted Mirror heirloom.", triggeredBy: "Cemetery" }] },
  { cardId: "druid",           components: [{ id: "druid-boons",         name: "3 set-aside Boons",  reason: "Druid uses 3 permanently set-aside Boons chosen at game start.", triggeredBy: "Druid" }] },
  // Adventures
  { cardId: "coin-of-the-realm",components: [{ id: "tavern-mat", name: "Tavern mat", reason: "Reserve cards use the Tavern mat.", triggeredBy: "Coin of the Realm" }] },
  { cardId: "ratcatcher",      components: [{ id: "tavern-mat",          name: "Tavern mat",         reason: "Reserve cards use the Tavern mat.", triggeredBy: "Ratcatcher" }] },
  { cardId: "duplicate",       components: [{ id: "tavern-mat",          name: "Tavern mat",         reason: "Reserve cards use the Tavern mat.", triggeredBy: "Duplicate" }] },
  { cardId: "guide",           components: [{ id: "tavern-mat",          name: "Tavern mat",         reason: "Reserve cards use the Tavern mat.", triggeredBy: "Guide" }] },
  { cardId: "transmogrify",    components: [{ id: "tavern-mat",          name: "Tavern mat",         reason: "Reserve cards use the Tavern mat.", triggeredBy: "Transmogrify" }] },
  { cardId: "distant-lands",   components: [{ id: "tavern-mat",          name: "Tavern mat",         reason: "Reserve cards use the Tavern mat.", triggeredBy: "Distant Lands" }] },
  { cardId: "royal-carriage",  components: [{ id: "tavern-mat",          name: "Tavern mat",         reason: "Reserve cards use the Tavern mat.", triggeredBy: "Royal Carriage" }] },
  { cardId: "wine-merchant",   components: [{ id: "tavern-mat",          name: "Tavern mat",         reason: "Reserve cards use the Tavern mat.", triggeredBy: "Wine Merchant" }] },
  { cardId: "miser",           components: [{ id: "tavern-mat",          name: "Tavern mat",         reason: "Miser stores Coppers on the Tavern mat.", triggeredBy: "Miser" }] },
  { cardId: "ranger",          components: [{ id: "journey-tokens",      name: "Journey token",      reason: "Ranger flips a Journey token to draw cards.", triggeredBy: "Ranger" }] },
  { cardId: "giant",           components: [{ id: "journey-tokens",      name: "Journey token",      reason: "Giant flips a Journey token for different effects.", triggeredBy: "Giant" }] },
  { cardId: "pilgrimage",      components: [{ id: "journey-tokens",      name: "Journey token",      reason: "Pilgrimage event uses a Journey token.", triggeredBy: "Pilgrimage event" }] },
  // Empires
  { cardId: "farmers-market",  components: [{ id: "vp-tokens-emp",       name: "VP tokens",          reason: "Farmers' Market accumulates VP tokens on its pile.", triggeredBy: "Farmers' Market" }] },
  { cardId: "chariot-race",    components: [{ id: "vp-tokens-emp",       name: "VP tokens",          reason: "Chariot Race can award VP tokens.", triggeredBy: "Chariot Race" }] },
  { cardId: "sacrifice",       components: [{ id: "vp-tokens-emp",       name: "VP tokens",          reason: "Sacrifice awards VP tokens for trashing Victory cards.", triggeredBy: "Sacrifice" }] },
  { cardId: "temple",          components: [{ id: "vp-tokens-emp",       name: "VP tokens",          reason: "Temple accumulates VP tokens on its pile.", triggeredBy: "Temple" }] },
  { cardId: "wild-hunt",       components: [{ id: "vp-tokens-emp",       name: "VP tokens",          reason: "Wild Hunt accumulates VP tokens on its pile.", triggeredBy: "Wild Hunt" }] },
  { cardId: "groundskeeper",   components: [{ id: "vp-tokens-emp",       name: "VP tokens",          reason: "Groundskeeper awards VP tokens for gaining Victory cards.", triggeredBy: "Groundskeeper" }] },
  // Allies
  { cardId: "bauble",          components: [{ id: "favor-tokens", name: "Favor tokens", reason: "Allies expansion uses Favor tokens.", triggeredBy: "Bauble" }] },
  { cardId: "sycophant",       components: [{ id: "favor-tokens", name: "Favor tokens", reason: "Sycophant spends Favor tokens.", triggeredBy: "Sycophant" }] },
  { cardId: "broker",          components: [{ id: "favor-tokens", name: "Favor tokens", reason: "Broker can give Favor tokens.", triggeredBy: "Broker" }] },
  // Renaissance Artifacts (specific cards)
  { cardId: "flag-bearer",     components: [{ id: "artifact-flag",   name: "Flag artifact",           reason: "Flag Bearer can take the Flag artifact (+1 Card at cleanup).", triggeredBy: "Flag Bearer" }] },
  { cardId: "swashbuckler",    components: [{ id: "artifact-chest",  name: "Treasure Chest artifact", reason: "Swashbuckler can take the Treasure Chest artifact when 3+ Coffers.", triggeredBy: "Swashbuckler" }] },
  { cardId: "treasurer",       components: [{ id: "artifact-key",    name: "Key artifact",            reason: "Treasurer can take the Key artifact (+$1 each turn).", triggeredBy: "Treasurer" }] },
  // Rising Sun
  { cardId: "toad",            components: [{ id: "hexes", name: "Hexes deck", reason: "Toad gains a Hex at start of next turn if still in play.", triggeredBy: "Toad" }] },
];

// ── Main detection function ────────────────────────────────────────────────────

export function detectRequiredComponents(
  cards: Card[],
  expansionIds: string[]
): ComponentRequirement[] {
  const seen = new Set<string>();
  const result: ComponentRequirement[] = [];

  const add = (comp: ComponentRequirement) => {
    if (!seen.has(comp.id)) {
      seen.add(comp.id);
      result.push(comp);
    }
  };

  // Expansion-level components
  for (const expId of expansionIds) {
    const baseComps = EXPANSION_BASE_COMPONENTS[expId] ?? [];
    for (const comp of baseComps) add(comp);
  }

  // Per-card triggers
  for (const card of cards) {
    for (const trigger of CARD_TRIGGERS) {
      if (card.id === trigger.cardId || card.id.startsWith(trigger.cardId)) {
        for (const comp of trigger.components) add(comp);
      }
    }
    // Detect Fate (Nocturne) / Doom cards by expansion
    if (card.expansion === "nocturne") {
      // Boons needed for Fate cards
      const fateCards = new Set(["bard","blessed-village","druid","pixie","sacred-grove","tracker","idol","sacred-grove"]);
      if (fateCards.has(card.id)) {
        add({ id: "boons", name: "Boons deck", reason: "Fate cards award Boons.", triggeredBy: card.name });
      }
      // Hexes needed for Doom cards
      const doomCards = new Set(["cursed-village","skulk","tormentor","vampire","werewolf","leprechaun","toad","raider"]);
      if (doomCards.has(card.id)) {
        add({ id: "hexes", name: "Hexes deck", reason: "Doom cards inflict Hexes.", triggeredBy: card.name });
      }
    }
    // Debt tokens for Empires debt cards
    if (card.expansion === "empires" && typeof card.cost === "string" && card.cost.includes("D")) {
      add({ id: "debt-tokens", name: "Debt tokens", reason: "Cards costing Debt require Debt tokens.", triggeredBy: card.name });
    }
    // VP tokens for any VP-awarding card
    if (card.roles.includes("alt-victory") && (card.expansion === "prosperity" || card.expansion === "empires")) {
      add({ id: "vp-tokens", name: "VP tokens", reason: "This card generates VP tokens during play.", triggeredBy: card.name });
    }
    // Coffers for Guilds cards
    if (card.expansion === "guilds" && card.notes.toLowerCase().includes("coffer")) {
      add({ id: "coffers-guilds", name: "Coffers tokens & mat", reason: "Guilds Coffer cards store coin tokens on a mat.", triggeredBy: card.name });
    }
    // Villagers for Renaissance cards
    if (card.expansion === "renaissance" && card.notes.toLowerCase().includes("villager")) {
      add({ id: "villagers", name: "Villagers tokens & mat", reason: "This card generates Villagers.", triggeredBy: card.name });
    }
    // Exile mats for any Exile mechanic cards
    if (card.notes.toLowerCase().includes("exile")) {
      add({ id: "exile-mats", name: "Exile mats (one per player)", reason: "This card uses the Exile mechanic.", triggeredBy: card.name });
    }
    // Loot for Plunder cards
    if (card.expansion === "plunder" && card.notes.toLowerCase().includes("loot")) {
      add({ id: "loot", name: "Loot pile", reason: "This card gains or interacts with Loot.", triggeredBy: card.name });
    }
    // Horses for Menagerie horse-related cards
    if (card.notes.toLowerCase().includes("horse") && card.expansion === "menagerie") {
      add({ id: "horses", name: "Horses pile", reason: "This card gains or uses Horses.", triggeredBy: card.name });
    }
    // Reserve / Tavern mat cards
    if (card.types.includes("Reserve")) {
      add({ id: "tavern-mat", name: "Tavern mat", reason: "Reserve cards are called from the Tavern mat.", triggeredBy: card.name });
    }
  }

  return result;
}
