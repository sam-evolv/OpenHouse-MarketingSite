import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { IntelligenceFloatingCards } from "@/components/hero/cards/IntelligenceCards";
import { IntelligenceTryItWidget } from "@/components/interactive/IntelligenceTryItWidget";
import heroBackground from "@/attached_assets/stock_images/intelligence_data_network.png";
import intelligenceConversation from "@/attached_assets/stock_images/Intelligence2.png";
import {
  Sparkles,
  Database,
  MessageSquare,
  Link2,
  LayoutDashboard,
  LineChart,
  BookOpen,
  Sunrise,
  Building2,
  Briefcase,
  Calculator,
  ArrowRight,
  Home,
  ChevronLeft,
  TrendingUp,
  FolderOpen,
  Wrench,
  MessageCircle,
} from "lucide-react";

export const metadata = {
  title:
    "Intelligence Module, Ask Anything About Any Scheme | OpenHouse Ai",
  description:
    "OpenHouse Intelligence sits across your live sales data, compliance documents, financial projections, resident questions, and Irish building regulations. Ask a question. Get the answer with the data it came from.",
};

const steps = [
  {
    icon: Database,
    title: "Your data, in one place.",
    desc: "Sales pipeline, compliance certs, document library, resident questions, financial projections, all already on the OpenHouse platform.",
  },
  {
    icon: MessageSquare,
    title: "Ask a question.",
    desc: "Plain English. Voice or text. About one scheme or your whole portfolio. No syntax, no dashboards to learn.",
  },
  {
    icon: Link2,
    title: "The answer cites the data.",
    desc: "Every answer comes with the source data it drew from. When Intelligence doesn't know, it says so instead of guessing.",
  },
];

const features = [
  {
    icon: LayoutDashboard,
    title: "Cross-scheme questions answered.",
    description:
      "Ask about one development or your full portfolio. Pipeline, compliance, revenue, residents, anything.",
  },
  {
    icon: LineChart,
    title: "Live financial projections.",
    description:
      "This month's projected close. End-of-quarter forecast. Revenue per scheme. Pulled from live pipeline data, not a stale spreadsheet.",
  },
  {
    icon: BookOpen,
    title: "Regulatory expertise built in.",
    description:
      "Irish building regulations are in the assistant's knowledge. Ask whether your ventilation meets Part F or your insulation meets Part L and you get a real answer.",
  },
  {
    icon: Sunrise,
    title: "Today's briefing every morning.",
    description:
      "What needs your attention today. What's progressing. What's stuck. Delivered as a short briefing, customised to what you actually run.",
  },
];

const personas = [
  {
    icon: Building2,
    title: "Developer principals.",
    description:
      "You run the business. Intelligence holds the whole picture so you don't have to. Every scheme, every cost, every resident, askable.",
  },
  {
    icon: Briefcase,
    title: "Construction and sales directors.",
    description:
      "You run the operation. Intelligence answers the questions you'd otherwise ask your team five times a week.",
  },
  {
    icon: Calculator,
    title: "Finance and compliance leads.",
    description:
      "You run the numbers and the audit trail. Intelligence pulls projections from live data and compliance status from real documents.",
  },
];

const platformModules = [
  { title: "Sales", href: "/sales", icon: TrendingUp, accent: "text-blue-400" },
  { title: "Build", href: "/build", icon: FolderOpen, accent: "text-emerald-400" },
  { title: "Handover", href: "/handover", icon: MessageCircle, accent: "text-gold" },
  { title: "Care", href: "/care", icon: Wrench, accent: "text-emerald-400" },
];

