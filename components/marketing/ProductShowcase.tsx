"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Check,
  CircleDollarSign,
  FileCheck2,
  House,
  ShieldCheck,
  Sparkles,
  ThermometerSun,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/container";

const ease = [0.16, 1, 0.3, 1] as const;

export function AssistantHeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative h-[500px] w-full sm:h-[520px]">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 28, rotate: 1.5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease }}
        className="absolute inset-x-8 top-0 bottom-0 overflow-hidden rounded-[2rem] ring-1 ring-white/15 bg-black/50 shadow-[0_35px_100px_rgba(0,0,0,0.55)] sm:inset-x-14"
      >
        <Image
          src="/images/product/assistant-floorplan-ui.png"
          alt="OpenHouse answering a living-room size question from the home's floor plan"
          fill
          priority
          className="object-contain"
          sizes="(min-width: 1024px) 44vw, 80vw"
        />
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, x: 18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.8, ease }}
        className="absolute right-0 top-16 hidden max-w-[220px] rounded-2xl bg-neutral-950/95 p-4 ring-1 ring-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.45)] sm:block"
      >
        <div className="mb-2 flex items-center gap-2 text-gold">
          <House className="h-4 w-4" aria-hidden="true" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">Home context</span>
        </div>
        <p className="text-sm leading-relaxed text-porcelain/80">Floor plan, room dimensions and the source used for the answer.</p>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1.05, ease }}
        className="absolute bottom-14 left-0 hidden max-w-[215px] rounded-2xl bg-neutral-950/95 p-4 ring-1 ring-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.45)] sm:block"
      >
        <div className="mb-2 flex items-center gap-2 text-gold">
          <BookOpen className="h-4 w-4" aria-hidden="true" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">Source shown</span>
        </div>
        <p className="text-sm leading-relaxed text-porcelain/80">Ground Floor plan, A3. The homeowner can open it directly.</p>
      </motion.div>
    </div>
  );
}

const energyLenses = {
  money: {
    label: "Money",
    icon: CircleDollarSign,
    question: "Why did the bill rise this month?",
    answer: "More EV charging happened during the peak-rate window. Moving those sessions overnight is the clearest next step.",
    sources: ["Smart meter", "Tariff", "EV charger"],
  },
  comfort: {
    label: "Comfort",
    icon: ThermometerSun,
    question: "Why does the house feel cooler in the morning?",
    answer: "The heating schedule ends before the coldest part of the morning. OpenHouse can explain the trade-off before you change it.",
    sources: ["Heat pump", "Schedule", "Home fabric"],
  },
  risk: {
    label: "Risk",
    icon: ShieldCheck,
    question: "Does this need a call-out?",
    answer: "The pressure drop has repeated. Check the approved manual steps first, then escalate with the reading and photo if it drops again.",
    sources: ["System history", "Manual", "Warranty"],
  },
} as const;

type EnergyLens = keyof typeof energyLenses;

function EnergyLensDemo() {
  const [active, setActive] = useState<EnergyLens>("money");
  const reduce = useReducedMotion();
  const current = energyLenses[active];

  return (
    <div className="rounded-[2rem] bg-white/[0.035] p-2 ring-1 ring-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
      <div className="rounded-[1.55rem] bg-[#11110f] p-5 sm:p-7 ring-1 ring-white/10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 ring-1 ring-gold/25">
              <Zap className="h-5 w-5 text-gold" aria-hidden="true" />
            </span>
            <div>
              <p className="font-semibold text-white">Home energy explanation</p>
              <p className="text-xs text-porcelain/45">Example home view</p>
            </div>
          </div>
          <div className="flex gap-1 rounded-full bg-black/40 p-1 ring-1 ring-white/10">
            {(Object.keys(energyLenses) as EnergyLens[]).map((key) => {
              const lens = energyLenses[key];
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActive(key)}
                  className={`rounded-full px-3 py-2 text-xs font-semibold transition-all duration-300 ${active === key ? "bg-gold text-carbon" : "text-porcelain/60 hover:text-white"}`}
                >
                  {lens.label}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease }}
          >
            <div className="mb-4 flex justify-end">
              <div className="max-w-[85%] rounded-2xl rounded-br-md bg-gold/15 px-4 py-3 text-sm text-porcelain ring-1 ring-gold/20">
                {current.question}
              </div>
            </div>
            <div className="rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10">
              <div className="mb-3 flex items-center gap-2 text-gold">
                <current.icon className="h-4 w-4" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.14em]">{current.label}</span>
              </div>
              <p className="text-base leading-relaxed text-porcelain/85">{current.answer}</p>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {current.sources.map((source) => (
                  <span key={source} className="rounded-full bg-white/[0.04] px-3 py-1.5 text-[11px] text-porcelain/55 ring-1 ring-white/10">
                    {source}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ProductFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 1, y: 24, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease }}
      className={`rounded-[2rem] bg-white/[0.035] p-2 ring-1 ring-white/10 shadow-[0_35px_100px_rgba(0,0,0,0.42)] ${className}`}
    >
      <div className="overflow-hidden rounded-[1.55rem] bg-black ring-1 ring-white/10">
        <Image src={src} alt={alt} width={1400} height={900} className="h-auto w-full" sizes="(min-width: 1024px) 70vw, 94vw" />
      </div>
    </motion.div>
  );
}

