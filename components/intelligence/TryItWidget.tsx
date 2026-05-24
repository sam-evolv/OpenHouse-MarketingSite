"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, ArrowUp, Link2, CornerDownLeft } from "lucide-react";

/* ────────────────────────────────────────────────────────────
   The Intelligence try-it widget. The spine of the page.

   Pre-built front-end responses, a thinking state, motion-safe
   typewriter streaming, real-looking source citation chips, three
   tap-to-fill example prompts, an ask-a-follow-up suggestion.
   Keyboard accessible, aria-live, no sign-up.
   ──────────────────────────────────────────────────────────── */

interface Answer {
  text: string;
  sources: string[];
  followUp: string;
}

const PROMPTS = [
  "What's our projected revenue this month?",
  "Does Riverside Gardens comply with Part F?",
  "Which units have missing fire safety certs?",
] as const;

const REVENUE: Answer = {
  text: "Your three active developments are projected to close €1.84m this month, based on 9 sale agreed contracts ready to sign. Riverside Gardens is the biggest contributor at €910k.",
  sources: ["Riverside Gardens pipeline", "Meadow View pipeline", "Sale agreed contracts, March 2026"],
  followUp: "Which contracts are closing this week?",
};

const PART_F: Answer = {
  text: "Yes. Riverside Gardens and Meadow View both meet Part F ventilation requirements. For Orchard Close, the assessment is still outstanding from your M&E engineer, last contacted 14 days ago.",
  sources: ["Compliance log, March 2026", "Building Regulations Part F", "Orchard Close M&E file"],
  followUp: "Draft a reminder to the M&E engineer?",
};

const FIRE: Answer = {
  text: "Three units, all in Orchard Close: units 4, 7, and 11. Every other unit across your three schemes has its fire safety cert on file. 158 units are sale agreed in total.",
  sources: ["Compliance tracker", "Orchard Close unit register", "Fire safety certificates"],
  followUp: "Show me the Orchard Close compliance timeline.",
};

const FALLBACK: Answer = {
  text: "I answer from the data in your Developer Dashboard, your pipeline, compliance documents, and resident questions. This preview is loaded with three example questions. Tap one above and I will show you a sourced answer.",
  sources: [],
  followUp: PROMPTS[0],
};

function matchAnswer(q: string): Answer {
  const s = q.toLowerCase();
  if (/(revenue|projected|close|forecast|€|sale agreed)/.test(s)) return REVENUE;
  if (/(part f|comply|complies|compliance|ventilation)/.test(s)) return PART_F;
  if (/(fire|cert|safety)/.test(s)) return FIRE;
  return FALLBACK;
}

type Status = "idle" | "thinking" | "answering" | "done";

