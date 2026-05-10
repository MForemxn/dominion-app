# Dominion Kingdom Builder

An unofficial fan tool for the board game [Dominion](https://www.riograndegames.com/games/dominion/) by Donald X. Vaccarino. Browse and discover curated 10-card Kingdom combinations based on whichever expansion boxes you own.

## What it does

**Browse mode** — select up to 2 additional expansions on top of Base, and see every hand-curated Kingdom that fits that exact set.

**Pick for me mode** — tick every box you own, hit the button, and the app randomly deals you a playable Kingdom from your whole collection. Hit it again for a different one.

Every combination shown:
- Uses exactly 10 Kingdom cards
- Has at least one village effect (+2 Actions) and at least one +Buy card
- Comes with a strategy guide and key card callouts
- Shows the full supply — standard cards (Copper through Curse) plus any expansion-specific piles (Colony/Platinum, Shelters, Boons/Hexes)

## Expansions covered

All 15 official expansions are in the card database. Base is always included. The selector covers the remaining 14:

Intrigue · Seaside · Prosperity · Cornucopia · Hinterlands · Dark Ages · Guilds · Adventures · Empires · Nocturne · Renaissance · Menagerie · Allies · Plunder

Every possible combination of 0, 1, or 2 additional expansions is covered — that is all 106 expansion sets (1 base-only + 14 singles + 91 pairs), each with at least one curated Kingdom.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router, static export)
- TypeScript (strict)
- Tailwind CSS
- Deployed on [Vercel](https://vercel.com/)

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/
    page.tsx          # UI — Browse mode + Pick for me mode
  data/
    cards.ts          # Full card database (~400 cards across all expansions)
    combinations.ts   # Curated Kingdom combinations + lookup function
    expansions.ts     # Expansion metadata (name, year, colour)
  types/
    index.ts          # Shared TypeScript types
```

## TODO

### Procedural combination generation

Right now every Kingdom in the database was written by hand. The goal is to replace (or supplement) this with an algorithm that can generate valid combinations on the fly, so the pool is effectively unlimited.

**What a valid combination requires:**
- Exactly 10 Kingdom cards drawn from the selected expansion(s) + Base
- At least 1 card with +2 Actions (village effect)
- At least 1 card with +1 Buy
- Reasonable synergy — cards should interact meaningfully, not just be 10 random draws

**Proposed approach — rule-based generator:**
1. Pick a village card at random from the available pool
2. Pick a +Buy card at random (may overlap with the village)
3. Fill remaining slots by sampling cards that have roles complementary to what's already chosen (draw, thinning, economy, attack, etc.) — using the `roles[]` field already on every card
4. Reject combinations that are missing a role category considered essential (e.g. no draw at all, no economy)

**Proposed approach — scoring / validation:**
- Assign each generated combination a score based on: presence of draw, thinning, economy, attack, reaction coverage, cost curve (mix of cheap and expensive cards)
- Discard any combination below a threshold score and regenerate
- Surface the score to the user as a rough "synergy rating" alongside difficulty

**Stretch: AI-assisted generation**
Use the Claude API to generate the strategy description and validate synergy for any procedurally built combination, the same way the hand-curated ones have strategy text today. The card database already has `notes` on every card that could be fed as context.

---

*Dominion and all card names are property of Donald X. Vaccarino and Rio Grande Games. This is an unofficial fan tool.*
