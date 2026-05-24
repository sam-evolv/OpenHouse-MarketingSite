import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { DeveloperDashboardFloatingCards } from "@/components/hero/cards/DeveloperDashboardCards";
import { ScreenshotLightbox } from "@/components/ui/ScreenshotLightbox";
import heroBackground from "@/attached_assets/stock_images/platform_aerial_network.png";
import pipelineShot from "@/attached_assets/stock_images/sales_pipeline.png";
import documentsShot from "@/attached_assets/stock_images/compliance_tracker.png";
import handoverShot from "@/attached_assets/stock_images/smart_archive.png";
import residentsShot from "@/attached_assets/stock_images/communications_hub.png";
import {
  LayoutDashboard,
  TrendingUp,
  FileCheck,
  KeyRound,
  MessageSquare,
  ArrowRight,
  Home,
  ChevronLeft,
  Building,
  GraduationCap,
  ShieldCheck,
  Smartphone,
  BarChart3,
  HeartHandshake,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Developer Dashboard - Your Control Room | OpenHouse Ai",
  description:
    "Live pipeline across every scheme, compliance docs against every unit, handover packs that build themselves, and residents who find their own answers. Build-to-sell, build-to-rent, and student accommodation on one platform.",
};

const jobs = [
  {
    icon: TrendingUp,
    name: "Pipeline",
    line: "Live across every unit and every scheme.",
  },
  {
    icon: FileCheck,
    name: "Documents",
    line: "Every cert against the unit it belongs to.",
  },
  {
    icon: KeyRound,
    name: "Handover",
    line: "Packs that build themselves.",
  },
  {
    icon: MessageSquare,
    name: "Residents",
    line: "Their questions, your visibility.",
  },
];

const models = [
  {
    icon: Home,
    title: "Build-to-sell",
    body: "Pipeline runs from first viewing to keys. Handover pack and Property Assistant configured per unit. Documents tied to the unit and transferred with the buyer.",
  },
  {
    icon: Building,
    title: "Build-to-rent",
    body: "Pipeline runs from completion to occupancy. Tenancies registered, RPZ compliance tracked, Property Assistant configured per apartment. Lease renewals tracked and managed in the same dashboard.",
  },
  {
    icon: GraduationCap,
    title: "Student accommodation",
    body: "Per-bed inventory. Academic-year lifecycle. Property Assistant configured per scheme with the rules and details students actually need. RTB-registered tenancies handled correctly.",
  },
];

const products = [
  {
    icon: Smartphone,
    title: "Property Assistant",
    blurb: "What every resident gets, on their phone.",
    href: "/property-assistant",
  },
  {
    icon: BarChart3,
    title: "Intelligence",
    blurb: "Ask anything about any scheme, get the answer with sources.",
    href: "/intelligence",
  },
  {
    icon: HeartHandshake,
    title: "Care",
    blurb: "Aftercare for renewable energy installers.",
    href: "/care",
  },
];

