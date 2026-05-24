"use client";

import { Sparkles, FileCheck, LayoutGrid } from "lucide-react";
import { FloatingCard } from "../ModuleHero";

/* Gold Q&A hero cards for the Intelligence page (brief Section 1):
   a question, the sourced answer, a Part F compliance answer, and a
   cross-scheme summary. Matches the gold-on-dark platform language. */

function SourcePill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gold/25 bg-gold/[0.08] px-2 py-0.5 text-[9px] font-medium text-gold/90">
      {children}
    </span>
  );
}

export function IntelligenceFloatingCards() {
  return (
    <>
      {/* Card 1: the question */}
      <FloatingCard depth={1} className="-translate-x-24 -translate-y-32" delay={0.6}>
        <div className="w-60 rounded-2xl border border-white/10 bg-slate/90 px-4 py-3 shadow-2xl backdrop-blur-md">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gold/15">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-hint">
              You ask
            </span>
          </div>
          <p className="text-sm font-medium text-porcelain">
            What&apos;s our projected revenue this month?
            <span className="ml-0.5 inline-block h-3.5 w-[2px] translate-y-0.5 animate-pulse bg-gold" />
          </p>
        </div>
      </FloatingCard>

      {/* Card 2: the sourced answer */}
      <FloatingCard depth={2} className="translate-x-16 -translate-y-4" delay={0.8}>
        <div className="w-72 rounded-2xl border border-gold/20 bg-slate/95 p-4 shadow-2xl backdrop-blur-md">
          <p className="text-xs leading-relaxed text-porcelain">
            Your three active developments are projected to close{" "}
            <span className="font-semibold text-gold">&euro;1.84m</span> this
            month, based on 9 sale agreed contracts ready to sign. Riverside
            Gardens is the biggest contributor at &euro;910k.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <SourcePill>Riverside Gardens pipeline</SourcePill>
            <SourcePill>Sale agreed contracts</SourcePill>
          </div>
        </div>
      </FloatingCard>

      {/* Card 3: Part F compliance */}
      <FloatingCard depth={3} className="-translate-x-20 translate-y-36" delay={1.0}>
        <div className="w-72 rounded-2xl border border-white/10 bg-slate/90 p-4 shadow-2xl backdrop-blur-md">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gold/15">
              <FileCheck className="h-3.5 w-3.5 text-gold" />
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-hint">
              Does our ventilation comply with Part F?
            </span>
          </div>
          <p className="text-xs leading-relaxed text-porcelain">
            Yes, for Riverside Gardens and Meadow View. For Orchard Close, the
            assessment is outstanding from your M&amp;E engineer, last contacted
            14 days ago.
          </p>
        </div>
      </FloatingCard>

      {/* Card 4: cross-scheme summary, peeking */}
      <FloatingCard depth={2} className="translate-x-28 translate-y-44" delay={1.2}>
        <div className="w-60 rounded-2xl border border-gold/25 bg-gradient-to-br from-gold/[0.14] to-gold/[0.03] p-4 shadow-2xl backdrop-blur-md">
          <div className="mb-2 flex items-center gap-2">
            <LayoutGrid className="h-4 w-4 text-gold" />
            <span className="text-[10px] font-medium uppercase tracking-wider text-gold">
              Across your portfolio
            </span>
          </div>
          <p className="text-xs leading-relaxed text-porcelain">
            <span className="font-semibold text-porcelain">158 units</span> sale
            agreed, and 3 units with missing fire safety certs, all in Orchard
            Close.
          </p>
        </div>
      </FloatingCard>
    </>
  );
}
