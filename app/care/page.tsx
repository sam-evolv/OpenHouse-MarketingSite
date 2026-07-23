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
  title:
    "Care Module, Stop the Callouts That Don't Need an Engineer | OpenHouse Ai",
  description:
    "OpenHouse Care gives every installation its own AI assistant, branded for your business, trained on the systems you actually installed. Drop the avoidable callouts. Keep the ones that need a technician.",
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
    title: "Onboard your installations.",
    desc: "Add your installation base. Heat pumps, solar arrays, HVAC, EV chargers. Each installation is registered against the customer's home, with the system specs the assistant needs.",
  },
  {
    icon: Smartphone,
    title: "Customers get a branded portal.",
    desc: "QR code at handover. Customer scans, links their installation to the portal. The assistant is now available 24/7 in your branding.",
  },
  {
    icon: BarChart3,
    title: "You see what's happening.",
    desc: "On the installer side, you see every question, every resolved issue, every callout that did need an engineer. Patterns surface. Training improves. Your operation gets leaner.",
  },
];

const features = [
  {
    icon: Headset,
    title: "A branded customer assistant.",
    description:
      "24/7 support in your branding. Trained on the specific systems you installed. Customers get the right answer the first time.",
  },
  {
    icon: Plug,
    title: "Telemetry integrations.",
    description:
      "Huawei FusionSolar, Daikin ONECTA, SolarEdge, and growing. The assistant reads live system data where the integration exists.",
  },
  {
    icon: PhoneCall,
    title: "Callouts that do need you, routed to you.",
    description:
      "When the issue is real, the customer is taken straight to your booking flow. You don't lose the work, you just lose the avoidable trips.",
  },
  {
    icon: Activity,
    title: "Patterns across your installation base.",
    description:
      "Every question and every callout gives you data on what's failing, where, and how often. Your next install is informed by your last hundred.",
  },
];

const personas = [
  {
    icon: Thermometer,
    title: "Heat pump and HVAC installers.",
    description:
      "Managing 500 to 5,000 active installs. Care drops your avoidable callouts and gives you data on what your fleet is actually doing.",
  },
  {
    icon: Sun,
    title: "Solar PV and battery installers.",
    description:
      "Customers want to understand their system. Care gives them the answers without your phone ringing every week about a normal nighttime drop.",
  },
  {
    icon: Layers,
    title: "Multi-system installers.",
    description:
      "Heat pump plus solar plus battery plus EV charger in the same home. Care holds the whole system in one place for the customer and one dashboard for you.",
  },
];

const platformModules = [
  { title: "Developer platform", href: "/platform", icon: BarChart3, accent: "text-gold" },
  { title: "Property Assistant", href: "/assistant", icon: MessageSquare, accent: "text-gold" },
];

