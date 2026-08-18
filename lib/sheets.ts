import { unstable_cache } from "next/cache";
import { getSheetData } from "./googleSheets";
import { Experience, Story, Tip } from "./types";
import { sampleExperiences, sampleStories, sampleTips } from "./sample-data";

const SHEET_ID = process.env.GOOGLE_SHEET_ID;

if (!SHEET_ID) {
	throw new Error("Missing GOOGLE_SHEET_ID environment variable");
}

// Imported by app/api/revalidate/route.ts -- calling
// revalidateTag(SHEET_CACHE_TAG) there purges every tab cached below,
// same as before, just now covering the googleapis call instead of fetch().
export const SHEET_CACHE_TAG = "sheet-content";
const REVALIDATE_SECONDS = 300; // safety-net refresh even if nobody pings /api/revalidate

/**
 * Convert Google Sheets rows into objects using
 * the first row as the column headers.
 *
 * Example:
 *
 * [
 *   ["slug", "title", "author"],
 *   ["kinabalu", "Mount Kinabalu", "Wahfei"]
 * ]
 *
 * becomes:
 *
 * [
 *   {
 *     slug: "kinabalu",
 *     title: "Mount Kinabalu",
 *     author: "Wahfei"
 *   }
 * ]
 */
function rowsToObjects(rows: string[][]): Record<string, string>[] {
	if (rows.length === 0) {
		return [];
	}

	const headers = rows[0].map((header) => header.trim());

	return rows.slice(1).map((row) => {
		const object: Record<string, string> = {};

		headers.forEach((header, index) => {
			object[header] = row[index] ?? "";
		});

		return object;
	});
}

/**
 * Fetches and parses a single tab, cached and tagged so it can be
 * purged on demand by revalidateTag(SHEET_CACHE_TAG) -- e.g. from a
 * webhook hit right after you save an edit in the sheet -- instead of
 * only refreshing every REVALIDATE_SECONDS.
 */
const getCachedTabObjects = unstable_cache(
	async (tabName: string): Promise<Record<string, string>[]> => {
		const rows = await getSheetData(SHEET_ID as string, `${tabName}!A:Z`);

		return rowsToObjects(rows);
	},
	["sheets-tab"],
	{ tags: [SHEET_CACHE_TAG], revalidate: REVALIDATE_SECONDS }
);

/**
 * Fetch a complete tab from Google Sheets.
 *
 * The first row of the tab must contain the
 * column names.
 *
 * Example:
 *
 * Stories!A:Z
 */
async function fetchTab(tabName: string): Promise<Record<string, string>[]> {
	try {
		const objects = await getCachedTabObjects(tabName);

		console.log(`[sheets] "${tabName}" loaded ${objects.length} rows`);

		return objects;
	} catch (error) {
		console.error(`[sheets] Failed to fetch "${tabName}":`, error);

		return [];
	}
}

/**
 * Convert a string value to boolean.
 */
function truthy(value: string | undefined): boolean {
	if (!value) {
		return false;
	}

	return ["true", "yes", "y", "1"].includes(value.trim().toLowerCase());
}

/**
 * Convert a string value to number.
 */
function toNumber(value: string | undefined, fallback = 0): number {
	if (!value) {
		return fallback;
	}

	const number = Number(value);

	return Number.isFinite(number) ? number : fallback;
}

/**
 * Convert comma-separated tags into an array.
 *
 * Example:
 *
 * "hiking,sabah,kinabalu"
 *
 * becomes:
 *
 * ["hiking", "sabah", "kinabalu"]
 */
function splitTags(value: string | undefined): string[] {
	if (!value) {
		return [];
	}

	return value
		.split(",")
		.map((tag) => tag.trim())
		.filter(Boolean);
}

/**
 * Convert a Google Sheets row into a Story.
 */
function rowToStory(row: Record<string, string>): Story {
	return {
		slug: row.slug || "",
		title: row.title || "",
		excerpt: row.excerpt || "",
		coverImage: row.cover_image || row.coverImage || "",
		author: row.author || "Escape to Sabah",
		date: row.date || "",
		tags: splitTags(row.tags),
		content: row.content || "",
		featured: truthy(row.featured),
	};
}

/**
 * Convert a Google Sheets row into a Tip.
 */
function rowToTip(row: Record<string, string>): Tip {
	return {
		slug: row.slug || "",
		title: row.title || "",
		category: row.category || "General",
		icon: row.icon || "Compass",
		summary: row.summary || "",
		content: row.content || "",
		order: toNumber(row.order, 99),
	};
}

/**
 * Convert a Google Sheets row into an Experience.
 */
function rowToExperience(row: Record<string, string>): Experience {
	return {
		slug: row.slug || "",
		title: row.title || "",
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

/**
 * Get all stories.
 */
export async function getStories(): Promise<Story[]> {
	const rows = await fetchTab("Stories");

	if (!rows.length) {
		console.warn("[sheets] No Stories data found. Using sample data.");

		return sampleStories;
	}

	return rows.filter((row) => row.slug).map(rowToStory);
}

/**
 * Get a single story by slug.
 */
export async function getStoryBySlug(slug: string): Promise<Story | undefined> {
	const stories = await getStories();

	return stories.find((story) => story.slug === slug);
}

/**
 * Get all tips.
 */
export async function getTips(): Promise<Tip[]> {
	const rows = await fetchTab("Tips");

	if (!rows.length) {
		console.warn("[sheets] No Tips data found. Using sample data.");

		return sampleTips;
	}

	return rows
		.filter((row) => row.slug)
		.map(rowToTip)
		.sort((a, b) => a.order - b.order);
}

/**
 * Get all experiences.
 */
export async function getExperiences(): Promise<Experience[]> {
	const rows = await fetchTab("Experiences");

	if (!rows.length) {
		console.warn("[sheets] No Experiences data found. Using sample data.");

		return sampleExperiences;
	}

	return rows.filter((row) => row.slug).map(rowToExperience);
}

/**
 * Get a single experience by slug.
 */
export async function getExperienceBySlug(slug: string): Promise<Experience | undefined> {
	const experiences = await getExperiences();

	return experiences.find((experience) => experience.slug === slug);
}

/**
 * Check whether the Google Sheet
 * environment variable is configured.
 */
export const isUsingLiveSheet = () => Boolean(SHEET_ID);