export function TryItWidget() {
  const reduce = useReducedMotion();
  const [input, setInput] = useState("");
  const [asked, setAsked] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [shown, setShown] = useState("");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const ask = useCallback(
    (question: string) => {
      const q = question.trim();
      if (!q) return;
      clearTimers();
      const a = matchAnswer(q);
      setAsked(q);
      setAnswer(a);
      setShown("");
      setStatus("thinking");

      timers.current.push(
        setTimeout(() => {
          setStatus("answering");
          if (reduce) {
            setShown(a.text);
            setStatus("done");
            return;
          }
          const len = a.text.length;
          for (let i = 0; i < len; i++) {
            timers.current.push(
              setTimeout(() => {
                setShown(a.text.slice(0, i + 1));
                if (i === len - 1) setStatus("done");
              }, i * 14)
            );
          }
        }, 750)
      );
    },
    [clearTimers, reduce]
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    ask(input);
  };

  const onPill = (p: string) => {
    setInput(p);
    ask(p);
  };

  const busy = status === "thinking" || status === "answering";

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="overflow-hidden rounded-2xl border border-gold/20 bg-slate/80 shadow-[0_8px_40px_rgba(0,0,0,0.4)] backdrop-blur-md">
        {/* Console header */}
        <div className="flex items-center gap-2.5 border-b border-white/10 px-4 py-3 sm:px-5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gold/15">
            <Sparkles className="h-4 w-4 text-gold" />
          </span>
          <span className="text-sm font-semibold text-porcelain">
            OpenHouse Intelligence
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live preview
          </span>
        </div>

        <div className="p-4 sm:p-5">
          {/* Suggested prompt pills */}
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-hint">
            Try one of these
          </p>
          <div className="mb-4 flex flex-wrap gap-2">
            {PROMPTS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => onPill(p)}
                className="inline-flex min-h-[44px] items-center rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-left text-[13px] font-medium text-porcelain transition-all duration-200 hover:border-gold/40 hover:bg-gold/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={onSubmit} className="relative">
            <label htmlFor="intelligence-ask" className="sr-only">
              Ask Intelligence a question about your developments
            </label>
            <input
              id="intelligence-ask"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about your developments..."
              autoComplete="off"
              className="h-12 w-full rounded-xl border border-white/10 bg-carbon/60 pl-4 pr-14 text-[15px] text-porcelain placeholder:text-hint/70 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20"
            />
            <button
              type="submit"
              aria-label="Ask Intelligence"
              disabled={busy || !input.trim()}
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-amber-500 text-carbon transition-all duration-200 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
            >
              <ArrowUp className="h-4.5 w-4.5" strokeWidth={2.5} />
            </button>
          </form>

          {/* Response area */}
          <div
            role="status"
            aria-live="polite"
            className="mt-4 min-h-[120px] rounded-xl border border-white/[0.07] bg-carbon/40 p-4"
          >
            {status === "idle" && (
              <p className="flex h-full items-center justify-center py-6 text-center text-sm text-hint">
                Tap a question above, or type your own, to see Intelligence
                answer with its sources.
              </p>
            )}

            {status !== "idle" && (
              <div>
                {/* Echoed question */}
                <div className="mb-3 flex justify-end">
                  <span className="max-w-[85%] rounded-2xl rounded-br-md bg-gold/15 px-3.5 py-2 text-[13px] font-medium text-porcelain ring-1 ring-gold/25">
                    {asked}
                  </span>
                </div>

                {/* Thinking */}
                {status === "thinking" && (
                  <div className="flex items-center gap-2 text-sm text-hint">
                    <Sparkles className="h-4 w-4 animate-pulse text-gold" />
                    <span>Reading your data</span>
                    <span className="flex gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold/70 [animation-delay:-0.3s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold/70 [animation-delay:-0.15s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold/70" />
                    </span>
                  </div>
                )}

                {/* Answer */}
                {(status === "answering" || status === "done") && answer && (
                  <div className="flex gap-3">
                    <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gold/15">
                      <Sparkles className="h-4 w-4 text-gold" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[15px] leading-relaxed text-porcelain">
                        {shown}
                        {status === "answering" && (
                          <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-gold" />
                        )}
                      </p>

                      {/* Sources */}
                      {status === "done" && answer.sources.length > 0 && (
                        <motion.div
                          initial={reduce ? false : { opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3"
                        >
                          <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-hint">
                            <Link2 className="h-3 w-3" />
                            Sources
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {answer.sources.map((s) => (
                              <span
                                key={s}
                                className="inline-flex items-center rounded-full border border-gold/25 bg-gold/[0.08] px-2.5 py-1 text-[11px] font-medium text-gold/90"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {/* Ask a follow-up */}
                      {status === "done" && (
                        <motion.div
                          initial={reduce ? false : { opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.15 }}
                          className="mt-3 border-t border-white/[0.07] pt-3"
                        >
                          <p className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-hint">
                            Ask a follow-up
                          </p>
                          <button
                            type="button"
                            onClick={() => onPill(answer.followUp)}
                            className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-left text-[13px] text-porcelain/90 transition-all duration-200 hover:border-gold/40 hover:bg-gold/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
                          >
                            <CornerDownLeft className="h-3.5 w-3.5 flex-shrink-0 text-gold" />
                            {answer.followUp}
                          </button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
