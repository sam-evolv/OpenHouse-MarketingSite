"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Check,
  X,
  MessageCircle,
  AlertTriangle,
  Clock,
  Building2,
  ArrowRight,
  BookOpen,
  Layers,
} from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { EASE } from "@/lib/motion";

/**
 * HomeRecordTrace — the product, end to end, in one interaction.
 *
 * Four steps: the evidence a developer already has becomes a home record;
 * a homeowner gets a sourced answer; a question the record cannot answer
 * is refused and escalated instead of guessed; the developer sees that gap
 * aggregated across homes and fixes it for every future home.
 *
 * Everything here is an illustrative walkthrough and is labelled as such.
 * All panels are server-rendered (step 1 visible by default); switching
 * steps is a client enhancement. DOM only, reduced-motion safe.
 */

const STEPS = [
  { key: "record", n: 1, label: "The record" },
  { key: "answer", n: 2, label: "A sourced answer" },
  { key: "gap", n: 3, label: "A missing answer" },
  { key: "loop", n: 4, label: "What the developer sees" },
] as const;

type StepKey = (typeof STEPS)[number]["key"];

function ExampleTag({ label = "Example" }: { label?: string }) {
  return (
    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider text-porcelain/60 border border-white/15 bg-white/5 whitespace-nowrap">
      {label}
      <span className="sr-only"> illustrative data, not a real home</span>
    </span>
  );
}

/* The opened source: the heating design row a sourced answer cites. */
function DesignExcerpt() {
  const rows = [
    { k: "Heat source", v: "Daikin Altherma 3, air to water" },
    { k: "Emitters", v: "Underfloor, ground floor; radiators upstairs" },
    { k: "Design flow temperature", v: "35°C at -3°C outside", hit: true },
    { k: "Hot water", v: "200L cylinder, reheat 14:00" },
  ];
  return (
    <div className="rounded-lg border border-white/10 bg-[#101010] overflow-hidden">
      <div className="px-3 py-2 border-b border-white/10 flex items-center justify-between gap-2">
        <p className="font-mono text-[10px] tracking-wide text-porcelain/70 truncate">
          House type B · Heating design summary · p.2
        </p>
        <ExampleTag label="Example document" />
      </div>
      <div className="p-3 space-y-1">
        {rows.map((r) => (
          <div
            key={r.k}
            className={`grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-2 items-baseline rounded px-2 py-1.5 ${
              r.hit ? "bg-gold/10 border border-gold/30" : ""
            }`}
          >
            <span className={`text-[11px] ${r.hit ? "text-gold font-semibold" : "text-porcelain/60"}`}>
              {r.k}
            </span>
            <span className={`text-[11px] ${r.hit ? "text-porcelain" : "text-porcelain/60"}`}>
              {r.v}
            </span>
          </div>
        ))}
        <p className="px-2 pt-1 text-[10px] text-porcelain/45">
          The answer came from this row. Nothing was generated without it.
        </p>
      </div>
    </div>
  );
}

const DOCS = [
  "Heat pump manual · Daikin Altherma 3",
  "Ventilation commissioning certificate",
  "BER certificate and advisory report",
  "Floor plans and services layouts",
  "Appliance list and warranties",
];

