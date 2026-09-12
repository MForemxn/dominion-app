import { CARD_MAP } from "@/data/cards";
import type { SelectedNonSupply } from "@/types";

export const NOW_PLAYING_KEY = "dominion-now-playing";
export const NOW_PLAYING_CHANNEL = "dominion-table";
/** Same Redis-backed store the vinyl TV uses — phone POSTs, kiosk polls. */
export const TABLE_API =
  process.env.NEXT_PUBLIC_TABLE_API ??
  "https://vinyl-now-playing-three.vercel.app/api/dominion-table";

export interface TableGame {
  name?: string;
  cards: string[]; // kingdom card ids, usually 10
  expansions: string[];
  nonSupplyIds?: string[]; // event/way/project/landmark/trait/prophecy/ally ids
  updatedAt: number;
}

function openChannel(): BroadcastChannel | null {
  try {
    return new BroadcastChannel(NOW_PLAYING_CHANNEL);
  } catch {
    return null;
  }
}

export function loadTableGame(): TableGame | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(NOW_PLAYING_KEY);
    return raw ? (JSON.parse(raw) as TableGame) : null;
  } catch {
    return null;
  }
}

export function saveTableGame(game: TableGame): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(NOW_PLAYING_KEY, JSON.stringify(game));
  openChannel()?.postMessage(game);
}

export function clearTableGame(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(NOW_PLAYING_KEY);
  openChannel()?.postMessage(null);
}

/** Push the kingdom to the TV. Phone is the remote; the kiosk polls Redis. */
export async function sendToTable(game: Omit<TableGame, "updatedAt">): Promise<void> {
  const full: TableGame = { ...game, updatedAt: Date.now() };
  saveTableGame(full);
  const res = await fetch(TABLE_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(full),
  });
  if (!res.ok) throw new Error(`Table update failed: ${res.status}`);
}

/** Flatten a SelectedNonSupply (events/way/projects/landmark/traits/ally/prophecy) into ids. */
export function flattenNonSupplyIds(ns: SelectedNonSupply | undefined): string[] {
  if (!ns) return [];
  return [ns.events, ns.way, ns.projects, ns.landmark, ns.traits, ns.ally, ns.prophecy]
    .flatMap((v) => (Array.isArray(v) ? v : v ? [v] : []))
    .map((c) => c.id);
}

export function tableGameFromSearchParams(sp: URLSearchParams): TableGame | null {
  const c = sp.get("c");
  const cards = c ? c.split(",").filter(Boolean) : [];
  if (cards.length === 0) return null;

  const expansions = Array.from(
    new Set(cards.map((id) => CARD_MAP[id]?.expansion).filter((e): e is string => !!e))
  );
  const ns = sp.get("ns");

  return {
    name: sp.get("n") ?? undefined,
    cards,
    expansions,
    nonSupplyIds: ns ? ns.split(",").filter(Boolean) : undefined,
    updatedAt: Date.now(),
  };
}

export function tableGameToSearchParams(game: TableGame): string {
  const params = new URLSearchParams();
  params.set("c", game.cards.join(","));
  if (game.name) params.set("n", game.name);
  if (game.nonSupplyIds?.length) params.set("ns", game.nonSupplyIds.join(","));
  return params.toString();
}

/** TV kiosk: poll the shared store every 3s, same as vinyl /api/nowplaying. */
export function subscribeTableGame(cb: (g: TableGame | null) => void): () => void {
  if (typeof window === "undefined") return () => {};

  let active = true;
  async function poll() {
    try {
      const res = await fetch(TABLE_API, { cache: "no-store" });
      const data = await res.json();
      if (active) cb(data.nowPlaying ?? null);
    } catch {
      // ignore transient network errors between polls
    }
  }
  poll();
  const interval = setInterval(poll, 3000);
  return () => {
    active = false;
    clearInterval(interval);
  };
}
