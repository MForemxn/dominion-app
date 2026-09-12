"use client";

import { useEffect, useMemo, useState } from "react";
import { CARD_MAP } from "@/data/cards";
import { EXPANSION_MAP } from "@/data/expansions";
import { NON_SUPPLY_MAP } from "@/data/non-supply";
import { detectRequiredComponents } from "@/data/expansion-components";
import { subscribeTableGame, type TableGame } from "@/lib/now-playing";
import { cardArtCandidates, supplyArtCandidates } from "@/lib/card-art";
import type { Card, NonSupplyCard } from "@/types";

function sortKey(card: Card): number {
  if (typeof card.cost === "number") return card.cost;
  const match = String(card.cost).match(/^(\d+)/);
  return 100 + (match ? parseInt(match[1], 10) : 0);
}

const EXPANSION_TEXT: Record<string, string> = {
  base: "text-amber-300",
  intrigue: "text-purple-300",
  seaside: "text-blue-300",
  alchemy: "text-violet-300",
  prosperity: "text-yellow-300",
  hinterlands: "text-orange-300",
  "dark-ages": "text-stone-300",
  "cornucopia-guilds": "text-green-300",
  adventures: "text-teal-300",
  empires: "text-red-300",
  nocturne: "text-indigo-300",
  renaissance: "text-cyan-300",
  menagerie: "text-lime-300",
  allies: "text-pink-300",
  plunder: "text-sky-300",
  "rising-sun": "text-red-400",
};

function expansionTextClass(expansionId: string): string {
  return EXPANSION_TEXT[expansionId] ?? "text-stone-300";
}

function costLabel(cost: number | string): string {
  return typeof cost === "number" ? `$${cost}` : `$${cost}`;
}

function statsLine(card: Card): string {
  const bits: string[] = [];
  if (card.plusActions) bits.push(`+${card.plusActions} Action`);
  if (card.plusCards) bits.push(`+${card.plusCards} Card`);
  if (card.plusBuys) bits.push(`+${card.plusBuys} Buy`);
  if (card.plusCoins) bits.push(`+$${card.plusCoins}`);
  return bits.join(" · ");
}

function Art({
  candidates,
  alt,
  className,
}: {
  candidates: string[];
  alt: string;
  className?: string;
}) {
  const [i, setI] = useState(0);
  const src = i < candidates.length ? candidates[i] : undefined;
  if (!src) {
    return (
      <div className={`bg-stone-900 flex items-center justify-center text-stone-500 text-sm ${className ?? ""}`}>
        {alt}
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setI((n) => n + 1)}
    />
  );
}

