import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { BuildFloatingCards } from "@/components/hero/cards/BuildCards";
import heroBackground from "@/attached_assets/stock_images/build_construction_aerial.png";
import complianceTracker from "@/attached_assets/stock_images/compliance_tracker.png";
import {
  Hammer,
  Layers,
  Upload,
  KeyRound,
  ClipboardCheck,
  Users,
  Package,
  Archive,
  HardHat,
  HeartHandshake,
  Wrench,
  AlertCircle,
  ArrowRight,
  Home,
  ChevronLeft,
  TrendingUp,
  MessageSquare,
  Sparkles,
  Headphones,
} from "lucide-react";

export const metadata = {
  title:
    "Build Module, BCAR / HomeBond / BER Document Hub | OpenHouse Ai",
  description:
    "OpenHouse Build holds every BCAR submission, HomeBond cert, BER, fire safety document, sub-contractor cert, and homeowner manual against the unit it belongs to. Audit-ready from day one.",
};

const costStats = [
  {
    value: "Required",
    label:
      "A Certificate of Compliance on Completion, registered, or the building cannot be occupied, sold, or used.",
  },
  {
    value: "21 days",
    label:
      "The window the Building Control Authority has to register, reject, or query a CCC submission.",
  },
  {
    value: "Every party",
    label:
      "The CCC Annex must reference ancillary certs from every designer and sub-contractor on the project.",
  },
];

const steps = [
  {
    icon: Layers,
    title: "Set up the scheme.",
    desc: "Add your development, units, and sub-contractors. Build pulls in the compliance checklist for the unit type automatically (BCAR, BER, fire safety, HomeBond, and the rest).",
  },
  {
    icon: Upload,
    title: "Documents land where they belong.",
    desc: "Email, upload, or scan a document and the platform files it against the right unit. Sub-contractors get scoped access to upload their own certs directly.",
  },
  {
    icon: KeyRound,
    title: "Hand over without scrambling.",
    desc: "A week before handover, the platform shows you exactly what's outstanding. The homeowner pack assembles itself. The audit trail is already there.",
  },
];

const features = [
  {
    icon: ClipboardCheck,
    title: "Compliance tracking by unit.",
    description:
      "BCAR, BER, HomeBond, fire safety, Part L, Part F. The full Irish residential checklist, per unit, with status visible at a glance.",
  },
  {
    icon: Users,
    title: "Sub-contractor portal.",
    description:
      "Your electrical contractor uploads their own certs against the unit. No more chasing them for paperwork.",
  },
  {
    icon: Package,
    title: "Homeowner pack assembly.",
    description:
      "Manuals, warranties, walk-throughs, certs, all bundled into the handover pack automatically. The pack the buyer gets is the pack the platform built.",
  },
  {
    icon: Archive,
    title: "Audit-ready forever.",
    description:
      "Every document is dated, version-controlled, and traceable. If an inspector or a buyer's solicitor asks for a document in five years, you find it in five seconds.",
  },
];

const personas = [
  {
    icon: HardHat,
    title: "Construction directors.",
    description:
      "You're responsible for the project from foundation through to keys. Build is the document spine you've been wishing for.",
  },
  {
    icon: HeartHandshake,
    title: "Customer care and aftersales leads.",
    description:
      "You're the person buyers come back to. Build hands you a complete document set per home so you have answers when residents ask.",
  },
  {
    icon: Wrench,
    title: "Sub-contractors and certifiers.",
    description:
      "Working on a development that uses OpenHouse. You get scoped access to upload your certs and confirm completion, without learning new software.",
  },
];

const platformModules = [
  { title: "Sales", href: "/sales", icon: TrendingUp, accent: "text-blue-400" },
  {
    title: "Handover",
    href: "/handover",
    icon: MessageSquare,
    accent: "text-gold",
  },
  {
    title: "Intelligence",
    href: "/intelligence",
    icon: Sparkles,
    accent: "text-gold",
  },
  { title: "Agent", href: "/agent", icon: Headphones, accent: "text-gold" },
  { title: "Care", href: "/care", icon: Wrench, accent: "text-emerald-400" },
];

