"use client";

import { Building2, MessageCircle, Wrench, Zap } from "lucide-react";
import { FloatingCard } from "../ModuleHero";

/**
 * The hero stage: Developer Dashboard, Property Assistant, Care and the
 * energy layer composed as views of one home record rather than four
 * loose widgets.
 *
 * The Property Assistant is the focal surface, because it is where a
 * source resolves into an answer. The dashboard sits above it as the
 * control plane; Care and the energy layer sit below as extensions.
 * Thin threads connect them: gold where knowledge is verified and a
 * connection resolves, emerald for the existing Care and energy states.
 *
 * Geometry is deliberate and shared. Each card is a centred sibling
 * offset from the same origin, so the connectors are computed from those
 * same coordinates rather than measured at runtime. Illustrative figures
 * keep their "Example" tag.
 */

/* Stage geometry, in px from the centre of the stage.
   Cards sit in two columns with a clear channel between them; the record
   spine runs down that channel and each view taps into it with a short
   stub. Routing is orthogonal, like a services riser, so every run sits
   in negative space instead of disappearing under a card. Stub lengths
   depend only on card width and centre, both of which are exact here. */
const SPINE_X = -72;

const CARD = {
  dashboard: { x: -215, y: -175, w: 224 },
  assistant: { x: 110, y: -10, w: 288 },
  care: { x: -215, y: 115, w: 224 },
  energy: { x: 120, y: 195, w: 208 },
} as const;

const rightEdge = (c: { x: number; w: number }) => c.x + c.w / 2;
const leftEdge = (c: { x: number; w: number }) => c.x - c.w / 2;

const SPINE_TOP = CARD.dashboard.y;
const SPINE_BOTTOM = CARD.energy.y;

/** Horizontal taps into the spine. Gold carries verified record and the
 *  answer it resolves into; emerald stays with the Care and energy states. */
const STUBS = [
  {
    id: "dashboard",
    x: rightEdge(CARD.dashboard),
    y: CARD.dashboard.y,
    width: SPINE_X - rightEdge(CARD.dashboard),
    tone: "bg-gradient-to-r from-gold/15 to-gold/60",
    delay: 0.95,
  },
  {
    id: "assistant",
    x: SPINE_X,
    y: CARD.assistant.y,
    width: leftEdge(CARD.assistant) - SPINE_X,
    tone: "bg-gradient-to-r from-gold/60 to-gold/15",
    delay: 1.5,
  },
  {
    id: "care",
    x: rightEdge(CARD.care),
    y: CARD.care.y,
    width: SPINE_X - rightEdge(CARD.care),
    tone: "bg-gradient-to-r from-emerald-400/15 to-emerald-400/45",
    delay: 1.65,
  },
  {
    id: "energy",
    x: SPINE_X,
    y: CARD.energy.y,
    width: leftEdge(CARD.energy) - SPINE_X,
    tone: "bg-gradient-to-r from-emerald-400/45 to-emerald-400/15",
    delay: 1.75,
  },
];

function ExampleTag() {
  return (
    <span className="inline-flex items-center px-1 py-px rounded text-[8px] font-semibold uppercase tracking-wider text-porcelain/55 border border-white/15 bg-white/5">
      Example
    </span>
  );
}

