import type { Metadata } from "next";
import { getStories } from "@/lib/sheets";
import { StoryCard } from "@/components/StoryCard";

export const metadata: Metadata = {
  title: "Stories — Escape to Sabah",
  description:
    "First-person field notes from Sabah, Borneo — the parts of the trip the brochures leave out.",
};

export default async function StoriesPage() {
  const stories = await getStories();
  const sorted = [...stories].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mt-2 max-w-2xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        Stories
      </h1>
      <p className="mt-4 max-w-xl text-lg text-ink-soft">
        The four minutes at the summit, the orangutan that ignored the
        camera, the night the boat guide told everyone to stop talking.
        Real trips, told straight.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((story) => (
          <StoryCard key={story.slug} story={story} />
        ))}
      </div>

      {sorted.length === 0 && (
        <p className="mt-12 text-ink-soft">
          No stories yet &mdash; add rows to the &ldquo;Stories&rdquo; tab in
          your Google Sheet to see them here.
        </p>
      )}
    </div>
  );
}
