"use client";

import { useState, useMemo } from "react";
import { EXPANSIONS } from "@/data/expansions";
import { getCombinationsForExpansions } from "@/data/combinations";
import { CARD_MAP } from "@/data/cards";
import type { Combination, Expansion } from "@/types";

// Base is always in play — only show additional expansion options
const SELECTABLE_EXPANSIONS = EXPANSIONS.filter((e) => e.id !== "base");

// ─── Supply section data ─────────────────────────────────────────────────────

const STANDARD_SUPPLY = [
  { name: "Copper",   color: "bg-amber-800",   icon: "💰" },
  { name: "Silver",   color: "bg-stone-500",   icon: "🥈" },
  { name: "Gold",     color: "bg-yellow-600",  icon: "🥇" },
  { name: "Estate",   color: "bg-green-800",   icon: "🌿" },
  { name: "Duchy",    color: "bg-green-700",   icon: "🌿" },
  { name: "Province", color: "bg-green-600",   icon: "🌿" },
  { name: "Curse",    color: "bg-purple-900",  icon: "💀" },
];

const SPECIAL_SUPPLY: Record<string, Array<{ name: string; color: string; note: string }>> = {
  prosperity: [
    { name: "Platinum",  color: "bg-slate-400",  note: "Worth 5 Coins" },
    { name: "Colony",    color: "bg-green-500",  note: "Worth 10 VP" },
  ],
  "dark-ages": [
    { name: "Shelters",  color: "bg-stone-600",  note: "Replace starting Estates (Necropolis, Hovel, Overgrown Estate)" },
  ],
  nocturne: [
    { name: "Boons",     color: "bg-yellow-700", note: "Fate cards reward Boons" },
    { name: "Hexes",     color: "bg-red-900",    note: "Doom cards inflict Hexes" },
  ],
};

// ─── Expansion Selector ──────────────────────────────────────────────────────

function ExpansionButton({
  expansion,
  selected,
  disabled,
  onClick,
}: {
  expansion: Expansion;
  selected: boolean;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled && !selected}
      className={`
        relative flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-150
        ${selected
          ? `${expansion.color} border-transparent text-white shadow-lg scale-105`
          : disabled
          ? "border-stone-800 text-stone-600 cursor-not-allowed bg-stone-900"
          : "border-stone-700 text-stone-300 bg-stone-900 hover:border-stone-500 hover:text-white hover:bg-stone-800"}
      `}
    >
      {selected && (
        <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-xs">
          ✓
        </span>
      )}
      {expansion.name}
      <span className="text-xs opacity-60">{expansion.year}</span>
    </button>
  );
}

// ─── Card Chip ───────────────────────────────────────────────────────────────

function CardChip({ cardId, highlight }: { cardId: string; highlight?: boolean }) {
  const card = CARD_MAP[cardId];
  if (!card) return <span className="text-red-400 text-xs">{cardId}</span>;

  const typeColor = card.types.includes("Attack")
    ? "border-red-800/60 bg-red-950/40"
    : card.types.includes("Duration")
    ? "border-orange-800/60 bg-orange-950/40"
    : card.types.includes("Night")
    ? "border-indigo-800/60 bg-indigo-950/40"
    : card.types.includes("Reaction")
    ? "border-green-800/60 bg-green-950/40"
    : card.types.includes("Victory")
    ? "border-purple-800/60 bg-purple-950/40"
    : card.types.includes("Treasure")
    ? "border-yellow-800/60 bg-yellow-950/40"
    : "border-stone-700/60 bg-stone-800/40";

  return (
    <div
      className={`
        flex items-center gap-1.5 px-2 py-1 rounded border text-xs
        ${typeColor}
        ${highlight ? "ring-1 ring-amber-400/60" : ""}
      `}
      title={card.notes}
    >
      <span className="font-medium text-stone-100">{card.name}</span>
      <span className="text-stone-400">{card.cost}</span>
      {card.plusActions >= 2 && (
        <span className="text-sky-400 font-bold text-[10px]">+A</span>
      )}
      {card.plusBuys >= 1 && (
        <span className="text-emerald-400 font-bold text-[10px]">+B</span>
      )}
    </div>
  );
}

// ─── Supply Display ───────────────────────────────────────────────────────────

