"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  PhoneFrame,
  HomeownerHeader,
  BottomBar,
  Thread,
  UserBubble,
  AssistantCard,
  CardText,
  B,
  ChecklistRow,
  SourceLine,
  DataRow,
  ChatHomeScreen,
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

/* ────────────────────────────────────────────────────────────
   [1] HERO PHONE
   The Property Assistant welcome screen, the genuine first-impression a
   resident sees: the gold mark and halo, the welcome headline, the four
   quick-prompt pills, and the input pill. Rendered as a still product shot
   in the real app chrome.
   ──────────────────────────────────────────────────────────── */
export function HeroPhone() {
  return (
    <div className="relative flex items-center justify-center">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 select-none font-heading text-[12rem] font-bold leading-none text-white/[0.03]"
      >
        OH
      </span>
      <PhoneFrame widthClass="w-[420px] xl:w-[440px]" tilt={-6}>
        <ChatHomeScreen />
      </PhoneFrame>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   [2] MONEY SHOT
   The real heat pump E3 self-diagnosis, told across two phones:
   the question and diagnosis on the left, the step-by-step fix and
   the sourced citation on the right. No photo-upload UI: this matches
   the real text-based app flow (asset README, Option A).
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
    <div className="relative mx-auto flex max-w-[1140px] flex-col items-center justify-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[520px] w-[760px] rounded-full bg-gold/15 blur-[130px]" />
      </div>

      {/* Left phone: the question + the diagnosis */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <PhoneFrame widthClass="w-[300px] sm:w-[380px] xl:w-[420px]" time="14:06" tilt={7}>
          <HomeownerHeader />
          <Thread>
            <UserBubble>
              There is a red light flashing on my heat pump and it is saying E3.
              What do I do?
            </UserBubble>
            <AssistantCard>
              <CardText>
                <B>E3</B> means high pressure in your heat pump, usually a{" "}
                <B>blocked air filter</B>. Here is how to clear it:
              </CardText>
            </AssistantCard>
          </Thread>
          <BottomBar active="Chat" inputText="" />
        </PhoneFrame>
      </motion.div>

      {/* Connector */}
      <div className="flex items-center justify-center" aria-hidden="true">
        <span className="flex h-11 w-11 rotate-90 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold lg:rotate-0">
          <ArrowRight className="h-5 w-5" />
        </span>
      </div>

      {/* Right phone: the step-by-step fix + the citation */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <PhoneFrame widthClass="w-[300px] sm:w-[380px] xl:w-[420px]" time="14:06" tilt={-7}>
          <HomeownerHeader />
          <Thread>
            <AssistantCard>
              <CardText>
                <B>E3</B> means high pressure in your heat pump, usually a{" "}
                <B>blocked air filter</B>. Here is how to clear it:
              </CardText>
              <div className="mt-1 flex flex-col gap-2">
                {HP_STEPS.map((step) => (
                  <ChecklistRow key={step}>{step}</ChecklistRow>
                ))}
              </div>
              <SourceLine>
                Source · your Mitsubishi Ecodan installation manual, page 14.
              </SourceLine>
            </AssistantCard>
          </Thread>
          <BottomBar active="Chat" />
        </PhoneFrame>
      </motion.div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   [4] SCENARIO PHONES
   Three real flows: floor plan on tap, heat pump diagnosis, and a
   document lookup, each with a caption.
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
      <PhoneFrame widthClass="w-[300px] sm:w-[330px] xl:w-[340px]" time="11:30">
        {children}
      </PhoneFrame>
      <p className="mt-7 max-w-[330px] text-center text-sm leading-relaxed text-porcelain/60">
        {caption}
      </p>
    </motion.div>
  );
}

export function ScenarioPhones() {
  return (
    <div className="grid w-full grid-cols-1 justify-items-center gap-12 lg:grid-cols-3 lg:gap-8 xl:gap-12">
      {/* Scenario 1: solar generation, live data */}
      <ScenarioCard
        delay={0}
        caption="The answer that used to be a guess."
      >
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

      {/* Scenario 2: heat pump diagnosis */}
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

      {/* Scenario 3: documents and warranties */}
      <ScenarioCard
        delay={0.2}
        caption="The document that used to live in a binder no one opened."
      >
        <HomeownerHeader />
        <Thread>
          <UserBubble>When does my BER cert expire?</UserBubble>
          <AssistantCard>
            <CardText>
              Your home holds an <B>A2</B> rating. Your BER cert is valid until{" "}
              <B>2036</B>. Here it is.
            </CardText>
            <DataRow
              icon={<DocGlyph />}
              name="BER report"
              meta="A2 · valid until 2036"
              badge="ON FILE"
              badgeColor="green"
            />
          </AssistantCard>
        </Thread>
        <BottomBar active="Docs" showInput={false} />
      </ScenarioCard>
    </div>
  );
}
