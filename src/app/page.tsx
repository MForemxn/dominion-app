"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { EXPANSIONS } from "@/data/expansions";
import { COMBINATIONS, getCombinationsForExpansions } from "@/data/combinations";
import { CARD_MAP, CARDS } from "@/data/cards";
import type { Combination, Expansion, GeneratorConstraints } from "@/types";
import { generateKingdom, type GeneratedKingdom } from "@/lib/kingdom-generator";
import BuildMode from "@/components/BuildMode";
import FilterPanel from "@/components/FilterPanel";
import {
  type Filters,
  DEFAULT_FILTERS,
  countActiveFilters,
  meetsFilters,
} from "@/lib/filters";
import {
  loadSavedKingdoms,
  deleteKingdom,
  exportKingdoms,
  importKingdoms,
  mergeImported,
  type SavedKingdom,
} from "@/lib/saved-kingdoms";

// Base is always in play — only show additional expansion options
const SELECTABLE_EXPANSIONS = EXPANSIONS.filter((e) => e.id !== "base");

// ─── Supply section data ─────────────────────────────────────────────────────

const STANDARD_SUPPLY = [
  { name: "Copper",   color: "bg-amber-800"  },
  { name: "Silver",   color: "bg-stone-500"  },
  { name: "Gold",     color: "bg-yellow-600" },
  { name: "Estate",   color: "bg-green-800"  },
  { name: "Duchy",    color: "bg-green-700"  },
  { name: "Province", color: "bg-green-600"  },
  { name: "Curse",    color: "bg-purple-900" },
];

const SPECIAL_SUPPLY: Record<string, Array<{ name: string; color: string; note: string }>> = {
  prosperity: [
    { name: "Platinum", color: "bg-slate-400", note: "Worth 5 Coins" },
    { name: "Colony",   color: "bg-green-500", note: "Worth 10 VP"   },
  ],
  "dark-ages": [
    { name: "Shelters", color: "bg-stone-600", note: "Replace starting Estates (Necropolis, Hovel, Overgrown Estate)" },
  ],
  nocturne: [
    { name: "Boons", color: "bg-yellow-700", note: "Fate cards reward Boons" },
    { name: "Hexes", color: "bg-red-900",    note: "Doom cards inflict Hexes" },
  ],
};

// ─── Combo stats ─────────────────────────────────────────────────────────────

interface ComboStats {
  earlyGame: number;    // cards costing $2–$3
  midGame:   number;    // cards costing $4–$5
  lateGame:  number;    // cards costing $6+
  terminals: number;    // Actions with plusActions === 0
  villages:  number;    // Actions with plusActions >= 1 (non-terminals)
  hasDraw:   boolean;
  drawCount: number;    // how many draw-role cards
  hasAttack: boolean;
  attackCount: number;  // how many Attack-type cards
  hasGainer: boolean;
  costCurveOk: boolean; // ≥2 early + ≥2 mid
}

function getComboStats(combo: Combination): ComboStats {
  const cards = combo.cards.map((id) => CARD_MAP[id]).filter(Boolean);

  const numCost = (c: { cost: number | string }) => typeof c.cost === "number" ? c.cost : 5;
  const earlyGame = cards.filter((c) => numCost(c) >= 2 && numCost(c) <= 3).length;
  const midGame   = cards.filter((c) => numCost(c) >= 4 && numCost(c) <= 5).length;
  const lateGame  = cards.filter((c) => numCost(c) >= 6).length;

  const terminals = cards.filter(
    (c) => c.types.includes("Action") && c.plusActions === 0
  ).length;

  const villages = cards.filter(
    (c) => c.types.includes("Action") && c.plusActions >= 1
  ).length;

  const drawCount   = cards.filter((c) => c.roles.includes("draw")).length;
  const attackCount = cards.filter((c) => c.types.includes("Attack")).length;

  const hasDraw   = drawCount > 0;
  const hasAttack = attackCount > 0;
  const hasGainer = cards.some((c) => c.roles.includes("gain"));

  return {
    earlyGame,
    midGame,
    lateGame,
    terminals,
    villages,
    hasDraw,
    drawCount,
    hasAttack,
    attackCount,
    hasGainer,
    costCurveOk: earlyGame >= 2 && midGame >= 2,
  };
}

