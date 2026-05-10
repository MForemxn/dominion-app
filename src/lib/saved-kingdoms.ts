import type { KingdomScore } from "@/types";

export interface SavedKingdom {
  id: string;
  name: string;
  cards: string[];
  expansions: string[];
  score: KingdomScore;
  notes?: string;
  createdAt: string;
}

const STORAGE_KEY = "dominion-saved-kingdoms";

export function loadSavedKingdoms(): SavedKingdom[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveKingdom(kingdom: SavedKingdom): void {
  const existing = loadSavedKingdoms();
  existing.unshift(kingdom);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
}

export function deleteKingdom(id: string): void {
  const existing = loadSavedKingdoms().filter((k) => k.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
}

export function exportKingdoms(kingdoms: SavedKingdom[]): void {
  const blob = new Blob([JSON.stringify(kingdoms, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `dominion-kingdoms-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export function importKingdoms(file: File): Promise<SavedKingdom[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string);
        if (!Array.isArray(data)) {
          reject(new Error("File must contain an array of kingdoms"));
          return;
        }
        const valid = data.filter(
          (k: unknown) =>
            k &&
            typeof k === "object" &&
            "cards" in (k as Record<string, unknown>) &&
            Array.isArray((k as { cards: unknown }).cards)
        ) as SavedKingdom[];
        resolve(valid);
      } catch (e) {
        reject(e);
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}

export function mergeImported(imported: SavedKingdom[]): void {
  const existing = loadSavedKingdoms();
  const existingIds = new Set(existing.map((k) => k.id));
  const newKingdoms = imported.filter((k) => !existingIds.has(k.id));
  const merged = [...newKingdoms, ...existing];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
}
