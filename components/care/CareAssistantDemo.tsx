"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Signal,
  Wifi,
  Battery,
  PhoneCall,
  ShieldCheck,
  Wrench,
  CalendarClock,
} from "lucide-react";

/**
 * The money shot for the Care page: the customer-facing assistant answering a
 * real heat pump error code, branded for the installer (never for OpenHouse).
 * The visitor can tap between example codes for one interactive moment. The
 * default is the Daikin Altherma E5 exchange called for in the brief.
 *
 * INSTALLER_NAME is an illustrative example brand, not a real partner.
 * All chat content here is illustrative product UI (no statistics).
 */
const INSTALLER_NAME = "Northgate Renewables";
const INSTALLER_INITIALS = "NR";

interface Example {
  id: string;
  chip: string;
  question: string;
  answer: string;
  needsCallout: boolean;
}

const EXAMPLES: Example[] = [
  {
    id: "altherma-e5",
    chip: "Daikin Altherma · E5",
    question: "My Daikin Altherma is showing E5. What does that mean?",
    answer: `Your heat pump is the Daikin Altherma 3 R, installed by ${INSTALLER_NAME} in March 2024. E5 means the unit has detected a flow temperature sensor issue. Here is the 90-second check to see if it is a wiring connection that has come loose. If the check does not resolve it, this is something we will need to send an engineer for, and you can book a callout with us directly below.`,
    needsCallout: true,
  },
  {
    id: "ecodan-e4",
    chip: "Mitsubishi Ecodan · E4",
    question: "My Ecodan is showing E4. Is that urgent?",
    answer:
      "Your system is the Mitsubishi Ecodan, installed February 2024. E4 means low water flow, usually a closed valve or a blocked filter. Here is the 60-second check and the filmed fix for a stuck valve. Most customers resolve this one without a callout.",
    needsCallout: false,
  },
  {
    id: "solar-overnight",
    chip: "SolarEdge · No output",
    question: "My solar stopped generating overnight. Did something break?",
    answer:
      "Nothing is wrong. Your SolarEdge array stops generating after sunset and starts again at first light. Your live data shows normal output earlier today. If output stays at zero through the morning, tap below and we will take a look.",
    needsCallout: false,
  },
];

const ANNOTATIONS = [
  {
    icon: ShieldCheck,
    title: "Your name, not ours",
    body: "The customer sees your brand on every reply. Care stays invisible behind it.",
  },
  {
    icon: Wrench,
    title: "Knows what you installed",
    body: "The exact unit, the install date, and the systems specific to that home.",
  },
  {
    icon: CalendarClock,
    title: "Routes the real callouts to you",
    body: "When an engineer is genuinely needed, the customer books straight into your flow.",
  },
];

export function CareAssistantDemo() {
  const [selected, setSelected] = useState<Example>(EXAMPLES[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left: branded phone */}
      <div className="flex justify-center lg:justify-end">
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-r from-gold/15 via-gold/5 to-transparent rounded-[3rem] blur-2xl" />
          <div className="relative w-[320px] h-[660px] bg-gray-950 rounded-[3rem] border-[6px] border-gray-900 shadow-2xl overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-20 flex items-center justify-center">
              <div className="w-16 h-4 bg-gray-900 rounded-full" />
            </div>

            {/* Status bar */}
            <div className="absolute top-2 left-6 right-6 z-10 flex items-center justify-between text-[10px] text-white/60">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <Signal className="w-3 h-3" />
                <Wifi className="w-3 h-3" />
                <Battery className="w-4 h-3" />
              </div>
            </div>

            {/* Screen */}
            <div className="absolute inset-[2px] rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-zinc-900 to-black flex flex-col pt-12">
              {/* Branded header */}
              <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-amber-600 flex items-center justify-center">
                  <span className="text-carbon font-bold text-sm">
                    {INSTALLER_INITIALS}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-porcelain truncate">
                    {INSTALLER_NAME}
                  </div>
                  <div className="text-xs text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    Care assistant
                  </div>
                </div>
              </div>

              {/* Thread */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selected.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    {/* Customer question */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex justify-end"
                    >
                      <div className="max-w-[85%] px-4 py-2.5 rounded-2xl rounded-br-md bg-gold text-carbon text-[13px] leading-relaxed">
                        {selected.question}
                      </div>
                    </motion.div>

                    {/* Branded answer */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className="flex justify-start"
                    >
                      <div className="max-w-[90%] px-4 py-3 rounded-2xl rounded-bl-md bg-white/10 text-porcelain text-[13px] leading-relaxed">
                        {selected.answer}
                      </div>
                    </motion.div>

                    {/* Branded callout button */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className="pt-1"
                    >
                      <div className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-gold to-amber-500 text-carbon text-[13px] font-semibold">
                        <PhoneCall className="w-4 h-4" />
                        {selected.needsCallout
                          ? `Book a callout with ${INSTALLER_NAME}`
                          : `Still need us? Book with ${INSTALLER_NAME}`}
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Disabled input bar */}
              <div className="p-4 border-t border-white/10">
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 rounded-xl">
                  <span className="flex-1 text-[13px] text-hint">
                    Ask about your system...
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-gold"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full" />
          </div>
        </div>
      </div>

      {/* Right: example switcher + annotations */}
      <div className="max-w-md mx-auto lg:mx-0">
        <p className="text-sm uppercase tracking-[0.3em] text-gold font-semibold mb-4">
          Try an example
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {EXAMPLES.map((ex) => {
            const active = ex.id === selected.id;
            return (
              <button
                key={ex.id}
                type="button"
                onClick={() => setSelected(ex)}
                aria-pressed={active}
                className={`min-h-[48px] px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 ${
                  active
                    ? "bg-gold/20 text-gold border-gold/40"
                    : "bg-white/[0.03] text-porcelain border-white/10 hover:border-gold/30 hover:bg-white/[0.06]"
                }`}
              >
                {ex.chip}
              </button>
            );
          })}
        </div>

        <div className="space-y-4">
          {ANNOTATIONS.map((a) => (
            <div key={a.title} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                <a.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-porcelain font-medium mb-1">{a.title}</p>
                <p className="text-sm text-porcelain/60 leading-relaxed">
                  {a.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
