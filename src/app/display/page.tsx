"use client";

import { useEffect, useMemo, useState } from "react";
import { CARD_MAP } from "@/data/cards";
import { EXPANSION_MAP } from "@/data/expansions";
import { NON_SUPPLY_MAP } from "@/data/non-supply";
import { detectRequiredComponents } from "@/data/expansion-components";
import { loadTableGame, tableGameFromSearchParams, subscribeTableGame, type TableGame } from "@/lib/now-playing";
import type { Card } from "@/types";

const PLAYER_COUNTS = [2, 3, 4, 5, 6] as const;

function sortKey(card: Card): number {
  if (typeof card.cost === "number") return card.cost;
  const match = card.cost.match(/^(\d+)/);
  return 100 + (match ? parseInt(match[1], 10) : 0);
}

function costLabel(cost: number | string): string {
  return typeof cost === "number" ? `$${cost}` : cost;
}

function tileColor(card: Card): string {
  return card.types.includes("Attack") ? "border-red-700 bg-red-950/50"
    : card.types.includes("Duration") ? "border-orange-700 bg-orange-950/50"
    : card.types.includes("Treasure") ? "border-yellow-600 bg-yellow-950/50"
    : card.types.includes("Victory") ? "border-purple-700 bg-purple-950/50"
    : card.types.includes("Reaction") ? "border-green-700 bg-green-950/50"
    : card.types.includes("Shadow") ? "border-slate-600 bg-slate-950/50"
    : card.types.includes("Omen") ? "border-red-800 bg-red-950/30"
    : "border-sky-800 bg-sky-950/40";
}

