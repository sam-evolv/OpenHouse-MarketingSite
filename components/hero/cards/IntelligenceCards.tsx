"use client";

import { motion } from "framer-motion";
import { BarChart3, AlertTriangle, Users } from "lucide-react";
import { FloatingCard } from "../ModuleHero";

export function IntelligenceFloatingCards() {
  return (
    <>
      {/* Card 1: Analytics chart */}
      <FloatingCard depth={1} className="-translate-x-16 translate-y-12" delay={0.6}>
        <div className="w-64 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-violet-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-porcelain">Query Analytics</p>
              <p className="text-[10px] text-hint">Last 30 days</p>
            </div>
          </div>
          <div className="p-4">
            {/* Mini bar chart */}
            <div className="flex items-end gap-1.5 h-20 mb-3">
              {[35, 52, 45, 68, 42, 78, 60, 85, 72, 90, 65, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.8 + i * 0.05, duration: 0.3 }}
                  className="flex-1 rounded-sm bg-violet-500/40"
                />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-hint">847 queries resolved</span>
              <span className="text-[10px] font-semibold text-violet-400">+23%</span>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 2: Pattern alert */}
      <FloatingCard depth={2} className="translate-x-8 -translate-y-16" delay={0.8}>
        <div className="w-72 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-medium text-porcelain">Pattern Detected</p>
                  <span className="flex-shrink-0 w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                </div>
                <p className="text-xs text-hint mb-2">
                  14 residents asked about heating timer instructions this week — consider adding to handover pack
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    Knowledge Gap
                  </span>
                  <span className="text-[10px] text-hint">High priority</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 3: Engagement metric */}
      <FloatingCard depth={3} className="translate-x-24 translate-y-20" delay={1.0}>
        <div className="w-56 bg-gradient-to-br from-violet-500/20 to-violet-500/5 backdrop-blur-md rounded-2xl border border-violet-500/30 shadow-2xl overflow-hidden">
          <div className="p-5 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-violet-500/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-violet-400" />
            </div>
            <span className="text-xs font-medium text-violet-400 uppercase tracking-wider">
              Resident Engagement
            </span>
            <p className="text-3xl font-bold text-porcelain mt-1">94%</p>
            <p className="text-xs text-hint">Monthly active residents</p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-3 h-1 bg-violet-500/30 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "94%" }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="h-full bg-violet-400 rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </FloatingCard>
    </>
  );
}

