const ART_BASE =
  "https://raw.githubusercontent.com/blakevanlan/KingdomCreator/master/docs/img/cards";

const SET_FOLDERS: Record<string, string[]> = {
  base: ["baseset2", "baseset"],
  intrigue: ["intrigue2", "intrigue"],
  seaside: ["seaside", "seaside2add"],
  alchemy: ["alchemy"],
  prosperity: ["prosperity", "prosperity2add"],
  hinterlands: ["hinterlands", "hinterlands2add"],
  "dark-ages": ["darkages"],
  "cornucopia-guilds": ["guildscornucopia", "cornucopia", "guilds"],
  adventures: ["adventures"],
  empires: ["empires"],
  nocturne: ["nocturne"],
  renaissance: ["renaissance"],
  menagerie: ["menagerie"],
  allies: ["allies"],
  plunder: ["plunder"],
  "rising-sun": ["risingsun"],
};

function slug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/** Ordered fallbacks — 2E art first, then 1E / combined-box names. */
export function cardArtCandidates(
  name: string,
  expansion: string,
  kind?: string
): string[] {
  const s = slug(name);
  const folders = SET_FOLDERS[expansion] ?? [expansion.replace(/-/g, "")];
  const urls: string[] = [];
  for (const folder of folders) {
    if (kind) urls.push(`${ART_BASE}/${folder}/${folder}_${kind}_${s}.jpg`);
    urls.push(`${ART_BASE}/${folder}/${folder}_${s}.jpg`);
  }
  return urls;
}

export function supplyArtCandidates(name: string): string[] {
  const s = slug(name);
  return [
    `${ART_BASE}/baseset/baseset_${s}.jpg`,
    `${ART_BASE}/alchemy/alchemy_${s}.jpg`,
    `${ART_BASE}/prosperity/prosperity_${s}.jpg`,
    `${ART_BASE}/darkages/darkages_${s}.jpg`,
  ];
}