export default function IntelligencePage() {
  return (
    <div>
      {/* ── Module Badge ── */}
      <div className="fixed top-20 md:top-40 left-4 sm:left-6 z-50">
        <Link
          href="/"
          aria-label="Back to the OpenHouse home page"
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/15 border border-violet-400/30 text-violet-300 text-xs font-medium backdrop-blur-md hover:bg-violet-500/25 transition-all duration-300"
        >
          <ChevronLeft className="w-3 h-3" aria-hidden="true" />
          <Home className="w-3 h-3" aria-hidden="true" />
          <span className="hidden sm:inline">Platform</span>
        </Link>
      </div>

      {/* ── 1. Hero ── */}
      <ModuleHero
        backgroundImage={heroBackground}
        accentColor="violet"
        backgroundAlt="Abstract data network representing OpenHouse Intelligence"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/15 border border-violet-400/30">
            <Sparkles className="w-4 h-4 text-violet-300" aria-hidden="true" />
            <span className="text-sm font-medium text-violet-300">
              Intelligence Module
            </span>
          </div>
        }
        title={
          <>
            Ask anything about any scheme. Get the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-purple-300 to-violet-300">
              actual
            </span>{" "}
            answer.
          </>
        }
        subtitle="OpenHouse Intelligence sits across your live sales data, compliance documents, financial projections, resident questions, and regulations. Ask a question. Get the answer with the data it came from. No graphs to interpret. No tools to learn."
        primaryCta={{ href: "#try-it", label: "Ask it something" }}
        secondaryCta={{ href: "/contact", label: "Request a walkthrough" }}
      >
        <IntelligenceFloatingCards />
      </ModuleHero>

      {/* ── 2. Try-it widget (the spine) ── */}
      <section
        id="try-it"
        className="relative py-20 sm:py-24 bg-carbon scroll-mt-32"
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-violet-500/[0.06] via-transparent to-transparent"
          aria-hidden="true"
        />
        <Container>
          <div className="max-w-3xl mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300 mb-4 font-semibold">
              Try It
            </p>
            <h2 className="text-[28px] sm:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight mb-4">
              Try it. No sign-up.
            </h2>
            <p className="text-[17px] sm:text-lg text-porcelain/75 leading-relaxed max-w-2xl">
              This is the actual Intelligence interface. Every answer cites the data it came from. If it doesn&rsquo;t know, it says so.
            </p>
          </div>

          <IntelligenceTryItWidget />
        </Container>
      </section>

      {/* ── 3. Money Shot, full Intelligence view ── */}
      <section className="relative py-24 sm:py-32 bg-carbon overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-violet-500/[0.08] via-transparent to-violet-500/[0.05]"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vw] max-w-[1200px] rounded-full bg-violet-500/[0.06] blur-[140px]"
          aria-hidden="true"
        />
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300 mb-4 font-semibold">
              The Interface
            </p>
            <h2 className="text-[32px] sm:text-5xl lg:text-[60px] font-bold text-white font-heading leading-[1.05] mb-6">
              One assistant. Every scheme. Every system. Every question.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
              Live sales data, compliance documents, financial projections, resident queries, Irish building regulations. Intelligence sits across all of it. Ask about one development or the whole portfolio. The answer is the same speed.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div
              className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-violet-500/30 via-purple-500/10 to-violet-500/30 rounded-3xl blur-2xl"
              aria-hidden="true"
            />
            <div className="relative rounded-2xl overflow-hidden border border-violet-400/30 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
              <Image
                src={intelligenceConversation}
                alt="OpenHouse Intelligence interface mid-conversation, with a sourced answer about 158 units sale agreed and a chart breakdown, plus a Today's Briefing button and a scheme selector"
                className="w-full h-auto"
                placeholder="blur"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. How Intelligence Works ── */}
      <section className="relative py-24 bg-porcelain">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-700 mb-4 font-semibold">
              How Intelligence Works
            </p>
            <h2 className="text-[28px] sm:text-4xl font-bold text-carbon font-heading leading-tight">
              Three steps, no curve.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative p-6 sm:p-8 rounded-2xl border border-carbon/10 bg-white hover:border-violet-500/40 hover:shadow-[0_15px_40px_-15px_rgba(139,92,246,0.25)] transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-violet-100 border border-violet-200 flex items-center justify-center">
                    <step.icon
                      className="w-5 h-5 text-violet-700"
                      aria-hidden="true"
                    />
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

      {/* ── 5. What Intelligence Does ── */}
      <section className="relative py-24 bg-carbon">
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.04] to-transparent"
          aria-hidden="true"
        />
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300 mb-4 font-semibold">
              What Intelligence Does
            </p>
            <h2 className="text-[28px] sm:text-4xl font-bold text-white font-heading leading-tight">
              Four jobs, off your plate.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-violet-400/40 hover:bg-violet-500/[0.05] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/15 border border-violet-400/30 flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-violet-300" aria-hidden="true" />
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
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300 mb-4 font-semibold">
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
                className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-violet-400/40 hover:bg-violet-500/[0.05] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/15 border border-violet-400/30 flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-violet-300" aria-hidden="true" />
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

      {/* ── 7. Trust Line ── */}
      <section className="relative py-24 bg-porcelain">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[26px] sm:text-3xl lg:text-[32px] font-bold text-carbon font-heading leading-tight mb-6">
              Every answer is sourced. Every source is yours.
            </h2>
            <p className="text-[18px] sm:text-lg text-carbon/75 leading-relaxed">
              Intelligence draws its answers from the data already in your OpenHouse account. Your sales pipeline, your compliance documents, your residents&rsquo; questions. Nothing leaves your platform. Nothing is trained on your data to improve a generic model. Your data is yours.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 8. Peak-end CTA ── */}
      <section className="relative py-28 sm:py-36 bg-carbon overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-violet-500/[0.08] via-transparent to-violet-500/[0.10]"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-violet-500/[0.08] blur-[140px]"
          aria-hidden="true"
        />
        <Container>
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-[32px] sm:text-5xl lg:text-[60px] font-bold text-white font-heading leading-[1.05] mb-6">
              See it on your actual data.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed max-w-2xl mx-auto mb-10">
              A demo takes thirty minutes. We&rsquo;ll load Intelligence against a development that looks like yours, and you can ask whatever questions are on your mind today.
            </p>

            <div className="flex flex-col items-center gap-5">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 min-h-[64px] px-10 sm:px-14 py-5 text-lg sm:text-xl font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(139,92,246,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-4 focus-visible:ring-offset-carbon"
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-violet-600 via-violet-500 to-violet-600"
                  aria-hidden="true"
                />
                <span className="relative z-10 text-carbon flex items-center gap-3">
                  Request a walkthrough
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
                  className="text-violet-300 hover:text-violet-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded"
                >
                  sam@openhouseai.ie
                </a>{" "}
                if you have a specific question first.
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
              Intelligence is one module of five. Same data, different surfaces, one platform that runs every stage of a development.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {platformModules.map((mod) => (
              <Link
                key={mod.title}
                href={mod.href}
                className="group flex items-center gap-3 min-h-[64px] px-4 py-3 rounded-2xl border border-carbon/10 bg-white hover:bg-violet-50 hover:border-violet-500/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                <span className="w-9 h-9 rounded-xl bg-carbon/[0.04] flex items-center justify-center flex-shrink-0">
                  <mod.icon
                    className={`w-4 h-4 ${mod.accent}`}
                    aria-hidden="true"
                  />
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
