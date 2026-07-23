"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Thermometer,
  Sun,
  BatteryCharging,
  Plug,
  Play,
  Pause,
  AlertTriangle,
  Leaf,
  TrendingDown,
  Activity,
} from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import { EASE } from "@/lib/motion";
import { SourceChips, SourceOverlay } from "./SourcePeek";

/**
 * EnergyIntelligenceDemo
 * The signature "Energy Intelligence" moment: an always-on assistant that has
 * full context of a home's energy systems. It monitors, diagnoses a real fault,
 * helps the homeowner run the home like the A-rated home it is, and shows the money saved.
 *
 * DOM + inline SVG + framer-motion only. No WebGL. Reduced-motion safe.
 * Every figure shown is illustrative and is labelled "Example".
 */

export type Stage = "monitoring" | "diagnose" | "educate" | "savings";

export const STEPS: { id: Stage; label: string }[] = [
  { id: "monitoring", label: "Monitor" },
  { id: "diagnose", label: "Diagnose" },
  { id: "educate", label: "Educate" },
  { id: "savings", label: "Save" },
];

const STAGE_MS: Record<Stage, number> = {
  monitoring: 3400,
  diagnose: 6200,
  educate: 5400,
  savings: 5800,
};

function nextStage(s: Stage): Stage {
  const order: Stage[] = ["monitoring", "diagnose", "educate", "savings"];
  return order[(order.indexOf(s) + 1) % order.length];
}

interface AccentClasses {
  text: string;
  softBg: string;
  border: string;
  ring: string;
  solidBg: string;
  dot: string;
  glow: string;
  chipActive: string;
  rail: string;
}

const ACCENTS: Record<"gold" | "emerald", AccentClasses> = {
  gold: {
    text: "text-gold",
    softBg: "bg-gold/10",
    border: "border-gold/30",
    ring: "focus-visible:ring-gold",
    solidBg: "bg-gold",
    dot: "bg-gold",
    glow: "from-gold/20 via-transparent to-gold/10",
    chipActive: "bg-gold/15 text-gold border-gold/40",
    rail: "via-gold",
  },
  emerald: {
    text: "text-emerald-400",
    softBg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    ring: "focus-visible:ring-emerald-400",
    solidBg: "bg-emerald-500",
    dot: "bg-emerald-400",
    glow: "from-emerald-500/20 via-transparent to-emerald-500/10",
    chipActive: "bg-emerald-500/15 text-emerald-300 border-emerald-500/40",
    rail: "via-emerald-400",
  },
};

interface SystemSpec {
  id: string;
  icon: typeof Thermometer;
  name: string;
  reading: string;
  optimisedReading: string;
}

const ALL_SYSTEMS: SystemSpec[] = [
  { id: "hp", icon: Thermometer, name: "Heat pump", reading: "Flow 38°C", optimisedReading: "Flow 35°C" },
  { id: "pv", icon: Sun, name: "Solar PV", reading: "2.4 kW", optimisedReading: "2.6 kW" },
  { id: "bat", icon: BatteryCharging, name: "Battery", reading: "82%", optimisedReading: "94%" },
  { id: "ev", icon: Plug, name: "EV charger", reading: "Idle", optimisedReading: "Off-peak" },
];

const RATINGS = ["G", "F", "E", "D", "C", "B", "A"];

const SAVINGS_TARGET = 420;

interface EnergyIntelligenceDemoProps {
  accent?: "gold" | "emerald";
  autoPlay?: boolean;
  variant?: "full" | "compact";
  className?: string;
  /** Controlled mode: when set, the parent owns the stage (e.g. scroll-driven). */
  stage?: Stage;
  onStageChange?: (s: Stage) => void;
  /** Hide Play/Pause + step chips (the parent supplies its own control surface). */
  hideControls?: boolean;
}

