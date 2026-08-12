import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import { getStories, getStoryBySlug } from "@/lib/sheets";
import { StoryCard } from "@/components/StoryCard";
import Image from "next/image";

export async function generateStaticParams() {
	const stories = await getStories();
	return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;
	const story = await getStoryBySlug(slug);
	if (!story) return {};
	return {
		title: `${story.title} — Escape to Sabah`,
		description: story.excerpt,
	};
}

function formatDate(iso: string) {
	if (!iso) return "";
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) return iso;
	return d.toLocaleDateString("en-MY", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const [story, allStories] = await Promise.all([getStoryBySlug(slug), getStories()]);

	if (!story) notFound();

	const more = allStories.filter((s) => s.slug !== story.slug).slice(0, 3);

	return (
		<>
			<article className="mx-auto max-w-4xl px-6 py-16">
				<Link
					href="/stories"
					className="inline-flex items-center gap-1.5 font-mono-data text-xs uppercase tracking-wide text-ink-soft hover:text-canopy"
				>
					<ArrowLeft size={13} /> All stories
				</Link>

				<div className="mt-6 flex flex-wrap gap-1.5">
					{story.tags.map((tag) => (
						<span
							key={tag}
							className="rounded-full bg-canopy/10 px-2.5 py-1 font-mono-data text-[10px] uppercase tracking-wide text-canopy"
						>
							{tag}
						</span>
					))}
				</div>

				<h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">{story.title}</h1>

				<p className="mt-4 font-mono-data text-xs uppercase tracking-wide text-ink-soft/70">
					{story.author} &middot; {formatDate(story.date)}
				</p>

				{story.coverImage ? (
					<Image
						src={story.coverImage}
						alt=""
						width={1280}
						height={720}
						className="mt-6 aspect-[21/9] w-full rounded-2xl object-cover"
					/>
				) : (
					<div
						className="mt-6 aspect-[21/9] w-full rounded-2xl"
						style={{
							background: "linear-gradient(150deg, #F4C671 0%, #6B8F5E 40%, #14301F 100%)",
						}}
					/>
				)}

				<div className="prose-sabah mt-10 text-base">
					<ReactMarkdown>{story.content}</ReactMarkdown>
				</div>
			</article>

			{more.length > 0 && (
				<section className="mx-auto max-w-5xl px-6 pb-16">
					<div className="border-t border-ink/10 pt-10">
						<h2 className="font-display text-xl font-semibold text-ink">Keep reading</h2>
						<div className="mt-6 grid gap-6 sm:grid-cols-3">
							{more.map((s) => (
								<StoryCard
									key={s.slug}
									story={s}
								/>
							))}
						</div>
					</div>
				</section>
			)}
		</>
	);
}
