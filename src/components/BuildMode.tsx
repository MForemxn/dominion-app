"use client";

import { useState, useMemo, useCallback } from "react";
import { EXPANSIONS, EXPANSION_MAP } from "@/data/expansions";
import { CARDS, CARD_MAP } from "@/data/cards";
import { generateKingdom, generateBest, type GeneratedKingdom } from "@/lib/kingdom-generator";
import {
  scoreKingdom,
  OPTIMIZATION_PRESETS,
  DEFAULT_WEIGHTS,
  type ScoringWeights,
} from "@/lib/kingdom-scorer";
import type { Card, CardRole, GeneratorConstraints, KingdomScore, ComponentRequirement, SelectedNonSupply, NonSupplyCard } from "@/types";
import { saveKingdom, type SavedKingdom } from "@/lib/saved-kingdoms";
import FilterPanel from "@/components/FilterPanel";
import { type Filters, DEFAULT_FILTERS, countActiveFilters, meetsFilters } from "@/lib/filters";

const ALL_ROLES: { id: CardRole; label: string }[] = [
  { id: "village", label: "Village (+Actions)" },
  { id: "draw", label: "Draw" },
  { id: "economy", label: "Economy" },
  { id: "thinning", label: "Thinning" },
  { id: "attack", label: "Attack" },
  { id: "reaction", label: "Reaction" },
  { id: "gain", label: "Gainers" },
  { id: "duration", label: "Duration" },
  { id: "alt-victory", label: "Alt-VP" },
  { id: "multiplier", label: "Multiplier" },
  { id: "sifting", label: "Sifting" },
];

// ── Score display ─────────────────────────────────────────────────────────────