export function EnergyIntelligenceDemo({
  accent = "gold",
  autoPlay = true,
  variant = "full",
  className = "",
  stage: controlledStage,
  onStageChange,
  hideControls = false,
}: EnergyIntelligenceDemoProps) {
  const a = ACCENTS[accent];
  const reduced = usePrefersReducedMotion();
  const animate = !reduced;

  const rootRef = useRef<HTMLDivElement | null>(null);
  const inView = useInViewOnce(rootRef as React.RefObject<Element>, { threshold: 0.25 });

  const [internalStage, setInternalStage] = useState<Stage>("monitoring");
  const [isPlaying, setIsPlaying] = useState(false);
  const [savingsVal, setSavingsVal] = useState(0);
  const [openSource, setOpenSource] = useState<string | null>(null);
  const sourceOpenerRef = useRef<HTMLButtonElement | null>(null);

  const controlled = controlledStage !== undefined;
  const stage = controlledStage ?? internalStage;

  // A source receipt belongs to its stage; close it when the stage moves on.
  useEffect(() => {
    setOpenSource(null);
  }, [stage]);

  const handleOpenSource = (name: string, opener: HTMLButtonElement) => {
    sourceOpenerRef.current = opener;
    setOpenSource(name);
    if (!controlled) setIsPlaying(false); // let the visitor read the receipt
  };

  const handleCloseSource = () => {
    setOpenSource(null);
    sourceOpenerRef.current?.focus();
  };

  const systems = variant === "compact" ? ALL_SYSTEMS.slice(0, 2) : ALL_SYSTEMS;
  const flagged = stage === "diagnose"; // heat pump is only in fault during diagnose
  const resolved = stage === "educate" || stage === "savings";

  // Start autoplay once the demo scrolls into view (keeps timers/paint off the
  // critical path so the hero image stays the LCP element).
  useEffect(() => {
    if (controlled) return;
    if (inView && autoPlay && animate) setIsPlaying(true);
  }, [controlled, inView, autoPlay, animate]);

  // Stage auto-advance.
  useEffect(() => {
    if (controlled || !isPlaying) return;
    const t = setTimeout(
      () => setInternalStage((prev) => nextStage(prev)),
      STAGE_MS[stage]
    );
    return () => clearTimeout(t);
  }, [controlled, stage, isPlaying]);

  // Savings counter.
  useEffect(() => {
    if (stage !== "savings") {
      setSavingsVal(0);
      return;
    }
    if (!animate) {
      setSavingsVal(SAVINGS_TARGET);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1200;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setSavingsVal(Math.round(SAVINGS_TARGET * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [stage, animate]);

  const handleStepClick = (id: Stage) => {
    if (controlled) {
      onStageChange?.(id);
      return;
    }
    setInternalStage(id);
    setIsPlaying(false); // pause on manual control so the visitor can read
  };

  const togglePlay = () => {
    if (controlled) return;
    if (!isPlaying) setInternalStage("monitoring");
    setIsPlaying((p) => !p);
  };

  const ratingIndex = resolved ? RATINGS.length - 1 : RATINGS.length - 2; // A when resolved, else B

  const homeStatus =
    stage === "monitoring"
      ? { label: "All systems nominal", tone: "ok" as const }
      : stage === "diagnose"
      ? { label: "1 issue detected", tone: "warn" as const }
      : stage === "educate"
      ? { label: "Optimising", tone: "accent" as const }
      : { label: "Running efficiently", tone: "ok" as const };

  return (
    <div
      ref={rootRef}
      role="group"
      aria-label="Energy Intelligence demo, an always-on assistant that monitors and explains a home's energy"
      className={`relative ${className}`}
    >
      <div
        className={`absolute -inset-4 bg-gradient-to-r ${a.glow} rounded-[2rem] blur-2xl`}
        aria-hidden="true"
      />
      <div className="relative rounded-3xl border border-white/10 bg-neutral-900/90 backdrop-blur-xl overflow-hidden">
        {/* Header: identity + controls */}
        <div className="flex items-center gap-3 px-5 sm:px-7 py-4 border-b border-white/5">
          <div className={`w-8 h-8 rounded-lg ${a.softBg} border ${a.border} flex items-center justify-center`}>
            <Activity className={`w-4 h-4 ${a.text}`} aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-porcelain">Energy Intelligence</p>
            <p className="text-[11px] text-porcelain/45 truncate">
              Always-on. Knows every system in this home.
            </p>
          </div>
          {!hideControls && (
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause the demo" : "Play the demo"}
              className={`inline-flex items-center gap-1.5 h-9 px-3 rounded-full border border-white/10 bg-white/[0.03] text-[12px] font-medium text-porcelain/80 hover:text-porcelain hover:border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 ${a.ring} focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" aria-hidden="true" /> Pause
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" aria-hidden="true" /> Play
                </>
              )}
            </button>
          )}
        </div>

        {/* Step chips */}
        <div className={`px-5 sm:px-7 pt-5 ${hideControls ? "hidden" : ""}`}>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Demo steps">
            {STEPS.map((s, i) => {
              const isActive = stage === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleStepClick(s.id)}
                  className={`inline-flex items-center gap-2 min-h-[40px] px-3.5 rounded-full border text-[13px] font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 ${a.ring} focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 ${
                    isActive
                      ? a.chipActive
                      : "border-white/10 bg-white/[0.02] text-porcelain/55 hover:text-porcelain/80 hover:border-white/20"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${
                      isActive ? a.softBg : "bg-white/5"
                    }`}
                  >
                    {i + 1}
                  </span>
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Body: systems | assistant */}
        <div
          className={`p-5 sm:p-7 grid gap-5 lg:gap-6 ${
            variant === "compact" ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
          }`}
        >
          {/* Left: the home's systems */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-porcelain/45 font-semibold">
                This home&rsquo;s systems
              </p>
              <StatusPill status={homeStatus} accent={a} animate={animate} />
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {systems.map((sys) => {
                const isFault = sys.id === "hp" && flagged;
                const isOptimised = sys.id === "hp" && resolved;
                return (
                  <div
                    key={sys.id}
                    className={`relative rounded-xl border p-3 transition-colors duration-500 ${
                      isFault
                        ? "border-amber-500/50 bg-amber-500/[0.07]"
                        : "border-white/10 bg-white/[0.02]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <sys.icon
                        className={`w-4 h-4 ${isFault ? "text-amber-400" : a.text}`}
                        aria-hidden="true"
                      />
                      <StatusDot fault={isFault} accent={a} animate={animate} />
                    </div>
                    <p className="text-[13px] font-medium text-porcelain leading-tight">{sys.name}</p>
                    <p
                      className={`text-[11px] mt-0.5 ${
                        isFault ? "text-amber-300" : "text-porcelain/55"
                      }`}
                    >
                      {isFault ? (
                        <span className="inline-flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" aria-hidden="true" />
                          E5 &middot; Attention
                        </span>
                      ) : isOptimised ? (
                        sys.optimisedReading
                      ) : (
                        sys.reading
                      )}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Live telemetry footnote */}
            <div className="mt-3 flex items-center gap-2 text-[11px] text-porcelain/40">
              <span className={`w-1.5 h-1.5 rounded-full ${a.dot} ${animate ? "motion-safe:animate-pulse" : ""}`} aria-hidden="true" />
              Live telemetry: Daikin ONECTA &middot; SolarEdge
            </div>
          </div>

          {/* Right: the assistant response, live region.
              FIXED height + opacity-only crossfade: stage swaps must never
              change this panel's height — height changes inside the pinned
              sticky (or the in-flow mobile demo) read as the page jumping
              or scrolling itself. */}
          <div
            aria-live="polite"
            aria-atomic="false"
            className={`relative rounded-2xl border ${a.border} bg-black/40 h-[560px] sm:h-[500px] lg:h-[400px]`}
          >
            {/* Connector rail from systems into the assistant */}
            {variant === "full" && (
              <div
                className="hidden lg:block absolute top-1/2 -left-6 w-6 h-px -translate-y-1/2 overflow-visible"
                aria-hidden="true"
              >
                <div className={`h-px w-full bg-gradient-to-r from-transparent ${a.rail} to-transparent opacity-60`} />
                {animate && flagged && (
                  <motion.span
                    className={`absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full ${a.dot}`}
                    initial={{ left: "-8%" }}
                    animate={{ left: "108%" }}
                    transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
              </div>
            )}

            <AnimatePresence initial={false}>
              <motion.div
                key={stage}
                // transform-gpu pins this wrapper as the containing block for
                // the SourcePeek overlay's absolute positioning.
                className="absolute inset-0 p-5 overflow-hidden transform-gpu"
                initial={animate ? { opacity: 0 } : false}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: animate ? 0.25 : 0 } }}
                transition={{ duration: animate ? 0.35 : 0, ease: EASE }}
              >
                <StageContent
                  stage={stage}
                  accent={a}
                  accentName={accent}
                  animate={animate}
                  savingsVal={savingsVal}
                  ratingIndex={ratingIndex}
                  onOpenSource={handleOpenSource}
                />
              </motion.div>
            </AnimatePresence>

            {/* The receipt — direct child of the relative panel so it covers
                the panel exactly, independent of any wrapper padding. */}
            {openSource && (
              <SourceOverlay
                name={openSource}
                accent={accent}
                onClose={handleCloseSource}
              />
            )}
          </div>
        </div>

        {/* Footer note */}
        <div className="px-5 sm:px-7 pb-5 -mt-1">
          <p className="text-[11px] text-porcelain/55 leading-relaxed">
            Illustrative demo. Figures marked &ldquo;Example&rdquo; are for illustration, not real customer data.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Status pill for the whole home ── */
function StatusPill({
  status,
  accent,
  animate,
}: {
  status: { label: string; tone: "ok" | "warn" | "accent" };
  accent: AccentClasses;
  animate: boolean;
}) {
  const tone =
    status.tone === "warn"
      ? "text-amber-300 border-amber-500/40 bg-amber-500/10"
      : status.tone === "accent"
      ? `${accent.text} ${accent.border} ${accent.softBg}`
      : "text-emerald-300 border-emerald-500/40 bg-emerald-500/10";
  const dot =
    status.tone === "warn" ? "bg-amber-400" : status.tone === "accent" ? accent.dot : "bg-emerald-400";
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-medium ${tone}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dot} ${animate ? "motion-safe:animate-pulse" : ""}`} aria-hidden="true" />
      {status.label}
    </span>
  );
}

/* ── Per-system status dot ── */
function StatusDot({ fault, accent, animate }: { fault: boolean; accent: AccentClasses; animate: boolean }) {
  return (
    <span
      className={`w-2 h-2 rounded-full ${fault ? "bg-amber-400" : accent.dot} ${
        animate ? "motion-safe:animate-pulse" : ""
      }`}
      aria-hidden="true"
    />
  );
}

/* ── Assistant content per stage ── */
function StageContent({
  stage,
  accent,
  accentName,
  animate,
  savingsVal,
  ratingIndex,
  onOpenSource,
}: {
  stage: Stage;
  accent: AccentClasses;
  accentName: "gold" | "emerald";
  animate: boolean;
  savingsVal: number;
  ratingIndex: number;
  onOpenSource: (name: string, opener: HTMLButtonElement) => void;
}) {
  if (stage === "monitoring") {
    return (
      <div className="space-y-4">
        <AssistantLabel accent={accent} />
        <p className="text-[15px] text-porcelain/85 leading-relaxed">
          I&rsquo;m watching every system in this home, 24/7 &mdash; heat pump, solar, battery and EV charger. Nothing needs attention right now.
        </p>
        <p className="text-[13px] text-porcelain/55 leading-relaxed">
          Ask me anything, from a bill you don&rsquo;t understand to a warning light on a unit. I already know what&rsquo;s installed and how it&rsquo;s performing.
        </p>
      </div>
    );
  }

  if (stage === "diagnose") {
    return (
      <div className="space-y-4">
        {/* Echoed homeowner question */}
        <div className="flex justify-end">
          <div className="bg-white/10 rounded-2xl rounded-br-sm px-3.5 py-2 max-w-[85%]">
            <p className="font-serif italic text-[14px] text-porcelain leading-relaxed">
              My heat pump flashed E5. Do I need an engineer?
            </p>
          </div>
        </div>
        <AssistantLabel accent={accent} />
        <p className="text-[15px] text-porcelain/85 leading-relaxed">
          E5 on your Daikin Altherma 3 R is a flow-temperature sensor reading. Live telemetry shows it&rsquo;s intermittent, which is usually a sensor connection loosened by a cold snap &mdash; not a failed unit.
        </p>
        <p className="text-[13px] text-porcelain/60 leading-relaxed">
          Let&rsquo;s try a 90-second check before booking anyone.
        </p>
        {/* 90-second check card */}
        <div className="rounded-xl border border-white/10 bg-black/50 p-3 flex items-center gap-3">
          <span className={`w-11 h-11 rounded-lg ${accent.softBg} border ${accent.border} flex items-center justify-center flex-shrink-0`}>
            <Play className={`w-4 h-4 ${accent.text} fill-current ml-0.5`} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-[13px] font-semibold text-porcelain truncate">E5 sensor check</p>
            <p className="text-[11px] text-porcelain/50">Filmed for this exact unit &middot; 1m 28s</p>
          </div>
        </div>
        <SourceChips accent={accentName} items={["Daikin Altherma 3 R manual", "Live telemetry: ONECTA"]} onOpen={onOpenSource} />
      </div>
    );
  }

  if (stage === "educate") {
    const tips = [
      "Drop the heat-pump flow temperature to 35°C — same comfort, less energy.",
      "Shift EV charging and hot water to your cheapest off-peak window.",
      "Store midday solar in the battery for the evening peak.",
    ];
    return (
      <div className="space-y-4">
        <AssistantLabel accent={accent} />
        <p className="text-[15px] text-porcelain/85 leading-relaxed">
          While I&rsquo;m here &mdash; this home is built to run like an{" "}
          <span className={`font-semibold ${accent.text}`}>A</span>. A few habits keep it performing that way, rather than slipping to a{" "}
          <span className="font-semibold text-porcelain">B3</span> in everyday use.
        </p>
        <ul className="space-y-2">
          {tips.map((t) => (
            <li key={t} className="flex items-start gap-2.5">
              <span className={`w-5 h-5 rounded-md ${accent.softBg} border ${accent.border} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                <Leaf className={`w-3 h-3 ${accent.text}`} aria-hidden="true" />
              </span>
              <span className="text-[13px] text-porcelain/80 leading-relaxed">{t}</span>
            </li>
          ))}
        </ul>
        <RatingLadder index={ratingIndex} accent={accent} animate={animate} />
        <p className="text-[12px] text-porcelain/55 leading-relaxed">
          Exactly the guidance a good home user guide is meant to give.
        </p>
      </div>
    );
  }

  // savings
  return (
    <div className="space-y-4">
      <AssistantLabel accent={accent} />
      <p className="text-[15px] text-porcelain/85 leading-relaxed">
        Those habits are working. Consumption is trending down &mdash; you&rsquo;re running this home like the{" "}
        <span className={`font-semibold ${accent.text}`}>A-rated</span> home it is.
      </p>
      <div className="rounded-xl border border-white/10 bg-black/50 p-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <TrendingDown className={`w-4 h-4 ${accent.text}`} aria-hidden="true" />
            <span className="text-[11px] uppercase tracking-wider text-porcelain/45 font-semibold">
              Estimated annual saving
            </span>
          </div>
          <p className="flex items-baseline gap-2">
            <span className={`text-4xl font-bold font-heading tabular-nums ${accent.text}`} style={{ minWidth: "5ch" }}>
              &euro;{savingsVal}
            </span>
            <ExampleTag />
          </p>
          <p className="text-[11px] text-porcelain/45 mt-1">per year, on current tariffs</p>
        </div>
        <BillBars accent={accent} animate={animate} />
      </div>
      <SourceChips accent={accentName} items={["Your meter readings", "Live telemetry"]} onOpen={onOpenSource} />
    </div>
  );
}

function AssistantLabel({ accent }: { accent: AccentClasses }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className={`w-7 h-7 rounded-lg ${accent.softBg} border ${accent.border} flex items-center justify-center`}>
        <Activity className={`w-3.5 h-3.5 ${accent.text}`} aria-hidden="true" />
      </div>
      <p className={`text-[11px] uppercase tracking-wider ${accent.text} font-semibold`}>Assistant</p>
    </div>
  );
}

function ExampleTag() {
  return (
    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider text-porcelain/60 border border-white/15 bg-white/5">
      Example
      <span className="sr-only"> figure, for illustration only, not real customer data</span>
    </span>
  );
}

/* ── Energy-rating ladder G → A ── */
function RatingLadder({ index, accent, animate }: { index: number; accent: AccentClasses; animate: boolean }) {
  const pct = ((index + 0.5) / RATINGS.length) * 100;
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] uppercase tracking-wider text-porcelain/45 font-semibold">How you&rsquo;re running it</span>
        <span className={`inline-flex items-center gap-1 text-[11px] font-semibold ${accent.text}`}>
          B3
          <span aria-hidden="true">&rarr;</span>
          A
          <ExampleTag />
        </span>
      </div>
      <div className="relative">
        <div className="grid grid-cols-7 gap-1">
          {RATINGS.map((r, i) => (
            <div
              key={r}
              className={`h-6 rounded flex items-center justify-center text-[11px] font-bold ${
                i === index ? `${accent.softBg} ${accent.text} border ${accent.border}` : "bg-white/[0.04] text-porcelain/40"
              }`}
            >
              {r}
            </div>
          ))}
        </div>
        {/* marker */}
        <motion.div
          className="absolute -bottom-1.5"
          style={animate ? { left: `${pct}%` } : { left: `${pct}%` }}
          initial={false}
          animate={animate ? { left: `${pct}%` } : undefined}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className={`block w-2 h-2 -ml-1 rounded-full ${accent.dot}`} aria-hidden="true" />
        </motion.div>
      </div>
    </div>
  );
}

/* ── Small down-trending monthly-bill bars ── */
function BillBars({ accent, animate }: { accent: AccentClasses; animate: boolean }) {
  const heights = [34, 30, 26, 20, 15, 11];
  return (
    <div className="flex items-end gap-1.5 h-[44px]" aria-hidden="true">
      {heights.map((h, i) => (
        <motion.span
          key={i}
          className={`w-2 rounded-sm ${i >= heights.length - 2 ? accent.solidBg : "bg-white/15"}`}
          style={{ height: h }}
          initial={animate ? { height: 4, opacity: 0.4 } : false}
          animate={animate ? { height: h, opacity: 1 } : undefined}
          transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
        />
      ))}
    </div>
  );
}
