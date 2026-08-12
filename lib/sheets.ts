import { csvToObjects, parseCsv } from "./csv";
import { Experience, Story, Tip } from "./types";
import { sampleExperiences, sampleStories, sampleTips } from "./sample-data";

/**
 * Content source: Google Sheets, read via the public "gviz" CSV export.
 * No API key or service account needed -- just share the sheet as
 * "Anyone with the link: Viewer" and set SHEET_ID in .env.local.
 * See README.md for the exact column layout each tab needs.
 */

const SHEET_ID = process.env.SHEET_ID;
const REVALIDATE_SECONDS = 300; // refresh content every 5 minutes

function sheetUrl(tabName: string) {
  return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(
    tabName
  )}`;
}

async function fetchTab(tabName: string): Promise<Record<string, string>[] | null> {
  if (!SHEET_ID) return null;

  try {
    const res = await fetch(sheetUrl(tabName), {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) {
      console.warn(
        `[sheets] Could not fetch tab "${tabName}" (${res.status}). Falling back to sample data. ` +
          `Check the tab name and that the sheet is shared as "Anyone with the link: Viewer".`
      );
      return null;
    }
    const csvText = await res.text();
    if (csvText.trim().startsWith("<")) {
      // Google returns an HTML error/login page instead of CSV when the
      // sheet isn't publicly viewable or the tab name doesn't exist.
      console.warn(
        `[sheets] Tab "${tabName}" returned HTML instead of CSV -- check sharing settings and tab name.`
      );
      return null;
    }
    return csvToObjects(parseCsv(csvText));
  } catch (err) {
    console.warn(`[sheets] Fetch failed for tab "${tabName}":`, err);
    return null;
  }
}

function truthy(value: string | undefined): boolean {
  if (!value) return false;
  return ["true", "yes", "y", "1"].includes(value.trim().toLowerCase());
}

function toNumber(value: string | undefined, fallback = 0): number {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function splitTags(value: string | undefined): string[] {
  if (!value) return [];
  return value
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
}

function rowToStory(row: Record<string, string>): Story {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    coverImage: row.cover_image || row.coverImage || "",
    author: row.author || "Escape to Sabah",
    date: row.date || "",
    tags: splitTags(row.tags),
    content: row.content || "",
    featured: truthy(row.featured),
  };
}

function rowToTip(row: Record<string, string>): Tip {
  return {
    slug: row.slug,
    title: row.title,
    category: row.category || "General",
    icon: row.icon || "Compass",
    summary: row.summary || "",
    content: row.content || "",
    order: toNumber(row.order, 99),
  };
}

function rowToExperience(row: Record<string, string>): Experience {
  return {
    slug: row.slug,
    title: row.title,
    category: row.category || "General",
    location: row.location || "",
    elevationM: toNumber(row.elevation_m ?? row.elevationM, 0),
    difficulty: row.difficulty || "Easy",
    duration: row.duration || "",
    image: row.image || "",
    summary: row.summary || "",
    content: row.content || "",
    featured: truthy(row.featured),
  };
}

export async function getStories(): Promise<Story[]> {
  const rows = await fetchTab("Stories");
  if (!rows) return sampleStories;
  return rows.filter((r) => r.slug).map(rowToStory);
}

export async function getStoryBySlug(slug: string): Promise<Story | undefined> {
  const stories = await getStories();
  return stories.find((s) => s.slug === slug);
}

export async function getTips(): Promise<Tip[]> {
  const rows = await fetchTab("Tips");
  if (!rows) return sampleTips;
  return rows
    .filter((r) => r.slug)
    .map(rowToTip)
    .sort((a, b) => a.order - b.order);
}

export async function getExperiences(): Promise<Experience[]> {
  const rows = await fetchTab("Experiences");
  if (!rows) return sampleExperiences;
  return rows.filter((r) => r.slug).map(rowToExperience);
}

export async function getExperienceBySlug(
  slug: string
): Promise<Experience | undefined> {
  const experiences = await getExperiences();
  return experiences.find((e) => e.slug === slug);
}

export const isUsingLiveSheet = () => Boolean(SHEET_ID);
