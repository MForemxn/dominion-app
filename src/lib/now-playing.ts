import { CARD_MAP } from "@/data/cards";
import type { SelectedNonSupply } from "@/types";

export const NOW_PLAYING_KEY = "dominion-now-playing";
export const NOW_PLAYING_CHANNEL = "dominion-table";
/** Same Redis-backed store the vinyl TV uses — phone POSTs, kiosk polls. */
/** Same-origin proxy → Redis store. Avoids CORS on the phone and TV. */
export const TABLE_API = "/api/table";

export interface TableGame {
  name?: string;
  cards: string[]; // kingdom card ids, usually 10
  expansions: string[];
  nonSupplyIds?: string[]; // event/way/project/landmark/trait/prophecy/ally ids
  /** setup = pull-from-boxes view; play = in-game board. New sends start on setup. */
  phase?: "setup" | "play";
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
  const full: TableGame = {
    ...game,
    phase: game.phase ?? "setup",
    updatedAt: Date.now(),
  };
  saveTableGame(full);
  const res = await fetch(TABLE_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(full),
  });
  if (!res.ok) throw new Error(`Table update failed: ${res.status}`);
}

export async function fetchTableGame(): Promise<TableGame | null> {
  const res = await fetch(TABLE_API, { cache: "no-store" });
  if (!res.ok) throw new Error(`Table fetch failed: ${res.status}`);
  const data = await res.json();
  return data.nowPlaying ?? null;
}

export async function setTablePhase(phase: "setup" | "play"): Promise<void> {
  const game = await fetchTableGame();
  if (!game) throw new Error("No kingdom on the table");
  const { updatedAt: _drop, ...rest } = game;
  await sendToTable({ ...rest, phase });
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
