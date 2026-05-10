import type { Combination } from "@/types";

export const COMBINATIONS: Combination[] = [

  // ═══════════════════════════════════════════════════════════════
  // SINGLE EXPANSION — BASE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "base-001",
    name: "Chapel Engine",
    expansions: ["base"],
    cards: ["chapel","village","festival","smithy","market","witch","moneylender","laboratory","sentry","throne-room"],
    strategy: "Trash hard with Chapel and Moneylender in the opening, then build a Village/Festival engine with Lab and Smithy as your draw engine. Witch applies early pressure while you set up; Throne Room doubles your best action each turn once the engine is running.",
    keyCards: ["chapel","village","throne-room"],
    difficulty: "intermediate",
    tags: ["engine","thinning","attack","multiplier"],
  },
  {
    id: "base-002",
    name: "Big Green",
    expansions: ["base"],
    cards: ["workshop","gardens","village","cellar","merchant","militia","poacher","council-room","festival","harbinger"],
    strategy: "Flood your deck with Workshops and Cellars while Merchants and Militia slow opponents. Council Room provides bursty draw and an extra Buy. Harbinger lets you cycle key cards back on top. Score Gardens late when your deck is bloated with cheap cards.",
    keyCards: ["workshop","gardens","council-room"],
    difficulty: "beginner",
    tags: ["alt-victory","big-deck","attack"],
  },
  {
    id: "base-003",
    name: "Throne Room Circus",
    expansions: ["base"],
    cards: ["throne-room","village","vassal","smithy","bandit","militia","remodel","library","market","artisan"],
    strategy: "Throne Room pairs with everything: double Smithy for 6 cards, double Militia for 4 coins and mass discard, double Remodel to trash junk and gain expensive cards. Village and Vassal keep Actions flowing. Artisan topdecks Province acquisitions for a clean finish.",
    keyCards: ["throne-room","village","smithy"],
    difficulty: "intermediate",
    tags: ["engine","multiplier","attack"],
  },

  // ═══════════════════════════════════════════════════════════════
  // SINGLE EXPANSION — INTRIGUE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "intrigue-001",
    name: "Noble Courts",
    expansions: ["intrigue"],
    cards: ["nobles","mining-village","shanty-town","conspirator","steward","minion","upgrade","torturer","patrol","bridge"],
    strategy: "Stack Actions with the three village-types — Nobles (choose +2 Actions), Mining Village, and Shanty Town — to trigger Conspirator's bonus draw. Torturer applies brutal hand pressure while Steward thins early. Bridge makes your late-game buys cheaper. Patrol helps filter your deck as you score Provinces.",
    keyCards: ["nobles","conspirator","torturer"],
    difficulty: "advanced",
    tags: ["engine","attack","thinning"],
  },
  {
    id: "intrigue-002",
    name: "Diplomat's Dance",
    expansions: ["intrigue"],
    cards: ["diplomat","minion","lurker","courtyard","wishing-well","secret-passage","pawn","baron","replace","upgrade"],
    strategy: "Minion redraws your hand while opponents suffer. Diplomat can block attacks and provides flexible draw when your hand is thin. Lurker recycles trashed Actions from the supply's trash pile. Baron generates burst economy by discarding Estates. Courtyard and Secret Passage give precise control over your deck order.",
    keyCards: ["minion","diplomat","lurker"],
    difficulty: "advanced",
    tags: ["engine","attack","reaction","hand-control"],
  },
  {
    id: "intrigue-003",
    name: "Swindler's Market",
    expansions: ["intrigue"],
    cards: ["swindler","trading-post","mill","courtier","duke","harem","shanty-town","steward","baron","bridge"],
    strategy: "Race to Duchies, Harems, and Mills for a multi-Victory VP stack. Swindler disrupts opponent plans early by turning their Silvers and cheap cards into Curses or junk. Trading Post trims your deck to the essentials. Baron and Bridge together give burst economy and cheap buys each turn.",
    keyCards: ["duke","swindler","bridge"],
    difficulty: "intermediate",
    tags: ["alt-victory","attack","economy"],
  },

  // ═══════════════════════════════════════════════════════════════
  // SINGLE EXPANSION — SEASIDE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "seaside-001",
    name: "Duration Engine",
    expansions: ["seaside"],
    cards: ["wharf","caravan","fishing-village","lighthouse","tactician","treasury","warehouse","native-village","salvager","sea-chart"],
    strategy: "Build a web of Durations that generate value each turn passively. Tactician is the nuclear option: discard your hand, then next turn draw 5, get an extra Action and Buy. Fishing Village and Lighthouse provide cheap recurring coin. Salvager converts junk into economy. Native Village lets you control which cards you draw.",
    keyCards: ["tactician","wharf","fishing-village"],
    difficulty: "intermediate",
    tags: ["duration","engine","economy"],
  },
  {
    id: "seaside-002",
    name: "Sea Witch's Curse",
    expansions: ["seaside"],
    cards: ["sea-witch","fishing-village","ambassador","warehouse","lighthouse","caravan","treasury","island","salvager","lookout"],
    strategy: "Sea Witch provides repeating Curse pressure: +2 Cards this turn, opponents get a Curse, and next turn +2 Cards with a discard. Ambassador returns junk to the supply and punishes opponents. Island safely scores VP cards out of your deck. Lookout and Warehouse refine your draws.",
    keyCards: ["sea-witch","ambassador","island"],
    difficulty: "intermediate",
    tags: ["attack","duration","thinning"],
  },
  {
    id: "seaside-003",
    name: "Smuggler's Cove",
    expansions: ["seaside"],
    cards: ["smugglers","warehouse","caravan","wharf","lighthouse","cutpurse","native-village","island","navigator","sea-chart"],
    strategy: "Cutpurse generates early economy and strips Coppers from opponents. Smugglers copies whatever expensive card the player to your right bought last turn — a free Gold or Province is not unusual. Native Village and Navigator give powerful deck control. Wharf provides sustained draw and Buys over two turns.",
    keyCards: ["smugglers","cutpurse","wharf"],
    difficulty: "beginner",
    tags: ["economy","attack","duration"],
  },

  // ═══════════════════════════════════════════════════════════════
  // SINGLE EXPANSION — PROSPERITY
  // ═══════════════════════════════════════════════════════════════
  {
    id: "prosperity-001",
    name: "King's Court Engine",
    expansions: ["prosperity"],
    cards: ["kings-court","workers-village","vault","monument","peddler","city","watchtower","bishop","grand-market","forge"],
    strategy: "King's Court tripling a Peddler in late-game generates enormous coin (3 cards, 3 actions, 3 coins). City grows stronger as piles empty. Workers' Village and City handle actions; Grand Market handles the buy. Bishop and Monument accrue VP tokens without Province dependency. Watchtower is a clutch reaction to control gained cards.",
    keyCards: ["kings-court","peddler","city"],
    difficulty: "advanced",
    tags: ["engine","multiplier","alt-victory"],
  },
  {
    id: "prosperity-002",
    name: "Goons Stampede",
    expansions: ["prosperity"],
    cards: ["goons","workers-village","vault","mountebank","rabble","hoard","bank","contraband","counting-house","talisman"],
    strategy: "Goons is the engine: every card you buy scores a VP token. Stack Buys with Workers' Village and Contraband, and use Mountebank to flood opponents with Curses and Coppers. Counting House converts all those Coppers into burst economy. Hoard doubles Gold acquisition whenever you buy Victory cards.",
    keyCards: ["goons","mountebank","counting-house"],
    difficulty: "intermediate",
    tags: ["attack","alt-victory","economy"],
  },
  {
    id: "prosperity-003",
    name: "Colony Rush",
    expansions: ["prosperity"],
    cards: ["grand-market","city","peddler","watchtower","mint","venture","bank","expand","workers-village","loan"],
    strategy: "Race to Colony using Grand Market's buy power. Loan and Expand thin the deck early. Venture and Bank provide escalating Treasure value each turn. Watchtower lets you trash gained Estates immediately or topdeck expensive cards. City accelerates as supply piles empty under buying pressure.",
    keyCards: ["grand-market","city","bank"],
    difficulty: "advanced",
    tags: ["engine","economy","thinning"],
  },

  // ═══════════════════════════════════════════════════════════════
  // SINGLE EXPANSION — CORNUCOPIA
  // ═══════════════════════════════════════════════════════════════
  {
    id: "cornucopia-001",
    name: "Fair Festival",
    expansions: ["cornucopia"],
    cards: ["hamlet","farming-village","hunting-party","horn-of-plenty","tournament","fairgrounds","horse-traders","remake","menagerie-card","harvest"],
    strategy: "Score Fairgrounds by assembling a diverse deck — every different card name adds VP. Horn of Plenty converts card diversity directly into free gains. Hunting Party reliably finds what you need. Tournament rewards Province ownership with unique Prizes. Hamlet and Farming Village keep Actions flowing.",
    keyCards: ["fairgrounds","horn-of-plenty","hunting-party"],
    difficulty: "intermediate",
    tags: ["alt-victory","engine","diversity"],
  },
  {
    id: "cornucopia-002",
    name: "Jester's Carnival",
    expansions: ["cornucopia"],
    cards: ["jester","farming-village","hamlet","fortune-teller","horse-traders","hunting-party","harvest","young-witch","menagerie-card","fairgrounds"],
    strategy: "Jester punishes Victory-heavy decks by forcing Curses; if opponent's top card is an Action or Treasure you gain a copy instead — great value. Young Witch threatens Curses unless opponents have the Bane. Fortune Teller locks Victory cards on top of opponent decks. Horse Traders provides excellent burst economy plus an attack reaction.",
    keyCards: ["jester","young-witch","fortune-teller"],
    nonSupplyCard: "horse",
    difficulty: "intermediate",
    tags: ["attack","alt-victory","draw"],
  },
  {
    id: "cornucopia-003",
    name: "Tournament Circuit",
    expansions: ["cornucopia"],
    cards: ["tournament","farming-village","menagerie-card","hamlet","horn-of-plenty","horse-traders","remake","jester","young-witch","harvest"],
    strategy: "Tournament is the pivot: reveal Province when you play it to gain a powerful Prize card (Bag of Gold, Followers, Princess, Trusty Steed, or Diadem). Remake efficiently upgrades Coppers to Silvers and Estates to useful cards. Menagerie rewards hand diversity with +3 Cards. Horse Traders doubles as a Reaction to protect yourself.",
    keyCards: ["tournament","remake","menagerie-card"],
    difficulty: "advanced",
    tags: ["engine","gain","attack"],
  },

  // ═══════════════════════════════════════════════════════════════
  // SINGLE EXPANSION — HINTERLANDS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "hinterlands-001",
    name: "Gold Rush",
    expansions: ["hinterlands"],
    cards: ["fools-gold","tunnel","jack-of-all-trades","inn","border-village","cartographer","margrave","scheme","haggler","highway"],
    strategy: "Tunnel into Gold: discard Tunnels via scheme or Cartographer's filters to gain free Golds. Fool's Gold becomes a monster (4 coins) once you have multiples. Highway drives down costs making expensive cards suddenly accessible. Inn is a flexible village that also reloads your Actions from the discard when gained.",
    keyCards: ["tunnel","fools-gold","highway"],
    difficulty: "intermediate",
    tags: ["economy","engine","village"],
  },
  {
    id: "hinterlands-002",
    name: "Trader's Route",
    expansions: ["hinterlands"],
    cards: ["trader","develop","spice-merchant","inn","cartographer","embassy","nomads","haggler","highway","oasis"],
    strategy: "Spice Merchant trashes Coppers for draw or coin-and-buy. Trader converts big cards into Silver flood. Develop efficiently reshapes your deck one card at a time in both directions. Embassy is massive draw — opponents getting Silver is a small price. Highway makes the expensive cards affordable for this powerful acceleration.",
    keyCards: ["spice-merchant","embassy","highway"],
    difficulty: "intermediate",
    tags: ["thinning","draw","economy"],
  },
  {
    id: "hinterlands-003",
    name: "Ill-Gotten Empire",
    expansions: ["hinterlands"],
    cards: ["ill-gotten-gains","fools-gold","duchess","oracle","jack-of-all-trades","margrave","noble-brigand","trader","border-village","farmland"],
    strategy: "Ill-Gotten Gains floods opponents with Curses when you gain it, while generating Copper economy for you. Noble Brigand strips Gold and Silver from opponents' decks. Oracle is a pseudo-attack that also draws. Margrave combines strong draw with a discard attack. Farmland lets you trash into Provinces late.",
    keyCards: ["ill-gotten-gains","noble-brigand","margrave"],
    difficulty: "advanced",
    tags: ["attack","economy","alt-victory"],
  },

  // ═══════════════════════════════════════════════════════════════
  // SINGLE EXPANSION — DARK AGES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "dark-ages-001",
    name: "Fortress Engine",
    expansions: ["dark-ages"],
    cards: ["fortress","wandering-minstrel","junk-dealer","cultist","bandit-camp","graverobber","altar","market-square","forager","catacombs"],
    strategy: "Fortress is an indestructible village — when anything tries to trash it, it returns to your hand. Chain Bandit Camp, Wandering Minstrel, and Fortress for relentless Actions. Cultist draws your whole deck. Junk Dealer and Forager trash Ruins and junk for economy. Market Square reactions generate Gold whenever anything is trashed.",
    keyCards: ["fortress","cultist","market-square"],
    difficulty: "advanced",
    tags: ["engine","thinning","reaction"],
  },
  {
    id: "dark-ages-002",
    name: "Rebuild Province",
    expansions: ["dark-ages"],
    cards: ["rebuild","rats","wandering-minstrel","sage","fortress","scavenger","mystic","junk-dealer","storeroom","market-square"],
    strategy: "Rebuild is a rush engine: name Province, reveal until you find a non-Province Victory, trash it, and gain a Province. Efficiently converts Estates and Duchies directly into Provinces. Rats flood your deck temporarily but each trash draws a card. Storeroom provides burst economy and buy. Scavenger topdecks key cards for the next turn.",
    keyCards: ["rebuild","scavenger","storeroom"],
    difficulty: "advanced",
    tags: ["engine","thinning","rush"],
  },
  {
    id: "dark-ages-003",
    name: "Bandit's Hoard",
    expansions: ["dark-ages"],
    cards: ["bandit-camp","marauder","pillage","rogue","death-cart","hermit","count","wandering-minstrel","altar","market-square"],
    strategy: "Bandit Camp generates free Spoils every play — Spoils are one-use Golds worth 3 coins. Marauder forces Ruins on opponents while you gain more Spoils. Pillage gives you an intel advantage by making opponents reveal and discard. Rogue can steal cards opponents trash. Count is versatile: topdeck, gain Duchy, or trash your whole hand.",
    keyCards: ["bandit-camp","marauder","count"],
    difficulty: "advanced",
    tags: ["attack","economy","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // SINGLE EXPANSION — GUILDS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "guilds-001",
    name: "Coffers Engine",
    expansions: ["guilds"],
    cards: ["plaza","herald","butcher","advisor","journeyman","merchant-guild","candlestick-maker","stonemason","doctor","soothsayer"],
    strategy: "Coffers are deferred coins — save them up and spend in the Buy phase. Plaza generates Coffers when you discard Treasures. Merchant Guild banks one Coffer for every card bought. Butcher spends Coffers to gain any card. Herald reveals your top card and plays it if it's an Action — chain multiple Heralds for explosive turns.",
    keyCards: ["plaza","merchant-guild","butcher"],
    difficulty: "intermediate",
    tags: ["engine","economy","coffers"],
  },
  {
    id: "guilds-002",
    name: "Overpay Workshop",
    expansions: ["guilds"],
    cards: ["plaza","herald","taxman","masterpiece","stonemason","doctor","advisor","butcher","journeyman","candlestick-maker"],
    strategy: "Overpay Masterpiece to flood the supply with Silvers, then use Doctor's overpay to surgically trash junk from the top of your deck. Taxman trashes your own Treasures to upgrade them and makes opponents discard their copies — wrecking Silver stacks. Stonemason splits one expensive card into two mid-range ones.",
    keyCards: ["doctor","masterpiece","stonemason"],
    difficulty: "advanced",
    tags: ["thinning","economy","overpay"],
  },
  {
    id: "guilds-003",
    name: "Guild Hall Feast",
    expansions: ["guilds"],
    cards: ["plaza","herald","merchant-guild","candlestick-maker","soothsayer","journeyman","taxman","butcher","advisor","stonemason"],
    strategy: "Soothsayer is the attack of choice: you gain Gold and opponents gain Curses, but those cursed players draw a card — not entirely bad for them, but the Gold income advantage is decisive. Journeyman draws targeted cards to hand. Candlestick Maker provides early Coffers and Buys cheaply. Everything feeds the Coffer engine.",
    keyCards: ["soothsayer","journeyman","merchant-guild"],
    difficulty: "intermediate",
    tags: ["attack","economy","coffers"],
  },

  // ═══════════════════════════════════════════════════════════════
  // SINGLE EXPANSION — ADVENTURES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "adventures-001",
    name: "Reserve Engine",
    expansions: ["adventures"],
    cards: ["royal-carriage","coin-of-the-realm","ratcatcher","port","storyteller","wine-merchant","dungeon","gear","guide","artificer"],
    strategy: "Tavern mat fills with Reserve cards that can be called at exactly the right moment. Coin of the Realm is called for +2 Actions mid-turn. Royal Carriage replays your best Action for free. Ratcatcher trashes junk from the mat. Port buys as two cards for one price. Storyteller plays Treasures and converts them to cards.",
    keyCards: ["royal-carriage","coin-of-the-realm","port"],
    difficulty: "advanced",
    tags: ["engine","reserve","duration"],
  },
  {
    id: "adventures-002",
    name: "Giant Expedition",
    expansions: ["adventures"],
    cards: ["giant","ranger","bridge-troll","haunted-woods","swamp-hag","relic","port","dungeon","magpie","lost-city"],
    strategy: "Giant alternates between +1 coin and a devastating attack that trashes opponent's mid-cost cards and forces Curses on top. Relic's persistent -1 card token slows opponents every turn. Swamp Hag pre-emptively Curses anyone who buys next turn. Port and Lost City give ample Actions. Bridge Troll makes card costs drop over multiple turns.",
    keyCards: ["giant","relic","swamp-hag"],
    difficulty: "advanced",
    tags: ["attack","duration","economy"],
  },
  {
    id: "adventures-003",
    name: "Duration Wave",
    expansions: ["adventures"],
    cards: ["amulet","caravan-guard","dungeon","gear","haunted-woods","bridge-troll","port","hireling","lost-city","wine-merchant"],
    strategy: "Hireling permanently sits in play and draws a card at the start of every turn — stack several for reliable card flow. Dungeon's consistent sifting over two turns keeps your hand fresh. Gear sets aside cards to guarantee a strong next turn. Bridge Troll's cost reduction accumulates. Port provides double-Villages on the cheap.",
    keyCards: ["hireling","dungeon","port"],
    difficulty: "intermediate",
    tags: ["duration","draw","sifting"],
  },

  // ═══════════════════════════════════════════════════════════════
  // SINGLE EXPANSION — EMPIRES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "empires-001",
    name: "Debt Empire",
    expansions: ["empires"],
    cards: ["engineer","city-quarter","overlord","encampment","forum","crown","legionary","wild-hunt","capital","groundskeeper"],
    strategy: "Debt cards are free now and paid later — Engineer gains a card costing up to 4 for just 4 Debt, and City Quarter gives +2 Actions plus draw equal to your Action hand. Crown doubles the next Action or Treasure. Capital generates 6 coins and a Buy, but leaves 6 Debt when discarded. Groundskeeper scores a VP token for every Victory card gained.",
    keyCards: ["city-quarter","crown","groundskeeper"],
    difficulty: "advanced",
    tags: ["engine","debt","alt-victory"],
  },
  {
    id: "empires-002",
    name: "Gladiator's Arena",
    expansions: ["empires"],
    cards: ["encampment","farmers-market","gladiator","chariot-race","crown","forum","legionary","wild-hunt","patrician","sacrifice"],
    strategy: "Gladiator's unique economy: reveal a card, dare opponents to match it — if they can't, they gain Curse and a Gladiator is trashed. Chariot-Race rewards you with coins and VP for having a more expensive top card. Wild Hunt builds a VP pile then cashes it with Estates. Legionary is devastating draw that also forces opponents to discard.",
    keyCards: ["gladiator","chariot-race","wild-hunt"],
    difficulty: "intermediate",
    tags: ["attack","economy","alt-victory"],
  },
  {
    id: "empires-003",
    name: "Castle Siege",
    expansions: ["empires"],
    cards: ["castles","city-quarter","enchantress","chariot-race","sacrifice","temple","groundskeeper","farmers-market","gladiator","crown"],
    strategy: "Castles are a split pile that rewards racing — the cheapest Castles go first, and each provides VP plus effects. Enchantress is a Duration attack that cripples opponents' first Action each turn. Temple trashes up to 3 different cards and puts VP tokens on it — take them when a Province is gained. Groundskeeper ensures every Victory gained is also a VP token.",
    keyCards: ["castles","enchantress","groundskeeper"],
    difficulty: "advanced",
    tags: ["attack","alt-victory","thinning"],
  },

  // ═══════════════════════════════════════════════════════════════
  // SINGLE EXPANSION — NOCTURNE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "nocturne-001",
    name: "Night Crypt",
    expansions: ["nocturne"],
    cards: ["blessed-village","conclave","cursed-village","crypt","cobbler","ghost-town","werewolf","shepherd","vampire","skulk"],
    strategy: "Three village-type cards keep Actions flowing. Crypt locks away Treasures and returns them to hand one per turn — excellent with high-value Treasures. Cobbler is a Night card that gains any card costing up to 4 into your hand at the start of next turn. Vampire attacks and gains non-Vampire cards costing up to 5. Skulk gets you Gold when gained.",
    keyCards: ["crypt","cobbler","vampire"],
    difficulty: "intermediate",
    tags: ["night","duration","attack"],
  },
  {
    id: "nocturne-002",
    name: "Vampire Court",
    expansions: ["nocturne"],
    cards: ["vampire","werewolf","conclave","blessed-village","ghost-town","raider","tormentor","skulk","pooka","shepherd"],
    strategy: "Raider is a devastating Night Duration: opponents discard cards matching yours, then you get +3 Coins next turn. Tormentor generates Imps (free Action plays) when alone in play, or Hexes for opponents. Werewolf draws 3 in Action phase or Hexes everyone in Night phase. Shepherd discards Victories for massive draw — keep a few Estates for it.",
    keyCards: ["raider","vampire","shepherd"],
    difficulty: "advanced",
    tags: ["night","attack","draw"],
  },
  {
    id: "nocturne-003",
    name: "Boon Festival",
    expansions: ["nocturne"],
    cards: ["druid","bard","pixie","tracker","blessed-village","conclave","monastery","guardian","skulk","shepherd"],
    strategy: "Boon-themed setup where Druid locks in three permanent Boons. Blessed Village receives a Boon on gain or at start of turn. Guardian protects against attacks and drips coins. Monastery trashes cards based on how many you gained this turn — pair it with a big gain turn. Tracker topdecks gained cards and starts with the Pouch heirloom.",
    keyCards: ["druid","blessed-village","monastery"],
    difficulty: "intermediate",
    tags: ["boon","thinning","reaction"],
  },

  // ═══════════════════════════════════════════════════════════════
  // SINGLE EXPANSION — RENAISSANCE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "renaissance-001",
    name: "Villager Workshop",
    expansions: ["renaissance"],
    cards: ["acting-troupe","mountain-village","hideout","recruiter","seer","old-witch","silk-merchant","swashbuckler","treasurer","patron"],
    strategy: "Villagers are deferred Actions — spend them mid-turn for +1 Action each. Acting Troupe dumps 4 Villagers before being trashed. Recruiter converts cards into Villagers based on their cost. Mountain Village recovers key cards from the discard. Old Witch is a Witch with an olive branch: opponents get Curse but may trash a Curse from hand.",
    keyCards: ["acting-troupe","recruiter","mountain-village"],
    difficulty: "intermediate",
    tags: ["engine","villagers","attack"],
  },
  {
    id: "renaissance-002",
    name: "Coffers Market",
    expansions: ["renaissance"],
    cards: ["ducat","silk-merchant","swashbuckler","patron","scepter","villain","old-witch","mountain-village","hideout","priest"],
    strategy: "Ducat provides early Coffers and +Buy while trashing Copper on gain. Silk Merchant draws and buys while giving Coffers on gain or trash. Swashbuckler builds Coffers steadily from a non-empty discard, eventually claiming the Treasure Chest artifact. Scepter replays any Action in play for just 1 Coin. Villain discard-attacks while funding itself.",
    keyCards: ["swashbuckler","scepter","patron"],
    difficulty: "intermediate",
    tags: ["coffers","engine","attack"],
  },
  {
    id: "renaissance-003",
    name: "Scholar's Engine",
    expansions: ["renaissance"],
    cards: ["scholar","experiment","lackeys","seer","research","cargo-ship","recruiter","mountain-village","improve","silk-merchant"],
    strategy: "Scholar discards your entire hand and draws 7 — an enormous reset. Experiment returns to supply after drawing, so you always have fresh copies to gain. Lackeys draws on play and gives Villagers on gain. Research trashes a card and spreads copies into your hand next turn. Improve converts end-of-turn Actions into upgraded versions.",
    keyCards: ["scholar","experiment","research"],
    difficulty: "advanced",
    tags: ["draw","engine","thinning"],
  },

  // ═══════════════════════════════════════════════════════════════
  // SINGLE EXPANSION — MENAGERIE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "menagerie-001",
    name: "Horse Parade",
    expansions: ["menagerie"],
    cards: ["supplies","sleigh","cavalry","groom","livery","paddock","destrier","snowy-village","sheepdog","hunting-lodge"],
    strategy: "Horses are disposable +2 Card cards. Supplies topdecks a Horse each turn. Cavalry gains two Horses and lets you re-enter Action phase if bought during Buy phase. Livery gives a Horse every time you gain a card costing 4+. Destrier's cost drops per Horse gained — by mid-game it can cost just 2. Paddock gives +2 Actions and 2 Horses.",
    keyCards: ["supplies","cavalry","livery"],
    nonSupplyCard: "horse",
    difficulty: "intermediate",
    tags: ["engine","draw","gain"],
  },
  {
    id: "menagerie-002",
    name: "Exile Engine",
    expansions: ["menagerie"],
    cards: ["camel-train","bounty-hunter","cardinal","sanctuary","kiln","mastermind","snowy-village","animal-fair","stockpile","fisherman"],
    strategy: "Exile zone acts as a second hand — cards in Exile don't cycle but can be recalled. Bounty Hunter Exiles for +3 Coins on a new card. Camel-Train exiles Victory cards away from opponent rush strategies. Cardinal Exiles opponent cards costing 3–6. Mastermind is a Duration King's Court. Animal Fair can trash an Action instead of paying its cost.",
    keyCards: ["mastermind","bounty-hunter","animal-fair"],
    difficulty: "advanced",
    tags: ["exile","multiplier","attack"],
  },
  {
    id: "menagerie-003",
    name: "Black Cat Chaos",
    expansions: ["menagerie"],
    cards: ["black-cat","sheepdog","scrap","goatherd","cavalry","paddock","destrier","hunting-lodge","wayfarer","animal-fair"],
    strategy: "Black Cat is an attack played on your opponents' turn — whenever they gain a Victory card, you play it to Curse them. Sheepdog reacts to any gain you make to draw 2 cards. Scrap trashes for versatile benefits based on the card's cost. Goatherd draws per card opponents trashed. Hunting Lodge discards everything for 5 cards when your hand is uniform.",
    keyCards: ["black-cat","sheepdog","scrap"],
    difficulty: "intermediate",
    tags: ["reaction","attack","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // SINGLE EXPANSION — ALLIES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "allies-001",
    name: "Favor Factory",
    expansions: ["allies"],
    cards: ["sycophant","broker","sentinel","galleria","destination","innkeeper","emissary","guard-dog","march","bauble"],
    strategy: "Favors are a currency spent with your chosen Ally. Sycophant generates Actions and triggers +3 Coins when 3+ Favors spent. Broker trashes and converts coin cost into chosen bonuses. Galleria gives Favors for buying cheap cards. Destination provides a village effect. March plays Actions from your discard — excellent recursion.",
    keyCards: ["sycophant","broker","galleria"],
    difficulty: "intermediate",
    tags: ["favors","engine","economy"],
  },
  {
    id: "allies-002",
    name: "Transfer Guild",
    expansions: ["allies"],
    cards: ["transfer","sentinel","broker","courier","innkeeper","destination","emissary","townsfolk","guard-dog","bauble"],
    strategy: "Transfer Exiles a Kingdom card and gains a cheaper Action — rapid reshaping of your deck. Sentinel is a powerful top-5 filter; trash up to 2 cards and reorder the rest. Townsfolk split pile has flexible cards from cheap draw to Village effects. Guard Dog reacts to attacks for extra draw. Courier is flexible: play Action or Treasure from hand.",
    keyCards: ["transfer","sentinel","townsfolk"],
    difficulty: "intermediate",
    tags: ["thinning","exile","draw"],
  },
  {
    id: "allies-003",
    name: "March Engine",
    expansions: ["allies"],
    cards: ["march","sentinel","broker","sycophant","destination","galleria","courier","townsfolk","forts","guard-dog"],
    strategy: "March looks through your discard and plays any Action from it — combine with Sycophant for extra economy on the play. Forts split pile provides durable Duration Victory cards. Guard Dog's draw-on-attack reaction plus its base +2 Cards makes it a safe and potent draw card. Destination gives reliable village chaining.",
    keyCards: ["march","forts","sycophant"],
    difficulty: "advanced",
    tags: ["engine","alt-victory","reaction"],
  },

  // ═══════════════════════════════════════════════════════════════
  // SINGLE EXPANSION — PLUNDER
  // ═══════════════════════════════════════════════════════════════
  {
    id: "plunder-001",
    name: "Pirate Hoard",
    expansions: ["plunder"],
    cards: ["wealthy-village","swamp-shacks","quartermaster","harbor-village","flagship","pickaxe","sack-of-loot","kings-cache","rope","trickster"],
    strategy: "Loot cards are powerful one-time-use Treasures. Pickaxe trashes a card costing 3+ to gain Loot. Wealthy Village gives a village and Loot when three different Treasures are in play. Quartermaster slowly loads up your mat with cards. Kings' Cache plays a Treasure three times. Flagship replays your last non-Command Action next turn.",
    keyCards: ["pickaxe","kings-cache","wealthy-village"],
    difficulty: "intermediate",
    tags: ["loot","economy","engine"],
  },
  {
    id: "plunder-002",
    name: "Duration Fleet",
    expansions: ["plunder"],
    cards: ["cabin-boy","gondola","landing-party","flagship","enlarge","rope","harbor-village","swamp-shacks","quartermaster","figurine"],
    strategy: "Gondola generates 2 Coins either now or at the start of your next turn — free delayed economy. Landing Party draws and gives Actions, then tops itself if you play a Treasure first. Enlarge is a two-turn upgrade engine. Rope is a Duration with +Buy and next-turn thinning. Harbor Village provides village effects and rewards Action chain economy.",
    keyCards: ["landing-party","gondola","enlarge"],
    difficulty: "intermediate",
    tags: ["duration","draw","thinning"],
  },
  {
    id: "plunder-003",
    name: "Treasure Hunter",
    expansions: ["plunder"],
    cards: ["crucible","tools","pendant","fortune-hunter","pilgrim","maroon","mapmaker","wealthy-village","kings-cache","mining-road"],
    strategy: "Pendant scores 1 Coin per uniquely named Treasure in play — stack Tools, Crucible, Pendant, and Loot together for big turns. Crucible trashes for coin equal to the card's cost. Maroon trashes a card and draws based on how many types it has. Mapmaker draws and filters with a buy. Mining Road gives a buy and lets you play gained Treasures.",
    keyCards: ["pendant","crucible","kings-cache"],
    difficulty: "intermediate",
    tags: ["treasure","economy","loot"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — CORNUCOPIA + GUILDS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "cornucopia-guilds-001",
    name: "The Grand Fair",
    expansions: ["cornucopia","guilds"],
    cards: ["farming-village","hamlet","hunting-party","fairgrounds","horse-traders","herald","plaza","butcher","merchant-guild","soothsayer"],
    strategy: "Cornucopia rewards deck diversity; Guilds rewards accumulating Coffers. Hunting Party reliably draws distinct cards to hand, padding Fairgrounds VP. Herald plays the top card if it's an Action — combine with topdecking from Hamlet to chain powerful turns. Merchant Guild banks a Coffer for every card bought. Butcher spends Coffers to freely upgrade or gain any card.",
    keyCards: ["hunting-party","herald","merchant-guild"],
    difficulty: "intermediate",
    tags: ["alt-victory","coffers","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — BASE + INTRIGUE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "base-intrigue-001",
    name: "Throne Intrigue",
    expansions: ["base","intrigue"],
    cards: ["throne-room","village","festival","nobles","mining-village","conspirator","upgrade","witch","chapel","bridge"],
    strategy: "Multiple village-types make Conspirator's bonus (+1 Card, +1 Action after 3 Actions) trivial to trigger. Throne Room doubles Nobles for +6 Cards or +4 Actions. Chapel thins the deck in opening turns. Bridge drives down costs — by mid-game, Provinces are cheaper. Witch applies early Curse pressure while you build.",
    keyCards: ["throne-room","nobles","conspirator"],
    difficulty: "advanced",
    tags: ["engine","multiplier","attack","thinning"],
  },
  {
    id: "base-intrigue-002",
    name: "Torturer's Market",
    expansions: ["base","intrigue"],
    cards: ["torturer","shanty-town","village","smithy","market","steward","replace","militia","witch","remodel"],
    strategy: "Torturer is brutal: +3 Cards plus opponents either discard 2 or gain a Curse to hand. Shanty Town draws cards when you have no Actions in hand — synergises with wanting to play it before other Actions. Village and Market chain naturally. Steward provides early thinning or draw. Replace upgrades cards into Provinces, cursing opponents if the gained card is Victory.",
    keyCards: ["torturer","shanty-town","replace"],
    difficulty: "advanced",
    tags: ["attack","engine","draw"],
  },
  {
    id: "base-intrigue-003",
    name: "Swindler's Chapel",
    expansions: ["base","intrigue"],
    cards: ["swindler","chapel","village","festival","lurker","minion","patrol","wishing-well","smithy","market"],
    strategy: "Chapel thins in the opening while Swindler converts opponents' Silvers into Curses or junk mid-game. Lurker rescues Action cards that get trashed — great for recovering powerful cards from the common trash. Minion draws and disrupts. Wishing Well is a cheap cantrip that can consistently hit top cards once your deck is thin. Market provides the buy.",
    keyCards: ["chapel","swindler","lurker"],
    difficulty: "intermediate",
    tags: ["thinning","attack","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — BASE + SEASIDE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "base-seaside-001",
    name: "Duration Witch",
    expansions: ["base","seaside"],
    cards: ["witch","fishing-village","wharf","village","festival","lighthouse","warehouse","treasury","salvager","chapel"],
    strategy: "Lighthouse blocks attacks while providing 1 Coin for two turns. Fishing Village chains into the heavy Actions. Wharf's sustained draw and Buy over two turns makes Province buying trivial. Witch cursing while Warehouse filters your hand. Chapel opens the game; salvager converts late junk for economy.",
    keyCards: ["wharf","fishing-village","witch"],
    difficulty: "intermediate",
    tags: ["attack","duration","engine"],
  },
  {
    id: "base-seaside-002",
    name: "Ambassador Market",
    expansions: ["base","seaside"],
    cards: ["ambassador","village","market","festival","smithy","lighthouse","caravan","treasury","chapel","militia"],
    strategy: "Ambassador is a premier trasher: return up to 2 copies of a card to the supply. Return Estates, Coppers, Curses — and if someone gave you one, return it. Village, Festival, and Market chain easily. Militia attacks complement Lighthouse protection. Treasury topdecks itself after non-Victory buys.",
    keyCards: ["ambassador","market","lighthouse"],
    difficulty: "beginner",
    tags: ["thinning","engine","attack"],
  },
  {
    id: "base-seaside-003",
    name: "Tactician Setup",
    expansions: ["base","seaside"],
    cards: ["tactician","fishing-village","village","smithy","cellar","warehouse","lighthouse","market","harbinger","chapel"],
    strategy: "Tactician requires discarding your whole hand — ideally a hand with nothing valuable. Cellar, Warehouse, and Harbinger help clear junk before Tactician. Then next turn: 5 cards, 1 Action, 1 Buy — a clean powerful turn. Chapel thins early so Tactician turns are huge. Fishing Village and Village give the Actions you need to chain after Tactician.",
    keyCards: ["tactician","warehouse","chapel"],
    difficulty: "advanced",
    tags: ["duration","draw","thinning"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — BASE + PROSPERITY
  // ═══════════════════════════════════════════════════════════════
  {
    id: "base-prosperity-001",
    name: "King's Court Base",
    expansions: ["base","prosperity"],
    cards: ["kings-court","workers-village","vault","smithy","market","monument","bishop","witch","chapel","grand-market"],
    strategy: "King's Court tripling a Smithy draws 9 cards. King's Court tripling Witch gives 6 cards and Curses every opponent three times. Workers' Village and Grand Market handle the Action and Buy chains. Monument and Bishop accumulate VP tokens so the Province race matters less. Chapel opens with aggressive thinning.",
    keyCards: ["kings-court","smithy","workers-village"],
    difficulty: "advanced",
    tags: ["engine","multiplier","attack","thinning"],
  },
  {
    id: "base-prosperity-002",
    name: "Goons Chapel",
    expansions: ["base","prosperity"],
    cards: ["goons","workers-village","chapel","smithy","village","mountebank","rabble","vault","market","militia"],
    strategy: "Goons turns every Buy into a VP token — stack Buys aggressively with Market, Workers' Village, and Vault. Mountebank with Militia creates a brutal attack combination forcing discard and Curse gain. Chapel trims early. With enough Buys per turn, Goons can outscore Province buying entirely.",
    keyCards: ["goons","mountebank","workers-village"],
    difficulty: "advanced",
    tags: ["attack","alt-victory","engine"],
  },
  {
    id: "base-prosperity-003",
    name: "Colony Engine Base",
    expansions: ["base","prosperity"],
    cards: ["city","workers-village","peddler","watchtower","grand-market","village","chapel","smithy","throne-room","mine"],
    strategy: "Colony is the win condition: 10 VP per Colony. City accelerates dramatically as piles empty — bonus cards, coins, and buys for free. Peddler's cost drops to 0 with enough Actions in play. Watchtower converts gained cards into instant topdecks or trash. Mine upgrades Silvers to Gold and Gold to Platinum for the Colony economy.",
    keyCards: ["city","peddler","grand-market"],
    difficulty: "advanced",
    tags: ["engine","economy","thinning"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — INTRIGUE + SEASIDE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "intrigue-seaside-001",
    name: "Minion Fleet",
    expansions: ["intrigue","seaside"],
    cards: ["minion","shanty-town","fishing-village","wharf","caravan","lighthouse","upgrade","steward","patrol","ambassador"],
    strategy: "Minion gives +1 Action and choice of +2 Coins or full hand redraw. Chain Minion into Shanty Town (draw if no Actions in hand), or into Fishing Village for persistent Actions. Ambassador thins while Wharf sustains draw and Buys. Steward handles early thinning. Lighthouse protects from opponent attacks while generating coins.",
    keyCards: ["minion","wharf","fishing-village"],
    difficulty: "intermediate",
    tags: ["attack","engine","duration"],
  },
  {
    id: "intrigue-seaside-002",
    name: "Nobles Duration",
    expansions: ["intrigue","seaside"],
    cards: ["nobles","mining-village","wharf","caravan","fishing-village","diplomat","torturer","smugglers","treasury","upgrade"],
    strategy: "Nobles alternates between +3 Cards and +2 Actions as needed. Torturer's hand pressure pairs with Diplomat's block reaction. Smugglers copies whatever expensive card the opponent just bought — free Gold or Nobles. Treasury topdecks itself after non-Victory turns. Fishing Village makes all your expensive Actions chain smoothly.",
    keyCards: ["nobles","torturer","wharf"],
    difficulty: "advanced",
    tags: ["attack","draw","duration"],
  },
  {
    id: "intrigue-seaside-003",
    name: "Swindler's Sea",
    expansions: ["intrigue","seaside"],
    cards: ["swindler","shanty-town","native-village","warehouse","sea-witch","steward","trading-post","bridge","ambassador","salvager"],
    strategy: "Ambassador and Trading Post aggressively thin your deck. Swindler disrupts mid-game when opponents have valuable cards to destroy. Sea Witch repeatedly Curses while drawing cards across two turns. Native Village gives reliable deck control. Shanty Town draws when your hand is light on Actions after trading away cards.",
    keyCards: ["sea-witch","ambassador","swindler"],
    difficulty: "intermediate",
    tags: ["attack","thinning","duration"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — INTRIGUE + PROSPERITY
  // ═══════════════════════════════════════════════════════════════
  {
    id: "intrigue-prosperity-001",
    name: "Nobles Court",
    expansions: ["intrigue","prosperity"],
    cards: ["nobles","mining-village","kings-court","workers-village","vault","steward","mountebank","conspirator","upgrade","grand-market"],
    strategy: "King's Court tripling Nobles gives +9 Cards or +6 Actions — either explosive. Conspirator triggers on the third Action, combining naturally with multiple villages. Mountebank attacks while you build. Vault converts hand cards into economy. This is a complex engine that rewards planning but dominates once assembled.",
    keyCards: ["kings-court","nobles","conspirator"],
    difficulty: "advanced",
    tags: ["engine","multiplier","attack"],
  },
  {
    id: "intrigue-prosperity-002",
    name: "Goons Intrigue",
    expansions: ["intrigue","prosperity"],
    cards: ["goons","workers-village","vault","shanty-town","minion","torturer","bishop","monument","upgrade","bridge"],
    strategy: "Goons VP tokens plus Monument VP tokens creates a two-track VP engine that doesn't rely solely on Provinces. Bridge drops card costs, making Grand Market, Provinces, and other expensive cards accessible. Torturer and Goons together are terrifying: forced discard plus Curse gain plus VP per buy.",
    keyCards: ["goons","monument","torturer"],
    difficulty: "advanced",
    tags: ["alt-victory","attack","engine"],
  },
  {
    id: "intrigue-prosperity-003",
    name: "Duke's Prosperity",
    expansions: ["intrigue","prosperity"],
    cards: ["duke","harem","nobles","mining-village","hoard","monument","grand-market","bishop","trading-post","conspirator"],
    strategy: "Race for Duchies: each Duchy is worth 3VP baseline plus 1VP per Duchy via Duke — stack 4 Duchies and each is worth 7VP. Harem provides 2VP and 2 Coins. Hoard doubles Gold acquisition when you buy Victory. Bishop trashes junk into VP tokens. Monument accumulates VP without Province dependency.",
    keyCards: ["duke","hoard","bishop"],
    difficulty: "intermediate",
    tags: ["alt-victory","economy","thinning"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — SEASIDE + PROSPERITY
  // ═══════════════════════════════════════════════════════════════
  {
    id: "seaside-prosperity-001",
    name: "Wharf Fortune",
    expansions: ["seaside","prosperity"],
    cards: ["wharf","fishing-village","tactician","workers-village","vault","grand-market","mountebank","watchtower","treasury","city"],
    strategy: "Wharf provides 2 Cards and a Buy for two consecutive turns — stack several for absurd draw and multiple Buys. Tactician resets for a monster turn. City surges late when piles empty. Grand Market and Workers' Village provide the Action and Buy infrastructure. Mountebank is an efficient Curse attack and economy card in one.",
    keyCards: ["wharf","city","tactician"],
    difficulty: "advanced",
    tags: ["engine","draw","attack"],
  },
  {
    id: "seaside-prosperity-002",
    name: "Kings Fleet",
    expansions: ["seaside","prosperity"],
    cards: ["kings-court","fishing-village","wharf","workers-village","vault","peddler","rabble","lighthouse","mint","caravan"],
    strategy: "King's Court tripling Wharf sets aside three Wharfs that each draw 2 cards and give a Buy next turn — 6 cards and 3 extra Buys. Fishing Village fuels the Action chains. Peddler reaches 0 cost with enough Actions. Rabble draws and disrupts. Lighthouse blocks King's Court from being countered.",
    keyCards: ["kings-court","wharf","peddler"],
    difficulty: "advanced",
    tags: ["engine","multiplier","draw"],
  },
  {
    id: "seaside-prosperity-003",
    name: "Monument Sea",
    expansions: ["seaside","prosperity"],
    cards: ["monument","city","workers-village","ambassador","salvager","lighthouse","caravan","bishop","goons","watchtower"],
    strategy: "Monument and Bishop are VP token engines that let you ignore Provinces. Ambassador thins your deck for free. Salvager converts junk into economy and a Buy. City accelerates when piles go empty. Goons while rare here acts as the heavy hitter — every buy during Goons VP collection wins the game.",
    keyCards: ["monument","bishop","ambassador"],
    difficulty: "intermediate",
    tags: ["alt-victory","thinning","economy"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — BASE + HINTERLANDS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "base-hinterlands-001",
    name: "Highway Chapel",
    expansions: ["base","hinterlands"],
    cards: ["highway","inn","chapel","village","festival","smithy","haggler","cartographer","margrave","develop"],
    strategy: "Highway's cost reduction stacks with each copy in play — two Highways makes Province cost 6, three makes it 5. Haggler gains a cheaper non-Victory card whenever you buy, combining explosively with Highway. Inn is a Village that reloads your discard into the deck on gain. Chapel opens fast. Cartographer keeps your draws smooth.",
    keyCards: ["highway","haggler","chapel"],
    difficulty: "intermediate",
    tags: ["economy","engine","thinning"],
  },
  {
    id: "base-hinterlands-002",
    name: "Embassy Engine",
    expansions: ["base","hinterlands"],
    cards: ["embassy","inn","village","festival","market","chapel","trader","spice-merchant","oasis","scheme"],
    strategy: "Embassy draws 5 cards for 5 cost — exceptional even with the discard. When bought, opponents gain Silver, so use it before they can exploit it. Inn shuffles Actions from your discard into your deck on gain — play Inn to gain Inn, loading Actions back immediately. Trader trashes cards for Silver piles. Scheme topdecks useful Actions.",
    keyCards: ["embassy","inn","trader"],
    difficulty: "intermediate",
    tags: ["draw","thinning","engine"],
  },
  {
    id: "base-hinterlands-003",
    name: "Fool's Rush",
    expansions: ["base","hinterlands"],
    cards: ["fools-gold","tunnel","village","festival","margrave","jack-of-all-trades","cartographer","haggler","smithy","remodel"],
    strategy: "Fool's Gold is worth 4 Coins when you have multiples — a cheap Treasure with major upside. Tunnel reacts to being discarded by giving free Gold — combine with Cellar, Warehouse, or Cartographer's forced discards. Jack of All Trades gains Silver, draws to 5, and can trash junk. Margrave draws 3 and gives a Buy while disrupting opponents.",
    keyCards: ["fools-gold","tunnel","jack-of-all-trades"],
    difficulty: "beginner",
    tags: ["economy","draw","reaction"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — BASE + DARK AGES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "base-dark-ages-001",
    name: "Fortress Chapel",
    expansions: ["base","dark-ages"],
    cards: ["fortress","wandering-minstrel","chapel","village","smithy","junk-dealer","bandit-camp","market-square","sage","witch"],
    strategy: "Fortress returns to your hand when trashed — so Bandit Camp's Procession effect on it loops indefinitely. Junk Dealer trashes and draws and gives coins. Wandering Minstrel reveals top 3 and keeps Actions. Market Square reacts to any trash by gaining Gold — combine with Chapel, Junk Dealer for Gold floods. Sage reliably hits a 3+ cost card.",
    keyCards: ["fortress","market-square","junk-dealer"],
    difficulty: "advanced",
    tags: ["engine","thinning","reaction"],
  },
  {
    id: "base-dark-ages-002",
    name: "Rebuild Province",
    expansions: ["base","dark-ages"],
    cards: ["rebuild","wandering-minstrel","village","festival","chapel","remodel","sage","storeroom","militia","smithy"],
    strategy: "Rebuild directly trashes Estates and Duchies into Provinces — a VP acceleration that bypasses Province buying entirely. Chapel opens with aggressive thinning. Storeroom provides a Buy and can dump then refill your hand for coins. Militia slows opponents. Once Rebuild is assembled with a village, you can upgrade two Victory cards per turn.",
    keyCards: ["rebuild","chapel","storeroom"],
    difficulty: "advanced",
    tags: ["thinning","engine","rush"],
  },
  {
    id: "base-dark-ages-003",
    name: "Count Festival",
    expansions: ["base","dark-ages"],
    cards: ["count","fortress","wandering-minstrel","festival","market","chapel","village","rogue","cultist","market-square"],
    strategy: "Count is extremely flexible: topdeck your hand for later, gain a Copper for now, or discard 2. Then choose: +3 Coins, trash your entire hand for fast thinning, or gain a Duchy. Rogue steals 3–6 cost cards from the trash — pair with Cultist since Cultist yields +3 Cards when trashed. Market Square reacts to all the trashing with free Gold.",
    keyCards: ["count","rogue","market-square"],
    difficulty: "advanced",
    tags: ["thinning","economy","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — INTRIGUE + MENAGERIE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "intrigue-menagerie-001",
    name: "Nobles Stampede",
    expansions: ["intrigue","menagerie"],
    cards: ["nobles","mining-village","shanty-town","paddock","destrier","cavalry","sheepdog","snowy-village","steward","bridge"],
    strategy: "Six different village-type cards guarantee you never run short of Actions. Destrier gets cheaper per Horse gained — combine with Cavalry and Sleigh for rapid, low-cost acquisition. Sheepdog reacts to gaining anything for +2 Cards. Snowy Village provides 4 extra Actions and a Buy. Bridge makes all your purchases cheaper.",
    keyCards: ["nobles","destrier","snowy-village"],
    difficulty: "advanced",
    tags: ["engine","village","draw"],
  },
  {
    id: "intrigue-menagerie-002",
    name: "Minion Stampede",
    expansions: ["intrigue","menagerie"],
    cards: ["minion","shanty-town","black-cat","scrap","snowy-village","paddock","groom","cavalry","upgrade","torturer"],
    strategy: "Minion's hand-redraw attack triggers Black Cat — if an opponent gains a Victory card on their turn, play Black Cat to Curse them, and do it from your hand for free draw. Scrap trashes for flexible bonuses: Horse, Silver, Action, Card. Groom gains Horses when gaining Actions. Snowy Village and Paddock provide Actions and Horses simultaneously.",
    keyCards: ["minion","black-cat","scrap"],
    difficulty: "advanced",
    tags: ["attack","reaction","draw"],
  },
  {
    id: "intrigue-menagerie-003",
    name: "Exile Intrigue",
    expansions: ["intrigue","menagerie"],
    cards: ["camel-train","bounty-hunter","cardinal","sanctuary","nobles","mining-village","steward","conspirator","bridge","animal-fair"],
    strategy: "Bounty Hunter Exiles for +3 Coins on new cards. Cardinal Exiles opponent's mid-cost cards — denying them key cards while thinning their options. Camel-Train Exiles Victory cards away from rush strategies. Nobles and Conspirator provide draw and economy. Bridge drives down costs. Animal Fair can trash an Action instead of paying its cost.",
    keyCards: ["bounty-hunter","cardinal","nobles"],
    difficulty: "advanced",
    tags: ["exile","attack","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — SEASIDE + RENAISSANCE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "seaside-renaissance-001",
    name: "Duration Coffers",
    expansions: ["seaside","renaissance"],
    cards: ["wharf","fishing-village","caravan","mountain-village","hideout","silk-merchant","villain","recruiter","swashbuckler","lighthouse"],
    strategy: "Wharf and Caravan generate repeated card draw over multiple turns. Swashbuckler builds Coffers from a stocked discard — eventually claims the Treasure Chest for extra Buys. Recruiter converts trashed cards into Villagers. Villain discard-attacks while funding itself with Coffers. Mountain Village and Hideout are flexible village sources.",
    keyCards: ["wharf","swashbuckler","recruiter"],
    difficulty: "intermediate",
    tags: ["engine","coffers","duration"],
  },
  {
    id: "seaside-renaissance-002",
    name: "Research Fleet",
    expansions: ["seaside","renaissance"],
    cards: ["research","cargo-ship","caravan","fishing-village","mountain-village","experiment","seer","old-witch","ducat","salvager"],
    strategy: "Research trashes a card then sets aside copies for next turn — a slow but powerful engine builder. Experiment draws 2 and returns to supply — gain it repeatedly. Cargo Ship sets aside a gained card and returns it to hand next turn. Seer draws cards costing 2–4. Ducat provides Coffer, Buy, and trashes Copper on gain.",
    keyCards: ["research","experiment","cargo-ship"],
    difficulty: "intermediate",
    tags: ["draw","thinning","duration"],
  },
  {
    id: "seaside-renaissance-003",
    name: "Scholar's Sea",
    expansions: ["seaside","renaissance"],
    cards: ["scholar","seer","fishing-village","native-village","lighthouse","warehouse","recruiter","acting-troupe","silk-merchant","salvager"],
    strategy: "Scholar discards hand and draws 7 — a powerful reset that works best with a thin deck. Seer draws cards in a useful cost range. Warehouse sifts 3 cards and discards 3. Native Village gives deck control. Acting Troupe dumps 4 Villagers then vanishes. Silk Merchant gives 2 Cards and a Buy while giving Coffers on entry or exit.",
    keyCards: ["scholar","acting-troupe","seer"],
    difficulty: "intermediate",
    tags: ["draw","villagers","thinning"],
  },

  // ═══════════════════════════════════════════════════════════════
  // TRIPLES — BASE + INTRIGUE + SEASIDE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "base-intrigue-seaside-001",
    name: "Triple Classic",
    expansions: ["base","intrigue","seaside"],
    cards: ["chapel","village","festival","nobles","mining-village","fishing-village","wharf","torturer","witch","market"],
    strategy: "The three classic expansions at their best. Five village-type cards mean you'll never stall on Actions. Witch and Torturer stack Curses aggressively. Wharf delivers sustained draw and Buys. Chapel thins early, and Market provides a steady buy and economy. A benchmark 'textbook engine' kingdom.",
    keyCards: ["wharf","nobles","chapel"],
    difficulty: "intermediate",
    tags: ["engine","attack","duration","thinning"],
  },
  {
    id: "base-intrigue-seaside-002",
    name: "Duration Nobles",
    expansions: ["base","intrigue","seaside"],
    cards: ["wharf","fishing-village","lighthouse","nobles","shanty-town","village","smithy","steward","upgrade","market"],
    strategy: "Lighthouse provides attack immunity and coins for free. Fishing Village and Village chain easily. Nobles chooses between +3 Cards and +2 Actions based on your need each turn. Wharf draws 2 and gives a Buy now and again next turn. Steward thins or draws depending on opening hand quality.",
    keyCards: ["wharf","nobles","lighthouse"],
    difficulty: "beginner",
    tags: ["engine","duration","draw"],
  },
  {
    id: "base-intrigue-seaside-003",
    name: "Ambassador's Intrigue",
    expansions: ["base","intrigue","seaside"],
    cards: ["ambassador","fishing-village","caravan","minion","mining-village","shanty-town","village","chapel","upgrade","salvager"],
    strategy: "Ambassador thins aggressively. Chapel opens with Copper/Estate removal. Minion redraws your hand and attacks. Shanty Town draws when your hand has no Actions — naturally after chapelling down to low hand size. Multiple villages and Caravan sustain the engine. Salvager converts end-game junk for economy.",
    keyCards: ["ambassador","minion","chapel"],
    difficulty: "intermediate",
    tags: ["thinning","attack","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // TRIPLES — BASE + PROSPERITY + INTRIGUE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "base-prosperity-intrigue-001",
    name: "King's Nobles",
    expansions: ["base","intrigue","prosperity"],
    cards: ["kings-court","workers-village","nobles","mining-village","vault","grand-market","chapel","conspirator","mountebank","witch"],
    strategy: "King's Court tripling Nobles draws 9 cards and gives 6 Actions — absurd power. Conspirator triggers after just 3 Actions. Workers' Village provides cheap village chaining. Mountebank and Witch stack Curses. Grand Market draws, gives an Action, and a Buy. Chapel shreds the opening hand. Vault converts spare cards to coins.",
    keyCards: ["kings-court","nobles","mountebank"],
    difficulty: "advanced",
    tags: ["engine","multiplier","attack"],
  },
  {
    id: "base-prosperity-intrigue-002",
    name: "Goons and Bridges",
    expansions: ["base","intrigue","prosperity"],
    cards: ["goons","workers-village","shanty-town","chapel","village","vault","bishop","monument","steward","bridge"],
    strategy: "Bridge lowers all card costs; Goons gives +1 Buy. Stack enough Bridges and Goons in play and you buy multiple Provinces at 2 coins each, scoring VP tokens the whole time. Monument and Bishop both give VP tokens. Chapel and Steward handle early thinning. Shanty Town draws when Actions are scarce.",
    keyCards: ["goons","bridge","monument"],
    difficulty: "advanced",
    tags: ["alt-victory","attack","engine"],
  },
  {
    id: "base-prosperity-intrigue-003",
    name: "Colony Nobles",
    expansions: ["base","intrigue","prosperity"],
    cards: ["city","workers-village","nobles","conspirator","upgrade","grand-market","chapel","witch","vault","harem"],
    strategy: "Colony is worth 10VP. City accelerates toward it by growing as piles empty. Conspirator's bonus triggers on the third Action — trivial with Nobles, Workers' Village, and City all in play. Harem provides floating VP and income. Upgrade reshapes mid-tier cards. Chapel thins. Witch attacks throughout.",
    keyCards: ["city","nobles","conspirator"],
    difficulty: "advanced",
    tags: ["engine","alt-victory","attack"],
  },

  // ═══════════════════════════════════════════════════════════════
  // TRIPLES — BASE + SEASIDE + HINTERLANDS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "base-seaside-hinterlands-001",
    name: "Sea Road",
    expansions: ["base","hinterlands","seaside"],
    cards: ["fishing-village","wharf","highway","inn","chapel","village","festival","cartographer","margrave","smithy"],
    strategy: "Highway reduces costs while Wharf delivers sustained draw and Buys. Inn is a Village that reloads discarded Actions into the deck when gained — play Inn to gain Inn and instantly reload your engine. Festival and Fishing Village chain comfortably. Margrave draws 3 and forces opponents to discard. Chapel opens.",
    keyCards: ["highway","inn","wharf"],
    difficulty: "intermediate",
    tags: ["engine","duration","economy"],
  },
  {
    id: "base-seaside-hinterlands-002",
    name: "Duration Embassy",
    expansions: ["base","hinterlands","seaside"],
    cards: ["wharf","caravan","fishing-village","embassy","inn","highway","village","chapel","spice-merchant","treasury"],
    strategy: "Embassy's 5-card draw powers the engine; opponents gaining Silver from Embassy actually helps fund the game. Spice Merchant trashes Coppers for draw-or-economy. Caravan and Wharf make your next turn powerful. Inn reloads discarded Actions. Chapel opens. Treasury returns to your deck after non-Victory buys.",
    keyCards: ["embassy","spice-merchant","wharf"],
    difficulty: "intermediate",
    tags: ["draw","thinning","duration"],
  },
  {
    id: "base-seaside-hinterlands-003",
    name: "Tunnel Seas",
    expansions: ["base","hinterlands","seaside"],
    cards: ["tunnel","fools-gold","fishing-village","native-village","chapel","village","festival","lighthouse","cartographer","salvager"],
    strategy: "Tunnel reacts to discard by gaining Gold — Cartographer and Native Village force discards, triggering free Gold gains. Fool's Gold is 4 Coins with multiples. Chapel thins early. Fishing Village and Village provide Actions. Salvager turns end-game junk into economy. Lighthouse protects and coins.",
    keyCards: ["tunnel","cartographer","fools-gold"],
    difficulty: "intermediate",
    tags: ["economy","reaction","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // TRIPLES — INTRIGUE + SEASIDE + PROSPERITY
  // ═══════════════════════════════════════════════════════════════
  {
    id: "intrigue-seaside-prosperity-001",
    name: "Noble Fleet Fortune",
    expansions: ["intrigue","prosperity","seaside"],
    cards: ["nobles","mining-village","fishing-village","wharf","workers-village","grand-market","kings-court","vault","steward","upgrade"],
    strategy: "Five village sources and King's Court makes this a high-ceiling engine. KC tripling Wharf gives 6 cards and 3 Buys next turn. Nobles provides both draw and Actions. Grand Market is the buy anchor. Vault converts excess hand cards into coins. Steward thins or draws depending on your opening.",
    keyCards: ["kings-court","wharf","nobles"],
    difficulty: "advanced",
    tags: ["engine","multiplier","draw"],
  },
  {
    id: "intrigue-seaside-prosperity-002",
    name: "Tactician Nobles",
    expansions: ["intrigue","prosperity","seaside"],
    cards: ["tactician","fishing-village","shanty-town","nobles","workers-village","vault","mountebank","rabble","upgrade","bridge"],
    strategy: "Tactician requires discarding your hand — Fishing Village and Shanty Town help clear it before discarding. Next turn: 5 cards, 1 Action, 1 Buy. Mountebank and Rabble attack opponents. Nobles provides flexible draw or Actions. Vault's discard mechanism helps set up Tactician hands. Bridge reduces Province cost.",
    keyCards: ["tactician","nobles","mountebank"],
    difficulty: "advanced",
    tags: ["duration","attack","engine"],
  },
  {
    id: "intrigue-seaside-prosperity-003",
    name: "Monument Intrigue Sea",
    expansions: ["intrigue","prosperity","seaside"],
    cards: ["monument","goons","workers-village","minion","mining-village","wharf","caravan","bishop","bridge","lighthouse"],
    strategy: "Monument and Bishop give VP tokens each turn. Goons multiplies VP per buy. Minion disrupts opponents. Wharf sustains draw and Buys across turns. Workers' Village, Mining Village, and Minion chain. Bridge makes Province buying cheap. Lighthouse protects you while you accumulate VP tokens.",
    keyCards: ["goons","monument","bishop"],
    difficulty: "advanced",
    tags: ["alt-victory","attack","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // TRIPLES — BASE + INTRIGUE + HINTERLANDS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "base-intrigue-hinterlands-001",
    name: "Chapel Highway",
    expansions: ["base","hinterlands","intrigue"],
    cards: ["chapel","village","festival","nobles","mining-village","highway","inn","cartographer","haggler","margrave"],
    strategy: "Highway makes expensive cards accessible. Haggler gains a free cheaper non-Victory card on every buy — combine with Highway and buy Province, getting a Gold for free. Inn is a village that reloads discarded Actions. Nobles and Mining Village provide additional Action chains. Chapel opens aggressively. Margrave draws 3 and attacks.",
    keyCards: ["highway","haggler","nobles"],
    difficulty: "intermediate",
    tags: ["engine","economy","draw"],
  },
  {
    id: "base-intrigue-hinterlands-002",
    name: "Tunnel Embassy",
    expansions: ["base","hinterlands","intrigue"],
    cards: ["tunnel","embassy","village","festival","shanty-town","steward","bridge","fools-gold","jack-of-all-trades","smithy"],
    strategy: "Embassy draws 5 and opponents gain Silver — the opponents' Silvers are actually fine since your Fool's Gold generates 4 Coins when multiples are in play. Tunnel reacts to Embassy's discard for free Gold. Jack of All Trades gains Silver, draws to 5, and trashes junk. Bridge and Festival together give cheap buys and Actions.",
    keyCards: ["embassy","tunnel","fools-gold"],
    difficulty: "intermediate",
    tags: ["draw","economy","reaction"],
  },
  {
    id: "base-intrigue-hinterlands-003",
    name: "Brigand's Passage",
    expansions: ["base","hinterlands","intrigue"],
    cards: ["bridge","shanty-town","mining-village","highway","inn","border-village","cartographer","steward","village","chapel"],
    strategy: "Bridge and Highway stack cost reductions so mid and late game cards become trivially cheap. Border Village gives +2 Actions and gains a card costing less when you gain it. Inn reloads Actions. Mining Village can sacrifice itself for +2 Coins. Shanty Town draws when Action-light. Chapel opens the game.",
    keyCards: ["bridge","highway","border-village"],
    difficulty: "intermediate",
    tags: ["economy","engine","thinning"],
  },

  // ═══════════════════════════════════════════════════════════════
  // TRIPLES — BASE + DARK AGES + INTRIGUE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "base-dark-ages-intrigue-001",
    name: "Dark Nobles",
    expansions: ["base","dark-ages","intrigue"],
    cards: ["nobles","mining-village","wandering-minstrel","fortress","junk-dealer","village","chapel","steward","market-square","cultist"],
    strategy: "Fortress loops with Procession — Procession plays Fortress twice then trashes it, but Fortress goes to hand not trash. Cultist draws 2 and gives opponents Ruins. Junk Dealer trashes for economy. Nobles and Mining Village provide flexible Actions. Market Square reacts to all the trashing with Gold gains.",
    keyCards: ["fortress","cultist","market-square"],
    difficulty: "advanced",
    tags: ["engine","loop","attack"],
  },
  {
    id: "base-dark-ages-intrigue-002",
    name: "Rebuild Intrigue",
    expansions: ["base","dark-ages","intrigue"],
    cards: ["rebuild","shanty-town","mining-village","wandering-minstrel","chapel","village","steward","upgrade","sage","forager"],
    strategy: "Rebuild's VP acceleration pairs with Upgrade's card-by-card improvement. Sage digs for useful 3+ cost cards. Shanty Town draws when Action-light — useful after chapel sessions. Multiple village sources keep Rebuild playable every turn. Forager trashes for coin equal to unique Treasures in the trash.",
    keyCards: ["rebuild","upgrade","shanty-town"],
    difficulty: "advanced",
    tags: ["thinning","engine","rush"],
  },
  {
    id: "base-dark-ages-intrigue-003",
    name: "Fortified Minion",
    expansions: ["base","dark-ages","intrigue"],
    cards: ["fortress","bandit-camp","wandering-minstrel","minion","shanty-town","village","junk-dealer","cultist","upgrade","market-square"],
    strategy: "Fortress as village, Bandit Camp for Spoils, Wandering Minstrel filtering the top 3. Minion redraws and attacks. Cultist gives +2 Cards while Ruining opponents. Junk Dealer cleans the deck. Market Square turns every trash into a Gold. Shanty Town draws when you've emptied your Action hand for redraw purposes.",
    keyCards: ["fortress","minion","market-square"],
    difficulty: "advanced",
    tags: ["engine","attack","reaction"],
  },

  // ═══════════════════════════════════════════════════════════════
  // TRIPLES — SEASIDE + PROSPERITY + RENAISSANCE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "seaside-prosperity-renaissance-001",
    name: "Grand Fleet",
    expansions: ["prosperity","renaissance","seaside"],
    cards: ["grand-market","workers-village","fishing-village","wharf","mountain-village","silk-merchant","swashbuckler","vault","recruiter","lighthouse"],
    strategy: "Grand Market plus Silk Merchant plus Wharf is a three-Buy engine generating enormous card flow. Swashbuckler compounds Coffers turn over turn. Recruiter converts big cards into Villagers. Vault discards for coins mid-hand. Workers' Village chains easily. Mountain Village recovers key cards from discard.",
    keyCards: ["grand-market","wharf","swashbuckler"],
    difficulty: "advanced",
    tags: ["engine","coffers","draw"],
  },
  {
    id: "seaside-prosperity-renaissance-002",
    name: "Coffers Sea",
    expansions: ["prosperity","renaissance","seaside"],
    cards: ["caravan","fishing-village","tactician","workers-village","ducat","patron","mountain-village","vault","monument","old-witch"],
    strategy: "Ducat and Patron generate Coffers constantly. Monument adds VP tokens per turn. Tactician is the power turn. Old Witch gives +3 Cards and Curses opponents — they can trash a Curse, so it's a softer attack that still stresses them. Mountain Village recovers discarded cards. Vault converts hand excess into economy.",
    keyCards: ["tactician","monument","patron"],
    difficulty: "intermediate",
    tags: ["duration","alt-victory","coffers"],
  },
  {
    id: "seaside-prosperity-renaissance-003",
    name: "Kings Sea Scholar",
    expansions: ["prosperity","renaissance","seaside"],
    cards: ["kings-court","workers-village","fishing-village","wharf","scholar","seer","hideout","silk-merchant","vault","watchtower"],
    strategy: "Scholar draws 7 for free and enables King's Court to be drawn reliably. King's Court tripling Wharf is a guaranteed win. Hideout and Workers' Village provide Actions. Seer draws mid-cost cards to hand. Watchtower controls what you keep from your gains. Silk Merchant is a strong economy and draw card.",
    keyCards: ["kings-court","scholar","wharf"],
    difficulty: "advanced",
    tags: ["engine","multiplier","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // TRIPLES — MENAGERIE + ALLIES + RENAISSANCE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "menagerie-allies-renaissance-001",
    name: "Horse Alliance",
    expansions: ["allies","menagerie","renaissance"],
    cards: ["paddock","destrier","snowy-village","sentinel","destination","silk-merchant","mountain-village","sheepdog","cavalry","acting-troupe"],
    strategy: "Acting Troupe gives 4 Villagers then disappears. Snowy Village gives 4 Actions and a Buy — the most generous village in the game. Destrier becomes cheaper per Horse gained. Cavalry gains Horses and returns you to Action phase on buy. Silk Merchant draws and buys. Sentinel filters the top 5. Sheepdog reacts to every gain for +2 Cards.",
    keyCards: ["snowy-village","acting-troupe","cavalry"],
    nonSupplyCard: "horse",
    difficulty: "intermediate",
    tags: ["engine","villagers","draw"],
  },
  {
    id: "menagerie-allies-renaissance-002",
    name: "Exile Villagers",
    expansions: ["allies","menagerie","renaissance"],
    cards: ["bounty-hunter","cardinal","sanctuary","sentinel","sycophant","mountain-village","hideout","acting-troupe","sheepdog","animal-fair"],
    strategy: "Cardinal Exiles opponent cards. Bounty Hunter Exiles your own for coins. Sycophant gives +1 Action and 3 Coins when 3+ Favors spent. Sentinel trashes and reorders the top 5. Acting Troupe dumps Villagers. Animal Fair can trash an Action from hand instead of paying its cost. Sheepdog reacts to gains. Mountain Village and Hideout for villages.",
    keyCards: ["cardinal","sycophant","acting-troupe"],
    difficulty: "advanced",
    tags: ["exile","favors","attack"],
  },
  {
    id: "menagerie-allies-renaissance-003",
    name: "Favor Horses",
    expansions: ["allies","menagerie","renaissance"],
    cards: ["snowy-village","cavalry","livery","sycophant","broker","galleria","recruiter","mountain-village","kiln","guard-dog"],
    strategy: "Galleria gives Favors whenever you buy cards costing 4 or less — combine with Snowy Village's +1 Buy to buy two cheap things and bank 2 Favors. Broker trashes and converts cost into Actions, Cards, Coins, or Favors. Livery gives Horses per 4+ cost gain. Kiln copies a card you play next. Recruiter converts trashed cards into Villagers.",
    keyCards: ["galleria","broker","livery"],
    nonSupplyCard: "horse",
    difficulty: "advanced",
    tags: ["favors","engine","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ADVENTURES + ALLIES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "adventures-allies-001",
    name: "Reserve Alliance",
    expansions: ["adventures","allies"],
    cards: ["port","coin-of-the-realm","dungeon","gear","wine-merchant","destination","innkeeper","sycophant","galleria","sentinel"],
    strategy: "Port doubles your village buy while building a reserve mat. Coin of the Realm and Dungeon sit on the Tavern mat until needed. Sycophant generates Favors and burst economy. Galleria earns Favors on cheap buys. Innkeeper provides flexible village and hand filtering. Sentinel trashes and filters to keep the engine tight.",
    keyCards: ["port","coin-of-the-realm","sycophant"],
    difficulty: "intermediate",
    tags: ["reserve","favors","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ADVENTURES + CORNUCOPIA
  // ═══════════════════════════════════════════════════════════════
  {
    id: "adventures-cornucopia-001",
    name: "Diverse Expedition",
    expansions: ["adventures","cornucopia"],
    cards: ["port","lost-city","gear","dungeon","ranger","farming-village","hamlet","hunting-party","fairgrounds","horse-traders"],
    strategy: "Fairgrounds rewards deck diversity; Adventures supplies plenty of unique card names. Port gives two villages for one buy. Lost City provides +2 Actions and +2 Cards, turbocharging the engine. Hunting Party reliably finds the exact card needed. Hamlet's flexible +1 Action or +1 Buy covers whatever the turn requires. Ranger's +1 Buy on flip rewards building the expedition token.",
    keyCards: ["fairgrounds","hunting-party","lost-city"],
    difficulty: "intermediate",
    tags: ["alt-victory","draw","diversity"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ADVENTURES + DARK AGES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "adventures-dark-ages-001",
    name: "Relic Ruins",
    expansions: ["adventures","dark-ages"],
    cards: ["relic","giant","port","lost-city","dungeon","wandering-minstrel","fortress","junk-dealer","market-square","forager"],
    strategy: "Relic places a -1 Card token on opponents each turn it's in play, compounding with Giant's alternate attack that trashes mid-cost cards. Fortress is an indestructible village — chain it with Wandering Minstrel for reliable Actions. Junk Dealer and Forager trash Ruins and junk. Market Square reacts to all trashing by generating Gold.",
    keyCards: ["relic","fortress","market-square"],
    difficulty: "advanced",
    tags: ["attack","engine","reaction"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ADVENTURES + EMPIRES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "adventures-empires-001",
    name: "Crown Expedition",
    expansions: ["adventures","empires"],
    cards: ["port","lost-city","dungeon","gear","royal-carriage","crown","city-quarter","encampment","farmers-market","groundskeeper"],
    strategy: "Crown doubles the next Action or Treasure — combine with Royal Carriage to replay the best card yet again. Lost City and Encampment provide generous Action sources. City Quarter draws as many cards as Actions in hand. Port is bought as two villages. Groundskeeper earns VP tokens for every Victory gained. Farmers' Market accumulates VP tokens and provides a Buy.",
    keyCards: ["crown","royal-carriage","city-quarter"],
    difficulty: "advanced",
    tags: ["engine","multiplier","alt-victory"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ADVENTURES + GUILDS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "adventures-guilds-001",
    name: "Coffers Reserve",
    expansions: ["adventures","guilds"],
    cards: ["port","coin-of-the-realm","royal-carriage","storyteller","plaza","herald","merchant-guild","butcher","candlestick-maker","dungeon"],
    strategy: "Plaza discards Treasures to earn Coffers. Merchant Guild banks a Coffer for every card bought. Butcher spends Coffers to freely gain or upgrade cards. Royal Carriage replays your best Action at zero cost. Coin of the Realm sits on the Tavern mat as a free +2 Actions mid-turn. Storyteller spends Treasures for card draw. Herald plays the top card if it's an Action.",
    keyCards: ["plaza","merchant-guild","royal-carriage"],
    difficulty: "intermediate",
    tags: ["coffers","reserve","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ADVENTURES + HINTERLANDS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "adventures-hinterlands-001",
    name: "Distant Roads",
    expansions: ["adventures","hinterlands"],
    cards: ["port","lost-city","bridge-troll","dungeon","gear","inn","highway","haggler","cartographer","spice-merchant"],
    strategy: "Bridge Troll reduces card costs each turn it's in Duration play, stacking with Highway for dramatic discounts. Haggler gains a free cheaper non-Victory card whenever you buy. Port provides cheap villages. Inn reloads discarded Actions from the discard when gained. Spice Merchant trashes Coppers for draw or economy. Cartographer filters the top 4 for smooth draws.",
    keyCards: ["bridge-troll","highway","haggler"],
    difficulty: "intermediate",
    tags: ["economy","duration","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ADVENTURES + INTRIGUE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "adventures-intrigue-001",
    name: "Noble Reserve",
    expansions: ["adventures","intrigue"],
    cards: ["port","lost-city","royal-carriage","coin-of-the-realm","dungeon","nobles","mining-village","conspirator","upgrade","bridge"],
    strategy: "Royal Carriage replays Nobles for free — double +3 Cards or double +2 Actions in a single turn. Coin of the Realm provides on-demand +2 Actions from the Tavern mat. Conspirator triggers after 3 Actions, which is trivial with Port, Lost City, and Mining Village. Bridge reduces costs. Upgrade reshapes mid-tier cards progressively.",
    keyCards: ["royal-carriage","nobles","conspirator"],
    difficulty: "advanced",
    tags: ["engine","reserve","multiplier"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ADVENTURES + MENAGERIE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "adventures-menagerie-001",
    name: "Horse Expedition",
    expansions: ["adventures","menagerie"],
    cards: ["port","lost-city","dungeon","gear","ranger","paddock","destrier","cavalry","snowy-village","sheepdog"],
    strategy: "Horses are disposable +2 Card cards generated en masse. Paddock gives +2 Actions and 2 Horses. Destrier costs less per Horse gained — by mid-game it's a 2-cost village. Cavalry gives two Horses and lets you re-enter the Action phase on buy. Snowy Village gives 4 Actions and a Buy. Sheepdog reacts to every gain for +2 Cards. Port provides cheap dual villages.",
    keyCards: ["paddock","destrier","snowy-village"],
    nonSupplyCard: "horse",
    difficulty: "intermediate",
    tags: ["engine","draw","village"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ADVENTURES + NOCTURNE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "adventures-nocturne-001",
    name: "Night Expedition",
    expansions: ["adventures","nocturne"],
    cards: ["port","lost-city","dungeon","gear","hireling","blessed-village","conclave","cobbler","vampire","skulk"],
    strategy: "Hireling permanently draws a card at the start of every turn — stack several for guaranteed card flow. Cobbler is a Night card gaining any card costing up to 4 for next turn. Vampire attacks and gains non-Vampire cards costing up to 5 on Night plays. Blessed Village receives Boons. Conclave plays an Action from hand for free. Skulk gains Gold when bought. Port and Lost City cover villages.",
    keyCards: ["hireling","cobbler","vampire"],
    difficulty: "intermediate",
    tags: ["night","duration","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ADVENTURES + PLUNDER
  // ═══════════════════════════════════════════════════════════════
  {
    id: "adventures-plunder-001",
    name: "Treasure Fleet",
    expansions: ["adventures","plunder"],
    cards: ["port","lost-city","royal-carriage","dungeon","gear","wealthy-village","harbor-village","pickaxe","sack-of-loot","mapmaker"],
    strategy: "Pickaxe trashes a card costing 3+ to gain powerful Loot. Wealthy Village provides a village and Loot when three different Treasures are in play — easy with Loot variety. Royal Carriage replays the best action. Lost City and Port provide ample Actions. Harbor Village rewards playing multiple Actions with bonus coins. Mapmaker draws and gives a Buy.",
    keyCards: ["pickaxe","wealthy-village","royal-carriage"],
    difficulty: "intermediate",
    tags: ["loot","engine","economy"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ADVENTURES + PROSPERITY
  // ═══════════════════════════════════════════════════════════════
  {
    id: "adventures-prosperity-001",
    name: "Kings Expedition",
    expansions: ["adventures","prosperity"],
    cards: ["port","lost-city","royal-carriage","coin-of-the-realm","workers-village","kings-court","peddler","grand-market","vault","watchtower"],
    strategy: "King's Court tripled with Royal Carriage's replay creates turns of absurd power. Peddler's cost drops to 0 with many Actions in play. Lost City and Port provide cheap villages alongside Workers' Village. Vault converts cards to coins. Grand Market draws and buys. Watchtower controls gained cards instantly. Coin of the Realm is emergency Actions from the mat.",
    keyCards: ["kings-court","royal-carriage","peddler"],
    difficulty: "advanced",
    tags: ["engine","multiplier","economy"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ADVENTURES + RENAISSANCE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "adventures-renaissance-001",
    name: "Villager Reserve",
    expansions: ["adventures","renaissance"],
    cards: ["port","lost-city","royal-carriage","coin-of-the-realm","dungeon","mountain-village","hideout","acting-troupe","recruiter","silk-merchant"],
    strategy: "Acting Troupe gives 4 Villagers before disappearing, providing sustained Action fuel. Recruiter converts trashed cards into Villagers based on cost. Coin of the Realm on the Tavern mat adds +2 Actions from reserve. Royal Carriage replays the best Action. Mountain Village recovers key cards from the discard. Silk Merchant provides draw and a Buy while giving Coffers on entry.",
    keyCards: ["acting-troupe","royal-carriage","recruiter"],
    difficulty: "intermediate",
    tags: ["engine","villagers","reserve"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ADVENTURES + SEASIDE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "adventures-seaside-001",
    name: "Duration Reserve",
    expansions: ["adventures","seaside"],
    cards: ["port","coin-of-the-realm","royal-carriage","dungeon","hireling","wharf","fishing-village","caravan","lighthouse","salvager"],
    strategy: "Hireling and Wharf both stay in play providing persistent draw and Buys. Fishing Village supplies cheap recurring Actions and coins. Royal Carriage replays Wharf or Fishing Village for free each turn. Coin of the Realm provides emergency +2 Actions. Lighthouse blocks attacks while dripping coins. Port chains villages. Salvager converts junk for economy.",
    keyCards: ["hireling","wharf","royal-carriage"],
    difficulty: "intermediate",
    tags: ["duration","reserve","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ALLIES + CORNUCOPIA
  // ═══════════════════════════════════════════════════════════════
  {
    id: "allies-cornucopia-001",
    name: "Diverse Favors",
    expansions: ["allies","cornucopia"],
    cards: ["destination","innkeeper","galleria","sycophant","sentinel","farming-village","hamlet","hunting-party","fairgrounds","horse-traders"],
    strategy: "Fairgrounds VP scales with deck diversity — Allies cards add more unique names cheaply. Galleria earns Favors when buying cheap cards; pair with Hamlet's flexible buy to bank Favors. Hunting Party reliably finds the card you need from any hand. Sycophant provides burst economy when Favors are spent. Innkeeper filters hand and provides village. Sentinel trashes to keep the deck lean.",
    keyCards: ["fairgrounds","galleria","hunting-party"],
    difficulty: "intermediate",
    tags: ["alt-victory","favors","diversity"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ALLIES + DARK AGES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "allies-dark-ages-001",
    name: "Sentinel Scavenger",
    expansions: ["allies","dark-ages"],
    cards: ["sentinel","broker","sycophant","destination","galleria","guard-dog","wandering-minstrel","fortress","junk-dealer","market-square"],
    strategy: "Sentinel filters the top 5 cards and trashes up to 2, keeping the deck pristine. Broker trashes cards and converts their cost into chosen bonuses — including Favors for the Ally. Junk Dealer trashes and draws for free. Market Square reacts to all trashing for free Gold. Fortress is an indestructible village. Sycophant's Favor spending gives +1 Action and burst coins. Guard Dog reacts to attacks for draw.",
    keyCards: ["sentinel","broker","market-square"],
    difficulty: "advanced",
    tags: ["thinning","favors","reaction"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ALLIES + EMPIRES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "allies-empires-001",
    name: "Favor Empire",
    expansions: ["allies","empires"],
    cards: ["destination","innkeeper","sycophant","galleria","sentinel","city-quarter","encampment","crown","farmers-market","groundskeeper"],
    strategy: "City Quarter draws cards equal to Actions in hand — pair with Encampment for cheap villages. Crown doubles an Action or Treasure. Groundskeeper earns VP tokens for every Victory gained. Farmers' Market provides a Buy and accumulates VP tokens. Galleria earns Favors from cheap buys. Sycophant's Favor spending triggers burst economy. Sentinel keeps the deck tidy.",
    keyCards: ["city-quarter","crown","groundskeeper"],
    difficulty: "advanced",
    tags: ["engine","favors","alt-victory"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ALLIES + GUILDS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "allies-guilds-001",
    name: "Coffer Favors",
    expansions: ["allies","guilds"],
    cards: ["destination","innkeeper","sycophant","galleria","sentinel","plaza","herald","merchant-guild","butcher","candlestick-maker"],
    strategy: "Plaza discards Treasures for Coffers; Merchant Guild banks a Coffer per card bought. Butcher spends Coffers to gain or upgrade any card. Galleria earns Favors on cheap buys and Herald is a cantrip that plays the top card if it's an Action. Sycophant spends Favors for burst economy. Destination and Innkeeper provide village effects. Sentinel trashes to keep the engine tight.",
    keyCards: ["merchant-guild","butcher","galleria"],
    difficulty: "intermediate",
    tags: ["coffers","favors","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ALLIES + HINTERLANDS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "allies-hinterlands-001",
    name: "Favor Roads",
    expansions: ["allies","hinterlands"],
    cards: ["destination","innkeeper","sycophant","galleria","sentinel","inn","highway","haggler","cartographer","spice-merchant"],
    strategy: "Highway stacks cost reductions. Haggler gains a free cheaper non-Victory card on every buy — combine with Highway discounts for expensive free gains. Inn provides a village that reloads discarded Actions on gain. Galleria earns Favors on cheap buys alongside Highway. Spice Merchant trashes Copper for draw or economy. Cartographer smooths draws. Sycophant provides burst economy from Favors.",
    keyCards: ["highway","haggler","galleria"],
    difficulty: "intermediate",
    tags: ["economy","favors","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ALLIES + INTRIGUE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "allies-intrigue-001",
    name: "Noble Alliance",
    expansions: ["allies","intrigue"],
    cards: ["destination","innkeeper","sycophant","galleria","sentinel","nobles","mining-village","shanty-town","conspirator","steward"],
    strategy: "Nobles and Conspirator synergise with the heavy Action density from Allies. Conspirator triggers after 3 Actions — easy with Destination, Innkeeper, Nobles, and Mining Village all available. Sycophant spends Favors for +1 Action and burst coins. Shanty Town draws when your hand is Action-light. Steward thins early. Galleria earns Favors on cheap buys.",
    keyCards: ["nobles","conspirator","sycophant"],
    difficulty: "intermediate",
    tags: ["engine","favors","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ALLIES + MENAGERIE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "allies-menagerie-001",
    name: "Favor Stampede",
    expansions: ["allies","menagerie"],
    cards: ["destination","innkeeper","sycophant","galleria","sentinel","snowy-village","paddock","cavalry","sheepdog","animal-fair"],
    strategy: "Snowy Village gives 4 Actions and a Buy — the best village for multi-Action turns. Cavalry gains Horses and returns to Action phase on buy, triggering Sheepdog's +2 Cards reaction. Paddock gives +2 Actions and two Horses. Galleria earns Favors on cheap buys from Cavalry's multiple Horse gains. Sycophant's Favor spending funds the engine. Animal Fair can trash an Action instead of paying.",
    keyCards: ["snowy-village","cavalry","galleria"],
    nonSupplyCard: "horse",
    difficulty: "intermediate",
    tags: ["engine","favors","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ALLIES + NOCTURNE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "allies-nocturne-001",
    name: "Night Favors",
    expansions: ["allies","nocturne"],
    cards: ["destination","innkeeper","sycophant","galleria","sentinel","blessed-village","conclave","cobbler","skulk","shepherd"],
    strategy: "Cobbler is a Night card gaining any card costing up to 4 to hand next turn — use it to chain gaining and playing Galleria for Favors. Blessed Village receives a Boon on gain or start of turn. Conclave plays an Action from hand for free. Shepherd discards Victory cards to draw 2 each, keeping your hand full. Skulk gains Gold when bought. Innkeeper and Destination provide villages. Sycophant spends Favors for coins.",
    keyCards: ["cobbler","galleria","blessed-village"],
    difficulty: "intermediate",
    tags: ["night","favors","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ALLIES + PLUNDER
  // ═══════════════════════════════════════════════════════════════
  {
    id: "allies-plunder-001",
    name: "Favor Fleet",
    expansions: ["allies","plunder"],
    cards: ["destination","innkeeper","sycophant","galleria","sentinel","harbor-village","wealthy-village","pickaxe","mapmaker","rope"],
    strategy: "Pickaxe trashes a card costing 3+ to gain Loot. Wealthy Village provides a village and Loot when three different Treasures are in play. Harbor Village rewards multiple Actions with bonus coins. Galleria earns Favors on cheap buys. Rope is a Duration that draws and trashes next turn while giving a Buy now. Sycophant's Favor spending provides burst economy. Mapmaker draws and filters.",
    keyCards: ["pickaxe","wealthy-village","galleria"],
    difficulty: "intermediate",
    tags: ["loot","favors","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ALLIES + PROSPERITY
  // ═══════════════════════════════════════════════════════════════
  {
    id: "allies-prosperity-001",
    name: "Favor Fortune",
    expansions: ["allies","prosperity"],
    cards: ["destination","innkeeper","sycophant","galleria","sentinel","workers-village","city","grand-market","vault","monument"],
    strategy: "Monument accumulates VP tokens every turn it's played. City surges as piles empty. Grand Market draws, provides an Action, and a Buy. Workers' Village chains cheaply. Galleria earns Favors on cheap buys. Sycophant's Favor spending triggers +3 Coins. Vault converts excess cards into coins. Destination and Innkeeper are solid villages for chaining.",
    keyCards: ["monument","city","galleria"],
    difficulty: "intermediate",
    tags: ["alt-victory","favors","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ALLIES + RENAISSANCE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "allies-renaissance-001",
    name: "Favor Villagers",
    expansions: ["allies","renaissance"],
    cards: ["destination","innkeeper","sycophant","galleria","sentinel","mountain-village","hideout","acting-troupe","recruiter","silk-merchant"],
    strategy: "Acting Troupe dumps 4 Villagers then vanishes — Recruiter converts trashed cards into more Villagers. Mountain Village recovers key cards from the discard. Silk Merchant draws and buys while giving Coffers on entry. Galleria earns Favors on cheap buys. Sycophant spends Favors for +1 Action and burst economy. Innkeeper and Destination are clean village sources.",
    keyCards: ["acting-troupe","recruiter","galleria"],
    difficulty: "intermediate",
    tags: ["villagers","favors","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — ALLIES + SEASIDE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "allies-seaside-001",
    name: "Favor Fleet",
    expansions: ["allies","seaside"],
    cards: ["destination","innkeeper","sycophant","galleria","sentinel","fishing-village","wharf","caravan","lighthouse","salvager"],
    strategy: "Wharf provides sustained draw and Buys across two turns — stack several for dominant card flow. Fishing Village provides cheap recurring Actions and coins. Lighthouse blocks attacks while dripping coins. Galleria earns Favors on cheap buys alongside Fishing Village gains. Sycophant provides burst economy when Favors are spent. Salvager converts junk for economy. Caravan drips cards over two turns.",
    keyCards: ["wharf","galleria","fishing-village"],
    difficulty: "intermediate",
    tags: ["duration","favors","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — CORNUCOPIA + DARK AGES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "cornucopia-dark-ages-001",
    name: "Jester's Dark Fair",
    expansions: ["cornucopia","dark-ages"],
    cards: ["farming-village","hamlet","jester","hunting-party","fairgrounds","wandering-minstrel","fortress","junk-dealer","market-square","forager"],
    strategy: "Jester punishes Victory-heavy decks and gains copies of revealed actions or Treasures. Fairgrounds rewards diversity — Dark Ages cards add many unique names. Fortress as indestructible village. Wandering Minstrel reveals top 3 and keeps Actions. Hunting Party reliably draws what you need. Market Square reacts to junk-dealing trashing for free Gold. Forager trashes for coins from unique Treasures.",
    keyCards: ["jester","fortress","market-square"],
    difficulty: "advanced",
    tags: ["alt-victory","attack","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — CORNUCOPIA + EMPIRES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "cornucopia-empires-001",
    name: "Tournament Empire",
    expansions: ["cornucopia","empires"],
    cards: ["farming-village","hamlet","tournament","hunting-party","fairgrounds","city-quarter","encampment","crown","farmers-market","groundskeeper"],
    strategy: "Tournament grants Prizes when you reveal a Province — combine with Groundskeeper to earn VP tokens every time you gain a Victory card. Crown doubles the next Action or Treasure. City Quarter draws as many cards as Actions in hand. Fairgrounds VP grows with deck diversity. Farming Village and Hamlet ensure reliable Action chains. Farmers' Market provides a Buy and accumulates VP tokens.",
    keyCards: ["tournament","groundskeeper","city-quarter"],
    difficulty: "advanced",
    tags: ["alt-victory","engine","attack"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — CORNUCOPIA + HINTERLANDS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "cornucopia-hinterlands-001",
    name: "Fair Roads",
    expansions: ["cornucopia","hinterlands"],
    cards: ["farming-village","hamlet","hunting-party","fairgrounds","horse-traders","inn","highway","haggler","cartographer","jack-of-all-trades"],
    strategy: "Highway drives down costs and stacks with Haggler's free gains for an explosive value engine. Fairgrounds rewards deck diversity — both sets contribute many unique names. Hunting Party reliably finds the exact card needed. Inn reloads discarded Actions when gained. Jack of All Trades gains Silver, draws to 5, and trashes junk. Hamlet gives flexible +Action or +Buy.",
    keyCards: ["highway","fairgrounds","hunting-party"],
    difficulty: "intermediate",
    tags: ["alt-victory","economy","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — CORNUCOPIA + INTRIGUE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "cornucopia-intrigue-001",
    name: "Noble Fair",
    expansions: ["cornucopia","intrigue"],
    cards: ["farming-village","hamlet","hunting-party","fairgrounds","tournament","nobles","mining-village","shanty-town","conspirator","upgrade"],
    strategy: "Nobles and Farming Village provide flexible Action and draw options. Conspirator triggers after 3 Actions — easy with four village types available. Tournament grants Prizes on Province reveals. Fairgrounds VP grows with the dense diversity across both sets. Hunting Party reliably finds the card needed. Shanty Town draws when Action-light. Upgrade reshapes mid-tier cards.",
    keyCards: ["nobles","conspirator","fairgrounds"],
    difficulty: "advanced",
    tags: ["alt-victory","engine","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — CORNUCOPIA + MENAGERIE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "cornucopia-menagerie-001",
    name: "Animal Fair",
    expansions: ["cornucopia","menagerie"],
    cards: ["farming-village","hamlet","hunting-party","fairgrounds","horse-traders","snowy-village","paddock","cavalry","sheepdog","animal-fair"],
    strategy: "Fairgrounds with Cornucopia and Menagerie gives enormous card name diversity. Snowy Village provides 4 Actions and a Buy. Paddock gives +2 Actions and two Horses. Cavalry gains Horses and re-enters the Action phase on buy, triggering Sheepdog reactions for draw. Animal Fair trashes an Action instead of paying cost. Hunting Party finds key cards reliably.",
    keyCards: ["fairgrounds","snowy-village","cavalry"],
    nonSupplyCard: "horse",
    difficulty: "intermediate",
    tags: ["alt-victory","engine","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — CORNUCOPIA + NOCTURNE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "cornucopia-nocturne-001",
    name: "Dark Carnival",
    expansions: ["cornucopia","nocturne"],
    cards: ["farming-village","hamlet","hunting-party","fairgrounds","jester","blessed-village","conclave","cobbler","shepherd","skulk"],
    strategy: "Jester punishes Victory-heavy decks and grants copies of revealed Actions/Treasures. Fairgrounds VP grows with diversity across both sets. Cobbler is a Night card gaining any card up to 4 for next turn. Blessed Village receives Boons. Shepherd discards Victories to draw 2 each. Skulk gains Gold when bought. Hunting Party finds the card needed. Conclave plays an Action from hand for free.",
    keyCards: ["jester","fairgrounds","cobbler"],
    difficulty: "intermediate",
    tags: ["alt-victory","night","attack"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — CORNUCOPIA + PLUNDER
  // ═══════════════════════════════════════════════════════════════
  {
    id: "cornucopia-plunder-001",
    name: "Fair Plunder",
    expansions: ["cornucopia","plunder"],
    cards: ["farming-village","hamlet","hunting-party","fairgrounds","horse-traders","wealthy-village","harbor-village","pickaxe","mapmaker","mining-road"],
    strategy: "Fairgrounds rewards deck diversity — Plunder's Loot cards add many unique Treasure names. Wealthy Village provides a village and Loot when three different Treasures are in play. Pickaxe trashes a card costing 3+ to gain Loot. Harbor Village rewards multiple Actions with bonus coins. Mining Road gives a Buy and lets you play gained Treasures. Hunting Party finds key cards. Mapmaker draws and filters.",
    keyCards: ["fairgrounds","wealthy-village","pickaxe"],
    difficulty: "intermediate",
    tags: ["alt-victory","loot","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — CORNUCOPIA + PROSPERITY
  // ═══════════════════════════════════════════════════════════════
  {
    id: "cornucopia-prosperity-001",
    name: "Fair Fortune",
    expansions: ["cornucopia","prosperity"],
    cards: ["farming-village","hamlet","hunting-party","fairgrounds","tournament","workers-village","city","grand-market","peddler","vault"],
    strategy: "Fairgrounds VP combined with Colony as the win condition creates a dual scoring axis. City surges as piles empty. Peddler's cost drops to 0 with many Actions. Grand Market draws and buys. Workers' Village chains cheaply alongside Farming Village. Tournament grants Prizes on Province reveals. Vault discards excess cards for coins. Hunting Party finds the card needed every turn.",
    keyCards: ["fairgrounds","city","grand-market"],
    difficulty: "advanced",
    tags: ["alt-victory","engine","economy"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — CORNUCOPIA + RENAISSANCE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "cornucopia-renaissance-001",
    name: "Scholar's Fair",
    expansions: ["cornucopia","renaissance"],
    cards: ["farming-village","hamlet","hunting-party","fairgrounds","horse-traders","mountain-village","hideout","acting-troupe","recruiter","silk-merchant"],
    strategy: "Fairgrounds rewards diversity — Renaissance's Villager and Coffer cards add many unique names cheaply. Acting Troupe dumps 4 Villagers then disappears. Recruiter converts trashed cards into Villagers. Silk Merchant draws and buys. Mountain Village recovers discarded cards. Hunting Party reliably finds the card needed. Hamlet's flexible +Action or +Buy covers whatever the turn requires.",
    keyCards: ["fairgrounds","acting-troupe","hunting-party"],
    difficulty: "intermediate",
    tags: ["alt-victory","villagers","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — CORNUCOPIA + SEASIDE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "cornucopia-seaside-001",
    name: "Carnival Sea",
    expansions: ["cornucopia","seaside"],
    cards: ["farming-village","hamlet","hunting-party","fairgrounds","horse-traders","fishing-village","wharf","caravan","lighthouse","salvager"],
    strategy: "Wharf's sustained draw and Buys across two turns keeps the engine running. Fairgrounds VP grows quickly with both sets adding unique card names. Farming Village and Fishing Village provide flexible village types. Hunting Party finds what you need reliably. Caravan drips cards over two turns. Horse Traders provides burst economy and a Reaction. Salvager converts junk for economy.",
    keyCards: ["fairgrounds","wharf","hunting-party"],
    difficulty: "intermediate",
    tags: ["alt-victory","duration","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — DARK AGES + EMPIRES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "dark-ages-empires-001",
    name: "Ruins Empire",
    expansions: ["dark-ages","empires"],
    cards: ["wandering-minstrel","fortress","junk-dealer","cultist","market-square","city-quarter","encampment","crown","temple","groundskeeper"],
    strategy: "Cultist draws 2 and gives opponents Ruins — opponents trash Ruins, which feeds Market Square Gold reactions. Crown doubles the next Action. City Quarter draws cards equal to Actions in hand. Temple trashes up to 3 different cards accumulating VP tokens — claim them on Province gain. Groundskeeper earns VP tokens for every Victory card gained. Fortress is an indestructible village.",
    keyCards: ["cultist","crown","groundskeeper"],
    difficulty: "advanced",
    tags: ["attack","alt-victory","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — DARK AGES + GUILDS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "dark-ages-guilds-001",
    name: "Dark Coffers",
    expansions: ["dark-ages","guilds"],
    cards: ["wandering-minstrel","fortress","junk-dealer","market-square","forager","plaza","herald","merchant-guild","butcher","candlestick-maker"],
    strategy: "Plaza discards Treasures for Coffers. Merchant Guild banks a Coffer per card bought. Butcher spends Coffers to gain or upgrade cards freely. Junk Dealer trashes for economy. Market Square reacts to trashing for Gold. Herald plays top card if it's an Action. Forager trashes for coins per unique Treasure in trash. Fortress is the indestructible village. Wandering Minstrel keeps Actions flowing.",
    keyCards: ["plaza","merchant-guild","market-square"],
    difficulty: "advanced",
    tags: ["coffers","thinning","reaction"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — DARK AGES + HINTERLANDS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "dark-ages-hinterlands-001",
    name: "Dark Roads",
    expansions: ["dark-ages","hinterlands"],
    cards: ["wandering-minstrel","fortress","junk-dealer","market-square","cultist","inn","highway","haggler","cartographer","spice-merchant"],
    strategy: "Highway reduces costs while Haggler gains a free cheaper non-Victory card on every buy. Junk Dealer trashes for economy. Market Square reacts to trashing for Gold. Cultist draws and gives opponents Ruins. Inn reloads discarded Actions on gain. Spice Merchant trashes Copper for draw or economy. Wandering Minstrel keeps Actions flowing. Fortress is the indestructible village.",
    keyCards: ["highway","haggler","market-square"],
    difficulty: "intermediate",
    tags: ["economy","thinning","reaction"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — DARK AGES + MENAGERIE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "dark-ages-menagerie-001",
    name: "Dark Stampede",
    expansions: ["dark-ages","menagerie"],
    cards: ["wandering-minstrel","fortress","junk-dealer","market-square","cultist","snowy-village","paddock","cavalry","sheepdog","scrap"],
    strategy: "Cavalry gains Horses and re-enters the Action phase on buy, triggering Sheepdog reactions for +2 Cards. Paddock gives +2 Actions and two Horses. Scrap trashes for flexible bonuses. Junk Dealer trashes Ruins and junk for economy. Market Square reacts to all trashing for Gold. Cultist draws and gives opponents Ruins. Fortress is indestructible. Wandering Minstrel keeps Actions flowing.",
    keyCards: ["cavalry","scrap","market-square"],
    nonSupplyCard: "horse",
    difficulty: "advanced",
    tags: ["attack","reaction","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — DARK AGES + NOCTURNE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "dark-ages-nocturne-001",
    name: "Crypt Ruins",
    expansions: ["dark-ages","nocturne"],
    cards: ["wandering-minstrel","fortress","junk-dealer","cultist","market-square","blessed-village","conclave","cobbler","vampire","shepherd"],
    strategy: "Cobbler gains any card up to 4 at Night for next turn. Vampire attacks and gains non-Vampire cards up to 5 at Night. Cultist draws and gives Ruins to opponents. Market Square reacts to trashing for Gold. Shepherd discards Victories to draw 2 each. Blessed Village receives Boons. Fortress is indestructible. Junk Dealer cleans junk. Wandering Minstrel keeps Actions flowing.",
    keyCards: ["cobbler","vampire","market-square"],
    difficulty: "advanced",
    tags: ["night","attack","reaction"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — DARK AGES + PLUNDER
  // ═══════════════════════════════════════════════════════════════
  {
    id: "dark-ages-plunder-001",
    name: "Dark Plunder",
    expansions: ["dark-ages","plunder"],
    cards: ["wandering-minstrel","fortress","junk-dealer","market-square","cultist","wealthy-village","harbor-village","pickaxe","sack-of-loot","rope"],
    strategy: "Pickaxe trashes a card costing 3+ to gain Loot. Market Square reacts to trashing for Gold — combine with junk Dealer and Pickaxe for constant Gold gains. Wealthy Village provides a village and Loot when three different Treasures are in play. Harbor Village rewards multiple Actions with bonus coins. Rope draws and trashes next turn. Cultist draws and gives opponents Ruins.",
    keyCards: ["pickaxe","market-square","wealthy-village"],
    difficulty: "advanced",
    tags: ["loot","reaction","thinning"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — DARK AGES + PROSPERITY
  // ═══════════════════════════════════════════════════════════════
  {
    id: "dark-ages-prosperity-001",
    name: "Dark Prosperity",
    expansions: ["dark-ages","prosperity"],
    cards: ["wandering-minstrel","fortress","junk-dealer","cultist","market-square","workers-village","kings-court","city","grand-market","watchtower"],
    strategy: "King's Court tripling Cultist draws 6 cards and gives opponents 3 Ruins each — opponents trashing Ruins triggers Market Square Gold reactions. City surges as piles empty. Grand Market provides draw and Buy. Workers' Village chains cheaply. Junk Dealer cleans the deck. Watchtower controls gained cards. Fortress is indestructible.",
    keyCards: ["kings-court","cultist","market-square"],
    difficulty: "advanced",
    tags: ["engine","multiplier","attack"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — DARK AGES + RENAISSANCE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "dark-ages-renaissance-001",
    name: "Dark Renaissance",
    expansions: ["dark-ages","renaissance"],
    cards: ["wandering-minstrel","fortress","junk-dealer","market-square","cultist","mountain-village","hideout","acting-troupe","recruiter","silk-merchant"],
    strategy: "Acting Troupe dumps 4 Villagers then vanishes. Recruiter converts trashed cards into Villagers based on cost — synergises perfectly with Junk Dealer and Cultist's Ruins. Market Square reacts to all trashing for Gold. Silk Merchant provides draw and a Buy while giving Coffers on entry. Mountain Village recovers discarded cards. Wandering Minstrel and Fortress provide indestructible village chaining.",
    keyCards: ["acting-troupe","recruiter","market-square"],
    difficulty: "advanced",
    tags: ["thinning","villagers","reaction"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — DARK AGES + SEASIDE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "dark-ages-seaside-001",
    name: "Dark Seas",
    expansions: ["dark-ages","seaside"],
    cards: ["wandering-minstrel","fortress","junk-dealer","market-square","cultist","fishing-village","wharf","caravan","lighthouse","salvager"],
    strategy: "Wharf provides sustained draw and Buys across two turns. Lighthouse blocks attacks while dripping coins. Fishing Village provides cheap recurring Actions and coins. Junk Dealer trashes Ruins and junk for economy. Market Square reacts to all trashing for Gold — a Lighthouse-protected deck can freely trash without fear. Cultist draws and gives opponents Ruins. Fortress is indestructible.",
    keyCards: ["wharf","market-square","junk-dealer"],
    difficulty: "intermediate",
    tags: ["duration","thinning","reaction"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — EMPIRES + GUILDS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "empires-guilds-001",
    name: "Coffer Empire",
    expansions: ["empires","guilds"],
    cards: ["city-quarter","encampment","crown","farmers-market","groundskeeper","plaza","herald","merchant-guild","butcher","candlestick-maker"],
    strategy: "Plaza discards Treasures for Coffers. Merchant Guild banks a Coffer per card bought. Butcher spends Coffers to gain or upgrade cards freely. Crown doubles the next Action or Treasure — double Plaza for double Coffers. City Quarter draws cards equal to Actions in hand. Groundskeeper earns VP tokens for every Victory gained. Farmers' Market provides a Buy and accumulates VP tokens.",
    keyCards: ["crown","merchant-guild","groundskeeper"],
    difficulty: "advanced",
    tags: ["coffers","alt-victory","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — EMPIRES + HINTERLANDS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "empires-hinterlands-001",
    name: "Empire Roads",
    expansions: ["empires","hinterlands"],
    cards: ["city-quarter","encampment","crown","farmers-market","groundskeeper","inn","highway","haggler","cartographer","spice-merchant"],
    strategy: "Highway stacks cost reductions. Haggler gains a free cheaper non-Victory card on every buy — with Highway, expensive free cards become common. Crown doubles the next Action or Treasure. City Quarter draws cards equal to Actions in hand. Groundskeeper earns VP tokens for every Victory gained. Inn provides a village that reloads discarded Actions. Spice Merchant trashes Copper for draw or economy.",
    keyCards: ["highway","crown","groundskeeper"],
    difficulty: "intermediate",
    tags: ["economy","engine","alt-victory"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — EMPIRES + INTRIGUE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "empires-intrigue-001",
    name: "Noble Empire",
    expansions: ["empires","intrigue"],
    cards: ["city-quarter","encampment","crown","farmers-market","groundskeeper","nobles","mining-village","shanty-town","conspirator","steward"],
    strategy: "Crown doubles Nobles for +6 Cards or +4 Actions in one play. Conspirator triggers after 3 Actions. City Quarter draws cards equal to Actions in hand. Groundskeeper earns VP tokens for every Victory gained. Nobles, Mining Village, and Encampment provide abundant Action sources. Shanty Town draws when Action-light. Steward thins or draws. Farmers' Market provides a Buy.",
    keyCards: ["crown","nobles","groundskeeper"],
    difficulty: "advanced",
    tags: ["engine","multiplier","alt-victory"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — EMPIRES + MENAGERIE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "empires-menagerie-001",
    name: "Empire Stampede",
    expansions: ["empires","menagerie"],
    cards: ["city-quarter","encampment","crown","farmers-market","groundskeeper","snowy-village","paddock","cavalry","sheepdog","animal-fair"],
    strategy: "Snowy Village gives 4 Actions and a Buy. Paddock gives +2 Actions and two Horses. Cavalry gains Horses and re-enters the Action phase on buy, triggering Sheepdog reactions. Crown doubles the next Action or Treasure. City Quarter draws cards equal to Actions in hand. Groundskeeper earns VP tokens for every Victory gained. Farmers' Market provides a Buy and accumulates VP tokens. Animal Fair can trash an Action instead of paying.",
    keyCards: ["snowy-village","crown","groundskeeper"],
    nonSupplyCard: "horse",
    difficulty: "advanced",
    tags: ["engine","alt-victory","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — EMPIRES + NOCTURNE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "empires-nocturne-001",
    name: "Dark Empire",
    expansions: ["empires","nocturne"],
    cards: ["city-quarter","encampment","crown","farmers-market","groundskeeper","blessed-village","conclave","cobbler","vampire","skulk"],
    strategy: "Cobbler gains any card up to 4 at Night for next turn. Vampire attacks and gains non-Vampire cards up to 5 at Night. Crown doubles the next Action or Treasure. City Quarter draws cards equal to Actions in hand. Groundskeeper earns VP tokens for every Victory gained. Blessed Village receives Boons. Conclave plays an Action from hand for free. Skulk gains Gold when bought. Farmers' Market provides a Buy.",
    keyCards: ["cobbler","crown","groundskeeper"],
    difficulty: "advanced",
    tags: ["night","alt-victory","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — EMPIRES + PLUNDER
  // ═══════════════════════════════════════════════════════════════
  {
    id: "empires-plunder-001",
    name: "Empire Plunder",
    expansions: ["empires","plunder"],
    cards: ["city-quarter","encampment","crown","farmers-market","groundskeeper","wealthy-village","harbor-village","pickaxe","sack-of-loot","mapmaker"],
    strategy: "Pickaxe trashes a card costing 3+ to gain Loot. Wealthy Village provides a village and Loot when three different Treasures are in play. Crown doubles the next Action or Treasure — double Pickaxe for two Loot. City Quarter draws cards equal to Actions in hand. Groundskeeper earns VP tokens for every Victory gained. Harbor Village rewards multiple Actions with bonus coins. Mapmaker draws and gives a Buy.",
    keyCards: ["crown","pickaxe","groundskeeper"],
    difficulty: "advanced",
    tags: ["loot","alt-victory","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — EMPIRES + PROSPERITY
  // ═══════════════════════════════════════════════════════════════
  {
    id: "empires-prosperity-001",
    name: "Empire of Plenty",
    expansions: ["empires","prosperity"],
    cards: ["city-quarter","encampment","crown","farmers-market","groundskeeper","workers-village","kings-court","city","grand-market","monument"],
    strategy: "King's Court tripling City Quarter draws massive cards. City surges as piles empty. Grand Market draws and buys. Workers' Village chains cheaply. Crown doubles any Action or Treasure. Groundskeeper earns VP tokens for every Victory gained. Monument accumulates VP tokens every turn it's played. Farmers' Market provides a Buy and accumulates VP tokens. Encampment provides another cheap village.",
    keyCards: ["kings-court","city-quarter","groundskeeper"],
    difficulty: "advanced",
    tags: ["engine","multiplier","alt-victory"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — EMPIRES + RENAISSANCE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "empires-renaissance-001",
    name: "Villager Empire",
    expansions: ["empires","renaissance"],
    cards: ["city-quarter","encampment","crown","farmers-market","groundskeeper","mountain-village","hideout","acting-troupe","recruiter","silk-merchant"],
    strategy: "Acting Troupe dumps 4 Villagers then vanishes. Recruiter converts trashed cards into Villagers. City Quarter draws cards equal to Actions in hand — more Villagers means more cards. Crown doubles an Action or Treasure. Groundskeeper earns VP tokens for every Victory gained. Silk Merchant provides draw and a Buy. Mountain Village recovers discarded cards. Farmers' Market provides a Buy.",
    keyCards: ["city-quarter","acting-troupe","groundskeeper"],
    difficulty: "advanced",
    tags: ["engine","villagers","alt-victory"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — EMPIRES + SEASIDE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "empires-seaside-001",
    name: "Empire Seas",
    expansions: ["empires","seaside"],
    cards: ["city-quarter","encampment","crown","farmers-market","groundskeeper","fishing-village","wharf","caravan","lighthouse","salvager"],
    strategy: "Wharf provides sustained draw and Buys across two turns. Fishing Village provides cheap recurring Actions and coins. Crown doubles the next Action or Treasure. City Quarter draws cards equal to Actions in hand. Groundskeeper earns VP tokens for every Victory gained. Lighthouse blocks attacks while dripping coins. Salvager converts junk for economy. Caravan drips cards. Farmers' Market provides a Buy.",
    keyCards: ["wharf","crown","groundskeeper"],
    difficulty: "intermediate",
    tags: ["duration","alt-victory","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — GUILDS + HINTERLANDS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "guilds-hinterlands-001",
    name: "Overpay Roads",
    expansions: ["guilds","hinterlands"],
    cards: ["plaza","herald","merchant-guild","butcher","candlestick-maker","inn","highway","haggler","cartographer","spice-merchant"],
    strategy: "Highway stacks cost reductions. Haggler gains a free cheaper non-Victory card on every buy. Plaza discards Treasures for Coffers. Merchant Guild banks a Coffer per card bought. Butcher spends Coffers to gain or upgrade cards. Herald plays the top card if it's an Action. Inn provides a village that reloads discarded Actions. Spice Merchant trashes Copper for draw or economy. Cartographer smooths draws.",
    keyCards: ["highway","haggler","merchant-guild"],
    difficulty: "intermediate",
    tags: ["economy","coffers","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — GUILDS + INTRIGUE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "guilds-intrigue-001",
    name: "Guild Nobles",
    expansions: ["guilds","intrigue"],
    cards: ["plaza","herald","merchant-guild","butcher","candlestick-maker","nobles","mining-village","shanty-town","conspirator","steward"],
    strategy: "Plaza discards Treasures for Coffers. Merchant Guild banks a Coffer per card bought. Butcher spends Coffers to gain or upgrade cards. Herald plays top card if it's an Action. Nobles and Mining Village provide flexible Action chains. Conspirator triggers after 3 Actions — easy with all the village types. Shanty Town draws when Action-light. Steward thins early.",
    keyCards: ["merchant-guild","nobles","conspirator"],
    difficulty: "intermediate",
    tags: ["coffers","engine","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — GUILDS + MENAGERIE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "guilds-menagerie-001",
    name: "Guild Stampede",
    expansions: ["guilds","menagerie"],
    cards: ["plaza","herald","merchant-guild","butcher","candlestick-maker","snowy-village","paddock","cavalry","sheepdog","animal-fair"],
    strategy: "Cavalry gains Horses and re-enters the Action phase on buy, triggering Sheepdog reactions for +2 Cards. Paddock gives +2 Actions and two Horses. Snowy Village provides 4 Actions and a Buy. Plaza discards Treasures for Coffers. Merchant Guild banks a Coffer per card bought. Butcher spends Coffers to gain or upgrade. Herald plays the top card if it's an Action. Animal Fair can trash an Action instead of paying.",
    keyCards: ["cavalry","merchant-guild","snowy-village"],
    nonSupplyCard: "horse",
    difficulty: "intermediate",
    tags: ["coffers","engine","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — GUILDS + NOCTURNE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "guilds-nocturne-001",
    name: "Dark Guild",
    expansions: ["guilds","nocturne"],
    cards: ["plaza","herald","merchant-guild","butcher","candlestick-maker","blessed-village","conclave","cobbler","shepherd","skulk"],
    strategy: "Cobbler gains any card up to 4 at Night for next turn — gain Candlestick Maker for early Coffers, or gain Plaza to set up Coffer generation. Shepherd discards Victories to draw 2 each. Blessed Village receives Boons. Conclave plays an Action from hand for free. Skulk gains Gold when bought. Plaza discards Treasures for Coffers. Merchant Guild banks a Coffer per card bought. Butcher spends Coffers freely.",
    keyCards: ["cobbler","merchant-guild","shepherd"],
    difficulty: "intermediate",
    tags: ["night","coffers","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — GUILDS + PLUNDER
  // ═══════════════════════════════════════════════════════════════
  {
    id: "guilds-plunder-001",
    name: "Guild Fleet",
    expansions: ["guilds","plunder"],
    cards: ["plaza","herald","merchant-guild","butcher","candlestick-maker","wealthy-village","harbor-village","pickaxe","mapmaker","mining-road"],
    strategy: "Pickaxe trashes a card costing 3+ to gain Loot. Wealthy Village provides a village and Loot when three different Treasures are in play. Harbor Village rewards multiple Actions with bonus coins. Plaza discards Treasures for Coffers. Merchant Guild banks a Coffer per card bought. Butcher spends Coffers to gain or upgrade. Mining Road gives a Buy and lets you play gained Treasures. Mapmaker draws and filters.",
    keyCards: ["pickaxe","merchant-guild","wealthy-village"],
    difficulty: "intermediate",
    tags: ["loot","coffers","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — GUILDS + PROSPERITY
  // ═══════════════════════════════════════════════════════════════
  {
    id: "guilds-prosperity-001",
    name: "Grand Guild",
    expansions: ["guilds","prosperity"],
    cards: ["plaza","herald","merchant-guild","butcher","candlestick-maker","workers-village","city","grand-market","vault","monument"],
    strategy: "Monument accumulates VP tokens every turn it's played. City surges as piles empty. Grand Market draws and buys — never buy it with Copper in hand. Workers' Village chains cheaply. Plaza discards Treasures for Coffers. Merchant Guild banks a Coffer per card bought. Butcher spends Coffers to gain or upgrade. Herald plays top card. Vault discards excess for coins.",
    keyCards: ["monument","merchant-guild","city"],
    difficulty: "intermediate",
    tags: ["coffers","alt-victory","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — GUILDS + RENAISSANCE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "guilds-renaissance-001",
    name: "Double Coffers",
    expansions: ["guilds","renaissance"],
    cards: ["plaza","herald","merchant-guild","butcher","candlestick-maker","mountain-village","hideout","acting-troupe","recruiter","silk-merchant"],
    strategy: "Double Coffers engine: Guilds generates Coffers from Plaza and Merchant Guild; Renaissance adds Silk Merchant's Coffers on entry. Acting Troupe dumps 4 Villagers. Recruiter converts trashed cards into Villagers. Mountain Village recovers discarded cards. Herald plays top card. Butcher spends Coffers to gain or upgrade. Hideout is a village with thinning upside.",
    keyCards: ["merchant-guild","acting-troupe","butcher"],
    difficulty: "intermediate",
    tags: ["coffers","villagers","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — GUILDS + SEASIDE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "guilds-seaside-001",
    name: "Sea Guild",
    expansions: ["guilds","seaside"],
    cards: ["plaza","herald","merchant-guild","butcher","candlestick-maker","fishing-village","wharf","caravan","lighthouse","salvager"],
    strategy: "Wharf provides sustained draw and Buys across two turns. Fishing Village provides cheap recurring Actions and coins. Plaza discards Treasures for Coffers. Merchant Guild banks a Coffer per card bought. Butcher spends Coffers to gain or upgrade. Herald plays top card. Lighthouse blocks attacks. Salvager converts junk for economy. Caravan drips cards over two turns.",
    keyCards: ["wharf","merchant-guild","fishing-village"],
    difficulty: "intermediate",
    tags: ["coffers","duration","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — HINTERLANDS + MENAGERIE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "hinterlands-menagerie-001",
    name: "Road Stampede",
    expansions: ["hinterlands","menagerie"],
    cards: ["inn","highway","haggler","cartographer","spice-merchant","snowy-village","paddock","cavalry","sheepdog","animal-fair"],
    strategy: "Highway stacks cost reductions. Haggler gains a free cheaper non-Victory card on every buy — combine with Highway for expensive free gains. Cavalry gains Horses and re-enters the Action phase on buy, triggering Sheepdog reactions. Paddock gives +2 Actions and two Horses. Snowy Village provides 4 Actions and a Buy. Inn reloads discarded Actions. Spice Merchant trashes Copper for draw or economy.",
    keyCards: ["highway","cavalry","snowy-village"],
    nonSupplyCard: "horse",
    difficulty: "intermediate",
    tags: ["economy","engine","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — HINTERLANDS + NOCTURNE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "hinterlands-nocturne-001",
    name: "Night Roads",
    expansions: ["hinterlands","nocturne"],
    cards: ["inn","highway","haggler","cartographer","spice-merchant","blessed-village","conclave","cobbler","vampire","shepherd"],
    strategy: "Cobbler gains any card up to 4 at Night for next turn — gain Highway or Haggler to accelerate your economy setup. Vampire attacks and gains non-Vampire cards up to 5 at Night. Highway stacks cost reductions. Haggler gains a free cheaper non-Victory card on every buy. Inn reloads discarded Actions on gain. Shepherd discards Victories to draw 2 each. Spice Merchant trashes Copper.",
    keyCards: ["cobbler","highway","haggler"],
    difficulty: "intermediate",
    tags: ["night","economy","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — HINTERLANDS + PLUNDER
  // ═══════════════════════════════════════════════════════════════
  {
    id: "hinterlands-plunder-001",
    name: "Road Plunder",
    expansions: ["hinterlands","plunder"],
    cards: ["inn","highway","haggler","cartographer","spice-merchant","wealthy-village","harbor-village","pickaxe","mapmaker","mining-road"],
    strategy: "Highway stacks cost reductions. Haggler gains a free cheaper non-Victory card on every buy. Pickaxe trashes a card costing 3+ to gain Loot. Wealthy Village provides a village and Loot when three different Treasures are in play. Harbor Village rewards multiple Actions with bonus coins. Mining Road gives a Buy and lets you play gained Treasures. Spice Merchant trashes Copper. Mapmaker draws and filters.",
    keyCards: ["highway","pickaxe","wealthy-village"],
    difficulty: "intermediate",
    tags: ["loot","economy","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — HINTERLANDS + PROSPERITY
  // ═══════════════════════════════════════════════════════════════
  {
    id: "hinterlands-prosperity-001",
    name: "Highway Fortune",
    expansions: ["hinterlands","prosperity"],
    cards: ["inn","highway","haggler","cartographer","spice-merchant","workers-village","city","grand-market","vault","watchtower"],
    strategy: "Highway stacks cost reductions — Colony becomes reachable for ordinary decks. Haggler gains a free cheaper non-Victory card on every buy. City surges as piles empty. Grand Market provides draw and Buy. Workers' Village chains cheaply. Vault discards excess for coins. Watchtower controls gained cards. Spice Merchant trashes Copper. Inn reloads discarded Actions.",
    keyCards: ["highway","city","grand-market"],
    difficulty: "advanced",
    tags: ["economy","engine","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — HINTERLANDS + RENAISSANCE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "hinterlands-renaissance-001",
    name: "Road Renaissance",
    expansions: ["hinterlands","renaissance"],
    cards: ["inn","highway","haggler","cartographer","spice-merchant","mountain-village","hideout","acting-troupe","recruiter","silk-merchant"],
    strategy: "Highway stacks cost reductions. Haggler gains a free cheaper non-Victory card on every buy. Acting Troupe dumps 4 Villagers then vanishes. Recruiter converts trashed cards into Villagers. Silk Merchant provides draw and a Buy. Mountain Village recovers discarded cards. Inn reloads discarded Actions on gain. Spice Merchant trashes Copper. Cartographer smooths draws.",
    keyCards: ["highway","acting-troupe","haggler"],
    difficulty: "intermediate",
    tags: ["economy","villagers","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — HINTERLANDS + ALLIES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "allies-hinterlands-001",
    name: "Favor Roads",
    expansions: ["allies","hinterlands"],
    cards: ["destination","innkeeper","sycophant","galleria","sentinel","inn","highway","haggler","cartographer","spice-merchant"],
    strategy: "Highway stacks cost reductions and Haggler gains a free cheaper non-Victory card on every buy. Galleria earns Favors on cheap buys — combine with Haggler's free gains for passive Favor generation. Sycophant spends Favors for +1 Action and burst coins. Inn provides a village that reloads discarded Actions. Sentinel trashes and filters. Cartographer smooths draws. Spice Merchant trashes Copper.",
    keyCards: ["highway","haggler","galleria"],
    difficulty: "intermediate",
    tags: ["economy","favors","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — INTRIGUE + NOCTURNE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "intrigue-nocturne-001",
    name: "Dark Nobles",
    expansions: ["intrigue","nocturne"],
    cards: ["nobles","mining-village","shanty-town","conspirator","steward","blessed-village","conclave","cobbler","vampire","shepherd"],
    strategy: "Cobbler gains any card up to 4 at Night for next turn — gain Conspirator or Steward to accelerate the engine. Vampire attacks and gains non-Vampire cards up to 5 at Night. Nobles and Conspirator synergise with heavy Action density. Shepherd discards Victories to draw 2 each. Blessed Village receives Boons. Conclave plays an Action from hand for free. Shanty Town draws when Action-light.",
    keyCards: ["cobbler","nobles","conspirator"],
    difficulty: "advanced",
    tags: ["night","engine","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — INTRIGUE + PLUNDER
  // ═══════════════════════════════════════════════════════════════
  {
    id: "intrigue-plunder-001",
    name: "Noble Plunder",
    expansions: ["intrigue","plunder"],
    cards: ["nobles","mining-village","shanty-town","conspirator","steward","wealthy-village","harbor-village","pickaxe","sack-of-loot","mapmaker"],
    strategy: "Pickaxe trashes a card costing 3+ to gain Loot. Wealthy Village provides a village and Loot when three different Treasures are in play. Nobles and Conspirator synergise with heavy Action density. Harbor Village rewards multiple Actions with bonus coins. Shanty Town draws when Action-light. Steward thins or draws. Mapmaker draws and gives a Buy. Mining Village provides Actions.",
    keyCards: ["pickaxe","nobles","wealthy-village"],
    difficulty: "intermediate",
    tags: ["loot","engine","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — INTRIGUE + RENAISSANCE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "intrigue-renaissance-001",
    name: "Noble Villagers",
    expansions: ["intrigue","renaissance"],
    cards: ["nobles","mining-village","shanty-town","conspirator","steward","mountain-village","hideout","acting-troupe","recruiter","silk-merchant"],
    strategy: "Acting Troupe dumps 4 Villagers then vanishes. Recruiter converts trashed cards into Villagers. Nobles and Conspirator synergise with heavy Action density — Conspirator's bonus triggers after 3 Actions. Silk Merchant provides draw and a Buy. Mountain Village recovers discarded cards. Shanty Town draws when Action-light. Steward thins or draws. Hideout is a village with thinning upside.",
    keyCards: ["acting-troupe","nobles","conspirator"],
    difficulty: "intermediate",
    tags: ["villagers","engine","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — INTRIGUE + EMPIRES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "empires-intrigue-001",
    name: "Crown Nobles",
    expansions: ["empires","intrigue"],
    cards: ["city-quarter","encampment","crown","farmers-market","groundskeeper","nobles","mining-village","shanty-town","conspirator","upgrade"],
    strategy: "Crown doubles Nobles for +6 Cards or +4 Actions. Conspirator triggers after 3 Actions. City Quarter draws cards equal to Actions in hand. Groundskeeper earns VP tokens for every Victory gained. Nobles, Mining Village, Encampment, and Shanty Town provide abundant Action sources. Upgrade reshapes mid-tier cards. Farmers' Market provides a Buy and accumulates VP tokens.",
    keyCards: ["crown","nobles","groundskeeper"],
    difficulty: "advanced",
    tags: ["engine","multiplier","alt-victory"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — INTRIGUE + GUILDS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "guilds-intrigue-001",
    name: "Noble Coffers",
    expansions: ["guilds","intrigue"],
    cards: ["plaza","herald","merchant-guild","butcher","soothsayer","nobles","mining-village","shanty-town","conspirator","bridge"],
    strategy: "Plaza discards Treasures for Coffers. Merchant Guild banks a Coffer per card bought. Butcher spends Coffers to gain or upgrade. Soothsayer gains Gold while opponents gain Curses and draw a card. Nobles and Conspirator synergise with heavy Action density. Bridge reduces costs. Herald plays the top card if it's an Action. Shanty Town draws when Action-light.",
    keyCards: ["merchant-guild","nobles","soothsayer"],
    difficulty: "intermediate",
    tags: ["coffers","engine","attack"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — INTRIGUE + CORNUCOPIA
  // ═══════════════════════════════════════════════════════════════
  {
    id: "cornucopia-intrigue-001",
    name: "Noble Carnival",
    expansions: ["cornucopia","intrigue"],
    cards: ["farming-village","hamlet","hunting-party","fairgrounds","jester","nobles","mining-village","shanty-town","conspirator","bridge"],
    strategy: "Fairgrounds VP grows quickly with both sets' diversity. Jester punishes Victory-heavy decks. Nobles and Conspirator synergise with heavy Action density. Farming Village and Hamlet alongside Nobles and Mining Village give four village types. Hunting Party reliably finds the card needed. Bridge reduces costs. Shanty Town draws when Action-light.",
    keyCards: ["fairgrounds","nobles","jester"],
    difficulty: "intermediate",
    tags: ["alt-victory","attack","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — INTRIGUE + ADVENTURES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "adventures-intrigue-001",
    name: "Noble Reserve",
    expansions: ["adventures","intrigue"],
    cards: ["port","lost-city","royal-carriage","coin-of-the-realm","dungeon","nobles","mining-village","conspirator","upgrade","bridge"],
    strategy: "Royal Carriage replays Nobles for free — double +3 Cards or double +2 Actions in a single turn. Coin of the Realm provides on-demand +2 Actions from the Tavern mat. Conspirator triggers after 3 Actions. Port and Lost City provide cheap villages. Dungeon sits on the mat for later. Bridge reduces costs. Upgrade reshapes mid-tier cards.",
    keyCards: ["royal-carriage","nobles","conspirator"],
    difficulty: "advanced",
    tags: ["engine","reserve","multiplier"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — INTRIGUE + ALLIES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "allies-intrigue-001",
    name: "Noble Favors",
    expansions: ["allies","intrigue"],
    cards: ["destination","innkeeper","sycophant","galleria","sentinel","nobles","mining-village","shanty-town","conspirator","steward"],
    strategy: "Nobles and Conspirator synergise with heavy Action density from Allies. Conspirator triggers after 3 Actions — easy with Destination, Innkeeper, Nobles, and Mining Village. Sycophant spends Favors for +1 Action and burst coins. Shanty Town draws when Action-light. Steward thins early. Galleria earns Favors on cheap buys. Sentinel filters the top 5.",
    keyCards: ["nobles","conspirator","sycophant"],
    difficulty: "intermediate",
    tags: ["engine","favors","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — MENAGERIE + NOCTURNE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "menagerie-nocturne-001",
    name: "Night Stampede",
    expansions: ["menagerie","nocturne"],
    cards: ["snowy-village","paddock","cavalry","sheepdog","animal-fair","blessed-village","conclave","cobbler","vampire","shepherd"],
    strategy: "Cobbler gains any card up to 4 at Night for next turn. Vampire attacks and gains non-Vampire cards up to 5 at Night. Cavalry gains Horses and re-enters the Action phase on buy, triggering Sheepdog reactions. Paddock gives +2 Actions and two Horses. Snowy Village provides 4 Actions and a Buy. Shepherd discards Victories to draw 2 each. Conclave plays an Action from hand for free. Animal Fair can trash an Action instead of paying.",
    keyCards: ["cobbler","cavalry","snowy-village"],
    nonSupplyCard: "horse",
    difficulty: "advanced",
    tags: ["night","engine","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — MENAGERIE + PLUNDER
  // ═══════════════════════════════════════════════════════════════
  {
    id: "menagerie-plunder-001",
    name: "Stampede Fleet",
    expansions: ["menagerie","plunder"],
    cards: ["snowy-village","paddock","cavalry","sheepdog","animal-fair","wealthy-village","harbor-village","pickaxe","sack-of-loot","mapmaker"],
    strategy: "Pickaxe trashes a card costing 3+ to gain Loot. Wealthy Village provides a village and Loot when three different Treasures are in play. Cavalry gains Horses and re-enters the Action phase on buy, triggering Sheepdog reactions. Paddock gives +2 Actions and two Horses. Snowy Village provides 4 Actions and a Buy. Harbor Village rewards multiple Actions with bonus coins. Mapmaker draws and gives a Buy.",
    keyCards: ["cavalry","pickaxe","wealthy-village"],
    nonSupplyCard: "horse",
    difficulty: "intermediate",
    tags: ["loot","engine","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — MENAGERIE + PROSPERITY
  // ═══════════════════════════════════════════════════════════════
  {
    id: "menagerie-prosperity-001",
    name: "Stampede Fortune",
    expansions: ["menagerie","prosperity"],
    cards: ["snowy-village","paddock","cavalry","sheepdog","animal-fair","workers-village","city","grand-market","vault","monument"],
    strategy: "Monument accumulates VP tokens every turn it's played. City surges as piles empty. Grand Market provides draw and Buy. Workers' Village and Snowy Village chain cheaply. Cavalry gains Horses and re-enters the Action phase on buy, triggering Sheepdog reactions. Paddock gives +2 Actions and two Horses. Vault discards excess for coins. Animal Fair can trash an Action instead of paying.",
    keyCards: ["monument","cavalry","grand-market"],
    nonSupplyCard: "horse",
    difficulty: "intermediate",
    tags: ["alt-victory","engine","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — MENAGERIE + RENAISSANCE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "menagerie-renaissance-001",
    name: "Villager Stampede",
    expansions: ["menagerie","renaissance"],
    cards: ["snowy-village","paddock","cavalry","sheepdog","animal-fair","mountain-village","hideout","acting-troupe","recruiter","silk-merchant"],
    strategy: "Acting Troupe dumps 4 Villagers then vanishes. Recruiter converts trashed cards into Villagers. Cavalry gains Horses and re-enters the Action phase on buy, triggering Sheepdog reactions. Paddock gives +2 Actions and two Horses. Snowy Village provides 4 Actions and a Buy. Silk Merchant provides draw and a Buy. Mountain Village recovers discarded cards. Animal Fair can trash an Action instead of paying.",
    keyCards: ["acting-troupe","cavalry","snowy-village"],
    nonSupplyCard: "horse",
    difficulty: "intermediate",
    tags: ["villagers","engine","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — MENAGERIE + ALLIES
  // (already written above as allies-menagerie-001, skip duplicate)
  // PAIRS — MENAGERIE + SEASIDE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "menagerie-seaside-001",
    name: "Sea Stampede",
    expansions: ["menagerie","seaside"],
    cards: ["snowy-village","paddock","cavalry","sheepdog","animal-fair","fishing-village","wharf","caravan","lighthouse","salvager"],
    strategy: "Wharf provides sustained draw and Buys across two turns. Fishing Village provides cheap recurring Actions and coins. Cavalry gains Horses and re-enters the Action phase on buy, triggering Sheepdog reactions. Paddock gives +2 Actions and two Horses. Snowy Village provides 4 Actions and a Buy. Lighthouse blocks attacks while dripping coins. Salvager converts junk for economy. Caravan drips cards.",
    keyCards: ["wharf","cavalry","snowy-village"],
    nonSupplyCard: "horse",
    difficulty: "intermediate",
    tags: ["duration","engine","draw"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — NOCTURNE + PLUNDER
  // ═══════════════════════════════════════════════════════════════
  {
    id: "nocturne-plunder-001",
    name: "Night Plunder",
    expansions: ["nocturne","plunder"],
    cards: ["blessed-village","conclave","cobbler","vampire","skulk","wealthy-village","harbor-village","pickaxe","sack-of-loot","mapmaker"],
    strategy: "Cobbler gains any card up to 4 at Night for next turn. Vampire attacks and gains non-Vampire cards up to 5 at Night. Pickaxe trashes a card costing 3+ to gain Loot. Wealthy Village provides a village and Loot when three different Treasures are in play. Skulk gains Gold when bought. Harbor Village rewards multiple Actions with bonus coins. Blessed Village receives Boons. Mapmaker draws and gives a Buy.",
    keyCards: ["cobbler","pickaxe","wealthy-village"],
    difficulty: "intermediate",
    tags: ["night","loot","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — NOCTURNE + PROSPERITY
  // ═══════════════════════════════════════════════════════════════
  {
    id: "nocturne-prosperity-001",
    name: "Dark Fortune",
    expansions: ["nocturne","prosperity"],
    cards: ["blessed-village","conclave","cobbler","vampire","shepherd","workers-village","city","grand-market","vault","monument"],
    strategy: "Monument accumulates VP tokens every turn it's played. City surges as piles empty. Grand Market provides draw and Buy. Workers' Village chains cheaply. Cobbler gains any card up to 4 at Night for next turn. Vampire attacks and gains non-Vampire cards up to 5 at Night. Shepherd discards Victories to draw 2 each. Vault discards excess for coins. Blessed Village receives Boons.",
    keyCards: ["monument","cobbler","grand-market"],
    difficulty: "intermediate",
    tags: ["night","alt-victory","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — NOCTURNE + RENAISSANCE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "nocturne-renaissance-001",
    name: "Dark Villagers",
    expansions: ["nocturne","renaissance"],
    cards: ["blessed-village","conclave","cobbler","vampire","shepherd","mountain-village","hideout","acting-troupe","recruiter","silk-merchant"],
    strategy: "Acting Troupe dumps 4 Villagers then vanishes. Recruiter converts trashed cards into Villagers. Cobbler gains any card up to 4 at Night for next turn. Vampire attacks and gains non-Vampire cards up to 5 at Night. Shepherd discards Victories to draw 2 each. Silk Merchant provides draw and a Buy. Mountain Village recovers discarded cards. Blessed Village receives Boons. Conclave plays an Action from hand for free.",
    keyCards: ["cobbler","acting-troupe","vampire"],
    difficulty: "intermediate",
    tags: ["night","villagers","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — NOCTURNE + SEASIDE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "nocturne-seaside-001",
    name: "Night Seas",
    expansions: ["nocturne","seaside"],
    cards: ["blessed-village","conclave","cobbler","vampire","shepherd","fishing-village","wharf","caravan","lighthouse","salvager"],
    strategy: "Wharf provides sustained draw and Buys across two turns. Cobbler gains any card up to 4 at Night for next turn. Vampire attacks and gains non-Vampire cards up to 5 at Night. Fishing Village provides cheap recurring Actions and coins. Shepherd discards Victories to draw 2 each. Lighthouse blocks attacks while dripping coins. Blessed Village receives Boons. Salvager converts junk for economy.",
    keyCards: ["wharf","cobbler","vampire"],
    difficulty: "intermediate",
    tags: ["night","duration","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — PLUNDER + PROSPERITY
  // ═══════════════════════════════════════════════════════════════
  {
    id: "plunder-prosperity-001",
    name: "Treasure Hoard",
    expansions: ["plunder","prosperity"],
    cards: ["wealthy-village","harbor-village","pickaxe","sack-of-loot","kings-cache","workers-village","city","grand-market","vault","watchtower"],
    strategy: "Pickaxe trashes a card costing 3+ to gain Loot. Kings' Cache plays a Treasure three times — triple Sack of Loot for enormous economy. Wealthy Village provides a village and Loot when three different Treasures are in play. City surges as piles empty. Grand Market provides draw and Buy. Workers' Village chains cheaply. Vault discards excess for coins. Watchtower controls gained cards.",
    keyCards: ["kings-cache","pickaxe","city"],
    difficulty: "advanced",
    tags: ["loot","economy","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — PLUNDER + RENAISSANCE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "plunder-renaissance-001",
    name: "Treasure Villagers",
    expansions: ["plunder","renaissance"],
    cards: ["wealthy-village","harbor-village","pickaxe","sack-of-loot","mapmaker","mountain-village","hideout","acting-troupe","recruiter","silk-merchant"],
    strategy: "Acting Troupe dumps 4 Villagers then vanishes. Recruiter converts trashed cards into Villagers based on cost. Pickaxe trashes a card costing 3+ to gain Loot. Wealthy Village provides a village and Loot when three different Treasures are in play. Silk Merchant provides draw and a Buy. Mountain Village recovers discarded cards. Harbor Village rewards multiple Actions with bonus coins. Mapmaker draws and gives a Buy.",
    keyCards: ["acting-troupe","pickaxe","wealthy-village"],
    difficulty: "intermediate",
    tags: ["loot","villagers","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — PLUNDER + SEASIDE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "plunder-seaside-001",
    name: "Sea Plunder",
    expansions: ["plunder","seaside"],
    cards: ["wealthy-village","harbor-village","pickaxe","sack-of-loot","mapmaker","fishing-village","wharf","caravan","lighthouse","salvager"],
    strategy: "Wharf provides sustained draw and Buys across two turns. Pickaxe trashes a card costing 3+ to gain Loot. Wealthy Village provides a village and Loot when three different Treasures are in play. Fishing Village provides cheap recurring Actions and coins. Harbor Village rewards multiple Actions with bonus coins. Lighthouse blocks attacks while dripping coins. Salvager converts junk for economy. Mapmaker draws and gives a Buy.",
    keyCards: ["wharf","pickaxe","wealthy-village"],
    difficulty: "intermediate",
    tags: ["loot","duration","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — PROSPERITY + RENAISSANCE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "prosperity-renaissance-001",
    name: "Grand Coffers",
    expansions: ["prosperity","renaissance"],
    cards: ["workers-village","city","grand-market","vault","monument","mountain-village","hideout","acting-troupe","recruiter","silk-merchant"],
    strategy: "Monument accumulates VP tokens every turn it's played. City surges as piles empty. Grand Market provides draw and Buy. Workers' Village chains cheaply. Acting Troupe dumps 4 Villagers then vanishes. Recruiter converts trashed cards into Villagers. Silk Merchant provides draw and a Buy. Mountain Village recovers discarded cards. Vault discards excess for coins.",
    keyCards: ["monument","acting-troupe","grand-market"],
    difficulty: "intermediate",
    tags: ["alt-victory","villagers","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — SEASIDE + ALLIES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "allies-seaside-001",
    name: "Alliance at Sea",
    expansions: ["allies","seaside"],
    cards: ["destination","innkeeper","sycophant","galleria","sentinel","fishing-village","wharf","caravan","lighthouse","salvager"],
    strategy: "Wharf provides sustained draw and Buys across two turns. Fishing Village provides cheap recurring Actions and coins. Lighthouse blocks attacks while dripping coins. Galleria earns Favors on cheap buys alongside Fishing Village gains. Sycophant provides burst economy when Favors are spent. Innkeeper and Destination provide clean village effects. Salvager converts junk. Sentinel filters top 5.",
    keyCards: ["wharf","galleria","fishing-village"],
    difficulty: "intermediate",
    tags: ["duration","favors","engine"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PAIRS — SEASIDE + MENAGERIE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "seaside-menagerie-001",
    name: "Sea of Animals",
    expansions: ["menagerie","seaside"],
    cards: ["snowy-village","paddock","cavalry","sheepdog","animal-fair","fishing-village","wharf","caravan","lighthouse","salvager"],
    strategy: "Wharf provides sustained draw and Buys across two turns. Fishing Village provides cheap recurring Actions and coins. Cavalry gains Horses and re-enters the Action phase on buy, triggering Sheepdog reactions. Paddock gives +2 Actions and two Horses. Snowy Village provides 4 Actions and a Buy. Lighthouse blocks attacks while dripping coins. Salvager converts junk. Caravan drips cards over two turns.",
    keyCards: ["wharf","cavalry","snowy-village"],
    nonSupplyCard: "horse",
    difficulty: "intermediate",
    tags: ["duration","engine","draw"],
  },

];

export const COMBINATION_MAP = Object.fromEntries(
  COMBINATIONS.map((c) => [c.id, c])
);

export function getCombinationsForExpansions(expansionIds: string[]): Combination[] {
  const sorted = [...expansionIds].sort();
  return COMBINATIONS.filter(
    (c) => JSON.stringify([...c.expansions].sort()) === JSON.stringify(sorted)
  );
}
