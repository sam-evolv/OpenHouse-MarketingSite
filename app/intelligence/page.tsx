import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { IntelligenceFloatingCards } from "@/components/hero/cards/IntelligenceCards";
import heroBackground from "@/attached_assets/stock_images/intelligence_data_network.png";
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
        imagePosition="object-top"
        backgroundAlt="Aerial housing estate with golden data connection lines"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30">
            <BarChart3 className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-400">Intelligence Module</span>
          </div>
        }
        title={
          <>
            Turn resident data into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-violet-300 to-violet-400">
              developer insight
            </span>
          </>
        }
        subtitle="Every resident interaction teaches you something. Intelligence surfaces patterns, gaps, and opportunities you'd never see in a spreadsheet."
        primaryCta={{ href: "/contact", label: "Book a Demo" }}
        secondaryCta={{ href: "#features", label: "See Features" }}
      >
        <IntelligenceFloatingCards />
      </ModuleHero>

      {/* ── Example Insights ── */}
      <section className="relative py-24 bg-carbon">
        <Container>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400 mb-4 font-semibold">
              Real Examples
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              Insights you&apos;d never get from email
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {insights.map((insight) => (
              <div
                key={insight.title}
                className={`p-6 rounded-2xl border ${
                  insight.color === "amber"
                    ? "border-amber-500/20 bg-amber-500/[0.03]"
                    : insight.color === "violet"
                    ? "border-violet-500/20 bg-violet-500/[0.03]"
                    : "border-emerald-500/20 bg-emerald-500/[0.03]"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
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
                <p className="text-sm font-medium text-porcelain mb-2">
                  {insight.title}
                </p>
                <p className="text-xs text-porcelain/50 italic">
                  → {insight.action}
                </p>
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
              Data that improves every future build
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
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
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
              See Intelligence in action
            </h2>
            <p className="text-lg text-porcelain/70 mb-8">
              We&apos;ll show you real analytics from 238 homes — the patterns, gaps, and insights.
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