export default function CarePage() {
  return (
    <div>
      {/* ── Module Badge ── */}
      <div className="fixed top-36 sm:top-40 left-4 sm:left-6 z-50">
        <Link
          href="/"
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
            Stop the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
              callouts
            </span>{" "}
            that don&rsquo;t need an engineer.
          </>
        }
        subtitle="Roughly four in ten heat pump and solar callouts are for things the customer could resolve themselves. OpenHouse Care gives every installation its own AI assistant, branded for your business, trained on the systems you actually installed."
        primaryCta={{ href: "#roi", label: "See the math" }}
        secondaryCta={{ href: "/contact", label: "Book a Demo" }}
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
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4 font-semibold">
              The Market
            </p>
            <h2 className="text-[28px] sm:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight mb-4">
              The Irish installer market just changed shape.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl">
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
              Different installers run very different ratios of avoidable to genuine callouts depending on the systems installed and the quality of handover documentation. We&rsquo;d rather not invent the numbers for your operation. On a demo call, bring your callout log for the last three months and we&rsquo;ll do the math against what OpenHouse Care would catch. If the saving doesn&rsquo;t pay for the platform several times over, we&rsquo;ll tell you straight.
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
              Your Brand, In Front
            </p>
            <h2 className="text-[32px] sm:text-5xl lg:text-[56px] font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-6">
              Branded for you. Trained on your installations.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
              Customers see your name, not ours. The assistant knows what you installed, when you installed it, and what to do when something goes wrong. The trust stays with your brand. The callouts that actually need you, still come to you.
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
                      <span className="font-semibold">Acme Renewables</span>
                      <span>100%</span>
                    </div>

                    {/* Branded header */}
                    <div className="flex items-center gap-2 px-1 mb-4 pb-3 border-b border-white/5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-300 text-xs">
                        AR
                      </div>
                      <div>
                        <p className="text-[12px] font-semibold text-porcelain">
                          Acme Renewables
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
                            E5 is a flow temperature sensor issue on your Daikin Altherma 3 R.
                          </p>
                          <p className="text-[11px] text-porcelain/70 leading-relaxed">
                            Let&rsquo;s try a 90-second check first. If that doesn&rsquo;t fix it, we&rsquo;ll book a technician for you.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Branded callout button inside the phone */}
                    <div className="mt-3 pt-3 border-t border-white/5">
                      <div className="inline-flex items-center gap-2 w-full justify-center px-3 py-2.5 rounded-xl bg-emerald-500 text-carbon text-[11px] font-semibold">
                        <Phone className="w-3 h-3" aria-hidden="true" />
                        Book a callout with Acme Renewables
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
                        Acme Renewables support
                      </p>
                      <p className="text-sm text-porcelain/60">
                        Daikin Altherma 3 R, installed March 2024
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-5">
                    <p className="text-[15px] sm:text-base text-porcelain/85 leading-relaxed">
                      E5 means your heat pump has detected a flow temperature sensor issue. Nine times out of ten this is a connection on the sensor wiring that has worked loose during a cold snap.
                    </p>
                    <p className="text-[15px] sm:text-base text-porcelain/85 leading-relaxed">
                      Here&rsquo;s the 90-second check, recorded by our team for this exact unit. If the check doesn&rsquo;t resolve it, this is a real one. Book a technician below and we&rsquo;ll be out.
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
                          E5 sensor wiring check
                        </p>
                        <p className="text-[12px] text-porcelain/50">
                          Recorded by Acme Renewables, 1m 28s
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 min-h-[48px] px-5 rounded-full bg-emerald-500 text-carbon text-sm font-semibold hover:scale-[1.02] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
                    >
                      <Play
                        className="w-4 h-4 fill-carbon"
                        aria-hidden="true"
                      />
                      Watch the 90-second check
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 min-h-[48px] px-5 rounded-full bg-white text-carbon text-sm font-semibold border border-white hover:scale-[1.02] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    >
                      <Phone className="w-4 h-4" aria-hidden="true" />
                      Book a callout with Acme Renewables
                    </button>
                  </div>
                  <p className="text-[11px] text-porcelain/40 mt-4">
                    Acme Renewables shown as a placeholder. In production, the assistant carries your name, your colours, your logo.
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
                Reads the real system
              </p>
              <h2 className="text-[28px] sm:text-4xl lg:text-[44px] font-bold text-white font-heading leading-tight mb-5">
                It knows the difference between a scare and a callout.
              </h2>
              <p className="text-[17px] text-porcelain/75 leading-relaxed mb-4">
                Where the integration exists, Care reads live data from the customer&rsquo;s system &mdash; Daikin ONECTA, SolarEdge, Huawei FusionSolar &mdash; and diagnoses against the exact unit you installed. An intermittent sensor gets a 90-second self-check. A genuine fault goes straight to your booking flow.
              </p>
              <p className="text-[15px] text-porcelain/60 leading-relaxed">
                Every question and callout feeds one console, so you see what your whole installation base is doing &mdash; and what keeps failing.
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
                    <p className="text-sm font-semibold text-porcelain">Your fleet, live</p>
                    <p className="text-[11px] text-porcelain/45 truncate">Every question and callout, one console</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-[11px] font-medium text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" aria-hidden="true" />
                    Online
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
                        { unit: "Daikin Altherma · E5", detail: "Sensor check resolved it", tone: "ok" as const },
                        { unit: "Mitsubishi Ecodan · E4", detail: "Low flow — callout booked", tone: "warn" as const },
                        { unit: "SolarEdge · night drop", detail: "Explained, no callout", tone: "ok" as const },
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
                        E5 after cold snaps &mdash; 9 homes. Add it to the winter handover pack.
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
              How Care Works
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
                  <span className="text-xs font-mono text-carbon/40">
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
              What Care Does
            </p>
            <h2 className="text-[28px] sm:text-4xl font-bold text-white font-heading leading-tight">
              Four jobs, off your van.
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

      {/* ── 7. Trust Line, addressing the "who built this for installers?" question ── */}
      <section className="relative py-24 bg-porcelain">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[26px] sm:text-3xl lg:text-[32px] font-bold text-carbon font-heading leading-tight mb-6">
              Built by people who already work with developers.
            </h2>
            <p className="text-[18px] sm:text-lg text-carbon/75 leading-relaxed">
              OpenHouse is a property platform used by developers across Ireland. Care exists because the same homes that come out of those developments have heat pumps and solar arrays that need ongoing care. We already sit between developers and homeowners. Care extends that to installers.
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
              A demo takes thirty minutes. Bring the spec of one of your typical installations and we&rsquo;ll show you exactly what your customer&rsquo;s experience would look like in Care, branded for you.
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
              A separate product, on the same platform.
            </h2>
            <p className="text-[17px] sm:text-lg text-carbon/70 leading-relaxed">
              Care is its own product for installers, built on the platform developers use to run their schemes and give every home an assistant.
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
