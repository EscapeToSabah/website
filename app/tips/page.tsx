import type { Metadata } from "next";
import { getTips } from "@/lib/sheets";
import { TipCard } from "@/components/TipCard";

export const metadata: Metadata = {
  title: "Tips & Tricks — Escape to Sabah",
  description:
    "Practical, honest tips for visiting Sabah, Borneo — weather, permits, getting around, money, and local etiquette.",
};

export default async function TipsPage() {
  const tips = await getTips();

  const categories = Array.from(new Set(tips.map((t) => t.category)));

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <span className="font-mono-data text-xs uppercase tracking-[0.2em] text-ocean">
        Before you go
      </span>
      <h1 className="mt-2 max-w-2xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        Tips &amp; Tricks
      </h1>
      <p className="mt-4 max-w-xl text-lg text-ink-soft">
        The practical stuff &mdash; permits that sell out, roads worth
        skipping, and what to actually pack. Tap a tip to open it.
      </p>

      <div className="mt-12 space-y-12">
        {categories.map((category) => (
          <div key={category}>
            <h2 className="font-display text-lg font-semibold text-canopy">
              {category}
            </h2>
            <div className="mt-4 grid gap-3">
              {tips
                .filter((t) => t.category === category)
                .map((tip) => (
                  <TipCard key={tip.slug} tip={tip} />
                ))}
            </div>
          </div>
        ))}
      </div>

      {tips.length === 0 && (
        <p className="mt-12 text-ink-soft">
          No tips yet &mdash; add rows to the &ldquo;Tips&rdquo; tab in your
          Google Sheet to see them here.
        </p>
      )}
    </div>
  );
}
