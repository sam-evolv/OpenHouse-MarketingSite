import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { CareFloatingCards } from "@/components/hero/cards/CareCards";
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
  TrendingUp,
  FolderOpen,
  MessageSquare,
  Sparkles,
  Headphones,
  Play,
  Phone,
  X,
  Check,
  MessageCircle,
} from "lucide-react";

export const metadata = {
  title:
    "Care Module, Stop the Callouts That Don't Need an Engineer | OpenHouse Ai",
  description:
    "OpenHouse Care gives every installation its own AI assistant, branded for your business, trained on the systems you actually installed. Drop the avoidable callouts. Keep the ones that need a technician.",
};

interface CostRow {
  label: string;
  value: string;
}

const withoutCare: CostRow[] = [
  {
    label: "Average cost of a callout (technician time, travel, admin)",
    value: "€150",
  },
  {
    label: "Avoidable callouts per 100 installations per year",
    value: "40",
  },
  {
    label: "Cost per 100 installations per year",
    value: "€6,000",
  },
];

const withCare: CostRow[] = [
  {
    label: "OpenHouse Care subscription per 100 installations per year",
    value: "€1,200",
  },
  {
    label: "Avoidable callouts caught by the assistant",
    value: "28 of 40",
  },
  {
    label: "Cost per 100 installations per year",
    value: "€3,000",
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
  { title: "Sales", href: "/sales", icon: TrendingUp, accent: "text-blue-400" },
  { title: "Build", href: "/build", icon: FolderOpen, accent: "text-emerald-400" },
  { title: "Handover", href: "/handover", icon: MessageSquare, accent: "text-gold" },
  { title: "Intelligence", href: "/intelligence", icon: Sparkles, accent: "text-violet-300" },
  { title: "Agent", href: "/agent", icon: Headphones, accent: "text-gold" },
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

      {/* ── 2. The ROI Math ── */}
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
              The Math
            </p>
            <h2 className="text-[28px] sm:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight mb-4">
              What avoidable callouts cost. And what catching them saves.
            </h2>
            <p className="text-[17px] sm:text-lg text-porcelain/70 leading-relaxed max-w-2xl">
              No vibes. No "boost your ROI". Just the numbers in your own vocabulary.
            </p>
          </div>

          {/* Photographable cost comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl">
            {/* Without Care */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/5">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400" aria-hidden="true" />
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-red-400 font-semibold">
                  Without Care
                </p>
              </div>
              <ul className="space-y-5">
                {withoutCare.map((row, i) => (
                  <li
                    key={row.label}
                    className={`flex items-start justify-between gap-4 ${i === withoutCare.length - 1 ? "pt-5 mt-2 border-t border-white/10" : ""}`}
                  >
                    <span
                      className={`text-[15px] leading-relaxed ${i === withoutCare.length - 1 ? "text-porcelain font-semibold" : "text-porcelain/75"}`}
                    >
                      {row.label}
                    </span>
                    <span
                      className={`text-right font-bold font-heading flex-shrink-0 ${i === withoutCare.length - 1 ? "text-3xl text-red-400" : "text-xl text-porcelain"}`}
                    >
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With Care */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.04] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-semibold">
                  With Care
                </p>
              </div>
              <ul className="space-y-5">
                {withCare.map((row, i) => (
                  <li
                    key={row.label}
                    className={`flex items-start justify-between gap-4 ${i === withCare.length - 1 ? "pt-5 mt-2 border-t border-white/10" : ""}`}
                  >
                    <span
                      className={`text-[15px] leading-relaxed ${i === withCare.length - 1 ? "text-porcelain font-semibold" : "text-porcelain/75"}`}
                    >
                      {row.label}
                    </span>
                    <span
                      className={`text-right font-bold font-heading flex-shrink-0 ${i === withCare.length - 1 ? "text-3xl text-emerald-400" : "text-xl text-porcelain"}`}
                    >
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
              {/* Net saving callout */}
              <div className="mt-6 pt-6 border-t border-emerald-500/30 flex items-center justify-between">
                <span className="text-[15px] font-semibold text-emerald-300">
                  Net saving, per 100 installations per year
                </span>
                <span className="text-3xl sm:text-4xl font-bold text-emerald-400 font-heading">
                  €3,000
                </span>
              </div>
            </div>
          </div>

          <p className="text-center text-[18px] sm:text-xl text-porcelain/85 mt-12 sm:mt-14 max-w-3xl mx-auto leading-relaxed">
            The math gets better the more installations you have, because the fixed costs of training the assistant don&rsquo;t scale linearly. We&rsquo;re happy to run these numbers against your actual installation base on a call.
          </p>
          <p className="text-center text-[12px] text-porcelain/40 mt-3 max-w-xl mx-auto">
            Figures are illustrative. Subscription pricing varies by fleet size. Your real numbers go in before launch.
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
            <h2 className="text-[32px] sm:text-5xl lg:text-[60px] font-bold text-white font-heading leading-[1.05] mb-6">
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
            <h2 className="text-[32px] sm:text-5xl lg:text-[60px] font-bold text-white font-heading leading-[1.05] mb-6">
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
              Part of the OpenHouse platform.
            </h2>
            <p className="text-[17px] sm:text-lg text-carbon/70 leading-relaxed">
              Care is one module of six. Same data, different surfaces, one platform that runs every stage of a home.
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
