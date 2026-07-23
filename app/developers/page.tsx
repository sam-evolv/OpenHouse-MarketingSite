import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { PlatformFloatingCards } from "@/components/hero/cards/PlatformCards";
import { IntelligenceTryItWidget } from "@/components/interactive/IntelligenceTryItWidget";
import { ProductShot } from "@/components/marketing/ProductShot";
import { HPIGauge } from "@/components/interactive/HPIGauge";
import { CountUp } from "@/components/effects/CountUp";
import { Reveal } from "@/components/effects/Reveal";
import heroBackground from "@/attached_assets/stock_images/platform_aerial_network.png";
import analyticsInsights from "@/attached_assets/stock_images/analytics_insights.png";
import {
  Home,
  ChevronLeft,
  TrendingUp,
  FolderOpen,
  MessageSquare,
  Sparkles,
  Headphones,
  ArrowRight,
  Zap,
  GraduationCap,
  ShieldCheck,
  PhoneOff,
} from "lucide-react";

export const metadata = {
  title: "Developer Dashboard — Aggregated Insight From Every Home | OpenHouse Ai",
  description:
    "One dashboard for property developers: sales, build, handover, portfolio intelligence, and an AI agent — plus aggregated analysis of every home's energy, issues, snags and questions, and the Home Performance Index that proves your homeowners were educated.",
};

const capabilities = [
  {
    title: "Sales",
    href: "/sales",
    icon: TrendingUp,
    desc: "A live pipeline across every unit, scheme, and buyer — not a Friday spreadsheet.",
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    hoverShadow: "hover:shadow-[0_15px_40px_-15px_rgba(59,130,246,0.35)]",
  },
  {
    title: "Build",
    href: "/build",
    icon: FolderOpen,
    desc: "Documents, certs, and compliance organised by unit — ready before handover.",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    hoverShadow: "hover:shadow-[0_15px_40px_-15px_rgba(16,185,129,0.35)]",
  },
  {
    title: "Handover",
    href: "/handover",
    icon: MessageSquare,
    desc: "Digital handover packs that build themselves, and a home portal for every buyer.",
    accent: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/30",
    hoverShadow: "hover:shadow-[0_15px_40px_-15px_rgba(212,175,55,0.35)]",
  },
  {
    title: "Intelligence",
    href: "/intelligence",
    icon: Sparkles,
    desc: "Ask anything about any scheme and get the answer instantly, with its source.",
    accent: "text-violet-300",
    bg: "bg-violet-500/15",
    border: "border-violet-400/30",
    hoverShadow: "hover:shadow-[0_15px_40px_-15px_rgba(139,92,246,0.35)]",
  },
  {
    title: "Agent",
    href: "/agent",
    icon: Headphones,
    desc: "A voice-first AI colleague for the agents selling and letting your homes.",
    accent: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/30",
    hoverShadow: "hover:shadow-[0_15px_40px_-15px_rgba(212,175,55,0.35)]",
  },
];

