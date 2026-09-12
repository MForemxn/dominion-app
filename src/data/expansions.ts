import type { Expansion } from "@/types";

export const EXPANSIONS: Expansion[] = [
  {
    id: "base",
    name: "Base",
    year: 2008,
    color: "bg-amber-700",
    hasEditions: true,
    editionYears: { 1: 2008, 2: 2016 },
  },
  {
    id: "intrigue",
    name: "Intrigue",
    year: 2009,
    color: "bg-purple-700",
    hasEditions: true,
    editionYears: { 1: 2009, 2: 2016 },
  },
  {
    id: "seaside",
    name: "Seaside",
    year: 2009,
    color: "bg-blue-600",
    hasEditions: true,
    editionYears: { 1: 2009, 2: 2021 },
  },
  {
    id: "alchemy",
    name: "Alchemy",
    year: 2010,
    color: "bg-violet-700",
  },
  {
    id: "prosperity",
    name: "Prosperity",
    year: 2010,
    color: "bg-yellow-600",
    hasEditions: true,
    editionYears: { 1: 2010, 2: 2022 },
  },
  {
    id: "hinterlands",
    name: "Hinterlands",
    year: 2011,
    color: "bg-orange-600",
    hasEditions: true,
    editionYears: { 1: 2011, 2: 2022 },
  },
  {
    id: "dark-ages",
    name: "Dark Ages",
    year: 2012,
    color: "bg-stone-700",
  },
  {
    id: "cornucopia-guilds",
    name: "Cornucopia & Guilds",
    year: 2015,
    color: "bg-green-700",
  },
  {
    id: "adventures",
    name: "Adventures",
    year: 2015,
    color: "bg-teal-600",
  },
  {
    id: "empires",
    name: "Empires",
    year: 2016,
    color: "bg-red-700",
  },
  {
    id: "nocturne",
    name: "Nocturne",
    year: 2017,
    color: "bg-indigo-900",
  },
  {
    id: "renaissance",
    name: "Renaissance",
    year: 2018,
    color: "bg-cyan-700",
  },
  {
    id: "menagerie",
    name: "Menagerie",
    year: 2020,
    color: "bg-lime-600",
  },
  {
    id: "allies",
    name: "Allies",
    year: 2022,
    color: "bg-pink-600",
  },
  {
    id: "plunder",
    name: "Plunder",
    year: 2022,
    color: "bg-sky-700",
  },
  {
    id: "rising-sun",
    name: "Rising Sun",
    year: 2024,
    color: "bg-red-500",
  },
  {
    id: "arcana",
    name: "Arcana",
    year: 2026,
    color: "bg-stone-700",
    unreleased: true,
  },
];

export const EXPANSION_MAP = Object.fromEntries(
  EXPANSIONS.map((e) => [e.id, e])
);
