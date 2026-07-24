import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { PlatformFloatingCards } from "@/components/hero/cards/PlatformCards";
import { HomeRecordTrace } from "@/components/interactive/HomeRecordTrace";
import { EnergyIntelligenceScroller } from "@/components/interactive/EnergyIntelligenceScroller";
import { CountUp } from "@/components/effects/CountUp";
import { Reveal } from "@/components/effects/Reveal";
import { ThreadSeam } from "@/components/effects/ThreadSeam";
import { SplitText } from "@/components/effects/SplitText";
import { CinematicInterlude } from "@/components/sections/home/CinematicInterlude";
import { AppScreen } from "@/components/product/AppScreen";
import { AskModesCompact } from "@/components/product/AskModes";
import heroBackground from "@/attached_assets/stock_images/platform_aerial_network.png";
import {
  ArrowRight,
  Building2,
  MessageCircle,
  Wrench,
  HardHat,
  Database,
  Plug,
  BookOpen,
  MessagesSquare,
  FileCheck,
  ShieldAlert,
  BarChart3,
  Repeat,
} from "lucide-react";

export const metadata = {
  title: "OpenHouse Ai — Hand over more than the keys",
  description:
    "OpenHouse turns the information already created for every home into a living record. Homeowners ask by text, voice or photo and get a sourced answer. Developers see every question and gap coming back.",
};

const pillars = [
  {
    title: "Developer Dashboard",
    href: "/developers",
    icon: Building2,
    who: "For developers",
    tagline: "Runs the scheme.",
    desc: "Issue a record to every home, see the questions and gaps coming back, and run sales, build, snagging and handover on the same data.",
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
    tagline: "Answers the homeowner.",
    desc: "Every buyer's window into their own home. Sourced answers, plain guidance, and an honest refusal that becomes a developer escalation when the record can't answer.",
    accent: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/30",
    hoverShadow: "hover:shadow-[0_20px_50px_-20px_rgba(212,175,55,0.4)]",
    badge: null as string | null,
  },
  {
    title: "Care",
    href: "/care",
    icon: Wrench,
    who: "For installers",
    tagline: "Extends it to installers.",
    desc: "The same home record, extended to renewables installers: a branded assistant for the systems they installed, and fewer avoidable callouts.",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    hoverShadow: "hover:shadow-[0_20px_50px_-20px_rgba(16,185,129,0.4)]",
    badge: null as string | null,
  },
];

const outcomes = [
  {
    icon: BookOpen,
    title: "Property-specific handovers",
    body: "Every buyer gets guidance for their exact home, not a generic manual folder.",
  },
  {
    icon: MessagesSquare,
    title: "Fewer repeated questions",
    body: "The record answers the same question the tenth time as patiently as the first.",
  },
  {
    icon: FileCheck,
    title: "A record of what buyers received",
    body: "What was handed over, what was asked, what was answered. On the record.",
  },
  {
    icon: ShieldAlert,
    title: "Gaps surfaced, never guessed",
    body: "A missing answer becomes a logged escalation, not an invented one.",
  },
  {
    icon: BarChart3,
    title: "Recurring questions, aggregated",
    body: "See what an entire scheme is asking, ranked by frequency.",
  },
  {
    icon: Repeat,
    title: "Better next handovers",
    body: "What this scheme taught you ships in the next scheme's record from day one.",
  },
];

