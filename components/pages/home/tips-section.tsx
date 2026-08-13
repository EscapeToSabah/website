import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTips } from "@/lib/sheets";
import { TipCard } from "@/components/TipCard";


export default async function TipsSection() {
    const [tips] = await Promise.all([
        getTips(),
      ]);
    
      const topTips = tips.slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-end justify-between">
          <div>
            <span className="font-mono-data text-xs uppercase tracking-[0.2em] text-ocean">
              Before you go
            </span>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Tips &amp; tricks
            </h2>
          </div>
          <Link
            href="/tips"
            className="group hidden items-center gap-1 font-mono-data text-xs uppercase tracking-wide text-ink-soft transition-colors hover:text-canopy sm:flex"
          >
            All tips <ArrowRight className="group-hover:translate-x-1.5 duration-300" size={13} />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {topTips.map((tip) => (
            <TipCard key={tip.slug} tip={tip} />
          ))}
        </div>
      </section>
  )
}
