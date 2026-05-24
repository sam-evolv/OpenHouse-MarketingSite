import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { IntelligenceFloatingCards } from "@/components/hero/cards/IntelligenceCards";
import { TryItWidget } from "@/components/intelligence/TryItWidget";
import { IntelligenceConsole } from "@/components/intelligence/IntelligenceConsole";
import heroBackground from "@/attached_assets/stock_images/intelligence_data_network.png";
import {
  Sparkles,
  ChevronLeft,
  Home,
  Database,
  MessageSquare,
  Link as LinkIcon,
  LayoutDashboard,
  LineChart,
  BookOpen,
  Sunrise,
  Building2,
  Briefcase,
  Calculator,
  ShieldCheck,
  ArrowRight,
  Smartphone,
  LifeBuoy,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Intelligence - Ask Anything About Any Scheme | OpenHouse Ai",
  description:
    "Intelligence is the question-asking layer of the Developer Dashboard. Ask about any scheme, any unit, any cert, any resident, any number, and get the answer in plain language with the data it came from.",
};

const steps = [
  {
    icon: Database,
    title: "Your data, in one place.",
    body: "Sales pipeline, compliance certs, document library, resident questions, financial projections, all already on your Developer Dashboard.",
  },
  {
    icon: MessageSquare,
    title: "Ask a question.",
    body: "Plain English. Voice or text. About one scheme or your whole portfolio. No syntax, no dashboards to learn.",
  },
  {
    icon: LinkIcon,
    title: "The answer cites the data.",
    body: "Every answer comes with the source data it drew from. If Intelligence does not know, it says so. No hallucinations, no guesses.",
  },
];

const capabilities = [
  {
    icon: LayoutDashboard,
    title: "Cross-scheme questions answered",
    body: "Ask about one development or your full portfolio. Pipeline, compliance, revenue, residents, anything.",
  },
  {
    icon: LineChart,
    title: "Live financial projections",
    body: "This month's projected close. End-of-quarter forecast. Revenue per scheme. Pulled from live pipeline data, not a stale spreadsheet.",
  },
  {
    icon: BookOpen,
    title: "Regulatory expertise built in",
    body: "Irish building regulations are in the assistant's knowledge. Ask whether your ventilation meets Part F or your insulation meets Part L and you get a real answer.",
  },
  {
    icon: Sunrise,
    title: "Today's briefing every morning",
    body: "What needs your attention today. What is progressing. What is stuck. Delivered as a short briefing, customised to what you actually run.",
  },
];

const personas = [
  {
    icon: Building2,
    title: "Developer principals",
    body: "You run the business. Intelligence holds the whole picture so you do not have to. Every scheme, every cost, every resident, askable.",
  },
  {
    icon: Briefcase,
    title: "Construction and sales directors",
    body: "You run the operation. Intelligence answers the questions you would otherwise ask your team five times a week.",
  },
  {
    icon: Calculator,
    title: "Finance and compliance leads",
    body: "You run the numbers and the audit trail. Intelligence pulls projections from live data and compliance status from real documents.",
  },
];

const products = [
  {
    icon: LayoutDashboard,
    title: "Developer Dashboard",
    blurb: "Where Intelligence lives.",
    href: "/developer-dashboard",
  },
  {
    icon: Smartphone,
    title: "Property Assistant",
    blurb: "For residents.",
    href: "/property-assistant",
  },
  {
    icon: LifeBuoy,
    title: "Care",
    blurb: "For installers.",
    href: "/care",
  },
];

