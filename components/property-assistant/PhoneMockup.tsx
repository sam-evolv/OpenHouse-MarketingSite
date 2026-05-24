"use client";

import { ReactNode } from "react";
import Image from "next/image";
import ohMark from "@/attached_assets/property-assistant/openhouse-mark.png";

/* ────────────────────────────────────────────────────────────
   Property Assistant phone mockups.

   These reproduce the real OpenHouse Property Assistant homeowner app
   (see docs/marketing-refurb/property-assistant-assets/source-references).
   The screen is warm white/cream with gold accents, on purpose: the
   contrast between the marketing page's dark canvas and the warm phone
   makes the phone feel like a real object on the page.

   Tokens are taken verbatim from the app's tokens.css and used inline,
   so the phone internals stay faithful to the product and never inherit
   the marketing site's dark palette.
   ──────────────────────────────────────────────────────────── */

const C = {
  gold: "#D4AF37",
  goldDark: "#B88A18",
  text1: "#111827",
  text2: "#6b7280",
  text3: "#9ca3af",
  border: "#e5e7eb",
  white: "#FFFFFF",
  cream: "#FAFAF6",
  creamPlan: "#FBFAF5",
  inputBg: "#F1F1EF",
  greenBg: "rgba(46,184,108,0.14)",
  greenFg: "#0E8E63",
  goldBadgeBg: "rgba(212,175,55,0.16)",
  goldBadgeFg: "#A8821F",
};

const SANS =
  "var(--font-inter), Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

/* ─── Floating screen ───

   A frameless phone screen: no iPhone bezel, no device chrome. The screen
   content floats as an object on the dark marketing canvas, grounded by a
   three-layer drop shadow and a gold brand halo. The proportions (9 / 19.5)
   and the 44px corner radius plus a single pill notch signal "mobile app"
   without a literal device frame, the way Linear, Vercel, and Stripe present
   product UI. */

interface FloatingScreenProps {
  children: ReactNode;
  /** Sizing class for the screen. Pass a width (e.g. "w-[360px]") and the
      height follows the 9 / 19.5 ratio, or pass a height (e.g. "lg:h-[480px]")
      to fit a fixed slot and let the width follow instead. */
  sizeClass?: string;
  /** Rotation utility applied at lg+ under motion-safe, e.g. "motion-safe:lg:-rotate-[4deg]". */
  rotateClass?: string;
  className?: string;
  time?: string;
}

