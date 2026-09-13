"use client";

import { useEffect, useState } from "react";
import { fetchTableGame, setTablePhase, subscribeTableGame, type TableGame } from "@/lib/now-playing";

export default function TableControls() {
  const [game, setGame] = useState<TableGame | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => subscribeTableGame(setGame), []);

  if (!game?.cards?.length) return null;

  const setup = game.phase !== "play";

  async function finish() {
    setBusy(true);
    setErr(false);
    try {
      await setTablePhase("play");
      setGame(await fetchTableGame());
    } catch {
      setErr(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <span className="hidden sm:inline text-xs text-stone-500 truncate max-w-[10rem]">
        {game.name || "Kingdom"} · {setup ? "setup" : "play"}
      </span>
      {setup && (
        <button
          type="button"
          onClick={finish}
          disabled={busy}
          className={`text-sm px-3 py-1.5 rounded-lg font-medium border shrink-0 ${
            err
              ? "border-red-700 text-red-200 bg-red-950/50"
              : "border-amber-600 text-amber-100 bg-amber-800 hover:bg-amber-700"
          }`}
        >
          {busy ? "Starting…" : err ? "Failed — retry" : "Finish setup"}
        </button>
      )}
    </div>
  );
}
