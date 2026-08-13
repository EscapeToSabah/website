import { MapPin } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
	return (
		<section
			id="top"
			className="relative min-h-[92vh] w-full overflow-hidden"
		>
			<img
				src="/images/mount-kinabalu.webp"
				alt="Mount Kinabalu rising above a sea of clouds at sunrise"
				className="absolute inset-0 size-full object-cover"
			/>
			<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/70" />

			<div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32">
				<div className="max-w-2xl">
					<div className=" gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
						<div className="flex flex-col justify-center">
							<span className="font-mono-data text-xs uppercase tracking-[0.2em] text-white flex items-center gap-2">
								<MapPin
									className="size-3.5"
									aria-hidden="true"
								/>
								Sabah, Borneo &middot; Malaysia
							</span>
							<h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
								From a <span className="text-white underline decoration-amber decoration-4 underline-offset-4">4,095m</span>
								<br />
								summit to a <span className="text-white underline decoration-amber decoration-4 underline-offset-4">600m</span> reef
								wall.
							</h1>
							<p className="mt-6 text-lg text-white">
								Escape to Sabah is a field guide, not a brochure &mdash; honest stories, practical tips, and the real top experiences across
								Borneo&rsquo;s wildest state, plotted at the actual altitude you&rsquo;ll find them.
							</p>
							<div className="mt-8 flex flex-wrap gap-3">
								<Link
									href="/experiences"
									className="inline-flex items-center gap-2 rounded-full bg-canopy px-5 py-3 font-display text-sm font-medium text-paper transition-colors hover:bg-amber hover:text-ink"
								>
									Browse top experiences
									<ArrowRight size={15} />
								</Link>
								<Link
									href="/stories"
									className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-display text-sm font-medium text-white transition-colors hover:border-amber hover:text-amber"
								>
									Read the stories
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
