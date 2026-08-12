import Link from "next/link";

export type RulerItem = {
  label: string;
  elevationM: number;
  href?: string;
};

const LANDMARKS: { label: string; elevationM: number }[] = [
  { label: "Low's Peak summit", elevationM: 4095 },
  { label: "Rainforest canopy", elevationM: 45 },
  { label: "Sea level", elevationM: 0 },
  { label: "Sipadan reef wall", elevationM: -600 },
];

const MIN = -700;
const MAX = 4300;

function toPercent(elevationM: number) {
  const clamped = Math.min(MAX, Math.max(MIN, elevationM));
  return ((MAX - clamped) / (MAX - MIN)) * 100;
}

function formatElevation(m: number) {
  const abs = Math.abs(m).toLocaleString();
  if (m > 0) return `+${abs} m`;
  if (m < 0) return `\u2212${abs} m`;
  return "0 m";
}

/**
 * A vertical line marking real elevation, from Sabah's highest summit
 * down to its most-dived reef wall. Sabah's tourism genuinely spans
 * this range -- the ruler isn't decoration, it's the one number every
 * item in `items` actually has in common.
 */
export function ElevationRuler({
  items,
  showLandmarks = true,
  compact = false,
}: {
  items: RulerItem[];
  showLandmarks?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative ${compact ? "h-[360px]" : "h-[560px]"} w-full`}
      aria-hidden={items.length === 0}
    >
      {/* the line itself */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-amber-light via-canopy-light to-ocean opacity-60" />

      {showLandmarks &&
        LANDMARKS.map((lm) => (
          <div
            key={lm.label}
            className="absolute left-6 flex items-center gap-2"
            style={{ top: `${toPercent(lm.elevationM)}%` }}
          >
            <span className="h-2 w-2 -translate-x-1/2 rounded-full bg-paper ring-2 ring-ink-soft/40" />
            <span className="font-mono-data text-[11px] uppercase tracking-wide text-ink-soft/70">
              {lm.label} &middot; {formatElevation(lm.elevationM)}
            </span>
          </div>
        ))}

      {items.map((item) => {
        const Wrapper = item.href ? Link : "div";
        return (
          <Wrapper
            key={item.label}
            href={item.href ?? "#"}
            className="group absolute left-6 flex -translate-y-1/2 items-center gap-3 pl-5"
            style={{ top: `${toPercent(item.elevationM)}%` }}
          >
            <span className="absolute left-0 h-3 w-3 -translate-x-1/2 rotate-45 border-2 border-canopy bg-amber transition-transform group-hover:scale-125" />
            <span className="rounded-full bg-canopy px-3 py-1 font-display text-xs font-medium text-paper shadow-sm transition-colors group-hover:bg-amber group-hover:text-ink">
              {item.label}
            </span>
            <span className="font-mono-data text-[11px] text-ink-soft/70">
              {formatElevation(item.elevationM)}
            </span>
          </Wrapper>
        );
      })}
    </div>
  );
}
