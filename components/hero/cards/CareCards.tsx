"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Headset,
  Plug,
  Building2,
  CheckCircle,
} from "lucide-react";
import { FloatingCard } from "../ModuleHero";

export function CareFloatingCards() {
  return (
    <>
      {/* Card 1: Customer question and answer */}
      <FloatingCard depth={2} className="-translate-x-20 -translate-y-28" delay={0.6}>
        <div className="w-72 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-gold" />
            </div>
            <div>
              <p className="text-sm font-medium text-porcelain">Customer assistant</p>
              <p className="text-[10px] text-hint">Branded for your business</p>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex justify-end">
              <div className="max-w-[85%] px-3 py-2 rounded-2xl rounded-br-md bg-gold/90 text-carbon text-xs leading-relaxed">
                My heat pump is showing E4. Is that serious?
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-[90%] px-3 py-2 rounded-2xl rounded-bl-md bg-white/10 text-porcelain text-xs leading-relaxed">
                E4 on your Mitsubishi Ecodan means low water flow. Here is the
                60-second check, and the fix if it is a stuck valve, both filmed
                by your installer.
              </div>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 2: Installer dashboard metric */}
      <FloatingCard depth={1} className="translate-x-16 -translate-y-4" delay={0.8}>
        <div className="w-64 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
              <Headset className="w-4 h-4 text-gold" />
            </div>
            <div>
              <p className="text-sm font-medium text-porcelain">This week</p>
              <p className="text-[10px] text-hint">Installer dashboard</p>
            </div>
          </div>
          <div className="p-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-3 text-center">
              <p className="text-2xl font-bold text-gold">47</p>
              <p className="text-[10px] text-hint mt-1 leading-tight">
                Queries answered without a callout
              </p>
            </div>
            <div className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-3 text-center">
              <p className="text-2xl font-bold text-porcelain">12</p>
              <p className="text-[10px] text-hint mt-1 leading-tight">
                Engineer hours saved
              </p>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 3: Branded for the installer */}
      <FloatingCard depth={3} className="-translate-x-24 translate-y-28" delay={1.0}>
        <div className="w-60 bg-gradient-to-br from-gold/20 to-gold/5 backdrop-blur-md rounded-2xl border border-gold/30 shadow-2xl overflow-hidden">
          <div className="p-5 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gold/20 border border-gold/30 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-gold" />
            </div>
            <span className="text-xs font-medium text-gold uppercase tracking-wider">
              Your branding
            </span>
            <p className="text-sm text-porcelain mt-2 leading-relaxed">
              Customers see your name, your colours, your team. Care is the front
              line; you are the trusted brand.
            </p>
          </div>
        </div>
      </FloatingCard>

      {/* Card 4: Telemetry integrations */}
      <FloatingCard depth={1} className="translate-x-24 translate-y-28" delay={1.2}>
        <div className="w-64 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
              <Plug className="w-4 h-4 text-gold" />
            </div>
            <div>
              <p className="text-sm font-medium text-porcelain">Connected systems</p>
              <p className="text-[10px] text-hint">Live telemetry</p>
            </div>
          </div>
          <div className="p-4 space-y-2">
            {["Huawei FusionSolar", "Daikin ONECTA", "SolarEdge"].map((name, i) => (
              <div key={name} className="flex items-center gap-2.5">
                <motion.span
                  className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                />
                <span className="text-xs text-porcelain">{name}</span>
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 ml-auto" />
              </div>
            ))}
          </div>
        </div>
      </FloatingCard>
    </>
  );
}
