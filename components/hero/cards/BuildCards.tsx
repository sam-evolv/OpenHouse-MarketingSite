"use client";

import { motion } from "framer-motion";
import { FileText, CheckCircle, Shield, CircleDollarSign } from "lucide-react";
import { FloatingCard } from "../ModuleHero";

export function BuildFloatingCards() {
  return (
    <>
      {/* Card 1: Compliance checklist */}
      <FloatingCard depth={1} className="-translate-x-16 translate-y-12" delay={0.6}>
        <div className="w-64 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <Shield className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-porcelain">Compliance</p>
              <p className="text-[10px] text-hint">Phase 2 — 42 units</p>
            </div>
          </div>
          <div className="p-4 space-y-2">
            {[
              { label: "Planning Cert", done: true },
              { label: "Fire Safety Cert", done: true },
              { label: "BER Certificates", done: true },
              { label: "BCAR Compliance", done: false },
              { label: "Snag Lists", done: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ${
                  item.done ? "bg-emerald-500/20" : "border border-white/20"
                }`}>
                  {item.done && <CheckCircle className="w-3 h-3 text-emerald-400" />}
                </div>
                <span className={`text-xs ${item.done ? "text-porcelain/60 line-through" : "text-porcelain"}`}>
                  {item.label}
                </span>
              </div>
            ))}
            <div className="mt-2 pt-2 border-t border-white/5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-hint">Progress</span>
                <span className="text-[10px] font-semibold text-emerald-400">60%</span>
              </div>
              <div className="mt-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "60%" }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="h-full bg-emerald-400 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 2: Document card */}
      <FloatingCard depth={2} className="translate-x-8 -translate-y-16" delay={0.8}>
        <div className="w-72 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <FileText className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-porcelain">Smart Archive</p>
              <p className="text-[10px] text-hint">128 documents uploaded</p>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-2">
              {[
                { name: "Architectural_Plans_v3.pdf", size: "4.2 MB", type: "PDF" },
                { name: "BER_Cert_Unit14.pdf", size: "1.1 MB", type: "PDF" },
                { name: "Kitchen_Specs_Phase2.xlsx", size: "890 KB", type: "XLS" },
              ].map((doc) => (
                <div key={doc.name} className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-white/5">
                  <div className="w-6 h-6 rounded bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[8px] font-bold text-emerald-400">{doc.type}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-porcelain truncate">{doc.name}</p>
                    <p className="text-[9px] text-hint">{doc.size}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 3: PC Sum tracker */}
      <FloatingCard depth={3} className="translate-x-24 translate-y-20" delay={1.0}>
        <div className="w-56 bg-gradient-to-br from-gold/20 to-gold/5 backdrop-blur-md rounded-2xl border border-gold/30 shadow-2xl overflow-hidden">
          <div className="p-5 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gold/20 flex items-center justify-center">
              <CircleDollarSign className="w-6 h-6 text-gold" />
            </div>
            <span className="text-xs font-medium text-gold uppercase tracking-wider">
              PC Sum Update
            </span>
            <p className="text-xl font-bold text-porcelain mt-1">&euro;12,400</p>
            <p className="text-xs text-hint">Kitchen upgrade &bull; Unit 14</p>
            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20">
                Approved
              </span>
            </div>
          </div>
        </div>
      </FloatingCard>
    </>
  );
}

