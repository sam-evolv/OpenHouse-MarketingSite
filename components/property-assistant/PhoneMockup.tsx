"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ChevronLeft,
  Wifi,
  FileText,
  Play,
  CheckCircle2,
  ImageIcon,
  ArrowDownToLine,
  Snowflake,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────
   PhoneMockup
   A premium, marketing-grade iPhone frame. Titanium-style bezel,
   dynamic island, status bar, and an app-coloured screen. Children
   render inside the screen. Optional motion-safe idle drift.
   ──────────────────────────────────────────────────────────── */

interface PhoneMockupProps {
  children: ReactNode;
  /** Tailwind width class for the frame, e.g. "w-[300px]". */
  widthClass?: string;
  /** Idle vertical drift on a slow loop, disabled under prefers-reduced-motion. */
  float?: boolean;
  floatDelay?: number;
  floatDistance?: number;
  className?: string;
  /** Status-bar clock label. */
  time?: string;
}

export function PhoneMockup({
  children,
  widthClass = "w-[300px]",
  float = false,
  floatDelay = 0,
  floatDistance = 12,
  className = "",
  time = "9:41",
}: PhoneMockupProps) {
  const reduce = useReducedMotion();
  const drift = float && !reduce;

  return (
    <motion.div
      className={`${widthClass} ${className}`}
      animate={drift ? { y: [0, -floatDistance, 0] } : undefined}
      transition={
        drift
          ? {
              duration: 7,
              repeat: Infinity,
              ease: [0.16, 1, 0.3, 1],
              delay: floatDelay,
            }
          : undefined
      }
    >
      {/* Titanium bezel */}
      <div className="relative rounded-[2.6rem] bg-gradient-to-b from-zinc-700 via-zinc-900 to-black p-[3px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
        {/* Bezel inner highlight */}
        <div className="absolute inset-0 rounded-[2.6rem] ring-1 ring-white/10" />
        {/* Side buttons */}
        <div className="absolute -left-[2px] top-24 h-7 w-[2px] rounded-l bg-zinc-700" />
        <div className="absolute -left-[2px] top-36 h-12 w-[2px] rounded-l bg-zinc-700" />
        <div className="absolute -right-[2px] top-32 h-16 w-[2px] rounded-r bg-zinc-700" />

        {/* Screen */}
        <div className="relative overflow-hidden rounded-[2.35rem] bg-[#0B0B0D]">
          {/* Dynamic island */}
          <div className="pointer-events-none absolute left-1/2 top-2 z-30 h-[26px] w-[88px] -translate-x-1/2 rounded-full bg-black" />

          {/* Status bar */}
          <div className="relative z-20 flex items-center justify-between px-6 pb-1 pt-3 text-[11px] font-semibold text-white">
            <span className="tracking-tight">{time}</span>
            <span className="flex items-center gap-1.5">
              {/* signal */}
              <span className="flex items-end gap-[2px]" aria-hidden="true">
                <span className="h-1.5 w-[3px] rounded-sm bg-white/90" />
                <span className="h-2 w-[3px] rounded-sm bg-white/90" />
                <span className="h-2.5 w-[3px] rounded-sm bg-white/90" />
                <span className="h-3 w-[3px] rounded-sm bg-white/40" />
              </span>
              <Wifi className="h-3 w-3" aria-hidden="true" />
              {/* battery */}
              <span className="ml-0.5 flex items-center" aria-hidden="true">
                <span className="relative h-3 w-6 rounded-[3px] border border-white/60">
                  <span className="absolute inset-[1.5px] right-1.5 rounded-[1px] bg-white/90" />
                </span>
                <span className="ml-[1px] h-1.5 w-[2px] rounded-r bg-white/60" />
              </span>
            </span>
          </div>

          {children}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── App chrome ─── */

export function AssistantHeader({
  address = "12 Castle Walk, Douglas",
}: {
  address?: string;
}) {
  return (
    <div className="relative z-10 flex items-center gap-3 border-b border-white/[0.06] bg-[#141416]/80 px-4 py-3 backdrop-blur">
      <ChevronLeft className="h-5 w-5 text-gold" aria-hidden="true" />
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-gold to-amber-500">
        <span className="font-heading text-[13px] font-bold text-carbon">OH</span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-semibold text-white">
          Property Assistant
        </p>
        <p className="flex items-center gap-1.5 truncate text-[10px] text-porcelain/50">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {address}
        </p>
      </div>
    </div>
  );
}

export function DayDivider({ label }: { label: string }) {
  return (
    <div className="my-1 flex justify-center">
      <span className="text-[10px] font-medium uppercase tracking-wider text-porcelain/35">
        {label}
      </span>
    </div>
  );
}

/* ─── Bubbles ─── */

export function ResidentBubble({
  children,
  time,
}: {
  children: ReactNode;
  time?: string;
}) {
  return (
    <div className="flex flex-col items-end">
      <div className="max-w-[82%] rounded-2xl rounded-br-md bg-gradient-to-br from-gold to-amber-500 px-3.5 py-2.5 text-[13px] font-medium leading-snug text-carbon shadow-sm">
        {children}
      </div>
      {time && <span className="mr-1 mt-1 text-[9px] text-porcelain/35">{time}</span>}
    </div>
  );
}

export function AssistantBubble({
  children,
  time,
}: {
  children: ReactNode;
  time?: string;
}) {
  return (
    <div className="flex flex-col items-start">
      <div className="max-w-[88%] rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.06] px-3.5 py-2.5 text-[13px] leading-relaxed text-porcelain">
        {children}
      </div>
      {time && <span className="ml-1 mt-1 text-[9px] text-porcelain/35">{time}</span>}
    </div>
  );
}

/* ─── Rich content inside bubbles ─── */

/** A stylised photo of an appliance display, framed like a phone snapshot. */
export function HeatPumpPhoto({ error = "E4" }: { error?: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      {/* "wall" backdrop */}
      <div className="relative bg-gradient-to-br from-zinc-300 via-zinc-200 to-zinc-400 p-3">
        {/* the unit */}
        <div className="rounded-lg bg-gradient-to-b from-zinc-50 to-zinc-200 p-3 shadow-md ring-1 ring-black/5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[8px] font-semibold uppercase tracking-widest text-zinc-500">
              Daikin Altherma
            </span>
            <Snowflake className="h-3 w-3 text-sky-500" aria-hidden="true" />
          </div>
          {/* digital readout */}
          <div className="rounded-md bg-[#0c1418] px-3 py-2 shadow-inner">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[22px] font-bold leading-none tracking-widest text-red-500 [text-shadow:0_0_8px_rgba(239,68,68,0.7)]">
                {error}
              </span>
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            </div>
            <div className="mt-1.5 flex gap-1">
              <span className="h-1 w-6 rounded-full bg-white/20" />
              <span className="h-1 w-4 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** A stylised photo of a thermostat showing a warning light. */
export function ThermostatPhoto() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <div className="relative bg-gradient-to-br from-stone-200 via-stone-100 to-stone-300 p-3">
        <div className="mx-auto w-24 rounded-xl bg-gradient-to-b from-white to-zinc-100 p-3 shadow-md ring-1 ring-black/5">
          <div className="rounded-lg bg-[#0c1418] px-2 py-2.5 text-center shadow-inner">
            <p className="font-mono text-[10px] font-bold tracking-wider text-white/80">
              20.5&deg;
            </p>
            <div className="mt-1 flex items-center justify-center gap-1">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400 [box-shadow:0_0_6px_rgba(251,191,36,0.8)]" />
              <span className="text-[7px] font-medium uppercase tracking-wide text-amber-400">
                No signal
              </span>
            </div>
          </div>
          <div className="mt-2 flex justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Small thumbnail of the photo, used inside the assistant's reply. */
export function PhotoThumb({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="mb-2 flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] p-1.5">
      <div className="h-9 w-9 flex-shrink-0 overflow-hidden rounded-md">{children}</div>
      <span className="flex items-center gap-1 text-[10px] text-porcelain/50">
        <ImageIcon className="h-3 w-3" aria-hidden="true" />
        {label ?? "Photo you sent"}
      </span>
    </div>
  );
}

export function UploadingIndicator() {
  return (
    <div className="flex flex-col items-end">
      <div className="w-[60%] rounded-2xl rounded-br-md bg-white/[0.06] px-3.5 py-2.5">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium text-porcelain/60">Uploading</span>
          <span className="relative h-1 flex-1 overflow-hidden rounded-full bg-white/10">
            <span className="animate-shimmer absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.8),transparent)] bg-[length:200%_100%]" />
          </span>
        </div>
      </div>
    </div>
  );
}

export function DocumentPill({ label = "Kitchen tile warranty.pdf" }: { label?: string }) {
  return (
    <button
      type="button"
      className="mt-2.5 flex w-full items-center gap-2.5 rounded-xl border border-gold/30 bg-gold/[0.08] px-3 py-2 text-left transition-colors hover:bg-gold/[0.14] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
    >
      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gold/15">
        <FileText className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1 truncate text-[11px] font-medium text-porcelain">
        {label}
      </span>
      <ArrowDownToLine className="h-3.5 w-3.5 flex-shrink-0 text-gold" aria-hidden="true" />
    </button>
  );
}

export function VideoThumb({ label = "60-second pressure check" }: { label?: string }) {
  return (
    <div className="mt-2.5 overflow-hidden rounded-xl border border-white/10">
      <div className="relative aspect-video bg-gradient-to-br from-zinc-700 via-zinc-800 to-carbon">
        {/* faux scene */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(212,175,55,0.18),transparent_60%)]" />
        <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
          <span className="rounded bg-black/50 px-1.5 py-0.5 text-[8px] font-medium text-white/80 backdrop-blur">
            Recorded for your home
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg">
            <Play className="ml-0.5 h-4 w-4 fill-carbon text-carbon" aria-hidden="true" />
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 bg-white/[0.04] px-2.5 py-1.5">
        <Play className="h-3 w-3 text-gold" aria-hidden="true" />
        <span className="text-[10px] font-medium text-porcelain/80">{label}</span>
      </div>
    </div>
  );
}

export function ResolvedPill({ label = "Resolved? Let me know" }: { label?: string }) {
  return (
    <div className="mt-2 flex items-center gap-2">
      <button
        type="button"
        className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-[11px] font-medium text-emerald-300 transition-colors hover:bg-emerald-400/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
      >
        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
        {label}
      </button>
    </div>
  );
}

/** The faux text-input bar pinned to the bottom of a screen. */
export function InputBar({ placeholder = "Message" }: { placeholder?: string }) {
  return (
    <div className="flex items-center gap-2 border-t border-white/[0.06] bg-[#141416]/80 px-3 py-3 backdrop-blur">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06]">
        <ImageIcon className="h-3.5 w-3.5 text-porcelain/50" aria-hidden="true" />
      </span>
      <span className="flex-1 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-porcelain/40">
        {placeholder}
      </span>
    </div>
  );
}
