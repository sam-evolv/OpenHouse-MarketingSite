"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Send,
  TrendingUp,
  ShieldCheck,
  FlameKindling,
  ChevronRight,
  CornerDownLeft,
} from "lucide-react";

type AnswerKey = "revenue" | "partF" | "fireSafety";

interface Prompt {
  id: AnswerKey;
  label: string;
  icon: typeof TrendingUp;
}

const prompts: Prompt[] = [
  {
    id: "revenue",
    label: "What's our projected revenue this month?",
    icon: TrendingUp,
  },
  {
    id: "partF",
    label: "Does Riverside Gardens comply with Part F?",
    icon: ShieldCheck,
  },
  {
    id: "fireSafety",
    label: "Which units have missing fire safety certs?",
    icon: FlameKindling,
  },
];

interface Answer {
  question: string;
  paragraphs: string[];
  sources: string[];
  followUp: string;
}

const answers: Record<AnswerKey, Answer> = {
  revenue: {
    question: "What's our projected revenue this month?",
    paragraphs: [
      "Your three active developments are projected to close €1.84m this month, based on nine sale-agreed contracts ready to sign.",
      "Riverside Gardens is the biggest contributor at €910k across four units. Meadow View adds €580k across three units. Orchard Close has two units at €350k combined, both pending solicitor sign-off.",
    ],
    sources: [
      "Pipeline, all schemes",
      "Sale-agreed log, March 2026",
      "Riverside Gardens unit list",
    ],
    followUp: "Show me the four Riverside Gardens contracts.",
  },
  partF: {
    question: "Does Riverside Gardens comply with Part F?",
    paragraphs: [
      "Yes. Riverside Gardens has the Part F ventilation compliance assessment filed for all 47 units, dated 18 February 2026, signed by the M&E engineer on record.",
      "The dwelling ventilation rate for the unit type matches the minimum required under Part F Table 1.1. A copy of the compliance certificate sits in each unit's handover pack.",
    ],
    sources: [
      "Compliance log, Riverside Gardens",
      "Part F, Technical Guidance Document",
      "M&E engineer cert, Feb 2026",
    ],
    followUp: "How does Meadow View compare on Part F?",
  },
  fireSafety: {
    question: "Which units have missing fire safety certs?",
    paragraphs: [
      "Three units are outstanding, all in Orchard Close. Units 12, 14, and 17.",
      "The fire safety certifier last responded 14 days ago, saying they were waiting on the as-built drawings for the ground-floor partition revision. Those drawings were filed in the Build module on 6 March.",
    ],
    sources: [
      "Compliance status, Orchard Close",
      "Email thread with fire safety certifier",
      "Build module, as-built drawings",
    ],
    followUp: "Draft a chase to the certifier with the drawings attached.",
  },
};

type WidgetState = "idle" | "thinking" | "answering";

