import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { IntelligenceFloatingCards } from "@/components/hero/cards/IntelligenceCards";
import { LandingMockup, SalesQueryMockup, HomeownerMockup } from "@/components/intelligence/IntelligenceMockups";
import heroBackground from "@/attached_assets/stock_images/intelligence_data_network.png";
import {
  BarChart3,
  FileText,
  MessageCircle,
  Scale,
  Sparkles,
  Database,
  BookOpen,
  Users,
  ArrowRight,
  Home,
  ChevronLeft,
  CalendarDays,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Intelligence Module - AI Co-pilot for Developers | OpenHouse Ai",
  description:
    "Ask anything about your schemes — sales data, compliance documents, homeowner activity, regulations. OpenHouse Intelligence gives you answers in seconds, not hours.",
};

const promptCategories = [
  {
    icon: BarChart3,
    category: "Live data",
    question: "Which units have outstanding stage payments?",
  },
  {
    icon: FileText,
    category: "Documents",
    question: "Which units are missing fire safety certificates?",
  },
  {
    icon: MessageCircle,
    category: "Homeowners",
    question: "Which developments have the lowest registration rates?",
  },
  {
    icon: Scale,
    category: "Regulatory",
    question: "What is the HomeBond defects liability period?",
  },
];

const capabilities = [
  {
    icon: MessageCircle,
    title: "Natural Language Queries",
    description:
      "Ask questions in plain English. No dashboards to learn, no filters to set. Just ask.",
  },
  {
    icon: Database,
    title: "Live Data Access",
    description:
      "Connected to your sales pipeline, unit records, financials, and homeowner data in real time.",
  },
  {
    icon: BookOpen,
    title: "Document Intelligence",
    description:
      "Query your uploaded compliance documents, fire certs, BCAR records, and regulatory docs.",
  },
  {
    icon: Users,
    title: "Homeowner Analytics",
    description:
      "See what residents are asking, which portals are active, and where engagement drops off.",
  },
  {
    icon: Sparkles,
    title: "Smart Follow-ups",
    description:
      "After every answer, Intelligence suggests the next question you should be asking.",
  },
  {
    icon: CalendarDays,
    title: "Daily Briefings",
    description:
      "Morning summary of registration rates, outstanding items, and overnight activity across all schemes.",
  },
];

