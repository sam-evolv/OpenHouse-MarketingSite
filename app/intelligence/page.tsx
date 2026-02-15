import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { IntelligenceFloatingCards } from "@/components/hero/cards/IntelligenceCards";
import heroBackground from "@/attached_assets/stock_images/intelligence_data_network.png";
import analyticsInsights from "@/attached_assets/stock_images/analytics_insights.png";
import aiInsights from "@/attached_assets/stock_images/ai_insights.png";
import Image from "next/image";
import {
  BarChart3,
  AlertTriangle,
  Users,
  Lightbulb,
  Target,
  TrendingUp,
  ArrowRight,
  Home,
  ChevronLeft,
  Brain,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Intelligence Module — Patterns & Insights | OpenHouse Ai",
  description:
    "Turn resident interactions into actionable insights. See what homeowners actually need, spot knowledge gaps, and improve every future development.",
};

const insights = [
  {
    icon: AlertTriangle,
    color: "amber",
    title: "14 residents asked about heating timers this week",
    action: "Consider adding timer instructions to handover pack",
  },
  {
    icon: Target,
    color: "violet",
    title: "Unit 23 has logged 0 interactions since handover",
    action: "Check if resident has activated their portal",
  },
  {
    icon: TrendingUp,
    color: "emerald",
    title: "Boiler queries dropped 60% after adding manual",
    action: "Apply same approach to ventilation system docs",
  },
];

const features = [
  {
    icon: BarChart3,
    title: "Query Analytics",
    description:
      "See every question residents ask — by category, frequency, and development. Spot trends before they become complaints.",
  },
  {
    icon: AlertTriangle,
    title: "Knowledge Gap Detection",
    description:
      "AI identifies questions your handover docs don't cover. Fill gaps proactively instead of reacting to calls.",
  },
  {
    icon: Users,
    title: "Engagement Tracking",
    description:
      "Monthly active residents, portal adoption rates, and interaction frequency — all tracked per development.",
  },
  {
    icon: Lightbulb,
    title: "Proactive Recommendations",
    description:
      "Receive AI-generated suggestions to improve handover packs, reduce support queries, and boost satisfaction.",
  },
  {
    icon: Target,
    title: "Development Comparison",
    description:
      "Compare engagement and query patterns across developments. See which approaches work best.",
  },
  {
    icon: TrendingUp,
    title: "Impact Measurement",
    description:
      "Track query reduction over time. Prove the ROI of better handover materials with hard data.",
  },
];

