import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { PlatformFloatingCards } from "@/components/hero/cards/PlatformCards";
import { EnergyIntelligenceScroller } from "@/components/interactive/EnergyIntelligenceScroller";
import { CountUp } from "@/components/effects/CountUp";
import { Reveal } from "@/components/effects/Reveal";
import { ThreadSeam } from "@/components/effects/ThreadSeam";
import heroBackground from "@/attached_assets/stock_images/platform_aerial_network.png";
import {
  ArrowRight,
  Building2,
  MessageCircle,
  Wrench,
  HardHat,
  Database,
  Calendar,
  Plug,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "OpenHouse Ai — One platform for developers, a 24/7 AI for every home",
  description:
    "OpenHouse gives property developers one platform to run every scheme, every home a 24/7 AI assistant with energy intelligence, and renewables installers their own Care product. Live on developments in Ireland today.",
};

const pillars = [
  {
    title: "Developer platform",
    href: "/platform",
    icon: Building2,
    who: "For property developers",
    tagline: "Run every scheme in one place.",
    desc: "Sales pipeline, build documents, compliance, digital handover, portfolio intelligence and an AI agent — one source of truth for the whole development.",
    accent: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/30",
    hoverShadow: "hover:shadow-[0_20px_50px_-20px_rgba(212,175,55,0.4)]",
    badge: null as string | null,
  },
  {
    title: "Property Assistant",
    href: "/assistant",
    icon: MessageCircle,
    who: "For homeowners",
    tagline: "A 24/7 AI for every home.",
    desc: "Every home gets its own assistant, trained on its documents and connected to its energy systems. It answers any question — from a bill to a warning light — and helps run an A-rated home.",
    accent: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/30",
    hoverShadow: "hover:shadow-[0_20px_50px_-20px_rgba(212,175,55,0.4)]",
    badge: "Now with Energy Intelligence",
  },
  {
    title: "Care",
    href: "/care",
    icon: Wrench,
    who: "For heat pump & solar installers",
    tagline: "Aftercare for renewable systems.",
    desc: "A separate product for renewables installers — a branded assistant that cuts avoidable callouts and shows what your whole installation base is doing.",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    hoverShadow: "hover:shadow-[0_20px_50px_-20px_rgba(16,185,129,0.4)]",
    badge: null as string | null,
  },
];

