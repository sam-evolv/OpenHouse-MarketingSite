"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Wrench,
  MessageSquare,
  CheckCircle,
  TrendingUp,
  QrCode,
  FileText,
  Monitor,
  Clock,
  Shield,
  Play,
} from "lucide-react";

const easeOut = [0.16, 1, 0.3, 1] as const;

const getFadeInUp = (reducedMotion: boolean | null) => ({
  hidden: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: reducedMotion ? 0 : 0.6, ease: easeOut },
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

/* ─── Data ─── */

const stats = [
  {
    value: "30-40%",
    label:
      "of heat pump callouts are for issues the homeowner could resolve themselves",
  },
  {
    value: "\u20AC150-220",
    label:
      "average cost per callout including engineer time, travel, and diagnostic fees",
  },
  {
    value: "500,000",
    label:
      "heat pumps targeted for installation in Ireland by 2030",
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
      "Fully branded in your company name and colours. Your customers see you, not us. It's your aftercare experience, elevated.",
  },
  {
    icon: QrCode,
    title: "QR Code Activation",
    description:
      "No app downloads, no logins, no friction. Homeowners scan a QR code and they're in. Stick it on the unit, include it in the handover pack.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Your aftercare doesn't clock off at 5pm. Homeowners get answers at midnight on a Sunday, without your phone ringing.",
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

/* ─── Page Component ─── */

export default function CarePage() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const card1X = useTransform(smoothMouseX, [0, 1], [-20, 20]);
  const card1Y = useTransform(smoothMouseY, [0, 1], [-15, 15]);
  const card2X = useTransform(smoothMouseX, [0, 1], [-35, 35]);
  const card2Y = useTransform(smoothMouseY, [0, 1], [-25, 25]);
  const card3X = useTransform(smoothMouseX, [0, 1], [-50, 50]);
  const card3Y = useTransform(smoothMouseY, [0, 1], [-35, 35]);

  const fadeInUp = getFadeInUp(prefersReducedMotion);
  const staggerContainer = getStaggerContainer(prefersReducedMotion);
  const staggerItem = getStaggerItem(prefersReducedMotion);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMounted, prefersReducedMotion, mouseX, mouseY]);

  return (
    <main className="bg-[#0b0c0f] min-h-screen">
      {/* ═══════════════════════════════════════════════════
          HERO SECTION
         ═══════════════════════════════════════════════════ */}
      <section
        ref={containerRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background gradient + gold arc */}
        <div className="hero-gradient-animated" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c0f] via-[#0b0c0f]/60 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0f] via-transparent to-[#0b0c0f]/30 z-[1]" />

        {/* Decorative gold arc */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          <svg
            className="absolute top-0 right-0 w-[800px] h-[800px] opacity-[0.06]"
            viewBox="0 0 800 800"
            fill="none"
          >
            <circle
              cx="600"
              cy="200"
              r="400"
              stroke="#D4AF37"
              strokeWidth="1"
            />
            <circle
              cx="600"
              cy="200"
              r="300"
              stroke="#D4AF37"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 sm:pt-48 md:pt-40 lg:pt-32 pb-20 lg:pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[70vh] lg:min-h-[75vh]">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-20"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-[#0b0c0f]/40 backdrop-blur-xl rounded-3xl" />
                <div className="relative p-4">
                  {/* Breadcrumb */}
                  <div className="flex items-center gap-3 mb-6">
                    <Link
                      href="/"
                      className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-gold transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Platform
                    </Link>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30"
                    >
                      <Wrench className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-sm font-medium text-emerald-400">
                        Care Module
                      </span>
                    </motion.div>
                  </div>

                  {/* Headline */}
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                    Stop the{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
                      callouts
                    </span>{" "}
                    that don&apos;t need an engineer
                  </h1>

                  {/* Subheadline */}
                  <p className="text-lg sm:text-xl text-porcelain/80 mb-8 max-w-xl leading-relaxed">
                    30-40% of heat pump callouts are for issues the homeowner
                    could resolve themselves. OpenHouse Care gives your customers
                    instant AI support, branded for your business, trained on
                    your exact systems.
                  </p>

                  {/* CTA Buttons */}
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

            {/* Right: Floating Cards */}
            <div className="relative hidden lg:flex items-center justify-center h-[540px]">
              {/* Card 1: AI Chat Card (largest, center) */}
              <motion.div
                className="absolute"
                style={{ x: card1X, y: card1Y, zIndex: 20 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="relative translate-x-4 -translate-y-8">
                  <AIChatCard />
                </div>
              </motion.div>

              {/* Card 2: Diagnostics Card (top-right) */}
              <motion.div
                className="absolute"
                style={{ x: card2X, y: card2Y, zIndex: 30 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="relative translate-x-32 -translate-y-36">
                  <DiagnosticsCard />
                </div>
              </motion.div>

              {/* Card 3: Installer Stats Card (bottom-right) */}
              <motion.div
                className="absolute"
                style={{ x: card3X, y: card3Y, zIndex: 10 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="relative -translate-x-16 translate-y-24">
                  <InstallerStatsCard />
                </div>
              </motion.div>

              {/* Card 4: QR Activation Card (small, floating) */}
              <motion.div
                className="absolute"
                style={{ zIndex: 25 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="relative translate-x-40 translate-y-28">
                  <QRActivationCard />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-porcelain/70">
              Scroll to explore
            </span>
            <ChevronDown className="w-5 h-5 text-porcelain/60" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PROBLEM SECTION
         ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-gold text-xs tracking-widest font-semibold uppercase">
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
              key={stat.value}
              variants={staggerItem}
              className="group relative bg-[#0f1115] rounded-2xl p-8 border border-[#1e2531] hover:border-gold/30 hover:shadow-[0_8px_32px_rgba(212,175,55,0.08)] transition-all duration-300"
            >
              <p className="text-4xl sm:text-5xl font-bold text-gold mb-4">
                {stat.value}
              </p>
              <p className="text-neutral-400 leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HOW IT WORKS SECTION
         ═══════════════════════════════════════════════════ */}
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
          <span className="text-gold text-xs tracking-widest font-semibold uppercase">
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
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 relative"
        >
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-gold/50 via-gold/30 to-gold/50" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={staggerItem}
              className="group relative bg-[#0f1115] rounded-2xl p-8 border border-[#1e2531] hover:border-gold/30 hover:shadow-[0_8px_32px_rgba(212,175,55,0.08)] transition-all duration-300"
            >
              <div className="relative z-10 w-10 h-10 rounded-full bg-gold text-carbon flex items-center justify-center text-lg font-semibold shadow-[0_0_20px_rgba(212,175,55,0.3)] mb-6">
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

      {/* ═══════════════════════════════════════════════════
          VIDEO SECTION
         ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="relative rounded-2xl overflow-hidden border border-[#1e2531] shadow-2xl bg-[#0f1115] group cursor-pointer">
            <div className="relative aspect-video flex items-center justify-center bg-gradient-to-br from-[#0f1115] to-[#12151b]">
              {/* Placeholder visual */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_70%)]" />
              <div className="relative flex flex-col items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center group-hover:bg-gold/30 group-hover:scale-110 transition-all duration-300">
                  <Play className="w-8 h-8 text-gold ml-1" />
                </div>
                <p className="text-neutral-400 text-sm max-w-md text-center">
                  Video coming soon
                </p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-neutral-500">
            Watch a real fault diagnosed and resolved without a callout
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FEATURES SECTION
         ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-gold text-xs tracking-widest font-semibold uppercase">
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
              className="group relative bg-[#0f1115] rounded-2xl p-8 border border-[#1e2531] hover:border-gold/30 hover:shadow-[0_8px_32px_rgba(212,175,55,0.08)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center mb-5 group-hover:bg-[rgba(212,175,55,0.15)] transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          INDUSTRIES SECTION
         ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-gold text-xs tracking-widest font-semibold uppercase">
            Works For Any Trade
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
              className="px-5 py-2.5 rounded-full bg-[#0f1115] border border-[#1e2531] text-sm font-medium text-neutral-300 hover:border-gold/50 hover:text-gold hover:bg-gold/[0.04] transition-all duration-300 cursor-default"
            >
              {industry}
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA SECTION
         ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_70%)]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <span className="text-gold text-xs tracking-widest font-semibold uppercase">
            Get Started
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            Tired of unnecessary callouts?
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
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

/* ─── Floating Hero Cards ─── */

function AIChatCard() {
  return (
    <div className="w-72 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
      <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
          <MessageSquare className="w-4 h-4 text-gold" />
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
        <div className="flex justify-end">
          <div className="bg-gold/20 rounded-2xl rounded-br-md px-4 py-2.5 max-w-[85%]">
            <p className="text-sm text-porcelain">
              My heat pump is showing an E3 fault code
            </p>
            <p className="text-[9px] text-hint mt-1">Just now</p>
          </div>
        </div>
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
        <div>
          <p className="text-sm font-medium text-porcelain">Diagnostics</p>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">
            Fault Resolved
          </span>
        </div>
        <p className="text-xs text-neutral-400">
          E3 Low Pressure — Filter clean required
        </p>
        <div className="pt-2 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-neutral-500">Resolution time</span>
          <span className="text-xs font-medium text-emerald-400">
            2 mins — No callout
          </span>
        </div>
      </div>
    </div>
  );
}

function InstallerStatsCard() {
  return (
    <div className="w-60 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
      <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
          <TrendingUp className="w-4 h-4 text-gold" />
        </div>
        <p className="text-sm font-medium text-porcelain">Callout Savings</p>
      </div>
      <div className="p-4">
        <p className="text-3xl font-bold text-gold">{"\u20AC"}27,400</p>
        <p className="text-xs text-neutral-400 mt-1">saved this year</p>

        {/* Mini bar chart */}
        <div className="mt-4 flex items-end gap-1.5 h-10">
          {[35, 45, 30, 55, 65, 50, 75, 85, 70, 90, 80, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-gold/30"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-xs text-neutral-400">
            152 callouts prevented
          </span>
        </div>
      </div>
    </div>
  );
}

function QRActivationCard() {
  return (
    <div className="w-44 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
      <div className="p-4 text-center">
        <div className="w-12 h-12 mx-auto rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-3">
          <QrCode className="w-6 h-6 text-gold" />
        </div>
        <p className="text-sm font-medium text-porcelain">Scan to activate</p>
        <p className="text-[10px] text-neutral-500 mt-1">
          No app download required
        </p>
      </div>
    </div>
  );
}
