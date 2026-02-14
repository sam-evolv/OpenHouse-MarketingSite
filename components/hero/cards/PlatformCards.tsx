"use client";

import { motion } from "framer-motion";
import { TrendingUp, FolderOpen, MessageSquare, BarChart3 } from "lucide-react";
import { FloatingCard } from "../ModuleHero";

export function PlatformFloatingCards() {
  return (
    <>
      {/* Card 1: Sales mini */}
      <FloatingCard depth={1} className="-translate-x-20 -translate-y-8" delay={0.6}>
        <div className="w-56 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/20 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-blue-400" />
              </div>
              <p className="text-sm font-medium text-porcelain">Sales</p>
            </div>
            <div className="space-y-1.5">
              {[
                { label: "Active leads", value: "24" },
                { label: "Viewings today", value: "3" },
                { label: "Deposits this week", value: "2" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between">
                  <span className="text-[10px] text-hint">{row.label}</span>
                  <span className="text-[10px] font-semibold text-blue-400">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 2: Build mini */}
      <FloatingCard depth={2} className="translate-x-16 -translate-y-24" delay={0.8}>
        <div className="w-56 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center">
                <FolderOpen className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-sm font-medium text-porcelain">Build</p>
            </div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] text-hint">Compliance</span>
              <span className="text-[10px] font-semibold text-emerald-400">78%</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "78%" }}
                transition={{ delay: 1, duration: 0.6 }}
                className="h-full bg-emerald-400 rounded-full"
              />
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 3: AI Chat mini */}
      <FloatingCard depth={2} className="-translate-x-8 translate-y-16" delay={0.9}>
        <div className="w-64 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gold/20 border border-gold/20 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-gold" />
              </div>
              <div>
                <p className="text-sm font-medium text-porcelain">Handover</p>
                <p className="text-[10px] text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  AI Online
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-end">
                <div className="bg-gold/20 rounded-2xl rounded-br-md px-3 py-1.5">
                  <p className="text-[11px] text-porcelain">How do I reset my heating?</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white/10 rounded-2xl rounded-bl-md px-3 py-1.5">
                  <p className="text-[11px] text-porcelain">Your Daikin system resets via...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 4: Intelligence mini */}
      <FloatingCard depth={3} className="translate-x-24 translate-y-20" delay={1.1}>
        <div className="w-48 bg-gradient-to-br from-violet-500/20 to-violet-500/5 backdrop-blur-md rounded-2xl border border-violet-500/30 shadow-2xl overflow-hidden">
          <div className="p-4 text-center">
            <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-violet-500/20 flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-violet-400" />
            </div>
            <span className="text-[10px] font-medium text-violet-400 uppercase tracking-wider">
              Intelligence
            </span>
            <div className="flex items-end gap-1 h-10 mt-2 justify-center">
              {[30, 50, 40, 65, 55, 80, 70].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 1.3 + i * 0.05, duration: 0.3 }}
                  className="w-2.5 rounded-sm bg-violet-500/40"
                />
              ))}
            </div>
          </div>
        </div>
      </FloatingCard>
    </>
  );
}

