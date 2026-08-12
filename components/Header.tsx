import Link from "next/link";
import { Compass } from "lucide-react";
import SiteLogo from "../public/images/site-logo.svg"
import Image from "next/image";

const NAV = [
  { href: "/stories", label: "Stories" },
  { href: "/experiences", label: "Top Experiences" },
  { href: "/tips", label: "Tips & Tricks" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2">
          <Image src={SiteLogo} alt="Site Logo" className="h-12 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono-data text-[13px] uppercase tracking-wide text-ink-soft transition-colors hover:text-canopy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/experiences"
          className="hidden rounded-full bg-canopy px-4 py-2 font-display text-sm font-medium text-paper transition-colors hover:bg-amber hover:text-ink sm:inline-block"
        >
          Start planning
        </Link>
      </div>

      {/* mobile nav */}
      <nav className="flex items-center justify-center gap-6 border-t border-ink/10 py-2 md:hidden">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="font-mono-data text-[12px] uppercase tracking-wide text-ink-soft"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
