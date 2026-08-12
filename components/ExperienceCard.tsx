import Link from "next/link";
import { MapPin, Gauge, Clock } from "lucide-react";
import { Experience } from "@/lib/types";
import { ElevationArt } from "./ElevationArt";
import Image from "next/image";

function formatElevation(m: number) {
	const abs = Math.abs(m).toLocaleString();
	if (m > 0) return `${abs} m above sea level`;
	if (m < 0) return `${abs} m below sea level`;
	return "sea level";
}

export function ExperienceCard({ experience }: { experience: Experience }) {
	return (
		<Link
			href={`/experiences/${experience.slug}`}
			className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white/40 transition-shadow hover:shadow-lg hover:shadow-ink/5"
		>
			<ElevationArt
				elevationM={experience.elevationM}
				className="aspect-[4/3]"
			>
				{experience.image && (
					<Image
						src={experience.image}
						alt=""
						width={560}
						height={560}
						className="w-full object-cover object-center"
					/>
				)}
				<div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
					<span className="rounded-full bg-ink/70 px-2.5 py-1 font-mono-data text-[10px] uppercase tracking-wide text-paper backdrop-blur">
						{experience.category}
					</span>
					<span className="rounded-full bg-paper/90 px-2.5 py-1 font-mono-data text-[10px] font-medium text-ink">
						{formatElevation(experience.elevationM)}
					</span>
				</div>
			</ElevationArt>

			<div className="flex flex-1 flex-col p-5">
				<h3 className="font-display text-lg font-semibold leading-snug text-ink">{experience.title}</h3>
				<p className="mt-1.5 flex items-center gap-1 font-mono-data text-[11px] uppercase tracking-wide text-ink-soft/70">
					<MapPin size={11} />
					{experience.location}
				</p>
				<p className="mt-3 flex-1 text-sm text-ink-soft">{experience.summary}</p>

				<div className="mt-4 flex items-center gap-4 border-t border-ink/10 pt-3 font-mono-data text-[11px] text-ink-soft/70">
					<span className="flex items-center gap-1">
						<Gauge size={12} /> {experience.difficulty}
					</span>
					<span className="flex items-center gap-1">
						<Clock size={12} /> {experience.duration}
					</span>
				</div>
			</div>
		</Link>
	);
}
