import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { PlatformFloatingCards } from "@/components/hero/cards/PlatformCards";
import { IntelligenceTryItWidget } from "@/components/interactive/IntelligenceTryItWidget";
import { ProductShot } from "@/components/marketing/ProductShot";
import { HPICert } from "@/components/interactive/HPICert";
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
  ListChecks,
  ArrowRight,
  Zap,
  BookOpen,
  ShieldCheck,
  TrendingDown,
  Gauge,
  AlertTriangle,
  BadgeCheck,
  Files,
  PenLine,
  Users,
  Sunrise,
  Archive,
} from "lucide-react";

export const metadata = {
  title: "Developer Dashboard | One living record for every home | OpenHouse Ai",
  description:
    "Turn approved house-type information into property-specific handovers, sourced homeowner guidance and visible aftercare gaps across a scheme.",
};

const capabilities = [
  {
    title: "Sales",
    href: "#developer-proof",
    icon: TrendingUp,
    desc: "Keep approved buyer, unit and house-type context attached to the same record used at handover.",
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    hoverShadow: "hover:shadow-[0_15px_40px_-15px_rgba(59,130,246,0.35)]",
  },
  {
    title: "Build",
    href: "#developer-proof",
    icon: FolderOpen,
    desc: "Organise approved certificates, documents and drawings against the relevant house type and home.",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    hoverShadow: "hover:shadow-[0_15px_40px_-15px_rgba(16,185,129,0.35)]",
  },
  {
    title: "Snagging",
    href: "#developer-proof",
    icon: ListChecks,
    desc: "Keep the handover status and approved record aligned as outstanding items are reviewed and closed.",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    hoverShadow: "hover:shadow-[0_15px_40px_-15px_rgba(16,185,129,0.35)]",
  },
  {
    title: "Handover",
    href: "#developer-proof",
    icon: MessageSquare,
    desc: "Turn approved house-type information into a property-specific record and homeowner interface.",
    accent: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/30",
    hoverShadow: "hover:shadow-[0_15px_40px_-15px_rgba(212,175,55,0.35)]",
  },
  {
    title: "Intelligence",
    href: "#developer-proof",
    icon: Sparkles,
    desc: "Group recurring homeowner questions and evidence gaps so the next handover can improve at source.",
    accent: "text-violet-300",
    bg: "bg-violet-500/15",
    border: "border-violet-400/30",
    hoverShadow: "hover:shadow-[0_15px_40px_-15px_rgba(139,92,246,0.35)]",
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
        titleLabel="One home record. Compounding insight."
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
            One home record.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
              Compounding insight
            </span>
            .
          </>
        }
        subtitle="Start with one house type. OpenHouse turns the approved information your team already creates into sourced homeowner guidance, visible evidence gaps and a better feedback loop for future homes."
        primaryCta={{ href: "/contact", label: "Request a house-type walkthrough" }}
        secondaryCta={{ href: "#developer-proof", label: "See how it compounds" }}
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
              One living record
            </p>
            <h2 className="text-[32px] sm:text-5xl lg:text-[56px] font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-6">
              One control plane across the scheme.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
              OpenHouse keeps the house type, the individual home and the developer workflow connected. The same known information can support sales, build, snagging, handover and aftercare without becoming separate records.
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
                  <h3 className="text-lg font-bold text-white mb-2 font-heading">Energy Intelligence <span className="ml-1 align-middle text-[9px] uppercase tracking-wider text-emerald-300">Direction</span></h3>
                  <p className="text-[15px] text-porcelain/70 leading-relaxed">
                    A future layer connecting energy context to the same home record. No live telemetry or savings claim.
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

          {/* Subtle breadth strip — the depth behind the modules */}
          <div className="max-w-5xl mx-auto mt-16 sm:mt-20">
            <p className="text-center text-[13px] uppercase tracking-[0.2em] text-porcelain/45 font-semibold mb-6">
              Everything a scheme needs, already in the box
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
              {[
                { icon: Gauge, label: "Sales velocity" },
                { icon: AlertTriangle, label: "At-risk-deal alerts" },
                { icon: BadgeCheck, label: "Sub-contractor cert portal" },
                { icon: Files, label: "Document & drawing vault" },
                { icon: ListChecks, label: "Live snag lists" },
                { icon: PenLine, label: "Drafted communications" },
                { icon: TrendingUp, label: "Portfolio comparison" },
                { icon: Users, label: "Homeowner management" },
                { icon: Sunrise, label: "Morning briefing" },
                { icon: Archive, label: "Audit-ready records" },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-[13px] text-porcelain/70"
                >
                  <chip.icon className="w-3.5 h-3.5 text-gold/70" aria-hidden="true" />
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. Aggregated portfolio intelligence ── */}
      <section id="developer-proof" className="relative py-24 sm:py-32 bg-carbon overflow-hidden scroll-mt-32">
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.04] to-transparent"
          aria-hidden="true"
        />
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              The feedback loop
            </p>
            <h2 className="text-[32px] sm:text-5xl lg:text-[56px] font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-6">
              Every question can improve the next home.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
              OpenHouse can group the questions homeowners ask, show where approved information is missing and surface repeated aftercare themes across a scheme. Developers see patterns instead of isolated calls.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <ProductShot
              src={analyticsInsights}
              alt="Example OpenHouse developer analytics view showing grouped issue and homeowner-question insights across a scheme"
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
              Built to earn the standard.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
              The Home Performance Index is the Irish Green Building Council&rsquo;s national sustainability certification for new homes. Its Consumer Information &amp; Aftercare criterion asks you to give every home a property-specific <span className="text-porcelain">Home User Guide</span> — so owners run the home the way it was designed. OpenHouse <span className="text-porcelain">is that guide, delivered digitally</span>, with the 24/7 aftercare to match.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <HPICert awarded="Gold" />
          </div>

          {/* Why it matters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto mt-6">
            {[
              {
                icon: BookOpen,
                title: "A Home User Guide for every home.",
                body: "Property-specific operating and maintenance guidance, generated per unit — the best-practice document the criterion rewards.",
              },
              {
                icon: ShieldCheck,
                title: "A clearer evidence trail for certification.",
                body: "A property-specific guide and logged aftercare record can support an HPI evidence pack. Certification and finance eligibility remain decisions for the relevant assessor and lender.",
              },
              {
                icon: TrendingDown,
                title: "Closes the performance gap.",
                body: "Owners who understand their home run it as designed — so it performs, and the same aftercare questions stop coming back.",
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
                  Request a house-type walkthrough
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
