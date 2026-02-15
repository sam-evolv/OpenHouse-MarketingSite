"use client";

import { motion } from "framer-motion";
import { TrendingUp, Phone, CreditCard, ArrowUpRight } from "lucide-react";
import { FloatingCard } from "../ModuleHero";

export function SalesFloatingCards() {
  return (
    <>
      {/* Card 1: Pipeline kanban */}
      <FloatingCard depth={1} className="-translate-x-16 translate-y-12" delay={0.6}>
        <div className="w-64 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-porcelain">Sales Pipeline</p>
              <p className="text-[10px] text-hint">Longview Estates</p>
            </div>
          </div>
          <div className="p-4 space-y-2.5">
            {[
              { label: "Enquiry", count: 12, color: "bg-blue-500/30", width: "w-full" },
              { label: "Viewing", count: 8, color: "bg-blue-400/30", width: "w-3/4" },
              { label: "Booked", count: 5, color: "bg-gold/30", width: "w-1/2" },
              { label: "Contract", count: 3, color: "bg-emerald-500/30", width: "w-1/3" },
            ].map((stage) => (
              <div key={stage.label} className="flex items-center gap-2">
                <span className="text-[10px] text-hint w-14 flex-shrink-0">{stage.label}</span>
                <div className={`h-5 ${stage.width} ${stage.color} rounded flex items-center justify-end pr-2`}>
                  <span className="text-[10px] font-semibold text-porcelain">{stage.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FloatingCard>

      {/* Card 2: Lead notification */}
      <FloatingCard depth={2} className="translate-x-8 -translate-y-16" delay={0.8}>
        <div className="w-72 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-medium text-porcelain">New Enquiry</p>
                  <span className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                </div>
                <p className="text-xs text-hint mb-2">
                  Sarah &amp; Mark O&apos;Brien enquired about Unit 14 — 3 bed semi-detached
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    Via Savills
                  </span>
                  <span className="text-[10px] text-hint">2 min ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 3: Deposit tracker */}
      <FloatingCard depth={3} className="translate-x-24 translate-y-20" delay={1.0}>
        <div className="w-56 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 backdrop-blur-md rounded-2xl border border-emerald-500/30 shadow-2xl overflow-hidden">
          <div className="p-5 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="flex items-center justify-center gap-1 mb-1">
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">
                Deposit Received
              </span>
            </div>
            <p className="text-2xl font-bold text-porcelain mb-0.5">&euro;5,000</p>
            <p className="text-xs text-hint">Unit 14 &bull; O&apos;Brien</p>
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
    </>
  );
}

