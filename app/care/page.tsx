import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { CareFloatingCards } from "@/components/hero/cards/CareCards";
import { CareAssistantDemo } from "@/components/care/CareAssistantDemo";
import heroBackground from "@/attached_assets/stock_images/carebackground.png";
import {
  LifeBuoy,
  ArrowRight,
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
  TrendingUp,
  Target,
  Banknote,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Care Module - Cut Avoidable Callouts | OpenHouse Ai",
  description:
    "OpenHouse Care gives every installation its own AI assistant, branded for your business and trained on the systems you installed. Built for renewable energy installers.",
};

const marketStats = [
  {
    icon: TrendingUp,
    value: "3,609",
    unit: "heat pumps",
    label:
      "Installed under SEAI schemes in 2024 alone, a record year. Up 13% on 2023.",
  },
  {
    icon: Target,
    value: "400,000",
    unit: "by 2030",
    label:
      "The Irish government's heat pump installation target. The current run rate gets us to roughly 51,400.",
  },
  {
    icon: Banknote,
    value: "€616m",
    unit: "SEAI 2024",
    label:
      "Invested in home energy upgrades in a single year. Customers are ringing for support that did not exist five years ago.",
  },
];

const marketSource =
  "Sources: SEAI, Record Year of Progress 2024 (3,609 heat pumps installed, €616m invested). SEAI National Retrofit Plan, Quarterly Progress Report 2024 (400,000 heat pumps by 2030). ESRI, March 2026 (run rate of 51,400 by 2030).";

const theMathCopy =
  "Different installers run very different ratios of avoidable to genuine callouts, depending on the systems installed and the quality of handover documentation. We would rather not invent the numbers for your operation. On a demo call, bring your callout log for the last three months and we will do the math against what OpenHouse Care would catch. If the saving does not pay for the platform several times over, we will tell you straight.";

const steps = [
  {
    icon: Upload,
    title: "Onboard your installations",
    body: "Add your installation base. Heat pumps, solar arrays, HVAC, EV chargers. Each installation is registered against the customer's home, with the system specs the assistant needs.",
  },
  {
    icon: Smartphone,
    title: "Customers get a branded portal",
    body: "A QR code at handover. The customer scans it, links their installation to the portal, and the assistant is now available around the clock in your branding.",
  },
  {
    icon: BarChart3,
    title: "You see what is happening",
    body: "On the installer side you see every question, every resolved issue, and every callout that did need an engineer. Patterns surface. Your operation gets leaner.",
  },
];

const features = [
  {
    icon: Headset,
    title: "A branded customer assistant",
    body: "Round-the-clock support in your branding, trained on the specific systems you installed. Customers get the right answer the first time.",
  },
  {
    icon: Plug,
    title: "Telemetry integrations",
    body: "Huawei FusionSolar, Daikin ONECTA, SolarEdge, and growing. The assistant reads live system data where the integration exists.",
  },
  {
    icon: PhoneCall,
    title: "Callouts that do need you, routed to you",
    body: "When the issue is real, the customer is taken straight to your booking flow. You do not lose the work, you just lose the avoidable trips.",
  },
  {
    icon: Activity,
    title: "Patterns across your installation base",
    body: "Every question and every callout gives you data on what is failing, where, and how often. Your next install is informed by your last hundred.",
  },
];

const personas = [
  {
    icon: Thermometer,
    title: "Heat pump and HVAC installers",
    body: "Managing 500 to 5,000 active installs. Care drops your avoidable callouts and gives you data on what your fleet is actually doing.",
  },
  {
    icon: Sun,
    title: "Solar PV and battery installers",
    body: "Customers want to understand their system. Care gives them the answers without your phone ringing every week about a normal nighttime drop.",
  },
  {
    icon: Layers,
    title: "Multi-system installers",
    body: "Heat pump plus solar plus battery plus EV charger in the same home. Care holds the whole system in one place for the customer and one dashboard for you.",
  },
];

const trustCopy =
  "OpenHouse is a property platform used by developers across Ireland. Care exists because the same homes that come out of those developments have heat pumps and solar arrays that need ongoing care. We already sit between developers and homeowners. Care extends that to installers.";

const platformLinks = [
  {
    href: "/developer-dashboard",
    label: "Developer Dashboard",
    icon: LayoutDashboard,
    blurb: "Your control room for every scheme.",
  },
  {
    href: "/property-assistant",
    label: "Property Assistant",
    icon: Smartphone,
    blurb: "What every resident gets, on their phone.",
  },
  {
    href: "/intelligence",
    label: "Intelligence",
    icon: Sparkles,
    blurb: "Ask anything about any scheme, get the answer with sources.",
  },
];

