"use client";

import { useState, useMemo, useCallback } from "react";
import { EXPANSIONS } from "@/data/expansions";
import { COMBINATIONS, getCombinationsForExpansions } from "@/data/combinations";
import { CARD_MAP } from "@/data/cards";
import type { Combination, Expansion } from "@/types";

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
  hasDraw:   boolean;
  hasAttack: boolean;
  hasGainer: boolean;
  costCurveOk: boolean; // ≥2 early + ≥2 mid
}

function getComboStats(combo: Combination): ComboStats {
  const cards = combo.cards.map((id) => CARD_MAP[id]).filter(Boolean);

  const earlyGame = cards.filter((c) => c.cost >= 2 && c.cost <= 3).length;
  const midGame   = cards.filter((c) => c.cost >= 4 && c.cost <= 5).length;
  const lateGame  = cards.filter((c) => c.cost >= 6).length;

  // A terminal = an Action that gives zero extra Actions (stall if chained)
  const terminals = cards.filter(
    (c) => c.types.includes("Action") && c.plusActions === 0
  ).length;

  const hasDraw   = cards.some((c) => c.roles.includes("draw"));
  const hasAttack = cards.some((c) => c.types.includes("Attack"));
  const hasGainer = cards.some((c) => c.roles.includes("gain"));

  return {
    earlyGame,
    midGame,
    lateGame,
    terminals,
    hasDraw,
    hasAttack,
    hasGainer,
    costCurveOk: earlyGame >= 2 && midGame >= 2,
  };
}

// ─── Filter state ─────────────────────────────────────────────────────────────

interface Filters {
  costCurve:     boolean;            // only show combos with good cost spread
  maxTerminals:  number | null;      // null = any; 3 = at most 3 terminals
  requireDraw:   boolean;
  attackFilter:  "any" | "yes" | "no";
  requireGainer: boolean;
  difficulty:    "any" | "beginner" | "intermediate" | "advanced";
}

const DEFAULT_FILTERS: Filters = {
  costCurve:    false,
  maxTerminals: null,
  requireDraw:  false,
  attackFilter: "any",
  requireGainer: false,
  difficulty:   "any",
};

function applyFilters(combos: Combination[], filters: Filters): Combination[] {
  return combos.filter((combo) => {
    if (filters.difficulty !== "any" && combo.difficulty !== filters.difficulty) return false;

    const stats = getComboStats(combo);
    if (filters.costCurve && !stats.costCurveOk) return false;
    if (filters.maxTerminals !== null && stats.terminals > filters.maxTerminals) return false;
    if (filters.requireDraw && !stats.hasDraw) return false;
    if (filters.attackFilter === "yes" && !stats.hasAttack) return false;
    if (filters.attackFilter === "no"  &&  stats.hasAttack) return false;
    if (filters.requireGainer && !stats.hasGainer) return false;

    return true;
  });
}

