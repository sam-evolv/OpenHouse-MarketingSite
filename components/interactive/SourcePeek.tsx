"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FileText, X, Activity } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { EASE } from "@/lib/motion";

/**
 * SourcePeek — "show the receipts." The assistant's source chips are real
 * buttons: tapping one opens the cited document inside the demo card — a
 * mocked manual page with the E5 row highlighted, a telemetry feed, or a
 * meter-readings chart. Turns a claimed citation into believable proof.
 *
 * The overlay is absolutely positioned within the assistant panel (which is
 * fixed-height), so opening it never reflows the page. Dialog semantics:
 * Esc closes, focus moves in and returns to the chip that opened it.
 */

interface AccentBits {
  text: string;
  softBg: string;
  border: string;
  ring: string;
}

const ACCENTS: Record<"gold" | "emerald", AccentBits> = {
  gold: {
    text: "text-gold",
    softBg: "bg-gold/10",
    border: "border-gold/30",
    ring: "focus-visible:ring-gold",
  },
  emerald: {
    text: "text-emerald-400",
    softBg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    ring: "focus-visible:ring-emerald-400",
  },
};

function ManualExcerpt({ a }: { a: AccentBits }) {
  const rows = [
    { code: "E3", desc: "Compressor start delay", action: "Self-resolves" },
    { code: "E4", desc: "Low water flow", action: "Check circulation" },
    { code: "E5", desc: "Flow temperature sensor", action: "Check sensor connection", hit: true },
    { code: "E6", desc: "Outdoor unit comms", action: "Contact installer" },
  ];
  return (
    <div className="rounded-lg border border-white/10 bg-[#101010] overflow-hidden">
      <div className="px-3 py-2 border-b border-white/10 flex items-center justify-between">
        <p className="font-mono text-[10px] tracking-wide text-porcelain/70 truncate">
          DAIKIN · Altherma 3 R · Installer reference — p.47
        </p>
        <span className="ml-2 shrink-0 inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider text-porcelain/60 border border-white/15 bg-white/5">
          Example document
        </span>
      </div>
      <div className="p-3">
        <p className="font-mono text-[10px] uppercase tracking-wider text-porcelain/45 mb-2">
          7.2 — Error codes
        </p>
        <div className="space-y-1">
          {rows.map((r) => (
            <div
              key={r.code}
              className={`grid grid-cols-[2.5rem_1fr_auto] gap-2 items-baseline rounded px-2 py-1.5 ${
                r.hit ? `${a.softBg} border ${a.border}` : ""
              }`}
            >
              <span className={`font-mono text-[11px] font-bold ${r.hit ? a.text : "text-porcelain/70"}`}>
                {r.code}
              </span>
              <span className={`text-[11px] ${r.hit ? "text-porcelain" : "text-porcelain/60"}`}>
                {r.desc}
              </span>
              <span className={`text-[10px] ${r.hit ? a.text : "text-porcelain/40"}`}>
                {r.action}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TelemetryExcerpt({ a }: { a: AccentBits }) {
  const rows = [
    { t: "09:41", v: "Flow 37.8°C", ok: true },
    { t: "09:46", v: "Flow 38.1°C", ok: true },
    { t: "09:51", v: "Sensor read failed — retry OK", ok: false },
    { t: "09:56", v: "Flow 37.9°C", ok: true },
  ];
  return (
    <div className="rounded-lg border border-white/10 bg-[#101010] overflow-hidden">
      <div className="px-3 py-2 border-b border-white/10 flex items-center justify-between">
        <p className="font-mono text-[10px] tracking-wide text-porcelain/70 flex items-center gap-1.5">
          <Activity className={`w-3 h-3 ${a.text}`} aria-hidden="true" />
          Planned data connection &middot; Daikin ONECTA
        </p>
        <span className="ml-2 shrink-0 inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider text-porcelain/60 border border-white/15 bg-white/5">
          Example
        </span>
      </div>
      <div className="p-3 space-y-1">
        {rows.map((r) => (
          <div key={r.t} className="flex items-center gap-3 px-2 py-1">
            <span className="font-mono text-[10px] text-porcelain/45">{r.t}</span>
            <span className={`text-[11px] ${r.ok ? "text-porcelain/70" : "text-amber-300"}`}>
              {r.v}
            </span>
            <span
              className={`ml-auto w-1.5 h-1.5 rounded-full ${r.ok ? "bg-emerald-400" : "bg-amber-400"}`}
              aria-hidden="true"
            />
          </div>
        ))}
        <p className="px-2 pt-1 text-[10px] text-porcelain/45">
          Illustrative intermittent readings. This excerpt does not establish a cause or rule out a failed unit.
        </p>
      </div>
    </div>
  );
}

function MeterExcerpt({ a }: { a: AccentBits }) {
  const months = [
    { m: "Feb", h: 34 },
    { m: "Mar", h: 30 },
    { m: "Apr", h: 26 },
    { m: "May", h: 20 },
    { m: "Jun", h: 15 },
    { m: "Jul", h: 11 },
  ];
  return (
    <div className="rounded-lg border border-white/10 bg-[#101010] overflow-hidden">
      <div className="px-3 py-2 border-b border-white/10 flex items-center justify-between">
        <p className="font-mono text-[10px] tracking-wide text-porcelain/70">
          Smart meter · monthly import
        </p>
        <span className="ml-2 shrink-0 inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider text-porcelain/60 border border-white/15 bg-white/5">
          Example
        </span>
      </div>
      <div className="p-3">
        <div className="flex items-end gap-3 h-[56px] px-1" aria-hidden="true">
          {months.map((x, i) => (
            <div key={x.m} className="flex flex-col items-center gap-1">
              <span
                className={`w-4 rounded-sm ${i >= 4 ? "bg-emerald-400" : "bg-white/15"}`}
                style={{ height: x.h }}
              />
              <span className="font-mono text-[9px] text-porcelain/45">{x.m}</span>
            </div>
          ))}
        </div>
        <p className="px-1 pt-2 text-[10px] text-porcelain/45">
          Import trending down since the changes were made.
        </p>
      </div>
    </div>
  );
}

function excerptFor(name: string, a: AccentBits) {
  const n = name.toLowerCase();
  if (n.includes("manual")) return <ManualExcerpt a={a} />;
  if (n.includes("meter")) return <MeterExcerpt a={a} />;
  return <TelemetryExcerpt a={a} />;
}

interface SourceChipsProps {
  items: string[];
  accent?: "gold" | "emerald";
  /** Called with the source name and the chip element (for focus return). */
  onOpen: (name: string, opener: HTMLButtonElement) => void;
}

export function SourceChips({ items, accent = "emerald", onOpen }: SourceChipsProps) {
  const a = ACCENTS[accent];
  return (
    <div className="pt-3 border-t border-white/5">
      <p className="text-[10px] uppercase tracking-wider text-porcelain/45 font-semibold mb-2">
        Sources
      </p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((s) => (
          <button
            key={s}
            type="button"
            aria-haspopup="dialog"
            onClick={(e) => onOpen(s, e.currentTarget)}
            className={`inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full ${a.softBg} ${a.text} border ${a.border} hover:brightness-125 transition-[filter] focus-visible:outline-none focus-visible:ring-2 ${a.ring} focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900`}
          >
            <FileText className="w-3 h-3" aria-hidden="true" />
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

interface SourceOverlayProps {
  name: string;
  accent?: "gold" | "emerald";
  onClose: () => void;
}

/** Rendered as a DIRECT child of the (relative) assistant panel so its
 *  absolute inset-0 covers the panel exactly — never a padded wrapper. */
export function SourceOverlay({ name, accent = "emerald", onClose }: SourceOverlayProps) {
  const a = ACCENTS[accent];
  const reduced = usePrefersReducedMotion();
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="false"
      aria-label={`Source: ${name}`}
      className="absolute inset-0 z-20 rounded-2xl bg-neutral-950/95 backdrop-blur-sm p-4 flex flex-col"
      initial={reduced ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: EASE }}
    >
      <div className="flex items-center justify-between mb-3">
        <p className={`text-[11px] uppercase tracking-wider font-semibold ${a.text}`}>
          The receipt
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close source"
          className={`inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/15 text-porcelain/70 hover:text-porcelain hover:border-white/30 transition-colors focus-visible:outline-none focus-visible:ring-2 ${a.ring} focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950`}
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">{excerptFor(name, a)}</div>
      <p className="pt-2 text-[10px] text-porcelain/40">
        Document answers trace to the approved home record. Data feeds shown in this direction concept are illustrative.
      </p>
    </motion.div>
  );
}
