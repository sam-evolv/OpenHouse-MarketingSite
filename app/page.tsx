import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { PlatformFloatingCards } from "@/components/hero/cards/PlatformCards";
import { EnergyIntelligenceScroller } from "@/components/interactive/EnergyIntelligenceScroller";
import { CountUp } from "@/components/effects/CountUp";
import { Reveal } from "@/components/effects/Reveal";
import { ThreadSeam } from "@/components/effects/ThreadSeam";
import { SplitText } from "@/components/effects/SplitText";
import { CinematicInterlude } from "@/components/sections/home/CinematicInterlude";
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
  FileText,
  ShieldAlert,
} from "lucide-react";

export const metadata = {
  title: "OpenHouse Ai | A home that can explain itself",
  description:
    "OpenHouse turns the information already created for every home into sourced homeowner answers and practical aftercare insight for property developers.",
};

const pillars = [
  {
    title: "Developer Dashboard",
    href: "/developers",
    icon: Building2,
    who: "For property developers",
    tagline: "The developer control plane.",
    desc: "Load the approved evidence for a house type, issue it to every matching home and see the questions, escalations and information gaps that follow.",
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
    tagline: "The homeowner interface.",
    desc: "Homeowners ask by text, speech or image and receive plain-language answers grounded in the approved information for their specific home.",
    accent: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/30",
    hoverShadow: "hover:shadow-[0_20px_50px_-20px_rgba(212,175,55,0.4)]",
    badge: "Live product",
  },
  {
    title: "Care",
    href: "/care",
    icon: Wrench,
    who: "For heat pump & solar installers",
    tagline: "An installer extension.",
    desc: "Care applies the same home record and escalation workflow to renewable-system aftercare, while genuine issues return to the installer.",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    hoverShadow: "hover:shadow-[0_20px_50px_-20px_rgba(16,185,129,0.4)]",
    badge: "Pilot direction",
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
    title: "Start with one house type.",
    body: "Use information your team already creates.",
  },
  {
    icon: Plug,
    title: "Missing evidence stays visible.",
    body: "OpenHouse escalates instead of guessing.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* ── 1. Hero ── */}
      <ModuleHero
        titleLabel="A home that can explain itself."
        backgroundImage={heroBackground}
        accentColor="gold"
        imagePosition="object-top"
        backgroundAlt="Aerial view of a residential development at golden hour, connected lines suggesting a platform"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
            <span className="w-2 h-2 bg-gold rounded-full" />
            <span className="text-sm font-medium text-gold">
              Live across more than 150 homes in Cork
            </span>
          </div>
        }
        title={
          <>
            A home that can{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
              explain itself
            </span>
            .
          </>
        }
        subtitle="OpenHouse turns the information already created for every home into sourced answers for homeowners and visible aftercare insight for developers."
        primaryCta={{ href: "/contact", label: "Request a house-type walkthrough" }}
        secondaryCta={{ href: "#pillars", label: "Trace a sourced answer" }}
      >
        <PlatformFloatingCards />
      </ModuleHero>

      {/* ── 2. Market-context strip ── */}
      <section className="relative py-16 sm:py-20 bg-porcelain">
        <Container>
          <ThreadSeam tone="light" height="sm" className="-mt-4 mb-8" />
          <p className="text-sm uppercase tracking-[0.3em] text-amber-700 font-semibold text-center mb-10">
            Live product proof
          </p>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 text-center">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-amber-700 font-heading leading-none mb-2 tabular-nums">
                  <CountUp end={150} suffix="+" className="inline-block min-w-[4ch]" />
                </p>
                <p className="text-[14px] sm:text-[15px] text-carbon/75 leading-relaxed">
                  Homes supported within a live Cork residential development.
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-amber-700 font-heading leading-none mb-2 tabular-nums">
                  1
                </p>
                <p className="text-[14px] sm:text-[15px] text-carbon/75 leading-relaxed">
                  Persistent record for each home, built from approved house-type information.
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-amber-700 font-heading leading-none mb-2 tabular-nums">
                  0
                </p>
                <p className="text-[14px] sm:text-[15px] text-carbon/75 leading-relaxed">
                  Unsupported answers presented as fact. Missing evidence is escalated.
                </p>
              </div>
            </div>
            <p className="text-center text-[15px] sm:text-[16px] text-carbon/70 leading-relaxed mt-10 max-w-2xl mx-auto">
              Operational proof from real homes. The next commercial step is a focused developer walkthrough using one real house type.
            </p>
            <p className="text-center text-[12px] text-carbon/60 mt-4 max-w-3xl mx-auto leading-relaxed">
              Founder-verified deployment: more than 150 houses within a wider development planned for more than 750 homes.
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
              One home record. Three useful views.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
              The Developer Dashboard is the control plane. The Property Assistant is the homeowner interface. Care extends the same record into installer aftercare.
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

          <div className="mx-auto mt-12 grid max-w-6xl gap-4 rounded-3xl border border-gold/20 bg-black/25 p-5 sm:p-7 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold text-porcelain">A sourced homeowner answer</p>
                <span className="rounded border border-white/15 bg-white/5 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-porcelain/65">
                  Example interaction
                </span>
              </div>
              <p className="mb-3 font-serif text-[15px] italic text-porcelain">
                How do I top up the pressure on my heat pump?
              </p>
              <p className="mb-4 text-sm leading-relaxed text-porcelain/75">
                Your home has a Daikin Altherma 3 R in the utility room. The approved handover guide shows the filling loop beneath the indoor unit.
              </p>
              <details className="group rounded-xl border border-gold/25 bg-gold/[0.06]">
                <summary className="flex min-h-[48px] cursor-pointer list-none items-center justify-between gap-3 px-4 text-sm font-medium text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold">
                  <span className="flex items-center gap-2">
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    Open source: handover guide, page 14
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" aria-hidden="true" />
                </summary>
                <p className="border-t border-gold/20 px-4 py-3 text-xs leading-relaxed text-porcelain/65">
                  Heating system: Daikin Altherma 3 R. Location: utility room. Pressure guidance and installer contact are recorded on page 14.
                </p>
              </details>
            </div>

            <div className="rounded-2xl border border-amber-400/25 bg-amber-400/[0.055] p-5">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-amber-300">
                <ShieldAlert className="h-4 w-4" aria-hidden="true" />
                Evidence missing
              </div>
              <p className="mb-4 text-sm leading-relaxed text-porcelain/75">
                I cannot confirm whether this noise is safe from the approved information for your home. I can send the question and photo to the developer or installer.
              </p>
              <div className="rounded-xl border border-white/10 bg-black/25 p-3">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-gold">
                  Developer insight
                </p>
                <p className="text-xs leading-relaxed text-porcelain/60">
                  This unanswered question has appeared across the house type. Add an approved troubleshooting note to future handovers.
                </p>
              </div>
            </div>
          </div>
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
                Direction: Energy Intelligence
              </p>
              <h2 className="text-[32px] sm:text-5xl lg:text-[56px] font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-6">
                The next layer on the same home record.
              </h2>
              <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
                The interface below is an illustrative direction, not a claim of live telemetry, automated diagnosis, remote control or verified savings.
              </p>
            </div>
          </Container>
          <EnergyIntelligenceScroller />
          <Container>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-10 pb-24 sm:pb-32">
              <Link
                href="/assistant#energy"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-emerald-500/30 text-sm font-medium text-emerald-300 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                How the Property Assistant works
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/developers"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/30 text-sm font-medium text-gold hover:bg-gold/10 hover:border-gold/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                See what developers see
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </Container>
        </div>
      </section>

      {/* ── 4.5 Cinematic interlude — a breath after the technical chapter ── */}
      <CinematicInterlude />

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
            <SplitText
              as="h2"
              className="text-[32px] sm:text-5xl lg:text-[56px] font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-8"
            >
              {"Built by a developer,\nfor developers."}
            </SplitText>
            <p className="text-[17px] sm:text-xl text-porcelain/80 leading-relaxed mb-6">
              OpenHouse was built by a working property developer in Cork while helping take a residential scheme from greenfield to more than 200 homes within a planned 750-plus-home development.
            </p>
            <p className="text-[18px] sm:text-xl text-gold/90 font-medium leading-relaxed">
              It now supports more than 150 homes there.
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
              Bring the plans, manuals and handover information for one house type. We&rsquo;ll trace how it becomes a homeowner answer and a developer insight.
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
                  Request a house-type walkthrough
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