export default function IntelligencePage() {
  return (
    <div>
      {/* ── Module Badge ── */}
      <div className="fixed top-36 sm:top-40 left-4 sm:left-6 z-50">
        <Link
          href="/"
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-medium backdrop-blur-md hover:bg-gold/20 transition-all duration-300"
        >
          <ChevronLeft className="w-3 h-3" />
          <Home className="w-3 h-3" />
          <span className="hidden sm:inline">Platform</span>
        </Link>
      </div>

      {/* ── Hero ── */}
      <ModuleHero
        backgroundImage={heroBackground}
        accentColor="violet"
        backgroundAlt="Abstract data network representing AI intelligence"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">
              Intelligence Module
            </span>
          </div>
        }
        title={
          <>
            Your AI co-pilot for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
              every development decision
            </span>
          </>
        }
        subtitle="Ask anything about your schemes — sales data, compliance documents, homeowner activity, regulations. OpenHouse Intelligence gives you answers in seconds, not hours."
        primaryCta={{ href: "/contact", label: "Book a Demo" }}
        secondaryCta={{ href: "#ask-anything", label: "See How It Works" }}
      >
        <IntelligenceFloatingCards />
      </ModuleHero>

      {/* ── What Can You Ask? ── */}
      <section id="ask-anything" className="relative py-24 bg-carbon">
        <Container>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              Ask Anything
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-4">
              One question away from any answer
            </h2>
            <p className="text-lg text-porcelain/60 max-w-2xl mx-auto">
              OpenHouse Intelligence connects to your live scheme data, uploaded
              documents, homeowner activity, and Irish building regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {promptCategories.map((cat) => (
              <div
                key={cat.category}
                className="group p-6 rounded-2xl bg-neutral-900/90 backdrop-blur-xl border border-white/10 hover:border-gold/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                  <cat.icon className="w-5 h-5 text-gold" />
                </div>
                <p className="text-white font-medium leading-relaxed mb-4">
                  &ldquo;{cat.question}&rdquo;
                </p>
                <span className="text-xs font-medium text-porcelain/40 uppercase tracking-wider">
                  {cat.category}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Landing Screenshot ── */}
      <section className="relative py-24 bg-carbon overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.03] via-transparent to-transparent" />
        <Container>
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              The Interface
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-4">
              A conversational AI built for property developers
            </h2>
            <p className="text-lg text-porcelain/60 max-w-2xl mx-auto">
              Suggested prompts, conversation history, persistent alerts, and a
              daily briefing button — all in one clean interface.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-amber-500/5 to-gold/20 rounded-3xl blur-2xl" />
            <div className="relative">
              <LandingMockup />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Live Data Section ── */}
      <section className="relative py-24 bg-carbon overflow-hidden">
        <Container>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gold/20 border border-gold/30 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-gold" />
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-gold font-semibold">
                Live Data
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-4">
              Ask about sales, payments, and pipeline — get answers with
              charts
            </h2>
            <p className="text-lg text-porcelain/60 leading-relaxed mb-6 max-w-2xl mx-auto">
              No more digging through Excel. Ask Intelligence how many units
              are sale agreed, which deposits are overdue, or where your
              pipeline stands this week. Answers come with visual breakdowns
              and links back to the source data.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                "Live charts",
                "Source citations",
                "Follow-up suggestions",
                "Cross-links to Sales Pipeline",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-xs font-medium text-gold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/15 via-transparent to-gold/15 rounded-3xl blur-2xl" />
            <div className="relative">
              <SalesQueryMockup />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Homeowner Insights Section ── */}
      <section className="relative py-24 bg-carbon overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />
        <Container>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gold/20 border border-gold/30 flex items-center justify-center">
                <Users className="w-4 h-4 text-gold" />
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-gold font-semibold">
                Homeowner Insights
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-4">
              See what residents are asking — before they call you
            </h2>
            <p className="text-lg text-porcelain/60 leading-relaxed mb-6 max-w-2xl mx-auto">
              Intelligence analyses every question homeowners ask across all
              your developments. See the patterns, spot the gaps in your
              handover packs, and fix them before they become phone calls.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                "Question categorisation",
                "Trend analysis",
                "Handover pack recommendations",
                "Cross-development comparison",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-xs font-medium text-gold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/15 via-transparent to-gold/15 rounded-3xl blur-2xl" />
            <div className="relative">
              <HomeownerMockup />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Today's Briefing ── */}
      <section className="relative py-24 bg-carbon">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
                Daily Intelligence
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-4">
                Start every morning with a briefing
              </h2>
              <p className="text-lg text-porcelain/60 max-w-2xl mx-auto">
                One tap gives you a summary of overnight activity, registration
                rates, outstanding items, and anything that needs your attention
                today. No dashboards to navigate, no reports to pull.
              </p>
            </div>

            <div className="relative max-w-2xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/10 via-amber-500/5 to-gold/10 rounded-3xl blur-2xl" />
              <div className="relative p-8 rounded-2xl bg-neutral-900/90 backdrop-blur-xl border border-gold/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gold/20 border border-gold/30 flex items-center justify-center">
                    <CalendarDays className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Today&apos;s Briefing
                    </p>
                    <p className="text-xs text-porcelain/40">
                      Monday morning summary
                    </p>
                  </div>
                  <div className="ml-auto px-3 py-1.5 rounded-full bg-gold/20 border border-gold/30">
                    <span className="text-xs font-medium text-gold">
                      View Briefing
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      label: "Registration rate",
                      value: "30%",
                      detail: "174 units without homeowners",
                      alert: true,
                    },
                    {
                      label: "New deposits",
                      value: "3",
                      detail: "Since Friday close",
                      alert: false,
                    },
                    {
                      label: "Homeowner queries",
                      value: "47",
                      detail: "100% resolved by AI",
                      alert: false,
                    },
                    {
                      label: "Documents expiring",
                      value: "2",
                      detail: "Fire certs — Block C",
                      alert: true,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"
                    >
                      <div>
                        <p className="text-sm text-porcelain">{item.label}</p>
                        <p className="text-xs text-porcelain/40">
                          {item.detail}
                        </p>
                      </div>
                      <span
                        className={`text-lg font-bold ${item.alert ? "text-amber-400" : "text-gold"}`}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Capabilities ── */}
      <section id="features" className="relative py-24 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />
        <Container>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              Intelligence that compounds
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {capabilities.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-gold/20 hover:bg-gold/[0.03] transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-gold" />
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
        <div className="absolute inset-0 bg-gradient-to-t from-gold/[0.04] to-transparent" />
        <Container>
          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-heading">
              See Intelligence answer your questions live
            </h2>
            <p className="text-lg text-porcelain/70 mb-8">
              We&apos;ll connect to a real development and show you what your
              data looks like inside Intelligence.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gold via-amber-500 to-gold" />
              <span className="relative z-10 text-carbon flex items-center gap-2">
                Book a Demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
