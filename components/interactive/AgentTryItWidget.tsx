"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  Mail,
  BarChart3,
  KeyRound,
  CheckCheck,
  Pencil,
  Trash2,
  Sparkles,
} from "lucide-react";

type DraftKind = "email" | "report" | "renewal";

interface Prompt {
  id: string;
  label: string;
  kind: DraftKind;
  icon: typeof Mail;
}

const prompts: Prompt[] = [
  {
    id: "viewing",
    label: "Email Sarah Doyle to confirm Saturday's viewing",
    kind: "email",
    icon: Mail,
  },
  {
    id: "pipeline",
    label: "Pull this week's pipeline for Ardenhall Homes",
    kind: "report",
    icon: BarChart3,
  },
  {
    id: "renewal",
    label: "Renew the lease at 4B Bishopstown with the RPZ cap",
    kind: "renewal",
    icon: KeyRound,
  },
];

interface DraftBlock {
  heading: string;
  meta: string;
  body: string[];
  footer?: { label: string; value: string }[];
}

const drafts: Record<DraftKind, DraftBlock> = {
  email: {
    heading: "Confirming Saturday's viewing",
    meta: "To Sarah Doyle, 7 Orchard Close",
    body: [
      "Hi Sarah, just confirming your viewing of 7 Orchard Close this Saturday at 11:00.",
      "Parking is on the verge across the road. I'll meet you at the front door. The full information pack is attached for a read in advance.",
      "Reply to this email or text me on 087 123 4567 if anything changes.",
    ],
  },
  report: {
    heading: "Weekly pipeline, Ardenhall Homes",
    meta: "Period: Mon 11 to Sun 17 May, 2026",
    body: [
      "Across the three live schemes, 14 new enquiries, 9 viewings booked, 4 reservations.",
      "Highest velocity remains Block C in Ashbrook with 6 reservations to date. Block A is slowing, two units back on the market this week.",
      "Three solicitor queries outstanding. Drafted follow-ups in the queue for your approval.",
    ],
    footer: [
      { label: "Enquiries", value: "14" },
      { label: "Viewings", value: "9" },
      { label: "Reservations", value: "4" },
    ],
  },
  renewal: {
    heading: "Lease renewal at 4B Bishopstown",
    meta: "Within RPZ cap, +2.0% on existing rent",
    body: [
      "Hi James, your fixed term ends on 30 June. I'd like to offer you a renewal for a further 12 months.",
      "The proposed monthly rent is €1,632, an increase of 2% on your current rent of €1,600. This is within the Rent Pressure Zone cap and reflects inflation over the past 12 months.",
      "Reply with a yes and I'll send the updated tenancy agreement for signing through the portal.",
    ],
    footer: [
      { label: "Current", value: "€1,600" },
      { label: "Proposed", value: "€1,632" },
      { label: "RPZ status", value: "Compliant" },
    ],
  },
};