export function HomeRecordTrace() {
  const reduced = usePrefersReducedMotion();
  const [step, setStep] = useState<StepKey>("record");
  const [sourceOpen, setSourceOpen] = useState(false);
  const sourceOpener = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const openSource = (e: React.MouseEvent<HTMLButtonElement>) => {
    sourceOpener.current = e.currentTarget;
    setSourceOpen(true);
  };
  const closeSource = () => {
    setSourceOpen(false);
    sourceOpener.current?.focus();
  };

  // Dialog semantics for the source overlay: focus moves to the close
  // button on open, Escape closes and focus returns to the opening chip.
  useEffect(() => {
    if (!sourceOpen) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSource();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sourceOpen]);

  const fade = (active: boolean) =>
    reduced
      ? { opacity: active ? 1 : 0 }
      : undefined;

  return (
    <div className="rounded-3xl border border-white/10 bg-neutral-900/80 backdrop-blur-xl overflow-hidden">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-7 py-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center">
            <Layers className="w-4.5 h-4.5 w-[18px] h-[18px] text-gold" aria-hidden="true" />
          </span>
          <div>
            <p className="text-[15px] font-semibold text-white leading-tight">
              One home record, end to end
            </p>
            <p className="text-[12px] text-porcelain/55">
              From the developer&rsquo;s pack to a sourced answer, and back.
            </p>
          </div>
        </div>
        <ExampleTag label="Illustrative walkthrough · Example data" />
      </div>

      {/* Step tabs */}
      <div
        role="tablist"
        aria-label="Walk through the home record"
        className="flex gap-2 px-5 sm:px-7 pt-4 pb-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {STEPS.map((s) => {
          const active = s.key === step;
          return (
            <button
              key={s.key}
              role="tab"
              aria-selected={active}
              aria-controls={`trace-panel-${s.key}`}
              id={`trace-tab-${s.key}`}
              onClick={() => {
                setStep(s.key);
                setSourceOpen(false);
              }}
              className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 ${
                active
                  ? "bg-gold/15 border-gold/40 text-gold"
                  : "bg-white/[0.03] border-white/10 text-porcelain/60 hover:text-porcelain hover:border-white/25"
              }`}
            >
              <span
                className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[11px] font-semibold ${
                  active ? "bg-gold/20 text-gold" : "bg-white/5 text-porcelain/50"
                }`}
                aria-hidden="true"
              >
                {s.n}
              </span>
              {s.label}
            </button>
          );
        })}
      </div>

      {/* Panels — stacked in one grid cell so the tallest sets the height
          and switching steps never reflows the page. */}
      <div className="relative grid px-5 sm:px-7 py-5 sm:py-6">
        {/* 1 — The record */}
        <motion.div
          id="trace-panel-record"
          role="tabpanel"
          aria-labelledby="trace-tab-record"
          className="col-start-1 row-start-1"
          style={{ pointerEvents: step === "record" ? "auto" : "none" }}
          initial={false}
          animate={{ opacity: step === "record" ? 1 : 0 }}
          transition={{ duration: reduced ? 0 : 0.3, ease: EASE }}
          aria-hidden={step !== "record"}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-5 items-start">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2 mb-3">
                <p className="text-[12px] font-semibold text-porcelain/80 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-gold" aria-hidden="true" />
                  House type B · three-bed semi
                </p>
                <ExampleTag />
              </div>
              <ul className="space-y-2">
                {DOCS.map((d) => (
                  <li key={d} className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 bg-white/[0.03] border border-white/5">
                    <FileText className="w-3.5 h-3.5 text-porcelain/50 shrink-0" aria-hidden="true" />
                    <span className="text-[12px] text-porcelain/75 leading-snug flex-1">{d}</span>
                    <Check className="w-3.5 h-3.5 text-gold shrink-0" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:pt-2">
              <h3 className="text-[18px] sm:text-xl font-semibold text-white font-heading mb-3">
                It starts with what you already have.
              </h3>
              <p className="text-[14px] sm:text-[15px] text-porcelain/70 leading-relaxed mb-3">
                Every house type already comes with a pack like this. OpenHouse turns it into a persistent record that every matching home carries, from handover onwards.
              </p>
              <p className="text-[14px] sm:text-[15px] text-porcelain/70 leading-relaxed">
                No new documentation. No data entry project. The record is built from the evidence the scheme already produced.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 2 — A sourced answer */}
        <motion.div
          id="trace-panel-answer"
          role="tabpanel"
          aria-labelledby="trace-tab-answer"
          className="col-start-1 row-start-1"
          style={{ pointerEvents: step === "answer" ? "auto" : "none" }}
          initial={false}
          animate={{ opacity: step === "answer" ? 1 : 0 }}
          transition={{ duration: reduced ? 0 : 0.3, ease: EASE }}
          aria-hidden={step !== "answer"}
        >
          <div className="relative rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5 max-w-2xl mx-auto">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4 text-porcelain/60" aria-hidden="true" />
              </span>
              <div className="rounded-2xl rounded-tl-sm bg-white/[0.05] border border-white/10 px-4 py-3">
                <p className="font-serif italic text-[14px] text-porcelain leading-relaxed">
                  What should the heat pump be set to in winter?
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-gold/[0.06] border border-gold/20 px-4 py-3.5">
              <p className="text-[10px] uppercase tracking-wider text-gold font-semibold mb-2">
                This home&rsquo;s answer
              </p>
              <p className="text-[14px] text-porcelain/90 leading-relaxed mb-3">
                Your house type is designed for a 35°C flow temperature. Keep it low and steady. Turning it up and down costs more than it saves.
              </p>
              <div className="pt-3 border-t border-white/5">
                <p className="text-[10px] uppercase tracking-wider text-porcelain/45 font-semibold mb-2">
                  Where this came from
                </p>
                <button
                  type="button"
                  aria-haspopup="dialog"
                  onClick={openSource}
                  className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-gold/10 text-gold border border-gold/30 hover:brightness-125 transition-[filter] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
                >
                  <BookOpen className="w-3 h-3" aria-hidden="true" />
                  House type B heating design · p.2
                </button>
              </div>
            </div>
            <p className="mt-4 text-[12px] text-porcelain/50 text-center">
              Every answer shows where it came from. Open the source.
            </p>

            {/* Source overlay — direct child of the relative panel */}
            {sourceOpen && (
              <motion.div
                role="dialog"
                aria-modal="false"
                aria-label="Source: House type B heating design"
                className="absolute inset-0 z-20 rounded-2xl bg-neutral-950/95 backdrop-blur-sm p-4 flex flex-col"
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-gold">
                    The source
                  </p>
                  <button
                    ref={closeRef}
                    type="button"
                    onClick={closeSource}
                    aria-label="Close source"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/15 text-porcelain/70 hover:text-porcelain hover:border-white/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                  >
                    <X className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <DesignExcerpt />
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* 3 — A missing answer */}
        <motion.div
          id="trace-panel-gap"
          role="tabpanel"
          aria-labelledby="trace-tab-gap"
          className="col-start-1 row-start-1"
          style={{ pointerEvents: step === "gap" ? "auto" : "none" }}
          initial={false}
          animate={{ opacity: step === "gap" ? 1 : 0 }}
          transition={{ duration: reduced ? 0 : 0.3, ease: EASE }}
          aria-hidden={step !== "gap"}
        >
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5 max-w-2xl mx-auto">
            <div className="flex items-start gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4 text-porcelain/60" aria-hidden="true" />
              </span>
              <div className="rounded-2xl rounded-tl-sm bg-white/[0.05] border border-white/10 px-4 py-3">
                <p className="font-serif italic text-[14px] text-porcelain leading-relaxed">
                  Where is the mains water shut-off valve?
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 px-4 py-3.5 mb-3">
              <p className="text-[14px] text-porcelain/90 leading-relaxed">
                That isn&rsquo;t in this home&rsquo;s record, so I won&rsquo;t guess. I&rsquo;ve logged the question and sent it to your developer to confirm.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-amber-500/25 bg-amber-500/[0.06] px-4 py-3">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-[12px] font-semibold text-amber-200">
                  Gap logged · Escalated to the developer
                </p>
                <p className="text-[11px] text-porcelain/55 flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  Awaiting confirmation
                </p>
              </div>
              <ExampleTag />
            </div>
            <p className="mt-4 text-[12px] text-porcelain/50 text-center">
              When the evidence is missing, OpenHouse says so and escalates.
            </p>
          </div>
        </motion.div>

        {/* 4 — What the developer sees */}
        <motion.div
          id="trace-panel-loop"
          role="tabpanel"
          aria-labelledby="trace-tab-loop"
          className="col-start-1 row-start-1"
          style={{ pointerEvents: step === "loop" ? "auto" : "none" }}
          initial={false}
          animate={{ opacity: step === "loop" ? 1 : 0 }}
          transition={{ duration: reduced ? 0 : 0.3, ease: EASE }}
          aria-hidden={step !== "loop"}
        >
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5 max-w-2xl mx-auto">
            <div className="flex items-center justify-between gap-2 mb-4">
              <p className="text-[12px] font-semibold text-porcelain/80 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-gold" aria-hidden="true" />
                Aftercare intelligence · across the scheme
              </p>
              <ExampleTag />
            </div>
            <div className="space-y-2.5">
              <div className="rounded-xl border border-amber-500/25 bg-amber-500/[0.05] p-3.5">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[13px] font-semibold text-white">
                    Mains shut-off valve location
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    Missing from record
                  </span>
                </div>
                <p className="text-[12px] text-porcelain/60 mb-2.5">
                  Asked in 14 homes across the scheme.
                </p>
                <div className="flex items-center gap-2 text-[12px] text-gold">
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  Add the answer once, to the house type record
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-[13px] font-semibold text-porcelain/80">
                    Ventilation filter schedule
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                    <Check className="w-3 h-3" aria-hidden="true" />
                    Answered from record
                  </span>
                </div>
                <p className="text-[12px] text-porcelain/60">
                  Asked in 9 homes. Every one got the sourced answer.
                </p>
              </div>
            </div>
            <p className="mt-4 text-[12px] text-porcelain/50 text-center">
              Every gap tells the developer what to fix. The record improves with every home.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer strip */}
      <div className="px-5 sm:px-7 py-3.5 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
        <p className="text-[11px] text-porcelain/45">
          Illustrative demo. Figures marked &ldquo;Example&rdquo; are for illustration, not real customer data.
        </p>
        {step !== "loop" ? (
          <button
            type="button"
            onClick={() => {
              const idx = STEPS.findIndex((s) => s.key === step);
              setStep(STEPS[Math.min(idx + 1, STEPS.length - 1)].key);
              setSourceOpen(false);
            }}
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-gold hover:text-amber-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
          >
            Next step
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        ) : (
          <span className="text-[12px] text-porcelain/45">
            That loop is the product.
          </span>
        )}
      </div>
    </div>
  );
}
