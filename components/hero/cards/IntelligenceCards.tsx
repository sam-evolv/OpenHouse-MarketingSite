"use client";

import { motion } from "framer-motion";
import { Sparkles, BarChart3, CalendarDays } from "lucide-react";
import { FloatingCard } from "../ModuleHero";

export function IntelligenceFloatingCards() {
  return (
    <>
      {/* Card 1: Chat conversation preview */}
      <FloatingCard depth={1} className="-translate-x-16 translate-y-8" delay={0.6}>
        <div className="w-72 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-gold" />
            </div>
            <div>
              <p className="text-sm font-medium text-porcelain">Intelligence</p>
              <p className="text-[10px] text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                AI Online
              </p>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex justify-end">
              <div className="bg-gold/20 rounded-2xl rounded-br-md px-3 py-2">
                <p className="text-[11px] text-porcelain">How many units are sale agreed?</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white/10 rounded-2xl rounded-bl-md px-3 py-2 max-w-[200px]">
                <p className="text-[11px] text-porcelain mb-2">
                  There are <span className="font-bold text-gold">158 units</span> marked as sale agreed across the scheme.
                </p>
                {/* Mini bar chart */}
                <div className="flex items-end gap-1 h-8">
                  {[85, 60, 40, 25, 15, 10].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.9 + i * 0.06, duration: 0.3 }}
                      className="flex-1 rounded-sm bg-gold/50"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 2: Prompt categories */}
      <FloatingCard depth={2} className="translate-x-12 -translate-y-20" delay={0.8}>
        <div className="w-60 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="p-4">
            <p className="text-[10px] uppercase tracking-wider text-porcelain/40 mb-3 font-medium">
              Suggested prompts
            </p>
            <div className="space-y-2">
              {[
                { label: "Live data", query: "Outstanding payments?" },
                { label: "Documents", query: "Missing fire certs?" },
                { label: "Homeowners", query: "Lowest registration?" },
                { label: "Regulatory", query: "HomeBond liability?" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5"
                >
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-gold/20 text-gold font-medium">
                    {item.label}
                  </span>
                  <span className="text-[10px] text-porcelain/70 truncate">
                    {item.query}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 3: Today's briefing mini */}
      <FloatingCard depth={3} className="translate-x-24 translate-y-24" delay={1.0}>
        <div className="w-52 bg-gradient-to-br from-gold/20 to-gold/5 backdrop-blur-md rounded-2xl border border-gold/30 shadow-2xl overflow-hidden">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gold/20 flex items-center justify-center">
                <CalendarDays className="w-3.5 h-3.5 text-gold" />
              </div>
              <span className="text-[10px] font-medium text-gold uppercase tracking-wider">
                Today&apos;s Briefing
              </span>
            </div>
            <div className="space-y-2">
              {[
                { label: "Sale agreed", value: "158" },
                { label: "Queries resolved", value: "47" },
                { label: "Registration", value: "30%" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between">
                  <span className="text-[10px] text-porcelain/50">{row.label}</span>
                  <span className="text-[10px] font-bold text-gold">{row.value}</span>
                </div>
              ))}
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-3 h-1 bg-gold/20 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "30%" }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="h-full bg-gold rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </FloatingCard>
    </>
  );
}
