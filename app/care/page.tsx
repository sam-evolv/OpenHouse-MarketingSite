"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Heart,
  MessageSquare,
  CheckCircle,
  TrendingUp,
  QrCode,
  FileText,
  Monitor,
  Clock,
  Shield,
  Play,
  BarChart3,
} from "lucide-react";

// Hero background — swap this import for the heat-pump image when ready
import heroBackground from "@/attached_assets/stock_images/apartment_building_l_645cb5c9.jpg";

const easeOut = [0.16, 1, 0.3, 1] as const;

const getFadeInUp = (reducedMotion: boolean | null) => ({
  hidden: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: reducedMotion ? 0 : 0.5, ease: easeOut },
  },
});

const getStaggerContainer = (reducedMotion: boolean | null) => ({
  hidden: { opacity: reducedMotion ? 1 : 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: reducedMotion ? 0 : 0.08,
      delayChildren: reducedMotion ? 0 : 0.2,
    },
  },
});

const getStaggerItem = (reducedMotion: boolean | null) => ({
  hidden: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: reducedMotion ? 0 : 0.6, ease: easeOut },
  },
});

/* ── Data ──────────────────────────────────────────────────── */

const stats = [
  {
    number: "30\u201340%",
    label:
      "of heat pump callouts are for issues the homeowner could resolve themselves",
  },
  {
    number: "\u20AC150\u2013220",
    label:
      "average cost per callout including engineer time, travel, and diagnostic fees",
  },
  {
    number: "500,000",
    label: "heat pumps targeted for installation in Ireland by 2030",
  },
];

const steps = [
  {
    title: "We learn your systems",
    description:
      "Share your product manuals, install guides, and common troubleshooting steps. We build a knowledge base specific to the exact equipment you fit.",
  },
  {
    title: "Your portal goes live",
    description:
      "A branded aftercare assistant, in your name, accessible via QR code. No app downloads. Works on any device, instantly.",
  },
  {
    title: "Customers self-serve",
    description:
      "Homeowners describe their issue. The AI diagnoses it, explains what caused it, and walks them through the fix. Step by step, in plain English.",
  },
];

const features = [
  {
    icon: MessageSquare,
    title: "AI Diagnostics",
    description:
      "Trained on your exact equipment. Diagnoses faults, explains causes, and provides step-by-step resolution in plain language.",
  },
  {
    icon: FileText,
    title: "Guides and Explainer Videos",
    description:
      "Step-by-step maintenance guides and video walkthroughs so homeowners can learn how their systems actually work.",
  },
  {
    icon: Monitor,
    title: "Your Brand, Your Portal",
    description:
      "Fully branded in your company name and colours. Your customers see you, not us. It\u2019s your aftercare experience, elevated.",
  },
  {
    icon: QrCode,
    title: "QR Code Activation",
    description:
      "No app downloads, no logins, no friction. Homeowners scan a QR code and they\u2019re in. Stick it on the unit, include it in the handover pack.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Your aftercare doesn\u2019t clock off at 5pm. Homeowners get answers at midnight on a Sunday, without your phone ringing.",
  },
  {
    icon: Shield,
    title: "Reduce Callbacks, Not Quality",
    description:
      "Your customers get better support, faster. Your team gets freed up for the work that actually needs an engineer on site.",
  },
];

const industries = [
  "Heat Pumps",
  "Solar PV",
  "Battery Storage",
  "HVAC",
  "EV Chargers",
  "Alarm Systems",
  "Water Treatment",
  "Ventilation Systems",
  "Underfloor Heating",
  "Smart Home",
];

/* ── Page ──────────────────────────────────────────────────── */

