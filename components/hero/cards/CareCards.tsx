"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  BarChart3,
  Paintbrush,
  Plug,
  Play,
} from "lucide-react";
import { FloatingCard } from "../ModuleHero";

const integrations = [
  { label: "Huawei FusionSolar" },
  { label: "Daikin ONECTA" },
  { label: "SolarEdge" },
];

export function CareFloatingCards() {
  return (
    <>
      {/* Card 1: Customer chat with installer branding */}
      <FloatingCard
        depth={1}
        className="-translate-x-20 -translate-y-24"
        delay={0.6}
      >
        <div className="w-80 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-porcelain">
                Acme Renewables, support
              </p>
              <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                <motion.span
                  className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                AI online
              </p>
            </div>
          </div>
          <div className="p-4 space-y-2.5">
            <div className="flex justify-end">
              <div className="bg-emerald-500/20 rounded-2xl rounded-br-sm px-3 py-2 max-w-[85%]">
                <p className="text-[12px] text-porcelain">
                  My heat pump is showing E4. Is that serious?
                </p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white/10 rounded-2xl rounded-bl-sm px-3 py-2 max-w-[88%]">
                <p className="text-[12px] text-porcelain leading-relaxed">
                  E4 on your Mitsubishi Ecodan means low water flow. Here&rsquo;s the 60-second check, filmed by your installer.
                </p>
                <div className="mt-2 flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 w-fit">
                  <Play className="w-2.5 h-2.5 text-emerald-400 fill-emerald-400" />
                  <span className="text-[10px] font-medium text-emerald-300">
                    Watch the check
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 2: Installer dashboard */}
      <FloatingCard
        depth={2}
        className="translate-x-20 -translate-y-4"
        delay={0.85}
      >
        <div className="w-72 bg-slate/95 backdrop-blur-md rounded-2xl border border-emerald-500/30 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-porcelain">This week</p>
              <p className="text-[10px] text-porcelain/50">Your fleet</p>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-baseline justify-between">
              <span className="text-[11px] text-porcelain/70">
                Queries answered without a callout
              </span>
              <span className="text-2xl font-bold text-emerald-400">47</span>
            </div>
            <div className="flex items-baseline justify-between pt-2 border-t border-white/5">
              <span className="text-[11px] text-porcelain/70">
                Engineer hours saved
              </span>
              <span className="text-lg font-semibold text-emerald-300">12</span>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 3: Your branding (lower left) */}
      <FloatingCard
        depth={3}
        className="-translate-x-28 translate-y-28"
        delay={1.0}
      >
        <div className="w-64 bg-gradient-to-br from-emerald-500/20 to-emerald-700/5 backdrop-blur-md rounded-2xl border border-emerald-500/30 shadow-2xl overflow-hidden">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/25 flex items-center justify-center">
                <Paintbrush className="w-4 h-4 text-emerald-300" />
              </div>
              <span className="text-[10px] font-medium text-emerald-300 uppercase tracking-wider">
                Your branding
              </span>
            </div>
            <p className="text-sm text-porcelain leading-relaxed">
              Customers see your name, your colours, your team. Care is the front line. You&rsquo;re the trusted brand.
            </p>
          </div>
        </div>
      </FloatingCard>

      {/* Card 4: Telemetry integrations (peeking) */}
      <FloatingCard
        depth={2}
        className="translate-x-28 translate-y-32"
        delay={1.15}
      >
        <div className="w-64 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <Plug className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-porcelain">Connected</p>
              <p className="text-[10px] text-porcelain/50">Live telemetry</p>
            </div>
          </div>
          <div className="p-4 space-y-1.5">
            {integrations.map((i) => (
              <div key={i.label} className="flex items-center gap-2">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-[12px] text-porcelain/85">
                  {i.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FloatingCard>
    </>
  );
}
