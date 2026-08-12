import Link from "next/link";
import { Compass, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 bg-canopy text-paper">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Compass size={18} strokeWidth={2.5} className="text-amber" />
              <span className="font-display text-base font-semibold">
                Escape to Sabah
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-paper/70">
              Field notes, honest tips, and the real elevation of things to
              do &mdash; from a 4,095m summit to a 600m reef wall.
            </p>
          </div>

          <div>
            <h3 className="font-mono-data text-xs uppercase tracking-wide text-paper/50">
              Explore
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/stories" className="hover:text-amber">
                  Stories
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:text-amber">
                  Top Experiences
                </Link>
              </li>
              <li>
                <Link href="/tips" className="hover:text-amber">
                  Tips &amp; Tricks
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono-data text-xs uppercase tracking-wide text-paper/50">
              Say hello
            </h3>
            <a
              href="mailto:hello@escapetosabah.com"
              className="mt-3 flex items-center gap-2 text-sm hover:text-amber"
            >
              <Mail size={14} />
              hello@escapetosabah.com
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-paper/10 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Escape to Sabah.</p>
          <p>Built for people who want the four-minute sunrise, not the brochure.</p>
        </div>
      </div>
    </footer>
  );
}