export function PlatformFloatingCards() {
  return (
    <>
      {/* Connective tissue. Desktop only: on a phone the cards are a
          deliberate swipe row, where threads would be noise. Pure CSS, so
          it renders without JavaScript and simply holds still for anyone
          who prefers reduced motion. */}
      <div
        className="hidden lg:block absolute inset-0 z-[5] pointer-events-none"
        aria-hidden="true"
      >
        {/* The spine: one record, drawn once, top to bottom. */}
        <span
          className="absolute left-1/2 top-1/2 block w-px"
          style={{
            height: SPINE_BOTTOM - SPINE_TOP,
            transform: `translate(${SPINE_X}px, ${SPINE_TOP}px)`,
          }}
        >
          <span
            className="block w-px h-full anim-trace-y bg-gradient-to-b from-gold/55 via-gold/30 to-emerald-400/25"
            style={{ "--anim-delay": "1.15s" } as React.CSSProperties}
          />
          <span
            className="absolute top-0 left-1/2 block w-1 h-1 -ml-[2px] rounded-full anim-node-y bg-gold shadow-[0_0_10px_rgba(212,175,55,0.85)]"
            style={
              {
                "--trace-len": `${SPINE_BOTTOM - SPINE_TOP}px`,
                "--anim-delay": "1.3s",
              } as React.CSSProperties
            }
          />
        </span>

        {/* Each view taps the spine. */}
        {STUBS.map((s) => (
          <span
            key={s.id}
            className="absolute left-1/2 top-1/2 block h-px"
            style={{
              width: s.width,
              transform: `translate(${s.x}px, ${s.y}px)`,
            }}
          >
            <span
              className={`block h-px w-full anim-trace ${s.tone}`}
              style={{ "--anim-delay": `${s.delay}s` } as React.CSSProperties}
            />
          </span>
        ))}
      </div>

      {/* Control plane */}
      <FloatingCard
        depth={2}
        elevation={3}
        delay={0.55}
        className="lg:-translate-x-[215px] lg:-translate-y-[175px]"
      >
        <div className="w-56 card-surface rounded-2xl overflow-hidden">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gold/15 border border-gold/25 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-gold" />
              </div>
              <p className="text-sm font-medium text-porcelain">Developer Dashboard</p>
            </div>
            <div className="space-y-1.5">
              {[
                { label: "Units sale agreed", value: "158", tone: "text-gold" },
                { label: "Docs complete", value: "94%", tone: "text-gold" },
                { label: "Flags", value: "3", tone: "text-amber-400" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between">
                  <span className="text-[10px] text-hint">{row.label}</span>
                  <span className={`text-[10px] font-semibold ${row.tone}`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Focal surface: where a source resolves into an answer */}
      <FloatingCard
        depth={1}
        elevation={4}
        delay={0.45}
        className="lg:translate-x-[110px] lg:-translate-y-[10px]"
      >
        <div className="w-64 lg:w-72 card-surface card-surface-focal rounded-2xl overflow-hidden">
          <div className="p-4 lg:p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gold/15 border border-gold/25 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-gold" />
              </div>
              <div>
                <p className="text-sm font-medium text-porcelain">Property Assistant</p>
                <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  AI Online
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-end">
                <div className="bg-white/[0.07] border border-white/10 rounded-2xl rounded-br-md px-3 py-1.5 max-w-[90%]">
                  <p className="font-serif italic text-[12px] text-porcelain">
                    My heat pump flashed E5 — engineer?
                  </p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="relative bg-gold/[0.07] border border-gold/20 rounded-2xl rounded-bl-md px-3 py-1.5 max-w-[92%]">
                  <span
                    className="absolute left-0 top-2 bottom-2 w-px bg-gold/50"
                    aria-hidden="true"
                  />
                  <p className="text-[11px] text-porcelain">
                    It&rsquo;s a sensor reading. Try this 90-second check first.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Extension: Care */}
      <FloatingCard
        depth={2}
        elevation={2}
        delay={0.75}
        className="lg:-translate-x-[215px] lg:translate-y-[115px]"
      >
        <div className="w-56 card-surface rounded-2xl overflow-hidden border-emerald-500/20">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                <Wrench className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-sm font-medium text-porcelain">Care</p>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-hint">Systems monitored</span>
                <span className="text-[10px] font-semibold text-emerald-400">412</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-hint">Need attention</span>
                <span className="text-[10px] font-semibold text-amber-400">3</span>
              </div>
            </div>
            <div className="mt-2.5">
              <ExampleTag />
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Extension: the energy layer */}
      <FloatingCard
        depth={3}
        elevation={1}
        delay={0.9}
        className="lg:translate-x-[120px] lg:translate-y-[195px]"
      >
        <div className="w-52 card-surface rounded-2xl overflow-hidden border-emerald-500/20">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-emerald-300" />
              </div>
              <span className="text-[10px] font-medium text-emerald-300 uppercase tracking-wider">
                Energy Intelligence
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 mb-2">
              <span className="text-xl font-bold text-emerald-300 font-heading">
                &euro;420/yr
              </span>
              <ExampleTag />
            </div>
            <p className="text-[10px] text-hint mb-2.5">saved by this home</p>
            <div className="flex items-end gap-1 h-[26px]" aria-hidden="true">
              {[22, 19, 16, 13, 10, 8].map((h, i) => (
                <span
                  key={i}
                  className={`w-1.5 rounded-sm ${
                    i >= 4 ? "bg-emerald-400" : "bg-white/15"
                  }`}
                  style={{ height: h }}
                />
              ))}
            </div>
          </div>
        </div>
      </FloatingCard>
    </>
  );
}
