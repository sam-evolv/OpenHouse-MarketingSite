"use client";

import { motion } from "framer-motion";
import {
  Mic,
  Mail,
  CalendarClock,
  KeyRound,
} from "lucide-react";
import { FloatingCard } from "../ModuleHero";

export function AgentFloatingCards() {
  return (
    <>
      {/* Card 1: Voice listening */}
      <FloatingCard
        depth={1}
        className="-translate-x-20 -translate-y-24"
        delay={0.6}
      >
        <div className="w-72 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden rotate-[-3deg]">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
              <Mic className="w-4 h-4 text-gold" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-porcelain">Listening</p>
              <p className="text-[10px] text-gold flex items-center gap-1">
                <motion.span
                  className="w-1.5 h-1.5 bg-gold rounded-full"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
                Voice in
              </p>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm text-porcelain/85 leading-relaxed">
              &ldquo;Email number 3 in &Aacute;rdan View, ask if they&rsquo;ve picked their kitchen.&rdquo;
            </p>
            <div className="mt-3 flex items-end gap-0.5 h-6">
              {[0.4, 0.7, 1, 0.6, 0.9, 0.5, 0.8, 0.4, 0.7, 1, 0.6, 0.5].map(
                (h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-gold/60 rounded-sm"
                    animate={{ scaleY: [h, h * 0.4, h] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.06,
                    }}
                    style={{ height: `${h * 100}%`, transformOrigin: "bottom" }}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 2: Draft ready */}
      <FloatingCard
        depth={2}
        className="translate-x-16 -translate-y-4"
        delay={0.8}
      >
        <div className="w-80 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
              <Mail className="w-4 h-4 text-gold" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-porcelain">Draft ready</p>
              <p className="text-[10px] text-porcelain/50">
                To Conor Ryan
              </p>
            </div>
          </div>
          <div className="p-4 space-y-2">
            <p className="text-xs font-semibold text-porcelain">
              Kitchen selection for No. 3 &Aacute;rdan View
            </p>
            <p className="text-[11px] text-porcelain/70 leading-relaxed">
              Hi Conor, just checking in to see if you&rsquo;ve had a chance to pick your kitchen finish. Happy to walk you through the options.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="px-3 py-1.5 rounded-full bg-gold text-carbon text-[11px] font-semibold">
                Approve
              </span>
              <span className="px-3 py-1.5 rounded-full border border-white/15 text-[11px] text-porcelain/70">
                Edit
              </span>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 3: Viewing scheduled */}
      <FloatingCard
        depth={3}
        className="-translate-x-28 translate-y-28"
        delay={1.0}
      >
        <div className="w-64 bg-gradient-to-br from-gold/20 to-gold/5 backdrop-blur-md rounded-2xl border border-gold/30 shadow-2xl overflow-hidden">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
                <CalendarClock className="w-4 h-4 text-gold" />
              </div>
              <span className="text-[10px] font-medium text-gold uppercase tracking-wider">
                Viewing scheduled
              </span>
            </div>
            <p className="text-sm font-semibold text-porcelain">
              Saturday 11:00
            </p>
            <p className="text-[11px] text-porcelain/70 mt-1">
              7 Orchard Close, Sarah Doyle
            </p>
            <div className="mt-3">
              <span className="inline-block px-3 py-1 rounded-full bg-gold text-carbon text-[11px] font-semibold">
                Confirm
              </span>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 4: Lease renewal RPZ */}
      <FloatingCard
        depth={2}
        className="translate-x-28 translate-y-32"
        delay={1.2}
      >
        <div className="w-60 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
              <KeyRound className="w-4 h-4 text-gold" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-porcelain">
                Lease renewal
              </p>
              <p className="text-[10px] text-porcelain/50">Apt 4B Bishopstown</p>
            </div>
            <span className="text-[9px] font-semibold text-gold px-1.5 py-0.5 rounded bg-gold/15 border border-gold/30">
              RPZ
            </span>
          </div>
          <div className="p-4">
            <p className="text-xs text-porcelain/70 mb-2">Proposed rent</p>
            <p className="text-lg font-bold text-porcelain">&euro;1,632</p>
            <p className="text-[10px] text-gold mt-1">
              +2%, within RPZ cap
            </p>
          </div>
        </div>
      </FloatingCard>
    </>
  );
}
