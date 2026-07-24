import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { CareFloatingCards } from "@/components/hero/cards/CareCards";
import { CountUp } from "@/components/effects/CountUp";
import heroBackground from "@/attached_assets/stock_images/carebackground.png";
import {
  LifeBuoy,
  Home,
  ChevronLeft,
  Upload,
  Smartphone,
  BarChart3,
  Headset,
  Plug,
  PhoneCall,
  Activity,
  Thermometer,
  Sun,
  Layers,
  ArrowRight,
  MessageSquare,
  Play,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertTriangle,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Care | Installer extension on the OpenHouse home record",
  description:
    "A focused installer extension for approved guidance, honest escalation and recurring aftercare insight across installed systems.",
};

interface MarketStat {
  end: number;
  prefix?: string;
  suffix?: string;
  minWidth: string;
  label: string;
}

const marketStats: MarketStat[] = [
  {
    end: 3609,
    minWidth: "min-w-[5ch]",
    label:
      "Heat pumps installed under SEAI schemes in 2024. A record year, up 13% on 2023.",
  },
  {
    end: 400000,
    minWidth: "min-w-[7ch]",
    label:
      "The Irish government's heat pump installation target by 2030. The current run rate gets to roughly 51,400.",
  },
  {
    end: 616,
    prefix: "€",
    suffix: "m",
    minWidth: "min-w-[5ch]",
    label:
      "SEAI investment in 2024 in home energy upgrades. The installer market is scaling fast.",
  },
];

const steps = [
  {
    icon: Upload,
    title: "Pilot: add one installation type.",
    desc: "Start with the approved information for one installation type and attach it to the same home record.",
  },
  {
    icon: Smartphone,
    title: "Pilot: show a branded access point.",
    desc: "A QR code could link a customer to approved installation information under the installer's brand.",
  },
  {
    icon: BarChart3,
    title: "Pilot: review questions and gaps.",
    desc: "An installer view could group customer questions, missing evidence and issues escalated for professional support.",
  },
];

const features = [
  {
    icon: Headset,
    title: "A branded customer assistant.",
    description:
      "Approved guidance and a clear route to human support, presented under the installer brand.",
  },
  {
    icon: Plug,
    title: "Direction: system-data connections.",
    description:
      "Potential connections such as Huawei FusionSolar, Daikin ONECTA and SolarEdge are shown as future direction, not live integrations.",
  },
  {
    icon: PhoneCall,
    title: "Callouts that do need you, routed to you.",
    description:
      "A pilot could route unresolved questions to the installer's existing support or booking flow. No automatic diagnosis is claimed.",
  },
  {
    icon: Activity,
    title: "Patterns across your installation base.",
    description:
      "A pilot could group recurring questions and evidence gaps so the installer can decide what to improve in future handovers.",
  },
];

const personas = [
  {
    icon: Thermometer,
    title: "Heat pump and HVAC installers.",
    description:
      "For teams exploring whether approved guidance and clearer escalation could reduce avoidable support work.",
  },
  {
    icon: Sun,
    title: "Solar PV and battery installers.",
    description:
      "For teams exploring a sourced, branded way to answer common questions without pretending illustrative system data is live.",
  },
  {
    icon: Layers,
    title: "Multi-system installers.",
    description:
      "For teams exploring how approved information for several installed systems could remain attached to one home record.",
  },
];

const platformModules = [
  { title: "Developer Dashboard", href: "/developers", icon: BarChart3, accent: "text-gold" },
  { title: "Property Assistant", href: "/assistant", icon: MessageSquare, accent: "text-gold" },
];

