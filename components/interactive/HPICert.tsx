"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, Headset, Check } from "lucide-react";
import { useInViewOnce } from "@/hooks/useInViewOnce";

/**
 * HPICert — the IGBC Home Performance Index shown accurately: a certification
 * awarded in tiers (Certified / Silver / Gold), NOT a numeric score. Beside
 * the tier scale, the two things OpenHouse actually contributes toward the
 * "Consumer Information & Aftercare" (QA 8.0) criterion: the digital Home
 * User Guide and 24/7 aftercare. Illustrative tier carries an "Example" tag.
 * DOM/SVG only, reduced-motion safe.
 */

const TIERS = ["Certified", "Silver", "Gold"] as const;

function ExampleTag() {
  return (
    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider text-porcelain/60 border border-white/15 bg-white/5">
      Example
      <span className="sr-only"> illustrative certification tier, not a real award</span>
    </span>
  );
}

export function HPICert({ awarded = "Gold" }: { awarded?: (typeof TIERS)[number] }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInViewOnce(ref as React.RefObject<Element>, { threshold: 0.35 });
  const show = inView || reduced;

  const contributions = [
    {
      icon: BookOpen,
      title: "The digital Home User Guide",
      body: "Property-specific guidance on running the home's heating, ventilation, hot water and renewables — the guide QA 8.0 asks for, generated for every unit.",
    },
    {
      icon: Headset,
      title: "24/7 aftercare, on the record",
      body: "The assistant answers occupants around the clock and logs it — the consumer information and aftercare the criterion rewards.",
    },
  ];

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
      {/* The certification itself */}
      <div className="rounded-3xl border border-gold/25 bg-neutral-900/80 backdrop-blur-xl p-6 sm:p-8 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-6">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-semibold">
            Home Performance Index
          </p>
          <ExampleTag />
        </div>

        {/* Tier scale */}
        <div className="w-full max-w-[320px] flex items-end justify-center gap-2 mb-5">
          {TIERS.map((tier, i) => {
            const isAwarded = tier === awarded;
            const h = 44 + i * 22;
            return (
              <div key={tier} className="flex-1 flex flex-col items-center gap-2">
                <motion.div
                  className={`w-full rounded-t-lg border ${
                    isAwarded
                      ? "bg-gradient-to-t from-gold/30 to-gold/60 border-gold/50"
                      : "bg-white/[0.03] border-white/10"
                  }`}
                  style={{ height: h }}
                  initial={reduced ? false : { scaleY: 0 }}
                  animate={{ scaleY: show ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  aria-hidden="true"
                />
                <span
                  className={`text-[11px] font-semibold ${
                    isAwarded ? "text-gold" : "text-porcelain/45"
                  }`}
                >
                  {tier}
                </span>
              </div>
            );
          })}
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30">
          <Check className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
          <span className="text-[13px] font-semibold text-gold">
            Certified {awarded}
          </span>
        </div>
        <p className="mt-4 text-[13px] text-porcelain/55 leading-relaxed max-w-xs">
          The IGBC&rsquo;s national sustainability certification for new homes — assessed at design and build, awarded Certified, Silver or Gold.
        </p>
      </div>

      {/* What OpenHouse contributes */}
      <div className="rounded-3xl border border-white/10 bg-neutral-900/80 backdrop-blur-xl p-6 sm:p-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-porcelain/50 font-semibold mb-5">
          Where OpenHouse fits
        </p>
        <div className="space-y-4">
          {contributions.map((c) => (
            <div key={c.title} className="flex items-start gap-3.5">
              <span className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center flex-shrink-0">
                <c.icon className="w-5 h-5 text-gold" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-white mb-1 font-heading">
                  {c.title}
                </h3>
                <p className="text-[13px] text-porcelain/70 leading-relaxed">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 pt-4 border-t border-white/5 text-[12px] text-porcelain/45 leading-relaxed">
          Supports the Home Performance Index&rsquo;s Consumer Information &amp; Aftercare criterion. OpenHouse is an independent product and is not affiliated with the IGBC.
        </p>
      </div>
    </div>
  );
}
