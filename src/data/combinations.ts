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
  // SINGLE EXPANSION — RISING SUN
  // ═══════════════════════════════════════════════════════════════
  {
    id: "rising-sun-001",
    name: "Samurai Engine",
    expansions: ["rising-sun"],
    cards: ["samurai","daimyo","ninja","tanuki","litter","cloak","rustic-village","tea-house","mountain-shrine","kintsugi"],
    strategy: "Samurai stays in play generating +1 Coin each turn while forcing opponents to discard to 3 repeatedly. Daimyo replays the next Action you play — pair with Ninja for a double draw-and-discard attack. Litter is a cheap village that draws 2. Cloak and Rustic Village round out the village suite. Kintsugi upgrades cards and chains Gold gains.",
    keyCards: ["samurai","daimyo","ninja"],
    difficulty: "advanced",
    tags: ["attack","duration","engine"],
  },
  {
    id: "rising-sun-002",
    name: "Shrine Circuit",
    expansions: ["rising-sun"],
    cards: ["mountain-shrine","shaman","acolyte","cloak","rustic-village","ronin","specialist","scroll","tea-house","bonsai"],
    strategy: "Mountain Shrine trashes for coins and draws when there are cards in the trash — gets better as the game goes on. Shaman opens with a free trash and generates coin. Acolyte converts Actions or Victories into Gold. Specialist plays a card again or copies it — with Ronin it draws to 7 twice. Scroll is a cheap Throne Room Treasure. Bonsai provides delayed economy.",
    keyCards: ["mountain-shrine","specialist","acolyte"],
    difficulty: "intermediate",
    tags: ["thinning","draw","multiplier"],
  },
  {
    id: "rising-sun-003",
    name: "Daimyo's Court",
    expansions: ["rising-sun"],
    cards: ["daimyo","warlord-rs","samurai","ninja","litter","rustic-village","cloak","tanuki","tea-house","rice-broker"],
    strategy: "Warlord locks opponents out of Actions they have 2+ copies of in play — devastating against engine players. Daimyo replays the next Action you play, chains beautifully with Ninja for double draw-and-attack. Rice Broker trashes an Action for +2 Cards +2 Actions — an explosive pivot. Litter, Rustic Village, and Cloak provide a deep village base.",
    keyCards: ["daimyo","warlord-rs","rice-broker"],
    difficulty: "advanced",
    tags: ["attack","duration","engine"],
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
