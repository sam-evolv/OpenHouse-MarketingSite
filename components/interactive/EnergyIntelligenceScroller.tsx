"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Container } from "@/components/ui/container";
import {
  EnergyIntelligenceDemo,
  STEPS,
  type Stage,
} from "./EnergyIntelligenceDemo";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * EnergyIntelligenceScroller — the homepage's signature chapter.
 * On desktop the demo pins on screen and scrolling advances
 * Monitor → Diagnose → Educate → Save; a progress rail mirrors the journey
 * and clicking a stop performs a native scroll jump (no hijacking — pinning
 * is position: sticky only). Mobile and reduced-motion render the standard
 * autoplay demo unchanged.
 */

const ORDER: Stage[] = ["monitoring", "diagnose", "educate", "savings"];
// Mid-band scroll positions for each stage — never on a threshold.
const STOP_CENTERS = [0.08, 0.34, 0.59, 0.85];
// Stage thresholds; the final stage holds through the last ~28% so the
// savings counter finishes before the chapter releases (peak-end).
function stageFor(p: number): number {
  return p < 0.22 ? 0 : p < 0.47 ? 1 : p < 0.72 ? 2 : 3;
}

export function EnergyIntelligenceScroller() {
  const ref = useRef<HTMLElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [pinned, setPinned] = useState(false);
  const [stageIndex, setStageIndex] = useState(0);

  // Desktop-only, resolved before first paint so there is no mode flash.
  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setPinned(mq.matches && !reducedMotion);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reducedMotion]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (!pinned) return;
    const next = stageFor(p);
    setStageIndex((cur) => (next !== cur ? next : cur));
  });

  const jump = async (i: number) => {
    const el = ref.current;
    if (!el) return;
    const sectionTop = el.getBoundingClientRect().top + window.scrollY;
    const top = sectionTop + STOP_CENTERS[i] * (el.offsetHeight - window.innerHeight);
    // Route through Lenis when it's driving the page so the two don't fight;
    // dynamic import keeps Lenis out of this page chunk (it lives in the
    // layout's ScrollProvider chunk).
    const { getLenis } = await import("@/lib/scroll/lenis");
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(top);
    } else {
      window.scrollTo({ top, behavior: reducedMotion ? "auto" : "smooth" });
    }
  };

  // The ref'd section renders in BOTH modes so framer's useScroll always has
  // its target from first mount — binding it late would silently fall back to
  // page-level progress and desync the stages.
  if (!pinned) {
    return (
      <section ref={ref} className="relative">
        <Container>
          <div className="max-w-5xl mx-auto">
            <EnergyIntelligenceDemo accent="emerald" />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen min-h-[560px] flex items-center overflow-hidden">
        <Container className="w-full">
          <div className="grid grid-cols-[152px_minmax(0,1fr)] gap-10 items-center max-w-6xl mx-auto">
            {/* Progress rail */}
            <div className="relative">
              <div
                className="absolute left-[5px] top-2 bottom-2 w-px bg-white/10"
                aria-hidden="true"
              >
                <motion.div
                  className="absolute inset-0 origin-top bg-gradient-to-b from-emerald-400 to-emerald-500"
                  style={{ scaleY: scrollYProgress }}
                />
              </div>
              <div
                role="tablist"
                aria-label="Energy Intelligence stages"
                aria-orientation="vertical"
                className="relative flex flex-col gap-8"
              >
                {STEPS.map((s, i) => {
                  const active = i === stageIndex;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => jump(i)}
                      className={`group flex items-center gap-3 min-h-[40px] text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-carbon rounded-md ${
                        active
                          ? "text-emerald-300"
                          : "text-porcelain/50 hover:text-porcelain/80"
                      }`}
                    >
                      <span
                        className={`relative z-10 block w-[11px] h-[11px] rounded-full border-2 transition-colors duration-300 ${
                          active
                            ? "bg-emerald-400 border-emerald-400"
                            : "bg-carbon border-white/25 group-hover:border-white/50"
                        }`}
                        aria-hidden="true"
                      />
                      <span className="font-mono text-[11px] tracking-wider opacity-70">
                        0{i + 1}
                      </span>
                      <span className="text-[13px] font-medium">{s.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* The demo, stage-driven by scroll */}
            <EnergyIntelligenceDemo
              accent="emerald"
              stage={ORDER[stageIndex]}
              hideControls
            />
          </div>
        </Container>
      </div>
    </section>
  );
}
