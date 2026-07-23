"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  FolderOpen,
  AlertCircle,
  FileCheck,
} from "lucide-react";
import { FloatingCard } from "../ModuleHero";

const certs = [
  { label: "BCAR", done: true },
  { label: "HomeBond", done: true },
  { label: "BER", done: false },
  { label: "Fire safety", done: true },
];

const docs = [
  "Floor plans",
  "Kitchen spec",
  "Electrical cert",
  "Plumbing cert",
  "Heat pump manual",
  "Solar warranty",
];

export function BuildFloatingCards() {
  return (
    <>
      {/* Card 1: Compliance progress */}
      <FloatingCard
        depth={1}
        className="lg:-translate-x-20 lg:-translate-y-24"
        delay={0.6}
      >
        <div className="w-80 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <ClipboardCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-porcelain">Compliance</p>
              <p className="text-[10px] text-porcelain/50">
                Riverside Gardens, Unit A12
              </p>
            </div>
            <span className="text-[11px] font-semibold text-emerald-400">
              87%
            </span>
          </div>
          <div className="p-4 space-y-2.5">
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "87%" }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="h-full bg-gradient-to-r from-emerald-500/60 to-emerald-400 rounded-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              {certs.map((c) => (
                <div key={c.label} className="flex items-center gap-2">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${c.done ? "bg-emerald-400" : "bg-amber-400"}`}
                  />
                  <span className="text-[11px] text-porcelain/80">{c.label}</span>
                  <span className="text-[10px] text-porcelain/45 ml-auto">
                    {c.done ? "Filed" : "Pending"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 2: Document tree */}
      <FloatingCard
        depth={2}
        className="lg:translate-x-20 lg:-translate-y-4"
        delay={0.8}
      >
        <div className="w-72 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <FolderOpen className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-porcelain">
                Unit A12, Documents
              </p>
              <p className="text-[10px] text-porcelain/50">6 of 9 filed</p>
            </div>
          </div>
          <div className="p-4 space-y-1.5">
            {docs.map((d, i) => (
              <div key={d} className="flex items-center gap-2">
                <div className="w-1 h-1 bg-emerald-400 rounded-full flex-shrink-0" />
                <span className="text-[12px] text-porcelain/80 truncate">
                  {d}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FloatingCard>

      {/* Card 3: Alert, missing before handover */}
      <FloatingCard
        depth={3}
        className="lg:-translate-x-28 lg:translate-y-28"
        delay={1.0}
      >
        <div className="w-64 bg-slate/95 backdrop-blur-md rounded-2xl border border-amber-500/40 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <AlertCircle className="w-4 h-4 text-amber-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-porcelain">
                Missing for handover
              </p>
              <p className="text-[10px] text-amber-400/80">Unit A12</p>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm font-semibold text-porcelain mb-1">
              BER cert outstanding
            </p>
            <p className="text-[12px] text-porcelain/70 leading-relaxed">
              From BER assessor. Expected 14 March.
            </p>
          </div>
        </div>
      </FloatingCard>

      {/* Card 4: Sub-contractor cert filed (peeking) */}
      <FloatingCard
        depth={2}
        className="lg:translate-x-28 lg:translate-y-32"
        delay={1.2}
      >
        <div className="w-60 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 backdrop-blur-md rounded-2xl border border-emerald-500/30 shadow-2xl overflow-hidden">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <FileCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-[10px] font-medium text-emerald-400 uppercase tracking-wider">
                Cert filed
              </span>
            </div>
            <p className="text-sm font-semibold text-porcelain">
              Electrical cert
            </p>
            <p className="text-[11px] text-porcelain/70 mt-1">
              Murphy Electrical, Unit A12
            </p>
            <p className="text-[10px] text-porcelain/45 mt-1">
              Issued 12 March
            </p>
          </div>
        </div>
      </FloatingCard>
    </>
  );
}
