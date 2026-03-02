"use client";

import { motion } from "framer-motion";
import { MessageSquare, CheckCircle, TrendingUp, QrCode, ArrowUpRight } from "lucide-react";
import { FloatingCard } from "../ModuleHero";

export function CareFloatingCards() {
  return (
    <>
      {/* Card 1: AI Chat */}
      <FloatingCard depth={1} className="-translate-x-16 translate-y-12" delay={0.6}>
        <div className="w-72 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-porcelain">OpenHouse Care</p>
              <p className="text-[10px] text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                AI Online
              </p>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex justify-end">
              <div className="bg-emerald-500/20 rounded-2xl rounded-br-md px-4 py-2.5 max-w-[85%]">
                <p className="text-sm text-porcelain">
                  My heat pump is showing an E3 fault code
                </p>
                <p className="text-[9px] text-hint mt-1">Just now</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white/10 rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[85%]">
                <p className="text-sm text-porcelain">
                  This is a low pressure fault. Let me walk you through the fix...
                </p>
              </div>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 2: Diagnostics resolved */}
      <FloatingCard depth={2} className="translate-x-8 -translate-y-16" delay={0.8}>
        <div className="w-56 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-sm font-medium text-porcelain">Diagnostics</p>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">Fault Resolved</span>
            </div>
            <p className="text-xs text-neutral-400">
              E3 Low Pressure — Filter clean required
            </p>
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-neutral-500">Resolution time</span>
              <span className="text-xs font-medium text-emerald-400">2 mins — No callout</span>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 3: Callout savings */}
      <FloatingCard depth={3} className="translate-x-24 translate-y-20" delay={1.0}>
        <div className="w-56 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 backdrop-blur-md rounded-2xl border border-emerald-500/30 shadow-2xl overflow-hidden">
          <div className="p-5 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="flex items-center justify-center gap-1 mb-1">
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">
                Callout Savings
              </span>
            </div>
            <p className="text-2xl font-bold text-porcelain mb-0.5">&euro;27,400</p>
            <p className="text-xs text-hint">saved this year</p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-3 h-1 bg-emerald-500/30 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="h-full w-1/2 bg-emerald-400 rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 4: QR Activation */}
      <FloatingCard depth={2} className="-translate-x-32 -translate-y-4" delay={1.2}>
        <div className="w-44 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="p-4 text-center">
            <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3">
              <QrCode className="w-6 h-6 text-emerald-400" />
            </div>
            <p className="text-sm font-medium text-porcelain">Scan to activate</p>
            <p className="text-[10px] text-neutral-500 mt-1">No app download required</p>
          </div>
        </div>
      </FloatingCard>
    </>
  );
}
