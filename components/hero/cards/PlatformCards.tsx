"use client";

import { motion } from "framer-motion";
import { Building2, MessageCircle, Wrench, Zap } from "lucide-react";
import { FloatingCard } from "../ModuleHero";

import { EASE } from "@/lib/motion";

/**
 * Hero floating cards: four views of the same living home record.
 */

export function PlatformFloatingCards() {
  return (
    <>
      {/* Card 1: Developer platform */}
      <FloatingCard depth={1} className="lg:-translate-x-20 lg:-translate-y-8" delay={0.6}>
        <div className="w-56 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gold/20 border border-gold/20 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-gold" />
              </div>
              <p className="text-sm font-medium text-porcelain">Developer Dashboard</p>
            </div>
            <div className="space-y-1.5">
              {[
                { label: "House type", value: "B2", tone: "text-gold" },
                { label: "Home record", value: "Ready", tone: "text-gold" },
                { label: "Evidence gaps", value: "Visible", tone: "text-amber-400" },
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
      <FloatingCard depth={2} className="lg:translate-x-8 lg:-translate-y-24" delay={0.8}>
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
                  Grounded in this home
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-end">
                <div className="bg-gold/20 rounded-2xl rounded-br-md px-3 py-1.5 max-w-[90%]">
                  <p className="font-serif italic text-[12px] text-porcelain">
                    How do I top up the pressure?
                  </p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white/10 rounded-2xl rounded-bl-md px-3 py-1.5 max-w-[92%]">
                  <p className="text-[11px] text-porcelain">
                    Open the approved guide, page 14.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 3: Care */}
      <FloatingCard depth={2} className="lg:-translate-x-8 lg:translate-y-16" delay={0.9}>
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
                <span className="text-[10px] text-hint">Installer route</span>
                <span className="text-[10px] font-semibold text-emerald-400">Connected</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-hint">Evidence missing</span>
                <span className="text-[10px] font-semibold text-amber-400">Escalate</span>
              </div>
            </div>
            <div className="mt-2.5">
              <span className="inline-flex items-center px-1 py-px rounded text-[8px] font-semibold uppercase tracking-wider text-emerald-300 border border-emerald-500/25 bg-emerald-500/10">
                Pilot direction
              </span>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 4: Energy Intelligence saving */}
      <FloatingCard depth={3} className="lg:translate-x-28 lg:translate-y-24" delay={1.1}>
        <div className="w-52 bg-gradient-to-br from-emerald-500/20 to-emerald-700/5 backdrop-blur-md rounded-2xl border border-emerald-500/30 shadow-2xl overflow-hidden">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-emerald-300" />
              </div>
              <span className="text-[10px] font-medium text-emerald-300 uppercase tracking-wider">
                Energy layer
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 mb-2">
              <span className="text-xl font-bold text-emerald-300 font-heading">
                Direction
              </span>
            </div>
            <p className="text-[10px] text-hint mb-2.5">money, comfort and risk</p>
            <div className="flex items-end gap-1 h-[26px]" aria-hidden="true">
              {[22, 19, 16, 13, 10, 8].map((h, i) => (
                <motion.span
                  key={i}
                  className={`w-1.5 rounded-sm ${i >= 4 ? "bg-emerald-400" : "bg-white/15"}`}
                  style={{ height: h }}
                  initial={false}
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
