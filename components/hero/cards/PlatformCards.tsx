"use client";

import { motion } from "framer-motion";
import { House, GraduationCap, MessageSquare, Zap } from "lucide-react";
import { FloatingCard } from "../ModuleHero";

export function PlatformFloatingCards() {
  return (
    <>
      <FloatingCard depth={1} className="-translate-x-20 -translate-y-8" delay={0.6}>
        <div className="w-56 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl p-4">
          <div className="flex items-center gap-3 mb-3"><div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center"><House className="w-4 h-4 text-blue-300" /></div><p className="text-sm font-medium text-porcelain">Living home model</p></div>
          <div className="space-y-2 text-[10px] text-hint"><p>Build fabric and dimensions</p><p>Installed systems and devices</p><p>Manuals, warranties and history</p></div>
        </div>
      </FloatingCard>

      <FloatingCard depth={2} className="translate-x-8 -translate-y-24" delay={0.8}>
        <div className="w-56 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl p-4">
          <div className="flex items-center gap-3 mb-3"><div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center"><GraduationCap className="w-4 h-4 text-emerald-300" /></div><p className="text-sm font-medium text-porcelain">Home education</p></div>
          <p className="text-[10px] text-hint mb-2">Heat pump and energy guide</p>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: "72%" }} transition={{ delay: 1, duration: 0.6 }} className="h-full bg-emerald-400 rounded-full" /></div>
          <p className="text-[10px] text-emerald-300 mt-2">Guidance delivered in context</p>
        </div>
      </FloatingCard>

      <FloatingCard depth={2} className="-translate-x-8 translate-y-16" delay={0.9}>
        <div className="w-64 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl p-4">
          <div className="flex items-center gap-3 mb-3"><div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center"><MessageSquare className="w-4 h-4 text-gold" /></div><div><p className="text-sm font-medium text-porcelain">Home assistant</p><p className="text-[10px] text-porcelain/45">Grounded in this home</p></div></div>
          <div className="space-y-2"><div className="flex justify-end"><div className="bg-gold/20 rounded-2xl rounded-br-md px-3 py-1.5"><p className="text-[11px] text-porcelain">Why is my heat pump running?</p></div></div><div className="flex justify-start"><div className="bg-white/10 rounded-2xl rounded-bl-md px-3 py-1.5"><p className="text-[11px] text-porcelain">Based on your system and settings...</p></div></div></div>
        </div>
      </FloatingCard>

      <FloatingCard depth={3} className="translate-x-28 translate-y-24" delay={1.1}>
        <div className="w-56 bg-gradient-to-br from-gold/20 to-gold/5 backdrop-blur-md rounded-2xl border border-gold/30 shadow-2xl p-4">
          <div className="flex items-center gap-2 mb-3"><div className="w-7 h-7 rounded-lg bg-gold/20 flex items-center justify-center"><Zap className="w-3.5 h-3.5 text-gold" /></div><span className="text-[10px] font-medium text-gold uppercase tracking-wider">Energy intelligence</span></div>
          <div className="space-y-2"><p className="text-[11px] text-porcelain/80">Money: tariff and bill context</p><p className="text-[11px] text-porcelain/80">Comfort: heating and ventilation</p><p className="text-[11px] text-porcelain/80">Risk: maintenance and anomalies</p></div>
        </div>
      </FloatingCard>
    </>
  );
}