export default function DeveloperDashboardPage() {
  return (
    <main>
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

      {/* ── [1] Hero ── */}
      <ModuleHero
        backgroundImage={heroBackground}
        accentColor="gold"
        backgroundAlt="Aerial view of a residential development at dusk"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
            <LayoutDashboard className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">
              Developer Dashboard
            </span>
          </div>
        }
        title={
          <>
            The CRM{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
              built for
            </span>{" "}
            property development, not adapted for it.
          </>
        }
        subtitle="Everything you currently spread across twelve spreadsheets, an inbox, and a shared drive: sales pipeline, compliance docs, kitchen selections, snagging, handover packs, in one place. Wrapped in OpenHouse Intelligence, which tells you what's actually happening across your schemes."
        primaryCta={{ href: "#pipeline", label: "See it in action" }}
        secondaryCta={{ href: "/contact", label: "Book a Demo" }}
      >
        <DeveloperDashboardFloatingCards />
      </ModuleHero>

      {/* ── [2] Four jobs strip ── */}
      <section className="relative py-20 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.04] via-transparent to-transparent" />
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Four jobs. One Dashboard.
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {jobs.map((job) => (
              <div
                key={job.name}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-gold/20 hover:bg-gold/[0.03] transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                  <job.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1.5">
                  {job.name}
                </h3>
                <p className="text-sm text-porcelain/60 leading-relaxed">
                  {job.line}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── [3] Pipeline (Job 1) ── */}
      <section
        id="pipeline"
        className="relative py-24 bg-carbon overflow-hidden"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Header */}
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gold mb-3 font-semibold">
                Job 1
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-5 leading-tight">
                A live pipeline,
                <br />
                not a Friday spreadsheet.
              </h2>
              <p className="text-lg text-porcelain/70 leading-relaxed mb-6 max-w-md">
                Every unit, every buyer, every stage, in one view. Filter by
                scheme, by stage, by agent. The slow deals are surfaced before
                they die. Solicitors who have sat on contracts for three weeks
                are visible without anyone having to ask.
              </p>
              <ul className="space-y-3">
                {[
                  "Aged contracts flagged automatically",
                  "Buyers gone quiet, surfaced",
                  "Reports drafted for your developer partners",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-porcelain/80"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Screenshot */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-amber-500/5 to-gold/20 rounded-3xl blur-2xl" />
              <div className="relative">
                <ScreenshotLightbox
                  src={pipelineShot}
                  alt="Developer Dashboard pipeline view: every unit listed with buyer, stage, days at stage, and last action, with an at-risk deal highlighted and a drafted solicitor follow-up"
                />
              </div>
            </div>
          </div>

          {/* Honesty note: contextual stat */}
          <div className="mt-12 max-w-3xl">
            <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
              <p className="text-sm text-porcelain/70 leading-relaxed">
                Average time to complete a residential conveyance in Ireland:
                10.4 weeks. Nearly one in seven deals fall through, mostly due
                to issues found too late. Pipeline catches them earlier.
              </p>
              <p className="text-xs text-hint mt-2 italic">
                Sources: IPAV, Irish Times Sept 2025.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── [4] Documents and compliance (Job 2) ── */}
      <section className="relative py-24 bg-carbon overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.03] via-transparent to-transparent" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Screenshot (left) */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/15 via-transparent to-gold/15 rounded-3xl blur-2xl" />
              <div className="relative">
                <ScreenshotLightbox
                  src={documentsShot}
                  alt="Developer Dashboard documents view for Unit A12: a compliance timeline from foundation to handover with a document tree by category and one missing document flagged"
                />
              </div>
            </div>
            {/* Header (right) */}
            <div className="order-1 lg:order-2">
              <p className="text-sm uppercase tracking-[0.3em] text-gold mb-3 font-semibold">
                Job 2
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-5 leading-tight">
                Every cert,
                <br />
                every doc, against the unit it belongs to.
              </h2>
              <p className="text-lg text-porcelain/70 leading-relaxed mb-6 max-w-md">
                BCAR, BER, HomeBond, fire safety, Part L, Part F,
                sub-contractor certs, homeowner manuals. The full Irish
                residential checklist, per unit, with status visible at a
                glance. Sub-contractors get scoped access to upload their own
                certs. The Certificate of Compliance on Completion Annex builds
                itself.
              </p>
              <ul className="space-y-3">
                {[
                  "Sub-contractors upload their own certs directly",
                  "Audit-ready, every document timestamped and versioned",
                  "The CCC Annex assembles automatically",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-porcelain/80"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Honesty note: contextual stat */}
          <div className="mt-12 max-w-3xl">
            <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
              <p className="text-sm text-porcelain/70 leading-relaxed">
                Under SI 9 of 2014, a Certificate of Compliance on Completion
                must be registered with the Building Control Authority before
                any new building can be used, occupied, or sold. The Annex must
                include ancillary certificates from every designer and
                sub-contractor on the project.
              </p>
              <p className="text-xs text-hint mt-2 italic">
                Sources: Building Control (Amendment) Regulations 2014; National
                Building Control Office.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── [5] Handover (Job 3) ── */}
      <section className="relative py-24 bg-carbon overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Header */}
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gold mb-3 font-semibold">
                Job 3
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-5 leading-tight">
                Handover packs
                <br />
                that build themselves.
              </h2>
              <p className="text-lg text-porcelain/70 leading-relaxed mb-6 max-w-md">
                A week before handover, the Dashboard shows you exactly what is
                outstanding. The homeowner pack assembles itself from the
                documents already in the system. The Property Assistant for that
                home is configured automatically. The buyer scans a QR code at
                handover and their phone is linked to their home&apos;s portal.
              </p>
              <ul className="space-y-3">
                {[
                  "Outstanding documents flagged a week before keys",
                  "Pack assembles from existing data, no double entry",
                  "Property Assistant configured per-home, ready at handover",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-porcelain/80"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Screenshot */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/15 via-transparent to-gold/15 rounded-3xl blur-2xl" />
              <div className="relative">
                <ScreenshotLightbox
                  src={handoverShot}
                  alt="Developer Dashboard handover view for Unit B7: a Ready for handover badge over an assembled list of floor plans, BER cert, warranties, manuals and sign-offs, with a QR code linking to the resident's Property Assistant"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── [6] Residents (Job 4) ── */}
      <section className="relative py-24 bg-carbon overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.03] via-transparent to-transparent" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Screenshot (left) */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/15 via-transparent to-gold/15 rounded-3xl blur-2xl" />
              <div className="relative">
                <ScreenshotLightbox
                  src={residentsShot}
                  alt="Developer Dashboard residents view: a feed of recent resident questions across schemes with name, unit, scheme, and resolution, plus a chart of the month's top topics"
                />
              </div>
            </div>
            {/* Header (right) */}
            <div className="order-1 lg:order-2">
              <p className="text-sm uppercase tracking-[0.3em] text-gold mb-3 font-semibold">
                Job 4
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-5 leading-tight">
                Their questions,
                <br />
                your visibility.
              </h2>
              <p className="text-lg text-porcelain/70 leading-relaxed mb-6 max-w-md">
                Every resident has the Property Assistant in their pocket. When
                they ask a question, the Assistant answers from the documents
                you uploaded for that specific home. When it cannot, the
                question routes to you. You see every interaction, across every
                scheme, in one feed.
              </p>
              <ul className="space-y-3">
                {[
                  "Property Assistant resolves what it can",
                  "You see what escalated, and what did not",
                  "Question patterns inform your next scheme's documentation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-porcelain/80"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── [7] Works for every model ── */}
      <section className="relative py-24 bg-carbon overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />
        <Container>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-4">
              One platform. Every model.
            </h2>
            <p className="text-lg text-porcelain/70 leading-relaxed">
              Whether you are selling units to private buyers, holding for
              rental, or operating student accommodation, the Developer
              Dashboard adapts. Same data spine, different lifecycle views.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {models.map((model) => (
              <div
                key={model.title}
                className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-gold/20 hover:bg-gold/[0.03] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5">
                  <model.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  {model.title}
                </h3>
                <p className="text-sm text-porcelain/70 leading-relaxed">
                  {model.body}
                </p>
              </div>
            ))}
          </div>

          {/* Honesty note */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
              <p className="text-sm text-porcelain/70 leading-relaxed">
                240,964 private tenancies and 50,507 Approved Housing Body
                tenancies are currently registered with the RTB in Ireland. The
                Dashboard handles each tenancy type with the right compliance
                regime.
              </p>
              <p className="text-xs text-hint mt-2 italic">
                Source: RTB Q4 2024 Profile of the Register.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── [8] Built by a developer ── */}
      <section className="relative py-24 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.05] via-transparent to-transparent" />
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              Why OpenHouse
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-heading">
              Built by a developer.
            </h2>
            <p className="text-lg text-porcelain/70 leading-relaxed">
              The Developer Dashboard was built by Sam Donworth, founder of
              Longview Estates Cork, while running a 1,000-home development
              pipeline. Every feature exists because something was missing from
              a real developer&apos;s day. We use it on our own schemes.
            </p>
          </div>
        </Container>
      </section>

      {/* ── [9] Quiet trust line ── */}
      <section className="relative py-24 bg-carbon">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-12 h-12 mx-auto mb-6 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-gold" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 font-heading">
              Your data stays yours.
            </h2>
            <p className="text-lg text-porcelain/70 leading-relaxed">
              Hosted in Europe. Your team adopts it in an afternoon, not a
              twelve-week implementation. Your existing tools (email, calendar,
              accounting, design software) keep working. Export everything at
              any time. You are never locked in.
            </p>
          </div>
        </Container>
      </section>

      {/* ── [10] Peak-end CTA ── */}
      <section className="relative py-28 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-t from-gold/[0.06] to-transparent" />
        <Container>
          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 font-heading">
              See it on a scheme like yours.
            </h2>
            <p className="text-lg text-porcelain/70 mb-10 max-w-xl mx-auto">
              A demo takes thirty minutes. Bring details of one of your live
              developments and we will show you exactly how the Developer
              Dashboard would work for that scheme, configured for your model.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gold via-amber-500 to-gold" />
              <span className="relative z-10 text-carbon flex items-center gap-2">
                Book a Demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <p className="text-sm text-porcelain/50 mt-6">
              Or email{" "}
              <a
                href="mailto:sam@openhouseai.ie"
                className="text-gold hover:underline"
              >
                sam@openhouseai.ie
              </a>{" "}
              with questions first.
            </p>
          </div>
        </Container>
      </section>

      {/* ── [11] Platform strip ── */}
      <section className="relative py-24 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />
        <Container>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              The rest of the platform.
            </p>
            <p className="text-lg text-porcelain/70 leading-relaxed">
              The Developer Dashboard is your control room. The Property
              Assistant is what your residents get. Intelligence and Care are
              specialist tools for the partners working alongside you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {products.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-gold/20 hover:bg-gold/[0.03]"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                  <product.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1.5 font-heading">
                  {product.title}
                </h3>
                <p className="text-xs text-porcelain/60 leading-relaxed">
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