const trustLines = [
  {
    icon: Database,
    title: "Your data stays yours.",
    body: "Hosted in Europe. Exportable any time.",
  },
  {
    icon: Calendar,
    title: "Adopt it in an afternoon.",
    body: "No twelve-week implementation.",
  },
  {
    icon: Plug,
    title: "Your existing tools keep working.",
    body: "Email, calendar, accounting, all integrated.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* ── 1. Hero ── */}
      <ModuleHero
        backgroundImage={heroBackground}
        accentColor="gold"
        imagePosition="object-top"
        backgroundAlt="Aerial view of a residential development at golden hour, connected lines suggesting a platform"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
            <span className="w-2 h-2 bg-gold rounded-full" />
            <span className="text-sm font-medium text-gold">
              Live on active developments today
            </span>
          </div>
        }
        title={
          <>
            One platform for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
              whole life
            </span>{" "}
            of a home.
          </>
        }
        subtitle="OpenHouse gives developers one system to run every scheme, hands every home a 24/7 AI assistant with energy intelligence, and gives renewables installers their own Care product. Three things, one platform."
        primaryCta={{ href: "#pillars", label: "See how it works" }}
        secondaryCta={{ href: "/contact", label: "Book a Demo" }}
      >
        <PlatformFloatingCards />
      </ModuleHero>

      {/* ── 2. Market-context strip ── */}
      <section className="relative py-16 sm:py-20 bg-porcelain">
        <Container>
          <ThreadSeam tone="light" height="sm" className="-mt-4 mb-8" />
          <p className="text-sm uppercase tracking-[0.3em] text-amber-700 font-semibold text-center mb-10">
            The market
          </p>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 text-center">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-amber-700 font-heading leading-none mb-2 tabular-nums">
                  <CountUp end={36284} className="inline-block min-w-[6ch]" />
                </p>
                <p className="text-[14px] sm:text-[15px] text-carbon/75 leading-relaxed">
                  New homes completed in Ireland in 2025, the highest since 2008.
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-amber-700 font-heading leading-none mb-2 tabular-nums">
                  <CountUp end={240964} className="inline-block min-w-[7ch]" />
                </p>
                <p className="text-[14px] sm:text-[15px] text-carbon/75 leading-relaxed">
                  Private tenancies registered with the Residential Tenancies Board.
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-amber-700 font-heading leading-none mb-2 tabular-nums">
                  <CountUp end={3609} className="inline-block min-w-[5ch]" />
                </p>
                <p className="text-[14px] sm:text-[15px] text-carbon/75 leading-relaxed">
                  New heat pumps installed under SEAI schemes in 2024 alone.
                </p>
              </div>
            </div>
            <p className="text-center text-[15px] sm:text-[16px] text-carbon/70 leading-relaxed mt-10 max-w-2xl mx-auto">
              A market this scale still runs on spreadsheets and paper folders. OpenHouse is the system replacing them — live today in Cork, and expanding.
            </p>
            <p className="text-center text-[12px] text-carbon/45 mt-4 max-w-3xl mx-auto leading-relaxed">
              Sources: CSO New Dwelling Completions, Q4 2025; Residential Tenancies Board, Q4 2024 Profile of the Register; SEAI Record Year of Progress 2024.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 3. The three pillars (the taxonomy moment) ── */}
      <section
        id="pillars"
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
          <ThreadSeam tone="dark" className="-mt-6 mb-10" />
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              What OpenHouse is
            </p>
            <h2 className="text-[32px] sm:text-5xl lg:text-[56px] font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-6">
              Three products. One platform.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
              The developer who builds the home, the family who lives in it, and the installer who keeps its energy systems running — all on the same platform, sharing the same data.
            </p>
          </div>

          <Reveal
            stagger
            className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto"
          >
            {pillars.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className={`group relative flex flex-col h-full p-7 sm:p-8 rounded-3xl border ${p.border} ${p.bg} backdrop-blur-sm hover:-translate-y-1.5 transition-all duration-500 ${p.hoverShadow} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-carbon focus-visible:ring-white/50`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl ${p.bg} border ${p.border} flex items-center justify-center`}
                  >
                    <p.icon className={`w-7 h-7 ${p.accent}`} aria-hidden="true" />
                  </div>
                  <span className={`text-[11px] uppercase tracking-wider font-semibold ${p.accent} opacity-80`}>
                    {p.who}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white font-heading leading-tight mb-1">
                  {p.title}
                </h3>
                <p className={`text-[15px] font-semibold ${p.accent} mb-4`}>{p.tagline}</p>
                <p className="text-[15px] text-porcelain/70 leading-relaxed flex-1">{p.desc}</p>

                {p.badge && (
                  <span className="mt-5 inline-flex items-center gap-1.5 w-fit px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[12px] font-medium text-emerald-300">
                    <Zap className="w-3.5 h-3.5" aria-hidden="true" />
                    {p.badge}
                  </span>
                )}

                <div
                  className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${p.accent}`}
                >
                  Explore
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ── 4. Energy Intelligence — the signature pinned chapter.
             No overflow-hidden here: it would break position: sticky. ── */}
      <section className="relative bg-carbon">
        <div
          className="absolute inset-0 bg-gradient-to-b from-emerald-900/[0.12] via-transparent to-emerald-900/[0.06]"
          aria-hidden="true"
        />
        <div className="relative pt-24 sm:pt-32">
          <Container>
            <ThreadSeam tone="dark" className="-mt-6 mb-10" />
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4 font-semibold">
                Energy Intelligence
              </p>
              <h2 className="text-[32px] sm:text-5xl lg:text-[56px] font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-6">
                Every home, watching its own energy.
              </h2>
              <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
                It monitors 24/7, diagnoses before the callout, teaches the home toward an A rating, and shows the saving.
              </p>
            </div>
          </Container>
          <EnergyIntelligenceScroller />
          <Container>
            <div className="text-center pt-10 pb-24 sm:pb-32">
              <Link
                href="/assistant#energy"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-emerald-500/30 text-sm font-medium text-emerald-300 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                How the Property Assistant works
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </Container>
        </div>
      </section>

      {/* ── 5. Built by a developer (credibility) ── */}
      <section className="relative py-28 sm:py-32 bg-carbon overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-gold/[0.04] via-transparent to-gold/[0.06]"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] rounded-full bg-gold/[0.05] blur-[120px]"
          aria-hidden="true"
        />
        <Container>
          <ThreadSeam tone="dark" className="-mt-6 mb-10" />
          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-8">
              <HardHat className="w-4 h-4 text-gold" aria-hidden="true" />
              <span className="text-sm font-medium text-gold">Built by a developer</span>
            </div>
            <h2 className="text-[32px] sm:text-5xl lg:text-[56px] font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-8">
              Built by a developer, for developers.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/80 leading-relaxed mb-5">
              OpenHouse was built by a working property developer in Cork while running a thousand-home development pipeline. Every workflow in the platform exists because it was missing from a real developer&rsquo;s day.
            </p>
            <p className="text-[17px] sm:text-xl text-porcelain/80 leading-relaxed">
              We&rsquo;re still using it on our own schemes.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 6. Trust band ── */}
      <section className="relative py-16 sm:py-20 bg-porcelain">
        <Container>
          <ThreadSeam tone="light" height="sm" className="-mt-4 mb-8" />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trustLines.map((t) => (
                <div key={t.title} className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                    <t.icon className="w-4 h-4 text-amber-700" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[16px] font-semibold text-carbon leading-snug">{t.title}</p>
                    <p className="text-[14px] text-carbon/65 leading-relaxed mt-1">{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 7. Peak-end CTA ── */}
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
          <ThreadSeam tone="dark" terminal className="-mt-6 mb-12" />
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-[32px] sm:text-5xl lg:text-[56px] font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-6">
              See it on one of your own schemes.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed max-w-2xl mx-auto mb-10">
              A demo is the fastest way to know whether OpenHouse fits your operation. Thirty minutes. We&rsquo;ll show you the platform configured against the kind of development you&rsquo;re already building.
            </p>

            <div className="flex flex-col items-center gap-5">
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
              <p className="text-sm text-porcelain/60">
                Or email{" "}
                <a
                  href="mailto:sam@openhouseai.ie"
                  className="text-gold hover:text-amber-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                >
                  sam@openhouseai.ie
                </a>{" "}
                if you&rsquo;d rather start with a few questions.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
