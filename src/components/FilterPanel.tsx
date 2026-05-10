"use client";

import type { Filters } from "@/lib/filters";

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

export default function FilterPanel({
  filters,
  onChange,
  hideDifficulty = false,
}: {
  filters: Filters;
  onChange: (f: Filters) => void;
  hideDifficulty?: boolean;
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
          <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-2">Terminal density</p>
          <div className="flex flex-wrap gap-1.5">
            {([
              { label: "Any",          val: null },
              { label: "Light (≤3)",   val: 3 },
              { label: "Moderate (≤5)", val: 5 },
            ] as const).map(({ label, val }) => (
              <FilterToggle
                key={label}
                label={label}
                active={filters.maxTerminals === val}
                onClick={() => set("maxTerminals", filters.maxTerminals === val ? null : val)}
                title="Terminals are Actions that don't give +Actions"
              />
            ))}
          </div>
        </div>

        {/* Draw */}
        <div>
          <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-2">Draw availability</p>
          <div className="flex flex-wrap gap-1.5">
            {([
              { label: "Any",    val: "any"  as const, title: "Don't filter by draw" },
              { label: "Some",   val: "some" as const, title: "At least 1 draw card" },
              { label: "Loaded", val: "many" as const, title: "At least 2 draw cards" },
            ]).map(({ label, val, title }) => (
              <FilterToggle
                key={val}
                label={label}
                active={filters.drawLevel === val}
                onClick={() => set("drawLevel", val)}
                title={title}
              />
            ))}
          </div>
        </div>

        {/* Attack severity */}
        <div>
          <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-2">Attack severity</p>
          <div className="flex flex-wrap gap-1.5">
            {([
              { label: "Any",    val: "any"   as const, title: "Include all attack levels" },
              { label: "None",   val: "none"  as const, title: "Peaceful — no attack cards" },
              { label: "Light",  val: "light" as const, title: "Exactly 1 attack card" },
              { label: "Brutal", val: "heavy" as const, title: "2+ attack cards" },
            ]).map(({ label, val, title }) => (
              <FilterToggle
                key={val}
                label={label}
                active={filters.attackIntensity === val}
                onClick={() => set("attackIntensity", val)}
                title={title}
              />
            ))}
          </div>
        </div>

        {/* Gain outside buy */}
        <div>
          <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-2">Gain outside buy</p>
          <FilterToggle
            label="Must have gainer"
            active={filters.requireGainer}
            onClick={() => set("requireGainer", !filters.requireGainer)}
            title="At least one card that gains other cards outside the buy phase"
          />
        </div>

        {/* Non-terminal actions */}
        <div>
          <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-2">+Action cards (villages)</p>
          <div className="flex flex-wrap gap-1.5">
            {([
              { label: "Any", val: null },
              { label: "1+",  val: 1 },
              { label: "2+",  val: 2 },
              { label: "3+",  val: 3 },
            ] as const).map(({ label, val }) => (
              <FilterToggle
                key={label}
                label={label}
                active={filters.minVillages === val}
                onClick={() => set("minVillages", filters.minVillages === val ? null : val)}
                title="Action cards that give +1 or more Actions when played"
              />
            ))}
          </div>
        </div>

        {/* Difficulty — only shown in Browse / Random modes */}
        {!hideDifficulty && (
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
        )}
      </div>
    </div>
  );
}
