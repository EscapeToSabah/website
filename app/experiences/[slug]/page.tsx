import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Clock, Gauge, MapPin } from "lucide-react";
import { getExperienceBySlug, getExperiences } from "@/lib/sheets";
import { ElevationArt } from "@/components/ElevationArt";
import { ExperienceCard } from "@/components/ExperienceCard";

export async function generateStaticParams() {
	const experiences = await getExperiences();
	return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const experience = await getExperienceBySlug(slug);
	if (!experience) return {};
	return {
		title: `${experience.title} — Escape to Sabah`,
		description: experience.summary,
	};
}

function formatElevation(m: number) {
	const abs = Math.abs(m).toLocaleString();
	if (m > 0) return `${abs} m above sea level`;
	if (m < 0) return `${abs} m below sea level`;
	return "Sea level";
}

export default async function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const [experience, all] = await Promise.all([getExperienceBySlug(slug), getExperiences()]);

	if (!experience) notFound();

	const more = all.filter((e) => e.slug !== experience.slug && e.category === experience.category).slice(0, 3);
	const fallbackMore = all.filter((e) => e.slug !== experience.slug).slice(0, 3);
	const related = more.length > 0 ? more : fallbackMore;

	return (
		<>
			<article className="mx-auto max-w-4xl px-6 py-16">
				<Link
					href="/experiences"
					className="inline-flex items-center gap-1.5 font-mono-data text-xs uppercase tracking-wide text-ink-soft hover:text-canopy"
				>
					<ArrowLeft size={13} /> All experiences
				</Link>

				<span className="mt-6 block font-mono-data text-xs uppercase tracking-wide text-ocean">{experience.category}</span>
				<h1 className="mt-2 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">{experience.title}</h1>

				<div className="mt-4 flex flex-wrap gap-4 font-mono-data text-xs uppercase tracking-wide text-ink-soft/70">
					<span className="flex items-center gap-1.5">
						<MapPin size={13} /> {experience.location}
					</span>
					<span className="flex items-center gap-1.5">
						<Gauge size={13} /> {experience.difficulty}
					</span>
					<span className="flex items-center gap-1.5">
						<Clock size={13} /> {experience.duration}
					</span>
				</div>

				<ElevationArt
					elevationM={experience.elevationM}
					className="mt-6 flex aspect-[21/9] w-full items-end rounded-2xl p-5"
				>
					<span className="rounded-full bg-ink/70 px-3 py-1.5 font-mono-data text-xs text-paper backdrop-blur">
						{formatElevation(experience.elevationM)}
					</span>
				</ElevationArt>

				<div className="prose-sabah mt-10 text-base">
					<ReactMarkdown>{experience.content}</ReactMarkdown>
				</div>
			</article>
			{related.length > 0 && (
				<section className="mx-auto max-w-5xl px-6 pb-16">
					<div className="border-t border-ink/10 pt-10">
						<h2 className="font-display text-xl font-semibold text-ink">More like this</h2>
						<div className="mt-6 grid gap-6 sm:grid-cols-3">
							{related.map((e) => (
								<ExperienceCard
									key={e.slug}
									experience={e}
								/>
							))}
						</div>
					</div>
				</section>
			)}
		</>
	);
}
