import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { SalesFloatingCards } from "@/components/hero/cards/SalesCards";
import heroBackground from "@/attached_assets/stock_images/sales_show_home.png";
import salesPipeline from "@/attached_assets/stock_images/sales_pipeline.png";
import {
  TrendingUp,
  LayoutDashboard,
  AlertCircle,
  Mail,
  UserCheck,
  FileText,
  Users,
  Briefcase,
  Building2,
  ArrowRight,
  Home,
  ChevronLeft,
  FolderOpen,
  MessageSquare,
  Sparkles,
  Wrench,
} from "lucide-react";

export const metadata = {
  title: "Sales Module, Live Pipeline for Property Developers | OpenHouse Ai",
  description:
    "OpenHouse Sales gives you a live pipeline across every unit and every buyer, with the deals quietly going cold flagged before they die. No more Friday spreadsheets.",
};

const costStats = [
  {
    value: "10.4 weeks",
    label:
      "Average time to complete a residential conveyance in Ireland",
  },
  {
    value: "17 weeks",
    label: "Average time in the UK in 2024, for comparison",
  },
  {
    value: "1 in 7",
    label:
      "Property deals fall through, mostly due to issues found too late",
  },
];

const steps = [
  {
    icon: LayoutDashboard,
    title: "Your live pipeline.",
    desc: "Every unit, every buyer, every stage, in one view. Filter by scheme, by stage, by agent. No more “where are we on Unit 12?”",
  },
  {
    icon: AlertCircle,
    title: "Slow deals flagged.",
    desc: "The platform watches for the silent killers, contracts not returned, AIPs about to expire, buyers who haven't been contacted in fourteen days. You see them before they become a problem.",
  },
  {
    icon: Mail,
    title: "Drafts ready to send.",
    desc: "Chase the solicitor, nudge the buyer, update the developer. Drafted in your tone, waiting for your approval.",
  },
];

const features = [
  {
    icon: LayoutDashboard,
    title: "Live pipeline across every scheme.",
    description:
      "One view for one development, or a portfolio view across all of them. Filter, sort, export.",
  },
  {
    icon: UserCheck,
    title: "Buyer-by-buyer view.",
    description:
      "Every buyer's stage, history, communications, AIP status, deposits, selections, contract progress. All in one profile.",
  },
  {
    icon: AlertCircle,
    title: "Auto-flags the deals that need you.",
    description:
      "Aged contracts. Expiring mortgage approvals. Buyers gone quiet. Surfaced before they become a problem.",
  },
  {
    icon: FileText,
    title: "Reports your developer asks for, drafted.",
    description:
      "Weekly pipeline reports. Monthly forecasts. End-of-quarter summaries. Drafted in your format, ready for your approval.",
  },
];

const personas = [
  {
    icon: Building2,
    title: "Sales directors at developers.",
    description:
      "You're running 2 to 8 schemes with a small team. Sales is the live version of what you wish your spreadsheet did.",
  },
  {
    icon: Users,
    title: "In-house sales teams.",
    description:
      "Three to ten people moving deals through the same pipeline. Sales keeps everyone on the same page without the morning standup.",
  },
  {
    icon: Briefcase,
    title: "External agents working on a development.",
    description:
      "Selling someone else's homes. Sales gives you scoped access to the units you're handling, so you and the developer see the same picture.",
  },
];

const platformModules = [
  { title: "Build", href: "/build", icon: FolderOpen, accent: "text-emerald-400" },
  { title: "Handover", href: "/handover", icon: MessageSquare, accent: "text-gold" },
  { title: "Intelligence", href: "/intelligence", icon: Sparkles, accent: "text-gold" },
  { title: "Care", href: "/care", icon: Wrench, accent: "text-emerald-400" },
];