export default function IntelligencePage() {
  return (
    <main>
      {/* ── Module Badge ── */}
      <div className="fixed top-36 sm:top-40 left-4 sm:left-6 z-50">
        <Link
          href="/"
          className="group flex min-h-[48px] items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-3 py-1.5 text-xs font-medium text-gold backdrop-blur-md transition-all duration-300 hover:bg-gold/20 sm:min-h-0"
        >
          <ChevronLeft className="h-3 w-3" />
          <Home className="h-3 w-3" />
          <span className="hidden sm:inline">Platform</span>
        </Link>
      </div>

      {/* ── [1] Hero ── */}
      <ModuleHero
        backgroundImage={heroBackground}
        accentColor="gold"
        backgroundAlt="An abstract network of connected data points at dusk"
        badge={
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="text-sm font-medium text-gold">Intelligence</span>
          </div>
        }
        title={
          <>
            Ask anything about any scheme. Get the{" "}
            <span className="bg-gradient-to-r from-gold via-amber-400 to-gold bg-clip-text text-transparent">
              actual
            </span>{" "}
            answer.
          </>
        }
        subtitle="Intelligence is the question-asking layer of the Developer Dashboard. Type or ask a question about any scheme, any unit, any cert, any resident, any number. Get the answer in plain language, with the data it came from."
        primaryCta={{ href: "#try-it", label: "Ask it something" }}
        secondaryCta={{ href: "/contact", label: "Book a Demo" }}
      >
        <IntelligenceFloatingCards />
      </ModuleHero>

      {/* ── [2] Try it (the spine) ── */}
      <section id="try-it" className="relative overflow-hidden bg-carbon py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.06] via-transparent to-transparent" />
        <Container>
          <div className="relative">
            <h2 className="mb-3 font-heading text-2xl font-bold text-white sm:text-3xl">
              Try it. No sign-up.
            </h2>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-porcelain/70">
              This is the actual Intelligence interface. Every answer cites the
              data it came from. If it does not know, it says so.
            </p>
            <TryItWidget />
          </div>
        </Container>
      </section>

      {/* ── [3] Money shot, full Intelligence view ── */}
      <section className="relative overflow-hidden bg-carbon py-24 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.05] via-transparent to-gold/[0.04]" />
        <Container>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              One assistant
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Every scheme. Every system. Every question.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-porcelain/70">
              Live sales data, compliance documents, financial projections,
              resident queries, Irish building regulations. Intelligence sits
              across all of it. Ask about one development or the whole portfolio.
              The answer is the same speed.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-gold/15 via-transparent to-gold/15 blur-2xl" />
            <div className="relative">
              <IntelligenceConsole />
            </div>
          </div>
        </Container>
      </section>

      {/* ── [4] How it works (three steps) ── */}
      <section className="relative overflow-hidden bg-carbon py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.07] via-transparent to-gold/[0.05]" />
        <Container>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
              How Intelligence actually works.
            </h2>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:border-gold/20 hover:bg-gold/[0.03]"
              >
                <span className="absolute right-6 top-6 font-heading text-4xl font-bold text-white/[0.06]">
                  {i + 1}
                </span>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/10">
                  <step.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mb-3 font-heading text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-porcelain/70">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── [5] What Intelligence does (four-card grid) ── */}
      <section className="relative overflow-hidden bg-carbon py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />
        <Container>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
              What Intelligence does.
            </h2>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
            {capabilities.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:border-gold/20 hover:bg-gold/[0.03]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/10">
                  <card.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-white">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-porcelain/70">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── [6] Built for you (persona block) ── */}
      <section className="relative overflow-hidden bg-carbon py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.06] via-transparent to-gold/[0.04]" />
        <Container>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
              Built for the people who run the business.
            </h2>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {personas.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:border-gold/20 hover:bg-gold/[0.03]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/10">
                  <p.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mb-3 font-heading text-lg font-bold text-white">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-porcelain/70">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── [7] Quiet trust line ── */}
      <section className="relative overflow-hidden bg-carbon py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.07] via-transparent to-gold/[0.05]" />
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/10">
              <ShieldCheck className="h-6 w-6 text-gold" />
            </div>
            <h2 className="mb-5 font-heading text-2xl font-bold text-white sm:text-3xl">
              Every answer is sourced. Every source is yours.
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-porcelain/70">
              Intelligence draws its answers from the data already in your
              Developer Dashboard. Your pipeline, your compliance documents, your
              residents' questions. Nothing leaves your platform. Nothing is
              trained on your data to improve a generic model. Your data is yours.
            </p>
          </div>
        </Container>
      </section>

      {/* ── [7.5] Already part of the platform (addendum) ── */}
      <section className="relative overflow-hidden bg-carbon py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.05] via-transparent to-transparent" />
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-5 font-heading text-2xl font-bold text-white sm:text-3xl">
              Already part of the platform.
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-porcelain/70">
              Intelligence ships as part of the Developer Dashboard. If you
              already use OpenHouse, Intelligence is in your account today. If you
              are evaluating OpenHouse, the demo will show you both the Dashboard
              and Intelligence in the same session.
            </p>
          </div>
        </Container>
      </section>

      {/* ── [8] Peak-end CTA ── */}
      <section className="relative overflow-hidden bg-carbon py-28">
        <div className="absolute inset-0 bg-gradient-to-t from-gold/[0.08] to-transparent" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2 select-none font-heading text-[18rem] font-bold leading-none text-white/[0.02]"
        >
          OH
        </span>
        <Container>
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="mb-6 font-heading text-3xl font-bold text-white sm:text-5xl">
              See it on your actual data.
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-porcelain/70">
              A demo takes thirty minutes. We will load the Developer Dashboard
              with Intelligence active against a development that looks like yours.
              Ask whatever questions are on your mind today and you will see
              Intelligence answer in your own data context.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex min-h-[48px] items-center justify-center gap-2 overflow-hidden rounded-full px-10 py-5 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-carbon"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gold via-amber-500 to-gold" />
              <span className="relative z-10 flex items-center gap-2 text-carbon">
                Book a Demo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <p className="mt-6 text-sm text-porcelain/50">
              Or email{" "}
              <a href="mailto:sam@openhouseai.ie" className="text-gold hover:underline">
                sam@openhouseai.ie
              </a>{" "}
              if you have a specific question first.
            </p>
          </div>
        </Container>
      </section>

      {/* ── [9] Platform strip ── */}
      <section className="relative overflow-hidden bg-carbon py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />
        <Container>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              The rest of the platform.
            </p>
            <p className="text-lg leading-relaxed text-porcelain/70">
              Intelligence is the question-asking layer of the Developer
              Dashboard. The Dashboard is your control room, the Property
              Assistant is what your residents get, and Care is a
              specialist tool for the partners working alongside you.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/20 hover:bg-gold/[0.03]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/10">
                  <product.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="mb-1.5 font-heading text-base font-semibold text-white">
                  {product.title}
                </h3>
                <p className="text-xs leading-relaxed text-porcelain/60">
                  {product.blurb}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