const adoptionSteps = [
  {
    n: "01",
    title: "You upload one house type's pack",
    body: "Straight into your developer dashboard: the manuals, certs, plans and warranties you already have.",
  },
  {
    n: "02",
    title: "OpenHouse builds the record",
    body: "Your files become one structured record, and the homeowner experience that sits on top of it.",
  },
  {
    n: "03",
    title: "You publish what goes live",
    body: "You control the record from the dashboard. Nothing reaches a homeowner that you did not upload.",
  },
  {
    n: "04",
    title: "Every matching unit gets its record",
    body: "Issued at handover, carried for the life of the home.",
  },
  {
    n: "05",
    title: "Real questions sharpen it",
    body: "Gaps come back to you once, get fixed for every future home.",
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
              Built by a property developer, in Cork
            </span>
          </div>
        }
        title={
          <>
            Hand over{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
              more than the keys
            </span>
            .
          </>
        }
        subtitle="Every home you build gets a living record of itself, and an assistant that answers from it around the clock. Homeowners ask by text, by voice, or by pointing a camera at whatever is flashing. Every answer shows its source, and every gap comes straight back to you."
        primaryCta={{ href: "/contact", label: "Request a house-type walkthrough" }}
        secondaryCta={{ href: "#trace", label: "Trace a sourced answer" }}
      >
        <PlatformFloatingCards />
      </ModuleHero>

      {/* ── 2. The proof: one interaction, end to end ── */}
      <section id="trace" className="relative py-24 sm:py-32 bg-carbon overflow-hidden scroll-mt-32">
        <div
          className="absolute inset-0 bg-gradient-to-b from-gold/[0.06] via-transparent to-gold/[0.04]"
          aria-hidden="true"
        />
        <Container>
          <ThreadSeam tone="dark" className="-mt-6 mb-10" />
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              The product, end to end
            </p>
            <h2 className="text-[32px] sm:text-5xl lg:text-[56px] font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-6">
              Every answer shows where it came from.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
              This is how OpenHouse works. A house type&rsquo;s pack becomes a living record. The record answers the homeowner. A gap becomes work the developer can see.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <HomeRecordTrace />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            <Link
              href="/developers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/30 text-sm font-medium text-gold hover:bg-gold/10 hover:border-gold/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              See the developer view
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/assistant"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-porcelain/80 hover:text-porcelain hover:border-gold/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Meet the assistant
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ── 2.5 The homeowner app, shown rather than described.
             Rebuilt in markup, not pasted in as a screenshot, so it stays
             sharp at any width and legible on a phone. ── */}
      <section className="relative py-24 sm:py-28 bg-carbon overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[70vw] max-h-[900px] w-[70vw] max-w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.05] blur-[130px]"
          aria-hidden="true"
        />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] gap-14 lg:gap-20 items-center max-w-6xl mx-auto">
            <div className="relative flex justify-center lg:justify-start">
              <AppScreen />
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
                The homeowner app
              </p>
              <h2 className="text-[32px] sm:text-5xl font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-6">
                This is what your buyer opens.
              </h2>
              <p className="text-[17px] sm:text-lg text-porcelain/75 leading-relaxed mb-4">
                Not a folder of PDFs and not a general-purpose chatbot. It opens knowing which home it belongs to, which house type it is, and which documents you published to it.
              </p>
              <p className="text-[17px] sm:text-lg text-porcelain/75 leading-relaxed mb-10">
                And a question can arrive three ways.
              </p>

              <AskModesCompact />

              <div className="flex flex-wrap items-center gap-3 mt-10">
                <Link
                  href="/assistant"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/30 text-sm font-medium text-gold hover:bg-gold/10 hover:border-gold/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  See the assistant in full
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. What changes in a developer's operation ── */}
      <section className="relative py-20 sm:py-24 bg-porcelain">
        <Container>
          <ThreadSeam tone="light" height="sm" className="-mt-4 mb-8" />
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700 font-semibold mb-4">
              For developers
            </p>
            <h2 className="text-[28px] sm:text-4xl lg:text-5xl font-bold text-carbon font-heading leading-tight mb-4">
              What changes in your operation.
            </h2>
            <p className="text-[16px] sm:text-lg text-carbon/70 leading-relaxed">
              No invented percentages. This is what the record does, stated plainly.
            </p>
          </div>
          <Reveal stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {outcomes.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-carbon/10 bg-white p-5 sm:p-6 h-full"
              >
                <span className="inline-flex w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 items-center justify-center mb-4">
                  <o.icon className="w-5 h-5 text-amber-700" aria-hidden="true" />
                </span>
                <h3 className="text-[16px] font-semibold text-carbon mb-1.5 leading-snug">
                  {o.title}
                </h3>
                <p className="text-[14px] text-carbon/65 leading-relaxed">{o.body}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ── 4. One model, three views ── */}
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
              One model, three views
            </p>
            <h2 className="text-[32px] sm:text-5xl lg:text-[56px] font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-6">
              One living record of every home.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
              The home record is the durable asset. Developers run their schemes on it, homeowners ask it questions, and installers look after its systems. Three views of the same model.
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

      {/* ── 5. Adoption: start with one house type ── */}
      <section className="relative py-20 sm:py-24 bg-carbon overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.04] to-transparent"
          aria-hidden="true"
        />
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              Adoption
            </p>
            <h2 className="text-[28px] sm:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight mb-4">
              Start with one house type.
            </h2>
            <p className="text-[16px] sm:text-lg text-porcelain/70 leading-relaxed">
              You upload the pack that already exists, from your developer dashboard. OpenHouse produces the record, the homeowner experience and the aftercare intelligence.
            </p>
          </div>

          <Reveal stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-12">
            {adoptionSteps.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 h-full"
              >
                <p className="font-mono text-[12px] text-gold/80 mb-3">{s.n}</p>
                <h3 className="text-[15px] font-semibold text-white mb-1.5 leading-snug">
                  {s.title}
                </h3>
                <p className="text-[13px] text-porcelain/60 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </Reveal>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 max-w-3xl mx-auto">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0">
                <Database className="w-4 h-4 text-gold" aria-hidden="true" />
              </span>
              <p className="text-[14px] text-porcelain/70">
                Your data stays yours. Hosted in Europe, exportable any time.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0">
                <Plug className="w-4 h-4 text-gold" aria-hidden="true" />
              </span>
              <p className="text-[14px] text-porcelain/70">
                No rip and replace. Start with the record; move scheme workflows across when you are ready.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 6. Energy Intelligence: the next layer on the record.
             No overflow-hidden here: it would break position: sticky. ── */}
      <section className="relative bg-carbon">
        <div
          className="absolute inset-0 bg-gradient-to-b from-emerald-900/[0.12] via-transparent to-emerald-900/[0.06]"
          aria-hidden="true"
        />
        <div className="relative pt-24 sm:pt-32">
          <Container>
            <ThreadSeam tone="dark" className="-mt-6 mb-10" />
            <div className="text-center max-w-3xl mx-auto mb-6">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4 font-semibold">
                The next layer
              </p>
              <h2 className="text-[32px] sm:text-5xl lg:text-[56px] font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-6">
                The same record, learning its energy.
              </h2>
              <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
                Energy intelligence is a layer on the home record, not another product. Connected systems report in, and the assistant explains what matters in plain language: money, comfort and risk.
              </p>
            </div>
            <div className="flex justify-center mb-10">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[12px] font-semibold uppercase tracking-wider text-porcelain/60 border border-white/15 bg-white/5">
                Illustrative preview · Example data
              </span>
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

      {/* ── 6.5 Cinematic interlude — a breath after the technical chapter ── */}
      <CinematicInterlude />

      {/* ── 7. Built by a developer (credibility) ── */}
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
              OpenHouse was built by a working property developer in Cork. Every workflow in the platform exists because it was missing from a real developer&rsquo;s day: the handover pack nobody could find, the same question asked forty times, the snag that was already in an email.
            </p>
            <p className="text-[18px] sm:text-xl text-gold/90 font-medium leading-relaxed">
              Nothing in it was designed from the outside looking in.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 8. Market context ── */}
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
              Every one of those homes ships with documents, certs and systems its owner will have questions about. OpenHouse was built inside that market, for the handover that follows every one of them.
            </p>
            <p className="text-center text-[12px] text-carbon/60 mt-4 max-w-3xl mx-auto leading-relaxed">
              Sources: CSO New Dwelling Completions, Q4 2025; Residential Tenancies Board, Q4 2024 Profile of the Register; SEAI Record Year of Progress 2024.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 9. Peak-end CTA ── */}
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
              Bring one house type. We&rsquo;ll do the rest.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed max-w-2xl mx-auto mb-10">
              A walkthrough takes thirty minutes. We&rsquo;ll show you the record OpenHouse builds from a house type like yours, and the sourced answers your buyers would get.
            </p>

            <div className="flex flex-col items-center gap-5">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 min-h-[64px] px-10 sm:px-14 py-5 text-lg sm:text-xl font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_18px_50px_-18px_rgba(212,175,55,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-carbon"
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
