import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getExperiences } from "@/lib/sheets";
import { ExperienceCard } from "@/components/ExperienceCard";

export default async function ExperienceSection() {
	const [experiences] = await Promise.all([getExperiences()]);

	const featuredExperiences = experiences.filter((e) => e.featured).slice(0, 3);

	return (
		<section className="mx-auto max-w-6xl px-6 pt-24">
			<div className="flex items-end justify-between">
				<div>
					<span className="font-mono-data text-xs uppercase tracking-[0.2em] text-ocean">Summit to reef</span>
					<h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">Top experiences in Borneo</h2>
				</div>
				<Link
					href="/experiences"
					className="hidden items-center gap-1 font-mono-data text-xs uppercase tracking-wide text-ink-soft transition-colors hover:text-canopy sm:flex"
				>
					All experiences <ArrowRight size={13} />
				</Link>
			</div>

			<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{featuredExperiences.map((exp) => (
					<ExperienceCard
						key={exp.slug}
						experience={exp}
					/>
				))}
			</div>
		</section>
	);
}
