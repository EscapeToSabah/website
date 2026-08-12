import Hero from "@/components/pages/home/hero";
import StoriesSection from "@/components/pages/home/stories-section";
import ExperienceSection from "@/components/pages/home/experience-section";
import TipsSection from "@/components/pages/home/tips-section";

export default async function Home() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* LATEST STORIES */}
      <StoriesSection />

      {/* TOP EXPERIENCES */}
      <ExperienceSection />

      {/* TIPS TEASER */}
      <TipsSection />
    </>
  );
}
