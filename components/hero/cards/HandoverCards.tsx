"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  FolderOpen,
  QrCode,
  Bell,
  Play,
} from "lucide-react";
import { FloatingCard } from "../ModuleHero";

const docs = [
  "BER cert",
  "Floor plan",
  "Kitchen warranty",
  "Heat pump manual",
  "Solar PV warranty",
];

export function HandoverFloatingCards() {
  return (
    <>
      {/* Card 1: Resident chat with assistant */}
      <FloatingCard
        depth={1}
        className="lg:-translate-x-20 lg:-translate-y-24"
        delay={0.6}
      >
        <div className="w-80 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-gold" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-porcelain">
                Your home assistant
              </p>
              <p className="text-[10px] text-gold flex items-center gap-1">
                <motion.span
                  className="w-1.5 h-1.5 bg-gold rounded-full"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                AI online
              </p>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex justify-end">
              <div className="bg-gold/15 rounded-2xl rounded-br-md px-3 py-2 max-w-[80%]">
                <p className="font-serif italic text-[13px] text-porcelain">
                  How do I top up my heat pump pressure?
                </p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white/10 rounded-2xl rounded-bl-md px-3 py-2 max-w-[85%]">
                <p className="text-[12px] text-porcelain leading-relaxed">
                  Your unit&rsquo;s heat pump is the Daikin Altherma 3 R in the utility room. Here&rsquo;s the 60-second top-up walkthrough.
                </p>
                <div className="mt-2 flex items-center gap-1.5 px-2 py-1 rounded-md bg-gold/10 border border-gold/30 w-fit">
                  <Play className="w-2.5 h-2.5 text-gold fill-gold" />
                  <span className="text-[10px] font-medium text-gold">
                    Watch video
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Card 2: Your home, documents */}
      <FloatingCard
        depth={2}
        className="lg:translate-x-20 lg:-translate-y-4"
        delay={0.8}
      >
        <div className="w-64 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
              <FolderOpen className="w-4 h-4 text-gold" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-porcelain">
                Your home, documents
              </p>
              <p className="text-[10px] text-porcelain/50">All in one place</p>
            </div>
          </div>
          <div className="p-4 space-y-1.5">
            {docs.map((d) => (
              <div key={d} className="flex items-center gap-2">
                <div className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                <span className="text-[12px] text-porcelain/80 truncate">
                  {d}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FloatingCard>

      {/* Card 3: QR setup */}
      <FloatingCard
        depth={3}
        className="lg:-translate-x-28 lg:translate-y-28"
        delay={1.0}
      >
        <div className="w-60 bg-gradient-to-br from-gold/20 to-gold/5 backdrop-blur-md rounded-2xl border border-gold/30 shadow-2xl overflow-hidden">
          <div className="p-4 text-center">
            <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-gold/20 border border-gold/30 flex items-center justify-center">
              <QrCode className="w-7 h-7 text-gold" />
            </div>
            <p className="text-sm font-semibold text-porcelain">
              Scan to set up your home
            </p>
            <p className="text-[11px] text-porcelain/65 mt-1 leading-relaxed">
              Issued at handover. Tap once, your phone is linked.
            </p>
          </div>
        </div>
      </FloatingCard>

      {/* Card 4: Service reminder (peeking) */}
      <FloatingCard
        depth={2}
        className="lg:translate-x-28 lg:translate-y-32"
        delay={1.2}
      >
        <div className="w-64 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
              <Bell className="w-4 h-4 text-gold" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-porcelain">Reminder</p>
              <p className="text-[10px] text-porcelain/50">From your home</p>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm font-semibold text-porcelain mb-1">
              Heat pump service due
            </p>
            <p className="text-[12px] text-porcelain/70 leading-relaxed">
              The annual service is due next month. We&rsquo;ve drafted an email to your installer.
            </p>
          </div>
        </div>
      </FloatingCard>
    </>
  );
}