export function IntelligenceTryItWidget() {
  const [state, setState] = useState<WidgetState>("idle");
  const [activeKey, setActiveKey] = useState<AnswerKey | null>(null);
  const [typed, setTyped] = useState("");
  const [visibleParagraphs, setVisibleParagraphs] = useState(0);
  const [showSources, setShowSources] = useState(false);
  const [showFollowUp, setShowFollowUp] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const responseRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (key: AnswerKey) => {
    setActiveKey(key);
    setState("thinking");
    setVisibleParagraphs(0);
    setShowSources(false);
    setShowFollowUp(false);

    setTimeout(() => {
      setState("answering");
      const answer = answers[key];
      // Reveal paragraphs one at a time.
      answer.paragraphs.forEach((_, i) => {
        setTimeout(() => setVisibleParagraphs(i + 1), 350 + i * 700);
      });
      setTimeout(
        () => setShowSources(true),
        350 + answer.paragraphs.length * 700 + 200
      );
      setTimeout(
        () => setShowFollowUp(true),
        350 + answer.paragraphs.length * 700 + 600
      );
    }, 850);
  };

  const handlePillClick = (p: Prompt) => {
    setTyped(p.label);
    handleSubmit(p.id);
  };

  const handleTypedSubmit = () => {
    const v = typed.trim().toLowerCase();
    if (!v) return;
    let key: AnswerKey = "revenue";
    if (v.includes("part f") || v.includes("ventilation") || v.includes("comply")) {
      key = "partF";
    } else if (v.includes("fire") || v.includes("cert") || v.includes("missing")) {
      key = "fireSafety";
    }
    handleSubmit(key);
  };

  useEffect(() => {
    if (state === "answering" && responseRef.current) {
      responseRef.current.focus();
    }
  }, [state]);

  const active = activeKey ? answers[activeKey] : null;

  return (
    <div className="relative">
      <div
        className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 via-purple-500/5 to-violet-500/20 rounded-3xl blur-2xl"
        aria-hidden="true"
      />
      <div className="relative rounded-3xl border border-white/10 bg-neutral-900/90 backdrop-blur-xl overflow-hidden">
        {/* Top bar mimicking a real product */}
        <div className="flex items-center gap-3 px-5 sm:px-7 py-4 border-b border-white/5">
          <div className="w-8 h-8 rounded-lg bg-violet-500/15 border border-violet-400/30 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-violet-300" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-porcelain">
              OpenHouse Intelligence
            </p>
            <p className="text-[11px] text-porcelain/45">
              Ask anything about your developments
            </p>
          </div>
          <span className="text-[11px] uppercase tracking-wider text-porcelain/40">
            Example data
          </span>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-7 space-y-5">
          {/* Suggested prompts */}
          {state === "idle" && (
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-porcelain/45 font-semibold mb-3">
                Suggested questions
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {prompts.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handlePillClick(p)}
                    className="group flex items-start gap-2.5 min-h-[48px] px-3.5 py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:border-violet-400/40 hover:bg-violet-500/[0.06] text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                  >
                    <span className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-violet-500/15 flex items-center justify-center flex-shrink-0 transition-colors">
                      <p.icon
                        className="w-3.5 h-3.5 text-porcelain/70 group-hover:text-violet-300 transition-colors"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="text-[13px] text-porcelain/85 leading-snug">
                      {p.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Active question + response */}
          {state !== "idle" && active && (
            <div
              ref={responseRef}
              tabIndex={-1}
              aria-live="polite"
              aria-atomic="false"
              className="focus:outline-none space-y-5"
            >
              {/* Echoed question */}
              <div className="flex justify-end">
                <div className="bg-violet-500/15 rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[85%]">
                  <p className="text-[14px] text-porcelain leading-relaxed">
                    {active.question}
                  </p>
                </div>
              </div>

              {/* Thinking state */}
              <AnimatePresence>
                {state === "thinking" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 px-4"
                  >
                    <div className="w-7 h-7 rounded-lg bg-violet-500/15 border border-violet-400/30 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-violet-300" aria-hidden="true" />
                    </div>
                    <div className="flex items-center gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="w-1.5 h-1.5 bg-violet-500/70 rounded-full"
                          animate={{ y: [0, -3, 0], opacity: [0.5, 1, 0.5] }}
                          transition={{
                            duration: 0.9,
                            repeat: Infinity,
                            delay: i * 0.15,
                          }}
                        />
                      ))}
                      <span className="text-[12px] text-porcelain/55 ml-2">
                        Pulling sources
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Answer */}
              {state === "answering" && (
                <div className="rounded-2xl border border-violet-400/30 bg-black/40 p-5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-violet-500/15 border border-violet-400/30 flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5 text-violet-300" aria-hidden="true" />
                    </div>
                    <p className="text-[11px] uppercase tracking-wider text-violet-300 font-semibold">
                      Intelligence
                    </p>
                  </div>

                  <div className="space-y-3">
                    {active.paragraphs.map((p, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{
                          opacity: visibleParagraphs > i ? 1 : 0,
                          y: visibleParagraphs > i ? 0 : 6,
                        }}
                        transition={{ duration: 0.4 }}
                        className="text-[15px] text-porcelain/85 leading-relaxed"
                      >
                        {p}
                      </motion.p>
                    ))}
                  </div>

                  {/* Sources */}
                  <AnimatePresence>
                    {showSources && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-5 pt-4 border-t border-white/5"
                      >
                        <p className="text-[10px] uppercase tracking-wider text-porcelain/45 font-semibold mb-2">
                          Sources
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {active.sources.map((s) => (
                            <span
                              key={s}
                              className="text-[11px] px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-400/30"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Follow-up suggestion */}
                  <AnimatePresence>
                    {showFollowUp && (
                      <motion.button
                        type="button"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={() => {
                          // Reset to idle to invite another question
                          setState("idle");
                          setActiveKey(null);
                          setTyped("");
                          setVisibleParagraphs(0);
                          setShowSources(false);
                          setShowFollowUp(false);
                          setTimeout(() => inputRef.current?.focus(), 100);
                        }}
                        className="mt-4 group inline-flex items-center gap-2 text-[13px] text-porcelain/65 hover:text-violet-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded"
                      >
                        <span>Ask a follow-up,</span>
                        <span className="text-porcelain group-hover:text-violet-300 transition-colors">
                          &ldquo;{active.followUp}&rdquo;
                        </span>
                        <ChevronRight
                          className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          )}

          {/* Input row */}
          <div className="pt-2">
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-black/40 border border-white/10 focus-within:border-violet-400/40 transition-colors">
              <Sparkles className="w-4 h-4 text-porcelain/40 flex-shrink-0" aria-hidden="true" />
              <input
                ref={inputRef}
                type="text"
                value={typed}
                onChange={(e) => setTyped(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleTypedSubmit();
                  }
                }}
                placeholder="Ask anything about your developments..."
                aria-label="Ask Intelligence a question"
                className="flex-1 bg-transparent text-porcelain placeholder:text-porcelain/30 text-[15px] py-2.5 focus:outline-none"
              />
              <button
                type="button"
                onClick={handleTypedSubmit}
                aria-label="Send question"
                className="w-9 h-9 rounded-xl bg-violet-500 flex items-center justify-center hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
              >
                <Send className="w-4 h-4 text-carbon" aria-hidden="true" />
              </button>
            </div>
            <p className="text-[11px] text-porcelain/40 mt-2 flex items-center gap-1.5">
              <CornerDownLeft className="w-3 h-3" aria-hidden="true" />
              Press enter to ask. Pre-built responses on this demo page, no sign-up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
