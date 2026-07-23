"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  AlertCircle,
  UserCheck,
  FileText,
} from "lucide-react";
import { FloatingCard } from "../ModuleHero";

const pipelineStages = [
  { label: "Available", count: 8, width: "55%" },
  { label: "Reserved", count: 12, width: "70%" },
  { label: "Sale agreed", count: 18, width: "95%" },
  { label: "Contracts out", count: 6, width: "40%" },
  { label: "Closed", count: 3, width: "22%" },
];

export function SalesFloatingCards() {
  return (
    <>
      {/* Card 1: Pipeline overview */}
      <FloatingCard
        depth={1}
        className="lg:-translate-x-20 lg:-translate-y-24"
        delay={0.6}
      >
        <div className="w-80 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-blue-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-porcelain">
                Sales pipeline
              </p>
              <p className="text-[10px] text-porcelain/50">
                Oak Hill Estate, 47 units
              </p>
            </div>
            <motion.span
              className="w-1.5 h-1.5 bg-blue-400 rounded-full"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
          </div>
          <div className="p-4 space-y-2">
            {pipelineStages.map((stage, i) => (
              <div key={stage.label} className="flex items-center gap-2">
                <span className="text-[10px] text-porcelain/55 w-20 flex-shrink-0">
                  {stage.label}
                </span>
                <div className="flex-1 h-4 bg-white/5 rounded relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: stage.width }}
                    transition={{ delay: 0.8 + i * 0.08, duration: 0.6 }}
                    className="h-full bg-gradient-to-r from-blue-500/60 to-blue-400 rounded"
                  />
                </div>
                <span className="text-[10px] font-semibold text-porcelain w-6 text-right">
                  {stage.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FloatingCard>

      {/* Card 2: At-risk alert (amber, the warning colour) */}
      <FloatingCard
        depth={2}
        className="lg:translate-x-20 lg:-translate-y-4"
        delay={0.8}
      >
        <div className="w-72 bg-slate/95 backdrop-blur-md rounded-2xl border border-amber-500/40 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <AlertCircle className="w-4 h-4 text-amber-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-porcelain">
                Needs attention
              </p>
              <p className="text-[10px] text-amber-400/80">Aged contract</p>
            </div>
          </div>
          <div className="p-4 space-y-1.5">
            <p className="text-sm font-semibold text-porcelain">
              Conor Ryan, Unit 12
            </p>
            <p className="text-[12px] text-porcelain/70 leading-relaxed">
              Contracts issued 18 days ago. No response from solicitor.
            </p>
            <div className="pt-2">
              <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30">
                Draft chase ready
              </span>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 3: Buyer profile */}
      <FloatingCard
        depth={3}
        className="lg:-translate-x-28 lg:translate-y-28"
        delay={1.0}
      >
        <div className="w-64 bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-md rounded-2xl border border-blue-500/30 shadow-2xl overflow-hidden">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-porcelain">
                  Sarah Doyle
                </p>
                <p className="text-[10px] text-porcelain/60">Unit A4</p>
              </div>
            </div>
            <div className="space-y-1.5 pt-2 border-t border-white/5">
              <div className="flex justify-between">
                <span className="text-[10px] text-porcelain/60">AIP</span>
                <span className="text-[10px] font-semibold text-porcelain">
                  &euro;410,000
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[10px] text-porcelain/60">Viewed</span>
                <span className="text-[10px] font-semibold text-porcelain">
                  2 March
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[10px] text-porcelain/60">Follow-up</span>
                <span className="text-[10px] font-semibold text-amber-400">
                  Not sent
                </span>
              </div>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 4: Weekly report (peeking) */}
      <FloatingCard
        depth={2}
        className="lg:translate-x-28 lg:translate-y-32"
        delay={1.2}
      >
        <div className="w-60 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <FileText className="w-4 h-4 text-blue-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-porcelain">
                Weekly report
              </p>
              <p className="text-[10px] text-porcelain/50">Drafted</p>
            </div>
          </div>
          <div className="p-4 space-y-1.5">
            <div className="flex justify-between">
              <span className="text-[11px] text-porcelain/70">Sale agreed</span>
              <span className="text-[11px] font-semibold text-blue-400">3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[11px] text-porcelain/70">
                Contracts signed
              </span>
              <span className="text-[11px] font-semibold text-blue-400">2</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[11px] text-porcelain/70">
                Viewings booked
              </span>
              <span className="text-[11px] font-semibold text-blue-400">4</span>
            </div>
          </div>
        </div>
      </FloatingCard>
    </>
  );
}
