import * as Icons from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Tip } from "@/lib/types";

export function TipCard({ tip }: { tip: Tip }) {
  const IconComponent =
    (Icons as unknown as Record<string, Icons.LucideIcon>)[tip.icon] ??
    Icons.Compass;

  return (
    <details className="group rounded-2xl border border-ink/10 bg-white/40 p-5 open:bg-white/70">
      <summary className="flex cursor-pointer list-none items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-canopy/10 text-canopy">
          <IconComponent size={18} strokeWidth={2} />
        </span>
        <span className="flex-1">
          <span className="block font-display text-base font-semibold text-ink">
            {tip.title}
          </span>
          <span className="mt-1 block text-sm text-ink-soft">
            {tip.summary}
          </span>
        </span>
        <Icons.Plus
          size={18}
          className="mt-2 shrink-0 text-ink-soft/50 transition-transform group-open:rotate-45"
        />
      </summary>
      <div className="prose-sabah mt-4 border-t border-ink/10 pt-4 text-sm">
        <ReactMarkdown>{tip.content}</ReactMarkdown>
      </div>
    </details>
  );
}
