import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { SalesFloatingCards } from "@/components/hero/cards/SalesCards";
import { ScreenshotLightbox } from "@/components/ui/ScreenshotLightbox";
import heroBackground from "@/attached_assets/stock_images/sales_show_home.png";
import salesPipeline from "@/attached_assets/stock_images/sales_pipeline.png";
import portfolioOverview from "@/attached_assets/stock_images/portfolio_overview.png";
import portfolioComparison from "@/attached_assets/stock_images/portfolio_comparison.png";
import salesVelocity from "@/attached_assets/stock_images/sales_velocity.png";
import {
  TrendingUp,
  Users,
  CreditCard,
  BarChart3,
  Bell,
  FileText,
  ArrowRight,
  Home,
  ChevronLeft,
  PieChart,
  GitCompareArrows,
  Activity,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Sales Module — Pipeline to Contract | OpenHouse Ai",
  description:
    "Track every lead, viewing, and deposit in one place. Replace scattered spreadsheets with a single sales pipeline built for property developers.",
};

const features = [
  {
    icon: TrendingUp,
    title: "Visual Pipeline",
    description:
      "See every unit from enquiry to contract signed. Drag-and-drop stages, no training needed.",
  },
  {
    icon: Users,
    title: "Lead Management",
    description:
      "Capture leads from Savills, Sherry Fitz, your website — all in one feed with source tracking.",
  },
  {
    icon: CreditCard,
    title: "Deposit Tracking",
    description:
      "Record booking deposits, track payment status, and flag outstanding balances automatically.",
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description:
      "Get notified when new enquiries land, viewings are booked, or contracts are signed.",
  },
  {
    icon: FileText,
    title: "Agent Reporting",
    description:
      "See which agents convert and which developments move fastest — data you never had before.",
  },
  {
    icon: BarChart3,
    title: "Sales Analytics",
    description:
      "Weekly velocity, conversion rates, average time-to-sale — all calculated, never estimated.",
  },
];