function CardTile({ card, selected, onClick }: { card: Card; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`text-left flex flex-col gap-1.5 rounded-xl border-2 p-3 transition-all duration-150 ${tileColor(card)} ${
        selected ? "ring-4 ring-amber-400 scale-[1.02] z-10" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-mono font-bold text-white/80 bg-black/40 px-1.5 py-0.5 rounded">
          {costLabel(card.cost)}
        </span>
        <span className="text-[10px] uppercase tracking-wide text-white/50 truncate">{card.types.join(" · ")}</span>
      </div>
      <h3 className="text-xl font-bold text-white leading-tight">{card.name}</h3>
      <div className="flex gap-2 text-xs font-bold">
        {card.plusActions > 0 && <span className="text-sky-300">+{card.plusActions}A</span>}
        {card.plusCards > 0 && <span className="text-violet-300">+{card.plusCards}C</span>}
        {card.plusBuys > 0 && <span className="text-emerald-300">+{card.plusBuys}B</span>}
        {card.plusCoins > 0 && <span className="text-yellow-300">+{card.plusCoins}$</span>}
      </div>
      <p className={`text-sm text-white/80 leading-snug ${selected ? "" : "line-clamp-3"}`}>{card.notes}</p>
    </button>
  );
}

const NON_SUPPLY_COLOR: Record<string, string> = {
  event: "border-teal-700 bg-teal-950/50",
  way: "border-lime-700 bg-lime-950/50",
  project: "border-cyan-700 bg-cyan-950/50",
  landmark: "border-purple-700 bg-purple-950/50",
  trait: "border-pink-700 bg-pink-950/50",
  prophecy: "border-red-700 bg-red-950/50",
  ally: "border-fuchsia-700 bg-fuchsia-950/50",
};

export default function DisplayPage() {
  const [game, setGame] = useState<TableGame | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [playerCount, setPlayerCount] = useState(4);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const fromUrl = tableGameFromSearchParams(sp);
    setGame(fromUrl ?? loadTableGame());
    setLoaded(true);
    if (fromUrl) return;
    return subscribeTableGame(setGame);
  }, []);

  const cards = useMemo(() => {
    if (!game) return [];
    return game.cards.map((id) => CARD_MAP[id]).filter((c): c is Card => !!c).sort((a, b) => sortKey(a) - sortKey(b));
  }, [game]);

  const nonSupply = useMemo(() => {
    if (!game?.nonSupplyIds) return [];
    return game.nonSupplyIds.map((id) => NON_SUPPLY_MAP[id]).filter(Boolean);
  }, [game]);

  const requiredComponents = useMemo(
    () => (game ? detectRequiredComponents(cards, game.expansions) : []),
    [cards, game]
  );

  const hasAlchemy = game?.expansions.includes("alchemy") ?? false;
  const hasProsperity = game?.expansions.includes("prosperity") ?? false;
  const hasDarkAges = game?.expansions.includes("dark-ages") ?? false;
  const hasYoungWitch = game?.cards.includes("young-witch") ?? false;

  const victoryPile = playerCount === 2 ? 8 : 12;
  const cursePile = 10 * (playerCount - 1);

  if (!loaded) return <div className="h-screen w-screen bg-black" />;

  if (!game || cards.length === 0) {
    return (
      <div className="h-screen w-screen bg-black flex flex-col items-center justify-center overflow-hidden">
        <p className="text-4xl font-bold text-stone-600">No kingdom on the table</p>
        <p className="text-sm text-stone-700 mt-3">Send a kingdom from the builder.</p>
        <a href="/" className="fixed bottom-2 left-2 text-xs text-stone-700 opacity-20 hover:opacity-60 transition-opacity">
          ← builder
        </a>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-black text-white p-8 overflow-hidden flex flex-col lg:flex-row gap-8">
      {/* LEFT */}
      <div className="lg:w-[38%] shrink-0 flex flex-col gap-5 overflow-y-auto">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <p className="text-xs tracking-[0.3em] text-stone-500 font-semibold">NOW PLAYING</p>
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">{game.name || "Kingdom"}</h1>

        <div className="flex flex-wrap gap-1.5">
          {game.expansions.map((expId) => {
            const exp = EXPANSION_MAP[expId];
            return (
              <span key={expId} className={`text-xs px-2 py-0.5 rounded-full text-white/90 font-medium ${exp?.color ?? "bg-stone-700"}`}>
                {exp?.name ?? expId}
              </span>
            );
          })}
        </div>

        {/* Player count */}
        <div>
          <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-1.5">Players</p>
          <div className="flex gap-1.5 mb-2">
            {PLAYER_COUNTS.map((n) => (
              <button
                key={n}
                onClick={() => setPlayerCount(n)}
                className={`w-9 h-9 rounded-lg text-sm font-bold border transition-colors ${
                  playerCount === n ? "bg-amber-600 border-amber-500 text-white" : "border-stone-700 text-stone-400 hover:border-stone-500"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
          <p className="text-xs text-stone-400">
            {victoryPile} Victory each &middot; {cursePile} Curses &middot; 10 per Kingdom pile
          </p>
        </div>

        {/* Special supply */}
        <div>
          <p className="text-[11px] text-stone-500 uppercase tracking-widest font-semibold mb-1.5">Supply</p>
          <div className="flex flex-wrap gap-1.5">
            {["Copper", "Silver", "Gold", "Estate", "Duchy", "Province", "Curse"].map((n) => (
              <span key={n} className="text-xs px-2 py-0.5 rounded bg-stone-800 text-stone-300">{n}</span>
            ))}
            {hasAlchemy && <span className="text-xs px-2 py-0.5 rounded bg-violet-900/60 text-violet-300">Potion</span>}
            {hasProsperity && (
              <>
                <span className="text-xs px-2 py-0.5 rounded bg-slate-700/60 text-slate-200">Platinum</span>
                <span className="text-xs px-2 py-0.5 rounded bg-green-800/60 text-green-300">Colony</span>
              </>
            )}
            {hasDarkAges && <span className="text-xs px-2 py-0.5 rounded bg-stone-700/60 text-stone-300">Shelters</span>}
          </div>
        </div>

        {/* Required components */}
        {requiredComponents.length > 0 && (
          <div>
            <p className="text-[11px] text-amber-500 uppercase tracking-widest font-semibold mb-1.5">Required components</p>
            <div className="flex flex-wrap gap-1.5">
              {requiredComponents.map((comp) => (
                <span key={comp.id} className="text-xs px-2 py-0.5 rounded bg-amber-950/50 text-amber-300 border border-amber-800/40" title={comp.reason}>
                  {comp.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {hasYoungWitch && (
          <p className="text-xs text-amber-300 bg-amber-950/30 border border-amber-800/40 rounded-lg px-3 py-2">
            Young Witch needs an 11th Kingdom pile — a Bane card costing $2–$3.
          </p>
        )}

        <p className="text-xs text-stone-500 mt-auto pt-2 border-t border-stone-800">
          Game ends when Province{hasProsperity ? " or Colony" : ""} is empty, or when any 3 supply piles are empty.
        </p>

        <a href="/" className="text-xs text-stone-700 opacity-20 hover:opacity-60 transition-opacity">
          ← builder
        </a>
      </div>

      {/* RIGHT */}
      <div className="lg:w-[62%] flex-1 flex flex-col gap-4 overflow-y-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {cards.map((card) => (
            <CardTile
              key={card.id}
              card={card}
              selected={selectedCard === card.id}
              onClick={() => setSelectedCard((prev) => (prev === card.id ? null : card.id))}
            />
          ))}
        </div>

        {nonSupply.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {nonSupply.map((item) => (
              <div key={item.id} className={`rounded-lg border-2 px-3 py-2 max-w-xs ${NON_SUPPLY_COLOR[item.type] ?? "border-stone-700 bg-stone-900"}`}>
                <p className="text-[10px] uppercase tracking-wide text-white/50 font-semibold">{item.type}</p>
                <p className="text-sm font-bold text-white">{item.name}</p>
                <p className="text-xs text-white/70 leading-snug">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