function ScoreBar({ label, value, max = 10 }: { label: string; value: number; max?: number }) {
  const pct = (value / max) * 100;
  const color =
    value >= 8 ? "bg-emerald-500" :
    value >= 6 ? "bg-amber-500" :
    value >= 4 ? "bg-orange-500" : "bg-red-500";

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-stone-400 w-32 shrink-0 truncate">{label}</span>
      <div className="flex-1 h-2 bg-stone-800 rounded-full overflow-hidden">
        <div className={`h-full rounded-full transition-all duration-300 ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs text-stone-300 w-6 text-right font-mono">{value}</span>
    </div>
  );
}

function ScorePanel({ score, fitScore, presetName }: { score: KingdomScore; fitScore?: KingdomScore; presetName?: string }) {
  const overallColor = (val: number) =>
    val >= 8 ? "text-emerald-400" : val >= 6 ? "text-amber-400" : val >= 4 ? "text-orange-400" : "text-red-400";
  const showFit = fitScore && presetName && presetName !== "Balanced" && presetName !== "None";

  return (
    <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-4 space-y-4">
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-stone-200">Kingdom Quality</h3>
          <span className={`text-2xl font-bold font-mono ${overallColor(score.overall)}`}>{score.overall}</span>
        </div>
        <div className="space-y-1.5">
          <ScoreBar label="Village Coverage" value={score.villageCoverage} />
          <ScoreBar label="Draw" value={score.drawAvailability} />
          <ScoreBar label="Cost Curve" value={score.costCurve} />
          <ScoreBar label="+Buy Access" value={score.terminalBalance} />
          <ScoreBar label="Interaction" value={score.interaction} />
          <ScoreBar label="Economy" value={score.economy} />
          <ScoreBar label="Strategic Diversity" value={score.strategicDiversity} />
          <ScoreBar label="Thinning" value={score.thinningAccess} />
        </div>
      </div>
      {showFit && (
        <div className="border-t border-stone-700 pt-4">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-semibold text-stone-200">{presetName} Fit</h3>
            <span className={`text-2xl font-bold font-mono ${overallColor(fitScore.overall)}`}>{fitScore.overall}</span>
          </div>
          <p className="text-[10px] text-stone-500">How well this kingdom matches your optimization goal</p>
        </div>
      )}
    </div>
  );
}

// ── Card search picker (searches ALL cards, not just selected expansions) ─────

function CardSearchPicker({
  selected,
  excluded,
  onToggle,
  placeholder,
}: {
  selected: string[];
  excluded?: string[];
  onToggle: (id: string) => void;
  placeholder: string;
}) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return CARDS.filter(
      (c) =>
        !excluded?.includes(c.id) &&
        (c.name.toLowerCase().includes(q) || c.id.includes(q) || c.expansion.includes(q))
    ).slice(0, 10);
  }, [query, excluded]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-sm text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-stone-500"
      />
      {results.length > 0 && (
        <div className="mt-1 bg-stone-800 border border-stone-700 rounded-lg overflow-hidden">
          {results.map((card) => {
            const exp = EXPANSION_MAP[card.expansion];
            return (
              <button
                key={card.id}
                onClick={() => { onToggle(card.id); setQuery(""); }}
                className={`w-full text-left px-3 py-1.5 text-sm hover:bg-stone-700 transition-colors flex items-center justify-between gap-2 ${
                  selected.includes(card.id) ? "text-amber-400" : "text-stone-300"
                }`}
              >
                <span>{card.name}</span>
                <span className="flex items-center gap-1.5 shrink-0">
                  {card.edition && <span className="text-[10px] text-stone-500">{card.edition}e</span>}
                  <span className={`text-[10px] px-1.5 py-0.5 rounded text-white/80 ${exp?.color ?? "bg-stone-700"}`}>
                    {card.expansion.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ")}
                  </span>
                  <span className="text-stone-500 text-xs">${typeof card.cost === "number" ? card.cost : card.cost}</span>
                </span>
              </button>
            );
          })}
        </div>
      )}
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {selected.map((id) => {
            const card = CARD_MAP[id];
            if (!card) return null;
            return (
              <button
                key={id}
                onClick={() => onToggle(id)}
                className="flex items-center gap-1 px-2 py-0.5 rounded bg-stone-800 border border-stone-700 text-xs text-stone-300 hover:border-red-700 hover:text-red-400 transition-colors"
              >
                {card.name}
                <span className="text-stone-500">&times;</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── Result card ───────────────────────────────────────────────────────────────

function ResultCard({ card, locked, onToggleLock }: { card: Card; locked: boolean; onToggleLock: () => void }) {
  const typeColor = card.types.includes("Attack") ? "border-red-800/60 bg-red-950/40"
    : card.types.includes("Duration") ? "border-orange-800/60 bg-orange-950/40"
    : card.types.includes("Night") ? "border-indigo-800/60 bg-indigo-950/40"
    : card.types.includes("Reaction") ? "border-green-800/60 bg-green-950/40"
    : card.types.includes("Victory") ? "border-purple-800/60 bg-purple-950/40"
    : card.types.includes("Treasure") ? "border-yellow-800/60 bg-yellow-950/40"
    : "border-stone-700/60 bg-stone-800/40";

  const exp = EXPANSION_MAP[card.expansion];

  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm ${typeColor} ${locked ? "ring-1 ring-amber-400/60" : ""}`}
      title={card.notes}
    >
      <button
        onClick={onToggleLock}
        className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] shrink-0 transition-colors ${
          locked ? "bg-amber-600/40 border-amber-500 text-amber-300" : "border-stone-600 hover:border-stone-400"
        }`}
        title={locked ? "Unlock (will re-roll this card)" : "Lock (keep this card on re-roll)"}
      >
        {locked && "🔒"}
      </button>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="font-medium text-stone-100 truncate">{card.name}</span>
          <span className="text-stone-400 shrink-0">${typeof card.cost === "number" ? card.cost : card.cost}</span>
        </div>
        <div className="flex gap-2 mt-0.5">
          {card.plusActions > 0 && <span className="text-sky-400 text-[10px] font-bold">+{card.plusActions}A</span>}
          {card.plusBuys > 0 && <span className="text-emerald-400 text-[10px] font-bold">+{card.plusBuys}B</span>}
          {card.plusCards > 0 && <span className="text-violet-400 text-[10px] font-bold">+{card.plusCards}C</span>}
          {card.plusCoins > 0 && <span className="text-yellow-400 text-[10px] font-bold">+{card.plusCoins}$</span>}
        </div>
      </div>
      {/* Expansion tag */}
      <span
        className={`text-[10px] px-1.5 py-0.5 rounded text-white/80 font-medium shrink-0 ${exp?.color ?? "bg-stone-600"}`}
        title={`${exp?.name ?? card.expansion}${card.edition ? ` (${card.edition}e)` : ""}`}
      >
        {card.expansion === "base" ? "Base"
          : card.expansion.split("-").map((w) => w[0].toUpperCase()).join("")}
        {card.edition ? <span className="opacity-70"> {card.edition}e</span> : null}
      </span>
    </div>
  );
}

// ── Non-supply suggestions panel ──────────────────────────────────────────────

function NonSupplyPanel({ nonSupply }: { nonSupply: SelectedNonSupply }) {
  const sections: { label: string; items: NonSupplyCard[] | NonSupplyCard | undefined; typeColor: string }[] = [
    { label: "Events",   items: nonSupply.events,   typeColor: "bg-teal-800/60 border-teal-700/60" },
    { label: "Way",      items: nonSupply.way,       typeColor: "bg-lime-800/60 border-lime-700/60" },
    { label: "Projects", items: nonSupply.projects,  typeColor: "bg-cyan-800/60 border-cyan-700/60" },
    { label: "Landmark", items: nonSupply.landmark,  typeColor: "bg-red-900/60 border-red-800/60" },
    { label: "Traits",   items: nonSupply.traits,    typeColor: "bg-sky-800/60 border-sky-700/60" },
    { label: "Ally",     items: nonSupply.ally,      typeColor: "bg-pink-800/60 border-pink-700/60" },
  ];

  const flatItems = sections.flatMap(({ label, items, typeColor }) => {
    if (!items) return [];
    const arr = Array.isArray(items) ? items : [items];
    return arr.map((item) => ({ label, item, typeColor }));
  });

  if (flatItems.length === 0) return null;

  return (
    <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-4">
      <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-3">
        Suggested Non-Supply Cards
      </p>
      <div className="flex flex-wrap gap-2">
        {flatItems.map(({ label, item, typeColor }) => (
          <div
            key={item.id}
            className={`flex flex-col gap-0.5 px-3 py-2 rounded-lg border text-xs ${typeColor}`}
            title={item.description}
          >
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] text-stone-400 uppercase font-semibold">{label}</span>
              {item.cost !== undefined && (
                <span className="text-stone-400">${item.cost}</span>
              )}
            </div>
            <span className="font-semibold text-stone-100">{item.name}</span>
            <span className="text-stone-400 text-[10px] leading-snug max-w-[220px]">{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Component requirements panel ──────────────────────────────────────────────

function ComponentsPanel({ components }: { components: ComponentRequirement[] }) {
  if (components.length === 0) return null;

  return (
    <div className="bg-stone-900/80 border border-amber-800/40 rounded-xl p-4">
      <p className="text-[11px] text-amber-500 uppercase tracking-widest font-semibold mb-3">
        ⚠ Additional Components Needed
      </p>
      <div className="grid gap-1.5 sm:grid-cols-2">
        {components.map((comp) => (
          <div key={comp.id} className="flex items-start gap-2 text-xs">
            <span className="text-amber-400 shrink-0 mt-0.5">▸</span>
            <div>
              <span className="font-semibold text-stone-200">{comp.name}</span>
              <span className="text-stone-500"> — {comp.reason}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Edition toggle ────────────────────────────────────────────────────────────

function EditionToggle({
  expansionId,
  edition,
  onChange,
}: {
  expansionId: string;
  edition: 1 | 2;
  onChange: (ed: 1 | 2) => void;
}) {
  const exp = EXPANSION_MAP[expansionId];
  if (!exp?.hasEditions) return null;

  return (
    <div className="flex items-center gap-0.5 rounded overflow-hidden border border-stone-700 text-[10px] font-semibold">
      <button
        onClick={() => onChange(1)}
        className={`px-1.5 py-0.5 transition-colors ${
          edition === 1 ? "bg-stone-600 text-white" : "text-stone-500 hover:text-stone-300"
        }`}
        title={`Use ${exp.name} 1st edition (${exp.editionYears?.[1]})`}
      >
        1st
      </button>
      <button
        onClick={() => onChange(2)}
        className={`px-1.5 py-0.5 transition-colors ${
          edition === 2 ? "bg-stone-600 text-white" : "text-stone-500 hover:text-stone-300"
        }`}
        title={`Use ${exp.name} 2nd edition (${exp.editionYears?.[2]})`}
      >
        2nd
      </button>
    </div>
  );
}

// ── Main BuildMode component ──────────────────────────────────────────────────

export default function BuildMode() {
  const [expansions, setExpansions] = useState<string[]>(["base"]);
  const [editionOverrides, setEditionOverrides] = useState<Record<string, 1 | 2>>({});
  const [costMin, setCostMin] = useState(2);
  const [costMax, setCostMax] = useState(8);
  const [minPlusActions, setMinPlusActions] = useState(0);
  const [minPlusBuys, setMinPlusBuys] = useState(0);
  const [minPlusCards, setMinPlusCards] = useState(0);
  const [minPlusCoins, setMinPlusCoins] = useState(0);
  const [requireRoles, setRequireRoles] = useState<Partial<Record<CardRole, number>>>({});
  const [mustInclude, setMustInclude] = useState<string[]>([]);
  const [mustExclude, setMustExclude] = useState<string[]>([]);
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [showFilters, setShowFilters] = useState(false);
  const [result, setResult] = useState<GeneratedKingdom | null>(null);
  const [locked, setLocked] = useState<Set<string>>(new Set());
  const [hasGenerated, setHasGenerated] = useState(false);
  const [saveName, setSaveName] = useState("");
  const [saveNotes, setSaveNotes] = useState("");
  const [justSaved, setJustSaved] = useState(false);
  const [presetId, setPresetId] = useState("balanced");
  const [customWeights, setCustomWeights] = useState<ScoringWeights>(DEFAULT_WEIGHTS);
  const [showWeightSliders, setShowWeightSliders] = useState(false);
  const [generateBestMode, setGenerateBestMode] = useState(false);

  const selectPreset = (id: string) => {
    setPresetId(id);
    const preset = OPTIMIZATION_PRESETS.find((p) => p.id === id);
    if (preset) setCustomWeights(preset.weights);
  };

  const setWeight = (key: keyof ScoringWeights, value: number) => {
    setCustomWeights((prev) => ({ ...prev, [key]: value }));
    setPresetId("custom");
  };

  const toggleExpansion = (id: string) => {
    if (id === "base") return;
    setExpansions((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const setEdition = (expansionId: string, ed: 1 | 2) => {
    setEditionOverrides((prev) => ({ ...prev, [expansionId]: ed }));
  };

  const setRoleCount = (role: CardRole, count: number) => {
    setRequireRoles((prev) => {
      const next = { ...prev };
      if (count === 0) delete next[role];
      else next[role] = count;
      return next;
    });
  };

  const toggleMustInclude = (id: string) =>
    setMustInclude((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  const toggleMustExclude = (id: string) =>
    setMustExclude((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  const toggleLock = (id: string) => {
    setLocked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const generate = useCallback(() => {
    const lockedInclude = Array.from(locked).filter((id) => CARD_MAP[id]);
    const allMustInclude = Array.from(new Set([...mustInclude, ...lockedInclude]));

    const constraints: GeneratorConstraints = {
      expansions,
      costRange: [costMin, costMax],
      minPlusActions: minPlusActions || undefined,
      minPlusBuys: minPlusBuys || undefined,
      minPlusCards: minPlusCards || undefined,
      minPlusCoins: minPlusCoins || undefined,
      requireRoles: Object.keys(requireRoles).length > 0 ? requireRoles : undefined,
      mustInclude: allMustInclude.length > 0 ? allMustInclude : undefined,
      mustExclude: mustExclude.length > 0 ? mustExclude : undefined,
      editionOverrides,
    };

    const activeFilters = countActiveFilters(filters) > 0;
    let kingdom: GeneratedKingdom | null = null;

    const maxAttempts = activeFilters ? 15 : 1;
    for (let i = 0; i < maxAttempts; i++) {
      const candidate = generateBestMode
        ? generateBest(constraints, customWeights, 30)
        : generateKingdom(constraints, customWeights);
      if (!candidate) break;
      if (!activeFilters || meetsFilters(candidate.cards, filters)) {
        kingdom = candidate;
        break;
      }
    }

    setResult(kingdom);
    setHasGenerated(true);
  }, [expansions, editionOverrides, costMin, costMax, minPlusActions, minPlusBuys, minPlusCards, minPlusCoins, requireRoles, mustInclude, mustExclude, locked, customWeights, generateBestMode, filters]);

  const poolSize = useMemo(() => {
    return CARDS.filter((c) => {
      if (!expansions.includes(c.expansion)) return false;
      if (mustExclude.includes(c.id)) return false;
      if (c.edition !== undefined) {
        const override = editionOverrides[c.expansion] ?? 2;
        if (c.edition !== override) return false;
      }
      return true;
    }).length;
  }, [expansions, mustExclude, editionOverrides]);

  const constraintWarnings = useMemo(() => {
    const pool = CARDS.filter((c) => {
      if (!expansions.includes(c.expansion)) return false;
      if (mustExclude.includes(c.id)) return false;
      if (c.edition !== undefined) {
        const override = editionOverrides[c.expansion] ?? 2;
        if (c.edition !== override) return false;
      }
      return true;
    });
    const warnings: string[] = [];

    for (const [role, min] of Object.entries(requireRoles)) {
      if (!min) continue;
      const available = pool.filter((c) => c.roles.includes(role as CardRole)).length;
      if (available < min) {
        warnings.push(`${role}: need ${min} but only ${available} available`);
      }
    }
    if (pool.length < 10) {
      warnings.push(`Only ${pool.length} cards in pool (need at least 10)`);
    }
    return warnings;
  }, [expansions, mustExclude, requireRoles, editionOverrides]);

  return (
    <div className="space-y-8">
      {/* Expansion selector */}
      <section>
        <h2 className="text-base font-semibold text-stone-200 mb-1">Expansions</h2>
        <p className="text-xs text-stone-500 mb-3">Base is always included. Select all expansions you own. Use 1st/2nd toggles for editions.</p>
        <div className="flex flex-wrap gap-2">
          {EXPANSIONS.map((exp) => (
            <div key={exp.id} className="flex flex-col gap-1 items-start">
              <button
                onClick={() => toggleExpansion(exp.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-150 ${
                  expansions.includes(exp.id)
                    ? `${exp.color} border-transparent text-white shadow-md`
                    : "border-stone-700 text-stone-400 bg-stone-900 hover:border-stone-500 hover:text-white"
                } ${exp.id === "base" ? "opacity-80 cursor-default" : ""}`}
              >
                {expansions.includes(exp.id) && <span className="text-xs">✓</span>}
                {exp.name}
              </button>
              {/* Show edition toggle only if expansion is selected and has editions */}
              {expansions.includes(exp.id) && exp.hasEditions && (
                <EditionToggle
                  expansionId={exp.id}
                  edition={editionOverrides[exp.id] ?? 2}
                  onChange={(ed) => setEdition(exp.id, ed)}
                />
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-500 mt-2">{poolSize} cards in pool</p>
      </section>

      {/* Constraints */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Cost range */}
        <div>
          <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-2">Cost range</p>
          <div className="flex items-center gap-2">
            <select value={costMin} onChange={(e) => setCostMin(Number(e.target.value))}
              className="bg-stone-800 border border-stone-700 rounded px-2 py-1 text-sm text-stone-200">
              {[0,1,2,3,4,5,6,7,8].map((n) => <option key={n} value={n}>${n}</option>)}
            </select>
            <span className="text-stone-500">to</span>
            <select value={costMax} onChange={(e) => setCostMax(Number(e.target.value))}
              className="bg-stone-800 border border-stone-700 rounded px-2 py-1 text-sm text-stone-200">
              {[2,3,4,5,6,7,8,9,10].map((n) => <option key={n} value={n}>${n}</option>)}
            </select>
          </div>
        </div>

        {/* Min stats */}
        <div>
          <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-2">Min cards with stat</p>
          <div className="grid grid-cols-2 gap-2">
            {([["minPlusActions", minPlusActions, setMinPlusActions, "sky", "+A"],
               ["minPlusBuys", minPlusBuys, setMinPlusBuys, "emerald", "+B"],
               ["minPlusCards", minPlusCards, setMinPlusCards, "violet", "+C"],
               ["minPlusCoins", minPlusCoins, setMinPlusCoins, "yellow", "+$"]] as const).map(([, val, set, color, label]) => (
              <label key={label} className="flex items-center gap-1.5 text-xs text-stone-300">
                <span className={`text-${color}-400 font-bold`}>{label}</span>
                <select value={val} onChange={(e) => (set as any)(Number(e.target.value))}
                  className="bg-stone-800 border border-stone-700 rounded px-1.5 py-0.5 text-xs text-stone-200 w-12">
                  {[0,1,2,3,4,5].map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </label>
            ))}
          </div>
        </div>

        {/* Required roles */}
        <div className="sm:col-span-2 lg:col-span-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold">Minimum cards per role</p>
            {Object.keys(requireRoles).length > 0 && (
              <button onClick={() => setRequireRoles({})} className="text-[10px] text-stone-500 hover:text-stone-300 transition-colors">
                Reset all
              </button>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {ALL_ROLES.map(({ id, label }) => {
              const val = requireRoles[id] ?? 0;
              return (
                <div key={id} className="flex items-center gap-1.5">
                  <span className={`text-xs w-24 truncate ${val > 0 ? "text-stone-200" : "text-stone-400"}`}>{label}</span>
                  <div className="flex items-center gap-0.5">
                    <button onClick={() => setRoleCount(id, Math.max(0, val - 1))}
                      className="w-5 h-5 rounded border border-stone-700 text-stone-400 hover:border-stone-500 text-xs flex items-center justify-center">-</button>
                    <span className={`w-5 text-center text-xs font-mono ${val > 0 ? "text-amber-400" : "text-stone-600"}`}>{val}</span>
                    <button onClick={() => setRoleCount(id, Math.min(5, val + 1))}
                      className="w-5 h-5 rounded border border-stone-700 text-stone-400 hover:border-stone-500 text-xs flex items-center justify-center">+</button>
                  </div>
                  {val > 0 && (
                    <button onClick={() => setRoleCount(id, 0)} className="text-[10px] text-stone-600 hover:text-red-400">&times;</button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Must include / exclude — searches ALL cards */}
      <section className="grid gap-6 sm:grid-cols-2">
        <div>
          <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-2">Must include</p>
          <CardSearchPicker
            selected={mustInclude}
            excluded={mustExclude}
            onToggle={toggleMustInclude}
            placeholder="Search any card to include..."
          />
        </div>
        <div>
          <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-2">Must exclude</p>
          <CardSearchPicker
            selected={mustExclude}
            excluded={mustInclude}
            onToggle={toggleMustExclude}
            placeholder="Search any card to exclude..."
          />
        </div>
      </section>

      {/* Optimize for */}
      <section>
        <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-3">Optimize for...</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {OPTIMIZATION_PRESETS.map((preset) => (
            <button key={preset.id} onClick={() => selectPreset(preset.id)} title={preset.description}
              className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors ${
                presetId === preset.id ? "bg-amber-700 border-amber-600 text-white" : "border-stone-700 text-stone-400 hover:border-stone-500 hover:text-stone-200"
              }`}>
              {preset.name}
            </button>
          ))}
          {presetId === "custom" && (
            <span className="px-3 py-1.5 rounded-lg border border-violet-600 bg-violet-950/30 text-sm font-medium text-violet-400">Custom</span>
          )}
        </div>

        <button onClick={() => setShowWeightSliders(!showWeightSliders)}
          className="text-xs text-stone-500 hover:text-stone-300 transition-colors mb-3">
          {showWeightSliders ? "Hide weight sliders" : "Fine-tune weights..."}
        </button>

        {showWeightSliders && (
          <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-4 grid gap-3 sm:grid-cols-2">
            {([
              ["villageCoverage","Village Coverage"],["drawAvailability","Draw"],["costCurve","Cost Curve"],
              ["buyAvailability","+Buy Access"],["interaction","Interaction"],["economy","Economy"],
              ["strategicDiversity","Strategic Diversity"],["thinningAccess","Thinning"],
            ] as [keyof ScoringWeights, string][]).map(([key, label]) => (
              <label key={key} className="flex items-center gap-2">
                <span className="text-xs text-stone-400 w-32 shrink-0">{label}</span>
                <input type="range" min="0" max="3" step="0.1" value={customWeights[key]}
                  onChange={(e) => setWeight(key, parseFloat(e.target.value))}
                  className="flex-1 accent-amber-500" />
                <span className="text-xs text-stone-300 w-6 text-right font-mono">{customWeights[key].toFixed(1)}</span>
              </label>
            ))}
          </div>
        )}
      </section>

      {/* Filters */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => setShowFilters((v) => !v)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors
              ${showFilters || countActiveFilters(filters) > 0
                ? "border-amber-600 text-amber-400 bg-amber-950/30"
                : "border-stone-700 text-stone-400 hover:border-stone-500 hover:text-stone-200"}`}
          >
            <span>⚙ Result filters</span>
            {countActiveFilters(filters) > 0 && (
              <span className="text-xs bg-amber-600 text-white rounded-full w-4 h-4 flex items-center justify-center leading-none">
                {countActiveFilters(filters)}
              </span>
            )}
          </button>
          {countActiveFilters(filters) > 0 && (
            <button onClick={() => setFilters(DEFAULT_FILTERS)} className="text-xs text-stone-500 hover:text-stone-300">Reset filters</button>
          )}
        </div>
        {showFilters && <FilterPanel filters={filters} onChange={setFilters} hideDifficulty />}
      </section>

      {/* Constraint warnings */}
      {constraintWarnings.length > 0 && (
        <div className="bg-red-950/40 border border-red-800/40 rounded-xl p-3">
          <p className="text-xs font-semibold text-red-400 mb-1">Impossible constraints:</p>
          {constraintWarnings.map((w) => (
            <p key={w} className="text-xs text-red-300/80">{w}</p>
          ))}
        </div>
      )}

      {/* Generate button */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-4">
          <button
            onClick={generate}
            disabled={constraintWarnings.length > 0}
            className={`px-10 py-4 rounded-2xl text-lg font-bold tracking-wide transition-all duration-150 ${
              constraintWarnings.length > 0
                ? "bg-stone-800 text-stone-600 cursor-not-allowed"
                : "bg-amber-600 hover:bg-amber-500 text-white shadow-lg hover:shadow-amber-700/40 active:scale-95"
            }`}
          >
            {hasGenerated ? "Re-generate ↺" : "Generate Kingdom ✦"}
          </button>
        </div>
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input type="checkbox" checked={generateBestMode} onChange={(e) => setGenerateBestMode(e.target.checked)}
            className="rounded border-stone-600 bg-stone-800 text-amber-500 accent-amber-500" />
          <span className="text-sm text-stone-400">Generate best</span>
          <span className="text-xs text-stone-600" title="Runs 30 generations and picks the highest-scoring result">(tries 30×, picks top scorer)</span>
        </label>
        {locked.size > 0 && (
          <p className="text-xs text-stone-500">{locked.size} card{locked.size > 1 ? "s" : ""} locked</p>
        )}
      </div>

      {/* Result */}
      {result && (
        <div className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-semibold text-stone-200">Generated Kingdom</h2>
                <div className="flex items-center gap-3 text-xs text-stone-500">
                  <span><span className="text-sky-400 font-bold">+A</span> actions</span>
                  <span><span className="text-emerald-400 font-bold">+B</span> buys</span>
                  <span><span className="text-violet-400 font-bold">+C</span> cards</span>
                  <span><span className="text-yellow-400 font-bold">+$</span> coins</span>
                </div>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {result.cards
                  .sort((a, b) => {
                    const ca = typeof a.cost === "number" ? a.cost : 99;
                    const cb = typeof b.cost === "number" ? b.cost : 99;
                    return ca - cb;
                  })
                  .map((card) => (
                    <ResultCard key={card.id} card={card} locked={locked.has(card.id)} onToggleLock={() => toggleLock(card.id)} />
                  ))}
              </div>
            </div>
            <ScorePanel
              score={result.score}
              fitScore={result.fitScore}
              presetName={OPTIMIZATION_PRESETS.find((p) => p.id === presetId)?.name}
            />
          </div>

          {/* Non-supply suggestions */}
          {result.selectedNonSupply && Object.keys(result.selectedNonSupply).length > 0 && (
            <NonSupplyPanel nonSupply={result.selectedNonSupply} />
          )}

          {/* Required components */}
          {result.requiredComponents && result.requiredComponents.length > 0 && (
            <ComponentsPanel components={result.requiredComponents} />
          )}

          {/* Save section */}
          <div className="bg-stone-900/80 border border-stone-800 rounded-xl p-4">
            <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-3">Save this kingdom</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="text" value={saveName} onChange={(e) => setSaveName(e.target.value)}
                placeholder="Kingdom name..."
                className="flex-1 px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-sm text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-stone-500" />
              <input type="text" value={saveNotes} onChange={(e) => setSaveNotes(e.target.value)}
                placeholder="Notes (optional)..."
                className="flex-1 px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-sm text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-stone-500" />
              <button
                onClick={() => {
                  if (!result) return;
                  const kingdom: SavedKingdom = {
                    id: `saved-${Date.now()}`,
                    name: saveName.trim() || `Kingdom ${new Date().toLocaleDateString()}`,
                    cards: result.cards.map((c) => c.id),
                    expansions: Array.from(new Set(result.cards.map((c) => c.expansion))),
                    score: result.score,
                    notes: saveNotes.trim() || undefined,
                    createdAt: new Date().toISOString(),
                  };
                  saveKingdom(kingdom);
                  setJustSaved(true);
                  setSaveName(""); setSaveNotes("");
                  setTimeout(() => setJustSaved(false), 2000);
                }}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all shrink-0 ${
                  justSaved ? "bg-emerald-700 text-white" : "bg-stone-700 hover:bg-stone-600 text-stone-200"
                }`}
              >
                {justSaved ? "Saved!" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

      {hasGenerated && !result && (
        <div className="text-center py-12 text-stone-500">
          <div className="text-3xl mb-3">⚠</div>
          <p>Couldn&apos;t generate a kingdom with those constraints.</p>
          <p className="text-sm mt-1">Try loosening filters or adding more expansions.</p>
        </div>
      )}
    </div>
  );
}
