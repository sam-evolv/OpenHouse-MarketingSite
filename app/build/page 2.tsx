"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  FolderOpen,
  FileCheck,
  Calculator,
  ShieldCheck,
  Users,
  FolderArchive,
  ClipboardCheck,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";

/* ─── animation variants ─── */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
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
const features = [
  {
    icon: FolderArchive,
    title: "Smart Document Archive",
    description:
      "Every cert, drawing, spec, and compliance document — organised by phase, house type, and unit. Searchable, version-controlled, always accessible.",
  },
  {
    icon: Calculator,
    title: "PC Sum Tracking",
    description:
      "Track provisional and prime cost sums against actuals. Purchasers see their selections and balances without you fielding calls.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Management",
    description:
      "BER certs, HomeBond cover, planning compliance, assigned certifier sign-offs — all tracked against completion milestones.",
  },
  {
    icon: Users,
    title: "Purchaser Portal",
    description:
      "Give buyers a branded portal showing their unit's progress, document access, selections, and key dates. Reduces calls by up to 70%.",
  },
  {
    icon: ClipboardCheck,
    title: "Snagging & Defects",
    description:
      "Digital snagging lists with photo evidence, assigned trades, and completion tracking. No more paper lists that get lost on site.",
  },
  {
    icon: FileCheck,
    title: "Handover Preparation",
    description:
      "Automatically compile handover packs from your document archive. Every cert, manual, and warranty — ready when keys are handed over.",
  },
];

const painPoints = [
  {
    before: "Documents scattered across Dropbox, email, and site offices",
    after: "Single searchable archive organised by scheme, phase, and unit",
  },
  {
    before: "PC sum tracking in spreadsheets with manual updates",
    after: "Live PC sum dashboard with purchaser self-service",
  },
  {
    before: "Compliance tracked on whiteboards and memory",
    after: "Automated compliance checklist tied to build milestones",
  },
  {
    before: "Buyers calling weekly asking 'what's happening with my house?'",
    after: "Purchaser portal with live progress and document access",
  },
];

export default function BuildPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-carbon">
      {/* ━━━ HERO ━━━ */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient-animated" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(52,211,153,0.08)_0%,transparent_50%)]" />

        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 sm:pt-48 md:pt-40 lg:pt-32 pb-20">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            {/* Breadcrumb badge */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-8 hover:bg-emerald-500/15 transition-colors"
            >
              <FolderOpen className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">
                OpenHouse Build
              </span>
            </Link>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 font-heading">
              Compliance, documents, and selections —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400">
                under control
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-porcelain/70 max-w-2xl mb-10 leading-relaxed">
              Stop chasing documents across Dropbox folders and email chains.
              Manage every cert, spec, and purchaser selection from one
              centralised platform.
            </p>

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
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-porcelain border border-white/20 hover:border-gold/50 rounded-full transition-all duration-300 hover:bg-white/5"
              >
                ← Back to Platform
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━━ BEFORE / AFTER ━━━ */}
      <section className="py-20 sm:py-28 bg-slate">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold"
            >
              Before &amp; After
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-porcelain mb-4 font-heading"
            >
              From scattered to structured
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-carbon/60 border border-white/10 rounded-2xl p-6 elev-1-dark"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-400 text-xs font-bold">✕</span>
                  </div>
                  <p className="text-sm text-red-300 leading-relaxed line-through decoration-red-400/40">
                    {point.before}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-400 text-xs font-bold">✓</span>
                  </div>
                  <p className="text-sm text-emerald-300 leading-relaxed">
                    {point.after}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ━━━ FEATURES ━━━ */}
      <section className="py-20 sm:py-28 bg-carbon">
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
              Capabilities
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-porcelain font-heading"
            >
              Control your build, end to end
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-carbon/60 border border-white/10 rounded-2xl p-6 hover:border-gold/30 transition-colors elev-1-dark"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-porcelain mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-porcelain/70 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section className="py-20 bg-gradient-to-b from-carbon to-slate border-t border-gold/10">
        <Container>
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-porcelain mb-4 font-heading">
              Ready to bring your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400">
                build process
              </span>{" "}
              into one place?
            </h2>
            <p className="text-lg text-hint max-w-xl mx-auto mb-10">
              See how OpenHouse Build replaces scattered folders with a
              centralised document and compliance platform.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-carbon font-semibold rounded-full hover:bg-gold/90 transition-all shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:scale-105"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
