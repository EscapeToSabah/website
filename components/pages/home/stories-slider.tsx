"use client";
import { Story } from "@/lib/types";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface StoriesSliderProps {
	latestStories: Story[];
}

function formatDate(iso: string) {
	if (!iso) return "";
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) return iso;
	return d.toLocaleDateString("en-MY", {
		day: "numeric",
		month: "short",
		year: "numeric",
	});
}

export default function StoriesSlider({ latestStories }: StoriesSliderProps) {
	return (
		<Swiper
			slidesPerView={2}
			spaceBetween={30}
			loop={true}
			modules={[Pagination, Navigation]}
		>
			{latestStories.map((story, index) => (
				<SwiperSlide key={story.slug + '-' + index}>
					<Link
						href={`/stories/${story.slug}`}
						className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white/40 transition-shadow hover:shadow-lg hover:shadow-ink/5"
					>
						<div
							className={`relative aspect-[16/9] overflow-hidden`}
							style={{
								background: `linear-gradient(150deg, #F4C671, #2C5C3C 60%, #14301F)`,
							}}
						>
							{story.coverImage ? (
								<Image
									src={story.coverImage}
									alt=""
									width={560}
									height={560}
									className="w-full object-cover object-center"
								/>
							) : (
								<div
									style={{
										background: "linear-gradient(150deg, #F4C671 0%, #6B8F5E 40%, #14301F 100%)",
									}}
								/>
							)}
							<div className="absolute bottom-3 left-4 flex gap-1.5">
								{story.tags.slice(0, 2).map((tag) => (
									<span
										key={tag}
										className="rounded-full bg-ink/70 px-2.5 py-1 font-mono-data text-[10px] uppercase tracking-wide text-paper backdrop-blur"
									>
										{tag}
									</span>
								))}
							</div>
						</div>

						<div className="flex flex-1 flex-col p-5">
							<h3 className={`font-display font-semibold leading-snug text-ink text-lg`}>{story.title}</h3>
							<p className="mt-2 line-clamp-2 flex-1 text-sm text-ink-soft">{story.excerpt}</p>
							<div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-3">
								<span className="font-mono-data text-[11px] text-ink-soft/70">
									{story.author} &middot; {formatDate(story.date)}
								</span>
								<ArrowUpRight
									size={16}
									className="text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber"
								/>
							</div>
						</div>
					</Link>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