export function AgentTryItWidget() {
  const [active, setActive] = useState<DraftKind | null>(null);
  const [typedPrompt, setTypedPrompt] = useState("");
  const [shimmering, setShimmering] = useState(false);
  const [submittedLabel, setSubmittedLabel] = useState<string | null>(null);
  const draftRef = useRef<HTMLDivElement>(null);

  const handleSelect = (prompt: Prompt) => {
    setShimmering(true);
    setSubmittedLabel(prompt.label);
    setActive(prompt.kind);
    setTimeout(() => setShimmering(false), 900);
  };

  const handleTypedSubmit = () => {
    if (!typedPrompt.trim()) return;
    const lower = typedPrompt.toLowerCase();
    let kind: DraftKind = "email";
    if (lower.includes("pipeline") || lower.includes("report")) {
      kind = "report";
    } else if (
      lower.includes("renew") ||
      lower.includes("lease") ||
      lower.includes("rpz")
    ) {
      kind = "renewal";
    }
    setShimmering(true);
    setSubmittedLabel(typedPrompt.trim());
    setActive(kind);
    setTimeout(() => setShimmering(false), 900);
  };

  useEffect(() => {
    if (active && draftRef.current) {
      // Move focus to the drawer so screen readers announce it.
      draftRef.current.focus();
    }
  }, [active]);

  const draft = active ? drafts[active] : null;

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-amber-500/5 to-gold/20 rounded-3xl blur-2xl" aria-hidden="true" />
      <div className="relative rounded-3xl border border-white/10 bg-neutral-900/90 backdrop-blur-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          {/* Left: voice input */}
          <div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-4">
              Step 1, give it a prompt
            </p>

            {/* Mic button */}
            <div className="flex flex-col items-center mb-6">
              <button
                type="button"
                onClick={() => handleSelect(prompts[0])}
                aria-label="Tap to give Agent a voice prompt. This is a marketing demo, no microphone is recorded."
                className="group relative w-[88px] h-[88px] rounded-full bg-gold text-carbon flex items-center justify-center transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-900 motion-safe:hover:shadow-[0_0_40px_rgba(212,175,55,0.55)]"
              >
                <motion.span
                  className="absolute inset-0 rounded-full bg-gold/30"
                  animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.4, repeat: Infinity }}
                  aria-hidden="true"
                />
                <Mic className="w-9 h-9 relative" strokeWidth={2.2} />
              </button>
              <p className="text-[13px] text-porcelain/60 mt-3 text-center">
                Hold and speak, or tap a prompt below.
              </p>
            </div>

            {/* Prompt pills */}
            <div className="space-y-3" role="list">
              {prompts.map((p) => {
                const isActive = submittedLabel === p.label;
                return (
                  <button
                    key={p.id}
                    type="button"
                    role="listitem"
                    onClick={() => handleSelect(p)}
                    className={`group w-full min-h-[48px] flex items-center gap-3 px-4 py-3 rounded-2xl border text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                      isActive
                        ? "border-gold/60 bg-gold/10"
                        : "border-white/10 bg-white/[0.03] hover:border-gold/40 hover:bg-gold/[0.06]"
                    }`}
                  >
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive
                          ? "bg-gold/20 text-gold"
                          : "bg-white/5 text-porcelain/60 group-hover:text-gold"
                      }`}
                    >
                      <p.icon className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <span className="text-[15px] text-porcelain leading-snug">
                      {p.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Typed fallback */}
            <div className="mt-6">
              <label
                htmlFor="agent-try-input"
                className="text-xs uppercase tracking-[0.2em] text-porcelain/50 font-semibold"
              >
                Or type a prompt
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  id="agent-try-input"
                  type="text"
                  value={typedPrompt}
                  onChange={(e) => setTypedPrompt(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleTypedSubmit();
                    }
                  }}
                  placeholder="Try, send John the warranty cert for unit 3"
                  className="flex-1 min-h-[48px] px-4 rounded-xl bg-black/40 border border-white/10 text-porcelain placeholder:text-porcelain/30 text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                />
                <button
                  type="button"
                  onClick={handleTypedSubmit}
                  className="min-h-[48px] px-5 rounded-xl bg-gold text-carbon text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 hover:scale-[1.02] transition-transform"
                >
                  Run
                </button>
              </div>
            </div>
          </div>

          {/* Right: draft drawer */}
          <div
            ref={draftRef}
            tabIndex={-1}
            aria-live="polite"
            aria-atomic="true"
            className="p-6 sm:p-8 min-h-[420px] focus:outline-none"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-4">
              Step 2, review the draft
            </p>

            <AnimatePresence mode="wait">
              {!draft ? (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-[340px] rounded-2xl border border-dashed border-white/15 flex flex-col items-center justify-center text-center px-6"
                >
                  <Sparkles className="w-7 h-7 text-gold/70 mb-3" aria-hidden="true" />
                  <p className="text-porcelain/80 text-[16px] font-medium">
                    Tap a prompt to see what Agent drafts.
                  </p>
                  <p className="text-porcelain/50 text-sm mt-2 max-w-xs">
                    Nothing sends. You see the same review drawer agents see in the app.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={active ?? "draft"}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className={`relative rounded-2xl border border-gold/30 bg-black/40 p-5 ${shimmering ? "agent-shimmer" : ""}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-gold font-semibold mb-1">
                        Draft ready
                      </p>
                      <p className="text-base font-semibold text-porcelain leading-snug">
                        {draft.heading}
                      </p>
                      <p className="text-xs text-porcelain/50 mt-1">
                        {draft.meta}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {draft.body.map((paragraph, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + i * 0.15, duration: 0.4 }}
                        className="text-[15px] text-porcelain/85 leading-relaxed"
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>

                  {draft.footer && (
                    <div className="mt-4 grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
                      {draft.footer.map((row) => (
                        <div key={row.label}>
                          <p className="text-[10px] uppercase tracking-wider text-porcelain/40">
                            {row.label}
                          </p>
                          <p className="text-sm font-semibold text-porcelain mt-1">
                            {row.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 min-h-[48px] px-5 rounded-full bg-gold text-carbon text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 hover:scale-[1.02] transition-transform"
                    >
                      <CheckCheck className="w-4 h-4" aria-hidden="true" />
                      Approve
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 min-h-[48px] px-5 rounded-full border border-white/15 text-sm text-porcelain hover:border-gold/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      <Pencil className="w-4 h-4" aria-hidden="true" />
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setActive(null);
                        setSubmittedLabel(null);
                      }}
                      className="inline-flex items-center gap-2 min-h-[48px] px-5 rounded-full border border-white/10 text-sm text-porcelain/70 hover:text-porcelain hover:border-white/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      <Trash2 className="w-4 h-4" aria-hidden="true" />
                      Discard
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx>{`
        .agent-shimmer {
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(212, 175, 55, 0.12) 50%,
            rgba(0, 0, 0, 0.3) 100%
          );
          background-size: 200% 100%;
          animation: agent-shimmer 0.9s ease-out;
        }
        @keyframes agent-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .agent-shimmer { animation: none; }
        }
      `}</style>
    </div>
  );
}
