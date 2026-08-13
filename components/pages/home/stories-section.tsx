import { getStories } from "@/lib/sheets";
import StoriesSlider from "./stories-slider";
import { Story } from "@/lib/types";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function StoriesSection() {
	const [stories] = await Promise.all([getStories()]);

	const latestStories = [...stories].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 10) as Story[];
	return (
		<section className="relative" data-section="stories">
			{/* <span className="absolute pointer-events-none top-0 left-0 bottom-0 m-auto bg-linear-to-r from-[#f4efe1] via-[#f4efe1] to-transparent w-[18%]  from-0% via-30% to-100% h-full z-30"></span>
			<span className="absolute pointer-events-none top-0 right-0 bottom-0 m-auto bg-linear-to-l from-[#f4efe1] via-[#f4efe1] to-transparent w-[18%]  from-0% via-30% to-100% h-full z-30"></span> */}
			
			{/* Inner Section */}
			<div className="mx-auto max-w-7xl px-6 pt-24">
				<div className="flex items-end justify-between mb-8">
					<div>
						<h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">Stories</h2>
					</div>
					<Link
						href="/experiences"
						className="group hidden items-center gap-1 font-mono-data text-xs uppercase tracking-wide text-ink-soft transition-colors hover:text-canopy sm:flex"
					>
						All Stories{" "}
						<ArrowRight
							className="group-hover:translate-x-1.5 duration-300"
							size={13}
						/>
					</Link>
				</div>
				<StoriesSlider latestStories={latestStories} />
			</div>
		</section>
	);
}