function countActiveFilters(filters: Filters): number {
  let n = 0;
  if (filters.costCurve)             n++;
  if (filters.maxTerminals !== null) n++;
  if (filters.requireDraw)           n++;
  if (filters.attackFilter !== "any") n++;
  if (filters.requireGainer)         n++;
  if (filters.difficulty !== "any")  n++;
  return n;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getPlayableCombinations(ownedExpansions: string[]): Combination[] {
  return COMBINATIONS.filter((combo) =>
    combo.expansions.every((exp) => ownedExpansions.includes(exp))
  );
}

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

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

// ─── Filter Panel ─────────────────────────────────────────────────────────────

function FilterToggle({
  label, active, onClick, title,
}: {
  label: string; active: boolean; onClick: () => void; title?: string;
}) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors
        ${active
          ? "bg-amber-700 border-amber-600 text-white"
          : "border-stone-700 text-stone-400 bg-stone-900 hover:border-stone-500 hover:text-stone-200"}`}
    >
      {label}
    </button>
  );
}

function FilterPanel({
  filters,
  onChange,
}: {
  filters: Filters;
  onChange: (f: Filters) => void;
}) {
  const set = <K extends keyof Filters>(key: K, val: Filters[K]) =>
    onChange({ ...filters, [key]: val });

  return (
    <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-4 mb-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {/* Cost curve */}
        <div>
          <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-2">Cost curve</p>
          <FilterToggle
            label="Good spread (≥2 cheap + ≥2 mid)"
            active={filters.costCurve}
            onClick={() => set("costCurve", !filters.costCurve)}
            title="At least 2 cards costing $2–$3 and at least 2 cards costing $4–$5"
          />
        </div>

        {/* Terminal density */}
        <div>
          <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-2">
            Terminal density
          </p>
          <div className="flex flex-wrap gap-1.5">
            {([
              { label: "Any",    val: null },
              { label: "Light (≤3)", val: 3 },
              { label: "Moderate (≤5)", val: 5 },
            ] as const).map(({ label, val }) => (
              <FilterToggle
                key={label}
                label={label}
                active={filters.maxTerminals === val}
                onClick={() => set("maxTerminals", filters.maxTerminals === val ? null : val)}
                title="Terminals are Actions that don't give +Actions — too many stall an engine"
              />
            ))}
          </div>
        </div>

        {/* Draw */}
        <div>
          <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-2">Draw</p>
          <FilterToggle
            label="Must have draw"
            active={filters.requireDraw}
            onClick={() => set("requireDraw", !filters.requireDraw)}
            title="At least one card with a draw role (+cards beyond the base draw)"
          />
        </div>

        {/* Attack */}
        <div>
          <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-2">Attacks</p>
          <div className="flex flex-wrap gap-1.5">
            {(["any", "yes", "no"] as const).map((v) => (
              <FilterToggle
                key={v}
                label={v === "any" ? "Any" : v === "yes" ? "Has attacks" : "No attacks"}
                active={filters.attackFilter === v}
                onClick={() => set("attackFilter", v)}
              />
            ))}
          </div>
        </div>

        {/* Gainers */}
        <div>
          <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-2">Gainers</p>
          <FilterToggle
            label="Must have gainer"
            active={filters.requireGainer}
            onClick={() => set("requireGainer", !filters.requireGainer)}
            title="At least one card that gains other cards outside the buy phase"
          />
        </div>

        {/* Difficulty */}
        <div>
          <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-2">Difficulty</p>
          <div className="flex flex-wrap gap-1.5">
            {(["any", "beginner", "intermediate", "advanced"] as const).map((v) => (
              <FilterToggle
                key={v}
                label={v === "any" ? "Any" : v.charAt(0).toUpperCase() + v.slice(1)}
                active={filters.difficulty === v}
                onClick={() => set("difficulty", v)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
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
              <span className="text-stone-600">↓ cheap  ◆ mid  ↑ exp  T terminals</span>
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
  const [owned, setOwned]         = useState<string[]>([]);
  const [filters, setFilters]     = useState<Filters>(DEFAULT_FILTERS);
  const [showFilters, setShowFilters] = useState(false);
  const [picked, setPicked]       = useState<Combination | null>(null);
  const [hasRolled, setHasRolled] = useState(false);
  const [shake, setShake]         = useState(false);

  const toggleOwned = (id: string) => {
    setOwned((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
    setPicked(null); setHasRolled(false);
  };

  const rawPool      = useMemo(() => getPlayableCombinations(owned), [owned]);
  const filteredPool = useMemo(() => applyFilters(rawPool, filters), [rawPool, filters]);
  const activeFilterCount = countActiveFilters(filters);

  const roll = useCallback(() => {
    if (filteredPool.length === 0) return;
    setPicked(randomItem(filteredPool));
    setHasRolled(true);
    setShake(true);
    setTimeout(() => setShake(false), 400);
  }, [filteredPool]);

  return (
    <>
      {/* Collection selector */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-base font-semibold text-stone-200">Expansions you own</h2>
          <div className="flex gap-3 text-sm text-stone-500">
            {owned.length > 0 && (
              <button onClick={() => { setOwned([]); setPicked(null); setHasRolled(false); }} className="hover:text-stone-300 transition-colors">Clear all</button>
            )}
            {owned.length < SELECTABLE_EXPANSIONS.length && (
              <button onClick={() => { setOwned(SELECTABLE_EXPANSIONS.map((e) => e.id)); setPicked(null); setHasRolled(false); }} className="hover:text-stone-300 transition-colors">Select all</button>
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
      {showFilters && <FilterPanel filters={filters} onChange={setFilters} />}

      {/* Roll button */}
      <div className="flex flex-col items-center gap-3 mb-10">
        {owned.length === 0 ? (
          <p className="text-stone-500 text-sm">Select at least one expansion above to enable auto-pick</p>
        ) : filteredPool.length === 0 ? (
          <p className="text-amber-500/80 text-sm">No kingdoms match your current filters</p>
        ) : (
          <p className="text-stone-400 text-sm">
            <span className="text-amber-400 font-semibold">{filteredPool.length}</span>
            {activeFilterCount > 0 && <span className="text-stone-600"> / {rawPool.length}</span>} kingdoms available
          </p>
        )}
        <button
          onClick={roll}
          disabled={filteredPool.length === 0}
          className={`px-10 py-4 rounded-2xl text-lg font-bold tracking-wide transition-all duration-150
            ${filteredPool.length === 0
              ? "bg-stone-800 text-stone-600 cursor-not-allowed"
              : "bg-amber-600 hover:bg-amber-500 text-white shadow-lg hover:shadow-amber-700/40 active:scale-95"}
            ${shake ? "animate-bounce" : ""}`}
        >
          {hasRolled ? "Pick again ↺" : "Pick for me ✦"}
        </button>
      </div>

      {/* Result */}
      {picked && (
        <div className="max-w-2xl mx-auto">
          <SupplyStrip expansions={picked.expansions} />
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-stone-200">Your Kingdom</h2>
            <div className="flex items-center gap-3 text-xs text-stone-500">
              <span><span className="text-sky-400 font-bold">+A</span> village</span>
              <span><span className="text-emerald-400 font-bold">+B</span> buy</span>
            </div>
          </div>
          <CombinationCard combo={picked} expansionColors={expansionColors} highlighted />
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
  const [mode, setMode] = useState<"browse" | "auto">("browse");
  const expansionColors = Object.fromEntries(EXPANSIONS.map((e) => [e.id, e.color]));

  return (
    <div className="min-h-screen bg-stone-950">
      <header className="border-b border-stone-800 bg-stone-900/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-amber-400 font-serif tracking-wide">Dominion Kingdom Builder</h1>
            <p className="text-sm text-stone-400 mt-0.5">Base is always in play. Mix in up to 2 additional expansions.</p>
          </div>
          <div className="flex rounded-lg border border-stone-700 overflow-hidden shrink-0">
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
                ${mode === "auto" ? "bg-amber-700 text-white" : "text-stone-400 hover:text-stone-200 hover:bg-stone-800"}`}
            >
              Pick for me ✦
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {mode === "browse"
          ? <BrowseMode expansionColors={expansionColors} />
          : <AutoPickMode expansionColors={expansionColors} />
        }
      </main>

      <footer className="border-t border-stone-800 mt-16 py-6 text-center text-xs text-stone-600">
        Dominion and all card names are property of Donald X. Vaccarino and Rio Grande Games. This is an unofficial fan tool.
      </footer>
    </div>
  );
}
