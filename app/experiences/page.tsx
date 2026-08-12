import type { Metadata } from "next";
import { getExperiences } from "@/lib/sheets";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ElevationRuler } from "@/components/ElevationRuler";

export const metadata: Metadata = {
  title: "Top Experiences — Escape to Sabah",
  description:
    "The best things to do in Sabah, Borneo, plotted from Mount Kinabalu's summit down to Sipadan's reef wall.",
};

export default async function ExperiencesPage() {
  const experiences = await getExperiences();
  const byElevation = [...experiences].sort((a, b) => b.elevationM - a.elevationM);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <span className="font-mono-data text-xs uppercase tracking-[0.2em] text-ocean">
        Summit to reef
      </span>
      <h1 className="mt-2 max-w-2xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        Top Experiences in Borneo
      </h1>
      <p className="mt-4 max-w-xl text-lg text-ink-soft">
        Sabah&rsquo;s best days out span nearly 4,700 vertical metres &mdash;
        from granite summit to reef wall. Every card below sits at its real
        altitude on the line.
      </p>

      <div className="mt-14 gap-10 lg:grid-cols-[220px_1fr]">
        {/* <div className="hidden rounded-3xl border border-ink/10 bg-white/40 p-6 lg:sticky lg:top-24 lg:block lg:h-fit">
          <p className="mb-2 font-mono-data text-[11px] uppercase tracking-wide text-ink-soft/70">
            The elevation line
          </p>
          <ElevationRuler
            items={byElevation.map((e) => ({
              label: e.title,
              elevationM: e.elevationM,
              href: `/experiences/${e.slug}`,
            }))}
          />
        </div> */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.slug} experience={exp} />
          ))}
        </div>
      </div>

      {experiences.length === 0 && (
        <p className="mt-12 text-ink-soft">
          No experiences yet &mdash; add rows to the &ldquo;Experiences&rdquo;
          tab in your Google Sheet to see them here.
        </p>
      )}
    </div>
  );
}