export default function IntelligencePage() {
  return (
    <main>
      {/* ── Module Badge ── */}
      <div className="fixed top-36 sm:top-40 left-4 sm:left-6 z-50">
        <Link
          href="/"
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium backdrop-blur-md hover:bg-violet-500/20 transition-all duration-300"
        >
          <ChevronLeft className="w-3 h-3" />
          <Home className="w-3 h-3" />
          <span className="hidden sm:inline">Platform</span>
        </Link>
      </div>

      {/* ── Hero ── */}
      <ModuleHero
        backgroundImage={heroBackground}
        accentColor="violet"
        backgroundAlt="Abstract data network representing AI intelligence and analytics"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30">
            <BarChart3 className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-400">
              Intelligence Module
            </span>
          </div>
        }
        title={
          <>
            Turn resident questions into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-violet-300 to-violet-400">
              development insights
            </span>
          </>
        }
        subtitle="Every question a homeowner asks teaches you something. See what residents need, where your docs fall short, and how to build better next time."
        primaryCta={{ href: "/contact", label: "Book a Demo" }}
        secondaryCta={{ href: "#features", label: "See Features" }}
      >
        <IntelligenceFloatingCards />
      </ModuleHero>

      {/* ── Before / After ── */}
      <section className="relative py-24 bg-carbon">
        <Container>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400 mb-4 font-semibold">
              Before &amp; After
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              What changes when you switch
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/[0.03]">
              <p className="text-sm font-semibold text-red-400 mb-4 uppercase tracking-wider">
                Without OpenHouse
              </p>
              <ul className="space-y-3">
                {[
                  "Support calls logged in notebooks or not at all",
                  "No idea what questions residents actually ask",
                  "Handover packs unchanged development to development",
                  "Defect patterns spotted only after complaints pile up",
                  "No data on resident satisfaction or engagement",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-porcelain/60"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl border border-violet-500/20 bg-violet-500/[0.03]">
              <p className="text-sm font-semibold text-violet-400 mb-4 uppercase tracking-wider">
                With OpenHouse Intelligence
              </p>
              <ul className="space-y-3">
                {[
                  "Every question logged and categorised automatically",
                  "Knowledge gaps identified with impact scores",
                  "AI recommends content to reduce repeat queries",
                  "Engagement funnel shows adoption at every stage",
                  "Data-driven improvements, development after development",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-porcelain"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Analytics Dashboard Showcase ── */}
      <section className="relative py-24 bg-carbon overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/[0.03] via-transparent to-transparent" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-violet-400" />
                </div>
                <p className="text-sm uppercase tracking-[0.3em] text-violet-400 font-semibold">
                  Analytics Dashboard
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-6">
                Know exactly who&apos;s engaged — and who isn&apos;t
              </h2>
              <p className="text-lg text-porcelain/60 mb-8 leading-relaxed">
                See how many homeowners have onboarded, how many are active this
                month, and who your high engagers are. Filter by 7 days, 30
                days, 90 days, or custom ranges. Export everything.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "100% AI resolution",
                  "Engagement funnel",
                  "Time filters",
                  "CSV export",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-medium text-violet-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Screenshot */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 via-violet-400/5 to-violet-500/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-500/10">
                <Image
                  src={analyticsInsights}
                  alt="Analytics dashboard showing 250 homeowners, 33 active this month, 338 total messages, 100% AI resolution rate, and engagement funnel breakdown"
                  className="w-full h-auto"
                  quality={95}
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── AI Insights Showcase ── */}
      <section className="relative py-24 bg-carbon overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Screenshot first */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 via-violet-400/5 to-violet-500/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-500/10">
                <Image
                  src={aiInsights}
                  alt="AI Insights showing prioritised recommendations, 100% resolution rate, suggested content to create with impact scores, and question topic breakdown"
                  className="w-full h-auto"
                  quality={95}
                />
              </div>
            </div>
            {/* Text */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-violet-400" />
                </div>
                <p className="text-sm uppercase tracking-[0.3em] text-violet-400 font-semibold">
                  AI Insights
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-6">
                AI tells you what to fix — and why
              </h2>
              <p className="text-lg text-porcelain/60 mb-8 leading-relaxed">
                Prioritised recommendations with impact scores. If 58 people
                asked general questions your docs don&apos;t cover, the AI flags
                it and suggests creating a guide. Less repeat queries, happier
                homeowners, fewer phone calls.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Priority badges",
                  "Impact scores",
                  "Content suggestions",
                  "Topic breakdown",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-medium text-violet-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Example Insights (kept from original) ── */}
      <section className="relative py-24 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent" />
        <Container>
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400 mb-4 font-semibold">
              Real Examples
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              Insights that actually change how you build
            </h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {insights.map((insight) => (
              <div
                key={insight.title}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-violet-500/20 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      insight.color === "amber"
                        ? "bg-amber-500/10 border border-amber-500/20"
                        : insight.color === "violet"
                          ? "bg-violet-500/10 border border-violet-500/20"
                          : "bg-emerald-500/10 border border-emerald-500/20"
                    }`}
                  >
                    <insight.icon
                      className={`w-5 h-5 ${
                        insight.color === "amber"
                          ? "text-amber-400"
                          : insight.color === "violet"
                            ? "text-violet-400"
                            : "text-emerald-400"
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">
                      {insight.title}
                    </p>
                    <p className="text-sm text-porcelain/50">{insight.action}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Features ── */}
      <section id="features" className="relative py-24 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent" />
        <Container>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400 mb-4 font-semibold">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              Intelligence that compounds
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-violet-500/20 hover:bg-violet-500/[0.03] transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-porcelain/60 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-t from-violet-500/[0.04] to-transparent" />
        <Container>
          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-heading">
              See the Intelligence module live
            </h2>
            <p className="text-lg text-porcelain/70 mb-8">
              We&apos;ll show you real analytics from 250 homeowners across
              multiple developments.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-500 via-violet-400 to-violet-500" />
              <span className="relative z-10 text-white flex items-center gap-2">
                Book a Demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