export default function CarePage() {
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

      {/* ── Hero ── */}
      <ModuleHero
        backgroundImage={heroBackground}
        accentColor="gold"
        backgroundAlt="Renewable energy installation representing heat pumps and solar systems"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
            <LifeBuoy className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">Care Module</span>
          </div>
        }
        title={
          <>
            Stop the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-300 to-gold">
              callouts
            </span>{" "}
            that don&apos;t need an engineer.
          </>
        }
        subtitle="Many heat pump and solar callouts are for things the customer could resolve themselves. OpenHouse Care gives every installation its own AI assistant, branded for your business, trained on the systems you actually installed."
        primaryCta={{ href: "#market", label: "See the math" }}
        secondaryCta={{ href: "#money-shot", label: "See it in action" }}
      >
        <CareFloatingCards />
      </ModuleHero>

      {/* ── Section 2: The market ── */}
      <section id="market" className="relative py-24 bg-carbon overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.05] via-transparent to-transparent" />
        <Container>
          <div className="relative text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              The market
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading max-w-3xl mx-auto">
              The Irish installer market just changed shape
            </h2>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {marketStats.map((stat) => (
              <div
                key={stat.value}
                className="p-8 rounded-2xl border border-gold/15 bg-gradient-to-b from-gold/[0.06] to-white/[0.02] text-center"
              >
                <div className="w-11 h-11 mx-auto mb-5 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-gold" />
                </div>
                <p className="text-4xl sm:text-5xl font-bold text-gold font-heading">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-porcelain/80 mt-1 mb-4 uppercase tracking-wider">
                  {stat.unit}
                </p>
                <p className="text-base text-porcelain/60 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="relative text-caption text-hint/50 max-w-5xl mx-auto mt-6 leading-relaxed">
            {marketSource}
          </p>

          {/* The math, when we do it together */}
          <div className="relative mt-16 max-w-2xl mx-auto rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              The math, when we do it together
            </p>
            <p className="text-lg text-porcelain/80 leading-relaxed">
              {theMathCopy}
            </p>
          </div>
        </Container>
      </section>

      {/* ── Section 3: Money shot ── */}
      <section
        id="money-shot"
        className="relative py-28 bg-carbon overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.04] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-gold/[0.04] rounded-full blur-3xl" />
        <Container>
          <div className="relative text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              The money shot
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading mb-6">
              Branded for you. Trained on your installations.
            </h2>
            <p className="text-lg text-porcelain/70 leading-relaxed">
              Customers see your name, not ours. The assistant knows what you
              installed, when you installed it, and what to do when something
              goes wrong. The trust stays with your brand. The callouts that
              actually need you still come to you.
            </p>
          </div>
          <div className="relative">
            <CareAssistantDemo />
          </div>
        </Container>
      </section>

      {/* ── Section 4: How Care works ── */}
      <section className="relative py-24 bg-carbon overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.06] via-transparent to-gold/[0.04]" />
        <Container>
          <div className="relative text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              How it works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              Three steps to fewer callouts
            </h2>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="p-8 rounded-2xl border border-gold/15 bg-white/[0.02] hover:border-gold/30 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-2xl font-bold text-gold/40 font-heading">
                    0{i + 1}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-gold" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-porcelain/60 leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Section 5: What Care does ── */}
      <section className="relative py-24 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />
        <Container>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              What Care does
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-gold/20 hover:bg-gold/[0.03] transition-all duration-500"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5">
                  <f.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {f.title}
                </h3>
                <p className="text-base text-porcelain/60 leading-relaxed">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Section 6: Built for you ── */}
      <section className="relative py-24 bg-carbon overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.05] via-transparent to-transparent" />
        <Container>
          <div className="relative text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              Built for you
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              The installers Care is for
            </h2>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {personas.map((p) => (
              <div
                key={p.title}
                className="p-8 rounded-2xl border border-gold/15 bg-gradient-to-b from-gold/[0.05] to-white/[0.02]"
              >
                <div className="w-12 h-12 mb-5 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center">
                  <p.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-base text-porcelain/60 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Section 7: Quiet trust line ── */}
      <section className="relative py-24 bg-carbon overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.06] to-transparent" />
        <Container>
          <div className="relative max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-6">
              Built by people who already work with developers
            </h2>
            <p className="text-lg text-porcelain/70 leading-relaxed">
              {trustCopy}
            </p>
          </div>
        </Container>
      </section>

      {/* ── Section 8: Peak-end CTA ── */}
      <section className="relative py-28 bg-carbon overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gold/[0.06] to-transparent" />
        <Container>
          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
              See it on your actual installation base
            </h2>
            <p className="text-lg text-porcelain/70 mb-10 leading-relaxed">
              A demo takes thirty minutes. Bring the spec of one of your typical
              installations and we will show you exactly what your customer&apos;s
              experience would look like in Care, branded for you.
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
            <p className="mt-6 text-sm text-porcelain/50">
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

      {/* ── Section 9: Platform strip ── */}
      <section className="relative py-20 bg-carbon border-t border-white/5">
        <Container>
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              One platform
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Care is one part of OpenHouse
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {platformLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className="group min-h-[48px] p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-gold/20 hover:bg-gold/[0.03] transition-all duration-300"
              >
                <div className="w-10 h-10 mb-4 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <link.icon className="w-5 h-5 text-gold" />
                </div>
                <p className="text-base font-semibold text-white mb-1 flex items-center gap-1">
                  {link.label}
                  <ArrowRight className="w-4 h-4 text-gold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </p>
                <p className="text-sm text-porcelain/50 leading-relaxed">
                  {link.blurb}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