export default function CarePage() {
  return (
    <div>
      {/* ── Module Badge ── */}
      <div className="fixed top-20 md:top-24 left-4 sm:left-6 z-50">
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
        titleLabel="Aftercare on the same home record."
        backgroundImage={heroBackground}
        accentColor="emerald"
        imagePosition="object-center"
        backgroundAlt="Heat pump unit installed against an exterior wall at golden hour"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <LifeBuoy
              className="w-4 h-4 text-emerald-400"
              aria-hidden="true"
            />
            <span className="text-sm font-medium text-emerald-400">
              Care Module
            </span>
          </div>
        }
        title={
          <>
            Aftercare on the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
              same home record
            </span>
            .
          </>
        }
        subtitle="Care is a focused installer extension of OpenHouse: approved guidance for the customer, honest escalation when evidence is not enough, and a clearer view of recurring aftercare questions."
        primaryCta={{ href: "#roi", label: "See the extension" }}
        secondaryCta={{ href: "/contact?interest=care", label: "Discuss a pilot" }}
      >
        <CareFloatingCards />
      </ModuleHero>

      {/* ── 2. The Market ── */}
      <section
        id="roi"
        className="relative py-20 sm:py-24 bg-carbon scroll-mt-32"
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-emerald-900/[0.08] via-transparent to-transparent"
          aria-hidden="true"
        />
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4 font-semibold">
              The Market
            </p>
            <h2 className="text-[28px] sm:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight mb-4">
              The Irish installer market just changed shape.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {marketStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 hover:border-emerald-500/30 hover:bg-emerald-500/[0.03] transition-all duration-500"
              >
                <p className="text-[44px] sm:text-5xl lg:text-[56px] font-bold text-emerald-400 font-heading leading-none mb-4 tabular-nums">
                  <CountUp
                    end={stat.end}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    className={`inline-block ${stat.minWidth}`}
                  />
                </p>
                <p className="text-[17px] text-porcelain/75 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* The math, when we do it together */}
          <div className="max-w-3xl mx-auto mt-14 sm:mt-16 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.04] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-semibold mb-4">
              The math, when we do it together
            </p>
            <p className="text-[17px] sm:text-lg text-porcelain/85 leading-relaxed">
              Avoidable-callout rates vary by installer, system mix and handover quality. Bring an anonymised three-month callout log to a pilot discussion and we can classify what approved guidance might have answered, what still needed professional judgement and what must remain an engineer visit. No generic percentage is presented as your result.
            </p>
          </div>

          <p className="text-center text-[12px] text-porcelain/40 mt-8 max-w-3xl mx-auto leading-relaxed">
            Sources: SEAI Record Year of Progress 2024 (3,609 heat pumps installed, €616m invested); SEAI National Retrofit Plan (400,000 heat pump target by 2030); ESRI report, March 2026 (current run-rate analysis).
          </p>
        </Container>
      </section>

      {/* ── 3. Money Shot, Branded Customer Assistant ── */}
      <section className="relative py-24 sm:py-32 bg-carbon overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-emerald-900/[0.10] via-transparent to-emerald-900/[0.06]"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1100px] max-h-[1100px] rounded-full bg-emerald-500/[0.05] blur-[120px]"
          aria-hidden="true"
        />
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4 font-semibold">
              Pilot concept
            </p>
            <h2 className="text-[32px] sm:text-5xl lg:text-[56px] font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-6">
              Branded for you. Grounded in approved information.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
              This example shows how an installer-branded extension could answer from the approved installation record and escalate when that record is not enough. It is a pilot concept, not a live fleet or automated diagnostic service.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-10 lg:gap-14 items-center">
              {/* iPhone mock with branded chat */}
              <div className="relative flex justify-center lg:justify-end">
                <div
                  className="absolute -inset-8 bg-gradient-to-br from-emerald-500/25 via-emerald-400/10 to-emerald-500/25 rounded-[60px] blur-3xl"
                  aria-hidden="true"
                />
                <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] rounded-[48px] bg-neutral-900 border-[10px] border-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden">
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black p-5 pt-12 flex flex-col">
                    <div className="flex items-center justify-between text-[11px] text-porcelain/40 mb-4">
                      <span>9:41</span>
                      <span className="font-semibold">Example Installer</span>
                      <span>100%</span>
                    </div>

                    {/* Branded header */}
                    <div className="flex items-center gap-2 px-1 mb-4 pb-3 border-b border-white/5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-300 text-xs">
                        AR
                      </div>
                      <div>
                        <p className="text-[12px] font-semibold text-porcelain">
                          Example Installer
                        </p>
                        <p className="text-[9px] text-emerald-400">
                          Your installer&rsquo;s support
                        </p>
                      </div>
                    </div>

                    <div className="flex-1 space-y-3 overflow-hidden">
                      <div className="flex justify-end">
                        <div className="bg-emerald-500/20 rounded-2xl rounded-br-sm px-3 py-2 max-w-[85%]">
                          <p className="text-[12px] text-porcelain leading-relaxed">
                            My Daikin Altherma is showing E5. What does that mean?
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-white/10 rounded-2xl rounded-bl-sm px-3 py-2 max-w-[90%]">
                          <p className="text-[12px] text-porcelain leading-relaxed mb-1.5">
                            The approved Daikin guide identifies E5 as a flow temperature sensor issue.
                          </p>
                          <p className="text-[11px] text-porcelain/70 leading-relaxed">
                            Do not open the unit. Follow the approved user guidance, and contact your installer if the warning remains.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Branded callout button inside the phone */}
                    <div className="mt-3 pt-3 border-t border-white/5">
                      <div className="inline-flex items-center gap-2 w-full justify-center px-3 py-2.5 rounded-xl bg-emerald-500 text-carbon text-[11px] font-semibold">
                        <Phone className="w-3 h-3" aria-hidden="true" />
                        Book a callout with Example Installer
                      </div>
                    </div>

                    <div
                      className="mx-auto w-32 h-1 bg-porcelain/30 rounded-full mt-3"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              {/* Response drawer */}
              <div className="relative">
                <div
                  className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-transparent to-emerald-500/20 rounded-3xl blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative rounded-2xl border border-emerald-500/30 bg-neutral-900/95 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-300">
                      AR
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold">
                        Example Installer support
                      </p>
                      <p className="text-sm text-porcelain/60">
                        Daikin Altherma 3 R, installed March 2024
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-5">
                    <p className="text-[15px] sm:text-base text-porcelain/85 leading-relaxed">
                      The approved Daikin Altherma 3 R guide identifies E5 as a flow temperature sensor issue. This interface does not infer the cause from the code alone.
                    </p>
                    <p className="text-[15px] sm:text-base text-porcelain/85 leading-relaxed">
                      Show the approved homeowner guidance first. If it does not resolve the warning, or the evidence is incomplete, escalate to the installer for qualified assessment.
                    </p>
                  </div>

                  {/* Embedded video thumbnail */}
                  <div className="rounded-xl border border-white/10 bg-black/60 p-3 sm:p-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-500/30 to-emerald-500/5 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                        <Play
                          className="w-5 h-5 text-emerald-400 fill-emerald-400 ml-0.5"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-porcelain truncate">
                          Approved E5 homeowner guidance
                        </p>
                        <p className="text-[12px] text-porcelain/50">
                          Example content supplied by the installer
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    <div
                      className="inline-flex items-center gap-2 min-h-[48px] px-5 rounded-full bg-emerald-500 text-carbon text-sm font-semibold"
                    >
                      <Play className="w-4 h-4 fill-carbon" aria-hidden="true" />
                      Example: approved guidance
                    </div>
                    <div
                      className="inline-flex items-center gap-2 min-h-[48px] px-5 rounded-full bg-white text-carbon text-sm font-semibold border border-white"
                    >
                      <Phone className="w-4 h-4" aria-hidden="true" />
                      Example: book a callout
                    </div>
                  </div>
                  <p className="text-[11px] text-porcelain/40 mt-4">
                    Example Installer shown as a placeholder. In production, the assistant carries your name, your colours, your logo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3b. Fleet Intelligence (deepened for installers) ── */}
      <section className="relative py-24 sm:py-28 bg-carbon overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.04] to-transparent"
          aria-hidden="true"
        />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
            {/* Copy */}
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4 font-semibold">
                Direction: connected support
              </p>
              <h2 className="text-[28px] sm:text-4xl lg:text-[44px] font-bold text-white font-heading leading-tight mb-5">
                System context could strengthen the escalation.
              </h2>
              <p className="text-[17px] text-porcelain/75 leading-relaxed mb-4">
                The interface beside this text illustrates a future direction in which approved documents and connected system data sit together. Daikin ONECTA, SolarEdge and Huawei FusionSolar are examples of potential data sources, not claimed live integrations.
              </p>
              <p className="text-[15px] text-porcelain/60 leading-relaxed">
                The current product value is the structured installation record, grounded guidance and visible route to the installer when evidence is not enough.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {["Daikin ONECTA", "SolarEdge", "Huawei FusionSolar"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2 text-[13px] text-porcelain/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" aria-hidden="true" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Installer console */}
            <div className="relative">
              <div
                className="absolute -inset-4 bg-gradient-to-r from-emerald-500/15 via-transparent to-emerald-500/15 rounded-3xl blur-2xl"
                aria-hidden="true"
              />
              <div className="relative rounded-3xl border border-white/10 bg-neutral-900/90 backdrop-blur-xl overflow-hidden">
                <div className="flex items-center gap-3 px-5 sm:px-7 py-4 border-b border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                    <Activity className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-porcelain">Example fleet view</p>
                    <p className="text-[11px] text-porcelain/45 truncate">Direction concept for questions and escalation</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-[11px] font-medium text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" aria-hidden="true" />
                    Example
                  </span>
                </div>

                <div className="p-5 sm:p-7 grid grid-cols-1 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-5">
                  {/* Fault feed */}
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-porcelain/45 font-semibold mb-3">
                      Recent activity
                    </p>
                    <ul className="space-y-2.5">
                      {[
                        { unit: "Daikin Altherma · E5", detail: "Approved guide shown, then escalated", tone: "warn" as const },
                        { unit: "Mitsubishi Ecodan · E4", detail: "Evidence gap sent to installer", tone: "warn" as const },
                        { unit: "Solar PV · nighttime query", detail: "Answered from approved guidance", tone: "ok" as const },
                        { unit: "Battery · capacity query", detail: "Answered from the manual", tone: "ok" as const },
                      ].map((row) => (
                        <li
                          key={row.unit}
                          className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] p-2.5"
                        >
                          {row.tone === "ok" ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          ) : (
                            <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          )}
                          <div className="min-w-0">
                            <p className="text-[13px] font-medium text-porcelain leading-tight">{row.unit}</p>
                            <p className={`text-[11px] ${row.tone === "ok" ? "text-emerald-300/80" : "text-amber-300/80"}`}>
                              {row.detail}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="space-y-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-porcelain/45 font-semibold mb-1">
                      This month
                    </p>
                    <MetricTile value="128" label="Callouts avoided" />
                    <MetricTile value="31" label="Engineer-days saved" />
                    <div className="rounded-xl border border-amber-500/25 bg-amber-500/[0.05] p-3">
                      <p className="text-[10px] uppercase tracking-wider text-amber-300/80 font-semibold mb-1 flex items-center gap-1.5">
                        <Zap className="w-3 h-3" aria-hidden="true" /> Recurring pattern
                      </p>
                      <p className="text-[13px] text-porcelain/85 leading-snug">
                        Repeated E5 questions in this example suggest reviewing the winter handover pack.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-5 sm:px-7 pb-5 -mt-1">
                  <p className="text-[11px] text-porcelain/55 leading-relaxed">
                    Illustrative console. Figures marked &ldquo;Example&rdquo; are for illustration, not real customer data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. How Care Works ── */}
      <section className="relative py-24 bg-porcelain">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-700 mb-4 font-semibold">
              Pilot workflow
            </p>
            <h2 className="text-[28px] sm:text-4xl font-bold text-carbon font-heading leading-tight">
              Start with one installation type.
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

      {/* ── 5. What Care Does ── */}
      <section className="relative py-24 bg-carbon">
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.03] to-transparent"
          aria-hidden="true"
        />
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4 font-semibold">
              Pilot capabilities
            </p>
            <h2 className="text-[28px] sm:text-4xl font-bold text-white font-heading leading-tight">
              Four capabilities to test with an installer.
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
              Potential pilot partners
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

      {/* ── 7. Trust Line, addressing the "who built this for installers?" question ── */}
      <section className="relative py-24 bg-porcelain">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[26px] sm:text-3xl lg:text-[32px] font-bold text-carbon font-heading leading-tight mb-6">
              Built from direct housing-delivery experience.
            </h2>
            <p className="text-[18px] sm:text-lg text-carbon/75 leading-relaxed">
              OpenHouse is being shaped through direct work on a live Cork housing development. Care is a proposed extension for the systems already attached to those homes, using the same approved record, provenance and escalation model.
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
            <h2 className="text-[32px] sm:text-5xl lg:text-[56px] font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-6">
              See it on your actual installation base.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed max-w-2xl mx-auto mb-10">
              Bring the approved specification for one typical installation and an anonymised three-month callout log. We will map what could be answered from evidence, what must escalate and what a limited pilot would need to prove.
            </p>

            <div className="flex flex-col items-center gap-5">
              <Link
                href="/contact?interest=care"
                className="group relative inline-flex items-center justify-center gap-3 min-h-[64px] px-10 sm:px-14 py-5 text-lg sm:text-xl font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(16,185,129,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-4 focus-visible:ring-offset-carbon"
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600"
                  aria-hidden="true"
                />
                <span className="relative z-10 text-white flex items-center gap-3">
                  Discuss a Care pilot
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
              A focused extension, on the same home record.
            </h2>
            <p className="text-[17px] sm:text-lg text-carbon/70 leading-relaxed">
              Care applies the same evidence, source and escalation model to installer aftercare. It does not create a separate product story or a second version of the home.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
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

/* Small metric tile for the installer console. Figures are illustrative. */
function MetricTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-emerald-400 font-heading leading-none">{value}</span>
        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider text-porcelain/60 border border-white/15 bg-white/5">
          Example
          <span className="sr-only"> figure, for illustration only, not real customer data</span>
        </span>
      </div>
      <p className="text-[12px] text-porcelain/70 mt-1">{label}</p>
    </div>
  );
}