export function ProductShowcase() {
  const reduce = useReducedMotion();

  return (
    <>
      <section id="product" className="relative overflow-hidden bg-carbon py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(212,175,55,0.11),transparent_42%)]" aria-hidden="true" />
        <Container>
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-gold">Watch what it does</p>
            <h2 className="text-[34px] font-bold leading-[1.04] text-white sm:text-5xl lg:text-[64px] font-heading">A question becomes a sourced answer.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-porcelain/65">The homeowner asks in ordinary language. OpenHouse uses the actual home, system and approved source.</p>
          </div>

          <div className="relative mx-auto mt-14 max-w-6xl">
            <ProductFrame src="/images/product/assistant-e3-ui.png" alt="OpenHouse identifying an E3 heat-pump fault and expanding the answer into five sourced steps" />
            <motion.div
              initial={reduce ? false : { opacity: 1, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45, ease }}
              className="mx-auto -mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-2xl bg-neutral-950/95 px-5 py-4 ring-1 ring-gold/25 shadow-2xl"
            >
              {["Actual Mitsubishi system", "Five clear steps", "Manual page cited"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-porcelain/75">
                  <Check className="h-4 w-4 text-gold" aria-hidden="true" /> {item}
                </span>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#0d0d0b] py-24 sm:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <motion.div
              initial={reduce ? false : { opacity: 1, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease }}
            >
              <Building2 className="mb-6 h-7 w-7 text-gold" aria-hidden="true" />
              <h2 className="text-[34px] font-bold leading-[1.05] text-white sm:text-5xl font-heading">Builders see what happens after keys.</h2>
              <p className="mt-6 text-lg leading-relaxed text-porcelain/65">Which questions OpenHouse resolved. Which needed a person. What purchasers keep struggling with across the scheme.</p>
              <Link href="/developer-dashboard" className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                See the builder view <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </motion.div>
            <ProductFrame src="/images/product/builder-homeowners-ui.png" alt="Builder dashboard showing homeowner questions resolved by OpenHouse and escalated to the team" />
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-carbon py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(212,175,55,0.09),transparent_38%)]" aria-hidden="true" />
        <Container>
          <div className="relative grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <Zap className="mb-6 h-7 w-7 text-gold" aria-hidden="true" />
              <h2 className="text-[34px] font-bold leading-[1.05] text-white sm:text-5xl font-heading">Energy, explained through the home.</h2>
              <p className="mt-6 text-lg leading-relaxed text-porcelain/65">No abstract dashboard. Every answer connects usage to Money, Comfort and Risk, using the home and systems behind it.</p>
              <p className="mt-5 text-sm leading-relaxed text-porcelain/45">Choose a lens in the product preview.</p>
            </div>
            <EnergyLensDemo />
          </div>
        </Container>
      </section>

      <section className="bg-[#12120f] py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 max-w-3xl">
              <FileCheck2 className="mb-5 h-7 w-7 text-gold" aria-hidden="true" />
              <h2 className="text-[32px] font-bold leading-tight text-white sm:text-5xl font-heading">Education and evidence, connected to the home.</h2>
              <p className="mt-5 text-lg leading-relaxed text-porcelain/65">OpenHouse keeps approved guidance accessible and helps builders show what was delivered.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {["BER and NZEB context", "Part L source documents", "Part F ventilation guidance", "Heat-pump education", "Home User Guide evidence", "IGBC HPI-aligned workflows"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/[0.035] px-5 py-4 ring-1 ring-white/10">
                  <Check className="h-4 w-4 flex-shrink-0 text-gold" aria-hidden="true" />
                  <span className="text-sm text-porcelain/75">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-7 max-w-3xl text-sm leading-relaxed text-porcelain/40">OpenHouse supports information and evidence workflows. It does not certify compliance or replace the relevant professional.</p>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-carbon py-28 sm:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.12),transparent_42%)]" aria-hidden="true" />
        <Container>
          <div className="relative mx-auto max-w-3xl text-center">
            <Sparkles className="mx-auto mb-6 h-7 w-7 text-gold" aria-hidden="true" />
            <h2 className="text-[38px] font-bold leading-[1.03] text-white sm:text-6xl font-heading">See your own home type inside OpenHouse.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-porcelain/65">Bring one house type, its systems and purchaser information. We will turn it into a live OpenHouse walkthrough.</p>
            <Link href="/contact" className="group mt-9 inline-flex min-h-[58px] items-center justify-center gap-3 rounded-full bg-gold px-9 py-4 text-base font-semibold text-carbon transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]">
              Book a Demo <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