export default function CarePage() {
  const prefersReducedMotion = useReducedMotion();

  const fadeInUp = getFadeInUp(prefersReducedMotion);
  const staggerContainer = getStaggerContainer(prefersReducedMotion);
  const staggerItem = getStaggerItem(prefersReducedMotion);

  return (
    <main className="bg-[#0b0c0f] min-h-screen">
      {/* ─── HERO ────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-carbon">
        {/* Background image with overlays — same pattern as HeroParallax */}
        <div className="absolute inset-0 scale-110 overflow-hidden">
          <Image
            src={heroBackground}
            alt="Heat pump installation"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-carbon/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-carbon/30" />
        </div>

        {/* Gold arc decoration */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 70% 50%, rgba(212,175,55,0.07) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 sm:pt-48 md:pt-40 lg:pt-32 pb-20 lg:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[70vh] lg:min-h-[75vh]">
            {/* Left — Text Content */}
            <motion.div
              initial={
                prefersReducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.8, delay: 0.2, ease: easeOut }
              }
              className="relative z-20"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-carbon/40 backdrop-blur-xl rounded-3xl" />
                <div className="relative p-4">
                  {/* Breadcrumb */}
                  <div className="flex items-center gap-3 mb-6">
                    <Link
                      href="/"
                      className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-gold transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Platform
                    </Link>
                    <motion.div
                      initial={
                        prefersReducedMotion
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.9 }
                      }
                      animate={{ opacity: 1, scale: 1 }}
                      transition={
                        prefersReducedMotion ? { duration: 0 } : { delay: 0.4 }
                      }
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/30"
                    >
                      <Heart className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-medium text-emerald-300">
                        Care Module
                      </span>
                    </motion.div>
                  </div>

                  {/* Headline */}
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                    Stop the{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
                      callouts
                    </span>{" "}
                    that don&apos;t need an engineer
                  </h1>

                  {/* Subheadline */}
                  <p className="text-lg sm:text-xl text-porcelain/80 mb-8 max-w-xl leading-relaxed">
                    30&#8211;40% of heat pump callouts are for issues the
                    homeowner could resolve themselves. OpenHouse Care gives your
                    customers instant AI support, branded for your business,
                    trained on your exact systems.
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-gold via-amber-500 to-gold" />
                      <span className="relative z-10 text-carbon flex items-center gap-2">
                        Get in Touch
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>

                    <a
                      href="#how-it-works"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-porcelain border border-white/20 hover:border-gold/50 rounded-full transition-all duration-300 hover:bg-white/5"
                    >
                      See How It Works
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — Floating Product Cards */}
            <div className="relative hidden lg:flex items-center justify-center h-[500px]">
              {/* Card 1: AI Chat (largest, center-right) */}
              <motion.div
                className="absolute"
                style={{ zIndex: 20 }}
                initial={
                  prefersReducedMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 50 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 0.6, delay: 0.6, ease: easeOut }
                }
              >
                <div className="relative -translate-x-4 translate-y-4">
                  <AIChatCard />
                </div>
              </motion.div>

              {/* Card 2: Diagnostics (top-right) */}
              <motion.div
                className="absolute"
                style={{ zIndex: 30 }}
                initial={
                  prefersReducedMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 50 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 0.6, delay: 0.8, ease: easeOut }
                }
              >
                <div className="relative translate-x-24 -translate-y-28">
                  <DiagnosticsCard />
                </div>
              </motion.div>

              {/* Card 3: Installer Stats (bottom-right) */}
              <motion.div
                className="absolute"
                style={{ zIndex: 10 }}
                initial={
                  prefersReducedMotion
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                animate={{ opacity: 1, scale: 1 }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 0.6, delay: 1, ease: easeOut }
                }
              >
                <div className="relative translate-x-32 translate-y-28">
                  <InstallerStatsCard />
                </div>
              </motion.div>

              {/* Card 4: QR Activation (small, floating) */}
              <motion.div
                className="absolute"
                style={{ zIndex: 30 }}
                initial={
                  prefersReducedMotion
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                animate={{ opacity: 1, scale: 1 }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 0.6, delay: 1.2, ease: easeOut }
                }
              >
                <div className="relative -translate-x-32 -translate-y-20">
                  <QRActivationCard />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={prefersReducedMotion ? { duration: 0 } : { delay: 1.5 }}
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-porcelain/70">
              Scroll to explore
            </span>
            <ChevronDown
              className={`w-5 h-5 text-porcelain/60 ${
                prefersReducedMotion ? "" : "motion-safe:animate-bounce"
              }`}
            />
          </div>
        </motion.div>
      </section>

      {/* ─── PROBLEM SECTION ─────────────────────────────── */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-gold text-xs tracking-[0.1em] font-semibold uppercase">
            The Problem
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Your engineers are solving problems that take 5 minutes to fix
          </h2>
          <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
            Wrong thermostat settings. Dirty filters. Defrost mode confusion.
            Hot water scheduling errors. Your customers don&apos;t know how to
            troubleshoot their systems, so they call you. Every time.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.number}
              variants={staggerItem}
              className="group bg-[#0f1115] rounded-2xl p-8 border border-[#1e2531] hover:border-gold/30 hover:shadow-[0_8px_32px_rgba(212,175,55,0.08)] transition-all duration-300"
            >
              <p className="text-4xl md:text-5xl font-bold text-gold tracking-tight">
                {stat.number}
              </p>
              <p className="mt-4 text-neutral-400 leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── HOW IT WORKS ────────────────────────────────── */}
      <section
        id="how-it-works"
        className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto scroll-mt-20"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-gold text-xs tracking-[0.1em] font-semibold uppercase">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Live in minutes. Saving you money from day one.
          </h2>
          <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
            We build your branded aftercare portal, trained on the exact systems
            you install. Your customers access it via QR code from the moment of
            handover.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative"
        >
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-gradient-to-r from-gold/50 via-gold/30 to-gold/50" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={staggerItem}
              className="relative group bg-[#0f1115] rounded-2xl p-8 border border-[#1e2531] hover:border-gold/30 hover:shadow-[0_8px_32px_rgba(212,175,55,0.08)] transition-all duration-300"
            >
              <div className="relative z-10 w-12 h-12 rounded-full bg-gold text-carbon flex items-center justify-center text-lg font-semibold shadow-[0_0_20px_rgba(212,175,55,0.3)] mb-6">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── VIDEO SECTION ───────────────────────────────── */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <p className="text-center text-sm text-neutral-500 mb-6 tracking-wide">
            Watch a real fault diagnosed and resolved without a callout
          </p>
          <div className="relative rounded-2xl overflow-hidden border border-[#1e2531] shadow-2xl max-w-4xl mx-auto bg-[#0f1115] group cursor-pointer">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-[#12151b] to-[#0f1115]">
              {/* Play button overlay */}
              <div className="w-20 h-20 rounded-full bg-gold/90 flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.3)] group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transition-all duration-300">
                <Play className="w-8 h-8 text-carbon ml-1" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <p className="text-xs text-neutral-600">Video coming soon</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── FEATURES SECTION ────────────────────────────── */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-gold text-xs tracking-[0.1em] font-semibold uppercase">
            What&apos;s Included
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Everything your customers need. Nothing your engineers have to
            manage.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              className="group bg-[#0f1115] rounded-2xl p-8 border border-[#1e2531] hover:border-gold/30 hover:shadow-[0_8px_32px_rgba(212,175,55,0.12)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-14 h-14 rounded-xl bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300 mb-6">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── INDUSTRIES SECTION ──────────────────────────── */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-gold text-xs tracking-[0.1em] font-semibold uppercase">
            Works for Any Trade
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            If you install it and your customers have questions about it,
            OpenHouse Care can support it.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {industries.map((industry) => (
            <motion.span
              key={industry}
              variants={staggerItem}
              className="px-5 py-2.5 rounded-full text-sm font-medium text-neutral-300 bg-[#12151b] border border-[#1e2531] hover:border-gold/50 hover:text-gold hover:bg-gold/5 transition-all duration-300 cursor-default"
            >
              {industry}
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* ─── CTA SECTION ─────────────────────────────────── */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_70%)]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <span className="text-gold text-xs tracking-[0.1em] font-semibold uppercase">
            Get Started
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            Tired of unnecessary callouts?
          </h2>
          <p className="mt-4 text-lg text-neutral-400 leading-relaxed">
            We&apos;d love to show you how OpenHouse Care works for your
            business. Reach out and we&apos;ll walk you through it.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold text-carbon h-12 px-8 text-base font-medium rounded-xl hover:bg-gold/90 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] active:scale-[0.98] shadow-sm border border-gold/20 transition-all duration-150"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-neutral-300 h-12 px-8 text-base font-medium rounded-xl border border-[#374151] hover:bg-white/5 hover:border-neutral-500 hover:text-white active:scale-[0.98] transition-all duration-150"
            >
              Back to Platform
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

/* ── Floating Hero Cards ─────────────────────────────────── */

function AIChatCard() {
  return (
    <div className="w-72 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
      <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
          <Heart className="w-4 h-4 text-gold" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-porcelain">OpenHouse Care</p>
          <p className="text-[10px] text-green-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
            AI Online
          </p>
        </div>
      </div>
      <div className="p-4 space-y-3">
        {/* Homeowner message */}
        <div className="flex justify-end">
          <div className="bg-gold/20 rounded-2xl rounded-br-md px-4 py-2.5 max-w-[85%]">
            <p className="text-sm text-porcelain">
              My heat pump is showing an E3 fault code
            </p>
            <p className="text-[9px] text-hint mt-1">Just now</p>
          </div>
        </div>
        {/* AI response */}
        <div className="flex justify-start">
          <div className="bg-white/10 rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[85%]">
            <p className="text-sm text-porcelain">
              This is a low pressure fault. Let me walk you through the fix...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DiagnosticsCard() {
  return (
    <div className="w-56 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
      <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
        </div>
        <p className="text-sm font-medium text-porcelain">Diagnostics</p>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <p className="text-sm font-medium text-emerald-400">Fault Resolved</p>
        </div>
        <p className="text-xs text-neutral-400">
          E3 Low Pressure &mdash; Filter clean required
        </p>
        <div className="flex items-center gap-2 pt-2 border-t border-white/5">
          <Clock className="w-3.5 h-3.5 text-neutral-500" />
          <p className="text-xs text-neutral-500">2 mins &mdash; No callout</p>
        </div>
      </div>
    </div>
  );
}

function InstallerStatsCard() {
  return (
    <div className="w-52 bg-slate/90 backdrop-blur-md rounded-2xl border border-gold/20 shadow-2xl overflow-hidden">
      <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
          <TrendingUp className="w-4 h-4 text-gold" />
        </div>
        <p className="text-sm font-medium text-porcelain">Callout Savings</p>
      </div>
      <div className="p-4">
        <p className="text-3xl font-bold text-gold tracking-tight">
          {"\u20AC"}27,400
        </p>
        <p className="text-xs text-neutral-500 mt-1">saved this year</p>

        {/* Mini bar chart */}
        <div className="flex items-end gap-1 mt-4 h-8">
          {[35, 50, 40, 65, 55, 80, 70, 90].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-gold/30"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>

        <div className="flex items-center gap-1.5 mt-3">
          <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
          <p className="text-xs text-emerald-400">152 callouts prevented</p>
        </div>
      </div>
    </div>
  );
}

function QRActivationCard() {
  return (
    <div className="w-44 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
      <div className="p-4 text-center space-y-3">
        <div className="w-12 h-12 mx-auto rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
          <QrCode className="w-6 h-6 text-gold" />
        </div>
        <div>
          <p className="text-sm font-medium text-porcelain">Scan to activate</p>
          <p className="text-[10px] text-neutral-500 mt-1">
            No app download required
          </p>
        </div>
      </div>
    </div>
  );
}
