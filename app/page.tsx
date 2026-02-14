"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  FolderOpen,
  Home,
  BarChart3,
  X,
  ChevronDown,
  Users,
  MessageSquare,
  FileText,
  Activity,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";

/* ─── animation variants (matches How It Works page) ─── */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

/* ─── data ─── */
const replacedTools = [
  "Excel Spreadsheets",
  "WhatsApp Groups",
  "Email Chains",
  "Paper Folders",
  "Phone Calls",
  "Nothing for Post-Sale",
];

const journeySteps = [
  { num: "01", label: "Sell", color: "from-blue-500/20 to-blue-500/5", border: "border-blue-500/20" },
  { num: "02", label: "Build", color: "from-emerald-500/20 to-emerald-500/5", border: "border-emerald-500/20" },
  { num: "03", label: "Handover", color: "from-gold/20 to-gold/5", border: "border-gold/20" },
  { num: "04", label: "Learn", color: "from-violet-500/20 to-violet-500/5", border: "border-violet-500/20" },
];

const modules = [
  {
    title: "OpenHouse Sales",
    href: "/sales",
    description:
      "Manage your pipeline from first enquiry to signed contract. Track leads, bookings, deposits, and agent performance — all in one place.",
    icon: TrendingUp,
    accentColor: "blue",
    features: ["Lead Tracking", "Booking Management", "Deposit Tracking", "Agent Dashboards"],
  },
  {
    title: "OpenHouse Build",
    href: "/build",
    description:
      "Compliance, documents, and purchaser selections — under control. Smart archive, PC sum tracking, and a purchaser portal that keeps buyers informed.",
    icon: FolderOpen,
    accentColor: "emerald",
    features: ["Smart Archive", "PC Sum Tracking", "Compliance Docs", "Purchaser Portal"],
  },
  {
    title: "OpenHouse Handover",
    href: "/handover",
    description:
      "The digital home bible with AI-powered resident support. Every home gets an AI assistant trained on its handover files, maps, and development information.",
    icon: Home,
    accentColor: "gold",
    features: ["AI Assistant", "Digital Handover", "NFC Activation", "24/7 Support"],
  },
  {
    title: "OpenHouse Intelligence",
    href: "/intelligence",
    description:
      "Insights no developer has ever had access to. See what residents are asking, spot patterns, identify knowledge gaps, and measure engagement.",
    icon: BarChart3,
    accentColor: "violet",
    features: ["Pattern Detection", "Knowledge Gaps", "Engagement Analytics", "Financial Impact"],
  },
];

const accentMap: Record<string, { bg: string; border: string; text: string; tag: string }> = {
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-400",
    tag: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    tag: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  gold: {
    bg: "bg-gold/10",
    border: "border-gold/20",
    text: "text-gold",
    tag: "bg-gold/10 text-gold border-gold/20",
  },
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    text: "text-violet-400",
    tag: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
};

const stats = [
  { icon: Users, value: "238", label: "Homes Live", suffix: "" },
  { icon: MessageSquare, value: "24/7", label: "AI Support", suffix: "" },
  { icon: Activity, value: "1–2", label: "Second Response", suffix: "s" },
  { icon: FileText, value: "0", label: "Competitors in Ireland", suffix: "" },
];

