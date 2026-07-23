"use client";

import { motion } from "framer-motion";
import { Building2, MessageCircle, Wrench, Zap } from "lucide-react";
import { FloatingCard } from "../ModuleHero";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { EASE } from "@/lib/motion";

/**
 * Hero floating cards — one card per pillar plus Energy Intelligence,
 * mirroring the story the page tells below: Developer platform,
 * Property Assistant, Care, and the energy saving. Illustrative figures
 * carry an "Example" tag.
 */

function ExampleTag() {
  return (
    <span className="inline-flex items-center px-1 py-px rounded text-[8px] font-semibold uppercase tracking-wider text-porcelain/55 border border-white/15 bg-white/5">
      Example
    </span>
  );
}

export function PlatformFloatingCards() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <>
      {/* Card 1: Developer platform */}
      <FloatingCard depth={1} className="-translate-x-20 -translate-y-8" delay={0.6}>
        <div className="w-56 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gold/20 border border-gold/20 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-gold" />
              </div>
              <p className="text-sm font-medium text-porcelain">Developer platform</p>
            </div>
            <div className="space-y-1.5">
              {[
                { label: "Units sale agreed", value: "158", tone: "text-gold" },
                { label: "Docs complete", value: "94%", tone: "text-gold" },
                { label: "Flags", value: "3", tone: "text-amber-400" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between">
                  <span className="text-[10px] text-hint">{row.label}</span>
                  <span className={`text-[10px] font-semibold ${row.tone}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 2: Property Assistant — foreshadows the E5 diagnose chapter below */}
      <FloatingCard depth={2} className="translate-x-8 -translate-y-24" delay={0.8}>
        <div className="w-64 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gold/20 border border-gold/20 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-gold" />
              </div>
              <div>
                <p className="text-sm font-medium text-porcelain">Property Assistant</p>
                <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  AI Online
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-end">
                <div className="bg-gold/20 rounded-2xl rounded-br-md px-3 py-1.5 max-w-[90%]">
                  <p className="text-[11px] text-porcelain">
                    My heat pump flashed E5 — engineer?
                  </p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white/10 rounded-2xl rounded-bl-md px-3 py-1.5 max-w-[92%]">
                  <p className="text-[11px] text-porcelain">
                    It&rsquo;s a sensor reading. Try this 90-second check first.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 3: Care */}
      <FloatingCard depth={2} className="-translate-x-8 translate-y-16" delay={0.9}>
        <div className="w-56 bg-slate/90 backdrop-blur-md rounded-2xl border border-emerald-500/25 shadow-2xl overflow-hidden">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center">
                <Wrench className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-sm font-medium text-porcelain">Care</p>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-hint">Systems monitored</span>
                <span className="text-[10px] font-semibold text-emerald-400">412</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-hint">Need attention</span>
                <span className="text-[10px] font-semibold text-amber-400">3</span>
              </div>
            </div>
            <div className="mt-2.5">
              <ExampleTag />
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 4: Energy Intelligence saving */}
      <FloatingCard depth={3} className="translate-x-28 translate-y-24" delay={1.1}>
        <div className="w-52 bg-gradient-to-br from-emerald-500/20 to-emerald-700/5 backdrop-blur-md rounded-2xl border border-emerald-500/30 shadow-2xl overflow-hidden">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-emerald-300" />
              </div>
              <span className="text-[10px] font-medium text-emerald-300 uppercase tracking-wider">
                Energy Intelligence
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 mb-2">
              <span className="text-xl font-bold text-emerald-300 font-heading">
                &euro;420/yr
              </span>
              <ExampleTag />
            </div>
            <p className="text-[10px] text-hint mb-2.5">saved by this home</p>
            <div className="flex items-end gap-1 h-[26px]" aria-hidden="true">
              {[22, 19, 16, 13, 10, 8].map((h, i) => (
                <motion.span
                  key={i}
                  className={`w-1.5 rounded-sm ${i >= 4 ? "bg-emerald-400" : "bg-white/15"}`}
                  style={{ height: h }}
                  initial={reducedMotion ? false : { height: 3, opacity: 0.4 }}
                  animate={{ height: h, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 + i * 0.07, ease: EASE }}
                />
              ))}
            </div>
          </div>
        </div>
      </FloatingCard>
    </>
  );
}
