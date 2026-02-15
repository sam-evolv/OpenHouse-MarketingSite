import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { BuildFloatingCards } from "@/components/hero/cards/BuildCards";
import heroBackground from "@/attached_assets/stock_images/build_construction_aerial.png";
import {
  FolderOpen,
  Shield,
  FileText,
  CircleDollarSign,
  Search,
  Upload,
  ArrowRight,
  Home,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Build Module — Compliance & Document Hub | OpenHouse Ai",
  description:
    "Organise every certificate, specification, and document before handover. Compliance tracking that works across all your developments.",
};

const features = [
  {
    icon: Shield,
    title: "Compliance Tracker",
    description:
      "Planning certs, fire safety, BER, BCAR — track every requirement per unit with deadline alerts.",
  },
  {
    icon: FileText,
    title: "Smart Archive",
    description:
      "Upload once, access forever. Every document tagged by development, phase, unit, and category.",
  },
  {
    icon: CircleDollarSign,
    title: "PC Sum Management",
    description:
      "Track provisional cost sums, customer selections, and approved upgrades in one place.",
  },
  {
    icon: Search,
    title: "AI-Powered Search",
    description:
      "Find any document instantly. Search across all developments by keyword, unit, or spec type.",
  },
  {
    icon: Upload,
    title: "Bulk Upload",
    description:
      "Drop entire folders of specs and certificates. Auto-categorised by AI, ready for handover.",
  },
  {
    icon: FolderOpen,
    title: "Handover Packs",
    description:
      "Auto-generate complete handover packs per unit — every cert, manual, and spec in one bundle.",
  },
];

export default function BuildPage() {
  return (
    <main>
      {/* ── Module Badge ── */}
      <div className="fixed top-36 sm:top-40 left-4 sm:left-6 z-50">
        <Link
          href="/"
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium backdrop-blur-md hover:bg-emerald-500/20 transition-all duration-300"
        >
          <ChevronLeft className="w-3 h-3" />
          <Home className="w-3 h-3" />
          <span className="hidden sm:inline">Platform</span>
        </Link>
      </div>

      {/* ── Hero ── */}
      <ModuleHero
        backgroundImage={heroBackground}
        accentColor="emerald"
        backgroundAlt="Aerial view of residential development under construction at sunset"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <FolderOpen className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">Build Module</span>
          </div>
        }
        title={
          <>
            Every cert, spec, and document{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400">
              organised before handover
            </span>
          </>
        }
        subtitle="Stop chasing compliance documents across email threads and shared drives. One hub for every certificate, specification, and PC sum across all your developments."
        primaryCta={{ href: "/contact", label: "Book a Demo" }}
        secondaryCta={{ href: "#features", label: "See Features" }}
      >
        <BuildFloatingCards />
      </ModuleHero>

      {/* ── Before / After ── */}
      <section className="relative py-24 bg-carbon">
        <Container>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4 font-semibold">
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
                  "Certs scattered across emails and drives",
                  "Compliance tracked in spreadsheets per phase",
                  "PC sums managed in separate files",
                  "Handover packs assembled manually",
                  "Missing documents discovered at completion",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-porcelain/60">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03]">
              <p className="text-sm font-semibold text-emerald-400 mb-4 uppercase tracking-wider">
                With OpenHouse Build
              </p>
              <ul className="space-y-3">
                {[
                  "Every document in one searchable archive",
                  "Compliance dashboard with deadline tracking",
                  "PC sums linked to units with approval flow",
                  "Handover packs auto-generated per unit",
                  "Nothing missing — AI flags gaps before you do",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-porcelain">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />
        <Container>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4 font-semibold">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              Construction-grade document control
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-emerald-500/20 hover:bg-emerald-500/[0.03] transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-emerald-400" />
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
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/[0.04] to-transparent" />
        <Container>
          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-heading">
              See the Build module live
            </h2>
            <p className="text-lg text-porcelain/70 mb-8">
              We&apos;ll show you compliance tracking and document management running on a live development.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500" />
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

