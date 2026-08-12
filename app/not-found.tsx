import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center">
      <Compass size={32} className="text-amber" strokeWidth={2} />
      <h1 className="mt-6 font-display text-3xl font-bold text-ink">
        Off the trail
      </h1>
      <p className="mt-3 text-ink-soft">
        Nothing at this address &mdash; even our guides lose the path
        sometimes. Head back and try another route.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-canopy px-5 py-3 font-display text-sm font-medium text-paper hover:bg-amber hover:text-ink"
      >
        Back to base camp
      </Link>
    </div>
  );
}
