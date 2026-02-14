import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { SalesFloatingCards } from "@/components/hero/cards/SalesCards";
import heroBackground from "@/attached_assets/stock_images/modern_apartment_liv_c8a1fa10.jpg";
import {
  TrendingUp,
  Users,
  CreditCard,
  BarChart3,
  Bell,
  FileText,
  ArrowRight,
  Home,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Sales Module — Pipeline to Contract | OpenHouse Ai",
  description:
    "Track every lead, viewing, and deposit in one place. Replace scattered spreadsheets with a single sales pipeline built for property developers.",
};

const features = [
  {
    icon: TrendingUp,
    title: "Visual Pipeline",
    description:
      "See every unit from enquiry to contract signed. Drag-and-drop stages, no training needed.",
  },
  {
    icon: Users,
    title: "Lead Management",
    description:
      "Capture leads from Savills, Sherry Fitz, your website — all in one feed with source tracking.",
  },
  {
    icon: CreditCard,
    title: "Deposit Tracking",
    description:
      "Record booking deposits, track payment status, and flag outstanding balances automatically.",
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description:
      "Get notified when new enquiries land, viewings are booked, or contracts are signed.",
  },
  {
    icon: FileText,
    title: "Agent Reporting",
    description:
      "See which agents convert and which developments move fastest — data you never had before.",
  },
  {
    icon: BarChart3,
    title: "Sales Analytics",
    description:
      "Weekly velocity, conversion rates, average time-to-sale — all calculated, never estimated.",
  },
];

export default function SalesPage() {
  return (
    <main>
      {/* ── Module Badge ── */}
      <div className="fixed top-36 sm:top-40 left-4 sm:left-6 z-50">
        <Link
          href="/"
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium backdrop-blur-md hover:bg-blue-500/20 transition-all duration-300"
        >
          <ChevronLeft className="w-3 h-3" />
          <Home className="w-3 h-3" />
          <span className="hidden sm:inline">Platform</span>
        </Link>
      </div>

      {/* ── Hero ── */}
      <ModuleHero
        backgroundImage={heroBackground}
        backgroundAlt="Luxury penthouse dining with sea view"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Sales Module</span>
          </div>
        }
        title={
          <>
            From first enquiry to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400">
              contract signed
            </span>
          </>
        }
        subtitle="Track every lead, viewing, and deposit across your developments. One pipeline replaces the spreadsheets, agent emails, and guesswork."
        primaryCta={{ href: "/contact", label: "Book a Demo" }}
        secondaryCta={{ href: "#features", label: "See Features" }}
      >
        <SalesFloatingCards />
      </ModuleHero>

      {/* ── Before / After ── */}
      <section className="relative py-24 bg-carbon">
        <Container>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-4 font-semibold">
              Before &amp; After
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              What changes when you switch
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/[0.03]">
              <p className="text-sm font-semibold text-red-400 mb-4 uppercase tracking-wider">
                Without OpenHouse
              </p>
              <ul className="space-y-3">
                {[
                  "Sales tracked across 3+ spreadsheets",
                  "Agent updates via WhatsApp and email",
                  "No visibility on conversion rates",
                  "Deposits tracked manually with errors",
                  "Weekly sales meetings just to get updates",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-porcelain/60">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl border border-blue-500/20 bg-blue-500/[0.03]">
              <p className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-wider">
                With OpenHouse Sales
              </p>
              <ul className="space-y-3">
                {[
                  "One visual pipeline for all developments",
                  "Real-time lead feed with source tracking",
                  "Conversion rates calculated automatically",
                  "Deposit status updated in real-time",
                  "Dashboard replaces status meetings",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-porcelain">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Features ── */}
      <section id="features" className="relative py-24 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
        <Container>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-4 font-semibold">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              Everything you need to sell smarter
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-blue-500/20 hover:bg-blue-500/[0.03] transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
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
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/[0.04] to-transparent" />
        <Container>
          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-heading">
              See the Sales module live
            </h2>
            <p className="text-lg text-porcelain/70 mb-8">
              We&apos;ll walk you through the pipeline running on a live 238-home development.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500" />
              <span className="relative z-10 text-white flex items-center gap-2">
                Book a Demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}

