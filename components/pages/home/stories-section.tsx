import { getStories } from "@/lib/sheets";
import StoriesSlider from "./stories-slider";
import { Story } from "@/lib/types";

export default async function StoriesSection() {
	const [stories] = await Promise.all([getStories()]);

	const latestStories = [...stories].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 10) as Story[];
	return (
		<section className="mx-auto max-w-7xl px-6 pt-24">
            <StoriesSlider latestStories={latestStories} />
		</section>
	);
}
