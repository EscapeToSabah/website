type Band = {
  max: number;
  gradient: string;
  label: string;
};

// Sabah's tourism sites span a ~4.7km vertical range, from Low's Peak
// down to Sipadan's reef wall. Rather than stock photography, each
// card is rendered as a small gradient study of the light and colour
// at that specific altitude -- granite and mist up high, canopy green
// through the mid-forest, gold at the shoreline, teal underwater.
const BANDS: Band[] = [
  {
    max: Infinity,
    gradient:
      "linear-gradient(160deg, #E9E4D8 0%, #C9BFA6 28%, #8E9B87 62%, #2C5C3C 100%)",
    label: "Alpine granite",
  },
  {
    max: 1500,
    gradient:
      "linear-gradient(160deg, #F4C671 0%, #6B8F5E 35%, #2C5C3C 70%, #14301F 100%)",
    label: "Montane forest",
  },
  {
    max: 200,
    gradient:
      "linear-gradient(160deg, #F4EFE1 0%, #C9D9A8 30%, #4F8F5E 65%, #14301F 100%)",
    label: "Lowland rainforest",
  },
  {
    max: 1,
    gradient: "linear-gradient(160deg, #F4C671 0%, #E3A23C 40%, #0E5566 100%)",
    label: "Shoreline, golden hour",
  },
  {
    max: -Infinity,
    gradient: "linear-gradient(160deg, #4FBFAE 0%, #0E5566 45%, #0A2E38 100%)",
    label: "Reef wall",
  },
];

function bandFor(elevationM: number): Band {
  return BANDS.find((b) => elevationM >= b.max) ?? BANDS[BANDS.length - 1];
}

export function ElevationArt({
  elevationM,
  className = "",
  children,
}: {
  elevationM: number;
  className?: string;
  children?: React.ReactNode;
}) {
  const band = bandFor(elevationM);
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: band.gradient }}
      title={band.label}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-20 mix-blend-overlay"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <path
          d="M0 70 Q 25 55 50 68 T 100 60 L 100 100 L 0 100 Z"
          fill="#000"
        />
        <path
          d="M0 82 Q 30 70 55 80 T 100 78 L 100 100 L 0 100 Z"
          fill="#000"
          opacity="0.5"
        />
      </svg>
      {children}
    </div>
  );
}
