"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import { EASE } from "@/lib/motion";

/**
 * HPIGauge — the Home Performance Index, drawn as a sweeping arc that
 * resolves to the home's score and rating letter. The signature metric:
 * a credit score for homes. Illustrative; carries a visible Example tag.
 * Reduced motion renders the final state instantly.
 */

interface HPIGaugeProps {
  /** 0–100 */
  score?: number;
  letter?: string;
  caption?: string;
  className?: string;
}

export function HPIGauge({
  score = 92,
  letter = "A",
  caption = "This home's HPI",
  className = "",
}: HPIGaugeProps) {
  const reduced = usePrefersReducedMotion();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const inView = useInViewOnce(rootRef as React.RefObject<Element>, { threshold: 0.4 });
  const [display, setDisplay] = useState(reduced ? score : 0);

  const frac = Math.max(0, Math.min(1, score / 100));
  const animateNow = inView && !reduced;

  // Score count-up, synced to the arc sweep.
  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(score);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(score * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, score]);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <div className="relative mx-auto w-full max-w-[280px]">
        <svg viewBox="0 0 200 116" className="w-full h-auto" aria-hidden="true">
          <defs>
            <linearGradient id="hpiSweep" x1="0%" y1="100%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B6428" />
              <stop offset="60%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#FDE047" />
            </linearGradient>
          </defs>
          {/* Track */}
          <path
            d="M 20 104 A 80 80 0 0 1 180 104"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Sweep */}
          <motion.path
            d="M 20 104 A 80 80 0 0 1 180 104"
            fill="none"
            stroke="url(#hpiSweep)"
            strokeWidth="12"
            strokeLinecap="round"
            initial={reduced ? { pathLength: frac } : { pathLength: 0 }}
            animate={{ pathLength: animateNow || reduced ? frac : 0 }}
            transition={{ duration: 1.4, ease: EASE }}
          />
        </svg>

        {/* Center readout */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-1">
          <p className="flex items-baseline gap-1.5">
            <span className="text-5xl font-bold font-heading tabular-nums text-gold leading-none">
              {display}
            </span>
            <span className="text-xl font-bold font-heading text-porcelain/80">
              {letter}
            </span>
          </p>
          <p className="mt-1.5 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-porcelain/50 font-semibold">
            {caption}
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider text-porcelain/60 border border-white/15 bg-white/5 normal-case">
              Example
              <span className="sr-only"> figure, for illustration only, not real customer data</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
