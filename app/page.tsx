import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { PlatformFloatingCards } from "@/components/hero/cards/PlatformCards";
import heroBackground from "@/attached_assets/stock_images/platform_aerial_network.png";
import {
  TrendingUp,
  FolderOpen,
  MessageSquare,
  BarChart3,
  ArrowRight,
  Building2,
  Wrench,
  Headphones,
  Sparkles,
  Check,
  HardHat,
  Database,
  Calendar,
  ShieldCheck,
  Globe,
  Plug,
} from "lucide-react";

export const metadata = {
  title: "OpenHouse Ai, One Platform for Every Stage of Property Development",
  description:
    "OpenHouse replaces the spreadsheets, WhatsApp groups, and paper folders developers still rely on. Sales, build, handover, ongoing care. One system, one source of truth, used by real developers in Ireland today.",
};

const modules = [
  {
    title: "Sales",
    href: "/sales",
    icon: TrendingUp,
    desc: "Live pipeline across every unit, scheme, and buyer.",
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    hoverShadow: "hover:shadow-[0_15px_40px_-15px_rgba(59,130,246,0.35)]",
  },
  {
    title: "Build",
    href: "/build",
    icon: FolderOpen,
    desc: "Documents, certs, and compliance organised before handover.",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    hoverShadow: "hover:shadow-[0_15px_40px_-15px_rgba(16,185,129,0.35)]",
  },
  {
    title: "Handover",
    href: "/handover",
    icon: MessageSquare,
    desc: "Every home gets an AI assistant trained on its own documents.",
    accent: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/30",
    hoverShadow: "hover:shadow-[0_15px_40px_-15px_rgba(212,175,55,0.35)]",
  },
  {
    title: "Intelligence",
    href: "/intelligence",
    icon: Sparkles,
    desc: "Ask anything about any scheme, get the answer instantly.",
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
  {
    title: "Care",
    href: "/care",
    icon: Wrench,
    desc: "Aftercare AI for the renewable systems in every home you build.",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    hoverShadow: "hover:shadow-[0_15px_40px_-15px_rgba(16,185,129,0.35)]",
  },
];

const realityList = [
  "One live pipeline instead of a Friday Excel update",
  "Every cert, manual, and document tied to a unit, not a folder",
  "Buyer questions answered by the platform, not by a phone call",
  "Handover packs ready a week before keys, not the night before",
  "One assistant that knows your whole portfolio",
  "Aftercare that doesn't depend on someone being on call",
];

const personas = [
  {
    icon: Building2,
    title: "For developer principals.",
    description:
      "You see every scheme, every unit, every buyer, every cert, every cost, in one place. No chasing your team for status.",
  },
  {
    icon: TrendingUp,
    title: "For sales directors.",
    description:
      "A live pipeline across every development, not a Friday spreadsheet. Selections, contracts, deposits, all in one view.",
  },
  {
    icon: HardHat,
    title: "For construction and customer care teams.",
    description:
      "Compliance docs organised by unit. Handover packs that build themselves. Residents who find their own answers.",
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
    title: "Your team adopts it in an afternoon.",
    body: "No twelve-week implementation.",
  },
  {
    icon: Plug,
    title: "Your existing tools keep working.",
    body: "Email, calendar, accounting, all integrated.",
  },
];

// Modules positioned across the lifecycle for the platform diagram in section 3.
const lifecycle = ["Sell", "Build", "Handover", "Ongoing"];

interface OverlayModule {
  title: string;
  icon: typeof Sparkles;
  accent: string;
  bg: string;
  border: string;
  spans: string; // tailwind col-span / grid placement
}

const overlayModules: OverlayModule[] = [
  {
    title: "Intelligence sits across all four",
    icon: Sparkles,
    accent: "text-violet-300",
    bg: "bg-violet-500/10",
    border: "border-violet-400/30",
    spans: "col-span-4",
  },
  {
    title: "Agent sits across all four",
    icon: Headphones,
    accent: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/30",
    spans: "col-span-4",
  },
  {
    title: "Care sits across Handover and Ongoing",
    icon: Wrench,
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    spans: "col-start-3 col-span-2",
  },
];

export default function PlatformPage() {
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
            <span className="w-2 h-2 bg-gold rounded-full motion-safe:animate-pulse" />
            <span className="text-sm font-medium text-gold">
              Live on active developments today
            </span>
          </div>
        }
        title={
          <>
            One platform.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
              Every stage
            </span>{" "}
            of property development.
          </>
        }
        subtitle="OpenHouse replaces the spreadsheets, WhatsApp groups, and paper folders developers still rely on. Sales, build, handover, ongoing care. One system, one source of truth, used by real developers in Ireland today."
        primaryCta={{ href: "#platform", label: "See how it works" }}
        secondaryCta={{ href: "/contact", label: "Book a Demo" }}
      >
        <PlatformFloatingCards />
      </ModuleHero>

      {/* ── 2. Market-context strip ── */}
      <section className="relative py-14 sm:py-16 bg-porcelain">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 text-center">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-amber-700 font-heading leading-none mb-2">
                  36,284
                </p>
                <p className="text-[14px] sm:text-[15px] text-carbon/75 leading-relaxed">
                  New homes completed in Ireland in 2025, the highest since 2008.
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-amber-700 font-heading leading-none mb-2">
                  240,964
                </p>
                <p className="text-[14px] sm:text-[15px] text-carbon/75 leading-relaxed">
                  Private tenancies registered with the Residential Tenancies Board.
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-amber-700 font-heading leading-none mb-2">
                  3,609
                </p>
                <p className="text-[14px] sm:text-[15px] text-carbon/75 leading-relaxed">
                  New heat pumps installed under SEAI schemes in 2024 alone.
                </p>
              </div>
            </div>
            <p className="text-center text-[15px] sm:text-[16px] text-carbon/70 leading-relaxed mt-10 max-w-2xl mx-auto">
              A market this scale runs on spreadsheets, WhatsApp groups, and paper folders. OpenHouse is the system replacing them. Live today on developments in Cork, and expanding.
            </p>
            <p className="text-center text-[12px] text-carbon/45 mt-4 max-w-3xl mx-auto leading-relaxed">
              Sources: CSO New Dwelling Completions, Q4 2025 full year; Residential Tenancies Board, Q4 2024 Profile of the Register; SEAI Record Year of Progress 2024.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 3. The Platform (money shot) ── */}
      <section
        id="platform"
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
              The Platform
            </p>
            <h2 className="text-[32px] sm:text-5xl lg:text-[60px] font-bold text-white font-heading leading-[1.05] mb-6">
              The full lifecycle, in one platform.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
              Every home a developer builds passes through the same stages. Most developers still manage each stage with a different tool, a different team, and a different file system. OpenHouse holds all of it in one place.
            </p>
          </div>

          {/* Lifecycle diagram */}
          <div className="relative max-w-5xl mx-auto mb-14 sm:mb-20">
            {/* Lifecycle row */}
            <div className="grid grid-cols-4 gap-3 sm:gap-4 mb-3">
              {lifecycle.map((stage, i) => (
                <div key={stage} className="relative">
                  <div className="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm px-3 py-4 sm:py-5 text-center">
                    <p className="text-[10px] uppercase tracking-wider text-porcelain/45 mb-1">
                      Stage {i + 1}
                    </p>
                    <p className="text-base sm:text-lg font-semibold text-white">
                      {stage}
                    </p>
                  </div>
                  {i < lifecycle.length - 1 && (
                    <div
                      className="hidden sm:flex absolute top-1/2 -right-2 -translate-y-1/2 z-10 items-center"
                      aria-hidden="true"
                    >
                      <ArrowRight className="w-4 h-4 text-porcelain/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Overlay layers showing which modules span which stages */}
            <div className="space-y-2 mt-4">
              {overlayModules.map((mod) => (
                <div
                  key={mod.title}
                  className="grid grid-cols-4 gap-3 sm:gap-4"
                >
                  <div
                    className={`${mod.spans} rounded-xl border ${mod.border} ${mod.bg} backdrop-blur-sm px-4 py-2.5 flex items-center gap-3`}
                  >
                    <mod.icon
                      className={`w-4 h-4 ${mod.accent} flex-shrink-0`}
                      aria-hidden="true"
                    />
                    <p className={`text-[12px] sm:text-sm font-medium ${mod.accent}`}>
                      {mod.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Six module cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
            {modules.map((mod) => (
              <Link
                key={mod.title}
                href={mod.href}
                className={`group relative p-6 rounded-2xl border ${mod.border} ${mod.bg} backdrop-blur-sm hover:-translate-y-1 transition-all duration-500 ${mod.hoverShadow} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-carbon focus-visible:ring-white/50`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-11 h-11 rounded-xl ${mod.bg} border ${mod.border} flex items-center justify-center flex-shrink-0`}
                  >
                    <mod.icon
                      className={`w-5 h-5 ${mod.accent}`}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 font-heading">
                      {mod.title}
                    </h3>
                    <p className="text-[15px] text-porcelain/70 leading-relaxed">
                      {mod.desc}
                    </p>
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
          </div>
        </Container>
      </section>

      {/* ── 4. Why developers actually adopt it ── */}
      <section className="relative py-24 bg-porcelain">
        <Container>
          <div className="max-w-3xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-4 font-semibold">
              Why developers adopt it
            </p>
            <h2 className="text-[28px] sm:text-4xl font-bold text-carbon font-heading leading-tight">
              The reason isn&rsquo;t AI. It&rsquo;s the small things.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 lg:gap-16 max-w-5xl mx-auto">
            <div>
              <p className="text-[17px] sm:text-lg text-carbon/80 leading-relaxed">
                The reason developers move to OpenHouse is rarely &ldquo;we wanted AI.&rdquo; It&rsquo;s the small things that have been broken for years.
              </p>
              <p className="text-[17px] sm:text-lg text-carbon/80 leading-relaxed mt-4">
                The handover folder no one can find. The selection sheet that&rsquo;s three versions out of date. The buyer email that nobody followed up on. The compliance cert that turns up two days before keys.
              </p>
              <p className="text-[17px] sm:text-lg text-carbon font-semibold leading-relaxed mt-4">
                OpenHouse fixes the small things first.
              </p>
            </div>

            <ul className="space-y-4">
              {realityList.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-xl border border-carbon/10 bg-white"
                >
                  <span className="w-6 h-6 rounded-md bg-amber-100 border border-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check
                      className="w-3.5 h-3.5 text-amber-700"
                      aria-hidden="true"
                      strokeWidth={3}
                    />
                  </span>
                  <span className="text-[15px] sm:text-base text-carbon/85 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
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
          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-8">
              <HardHat
                className="w-4 h-4 text-gold"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-gold">
                Built by a developer
              </span>
            </div>
            <h2 className="text-[32px] sm:text-5xl lg:text-[60px] font-bold text-white font-heading leading-[1.05] mb-8">
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

      {/* ── 6. Three-persona block ── */}
      <section className="relative py-24 bg-porcelain">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-4 font-semibold">
              Built For You
            </p>
            <h2 className="text-[28px] sm:text-4xl font-bold text-carbon font-heading leading-tight">
              You probably recognise one of these.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {personas.map((p) => (
              <div
                key={p.title}
                className="p-6 sm:p-8 rounded-2xl border border-carbon/10 bg-white hover:border-amber-600/40 hover:shadow-[0_15px_40px_-15px_rgba(212,175,55,0.3)] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center mb-5">
                  <p.icon
                    className="w-6 h-6 text-amber-700"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-carbon mb-3 font-heading">
                  {p.title}
                </h3>
                <p className="text-[17px] text-carbon/70 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 7. Quiet trust lines ── */}
      <section className="relative py-24 bg-porcelain">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trustLines.map((t) => (
                <div
                  key={t.title}
                  className="flex items-start gap-3"
                >
                  <span className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                    <t.icon
                      className="w-4 h-4 text-amber-700"
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <p className="text-[16px] font-semibold text-carbon leading-snug">
                      {t.title}
                    </p>
                    <p className="text-[14px] text-carbon/65 leading-relaxed mt-1">
                      {t.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 8. Peak-end CTA ── */}
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
            <h2 className="text-[32px] sm:text-5xl lg:text-[60px] font-bold text-white font-heading leading-[1.05] mb-6">
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