// ─── Filter helpers ───────────────────────────────────────────────────────────

function applyFilters(combos: Combination[], filters: Filters): Combination[] {
  return combos.filter((combo) => {
    if (filters.difficulty !== "any" && combo.difficulty !== filters.difficulty) return false;
    const cards = combo.cards.map((id) => CARD_MAP[id]).filter(Boolean);
    return meetsFilters(cards, filters);
  });
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

// ─── Expansion Selector Button ────────────────────────────────────────────────

function ExpansionButton({
  expansion, selected, disabled, onClick,
}: {
  expansion: Expansion; selected: boolean; disabled: boolean; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled && !selected}
      className={`relative flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-150
        ${selected
          ? `${expansion.color} border-transparent text-white shadow-lg scale-105`
          : disabled
          ? "border-stone-800 text-stone-600 cursor-not-allowed bg-stone-900"
          : "border-stone-700 text-stone-300 bg-stone-900 hover:border-stone-500 hover:text-white hover:bg-stone-800"}`}
    >
      {selected && <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span>}
      {expansion.name}
      <span className="text-xs opacity-60">{expansion.year}</span>
    </button>
  );
}


// ─── Card Chip ───────────────────────────────────────────────────────────────

function CardChip({ cardId, highlight }: { cardId: string; highlight?: boolean }) {
  const card = CARD_MAP[cardId];
  if (!card) return <span className="text-red-400 text-xs">{cardId}</span>;

  const typeColor = card.types.includes("Attack")    ? "border-red-800/60 bg-red-950/40"
    : card.types.includes("Duration")  ? "border-orange-800/60 bg-orange-950/40"
    : card.types.includes("Night")     ? "border-indigo-800/60 bg-indigo-950/40"
    : card.types.includes("Reaction")  ? "border-green-800/60 bg-green-950/40"
    : card.types.includes("Victory")   ? "border-purple-800/60 bg-purple-950/40"
    : card.types.includes("Treasure")  ? "border-yellow-800/60 bg-yellow-950/40"
    : "border-stone-700/60 bg-stone-800/40";

  return (
    <div
      className={`flex items-center gap-1.5 px-2 py-1 rounded border text-xs ${typeColor} ${highlight ? "ring-1 ring-amber-400/60" : ""}`}
      title={card.notes}
    >
      <span className="font-medium text-stone-100">{card.name}</span>
      <span className="text-stone-400">{card.cost}</span>
      {card.plusActions >= 2 && <span className="text-sky-400 font-bold text-[10px]">+A</span>}
      {card.plusBuys >= 1    && <span className="text-emerald-400 font-bold text-[10px]">+B</span>}
    </div>
  );
}

// ─── Combo stat badges ────────────────────────────────────────────────────────

function StatBadges({ stats }: { stats: ComboStats }) {
  return (
    <div className="flex flex-wrap gap-1 mt-2">
      {/* Cost curve */}
      <span
        className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
          stats.costCurveOk
            ? "bg-emerald-900/60 text-emerald-400 border border-emerald-800/40"
            : "bg-red-900/40 text-red-400 border border-red-800/40"
        }`}
        title={`${stats.earlyGame} cheap ($2–$3) · ${stats.midGame} mid ($4–$5) · ${stats.lateGame} expensive ($6+)`}
      >
        {stats.earlyGame}↓ {stats.midGame}◆ {stats.lateGame}↑
      </span>

      {/* Terminal density */}
      <span
        className={`text-[10px] px-1.5 py-0.5 rounded font-medium border ${
          stats.terminals <= 3
            ? "bg-emerald-900/60 text-emerald-400 border-emerald-800/40"
            : stats.terminals <= 5
            ? "bg-amber-900/60 text-amber-400 border-amber-800/40"
            : "bg-red-900/40 text-red-400 border-red-800/40"
        }`}
        title={`${stats.terminals} terminal(s) — Actions that don't give +Actions`}
      >
        {stats.terminals}T
      </span>

      {/* Village / non-terminal count */}
      <span
        className={`text-[10px] px-1.5 py-0.5 rounded font-medium border ${
          stats.villages >= 3
            ? "bg-sky-900/60 text-sky-400 border-sky-800/40"
            : stats.villages >= 1
            ? "bg-stone-800/60 text-stone-400 border-stone-700/40"
            : "bg-red-900/40 text-red-400 border-red-800/40"
        }`}
        title={`${stats.villages} non-terminal action(s) — cards that give +1 or more Actions`}
      >
        {stats.villages}V
      </span>

      {/* Draw */}
      {stats.hasDraw && (
        <span className="text-[10px] px-1.5 py-0.5 rounded font-medium bg-sky-900/60 text-sky-400 border border-sky-800/40" title="Has draw">
          Draw
        </span>
      )}

      {/* Attack */}
      {stats.hasAttack && (
        <span className="text-[10px] px-1.5 py-0.5 rounded font-medium bg-red-900/60 text-red-400 border border-red-800/40" title="Has attacks">
          Attack
        </span>
      )}

      {/* Gainer */}
      {stats.hasGainer && (
        <span className="text-[10px] px-1.5 py-0.5 rounded font-medium bg-violet-900/60 text-violet-400 border border-violet-800/40" title="Has gainers">
          Gain
        </span>
      )}
    </div>
  );
}

