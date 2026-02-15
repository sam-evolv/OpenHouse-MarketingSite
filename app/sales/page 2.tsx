"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Users,
  CreditCard,
  BarChart2,
  ClipboardList,
  CalendarCheck,
  UserCheck,
  PieChart,
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
    icon: Users,
    title: "Lead Management",
    description:
      "Capture and track every enquiry from the moment it arrives. No more lost leads in email threads or scribbled on notepads at show houses.",
  },
  {
    icon: CalendarCheck,
    title: "Booking Management",
    description:
      "Manage booking deposits, reservation agreements, and purchaser timelines from one dashboard. Know exactly where every unit stands.",
  },
  {
    icon: CreditCard,
    title: "Deposit Tracking",
    description:
      "Track booking deposits, stage payments, and balance due dates. Automated reminders mean nothing falls through the cracks.",
  },
  {
    icon: BarChart2,
    title: "Agent Dashboards",
    description:
      "Give your sales agents real-time visibility into their pipeline. See conversion rates, response times, and revenue by agent.",
  },
  {
    icon: ClipboardList,
    title: "Unit Inventory",
    description:
      "Live availability across every phase and house type. Update status in seconds — available, reserved, sale agreed, closed.",
  },
  {
    icon: PieChart,
    title: "Sales Reporting",
    description:
      "Weekly pipeline reports generated automatically. Revenue forecasting, conversion funnels, and phase-by-phase performance at a glance.",
  },
];

const painPoints = [
  {
    before: "Sales leads tracked in personal email inboxes",
    after: "Centralised pipeline visible to the entire team",
  },
  {
    before: "Booking status updated via WhatsApp messages",
    after: "Real-time unit status dashboard with audit trail",
  },
  {
    before: "Deposit tracking in Excel with manual formulas",
    after: "Automated deposit tracking with payment reminders",
  },
  {
    before: "Weekly reports compiled manually every Friday",
    after: "Live dashboards and auto-generated reports",
  },
];

export default function SalesPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-carbon">
      {/* ━━━ HERO ━━━ */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient-animated" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(96,165,250,0.08)_0%,transparent_50%)]" />

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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8 hover:bg-blue-500/15 transition-colors"
            >
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">
                OpenHouse Sales
              </span>
            </Link>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 font-heading">
              Manage your pipeline from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400">
                enquiry to contract
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-porcelain/70 max-w-2xl mb-10 leading-relaxed">
              Stop losing leads in email threads. Track every enquiry, booking,
              and deposit from one dashboard built specifically for residential
              developers.
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
              From chaos to clarity
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
              Everything your sales team needs
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
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-400" />
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
              Ready to take control of your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400">
                sales pipeline?
              </span>
            </h2>
            <p className="text-lg text-hint max-w-xl mx-auto mb-10">
              See how OpenHouse Sales replaces spreadsheets and WhatsApp with a
              purpose-built pipeline.
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