export default function SalesPage() {
  return (
    <div>
      {/* ── Module Badge ── */}
      <div className="fixed top-36 sm:top-40 left-4 sm:left-6 z-50">
        <Link
          href="/"
          aria-label="Back to the OpenHouse home page"
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium backdrop-blur-md hover:bg-blue-500/20 transition-all duration-300"
        >
          <ChevronLeft className="w-3 h-3" aria-hidden="true" />
          <Home className="w-3 h-3" aria-hidden="true" />
          <span className="hidden sm:inline">Platform</span>
        </Link>
      </div>

      {/* ── 1. Hero ── */}
      <ModuleHero
        backgroundImage={heroBackground}
        accentColor="blue"
        backgroundAlt="Premium show home at twilight with for sale signage"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30">
            <TrendingUp className="w-4 h-4 text-blue-400" aria-hidden="true" />
            <span className="text-sm font-medium text-blue-400">Sales Module</span>
          </div>
        }
        title={
          <>
            The deals you&rsquo;re losing are the ones you can&rsquo;t{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-400">
              see
            </span>
            .
          </>
        }
        subtitle="OpenHouse Sales gives you a live pipeline across every unit and every buyer, with the deals quietly going cold flagged before they die. No more Friday spreadsheets. No more &ldquo;I thought you were chasing that one.&rdquo;"
        primaryCta={{ href: "#money-shot", label: "See the pipeline" }}
        secondaryCta={{ href: "/contact", label: "Book a Demo" }}
      >
        <SalesFloatingCards />
      </ModuleHero>

      {/* ── 2. Cost of Invisible Deals ── */}
      <section className="relative py-20 sm:py-24 bg-carbon">
        <div
          className="absolute inset-0 bg-gradient-to-b from-blue-900/[0.08] via-transparent to-transparent"
          aria-hidden="true"
        />
        <Container>
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-4 font-semibold">
              The conveyancing reality
            </p>
            <h2 className="text-[28px] sm:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight">
              The slow deals are the ones nobody can see.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl">
            {costStats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 hover:border-blue-500/30 hover:bg-blue-500/[0.03] transition-all duration-500"
              >
                <p className="text-[44px] sm:text-5xl lg:text-[56px] font-bold text-blue-400 font-heading leading-none mb-4">
                  {stat.value}
                </p>
                <p className="text-[17px] text-porcelain/75 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-[18px] sm:text-xl text-porcelain/85 mt-12 sm:mt-14 max-w-2xl mx-auto leading-relaxed">
            The slow deals are the ones nobody can see. Contracts sit with solicitors. Buyers go quiet. Selections never get signed off. By the time someone notices on Friday, the deal has been dying for three weeks.
          </p>
          <p className="text-center text-[12px] text-porcelain/40 mt-5 max-w-3xl mx-auto leading-relaxed">
            Sources: Institute of Professional Auctioneers and Valuers (IPAV) via Augustus Cullen Law; Legal Ombudsman 2024 via Law Society of Ireland Gazette, April 2026; Irish Times analysis of Irish conveyancing, September 2025.
          </p>
        </Container>
      </section>

      {/* ── 3. Money Shot, Live Pipeline ── */}
      <section
        id="money-shot"
        className="relative py-24 sm:py-32 bg-carbon overflow-hidden scroll-mt-32"
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-blue-900/[0.10] via-transparent to-blue-900/[0.06]"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vw] max-w-[1200px] rounded-full bg-blue-500/[0.05] blur-[140px]"
          aria-hidden="true"
        />
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-4 font-semibold">
              The Pipeline
            </p>
            <h2 className="text-[32px] sm:text-5xl lg:text-[64px] font-bold text-white font-heading leading-[1.05] mb-6">
              Every unit. Every buyer. Every stage. Live.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
              This is what a Friday spreadsheet should have always been. Real-time across every development. The deals that need you, surfaced. The deals that don&rsquo;t, out of your way.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div
              className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-blue-500/25 via-blue-400/10 to-blue-500/25 rounded-3xl blur-2xl"
              aria-hidden="true"
            />
            <div className="relative rounded-2xl overflow-hidden border border-blue-500/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
              <Image
                src={salesPipeline}
                alt="OpenHouse Sales pipeline showing 75 units across stages with deposit, contract and handover status per unit"
                className="w-full h-auto"
                placeholder="blur"
              />

              {/* At-risk callout overlaying the screenshot */}
              <div
                className="hidden md:block absolute top-[58%] left-[6%] right-[60%] pointer-events-none"
                aria-hidden="true"
              >
                <div className="rounded-xl border-2 border-gold bg-gold/[0.08] shadow-[0_0_30px_rgba(212,175,55,0.45)] h-[44px]" />
              </div>
            </div>

            {/* At-risk explainer card */}
            <div className="relative -mt-6 sm:-mt-8 mx-auto max-w-md sm:max-w-lg z-10">
              <div className="rounded-2xl border border-gold/40 bg-neutral-900/95 backdrop-blur-xl p-5 sm:p-6 shadow-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-gold" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-wider text-gold font-semibold mb-1">
                      The row to look at
                    </p>
                    <p className="text-[16px] sm:text-base font-semibold text-white leading-snug">
                      Unit 12. Contracts out 18 days. No response.
                    </p>
                    <p className="text-[14px] text-porcelain/65 mt-1">
                      This is the deal you didn&rsquo;t know was dying. The platform spotted it on day fifteen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. How Sales Works ── */}
      <section className="relative py-24 bg-porcelain">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-700 mb-4 font-semibold">
              How Sales Works
            </p>
            <h2 className="text-[28px] sm:text-4xl font-bold text-carbon font-heading leading-tight">
              Three steps, no curve.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative p-6 sm:p-8 rounded-2xl border border-carbon/10 bg-white hover:border-blue-500/40 hover:shadow-[0_15px_40px_-15px_rgba(59,130,246,0.25)] transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-blue-700" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-mono text-carbon/60">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-carbon mb-3 font-heading">
                  {step.title}
                </h3>
                <p className="text-[17px] text-carbon/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. What Sales Does (4 cards) ── */}
      <section className="relative py-24 bg-carbon">
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.03] to-transparent"
          aria-hidden="true"
        />
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-4 font-semibold">
              What Sales Does
            </p>
            <h2 className="text-[28px] sm:text-4xl font-bold text-white font-heading leading-tight">
              Four jobs, off your plate.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-blue-500/30 hover:bg-blue-500/[0.04] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-blue-400" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 font-heading">
                  {f.title}
                </h3>
                <p className="text-[17px] text-porcelain/75 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 6. Built For You ── */}
      <section className="relative py-24 bg-carbon">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-4 font-semibold">
              Built For You
            </p>
            <h2 className="text-[28px] sm:text-4xl font-bold text-white font-heading leading-tight">
              You probably recognise one of these.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {personas.map((p) => (
              <div
                key={p.title}
                className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-blue-500/30 hover:bg-blue-500/[0.04] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-blue-400" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 font-heading">
                  {p.title}
                </h3>
                <p className="text-[17px] text-porcelain/75 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 7. Quiet Trust Line ── */}
      <section className="relative py-24 bg-porcelain">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[26px] sm:text-3xl lg:text-[32px] font-bold text-carbon font-heading leading-tight mb-6">
              Your buyer data stays yours.
            </h2>
            <p className="text-[18px] sm:text-lg text-carbon/75 leading-relaxed">
              Buyer information sits in your platform, not ours. Hosted in Europe. You can export everything at any time. You&rsquo;re never locked in.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 8. Peak-end CTA ── */}
      <section className="relative py-28 sm:py-36 bg-carbon overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-blue-900/[0.10] via-transparent to-blue-900/[0.12]"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-blue-500/[0.06] blur-[140px]"
          aria-hidden="true"
        />
        <Container>
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-[32px] sm:text-5xl lg:text-[60px] font-bold text-white font-heading leading-[1.05] mb-6">
              See it running on a scheme like yours.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed max-w-2xl mx-auto mb-10">
              A demo takes thirty minutes. We&rsquo;ll load up a development that looks like one of yours and walk you through how your team would actually use it.
            </p>

            <div className="flex flex-col items-center gap-5">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 min-h-[64px] px-10 sm:px-14 py-5 text-lg sm:text-xl font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(59,130,246,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-carbon"
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600"
                  aria-hidden="true"
                />
                <span className="relative z-10 text-white flex items-center gap-3">
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
                  className="text-blue-400 hover:text-blue-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                >
                  sam@openhouseai.ie
                </a>{" "}
                with questions first.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 9. Platform Strip ── */}
      <section className="relative py-20 bg-porcelain">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-3xl font-bold text-carbon font-heading mb-4">
              Part of the OpenHouse platform.
            </h2>
            <p className="text-[17px] sm:text-lg text-carbon/70 leading-relaxed">
              Sales is one module of five. Same data, different surfaces, one platform that runs every stage of a development.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {platformModules.map((mod) => (
              <Link
                key={mod.title}
                href={mod.href}
                className="group flex items-center gap-3 min-h-[64px] px-4 py-3 rounded-2xl border border-carbon/10 bg-white hover:bg-blue-50 hover:border-blue-500/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span className="w-9 h-9 rounded-xl bg-carbon/[0.04] flex items-center justify-center flex-shrink-0">
                  <mod.icon className={`w-4 h-4 ${mod.accent}`} aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-carbon">
                  {mod.title}
                </span>
                <ArrowRight
                  className="w-4 h-4 text-carbon/40 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
