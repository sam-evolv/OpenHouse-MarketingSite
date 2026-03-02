import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { CareFloatingCards } from "@/components/hero/cards/CareCards";
import heroBackground from "@/attached_assets/stock_images/modern_apartment_liv_925e2b1c.jpg";
import {
  Wrench,
  MessageSquare,
  FileText,
  Monitor,
  QrCode,
  Clock,
  Shield,
  ArrowRight,
  Home,
  ChevronLeft,
  Flame,
  Zap,
  Wind,
  Battery,
  ThermometerSun,
  Lock,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Care Module - AI Aftercare for Installers | OpenHouse Ai",
  description:
    "30-40% of heat pump callouts are for issues the homeowner could resolve themselves. OpenHouse Care gives your customers instant AI support, branded for your business.",
};

const stats = [
  {
    value: "30-40%",
    label: "of heat pump callouts are for issues the homeowner could resolve themselves",
  },
  {
    value: "\u20AC150-220",
    label: "average cost per callout including engineer time, travel, and diagnostic fees",
  },
  {
    value: "500,000",
    label: "heat pumps targeted for installation in Ireland by 2030",
  },
];

const steps = [
  {
    step: "1",
    title: "We learn your systems",
    desc: "Share your product manuals, install guides, and common troubleshooting steps. We build a knowledge base specific to the exact equipment you fit.",
  },
  {
    step: "2",
    title: "Your portal goes live",
    desc: "A branded aftercare assistant, in your name, accessible via QR code. No app downloads. Works on any device, instantly.",
  },
  {
    step: "3",
    title: "Customers self-serve",
    desc: "Homeowners describe their issue. The AI diagnoses it, explains what caused it, and walks them through the fix. Step by step, in plain English.",
  },
];

const features = [
  {
    icon: MessageSquare,
    title: "AI Diagnostics",
    description:
      "Trained on your exact equipment. Diagnoses faults, explains causes, and provides step-by-step resolution in plain language.",
  },
  {
    icon: FileText,
    title: "Guides & Explainer Videos",
    description:
      "Step-by-step maintenance guides and video walkthroughs so homeowners can learn how their systems actually work.",
  },
  {
    icon: Monitor,
    title: "Your Brand, Your Portal",
    description:
      "Fully branded in your company name and colours. Your customers see you, not us. It's your aftercare experience, elevated.",
  },
  {
    icon: QrCode,
    title: "QR Code Activation",
    description:
      "No app downloads, no logins, no friction. Homeowners scan a QR code and they're in. Stick it on the unit, include it in the handover pack.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Your aftercare doesn't clock off at 5pm. Homeowners get answers at midnight on a Sunday, without your phone ringing.",
  },
  {
    icon: Shield,
    title: "Reduce Callbacks, Not Quality",
    description:
      "Your customers get better support, faster. Your team gets freed up for the work that actually needs an engineer on site.",
  },
];

const industries = [
  { label: "Heat Pumps", icon: Flame },
  { label: "Solar PV", icon: Zap },
  { label: "Battery Storage", icon: Battery },
  { label: "HVAC", icon: Wind },
  { label: "EV Chargers", icon: Zap },
  { label: "Alarm Systems", icon: Lock },
  { label: "Ventilation", icon: Wind },
  { label: "Underfloor Heating", icon: ThermometerSun },
];

export default function CarePage() {
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
        backgroundAlt="Modern home interior with premium kitchen finishes"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <Wrench className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">
              Care Module
            </span>
          </div>
        }
        title={
          <>
            Stop the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400">
              callouts
            </span>{" "}
            that don&apos;t need an engineer
          </>
        }
        subtitle="30-40% of heat pump callouts are for issues the homeowner could resolve themselves. OpenHouse Care gives your customers instant AI support, branded for your business, trained on your exact systems."
        primaryCta={{ href: "/contact", label: "Get in Touch" }}
        secondaryCta={{ href: "#how-it-works", label: "See How It Works" }}
      >
        <CareFloatingCards />
      </ModuleHero>

      {/* ── The Problem ── */}
      <section className="relative py-24 bg-carbon">
        <Container>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4 font-semibold">
              The Problem
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              Your engineers are solving problems that take 5 minutes to fix
            </h2>
            <p className="mt-6 text-lg text-porcelain/60 max-w-2xl mx-auto leading-relaxed">
              Wrong thermostat settings. Dirty filters. Defrost mode confusion.
              Hot water scheduling errors. Your customers don&apos;t know how to
              troubleshoot their systems, so they call you. Every time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-emerald-500/20 hover:bg-emerald-500/[0.03] transition-all duration-500"
              >
                <p className="text-4xl sm:text-5xl font-bold text-emerald-400 mb-4 font-heading">
                  {stat.value}
                </p>
                <p className="text-sm text-porcelain/60 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="relative py-24 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.02] via-transparent to-transparent" />
        <Container>
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4 font-semibold">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              Live in minutes. Saving you money from day one.
            </h2>
            <p className="mt-6 text-lg text-porcelain/60 max-w-2xl mx-auto leading-relaxed">
              We build your branded aftercare portal, trained on the exact systems
              you install. Your customers access it via QR code from the moment of
              handover.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {steps.map((s) => (
              <div
                key={s.step}
                className="relative p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-4">
                  <span className="text-sm font-bold text-emerald-400">
                    {s.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-porcelain/60 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

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
                Without OpenHouse Care
              </p>
              <ul className="space-y-3">
                {[
                  "Engineers dispatched for simple user errors",
                  "Customers call you at nights and weekends",
                  "No way to triage before sending a van",
                  "Repeat callouts for the same fault types",
                  "Support costs eating into your margins",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-porcelain/60"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03]">
              <p className="text-sm font-semibold text-emerald-400 mb-4 uppercase tracking-wider">
                With OpenHouse Care
              </p>
              <ul className="space-y-3">
                {[
                  "AI resolves simple issues before they become callouts",
                  "24/7 support without your phone ringing",
                  "Customers guided through fixes step by step",
                  "Knowledge base trained on your exact equipment",
                  "Your brand, your portal - customers see you, not us",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-porcelain"
                  >
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
              What&apos;s Included
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              Everything your customers need. Nothing your engineers have to manage.
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

      {/* ── Works For Any Trade ── */}
      <section className="relative py-24 bg-carbon">
        <Container>
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4 font-semibold">
              Works For Any Trade
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-4">
              If you install it and your customers have questions,
              OpenHouse Care can support it.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {industries.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-emerald-500/20 transition-all duration-300"
              >
                <item.icon className="w-6 h-6 text-emerald-400/70" />
                <span className="text-xs text-porcelain/70 text-center font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Stats Strip ── */}
      <section className="relative py-16 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: "24/7", label: "AI Availability" },
              { value: "1-2s", label: "Response Time" },
              { value: "30-40%", label: "Callouts Preventable" },
              { value: "\u20AC0", label: "Per Resolution" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold text-emerald-400 font-heading">
                  {stat.value}
                </p>
                <p className="text-sm text-porcelain/60 mt-1">{stat.label}</p>
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
              Tired of unnecessary callouts?
            </h2>
            <p className="text-lg text-porcelain/70 mb-8">
              We&apos;d love to show you how OpenHouse Care works for your
              business. Reach out and we&apos;ll walk you through it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500" />
                <span className="relative z-10 text-white flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-porcelain border border-white/20 hover:border-emerald-500/50 rounded-full transition-all duration-300 hover:bg-white/5"
              >
                Back to Platform
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
