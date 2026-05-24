"use client";

import { TrendingUp, FileCheck, Package, MessageSquare } from "lucide-react";
import { FloatingCard } from "../ModuleHero";

export function DeveloperDashboardFloatingCards() {
  return (
    <>
      {/* Card 1: Pipeline */}
      <FloatingCard depth={1} className="-translate-x-16 -translate-y-24" delay={0.6}>
        <div className="w-72 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-gold" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-porcelain">
                Riverside Gardens
              </p>
              <p className="text-[10px] text-hint">47 units</p>
            </div>
            <span className="flex items-center gap-1.5 text-[10px] font-medium text-gold">
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              Live
            </span>
          </div>
          <div className="p-4 space-y-2">
            {[
              { label: "Available", count: 8, width: "w-3/4", color: "bg-gold/30" },
              { label: "Reserved", count: 12, width: "w-full", color: "bg-gold/40" },
              { label: "Sale Agreed", count: 18, width: "w-full", color: "bg-amber-400/40" },
              { label: "Contracts Out", count: 6, width: "w-1/2", color: "bg-blue-400/30" },
              { label: "Closed", count: 3, width: "w-1/3", color: "bg-emerald-500/30" },
            ].map((stage) => (
              <div key={stage.label} className="flex items-center gap-2">
                <span className="text-[10px] text-hint w-20 flex-shrink-0">
                  {stage.label}
                </span>
                <div
                  className={`h-4 ${stage.width} ${stage.color} rounded flex items-center justify-end pr-1.5`}
                >
                  <span className="text-[10px] font-semibold text-porcelain">
                    {stage.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FloatingCard>

      {/* Card 2: Compliance */}
      <FloatingCard depth={2} className="translate-x-20 -translate-y-2" delay={0.8}>
        <div className="w-64 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
              <FileCheck className="w-4 h-4 text-gold" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-porcelain">Compliance</p>
              <p className="text-[10px] text-hint">Unit A12</p>
            </div>
            <span className="text-sm font-bold text-gold">87%</span>
          </div>
          <div className="p-4 space-y-2">
            {[
              { label: "BCAR", status: "done" },
              { label: "HomeBond", status: "done" },
              { label: "BER", status: "pending" },
              { label: "Fire safety", status: "done" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between"
              >
                <span className="text-[11px] text-porcelain/80">
                  {item.label}
                </span>
                {item.status === "done" ? (
                  <span className="text-[10px] font-medium text-emerald-400">
                    Complete
                  </span>
                ) : (
                  <span className="text-[10px] font-medium text-amber-400">
                    Pending
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </FloatingCard>

      {/* Card 3: Handover pack */}
      <FloatingCard depth={3} className="-translate-x-24 translate-y-32" delay={1.0}>
        <div className="w-64 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 backdrop-blur-md rounded-2xl border border-emerald-500/30 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <Package className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-porcelain">Handover pack</p>
              <p className="text-[10px] text-hint">Unit B7</p>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Ready
            </span>
          </div>
          <div className="px-4 pb-4">
            <p className="text-[11px] text-porcelain/70 leading-relaxed">
              Manuals, certs, warranties, and walkthroughs assembled.
            </p>
          </div>
        </div>
      </FloatingCard>

      {/* Card 4: Resident question (peeking from behind) */}
      <FloatingCard depth={1} className="translate-x-12 translate-y-44" delay={1.2}>
        <div className="w-72 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-gold" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-medium text-porcelain">
                    Resident question
                  </p>
                  <span className="text-[10px] text-hint">Unit 12</span>
                </div>
                <p className="text-xs text-porcelain/70 leading-relaxed mb-2">
                  &ldquo;How do I top up the heat pump?&rdquo;
                </p>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20">
                  Answered by Property Assistant
                </span>
              </div>
            </div>
          </div>
        </div>
      </FloatingCard>
    </>
  );
}
