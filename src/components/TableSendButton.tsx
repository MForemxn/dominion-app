"use client";

import { useState } from "react";
import { sendToTable, type TableGame } from "@/lib/now-playing";

export default function TableSendButton({
  game,
  label = "Send to table",
  compact = false,
}: {
  game: Omit<TableGame, "updatedAt">;
  label?: string;
  compact?: boolean;
}) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function go(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setState("sending");
    try {
      await sendToTable({ ...game, phase: "setup" });
      setState("ok");
      window.setTimeout(() => setState("idle"), 2500);
    } catch {
      setState("err");
    }
  }

  const text =
    state === "sending" ? "Sending…" :
    state === "ok" ? "Setup on TV" :
    state === "err" ? "Failed — retry" :
    label;

  const color =
    state === "ok" ? "bg-emerald-700 border-emerald-600 text-white" :
    state === "err" ? "bg-red-900/70 border-red-700 text-red-100" :
    state === "sending" ? "border-amber-600 text-amber-300" :
    "border-stone-700 text-stone-300 hover:border-amber-500 hover:text-amber-400";

  return (
    <button
      type="button"
      onClick={go}
      disabled={state === "sending"}
      className={`${compact ? "text-[10px] px-2 py-0.5" : "text-sm px-5 py-2"} rounded-lg font-medium border transition-colors shrink-0 ${color}`}
    >
      {text}
    </button>
  );
}
