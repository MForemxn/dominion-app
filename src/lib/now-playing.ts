import { CARD_MAP } from "@/data/cards";
import type { SelectedNonSupply } from "@/types";

export const NOW_PLAYING_KEY = "dominion-now-playing";
export const NOW_PLAYING_CHANNEL = "dominion-table";

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

/** Send the current game to the table display, then open it in a new tab. */
export function sendToTable(game: Omit<TableGame, "updatedAt">): void {
  const full: TableGame = { ...game, updatedAt: Date.now() };
  saveTableGame(full);
  if (typeof window !== "undefined") {
    window.open(`/display?${tableGameToSearchParams(full)}`, "_blank");
  }
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

/** Fires whenever the table game changes: same-tab (BroadcastChannel), other tabs
 * (storage event), or a stale kiosk tab that missed both (2s localStorage poll). */
export function subscribeTableGame(cb: (g: TableGame | null) => void): () => void {
  if (typeof window === "undefined") return () => {};

  const onStorage = (e: StorageEvent) => {
    if (e.key === NOW_PLAYING_KEY) cb(loadTableGame());
  };
  window.addEventListener("storage", onStorage);

  const channel = openChannel();
  if (channel) channel.onmessage = (e) => cb(e.data ?? null);

  const poll = setInterval(() => cb(loadTableGame()), 2000);

  return () => {
    window.removeEventListener("storage", onStorage);
    channel?.close();
    clearInterval(poll);
  };
}