// ─── Supply Strip ─────────────────────────────────────────────────────────────

function SupplyStrip({ expansions }: { expansions: string[] }) {
  const specials = expansions.flatMap((id) => SPECIAL_SUPPLY[id] ?? []);
  return (
    <div className="bg-stone-900/60 border border-stone-800 rounded-xl p-4 mb-8">
      <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-2">Always in play</p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {STANDARD_SUPPLY.map((c) => (
          <span key={c.name} className={`px-2 py-0.5 rounded text-xs text-white font-medium ${c.color}`}>{c.name}</span>
        ))}
      </div>
      {specials.length > 0 && (
        <>
          <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-2">Special supply</p>
          <div className="flex flex-wrap gap-1.5">
            {specials.map((item) => (
              <span key={item.name} className={`px-2 py-0.5 rounded text-xs text-white font-medium ${item.color}`} title={item.note}>
                {item.name} <span className="opacity-60 text-[10px]">ⓘ</span>
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Combination Card ─────────────────────────────────────────────────────────

function CombinationCard({
  combo,
  expansionColors,
  highlighted,
}: {
  combo: Combination;
  expansionColors: Record<string, string>;
  highlighted?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const stats = useMemo(() => getComboStats(combo), [combo]);

  const difficultyColor =
    combo.difficulty === "beginner"     ? "text-emerald-400" :
    combo.difficulty === "intermediate" ? "text-amber-400"   : "text-red-400";

  return (
    <div className={`bg-stone-900 border rounded-xl overflow-hidden transition-colors
      ${highlighted ? "border-amber-500/60 shadow-lg shadow-amber-900/20" : "border-stone-800 hover:border-stone-600"}`}
    >
      <div className="px-5 pt-5 pb-4">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-bold text-stone-100 font-serif leading-tight">{combo.name}</h3>
          <span className={`text-xs font-medium ${difficultyColor} uppercase tracking-wide shrink-0`}>
            {combo.difficulty}
          </span>
        </div>

        {/* Expansion tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="text-[11px] px-2 py-0.5 rounded-full text-white/90 font-medium bg-amber-700">Base</span>
          {combo.expansions.map((expId) => (
            <span key={expId} className={`text-[11px] px-2 py-0.5 rounded-full text-white/90 font-medium ${expansionColors[expId] ?? "bg-stone-700"}`}>
              {expId.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ")}
            </span>
          ))}
        </div>

        {/* Stat badges */}
        <StatBadges stats={stats} />

        {/* Kingdom cards */}
        <div className="flex flex-wrap gap-1.5 mt-3 mb-2">
          {combo.cards.map((cardId) => (
            <CardChip key={cardId} cardId={cardId} highlight={combo.keyCards.includes(cardId)} />
          ))}
          {combo.nonSupplyCard && (
            <div className="flex items-center gap-1.5 px-2 py-1 rounded border border-dashed border-stone-600 text-xs text-stone-400">
              + {combo.nonSupplyCard.charAt(0).toUpperCase() + combo.nonSupplyCard.slice(1)}{" "}
              <span className="text-[10px]">(non-supply)</span>
            </div>
          )}
        </div>

        <p className="text-[11px] text-stone-500 mt-1">Golden ring = engine core · badges: cost spread · terminals · traits</p>
      </div>

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
                <span key={tag} className="text-[11px] px-2 py-0.5 rounded-full bg-stone-800 text-stone-400 border border-stone-700">{tag}</span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Browse Mode ──────────────────────────────────────────────────────────────

function BrowseMode({ expansionColors }: { expansionColors: Record<string, string> }) {
  const [selected, setSelected]       = useState<string[]>([]);
  const [filters, setFilters]         = useState<Filters>(DEFAULT_FILTERS);
  const [showFilters, setShowFilters] = useState(false);
  const [savedKingdoms, setSavedKingdoms] = useState<SavedKingdom[]>([]);
  const [showSaved, setShowSaved] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSavedKingdoms(loadSavedKingdoms());
  }, []);

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const imported = await importKingdoms(file);
      mergeImported(imported);
      setSavedKingdoms(loadSavedKingdoms());
    } catch {
      alert("Failed to import kingdoms. Check the file format.");
    }
    e.target.value = "";
  };

  const handleDelete = (id: string) => {
    deleteKingdom(id);
    setSavedKingdoms(loadSavedKingdoms());
  };

  const toggleExpansion = (id: string) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id)
        : prev.length < 2 ? [...prev, id]
        : prev
    );

  const raw         = useMemo(() => getCombinationsForExpansions(selected), [selected]);
  const combinations = useMemo(() => applyFilters(raw, filters), [raw, filters]);
  const activeFilterCount = countActiveFilters(filters);

  return (
    <>
      {/* My Kingdoms */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setShowSaved(!showSaved)}
            className="text-base font-semibold text-stone-200 flex items-center gap-2 hover:text-white transition-colors"
          >
            My Kingdoms
            <span className="text-stone-500 font-normal text-sm">({savedKingdoms.length})</span>
            <span className="text-stone-500 text-xs">{showSaved ? "▼" : "▶"}</span>
          </button>
          <div className="flex items-center gap-2">
            <input
              ref={fileInputRef}
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-3 py-1.5 rounded-lg border border-stone-700 text-xs font-medium text-stone-400 hover:border-stone-500 hover:text-stone-200 transition-colors"
            >
              Import
            </button>
            {savedKingdoms.length > 0 && (
              <button
                onClick={() => exportKingdoms(savedKingdoms)}
                className="px-3 py-1.5 rounded-lg border border-stone-700 text-xs font-medium text-stone-400 hover:border-stone-500 hover:text-stone-200 transition-colors"
              >
                Export
              </button>
            )}
          </div>
        </div>

        {showSaved && savedKingdoms.length > 0 && (
          <div className="grid gap-4 md:grid-cols-2 mb-6">
            {savedKingdoms.map((kingdom) => (
              <div key={kingdom.id} className="bg-stone-900 border border-stone-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-bold text-stone-100">{kingdom.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-stone-500 font-mono">{kingdom.score.overall}/10</span>
                    <button
                      onClick={() => handleDelete(kingdom.id)}
                      className="text-xs text-stone-600 hover:text-red-400 transition-colors"
                      title="Delete"
                    >
                      &times;
                    </button>
                  </div>
                </div>
                {kingdom.notes && (
                  <p className="text-xs text-stone-400 mb-2">{kingdom.notes}</p>
                )}
                <div className="flex flex-wrap gap-1">
                  {kingdom.cards.map((cardId) => (
                    <CardChip key={cardId} cardId={cardId} />
                  ))}
                </div>
                <p className="text-[10px] text-stone-600 mt-2">
                  {new Date(kingdom.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}

        {showSaved && savedKingdoms.length === 0 && (
          <p className="text-sm text-stone-500 mb-6">
            No saved kingdoms yet. Generate one in the Build tab and save it, or import a .json file.
          </p>
        )}
      </section>

      <hr className="border-stone-800 mb-8" />

      {/* Expansion selector */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-stone-200">
            Additional expansions <span className="text-stone-500 font-normal">({selected.length}/2)</span>
          </h2>
          {selected.length > 0 && (
            <button onClick={() => setSelected([])} className="text-sm text-stone-500 hover:text-stone-300 transition-colors">Clear</button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {SELECTABLE_EXPANSIONS.map((exp) => (
            <ExpansionButton
              key={exp.id} expansion={exp}
              selected={selected.includes(exp.id)}
              disabled={selected.length >= 2}
              onClick={() => toggleExpansion(exp.id)}
            />
          ))}
        </div>
      </section>

      <SupplyStrip expansions={selected} />

      {/* Filter toggle button */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() => setShowFilters((v) => !v)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors
            ${showFilters || activeFilterCount > 0
              ? "border-amber-600 text-amber-400 bg-amber-950/30"
              : "border-stone-700 text-stone-400 hover:border-stone-500 hover:text-stone-200"}`}
        >
          <span>⚙ Filters</span>
          {activeFilterCount > 0 && (
            <span className="text-xs bg-amber-600 text-white rounded-full w-4 h-4 flex items-center justify-center leading-none">
              {activeFilterCount}
            </span>
          )}
        </button>
        {activeFilterCount > 0 && (
          <button onClick={() => setFilters(DEFAULT_FILTERS)} className="text-xs text-stone-500 hover:text-stone-300 transition-colors">
            Reset filters
          </button>
        )}
      </div>

      {showFilters && <FilterPanel filters={filters} onChange={setFilters} />}

      {/* Results */}
      {combinations.length === 0 ? (
        <div className="text-center py-20 text-stone-600">
          <div className="text-4xl mb-4">{raw.length === 0 ? "∅" : "⚙"}</div>
          <p className="text-lg">
            {raw.length === 0
              ? "No combinations for this selection"
              : `All ${raw.length} kingdoms filtered out`}
          </p>
          {raw.length > 0 && (
            <button onClick={() => setFilters(DEFAULT_FILTERS)} className="mt-3 text-sm text-amber-500 hover:text-amber-400">
              Reset filters
            </button>
          )}
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-semibold text-stone-200">
              {combinations.length} Kingdom{combinations.length !== 1 ? "s" : ""}
              {activeFilterCount > 0 && (
                <span className="text-stone-500 font-normal"> (filtered from {raw.length})</span>
              )}
            </h2>
            <div className="flex items-center gap-3 text-xs text-stone-500">
              <span><span className="text-sky-400 font-bold">+A</span> village</span>
              <span><span className="text-emerald-400 font-bold">+B</span> buy</span>
              <span className="text-stone-600">↓ cheap  ◆ mid  ↑ exp  T terminals  V villages</span>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {combinations.map((combo) => (
              <CombinationCard key={combo.id} combo={combo} expansionColors={expansionColors} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

// ─── Auto Pick Mode ───────────────────────────────────────────────────────────

function AutoPickMode({ expansionColors }: { expansionColors: Record<string, string> }) {
  const [owned, setOwned]             = useState<string[]>([]);
  const [filters, setFilters]         = useState<Filters>(DEFAULT_FILTERS);
  const [showFilters, setShowFilters] = useState(false);
  const [result, setResult]           = useState<GeneratedKingdom | null>(null);
  const [hasRolled, setHasRolled]     = useState(false);
  const [noResult, setNoResult]       = useState(false);
  const [shake, setShake]             = useState(false);

  const toggleOwned = (id: string) => {
    setOwned((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
    setResult(null); setHasRolled(false); setNoResult(false);
  };

  const activeFilterCount = countActiveFilters(filters);

  const poolSize = useMemo(
    () => CARDS.filter((c) => ["base", ...owned].includes(c.expansion)).length,
    [owned]
  );

  const roll = useCallback(() => {
    if (owned.length === 0) return;

    const constraints: GeneratorConstraints = { expansions: ["base", ...owned] };
    const hasFilters = activeFilterCount > 0;
    let kingdom: GeneratedKingdom | null = null;

    for (let i = 0; i < (hasFilters ? 15 : 3); i++) {
      const candidate = generateKingdom(constraints);
      if (!candidate) break;
      if (!hasFilters || meetsFilters(candidate.cards, filters)) {
        kingdom = candidate;
        break;
      }
    }

    setResult(kingdom);
    setNoResult(!kingdom);
    setHasRolled(true);
    setShake(true);
    setTimeout(() => setShake(false), 400);
  }, [owned, filters, activeFilterCount]);

  const scoreColor = (v: number) =>
    v >= 8 ? "text-emerald-400" : v >= 6 ? "text-amber-400" : v >= 4 ? "text-orange-400" : "text-red-400";

  return (
    <>
      {/* Expansion selector */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-base font-semibold text-stone-200">Expansions you own</h2>
          <div className="flex gap-3 text-sm text-stone-500">
            {owned.length > 0 && (
              <button onClick={() => { setOwned([]); setResult(null); setHasRolled(false); setNoResult(false); }} className="hover:text-stone-300 transition-colors">Clear all</button>
            )}
            {owned.length < SELECTABLE_EXPANSIONS.length && (
              <button onClick={() => { setOwned(SELECTABLE_EXPANSIONS.map((e) => e.id)); setResult(null); setHasRolled(false); }} className="hover:text-stone-300 transition-colors">Select all</button>
            )}
          </div>
        </div>
        <p className="text-xs text-stone-500 mb-4">Tick every box you own — Base is always included.</p>
        <div className="flex flex-wrap gap-2">
          {SELECTABLE_EXPANSIONS.map((exp) => (
            <button key={exp.id} onClick={() => toggleOwned(exp.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-150
                ${owned.includes(exp.id)
                  ? `${exp.color} border-transparent text-white shadow-md`
                  : "border-stone-700 text-stone-400 bg-stone-900 hover:border-stone-500 hover:text-white hover:bg-stone-800"}`}
            >
              <span className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] shrink-0
                ${owned.includes(exp.id) ? "bg-white/25 border-white/40 text-white" : "border-stone-600"}`}>
                {owned.includes(exp.id) && "✓"}
              </span>
              {exp.name}
              <span className="text-xs opacity-60">{exp.year}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Filters */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() => setShowFilters((v) => !v)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors
            ${showFilters || activeFilterCount > 0
              ? "border-amber-600 text-amber-400 bg-amber-950/30"
              : "border-stone-700 text-stone-400 hover:border-stone-500 hover:text-stone-200"}`}
        >
          <span>⚙ Filters</span>
          {activeFilterCount > 0 && (
            <span className="text-xs bg-amber-600 text-white rounded-full w-4 h-4 flex items-center justify-center leading-none">
              {activeFilterCount}
            </span>
          )}
        </button>
        {activeFilterCount > 0 && (
          <button onClick={() => setFilters(DEFAULT_FILTERS)} className="text-xs text-stone-500 hover:text-stone-300 transition-colors">
            Reset filters
          </button>
        )}
      </div>
      {showFilters && <FilterPanel filters={filters} onChange={setFilters} hideDifficulty />}

      {/* Roll button */}
      <div className="flex flex-col items-center gap-3 mb-10">
        {owned.length === 0 ? (
          <p className="text-stone-500 text-sm">Select at least one expansion above to enable auto-pick</p>
        ) : (
          <p className="text-stone-400 text-sm">
            <span className="text-amber-400 font-semibold">{poolSize}</span> cards in pool
          </p>
        )}
        <button
          onClick={roll}
          disabled={owned.length === 0}
          className={`px-10 py-4 rounded-2xl text-lg font-bold tracking-wide transition-all duration-150
            ${owned.length === 0
              ? "bg-stone-800 text-stone-600 cursor-not-allowed"
              : "bg-amber-600 hover:bg-amber-500 text-white shadow-lg hover:shadow-amber-700/40 active:scale-95"}
            ${shake ? "animate-bounce" : ""}`}
        >
          {hasRolled ? "Pick again ↺" : "Pick for me ✦"}
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="max-w-2xl mx-auto">
          <SupplyStrip expansions={owned} />
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-stone-200">Your Kingdom</h2>
            <div className="flex items-center gap-4 text-xs text-stone-500">
              <span><span className="text-sky-400 font-bold">+A</span> village</span>
              <span><span className="text-emerald-400 font-bold">+B</span> buy</span>
              <span>
                Score{" "}
                <span className={`text-base font-bold font-mono ${scoreColor(result.score.overall)}`}>
                  {result.score.overall}
                </span>
                <span className="text-stone-600">/10</span>
              </span>
            </div>
          </div>
          <div className="bg-stone-900 border border-amber-500/60 rounded-xl p-5 shadow-lg shadow-amber-900/20">
            <div className="flex flex-wrap gap-1.5 mb-3">
              <span className="text-[11px] px-2 py-0.5 rounded-full text-white/90 font-medium bg-amber-700">Base</span>
              {Array.from(new Set(result.cards.map((c) => c.expansion)))
                .filter((e) => e !== "base")
                .map((expId) => (
                  <span key={expId} className={`text-[11px] px-2 py-0.5 rounded-full text-white/90 font-medium ${expansionColors[expId] ?? "bg-stone-700"}`}>
                    {expId.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ")}
                  </span>
                ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[...result.cards]
                .sort((a, b) => {
                  const ca = typeof a.cost === "number" ? a.cost : 99;
                  const cb = typeof b.cost === "number" ? b.cost : 99;
                  return ca - cb;
                })
                .map((card) => (
                  <CardChip key={card.id} cardId={card.id} />
                ))}
            </div>
          </div>
        </div>
      )}

      {hasRolled && noResult && (
        <div className="text-center py-16 text-stone-500">
          <div className="text-3xl mb-3">⚠</div>
          <p>Couldn&apos;t generate a kingdom with those filters.</p>
          <p className="text-sm mt-1">Try loosening filters or adding more expansions.</p>
          {activeFilterCount > 0 && (
            <button onClick={() => setFilters(DEFAULT_FILTERS)} className="mt-3 text-sm text-amber-500 hover:text-amber-400">
              Reset filters
            </button>
          )}
        </div>
      )}

      {!hasRolled && owned.length > 0 && (
        <div className="text-center py-16 text-stone-600">
          <div className="text-5xl mb-4">♛</div>
          <p className="text-stone-500">Hit the button and we&apos;ll sort you out</p>
        </div>
      )}
    </>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
  const [mode, setMode] = useState<"browse" | "auto" | "build">("build");
  const expansionColors = Object.fromEntries(EXPANSIONS.map((e) => [e.id, e.color]));

  return (
    <div className="min-h-screen bg-stone-950">
      <header className="border-b border-stone-800 bg-stone-900/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-amber-400 font-serif tracking-wide">Dominion Kingdom Builder</h1>
            <p className="text-sm text-stone-400 mt-0.5">Build, browse, or randomize your perfect kingdom.</p>
          </div>
          <div className="flex rounded-lg border border-stone-700 overflow-hidden shrink-0">
            <button
              onClick={() => setMode("build")}
              className={`px-4 py-2 text-sm font-medium transition-colors
                ${mode === "build" ? "bg-amber-700 text-white" : "text-stone-400 hover:text-stone-200 hover:bg-stone-800"}`}
            >
              Build ✦
            </button>
            <button
              onClick={() => setMode("browse")}
              className={`px-4 py-2 text-sm font-medium transition-colors
                ${mode === "browse" ? "bg-stone-700 text-white" : "text-stone-400 hover:text-stone-200 hover:bg-stone-800"}`}
            >
              Browse
            </button>
            <button
              onClick={() => setMode("auto")}
              className={`px-4 py-2 text-sm font-medium transition-colors
                ${mode === "auto" ? "bg-stone-700 text-white" : "text-stone-400 hover:text-stone-200 hover:bg-stone-800"}`}
            >
              Random
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {mode === "build" && <BuildMode />}
        {mode === "browse" && <BrowseMode expansionColors={expansionColors} />}
        {mode === "auto" && <AutoPickMode expansionColors={expansionColors} />}
      </main>

      <footer className="border-t border-stone-800 mt-16 py-6 text-center text-xs text-stone-600">
        Dominion and all card names are property of Donald X. Vaccarino and Rio Grande Games. This is an unofficial fan tool.
      </footer>
    </div>
  );
}