function SupplySection({ selectedExpansions }: { selectedExpansions: string[] }) {
  const specials = selectedExpansions.flatMap((id) => SPECIAL_SUPPLY[id] ?? []);

  return (
    <div className="bg-stone-900/60 border border-stone-800 rounded-xl p-4 mb-8">
      <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">
        Always in play
      </h2>
      <div className="flex flex-wrap gap-2 mb-3">
        {/* Base expansion badge */}
        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-700 text-white">
          Base Kingdom
        </span>
        {selectedExpansions.map((id) => {
          const exp = SELECTABLE_EXPANSIONS.find((e) => e.id === id);
          if (!exp) return null;
          return (
            <span
              key={id}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${exp.color} text-white`}
            >
              {exp.name} Kingdom
            </span>
          );
        })}
      </div>

      <div className="border-t border-stone-800 pt-3">
        <p className="text-[11px] text-stone-500 mb-2">Standard supply piles (always included)</p>
        <div className="flex flex-wrap gap-1.5">
          {STANDARD_SUPPLY.map((card) => (
            <span
              key={card.name}
              className={`px-2 py-0.5 rounded text-xs text-white font-medium ${card.color}`}
            >
              {card.name}
            </span>
          ))}
        </div>
      </div>

      {specials.length > 0 && (
        <div className="border-t border-stone-800 pt-3 mt-3">
          <p className="text-[11px] text-stone-500 mb-2">Special supply (from your expansions)</p>
          <div className="flex flex-wrap gap-2">
            {specials.map((item) => (
              <span
                key={item.name}
                className={`px-2 py-0.5 rounded text-xs text-white font-medium ${item.color}`}
                title={item.note}
              >
                {item.name}
                <span className="ml-1 opacity-70 text-[10px]">ⓘ</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Combination Card ─────────────────────────────────────────────────────────

function CombinationCard({
  combo,
  expansionColors,
}: {
  combo: Combination;
  expansionColors: Record<string, string>;
}) {
  const [expanded, setExpanded] = useState(false);

  const difficultyColor =
    combo.difficulty === "beginner"
      ? "text-emerald-400"
      : combo.difficulty === "intermediate"
      ? "text-amber-400"
      : "text-red-400";

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden hover:border-stone-600 transition-colors">
      {/* Header */}
      <div className="px-5 pt-5 pb-4">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-bold text-stone-100 font-serif leading-tight">
            {combo.name}
          </h3>
          <div className="flex items-center gap-2 shrink-0">
            <span className={`text-xs font-medium ${difficultyColor} uppercase tracking-wide`}>
              {combo.difficulty}
            </span>
          </div>
        </div>

        {/* Expansion tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className="text-[11px] px-2 py-0.5 rounded-full text-white/90 font-medium bg-amber-700">
            Base
          </span>
          {combo.expansions.map((expId) => (
            <span
              key={expId}
              className={`text-[11px] px-2 py-0.5 rounded-full text-white/90 font-medium ${
                expansionColors[expId] ?? "bg-stone-700"
              }`}
            >
              {expId
                .split("-")
                .map((w) => w[0].toUpperCase() + w.slice(1))
                .join(" ")}
            </span>
          ))}
        </div>

        {/* Cards grid */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {combo.cards.map((cardId) => (
            <CardChip
              key={cardId}
              cardId={cardId}
              highlight={combo.keyCards.includes(cardId)}
            />
          ))}
          {combo.nonSupplyCard && (
            <div className="flex items-center gap-1.5 px-2 py-1 rounded border border-dashed border-stone-600 text-xs text-stone-400">
              + {combo.nonSupplyCard.charAt(0).toUpperCase() + combo.nonSupplyCard.slice(1)}{" "}
              <span className="text-[10px]">(non-supply)</span>
            </div>
          )}
        </div>

        {/* Key cards legend */}
        <p className="text-[11px] text-stone-500">
          Highlighted cards (golden ring) are the engine core
        </p>
      </div>

      {/* Strategy toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-5 py-3 flex items-center justify-between border-t border-stone-800 text-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800/50 transition-colors"
      >
        <span>Strategy guide</span>
        <span className="text-lg leading-none">{expanded ? "▲" : "▼"}</span>
      </button>

      {expanded && (
        <div className="px-5 py-4 border-t border-stone-800 bg-stone-950/50">
          <p className="text-sm text-stone-300 leading-relaxed">{combo.strategy}</p>
          {combo.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {combo.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-0.5 rounded-full bg-stone-800 text-stone-400 border border-stone-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleExpansion = (id: string) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : prev.length < 2
        ? [...prev, id]
        : prev
    );
  };

  // Base is always in play; pass only the additional selected expansions
  const combinations = useMemo(
    () => getCombinationsForExpansions(selected),
    [selected]
  );

  const expansionColors = Object.fromEntries(
    EXPANSIONS.map((e) => [e.id, e.color])
  );

  return (
    <div className="min-h-screen bg-stone-950">
      {/* Header */}
      <header className="border-b border-stone-800 bg-stone-900/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-amber-400 font-serif tracking-wide">
            Dominion Kingdom Builder
          </h1>
          <p className="text-sm text-stone-400 mt-0.5">
            Base is always in play. Select up to 2 additional expansions.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Expansion Selector */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-stone-200">
              Additional expansions{" "}
              <span className="text-stone-500 font-normal">
                ({selected.length}/2 selected)
              </span>
            </h2>
            {selected.length > 0 && (
              <button
                onClick={() => setSelected([])}
                className="text-sm text-stone-500 hover:text-stone-300 transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {SELECTABLE_EXPANSIONS.map((exp) => (
              <ExpansionButton
                key={exp.id}
                expansion={exp}
                selected={selected.includes(exp.id)}
                disabled={selected.length >= 2}
                onClick={() => toggleExpansion(exp.id)}
              />
            ))}
          </div>
        </section>

        {/* Supply always in play */}
        <SupplySection selectedExpansions={selected} />

        {/* Results */}
        {combinations.length === 0 ? (
          <div className="text-center py-24 text-stone-600">
            <div className="text-4xl mb-4">∅</div>
            <p className="text-lg">No combinations for this selection</p>
            <p className="text-sm mt-2">
              Try a different set of expansions
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-semibold text-stone-200">
                {combinations.length} Kingdom{combinations.length !== 1 ? "s" : ""} found
              </h2>
              <div className="flex items-center gap-4 text-xs text-stone-500">
                <span className="flex items-center gap-1">
                  <span className="text-sky-400 font-bold">+A</span> = +2 Actions (village)
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-emerald-400 font-bold">+B</span> = +1 Buy
                </span>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {combinations.map((combo) => (
                <CombinationCard
                  key={combo.id}
                  combo={combo}
                  expansionColors={expansionColors}
                />
              ))}
            </div>
          </>
        )}
      </main>

      <footer className="border-t border-stone-800 mt-16 py-6 text-center text-xs text-stone-600">
        Dominion and all card names are property of Donald X. Vaccarino and Rio Grande Games.
        This is an unofficial fan tool.
      </footer>
    </div>
  );
}