export default function DisplayPage() {
  const [game, setGame] = useState<TableGame | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    return subscribeTableGame((g) => {
      setGame(g);
      setLoaded(true);
    });
  }, []);

  const cards = useMemo(() => {
    if (!game) return [];
    return game.cards
      .map((id) => CARD_MAP[id])
      .filter((c): c is Card => !!c)
      .sort((a, b) => sortKey(a) - sortKey(b) || a.name.localeCompare(b.name));
  }, [game]);

  const nonSupply = useMemo(() => {
    if (!game?.nonSupplyIds) return [];
    return game.nonSupplyIds.map((id) => NON_SUPPLY_MAP[id]).filter(Boolean) as NonSupplyCard[];
  }, [game]);

  const requiredComponents = useMemo(
    () => (game ? detectRequiredComponents(cards, game.expansions) : []),
    [cards, game]
  );

  const hasAlchemy = game?.expansions.includes("alchemy") ?? false;
  const hasProsperity = game?.expansions.includes("prosperity") ?? false;
  const hasDarkAges = game?.expansions.includes("dark-ages") ?? false;
  const hasYoungWitch = game?.cards.includes("young-witch") ?? false;

  const basics = [
    { name: "Copper", note: "∞" },
    { name: "Silver", note: "40" },
    { name: "Gold", note: "30" },
    { name: "Estate", note: "8 / 12" },
    { name: "Duchy", note: "8 / 12" },
    { name: "Province", note: "8 / 12" },
    { name: "Curse", note: "10×opp" },
    ...(hasAlchemy ? [{ name: "Potion", note: "16" }] : []),
    ...(hasProsperity ? [{ name: "Platinum", note: "12" }, { name: "Colony", note: "8 / 12" }] : []),
  ];

  if (!loaded) return <div className="h-screen w-screen bg-black" />;

  if (!game || cards.length === 0) {
    return (
      <div className="h-screen w-screen bg-black flex flex-col items-center justify-center">
        <p className="text-5xl font-bold text-neutral-700 tracking-tight">No kingdom on the table</p>
        <p className="text-lg text-neutral-600 mt-4">Send one from the phone — Table ↗</p>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-black text-white overflow-hidden flex flex-col">
      <header className="shrink-0 px-6 py-3 flex items-center gap-4 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <p className="text-[11px] tracking-[0.35em] text-neutral-500 font-semibold">NOW PLAYING</p>
        <h1 className="text-2xl font-bold tracking-tight truncate">{game.name || "Kingdom"}</h1>
        <div className="flex flex-wrap gap-1.5 min-w-0">
          {["base", ...game.expansions.filter((e) => e !== "base")].map((expId) => {
            const exp = EXPANSION_MAP[expId];
            return (
              <span key={expId} className={`text-[11px] px-2 py-0.5 rounded-full text-white font-medium ${exp?.color ?? "bg-stone-700"}`}>
                {exp?.name ?? expId}
              </span>
            );
          })}
        </div>
        <p className="ml-auto text-xs text-neutral-400 shrink-0">
          2p: 8 VP piles, 10 Curses · 3p+: 12 VP · Curses 10 per opponent · Kingdom 10
        </p>
      </header>

      <div className="flex-1 min-h-0 flex">
        <div className="flex-1 p-3 grid grid-cols-5 grid-rows-2 gap-2">
          {cards.map((card) => {
            const tint = expansionTextClass(card.expansion);
            const stats = statsLine(card);
            return (
              <div key={card.id} className="flex flex-col min-h-0 rounded-lg overflow-hidden ring-1 ring-white/10 bg-neutral-950">
                <Art
                  candidates={cardArtCandidates(card.name, card.expansion)}
                  alt={card.name}
                  className="w-full flex-1 min-h-0 object-contain bg-black"
                />
                <div className={`shrink-0 px-2 py-1.5 border-t border-white/10 ${tint}`}>
                  <p className="text-sm font-semibold leading-tight">
                    {card.name}{" "}
                    <span className="font-normal opacity-80">{costLabel(card.cost)}</span>
                  </p>
                  <p className="text-[11px] opacity-80 truncate">
                    {EXPANSION_MAP[card.expansion]?.name ?? card.expansion}
                    {" · "}
                    {card.types.join(" · ")}
                    {stats ? ` · ${stats}` : ""}
                  </p>
                  <p className="text-[11px] leading-snug mt-0.5 line-clamp-3 opacity-95">{card.notes}</p>
                </div>
              </div>
            );
          })}
        </div>

        <aside className="w-[26%] shrink-0 border-l border-white/10 p-4 overflow-y-auto flex flex-col gap-4">
          <div>
            <p className="text-[11px] text-neutral-500 uppercase tracking-widest font-semibold mb-2">Basic supply</p>
            <div className="grid grid-cols-4 gap-2">
              {basics.map((b) => (
                <div key={b.name} className="text-center">
                  <Art
                    candidates={supplyArtCandidates(b.name)}
                    alt={b.name}
                    className="w-full rounded aspect-[15/23] object-cover"
                  />
                  <p className="text-[10px] text-neutral-400 mt-0.5 truncate">{b.name}</p>
                  <p className="text-[10px] text-neutral-500">{b.note}</p>
                </div>
              ))}
            </div>
            {hasDarkAges && <p className="text-xs text-stone-400 mt-2">Shelters replace starting Estates.</p>}
          </div>

          {nonSupply.length > 0 && (
            <div>
              <p className="text-[11px] text-neutral-500 uppercase tracking-widest font-semibold mb-2">Landscapes</p>
              <div className="flex flex-col gap-3">
                {nonSupply.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <Art
                      candidates={cardArtCandidates(item.name, item.expansion, item.type)}
                      alt={item.name}
                      className="w-28 shrink-0 rounded object-cover aspect-[2/1]"
                    />
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-wide text-neutral-500">{item.type}</p>
                      <p className="font-semibold leading-tight">{item.name}</p>
                      <p className="text-xs text-neutral-300 leading-snug mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {requiredComponents.length > 0 && (
            <div>
              <p className="text-[11px] text-amber-500 uppercase tracking-widest font-semibold mb-2">Bring these</p>
              <ul className="space-y-1.5">
                {requiredComponents.map((comp) => (
                  <li key={comp.id} className="text-sm">
                    <span className="text-amber-200 font-medium">{comp.name}</span>
                    <span className="text-neutral-400"> — {comp.reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {hasYoungWitch && (
            <p className="text-sm text-amber-200 bg-amber-950/40 border border-amber-700/40 rounded-lg px-3 py-2">
              Young Witch: add an 11th pile costing $2–$3 as the Bane.
            </p>
          )}

          <p className="text-xs text-neutral-500 mt-auto">
            Ends on empty Province{hasProsperity ? " or Colony" : ""}, or any 3 empty piles.
          </p>
        </aside>
      </div>
    </div>
  );
}
