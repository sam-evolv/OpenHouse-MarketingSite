"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import { FloatingCard } from "../ModuleHero";

export function IntelligenceFloatingCards() {
  return (
    <>
      {/* Card 1: Question (top) */}
      <FloatingCard
        depth={1}
        className="lg:-translate-x-[120px] lg:-translate-y-[150px]"
        delay={0.6}
      >
        <div className="w-80 card-surface rounded-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-violet-300" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-porcelain">You ask</p>
              <p className="text-[10px] text-porcelain/50">
                Plain English
              </p>
            </div>
          </div>
          <div className="p-4">
            <p className="text-[13px] text-porcelain leading-relaxed">
              What&rsquo;s our projected revenue this month?
              <motion.span
                className="inline-block w-0.5 h-3.5 bg-violet-300 ml-1 align-middle"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity }}
              />
            </p>
          </div>
        </div>
      </FloatingCard>

      {/* Card 2: Answer with sources */}
      <FloatingCard
        depth={2}
        className="lg:translate-x-[130px] lg:-translate-y-[10px]"
        delay={0.85}
      >
        <div className="w-[340px] bg-slate/95 backdrop-blur-md rounded-2xl border border-violet-400/40 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-violet-300" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-porcelain">
                Intelligence
              </p>
              <p className="text-[10px] text-violet-300 flex items-center gap-1">
                <motion.span
                  className="w-1.5 h-1.5 bg-violet-300 rounded-full"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                Sourced answer
              </p>
            </div>
          </div>
          <div className="p-4">
            <p className="text-[13px] text-porcelain/85 leading-relaxed mb-3">
              Your three active developments are projected to close{" "}
              <span className="font-semibold text-violet-300">€1.84m</span>{" "}
              this month, based on nine sale-agreed contracts ready to sign. Riverside Gardens is the biggest contributor at €910k.
            </p>
            <div className="pt-3 border-t border-white/5">
              <p className="text-[9px] uppercase tracking-wider text-porcelain/40 mb-2">
                Sources
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Pipeline, all schemes",
                  "Sale-agreed log",
                  "Riverside Gardens",
                ].map((s) => (
                  <span
                    key={s}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/15 text-violet-200 border border-violet-400/30"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 3: Compliance question (lower left) */}
      <FloatingCard
        depth={3}
        className="lg:-translate-x-[140px] lg:translate-y-[120px]"
        delay={1.05}
      >
        <div className="w-[300px] card-surface rounded-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-violet-300" />
            </div>
            <div className="flex-1">
              <p className="text-[11px] text-porcelain/60">You ask</p>
              <p className="text-[12px] font-medium text-porcelain">
                Does our ventilation comply with Part F?
              </p>
            </div>
          </div>
          <div className="p-4">
            <p className="text-[12px] text-porcelain/85 leading-relaxed">
              Yes for Riverside Gardens and Meadow View. Orchard Close is outstanding from your M&amp;E engineer, last contacted 14 days ago.
            </p>
          </div>
        </div>
      </FloatingCard>

      {/* Card 4: Cross-scheme (peeking) */}
      <FloatingCard
        depth={2}
        className="lg:translate-x-[120px] lg:translate-y-[215px]"
        delay={1.2}
      >
        <div className="w-64 bg-gradient-to-br from-violet-500/25 to-purple-900/10 backdrop-blur-md rounded-2xl border border-violet-400/30 shadow-2xl overflow-hidden">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-violet-500/25 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-violet-300" />
              </div>
              <span className="text-[10px] font-medium text-violet-300 uppercase tracking-wider">
                Across your portfolio
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="text-[11px] text-porcelain/70">
                  Sale agreed
                </span>
                <span className="text-lg font-bold text-violet-200">158</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-[11px] text-porcelain/70">
                  Missing fire safety certs
                </span>
                <span className="text-sm font-semibold text-amber-400">
                  3
                </span>
              </div>
              <p className="text-[10px] text-porcelain/55 leading-relaxed pt-1">
                All three missing certs are in Orchard Close.
              </p>
            </div>
          </div>
        </div>
      </FloatingCard>
    </>
  );
}
