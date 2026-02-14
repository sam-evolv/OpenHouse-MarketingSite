"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  Search,
  AlertTriangle,
  Lightbulb,
  PoundSterling,
  Brain,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";

/* ─── animation variants ─── */
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
const features = [
  {
    icon: Search,
    title: "Pattern Detection",
    description:
      "See what residents are asking about most. Spot emerging issues before they become widespread — boiler queries spiking in October? You'll know before the calls start.",
  },
  {
    icon: AlertTriangle,
    title: "Knowledge Gap Analysis",
    description:
      "Identify what your handover packs are missing. When the AI can't answer a question, that gap gets flagged so you can fill it — improving every future development.",
  },
  {
    icon: TrendingUp,
    title: "Engagement Analytics",
    description:
      "Track how residents interact with the platform. Which features drive the most value, when engagement peaks, and how satisfaction trends over time.",
  },
  {
    icon: PoundSterling,
    title: "Financial Impact",
    description:
      "Quantify the support calls, site visits, and manual enquiries your AI assistant is handling. See the real cost savings in euros, not abstract metrics.",
  },
  {
    icon: Brain,
    title: "R&D Insights",
    description:
      "Feed intelligence from live developments back into your next project. Understand what residents actually care about and design better homes because of it.",
  },
  {
    icon: Lightbulb,
    title: "Scheme Comparison",
    description:
      "Compare engagement and satisfaction patterns across developments. Learn what's working, replicate it. See what's not, and fix it before your next project launches.",
  },
];

const insightExamples = [
  {
    insight: "Boiler-related queries increased 340% in the last 30 days",
    action: "Proactive maintenance alert sent to developer",
    color: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
  },
  {
    insight: "78% of residents haven't accessed their BER certificate",
    action: "Knowledge gap flagged — improve handover documentation",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
  },
  {
    insight: "Phase 2 has 3x higher engagement than Phase 1",
    action: "Phase 2 onboarding approach replicated for Phase 3",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    insight: "AI handled 94 enquiries that would have been phone calls this month",
    action: "€4,700 in support costs avoided",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
];

export default function IntelligencePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-carbon">
      {/* ━━━ HERO ━━━ */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient-animated" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.08)_0%,transparent_50%)]" />

        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 sm:pt-48 md:pt-40 lg:pt-32 pb-20">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="max-w-3xl"
          >
            {/* Breadcrumb badge */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 mb-8 hover:bg-violet-500/15 transition-colors"
            >
              <BarChart3 className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-400">
                OpenHouse Intelligence
              </span>
            </Link>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 font-heading">
              Insights no developer has{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-violet-300 to-violet-400">
                ever had access to
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-porcelain/70 max-w-2xl mb-10 leading-relaxed">
              For the first time, see exactly what residents need, what your
              handover packs are missing, and how much money your platform is
              saving — all backed by real data from real interactions.
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

      {/* ━━━ INSIGHT EXAMPLES ━━━ */}
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
              Real-Time Intelligence
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-porcelain mb-4 font-heading"
            >
              Insights that drive action
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-hint max-w-2xl mx-auto"
            >
              Every interaction generates intelligence. Here&apos;s what that
              looks like in practice.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {insightExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-carbon/60 border border-white/10 rounded-2xl p-6 elev-1-dark"
              >
                {/* Insight */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${example.bgColor} border ${example.borderColor} mb-4`}>
                  <span className={`w-2 h-2 rounded-full bg-current ${example.color}`} />
                  <span className={`text-xs font-semibold ${example.color}`}>
                    Insight
                  </span>
                </div>
                <p className="text-sm text-porcelain font-medium leading-relaxed mb-4">
                  {example.insight}
                </p>

                {/* Action */}
                <div className="flex items-start gap-2 pl-3 border-l-2 border-gold/30">
                  <p className="text-sm text-gold/80 leading-relaxed">
                    → {example.action}
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
              Turn interactions into intelligence
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
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-violet-400" />
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
              Ready to unlock{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-violet-300 to-violet-400">
                development intelligence?
              </span>
            </h2>
            <p className="text-lg text-hint max-w-xl mx-auto mb-10">
              See how OpenHouse Intelligence turns every resident interaction
              into actionable insight.
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