export default function SalesPage() {
  return (
    <main>
      {/* ── Module Badge ── */}
      <div className="fixed top-36 sm:top-40 left-4 sm:left-6 z-50">
        <Link
          href="/"
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium backdrop-blur-md hover:bg-blue-500/20 transition-all duration-300"
        >
          <ChevronLeft className="w-3 h-3" />
          <Home className="w-3 h-3" />
          <span className="hidden sm:inline">Platform</span>
        </Link>
      </div>

      {/* ── Hero ── */}
      <ModuleHero
        backgroundImage={heroBackground}
        accentColor="blue"
        backgroundAlt="Premium show home at twilight with for sale signage"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">
              Sales Module
            </span>
          </div>
        }
        title={
          <>
            From first enquiry to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400">
              contract signed
            </span>
          </>
        }
        subtitle="Track every lead, viewing, and deposit across your developments. One pipeline replaces the spreadsheets, agent emails, and guesswork."
        primaryCta={{ href: "/contact", label: "Book a Demo" }}
        secondaryCta={{ href: "#features", label: "See Features" }}
      >
        <SalesFloatingCards />
      </ModuleHero>

      {/* ── Before / After ── */}
      <section className="relative py-24 bg-carbon">
        <Container>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-4 font-semibold">
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
                  "Sales tracked across 3+ spreadsheets",
                  "Agent updates via WhatsApp and email",
                  "No visibility on conversion rates",
                  "Deposits tracked manually with errors",
                  "Weekly sales meetings just to get updates",
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
            <div className="p-8 rounded-2xl border border-blue-500/20 bg-blue-500/[0.03]">
              <p className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-wider">
                With OpenHouse Sales
              </p>
              <ul className="space-y-3">
                {[
                  "One visual pipeline for all developments",
                  "Real-time lead feed with source tracking",
                  "Conversion rates calculated automatically",
                  "Deposit status updated in real-time",
                  "Dashboard replaces status meetings",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-porcelain"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          SCREENSHOT SHOWCASES — full-width, click to zoom
          ══════════════════════════════════════════════ */}

      {/* ── 1. Sales Pipeline ── */}
      <section className="relative py-24 bg-carbon overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.03] via-transparent to-transparent" />
        <Container>
          {/* Text header */}
          <div className="max-w-3xl mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-3 font-semibold">
              Sales Pipeline
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-4">
              Every unit, every stage, one screen
            </h2>
            <p className="text-lg text-porcelain/60 leading-relaxed mb-6">
              Track 15 data points per unit — price, release date, deposits,
              contracts, queries, snag lists, drawdown dates, and more. No more
              ringing agents for updates on a Tuesday morning.
            </p>
            <div className="flex flex-wrap gap-3">
              {["75 units", "15 columns", "€27.8M revenue", "Real-time"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-300"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
          {/* Full-width screenshot */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-blue-400/5 to-blue-500/20 rounded-3xl blur-2xl" />
            <div className="relative">
              <ScreenshotLightbox
                src={salesPipeline}
                alt="OpenHouse Sales Pipeline tracking 75 units with real-time deposit, contract, and handover status across 15 columns"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Portfolio Overview ── */}
      <section className="relative py-24 bg-carbon overflow-hidden">
        <Container>
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <PieChart className="w-4 h-4 text-blue-400" />
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-400 font-semibold">
                Portfolio Overview
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-4">
              All your developments, one dashboard
            </h2>
            <p className="text-lg text-porcelain/60 leading-relaxed">
              Total revenue, pipeline funnel, and performance benchmarks across
              every development. Kitchen selections and PC sum impact tracked in
              real-time — see exactly how upgrades affect your bottom line.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/15 via-transparent to-blue-500/15 rounded-3xl blur-2xl" />
            <div className="relative">
              <ScreenshotLightbox
                src={portfolioOverview}
                alt="Portfolio Analytics overview — 5 developments, 242 total units, €76.1M revenue with pipeline funnel and revenue breakdown by development"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. Comparison + Velocity side by side ── */}
      <section className="relative py-24 bg-carbon overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Comparison */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                  <GitCompareArrows className="w-4 h-4 text-blue-400" />
                </div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400 font-semibold">
                  Comparison
                </p>
              </div>
              <h3 className="text-2xl font-bold text-white font-heading mb-3">
                Benchmark every estate
              </h3>
              <p className="text-sm text-porcelain/60 leading-relaxed mb-6">
                Compare avg days to sale, query response times, and completion
                rates side by side across all your developments.
              </p>
              <div className="relative">
                <div className="absolute -inset-3 bg-blue-500/10 rounded-2xl blur-xl" />
                <div className="relative">
                  <ScreenshotLightbox
                    src={portfolioComparison}
                    alt="Development comparison table showing units, revenue, average price, PC sums, and performance benchmarks across 5 developments"
                  />
                </div>
              </div>
            </div>

            {/* Velocity */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                  <Activity className="w-4 h-4 text-blue-400" />
                </div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400 font-semibold">
                  Velocity
                </p>
              </div>
              <h3 className="text-2xl font-bold text-white font-heading mb-3">
                Track sales momentum
              </h3>
              <p className="text-sm text-porcelain/60 leading-relaxed mb-6">
                Monthly sales volume per development. Instantly see which
                estates are moving and which need attention.
              </p>
              <div className="relative">
                <div className="absolute -inset-3 bg-blue-500/10 rounded-2xl blur-xl" />
                <div className="relative">
                  <ScreenshotLightbox
                    src={salesVelocity}
                    alt="Sales velocity chart showing units sold per month across all developments from October 2024 to February 2026"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Features ── */}
      <section id="features" className="relative py-24 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
        <Container>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-4 font-semibold">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              Everything you need to sell smarter
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-blue-500/20 hover:bg-blue-500/[0.03] transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-blue-400" />
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
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/[0.04] to-transparent" />
        <Container>
          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-heading">
              See the Sales module live
            </h2>
            <p className="text-lg text-porcelain/70 mb-8">
              We&apos;ll walk you through the pipeline running on a live
              250-home development across 5 estates.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500" />
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