export function FloatingScreen({
  children,
  sizeClass = "w-[320px]",
  rotateClass = "",
  className = "",
  time = "9:41",
}: FloatingScreenProps) {
  return (
    <div className={`relative inline-flex ${className}`}>
      {/* Gold brand halo, behind the screen, offset down to read as ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10"
        style={{
          width: "130%",
          height: "130%",
          transform: "translate(-50%, -50%) translateY(40px)",
          background:
            "radial-gradient(ellipse at center, rgba(212,175,55,0.22) 0%, rgba(212,175,55,0.08) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* The screen itself: frameless, floating, grounded by the composite shadow */}
      <div
        className={`relative flex aspect-[180/390] flex-col overflow-hidden motion-safe:hover:-translate-y-1 motion-safe:hover:rotate-0 ${sizeClass} ${rotateClass}`}
        style={{
          borderRadius: 44,
          fontFamily: SANS,
          transition: "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)",
          background:
            "linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 46%, #FDFCF7 100%)",
          boxShadow: [
            "0px 80px 120px -20px rgba(0,0,0,0.65)",
            "0px 40px 60px -15px rgba(0,0,0,0.50)",
            "0px 8px 20px 0px rgba(0,0,0,0.40)",
            "inset 0 1px 0 rgba(255,255,255,0.6)",
          ].join(", "),
        }}
      >
        {/* Pill notch: the entire phone signifier */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[18px] z-30 -translate-x-1/2"
          style={{ width: 110, height: 28, borderRadius: 14, background: "#000000" }}
        />

        {/* iOS status bar (inside the screen content, beside the notch) */}
        <div
          className="relative z-20 flex h-11 items-center justify-between px-6 pt-1 text-[11px] font-semibold"
          style={{ color: C.text1 }}
        >
          <span className="tracking-tight">{time}</span>
          <span className="flex items-center gap-1.5">
            <span className="flex items-end gap-[2px]" aria-hidden="true">
              <span className="h-1.5 w-[3px] rounded-sm" style={{ background: C.text1 }} />
              <span className="h-2 w-[3px] rounded-sm" style={{ background: C.text1 }} />
              <span className="h-2.5 w-[3px] rounded-sm" style={{ background: C.text1 }} />
              <span className="h-3 w-[3px] rounded-sm" style={{ background: C.text3 }} />
            </span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M8 3.5c2.2 0 4.2.8 5.7 2.2l-1 1A6.6 6.6 0 008 4.9 6.6 6.6 0 003.3 6.7l-1-1A8.1 8.1 0 018 3.5zm0 3c1.4 0 2.7.5 3.7 1.4l-1 1A4.3 4.3 0 008 7.9c-1 0-2 .4-2.7 1l-1-1A5.8 5.8 0 018 6.5zm0 3c.7 0 1.3.2 1.8.7L8 11.9 6.2 10.2c.5-.5 1.1-.7 1.8-.7z"
                fill={C.text1}
              />
            </svg>
            <span className="ml-0.5 flex items-center" aria-hidden="true">
              <span
                className="relative h-3 w-6 rounded-[3px]"
                style={{ border: `1px solid ${C.text3}` }}
              >
                <span
                  className="absolute inset-[1.5px] right-1.5 rounded-[1px]"
                  style={{ background: C.text1 }}
                />
              </span>
              <span className="ml-[1px] h-1.5 w-[2px] rounded-r" style={{ background: C.text3 }} />
            </span>
          </span>
        </div>

        {children}
      </div>
    </div>
  );
}

/* ─── App header ─── */

export function HomeownerHeader() {
  return (
    <div
      className="flex items-center gap-2 px-3.5 py-3"
      style={{ background: C.white, borderBottom: `1px solid ${C.border}` }}
    >
      <div className="flex flex-1 items-center gap-1.5">
        <Image src={ohMark} alt="OpenHouse Ai" width={22} height={22} className="block h-[22px] w-[22px]" />
        <span
          className="font-bold"
          style={{ fontSize: 12.5, color: C.gold, letterSpacing: "-0.005em" }}
        >
          OpenHouse Ai
        </span>
      </div>
      {/* EN selector */}
      <div
        className="flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold"
        style={{ border: `1px solid ${C.border}`, fontSize: 11, color: C.text1 }}
      >
        EN
        <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {/* Mode toggle (moon) */}
      <div
        className="flex h-7 w-7 items-center justify-center rounded-full"
        style={{ border: `1px solid ${C.border}`, color: C.text1, background: C.white }}
      >
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M17 12.5A7.5 7.5 0 017.5 3a.8.8 0 00-1-1A8.5 8.5 0 1018 13.5a.8.8 0 00-1-1z" fill="currentColor" />
        </svg>
      </div>
      {/* Avatar */}
      <div
        className="flex h-[26px] w-[26px] items-center justify-center rounded-full"
        style={{ background: C.gold, color: C.white }}
      >
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="7" cy="5" r="2.4" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <path d="M2.5 12c0-2.4 2-3.5 4.5-3.5s4.5 1.1 4.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    </div>
  );
}

/* ─── Bottom bar (input + 4-tab nav) ─── */

function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 9.5C3.5 5.9 6.5 3 10 3s6.5 2.9 6.5 6.5S13.5 16 10 16c-.9 0-1.8-.2-2.6-.5L4 17l1-3.2c-.9-1.2-1.5-2.6-1.5-4.3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
function MapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 5l5-2 4 2 5-2v12l-5 2-4-2-5 2V5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
      <path d="M8 3v12M12 5v12" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 3a4.5 4.5 0 014.5 4.5v3l1.5 3h-12l1.5-3v-3A4.5 4.5 0 0110 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
      <path d="M8 16a2 2 0 004 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function DocsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 2.5h7l3 3v12a1 1 0 01-1 1H5a1 1 0 01-1-1v-14a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
      <path d="M12 2.5v3h3M6.5 9.5h7M6.5 12.5h7M6.5 15.5h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function BottomBar({
  inputText = "",
  active = "Chat",
  showInput = true,
}: {
  inputText?: string;
  active?: "Chat" | "Map" | "News" | "Docs";
  showInput?: boolean;
}) {
  const tabs = [
    { key: "Chat", icon: <ChatIcon /> },
    { key: "Map", icon: <MapIcon /> },
    { key: "News", icon: <BellIcon /> },
    { key: "Docs", icon: <DocsIcon /> },
  ] as const;

  return (
    <div style={{ background: C.white }}>
      {showInput && (
        <div className="px-3.5 pb-1 pt-1.5">
          <div
            className="flex h-10 items-center gap-2 rounded-full pl-3.5 pr-3"
            style={{ background: C.inputBg }}
          >
            <span
              className="flex-1 truncate"
              style={{ fontSize: 12.5, color: inputText ? C.text1 : C.text3 }}
            >
              {inputText || "Ask about your home or community..."}
            </span>
            <span style={{ color: C.text3 }} aria-hidden="true">
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                <rect x="4" y="2" width="4" height="6" rx="2" fill="currentColor" />
                <path d="M2.5 6.5a3.5 3.5 0 007 0M6 10v1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </div>
          <div className="mt-1 text-center" style={{ fontSize: 9.5, color: C.text3 }}>
            Powered by AI • Information provided for reference only
          </div>
        </div>
      )}
      <div
        className="grid grid-cols-4 px-1 pb-1.5 pt-1.5"
        style={{ background: C.white, borderTop: `1px solid ${C.border}` }}
      >
        {tabs.map((t) => {
          const isActive = t.key === active;
          const color = isActive ? C.gold : C.text2;
          return (
            <div key={t.key} className="flex flex-col items-center gap-0.5 pb-0.5 pt-1">
              <span style={{ color }}>{t.icon}</span>
              <span className="font-semibold" style={{ fontSize: 10, color }}>
                {t.key}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Chat primitives ─── */

/** A scrollable-feeling message area inside the screen. Transparent so the
    screen's white-to-cream gradient reads through the empty scrollback below.
    Top-aligned, like any normal chat interface: the conversation begins at the
    top, under the header, and the rest is empty scrollback. */
export function Thread({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col gap-2.5 px-3.5 pb-1 pt-3">
      {children}
    </div>
  );
}

/** Right-aligned resident message, in the app's gold-highlight language. */
export function UserBubble({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-end">
      <div
        className="max-w-[82%] rounded-[14px] rounded-br-[5px] px-3.5 py-2.5"
        style={{
          background: "rgba(212,175,55,0.14)",
          border: `1px solid ${C.gold}AA`,
          color: C.text1,
          fontSize: 12.5,
          fontWeight: 500,
          lineHeight: 1.4,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/** The assistant's white answer card (IntelligenceCard). */
export function AssistantCard({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex flex-col gap-1.5 rounded-[14px] px-3.5 py-3"
      style={{
        background: C.white,
        border: `1px solid ${C.border}`,
        boxShadow: "0 2px 12px rgba(12,12,12,0.04)",
      }}
    >
      {children}
    </div>
  );
}

export function CardText({ children, size = 12.5 }: { children: ReactNode; size?: number }) {
  return (
    <div style={{ fontSize: size, lineHeight: 1.55, color: C.text1 }}>{children}</div>
  );
}

/** Bold accent used inside card text (E3, blocked air filter, etc). */
export function B({ children }: { children: ReactNode }) {
  return <b style={{ fontWeight: 700, color: C.text1 }}>{children}</b>;
}

export function ChecklistRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-2">
      <span
        className="mt-[1px] flex h-[15px] w-[15px] flex-shrink-0 items-center justify-center rounded-full"
        style={{ background: "rgba(212,175,55,0.16)", color: C.goldDark }}
        aria-hidden="true"
      >
        <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
          <path d="M2 5.2l2 2 4-4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span style={{ fontSize: 12, lineHeight: 1.45, color: C.text1 }}>{children}</span>
    </div>
  );
}

/** The sourced-citation line: the proof point for the trust mechanism. */
export function SourceLine({ children }: { children: ReactNode }) {
  return (
    <div
      className="mt-1 flex items-center gap-1.5 pt-1.5"
      style={{ fontSize: 10.5, color: C.text2, borderTop: "1px dashed rgba(0,0,0,0.08)" }}
    >
      <span
        className="inline-flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-full font-bold"
        style={{ background: `${C.gold}33`, color: C.gold, fontSize: 9 }}
        aria-hidden="true"
      >
        i
      </span>
      <span>{children}</span>
    </div>
  );
}

export function GoldCTA({ children, icon }: { children: ReactNode; icon?: ReactNode }) {
  return (
    <>
      <div className="my-0.5 h-px" style={{ background: "rgba(0,0,0,0.06)" }} />
      <button
        type="button"
        className="flex items-center justify-center gap-1.5 rounded-[10px] py-2 font-semibold transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2"
        style={{
          background: "linear-gradient(135deg, #e8c547 0%, #b88a18 100%)",
          color: "#1A1408",
          fontSize: 11.5,
        }}
      >
        {icon}
        {children}
      </button>
    </>
  );
}

/** A "your home" data row, as used in the breadth frames (docs, appliances). */
export function DataRow({
  icon,
  name,
  meta,
  badge,
  badgeColor = "green",
}: {
  icon: ReactNode;
  name: string;
  meta: string;
  badge: string;
  badgeColor?: "green" | "gold";
}) {
  const bg = badgeColor === "green" ? C.greenBg : C.goldBadgeBg;
  const fg = badgeColor === "green" ? C.greenFg : C.goldBadgeFg;
  return (
    <div
      className="flex items-center gap-2.5 rounded-[10px] px-3 py-2.5"
      style={{ background: C.white, border: `1px solid ${C.border}` }}
    >
      <span
        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
        style={{ background: "rgba(212,175,55,0.16)", color: C.goldDark }}
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-bold" style={{ fontSize: 12.5, color: C.text1 }}>
          {name}
        </span>
        <span className="block truncate" style={{ fontSize: 11, color: C.text2 }}>
          {meta}
        </span>
      </span>
      <span
        className="flex-shrink-0 rounded-full px-1.5 py-0.5 font-extrabold"
        style={{ background: bg, color: fg, fontSize: 8.5, letterSpacing: "0.08em" }}
      >
        {badge}
      </span>
    </div>
  );
}

/** A small status pill shown at the foot of an assistant card: the friendly
    close ("Resolved? Let me know") or an escalation confirmation ("Snag raised"). */
export function StatusPill({
  children,
  tone = "gold",
  icon,
}: {
  children: ReactNode;
  tone?: "gold" | "green";
  icon?: ReactNode;
}) {
  const bg = tone === "green" ? C.greenBg : C.goldBadgeBg;
  const fg = tone === "green" ? C.greenFg : C.goldBadgeFg;
  return (
    <span
      className="mt-0.5 inline-flex items-center gap-1.5 self-start rounded-full px-2.5 py-1 font-semibold"
      style={{ background: bg, color: fg, fontSize: 11, border: `1px solid ${fg}33` }}
    >
      {icon}
      {children}
    </span>
  );
}

/* ─── Equipment photos (resident uploads) ───
   Frameless screens are at their best when the resident is sharing something
   visual. These are crisp inline illustrations, not stock photography, so the
   "what the assistant is looking at" reads instantly at small sizes: a heat
   pump controller showing an E3 fault, and a leaking U-bend under a sink.
   `full` renders a 4:3 attachment; `thumb` a 52px square for the reply bubble. */

function HeatPumpArt() {
  return (
    <>
      <defs>
        <linearGradient id="hp-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e7e9ec" />
          <stop offset="1" stopColor="#cdd0d5" />
        </linearGradient>
        <radialGradient id="hp-led" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ff6b60" />
          <stop offset="1" stopColor="#ff3b30" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="240" height="180" fill="url(#hp-wall)" />
      {/* Soft contact shadow under the controller */}
      <rect x="46" y="34" width="156" height="120" rx="16" fill="rgba(0,0,0,0.10)" />
      {/* Controller casing */}
      <rect x="42" y="28" width="156" height="120" rx="14" fill="#f8f8f5" stroke="#d7d7d1" strokeWidth="1.5" />
      {/* LED indicator, glowing red */}
      <circle cx="178" cy="44" r="8" fill="#ff3b30" opacity="0.25" />
      <circle cx="178" cy="44" r="4" fill="url(#hp-led)" />
      {/* LCD screen */}
      <rect x="60" y="52" width="120" height="70" rx="8" fill="#15171c" />
      <rect x="60" y="52" width="120" height="70" rx="8" fill="none" stroke="#000" strokeWidth="1" opacity="0.4" />
      {/* Warning triangle */}
      <g transform="translate(74, 66)">
        <path d="M7 0 L14 12 L0 12 Z" fill="none" stroke="#ff3b30" strokeWidth="1.6" strokeLinejoin="round" />
        <line x1="7" y1="4" x2="7" y2="8.5" stroke="#ff3b30" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="7" cy="10.5" r="0.9" fill="#ff3b30" />
      </g>
      {/* Fault code */}
      <text x="124" y="102" textAnchor="middle" fontSize="34" fontWeight="800" fill="#ff3b30" fontFamily={SANS} letterSpacing="0.04em">E3</text>
      {/* Casing wordmark + vent lines */}
      <text x="120" y="140" textAnchor="middle" fontSize="8" fontWeight="700" fill="#9a9a92" fontFamily={SANS} letterSpacing="0.22em">ECODAN</text>
      <g stroke="#dcdcd6" strokeWidth="1.4" strokeLinecap="round">
        <line x1="54" y1="58" x2="54" y2="74" />
        <line x1="186" y1="100" x2="186" y2="116" />
      </g>
    </>
  );
}

function LeakArt() {
  return (
    <>
      <defs>
        <linearGradient id="lk-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2c2823" />
          <stop offset="1" stopColor="#171410" />
        </linearGradient>
        <linearGradient id="lk-pipe" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8b9097" />
          <stop offset="0.5" stopColor="#d6dbe0" />
          <stop offset="1" stopColor="#8b9097" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="240" height="180" fill="url(#lk-bg)" />
      {/* Puddle on the cabinet floor */}
      <ellipse cx="118" cy="166" rx="60" ry="10" fill="rgba(96,156,206,0.45)" />
      <ellipse cx="118" cy="164" rx="42" ry="6" fill="rgba(150,200,235,0.40)" />
      {/* U-bend / P-trap */}
      <path
        d="M86 24 V92 Q86 126 118 126 Q150 126 150 92 V60 H214"
        fill="none"
        stroke="url(#lk-pipe)"
        strokeWidth="13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Pipe highlight */}
      <path
        d="M86 28 V92 Q86 122 118 122 Q150 122 150 92 V60 H210"
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Compression nut at the joint */}
      <rect x="142" y="80" width="16" height="20" rx="2" fill="#9aa0a7" stroke="#6f747b" strokeWidth="1" />
      {/* Forming water drop + drip */}
      <path d="M118 132 q-4 6 0 9 q4 -3 0 -9 z" fill="rgba(150,200,235,0.95)" />
      <circle cx="118" cy="150" r="3.2" fill="rgba(120,180,225,0.9)" />
    </>
  );
}

export function EquipmentPhoto({
  kind,
  variant = "full",
}: {
  kind: "heatpump" | "leak";
  variant?: "full" | "thumb";
}) {
  const isThumb = variant === "thumb";
  const label = kind === "heatpump" ? "Heat pump display, E3" : "Under the kitchen sink";
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: isThumb ? 52 : "100%",
        height: isThumb ? 52 : undefined,
        aspectRatio: isThumb ? undefined : "4 / 3",
        borderRadius: isThumb ? 8 : 12,
        border: `1px solid ${C.border}`,
        flex: isThumb ? "0 0 auto" : undefined,
      }}
      role="img"
      aria-label={label}
    >
      <svg
        viewBox="0 0 240 180"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        style={{ display: "block" }}
        aria-hidden="true"
      >
        {kind === "heatpump" ? <HeatPumpArt /> : <LeakArt />}
      </svg>
    </div>
  );
}

/* ─── Floor plan diagram (ported verbatim from the real app) ─── */

export function FloorPlanDiagram({ width = 240 }: { width?: number }) {
  const t1 = C.text1;
  const t2 = C.text2;
  const t3 = C.text3;
  const gold = C.gold;
  const goldDark = C.goldDark;
  return (
    <svg width={width} viewBox="0 0 240 168" fill="none" style={{ display: "block" }} aria-hidden="true">
      <rect x="4" y="4" width="232" height="160" stroke={t1} strokeWidth="3" fill={C.creamPlan} rx="2" />
      {/* Living room (highlighted) */}
      <rect x="6" y="6" width="128" height="92" fill="rgba(212,175,55,0.18)" stroke={gold} strokeWidth="2.2" />
      <rect x="20" y="78" width="50" height="12" rx="2" fill={`${gold}55`} />
      <rect x="18" y="74" width="6" height="18" rx="1.5" fill={`${gold}55`} />
      <rect x="66" y="74" width="6" height="18" rx="1.5" fill={`${gold}55`} />
      <rect x="86" y="70" width="36" height="22" rx="2" fill="none" stroke={`${gold}70`} strokeWidth="1" strokeDasharray="2 2" />
      <rect x="18" y="14" width="40" height="6" rx="1" fill={`${gold}40`} />
      <text x="70" y="40" textAnchor="middle" fontSize="9" fontWeight="800" fill={goldDark} fontFamily={SANS} letterSpacing="0.05em">LIVING ROOM</text>
      <text x="70" y="54" textAnchor="middle" fontSize="14" fontWeight="800" fill={t1} fontFamily={SANS}>28.5 m²</text>
      <text x="70" y="66" textAnchor="middle" fontSize="7.5" fill={t2} fontFamily={SANS}>5.7m × 5.0m</text>
      {/* Kitchen */}
      <rect x="136" y="6" width="98" height="58" fill={C.white} stroke={t2} strokeWidth="1.2" />
      <rect x="160" y="40" width="42" height="14" rx="1.5" fill={`${t3}33`} stroke={t3} strokeWidth="0.6" />
      <rect x="138" y="8" width="94" height="6" fill={`${t3}20`} />
      <text x="185" y="26" textAnchor="middle" fontSize="8.5" fontWeight="700" fill={t2} fontFamily={SANS} letterSpacing="0.04em">KITCHEN</text>
      <text x="185" y="38" textAnchor="middle" fontSize="9.5" fontWeight="700" fill={t2} fontFamily={SANS}>14.2 m²</text>
      {/* Dining */}
      <rect x="136" y="66" width="98" height="32" fill={C.white} stroke={t2} strokeWidth="1.2" />
      <ellipse cx="185" cy="84" rx="18" ry="9" fill="none" stroke={t3} strokeWidth="0.8" />
      <text x="155" y="82" fontSize="8" fontWeight="700" fill={t2} fontFamily={SANS}>DINING</text>
      {/* Hall */}
      <rect x="6" y="100" width="84" height="58" fill={C.white} stroke={t2} strokeWidth="1.2" />
      <g stroke={t3} strokeWidth="0.6">
        <line x1="14" y1="118" x2="44" y2="118" />
        <line x1="14" y1="124" x2="44" y2="124" />
        <line x1="14" y1="130" x2="44" y2="130" />
        <line x1="14" y1="136" x2="44" y2="136" />
        <line x1="14" y1="142" x2="44" y2="142" />
      </g>
      <text x="65" y="128" textAnchor="middle" fontSize="8" fontWeight="700" fill={t2} fontFamily={SANS}>HALL</text>
      {/* WC */}
      <rect x="92" y="100" width="44" height="28" fill={C.white} stroke={t2} strokeWidth="1.2" />
      <circle cx="116" cy="116" r="3.5" fill="none" stroke={t3} strokeWidth="0.6" />
      <text x="114" y="120" textAnchor="middle" fontSize="7" fontWeight="700" fill={t2} fontFamily={SANS}>WC</text>
      {/* Utility */}
      <rect x="92" y="130" width="44" height="28" fill={C.white} stroke={t2} strokeWidth="1.2" />
      <rect x="98" y="138" width="10" height="14" rx="1" fill="none" stroke={t3} strokeWidth="0.6" />
      <text x="120" y="148" textAnchor="middle" fontSize="7" fontWeight="700" fill={t2} fontFamily={SANS}>UTILITY</text>
      {/* Garage */}
      <rect x="138" y="100" width="96" height="58" fill={C.white} stroke={t2} strokeWidth="1.2" />
      <line x1="143" y1="156" x2="229" y2="156" stroke={t3} strokeWidth="2" />
      <text x="186" y="130" textAnchor="middle" fontSize="8.5" fontWeight="700" fill={t2} fontFamily={SANS}>GARAGE</text>
      {/* North arrow */}
      <g transform="translate(220, 14)">
        <circle r="6" fill={C.white} stroke={t2} strokeWidth="0.6" />
        <path d="M0 -4 L2 2 L0 1 L-2 2 Z" fill={t1} />
        <text y="-7" textAnchor="middle" fontSize="5.5" fontWeight="700" fill={t2} fontFamily={SANS}>N</text>
      </g>
      {/* Stamp */}
      <text x="8" y="167" fontSize="6" fill={t3} fontFamily="var(--font-mono, monospace)" letterSpacing="0.05em">UNIT 9 • 3-BED SEMI • GROUND FLOOR</text>
    </svg>
  );
}

/* Re-export tokens for scene-level use. */
export const tokens = C;