export default function PlatformOverviewPage() {
  return (
    <div>
      {/* ── Home Badge ── */}
      <div className="fixed top-36 sm:top-40 left-4 sm:left-6 z-50">
        <Link
          href="/"
          aria-label="Back to the OpenHouse home page"
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-medium backdrop-blur-md hover:bg-gold/20 transition-all duration-300"
        >
          <ChevronLeft className="w-3 h-3" aria-hidden="true" />
          <Home className="w-3 h-3" aria-hidden="true" />
          <span className="hidden sm:inline">OpenHouse</span>
        </Link>
      </div>

      {/* ── 1. Hero ── */}
      <ModuleHero
        backgroundImage={heroBackground}
        accentColor="gold"
        imagePosition="object-top"
        backgroundAlt="Aerial view of a residential development at golden hour"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
            <span className="w-2 h-2 bg-gold rounded-full" />
            <span className="text-sm font-medium text-gold">Developer Dashboard</span>
          </div>
        }
        title={
          <>
            Run every stage of a scheme in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
              one place
            </span>
            .
          </>
        }
        subtitle="OpenHouse replaces the spreadsheets, WhatsApp groups, and paper folders developers still rely on. Sales, build, handover, portfolio intelligence, an AI agent — and aggregated insight from every home you've handed over. One dashboard, live on developments in Ireland today."
        primaryCta={{ href: "#capabilities", label: "See what it runs" }}
        secondaryCta={{ href: "/contact", label: "Book a Demo" }}
      >
        <PlatformFloatingCards />
      </ModuleHero>

      {/* ── 2. Capabilities ── */}
      <section
        id="capabilities"
        className="relative py-24 sm:py-32 bg-carbon overflow-hidden scroll-mt-32"
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-gold/[0.06] via-transparent to-gold/[0.04]"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vw] max-w-[1200px] rounded-full bg-gold/[0.04] blur-[140px]"
          aria-hidden="true"
        />
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              One platform
            </p>
            <h2 className="text-[32px] sm:text-5xl lg:text-[56px] font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-6">
              Everything a scheme needs, on one system.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
              Every home a developer builds passes through the same stages. OpenHouse holds all of them — same data, different surfaces — so nothing lives in a folder no one can find.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
            {capabilities.map((mod) => (
              <Link
                key={mod.title}
                href={mod.href}
                className={`group relative p-6 rounded-2xl border ${mod.border} ${mod.bg} backdrop-blur-sm hover:-translate-y-1 transition-all duration-500 ${mod.hoverShadow} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-carbon focus-visible:ring-white/50`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-11 h-11 rounded-xl ${mod.bg} border ${mod.border} flex items-center justify-center flex-shrink-0`}
                  >
                    <mod.icon className={`w-5 h-5 ${mod.accent}`} aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 font-heading">{mod.title}</h3>
                    <p className="text-[15px] text-porcelain/70 leading-relaxed">{mod.desc}</p>
                  </div>
                </div>
                <div
                  className={`mt-4 inline-flex items-center gap-1.5 text-xs font-semibold ${mod.accent} opacity-0 group-hover:opacity-100 transition-opacity`}
                >
                  Explore
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}

            {/* Energy Intelligence teaser card → assistant pillar */}
            <Link
              href="/assistant#energy"
              className="group relative p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_15px_40px_-15px_rgba(16,185,129,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-carbon focus-visible:ring-white/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 font-heading">Energy Intelligence</h3>
                  <p className="text-[15px] text-porcelain/70 leading-relaxed">
                    Hand every buyer a home that monitors and explains its own energy. You see the aggregate.
                  </p>
                </div>
              </div>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                See it
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* ── 3. Aggregated portfolio intelligence ── */}
      <section className="relative py-24 sm:py-32 bg-carbon overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.04] to-transparent"
          aria-hidden="true"
        />
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              Aggregated intelligence
            </p>
            <h2 className="text-[32px] sm:text-5xl lg:text-[56px] font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-6">
              Every home reports back.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
              Across a scheme, OpenHouse aggregates and analyses what every home experiences — energy consumption, issues, snag items, and the questions homeowners actually ask. Patterns, not anecdotes.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <ProductShot
              src={analyticsInsights}
              alt="OpenHouse developer analytics: aggregated energy, issue, and question insights across a scheme"
              accent="gold"
            />

            {/* KPI row — illustrative */}
            <Reveal stagger className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mt-12 sm:mt-14">
              {[
                { end: 214, label: "Homes reporting in across the scheme" },
                { end: 128, label: "Issues resolved before they became callouts" },
                { end: 36, label: "Recurring questions turned into fixes and guides" },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 text-center h-full"
                >
                  <p className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-gold font-heading tabular-nums">
                      <CountUp end={kpi.end} className="inline-block min-w-[3ch]" />
                    </span>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider text-porcelain/60 border border-white/15 bg-white/5">
                      Example
                      <span className="sr-only"> figure, for illustration only, not real customer data</span>
                    </span>
                  </p>
                  <p className="text-[14px] text-porcelain/70 leading-relaxed">{kpi.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 4. HPI — the Home Performance Index ── */}
      <section className="relative py-24 sm:py-32 bg-carbon overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-gold/[0.06] via-transparent to-gold/[0.04]"
          aria-hidden="true"
        />
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              Home Performance Index
            </p>
            <h2 className="text-[32px] sm:text-5xl lg:text-[56px] font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-6">
              Proof your homes perform.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
              Every home carries an HPI — a live score built from how the home is running and how confidently its owner runs it. It rises as the assistant teaches. It&rsquo;s your evidence that education happened — and the homes with a higher HPI ask fewer repeat questions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
            {/* One home */}
            <div className="rounded-3xl border border-gold/25 bg-neutral-900/80 backdrop-blur-xl p-6 sm:p-8 flex flex-col items-center justify-center">
              <HPIGauge score={92} letter="A" caption="This home's HPI" />
              <p className="mt-6 text-[14px] text-porcelain/60 leading-relaxed text-center max-w-xs">
                Started at B3 on handover day. Every question answered and habit learned moved it here.
              </p>
            </div>

            {/* The scheme */}
            <div className="rounded-3xl border border-white/10 bg-neutral-900/80 backdrop-blur-xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-porcelain/50 font-semibold">
                  One scheme, right now
                </p>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider text-porcelain/60 border border-white/15 bg-white/5">
                  Example
                </span>
              </div>
              <Reveal stagger staggerDelay={0.008} className="grid grid-cols-10 gap-1.5 mb-5">
                {Array.from({ length: 60 }, (_, i) => {
                  const band =
                    i < 28 ? "bg-gold" : i < 46 ? "bg-gold/45" : i < 56 ? "bg-white/15" : "bg-amber-500/60";
                  return <div key={i} className={`aspect-square rounded-[3px] ${band}`} />;
                })}
              </Reveal>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-porcelain/60 mb-4">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-[2px] bg-gold" /> A-rated running (28)</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-[2px] bg-gold/45" /> Climbing (18)</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-[2px] bg-white/15" /> Settling in (10)</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-[2px] bg-amber-500/60" /> Needs a nudge (4)</span>
              </div>
              <p className="text-[14px] text-porcelain/70 leading-relaxed">
                The whole scheme, climbing toward A — and you can see exactly which homes need help getting there.
              </p>
            </div>
          </div>

          {/* Why it matters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto mt-6">
            {[
              {
                icon: GraduationCap,
                title: "Trains your homeowners.",
                body: "The assistant teaches each owner to run their systems well — and the HPI shows the lesson landed.",
              },
              {
                icon: ShieldCheck,
                title: "Proof it happened.",
                body: "A per-home record that onboarding and education were delivered — evidence for buyers and for you.",
              },
              {
                icon: PhoneOff,
                title: "Fewer repeat questions.",
                body: "Educated homeowners stop asking the same aftercare questions. Your phone gets quieter as the index climbs.",
              },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 h-full">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center mb-4">
                  <b.icon className="w-5 h-5 text-gold" aria-hidden="true" />
                </div>
                <h3 className="text-[16px] font-semibold text-white mb-2 font-heading">{b.title}</h3>
                <p className="text-[14px] text-porcelain/70 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. Try Intelligence ── */}
      <section className="relative py-24 sm:py-28 bg-carbon overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-violet-900/[0.10] via-transparent to-transparent"
          aria-hidden="true"
        />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-violet-300 mb-4 font-semibold">
                Ask your portfolio
              </p>
              <h2 className="text-[28px] sm:text-4xl lg:text-[44px] font-bold text-white font-heading leading-tight mb-5">
                One question. The whole portfolio answers.
              </h2>
              <p className="text-[17px] text-porcelain/75 leading-relaxed">
                Revenue this month, Part F compliance, missing certs — ask in plain English and get the answer with its source. Try a question on the right.
              </p>
            </div>
            <IntelligenceTryItWidget />
          </div>
        </Container>
      </section>

      {/* ── 4. CTA ── */}
      <section className="relative py-28 sm:py-36 bg-carbon overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-gold/[0.05] via-transparent to-gold/[0.07]"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-gold/[0.06] blur-[140px]"
          aria-hidden="true"
        />
        <Container>
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-[32px] sm:text-5xl lg:text-[56px] font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-6">
              See it on one of your own schemes.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed max-w-2xl mx-auto mb-10">
              A demo takes thirty minutes. We&rsquo;ll show you the platform configured against the kind of development you&rsquo;re already building.
            </p>
            <div className="flex flex-col items-center gap-6">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 min-h-[64px] px-10 sm:px-14 py-5 text-lg sm:text-xl font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(212,175,55,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-carbon"
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-gold via-amber-400 to-gold"
                  aria-hidden="true"
                />
                <span className="relative z-10 text-carbon flex items-center gap-3">
                  Book a Demo
                  <ArrowRight
                    className="w-6 h-6 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
              <Link
                href="/assistant"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-sm text-porcelain/80 hover:text-porcelain hover:border-gold/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                What your buyers get: the Property Assistant
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