/* ─── page ─── */
export default function PlatformHomePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-carbon">
      {/* ━━━ HERO ━━━ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 hero-gradient-animated" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.04)_0%,transparent_50%)]" />

        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 sm:pt-48 md:pt-40 lg:pt-32 pb-20">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="max-w-4xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-8">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gold">
                Live on 238 homes at Longview Estates
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 font-heading">
              One platform for every stage of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
                property development
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-porcelain/70 max-w-2xl mb-10 leading-relaxed">
              From first enquiry to years after handover. Replace every
              disconnected tool your team uses with one intelligent platform
              built for residential developers.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-gold via-amber-500 to-gold" />
                <span className="relative z-10 text-carbon flex items-center gap-2">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href="#modules"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-porcelain border border-white/20 hover:border-gold/50 rounded-full transition-all duration-300 hover:bg-white/5"
              >
                See How It Works
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-wider text-porcelain/70">
            Scroll to explore
          </span>
          <ChevronDown className="w-5 h-5 text-porcelain/50 animate-bounce-slow" />
        </div>
      </section>

      {/* ━━━ WHAT YOU'RE REPLACING ━━━ */}
      <section className="py-20 sm:py-28 bg-carbon">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold"
            >
              The Problem
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-porcelain mb-6 font-heading"
            >
              What you&apos;re currently using
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-hint max-w-2xl mx-auto mb-12"
            >
              Residential developers manage entire projects across disconnected
              tools that were never designed for property.
            </motion.p>

            {/* Crossed-out chips */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
            >
              {replacedTools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.4 }}
                  className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-full border border-red-500/20 bg-red-500/5"
                >
                  <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-red-300 line-through decoration-red-400/60">
                    {tool}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ━━━ JOURNEY FLOW ━━━ */}
      <section className="py-20 sm:py-28 bg-slate" id="modules">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-4 py-1.5 rounded-full border border-gold/30 text-gold text-xs tracking-widest font-medium uppercase mb-6"
            >
              The Developer Journey
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-porcelain mb-4 font-heading"
            >
              Four modules.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
                One platform.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-hint max-w-2xl mx-auto"
            >
              OpenHouse maps to every stage of the development lifecycle — from
              selling your first unit to learning from residents years later.
            </motion.p>
          </motion.div>

          {/* Journey steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
          >
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.label}
                variants={fadeInUp}
                className={`relative rounded-2xl bg-gradient-to-br ${step.color} border ${step.border} p-6 text-center`}
              >
                <span className="text-4xl font-bold text-porcelain/20 font-heading">
                  {step.num}
                </span>
                <p className="text-lg font-semibold text-porcelain mt-2">
                  {step.label}
                </p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-porcelain/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Module cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {modules.map((mod, index) => {
              const accent = accentMap[mod.accentColor];
              const Icon = mod.icon;

              return (
                <motion.div
                  key={mod.title}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{
                    y: -4,
                    boxShadow:
                      "0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(200, 167, 94, 0.1)",
                  }}
                  className="group relative bg-carbon/60 border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-colors elev-1-dark cursor-pointer"
                >
                  <Link href={mod.href} className="absolute inset-0 z-10" aria-label={mod.title} />

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl ${accent.bg} border ${accent.border} flex items-center justify-center mb-5`}
                  >
                    <Icon className={`w-6 h-6 ${accent.text}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-porcelain mb-3 flex items-center gap-3">
                    {mod.title}
                    <ArrowRight className="w-5 h-5 text-porcelain/30 transition-all group-hover:text-gold group-hover:translate-x-1" />
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-porcelain/70 leading-relaxed mb-5">
                    {mod.description}
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2">
                    {mod.features.map((feature) => (
                      <span
                        key={feature}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${accent.tag}`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ━━━ PROOF / STATS ━━━ */}
      <section className="py-20 sm:py-28 bg-carbon relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,167,94,0.03)_0%,transparent_70%)]" />
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-4 py-1.5 rounded-full border border-gold/30 text-gold text-xs tracking-widest font-medium uppercase mb-6"
            >
              In Production
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-porcelain font-heading"
            >
              Not a prototype.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
                In production.
              </span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-carbon/60 border border-white/10 rounded-2xl p-6 text-center hover:border-gold/30 transition-colors elev-1-dark"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <p className="text-3xl sm:text-4xl font-bold text-porcelain font-heading mb-1">
                    {stat.value}
                    {stat.suffix && (
                      <span className="text-lg text-porcelain/50">{stat.suffix}</span>
                    )}
                  </p>
                  <p className="text-sm text-hint">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ━━━ BUILT BY A DEVELOPER ━━━ */}
      <section className="py-20 sm:py-28 bg-slate">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-4 py-1.5 rounded-full border border-gold/30 text-gold text-xs tracking-widest font-medium uppercase mb-6"
            >
              Why OpenHouse
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-porcelain mb-6 font-heading"
            >
              Built by a developer.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
                For developers.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-hint leading-relaxed mb-8"
            >
              OpenHouse wasn&apos;t designed in a lab. It was built by someone
              actively developing over 750 homes in Cork — to solve the exact
              problems property developers deal with every day. That&apos;s why
              every feature works the way you&apos;d expect, not the way a tech
              company assumes.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              {[
                "No learning curve",
                "Faster than a spreadsheet",
                "Live in minutes",
                "Irish-built",
              ].map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-sm font-medium text-gold"
                >
                  {point}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ━━━ FINAL CTA ━━━ */}
      <section className="py-20 bg-gradient-to-b from-carbon to-slate border-t border-gold/10">
        <Container>
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-porcelain mb-4 font-heading">
              Ready to run your developments from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
                one platform?
              </span>
            </h2>
            <p className="text-lg text-hint max-w-2xl mx-auto mb-10">
              See how OpenHouse replaces every disconnected tool your team
              currently relies on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-carbon font-semibold rounded-full hover:bg-gold/90 transition-all shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:scale-105"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/handover"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-porcelain border border-white/20 hover:border-gold/50 rounded-full transition-all duration-300 hover:bg-white/5"
              >
                Explore Handover Module
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

