"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarClock } from "lucide-react";
import {
  PhoneMockup,
  AssistantHeader,
  DayDivider,
  ResidentBubble,
  AssistantBubble,
  HeatPumpPhoto,
  ThermostatPhoto,
  PhotoThumb,
  UploadingIndicator,
  DocumentPill,
  VideoThumb,
  ResolvedPill,
  InputBar,
} from "./PhoneMockup";

/* The shared message-area wrapper inside a screen. */
function Thread({ children }: { children: React.ReactNode }) {
  return <div className="space-y-2.5 px-3 py-3">{children}</div>;
}

/* ────────────────────────────────────────────────────────────
   [1] HERO PHONE
   A single oversized phone showing the kitchen-tile warranty thread.
   ──────────────────────────────────────────────────────────── */
export function HeroPhone() {
  return (
    <div className="relative flex items-center justify-center">
      {/* gold edge-glow */}
      <div className="absolute inset-0 -z-10 scale-90 rounded-full bg-gold/20 blur-3xl" />
      {/* OpenHouse mark watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 select-none font-heading text-[12rem] font-bold leading-none text-white/[0.03]"
      >
        OH
      </span>
      <PhoneMockup widthClass="w-[300px]" float floatDistance={14}>
        <AssistantHeader />
        <Thread>
          <DayDivider label="Today 9:24" />
          <ResidentBubble time="9:24">
            What&apos;s the warranty on my kitchen tiles?
          </ResidentBubble>
          <AssistantBubble time="9:24">
            Your kitchen tiles are the Porcelanosa Stark range, installed in
            October 2024. The manufacturer warranty is 10 years against defects.
            Here is the warranty document and the care instructions for the Stark
            glaze.
            <DocumentPill label="Stark tile warranty.pdf" />
          </AssistantBubble>
        </Thread>
        <InputBar placeholder="Ask about your home" />
      </PhoneMockup>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   [2] MONEY SHOT
   Two phones telling one sequential story: photo upload, then the
   assistant's diagnosis. Stacks on mobile.
   ──────────────────────────────────────────────────────────── */
export function MoneyShot() {
  const reduce = useReducedMotion();

  return (
    <div className="relative flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-center lg:gap-6 xl:gap-10">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[420px] w-[420px] rounded-full bg-gold/15 blur-[120px]" />
      </div>

      {/* Left phone: the resident sends a photo */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <PhoneMockup widthClass="w-[290px] sm:w-[310px]" time="14:06">
          <AssistantHeader />
          <Thread>
            <DayDivider label="Today 14:06" />
            <ResidentBubble time="14:06">
              This just came on. Is it serious?
            </ResidentBubble>
            <div className="flex justify-end">
              <div className="w-[70%]">
                <HeatPumpPhoto error="E4" />
              </div>
            </div>
            <UploadingIndicator />
          </Thread>
        </PhoneMockup>
      </motion.div>

      {/* Connector */}
      <div className="flex items-center justify-center" aria-hidden="true">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold lg:rotate-0 rotate-90">
          <ArrowRight className="h-5 w-5" />
        </span>
      </div>

      {/* Right phone: the assistant responds */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <PhoneMockup widthClass="w-[290px] sm:w-[310px]" time="14:06">
          <AssistantHeader />
          <Thread>
            <AssistantBubble>
              <PhotoThumb label="Photo you sent">
                <HeatPumpPhoto error="E4" />
              </PhotoThumb>
              That is an E4 error on your Daikin Altherma 3 R, the heat pump in
              your utility room. E4 means low water flow, usually caused by a
              closed valve or air in the system. It is not urgent, but it should
              be cleared today.
            </AssistantBubble>
            <AssistantBubble time="14:06">
              Here is the 60-second check your developer recorded for this exact
              unit. If it does not fix it, I will send the issue to your
              developer&apos;s customer care team.
              <VideoThumb label="60-second pressure check" />
            </AssistantBubble>
            <ResolvedPill />
          </Thread>
        </PhoneMockup>
      </motion.div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   [4] SCENARIO PHONES
   Three concrete scenarios, each a small phone plus a caption.
   ──────────────────────────────────────────────────────────── */

function ScenarioCard({
  children,
  caption,
  delay,
}: {
  children: React.ReactNode;
  caption: string;
  delay: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <PhoneMockup widthClass="w-[260px]" time="11:30">
        {children}
      </PhoneMockup>
      <p className="mt-6 max-w-[260px] text-center text-sm leading-relaxed text-porcelain/60">
        {caption}
      </p>
    </motion.div>
  );
}

export function ScenarioPhones() {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-12 md:grid-cols-3 md:gap-6 lg:gap-8">
      {/* Scenario 1: where is X */}
      <ScenarioCard
        delay={0}
        caption="The question that used to go to your customer care line."
      >
        <AssistantHeader />
        <Thread>
          <ResidentBubble time="11:30">Where&apos;s my BER cert?</ResidentBubble>
          <AssistantBubble time="11:30">
            Right here. Your home has a B1 rating from your BER assessment in
            February 2024. Download the cert below.
            <DocumentPill label="BER certificate, B1.pdf" />
          </AssistantBubble>
        </Thread>
      </ScenarioCard>

      {/* Scenario 2: what does X mean */}
      <ScenarioCard
        delay={0.1}
        caption="The question that used to mean a callout."
      >
        <AssistantHeader />
        <Thread>
          <div className="flex justify-end">
            <div className="w-[58%]">
              <ThermostatPhoto />
            </div>
          </div>
          <ResidentBubble time="11:30">What&apos;s this light mean?</ResidentBubble>
          <AssistantBubble time="11:30">
            That is the Honeywell T6R Pro showing a no-signal warning. The
            thermostat has lost its connection to the receiver. Here is the
            30-second re-pairing walkthrough.
            <VideoThumb label="30-second re-pairing" />
          </AssistantBubble>
        </Thread>
      </ScenarioCard>

      {/* Scenario 3: can you do X */}
      <ScenarioCard
        delay={0.2}
        caption="The job that used to live on someone's to-do list, forever."
      >
        <AssistantHeader />
        <Thread>
          <ResidentBubble time="11:30">
            My boiler service is due. Can you help?
          </ResidentBubble>
          <AssistantBubble time="11:30">
            Yes. Your boiler is the Worcester Greenstar 30CDi Compact, last
            serviced October 2024. Next service is recommended for October 2025.
            Want me to send a request to your usual installer?
            <button
              type="button"
              className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-gold to-amber-500 px-3 py-2 text-[11px] font-semibold text-carbon transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
            >
              <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" />
              Send service request
            </button>
          </AssistantBubble>
        </Thread>
      </ScenarioCard>
    </div>
  );
}
