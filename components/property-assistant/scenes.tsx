"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  FloatingScreen,
  HomeownerHeader,
  BottomBar,
  Thread,
  UserBubble,
  AssistantCard,
  CardText,
  B,
  ChecklistRow,
  SourceLine,
  GoldCTA,
  DataRow,
  StatusPill,
  EquipmentPhoto,
  FloorPlanDiagram,
  tokens as C,
} from "./PhoneMockup";

/* Small inline icons for data rows, matching the real app's stroke style. */
function DocGlyph() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
      <path d="M3 2h5l3 3v7a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M8 2v3h3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
function SunGlyph() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="2.6" stroke="currentColor" strokeWidth="1.4" />
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <line x1="7" y1="1.5" x2="7" y2="3" />
        <line x1="7" y1="11" x2="7" y2="12.5" />
        <line x1="1.5" y1="7" x2="3" y2="7" />
        <line x1="11" y1="7" x2="12.5" y2="7" />
      </g>
    </svg>
  );
}

const planCtaIcon = (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3 2h6l2 2v8a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
    <path d="M7 7v3M5 8.5l2 1.5 2-1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const checkIcon = (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2.5 6.2l2.2 2.2L9.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* A gold shimmer veil shown over a freshly uploaded photo while it uploads. */
function UploadShimmer() {
  const reduce = useReducedMotion();
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ borderRadius: 12 }}>
      <div className="absolute inset-0" style={{ background: "rgba(212,175,55,0.14)" }} />
      {!reduce && (
        <motion.div
          className="absolute inset-y-0 -left-1/2 w-1/2"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(212,175,55,0.55), transparent)",
          }}
          animate={{ x: ["0%", "400%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <span
        className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full px-2 py-0.5 font-semibold"
        style={{ background: "rgba(26,20,8,0.78)", color: "#F4D77A", fontSize: 9.5, letterSpacing: "0.04em" }}
      >
        Uploading
      </span>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   [1] HERO SCREEN
   The floor plan query: "What size is my living room?", answered with
   the room dimensions and the floor plan diagram, rendered in the real
   app chrome on a frameless floating screen.
   ──────────────────────────────────────────────────────────── */
export function HeroPhone() {
  return (
    <div className="relative flex items-center justify-center">
      <FloatingScreen sizeClass="w-[270px] sm:w-[300px] lg:w-[315px]">
        <HomeownerHeader />
        <Thread>
          <UserBubble>What size is my living room?</UserBubble>
          <AssistantCard>
            <CardText>
              Your <B>living room</B> is <B>28.5 m²</B> (307 sq ft), one of the
              largest in your spec.
            </CardText>
            <div
              className="mt-0.5 flex justify-center rounded-[10px] p-2"
              style={{ background: C.creamPlan, border: `1px solid ${C.border}` }}
            >
              <FloorPlanDiagram width={220} />
            </div>
            <SourceLine>Source · your Ground Floor plan, A3.</SourceLine>
            <GoldCTA icon={planCtaIcon}>Open full floor plan</GoldCTA>
          </AssistantCard>
        </Thread>
        <BottomBar active="Chat" />
      </FloatingScreen>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   [2] MONEY SHOT
   The image-upload capability, told across two frameless screens tilted
   toward each other: the resident photographs the heat pump display and
   asks a question (left), and the assistant reads the image, identifies
   the unit, and returns the sourced 60-second fix (right).
   ──────────────────────────────────────────────────────────── */
const HP_STEPS = [
  "Switch off at the unit and the isolator. Wait 3 minutes.",
  "Find the indoor unit, usually in your utility or hot press.",
  "Check the air filter behind the front panel.",
  "Rinse, dry for 20 minutes, refit.",
  "Switch back on. The red light clears in 2 minutes.",
];

export function MoneyShot() {
  const reduce = useReducedMotion();

  return (
    <div className="relative flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
      {/* Left screen: the resident's photo, mid-upload, with the question */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <FloatingScreen
          sizeClass="w-[270px] sm:w-[300px] lg:w-[315px]"
          time="14:06"
        >
          <HomeownerHeader />
          <Thread>
            <UserBubble>
              <span className="block">This just came on. Is it serious?</span>
              <span className="relative mt-2 block">
                <EquipmentPhoto kind="heatpump" />
                <UploadShimmer />
              </span>
            </UserBubble>
          </Thread>
          <BottomBar active="Chat" inputText="" />
        </FloatingScreen>
      </motion.div>

      {/* Connector */}
      <div className="flex items-center justify-center" aria-hidden="true">
        <span className="flex h-11 w-11 rotate-90 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold lg:rotate-0">
          <ArrowRight className="h-5 w-5" />
        </span>
      </div>

      {/* Right screen: the assistant reads the image and returns the sourced fix */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <FloatingScreen
          sizeClass="w-[270px] sm:w-[300px] lg:w-[315px]"
          time="14:06"
        >
          <HomeownerHeader />
          <Thread>
            <AssistantCard>
              <div className="flex items-center gap-2">
                <EquipmentPhoto kind="heatpump" variant="thumb" />
                <span style={{ fontSize: 10.5, fontWeight: 600, color: C.text2 }}>
                  Looking at your photo
                </span>
              </div>
              <CardText>
                I can see the <B>E3</B> code on your <B>Mitsubishi Ecodan</B>{" "}
                unit. E3 means <B>high pressure</B>, usually a{" "}
                <B>blocked air filter</B>. Not urgent, but should be cleared
                today. Here is the 60-second check your developer recorded for
                this exact unit.
              </CardText>
              <div className="mt-1 flex flex-col gap-2">
                {HP_STEPS.map((step) => (
                  <ChecklistRow key={step}>{step}</ChecklistRow>
                ))}
              </div>
              <SourceLine>
                Source · your Mitsubishi Ecodan installation manual, page 14.
              </SourceLine>
              <StatusPill icon={checkIcon}>Resolved? Let me know</StatusPill>
            </AssistantCard>
          </Thread>
          <BottomBar active="Chat" />
        </FloatingScreen>
      </motion.div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   [4] SCENARIO SCREENS
   Three categories of resident need: financial (live solar data),
   mechanical-diagnostic (heat pump E3), and operational-escalation
   (an in-app snag raised to the developer's care team). Straight at
   desktop so the three-up grid reads clean.
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
      <FloatingScreen sizeClass="w-[270px] sm:w-[300px] lg:w-[315px]" time="11:30">
        {children}
      </FloatingScreen>
      <p className="mt-7 max-w-[320px] text-center text-sm leading-relaxed text-porcelain/60">
        {caption}
      </p>
    </motion.div>
  );
}

export function ScenarioPhones() {
  return (
    <div className="grid w-full grid-cols-1 justify-items-center gap-12 lg:grid-cols-3 lg:gap-6 xl:gap-10">
      {/* Scenario 1: solar generation, live data (financial) */}
      <ScenarioCard delay={0} caption="The answer that used to be a guess.">
        <HomeownerHeader />
        <Thread>
          <UserBubble>How much has my solar saved this month?</UserBubble>
          <AssistantCard>
            <CardText>
              You generated <B>9.5 kWh</B> today. This month you have saved{" "}
              <B>€87.12</B> on your electricity, up 4% on last month.
            </CardText>
            <DataRow
              icon={<SunGlyph />}
              name="Solar + battery"
              meta="9.5 kWh today · €87.12 saved"
              badge="LIVE"
              badgeColor="green"
            />
          </AssistantCard>
        </Thread>
        <BottomBar active="Chat" showInput={false} />
      </ScenarioCard>

      {/* Scenario 2: heat pump diagnosis (mechanical) */}
      <ScenarioCard delay={0.1} caption="The question that used to mean a callout.">
        <HomeownerHeader />
        <Thread>
          <UserBubble>
            There is a red light on my heat pump saying E3. What do I do?
          </UserBubble>
          <AssistantCard>
            <CardText>
              <B>E3</B> means high pressure, usually a <B>blocked air filter</B>.
              Here is the 60-second fix:
            </CardText>
            <div className="mt-1 flex flex-col gap-2">
              {HP_STEPS.slice(0, 3).map((step) => (
                <ChecklistRow key={step}>{step}</ChecklistRow>
              ))}
            </div>
            <SourceLine>Source · your Mitsubishi Ecodan manual, page 14.</SourceLine>
          </AssistantCard>
        </Thread>
        <BottomBar active="Chat" showInput={false} />
      </ScenarioCard>

      {/* Scenario 3: in-app snag escalation (operational) */}
      <ScenarioCard
        delay={0.2}
        caption="The escalation that used to mean a call to the site office."
      >
        <HomeownerHeader />
        <Thread>
          <UserBubble>
            <span className="block">
              There is water pooling under the kitchen sink. Photo attached.
            </span>
            <span className="mt-2 block">
              <EquipmentPhoto kind="leak" />
            </span>
          </UserBubble>
          <AssistantCard>
            <CardText>
              Looks like a connection at the <B>U-bend</B>. This is a snag for
              your developer&apos;s care team, so I have raised it with photos
              and the unit details attached. Reference <B>SR-2026-0341</B>. They
              will be in touch.
            </CardText>
            <StatusPill tone="green" icon={checkIcon}>
              Snag raised
            </StatusPill>
          </AssistantCard>
        </Thread>
        <BottomBar active="Chat" showInput={false} />
      </ScenarioCard>
    </div>
  );
}