export default function BuildPage() {
  return (
    <div>
      {/* ── Module Badge ── */}
      <div className="fixed top-36 sm:top-40 left-4 sm:left-6 z-50">
        <Link
          href="/"
          aria-label="Back to the OpenHouse home page"
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium backdrop-blur-md hover:bg-emerald-500/20 transition-all duration-300"
        >
          <ChevronLeft className="w-3 h-3" aria-hidden="true" />
          <Home className="w-3 h-3" aria-hidden="true" />
          <span className="hidden sm:inline">Platform</span>
        </Link>
      </div>

      {/* ── 1. Hero ── */}
      <ModuleHero
        backgroundImage={heroBackground}
        accentColor="emerald"
        backgroundAlt="Aerial view of a residential development under construction at sunset"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <Hammer
              className="w-4 h-4 text-emerald-400"
              aria-hidden="true"
            />
            <span className="text-sm font-medium text-emerald-400">
              Build Module
            </span>
          </div>
        }
        title={
          <>
            Every cert, every doc,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400">
              organised
            </span>{" "}
            before the keys go in.
          </>
        }
        subtitle="OpenHouse Build holds every BCAR submission, HomeBond cert, BER, fire safety document, sub-contractor cert, and homeowner manual against the unit it belongs to. Audit-ready from day one. No more two-day scrambles before handover."
        primaryCta={{ href: "#money-shot", label: "See a handover pack" }}
        secondaryCta={{ href: "/contact", label: "Book a Demo" }}
      >
        <BuildFloatingCards />
      </ModuleHero>

      {/* ── 2. Cost of the scramble ── */}
      <section className="relative py-20 sm:py-24 bg-carbon">
        <div
          className="absolute inset-0 bg-gradient-to-b from-emerald-900/[0.08] via-transparent to-transparent"
          aria-hidden="true"
        />
        <Container>
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4 font-semibold">
              The regulation
            </p>
            <h2 className="text-[28px] sm:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight">
              The paperwork is not optional. It&rsquo;s the law.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl">
            {costStats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 hover:border-emerald-500/30 hover:bg-emerald-500/[0.03] transition-all duration-500"
              >
                <p className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-emerald-400 font-heading leading-none mb-4">
                  {stat.value}
                </p>
                <p className="text-[17px] text-porcelain/75 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-[18px] sm:text-xl text-porcelain/85 mt-12 sm:mt-14 max-w-2xl mx-auto leading-relaxed">
            The Annex builds itself when the system is set up to hold every document against the unit it belongs to.
          </p>
          <p className="text-center text-[12px] text-porcelain/40 mt-5 max-w-3xl mx-auto leading-relaxed">
            Sources: Construction Industry Federation guidance on SI 9 of 2014 (Building Control (Amendment) Regulations 2014); National Building Control Office, BCMS Annex requirements.
          </p>
        </Container>
      </section>

      {/* ── 3. Money Shot, Unit Document View ── */}
      <section
        id="money-shot"
        className="relative py-24 sm:py-32 bg-carbon overflow-hidden scroll-mt-32"
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-emerald-900/[0.10] via-transparent to-emerald-900/[0.06]"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vw] max-w-[1200px] rounded-full bg-emerald-500/[0.05] blur-[140px]"
          aria-hidden="true"
        />
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4 font-semibold">
              The Handover Pack
            </p>
            <h2 className="text-[32px] sm:text-5xl lg:text-[64px] font-bold text-white font-heading leading-[1.05] mb-6">
              One unit. Every document. One view.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
              This is the view a developer has wanted for thirty years. Every cert, every spec, every manual, against the unit it belongs to. Filterable across the whole scheme. Audit-ready, instantly.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div
              className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-emerald-500/25 via-emerald-400/10 to-emerald-500/25 rounded-3xl blur-2xl"
              aria-hidden="true"
            />
            <div className="relative rounded-2xl overflow-hidden border border-emerald-500/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
              <Image
                src={complianceTracker}
                alt="OpenHouse Build compliance view for a single unit, with Electrical, BCMS, BER, HomeBond, Gas Safety, Fire Safety, and Structural Warranty certificates per unit and an upload action for any outstanding cert"
                className="w-full h-auto"
                placeholder="blur"
              />

              {/* Gold-bordered highlight on the BER cert row */}
              <div
                className="hidden md:block absolute top-[55%] left-[35%] right-[28%] pointer-events-none"
                aria-hidden="true"
              >
                <div className="rounded-xl border-2 border-gold bg-gold/[0.08] shadow-[0_0_30px_rgba(212,175,55,0.45)] h-[44px]" />
              </div>
            </div>

            {/* "The doc to look at" callout */}
            <div className="relative -mt-6 sm:-mt-8 mx-auto max-w-md sm:max-w-lg z-10">
              <div className="rounded-2xl border border-gold/40 bg-neutral-900/95 backdrop-blur-xl p-5 sm:p-6 shadow-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center flex-shrink-0">
                    <AlertCircle
                      className="w-5 h-5 text-gold"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-wider text-gold font-semibold mb-1">
                      The doc to look at
                    </p>
                    <p className="text-[16px] sm:text-base font-semibold text-white leading-snug">
                      BER cert, Unit A12. Outstanding from the assessor.
                    </p>
                    <p className="text-[14px] text-porcelain/65 mt-1">
                      The platform flagged it on day nineteen, with eleven working days to go.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. How Build Works ── */}
      <section className="relative py-24 bg-porcelain">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-700 mb-4 font-semibold">
              How Build Works
            </p>
            <h2 className="text-[28px] sm:text-4xl font-bold text-carbon font-heading leading-tight">
              Three steps, no curve.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative p-6 sm:p-8 rounded-2xl border border-carbon/10 bg-white hover:border-emerald-500/40 hover:shadow-[0_15px_40px_-15px_rgba(16,185,129,0.25)] transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    <step.icon
                      className="w-5 h-5 text-emerald-700"
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

      {/* ── 5. What Build Does (4 cards) ── */}
      <section className="relative py-24 bg-carbon">
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.03] to-transparent"
          aria-hidden="true"
        />
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4 font-semibold">
              What Build Does
            </p>
            <h2 className="text-[28px] sm:text-4xl font-bold text-white font-heading leading-tight">
              Four jobs, off your plate.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-emerald-500/30 hover:bg-emerald-500/[0.04] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-5">
                  <f.icon
                    className="w-6 h-6 text-emerald-400"
                    aria-hidden="true"
                  />
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
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4 font-semibold">
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
                className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-emerald-500/30 hover:bg-emerald-500/[0.04] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-5">
                  <p.icon
                    className="w-6 h-6 text-emerald-400"
                    aria-hidden="true"
                  />
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
              Audit-ready. Always.
            </h2>
            <p className="text-[18px] sm:text-lg text-carbon/75 leading-relaxed mb-6">
              Every document is timestamped, versioned, and stored in Europe. Inspectors and solicitors can be given read-only access to the documents that concern them, without seeing the rest of your operation.
            </p>
            <p className="text-[15px] text-carbon/55 leading-relaxed italic">
              Built by a working property developer in Cork who has run his own handovers and remembers every two-day scramble in that list above.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 8. Peak-end CTA ── */}
      <section className="relative py-28 sm:py-36 bg-carbon overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-emerald-900/[0.10] via-transparent to-emerald-900/[0.12]"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-emerald-500/[0.06] blur-[140px]"
          aria-hidden="true"
        />
        <Container>
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-[32px] sm:text-5xl lg:text-[60px] font-bold text-white font-heading leading-[1.05] mb-6">
              See it on the documents you&rsquo;re already managing.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed max-w-2xl mx-auto mb-10">
              Bring a sample handover pack to the demo. We&rsquo;ll show you exactly how it would look in OpenHouse Build, organised, complete, and ready for keys.
            </p>

            <div className="flex flex-col items-center gap-5">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 min-h-[64px] px-10 sm:px-14 py-5 text-lg sm:text-xl font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(16,185,129,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-4 focus-visible:ring-offset-carbon"
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600"
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
                  className="text-emerald-400 hover:text-emerald-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                >
                  sam@openhouseai.ie
                </a>{" "}
                if you&rsquo;d rather start with a few questions.
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
              Build is one module of six. Same data, different surfaces, one platform that runs every stage of a development.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {platformModules.map((mod) => (
              <Link
                key={mod.title}
                href={mod.href}
                className="group flex items-center gap-3 min-h-[64px] px-4 py-3 rounded-2xl border border-carbon/10 bg-white hover:bg-emerald-50 hover:border-emerald-500/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
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
