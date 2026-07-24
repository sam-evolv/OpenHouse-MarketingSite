import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { HandoverFloatingCards } from "@/components/hero/cards/HandoverCards";
import heroBackground from "@/attached_assets/stock_images/modern_luxury_apartm_7dec65c9.jpg";
import {
  Home,
  ChevronLeft,
  MessageCircle,
  QrCode,
  Bot,
  Eye,
  Package,
  BarChart3,
  Bell,
  HeartHandshake,
  Building2,
  User,
  Play,
  Send,
  ArrowRight,
  TrendingUp,
  FolderOpen,
  Sparkles,
  Wrench,
} from "lucide-react";

export const metadata = {
  title:
    "Handover Module, AI Assistant for Every Home | OpenHouse Ai",
  description:
    "Every home OpenHouse hands over comes with its own AI assistant, trained on the manuals, warranties, certs, and walk-throughs for that specific property. Residents ask. The assistant answers.",
};

const costStats = [
  {
    value: "~100%",
    label:
      "Of new Irish homes use a heat pump as the primary heating system — the all-electric standard for new builds.",
  },
  {
    value: "12,047",
    label:
      "Apartments completed in Ireland in 2025, mostly in multi-unit schemes that need handover documentation per unit.",
  },
  {
    value: "24,237",
    label:
      "Houses completed in Ireland in 2025, each with its own warranty, manuals, and certs.",
  },
];

const steps = [
  {
    icon: QrCode,
    title: "Hand over with a QR code.",
    desc: "The buyer scans the QR code at handover. Their phone is now linked to their home's portal. Every document, every video, every manual is one tap away.",
  },
  {
    icon: Bot,
    title: "The assistant answers.",
    desc: "Trained on the documents for that specific home. Where's my BER cert. How do I top up the heat pump. What's the warranty on the kitchen tiles. Answered with the right detail for the right home.",
  },
  {
    icon: Eye,
    title: "You see what they're asking.",
    desc: "On the developer side, you see every question across every scheme. The patterns become obvious. The next development gets better documentation because the last one told you what was missing.",
  },
];

const features = [
  {
    icon: Bot,
    title: "An AI assistant per home.",
    description:
      "Trained on the documents, manuals, certs, and videos for that specific unit. Available 24/7 to the resident.",
  },
  {
    icon: Package,
    title: "A complete digital handover pack.",
    description:
      "Every document the buyer needs, organised, searchable, never lost. Replaces the binder that ends up in a drawer.",
  },
  {
    icon: BarChart3,
    title: "You see what residents ask.",
    description:
      "Every question across every scheme, aggregated. Patterns surface. Documentation gaps surface. Your next scheme handovers better than your last.",
  },
  {
    icon: Bell,
    title: "Reminders from the home itself.",
    description:
      "Heat pump service due. BER renewal coming up. Ventilation filter check. The platform reminds the resident at the right time.",
  },
];

const personas = [
  {
    icon: HeartHandshake,
    title: "Customer care and aftersales leads.",
    description:
      "You're the person residents come back to. Handover puts the answers between you and the phone, so calls happen only when something really matters.",
  },
  {
    icon: Building2,
    title: "Developer principals.",
    description:
      "You see what residents across every scheme are asking. Documentation gaps surface. The next development handovers better than the last.",
  },
  {
    icon: User,
    title: "Residents themselves.",
    description:
      "Every home gets its own AI assistant. Documents, manuals, certs, walk-throughs, reminders. All in one place, on their phone.",
  },
];

const platformModules = [
  { title: "Sales", href: "/sales", icon: TrendingUp, accent: "text-blue-400" },
  { title: "Build", href: "/build", icon: FolderOpen, accent: "text-emerald-400" },
  {
    title: "Intelligence",
    href: "/intelligence",
    icon: Sparkles,
    accent: "text-gold",
  },
  { title: "Care", href: "/care", icon: Wrench, accent: "text-emerald-400" },
];

export default function HandoverPage() {
  return (
    <div>
      {/* ── Module Badge ── */}
      <div className="fixed top-20 md:top-24 left-4 sm:left-6 z-50">
        <Link
          href="/"
          aria-label="Back to the OpenHouse home page"
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-medium backdrop-blur-md hover:bg-gold/20 transition-all duration-300"
        >
          <ChevronLeft className="w-3 h-3" aria-hidden="true" />
          <Home className="w-3 h-3" aria-hidden="true" />
          <span className="hidden sm:inline">Platform</span>
        </Link>
      </div>

      {/* ── 1. Hero ── */}
      <ModuleHero
        backgroundImage={heroBackground}
        accentColor="gold"
        imagePosition="object-center"
        backgroundAlt="Modern luxury apartment interior at golden hour"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
            <Home className="w-4 h-4 text-gold" aria-hidden="true" />
            <span className="text-sm font-medium text-gold">
              Handover Module
            </span>
          </div>
        }
        title={
          <>
            The phone calls that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
              don&rsquo;t
            </span>{" "}
            need to happen.
          </>
        }
        subtitle="Every home OpenHouse hands over comes with its own AI assistant, trained on the manuals, warranties, certs, and walk-throughs for that specific property. Residents ask. The assistant answers. The phone rings only when it really needs to."
        primaryCta={{ href: "#money-shot", label: "See the assistant in action" }}
        secondaryCta={{ href: "/contact", label: "Request a walkthrough" }}
      >
        <HandoverFloatingCards />
      </ModuleHero>

      {/* ── 2. Cost of the Same Calls ── */}
      <section className="relative py-20 sm:py-24 bg-carbon">
        <div
          className="absolute inset-0 bg-gradient-to-b from-gold/[0.05] via-transparent to-transparent"
          aria-hidden="true"
        />
        <Container>
          <div className="max-w-3xl mb-12 sm:mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              The handover scale
            </p>
            <h2 className="text-[28px] sm:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight">
              Every new home in Ireland comes with a binder no one opens.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl">
            {costStats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 hover:border-gold/30 hover:bg-gold/[0.03] transition-all duration-500"
              >
                <p className="text-[44px] sm:text-5xl lg:text-[56px] font-bold text-gold font-heading leading-none mb-4">
                  {stat.value}
                </p>
                <p className="text-[17px] text-porcelain/75 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-[18px] sm:text-xl text-porcelain/85 mt-12 sm:mt-14 max-w-2xl mx-auto leading-relaxed">
            The questions start arriving in week two. The phone rings, and the answers were always there.
          </p>
          <p className="text-center text-[12px] text-porcelain/40 mt-5 max-w-3xl mx-auto leading-relaxed">
            Sources: CSO New Dwelling Completions, Q4 2025 full year (36,284 total: 12,047 apartments, 24,237 houses); Irish Heat Pumps on heat pumps as the new-build standard.
          </p>
        </Container>
      </section>

      {/* ── 3. Money Shot, Resident Assistant ── */}
      <section
        id="money-shot"
        className="relative py-24 sm:py-32 bg-carbon overflow-hidden scroll-mt-32"
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-gold/[0.06] via-transparent to-gold/[0.04]"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1100px] max-h-[1100px] rounded-full bg-gold/[0.04] blur-[120px]"
          aria-hidden="true"
        />
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              The Assistant
            </p>
            <h2 className="text-[32px] sm:text-5xl lg:text-[64px] font-bold text-white font-heading leading-[1.05] mb-6">
              Every home gets its own assistant.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
              Not a chatbot trained on the internet. An assistant trained on the documents for this specific home. Your heat pump model. Your kitchen warranty. Your BER cert. Your developer&rsquo;s actual walk-through videos. Buyers get the right answer the first time.
            </p>
          </div>

          {/* Split: iPhone mock + assistant response */}
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-10 lg:gap-14 items-center">
              {/* iPhone mock with chat */}
              <div className="relative flex justify-center lg:justify-end">
                <div
                  className="absolute -inset-8 bg-gradient-to-br from-gold/12 via-amber-500/5 to-gold/12 rounded-[60px] blur-3xl"
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
                      <span className="font-semibold">Your Home</span>
                      <span>100%</span>
                    </div>
                    <div className="flex items-center gap-2 px-1 mb-4 pb-3 border-b border-white/5">
                      <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-gold" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-[12px] font-semibold text-porcelain">
                          Home assistant
                        </p>
                        <p className="text-[9px] text-gold">AI online</p>
                      </div>
                    </div>

                    <div className="flex-1 space-y-3 overflow-hidden">
                      <div className="flex justify-end">
                        <div className="bg-gold/20 rounded-2xl rounded-br-md px-3 py-2 max-w-[85%]">
                          <p className="text-[12px] text-porcelain leading-relaxed">
                            How do I top up my heat pump? The pressure dropped this morning.
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-white/10 rounded-2xl rounded-bl-md px-3 py-2 max-w-[88%]">
                          <p className="text-[12px] text-porcelain leading-relaxed mb-1.5">
                            Got it. Your unit&rsquo;s heat pump is the Daikin Altherma 3 R in the utility room.
                          </p>
                          <p className="text-[11px] text-porcelain/70 leading-relaxed">
                            The pressure should sit between 1.5 and 2.0 bar. Tap below for the 90-second walkthrough recorded for your unit, or the manual page.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Input bar */}
                    <div className="mt-3 pt-3 border-t border-white/5">
                      <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">
                        <span className="text-[11px] text-porcelain/40 flex-1">
                          Ask about your home
                        </span>
                        <span className="w-6 h-6 rounded-full bg-gold flex items-center justify-center">
                          <Send className="w-3 h-3 text-carbon" aria-hidden="true" />
                        </span>
                      </div>
                    </div>

                    <div
                      className="mx-auto w-32 h-1 bg-porcelain/30 rounded-full mt-3"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              {/* Assistant response drawer */}
              <div className="relative">
                <div
                  className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-transparent to-gold/20 rounded-3xl blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative rounded-2xl border border-gold/30 bg-neutral-900/95 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-gold" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-gold font-semibold">
                        Trained on your home
                      </p>
                      <p className="text-sm text-porcelain/60">
                        Daikin Altherma 3 R, utility room
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-5">
                    <p className="text-[15px] sm:text-base text-porcelain/85 leading-relaxed">
                      Your heat pump pressure should sit between 1.5 and 2.0 bar when cold. If it has dropped below 1.0, you can top it up in about ninety seconds using the filling loop.
                    </p>
                    <p className="text-[15px] sm:text-base text-porcelain/85 leading-relaxed">
                      You don&rsquo;t need to call anyone. Here&rsquo;s the walkthrough your developer recorded for your unit, plus the manual page with the step-by-step.
                    </p>
                  </div>

                  {/* Embedded video thumbnail */}
                  <div className="rounded-xl border border-white/10 bg-black/60 p-3 sm:p-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-14 h-14 rounded-lg bg-gradient-to-br from-gold/30 to-gold/5 border border-gold/30 flex items-center justify-center flex-shrink-0">
                        <Play
                          className="w-5 h-5 text-gold fill-gold ml-0.5"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-porcelain truncate">
                          Heat pump pressure top-up
                        </p>
                        <p className="text-[12px] text-porcelain/50">
                          Walk-through for your unit, 1m 32s
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 min-h-[48px] px-5 rounded-full bg-gold text-carbon text-sm font-semibold hover:scale-[1.02] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
                    >
                      <Play className="w-4 h-4 fill-carbon" aria-hidden="true" />
                      Watch walkthrough
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 min-h-[48px] px-5 rounded-full border border-white/15 text-sm text-porcelain hover:border-gold/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      Open the manual
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 min-h-[48px] px-5 rounded-full border border-white/10 text-sm text-porcelain/60 hover:text-porcelain hover:border-white/25 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      Still need help, message developer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. How Handover Works ── */}
      <section className="relative py-24 bg-porcelain">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-4 font-semibold">
              How Handover Works
            </p>
            <h2 className="text-[28px] sm:text-4xl font-bold text-carbon font-heading leading-tight">
              Three steps, no curve.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative p-6 sm:p-8 rounded-2xl border border-carbon/10 bg-white hover:border-amber-600/40 hover:shadow-[0_15px_40px_-15px_rgba(212,175,55,0.3)] transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center">
                    <step.icon
                      className="w-5 h-5 text-amber-700"
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

      {/* ── 5. What Handover Does ── */}
      <section className="relative py-24 bg-carbon">
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.03] to-transparent"
          aria-hidden="true"
        />
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              What Handover Does
            </p>
            <h2 className="text-[28px] sm:text-4xl font-bold text-white font-heading leading-tight">
              Four jobs, off your phone.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-gold/30 hover:bg-gold/[0.04] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-gold" aria-hidden="true" />
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
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
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
                className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-gold/30 hover:bg-gold/[0.04] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-gold" aria-hidden="true" />
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
              Grounded in what you uploaded.
            </h2>
            <p className="text-[18px] sm:text-lg text-carbon/75 leading-relaxed">
              Answers are grounded in the documents you uploaded for that specific home. When the evidence is missing, the assistant says so, logs the gap and escalates to you instead of guessing.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 8. Peak-end CTA ── */}
      <section className="relative py-28 sm:py-36 bg-carbon overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-gold/[0.05] via-transparent to-gold/[0.07]"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-gold/[0.06] blur-[140px]"
          aria-hidden="true"
        />
        <Container>
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-[32px] sm:text-5xl lg:text-[60px] font-bold text-white font-heading leading-[1.05] mb-6">
              See it on one of your own homes.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed max-w-2xl mx-auto mb-10">
              A demo takes thirty minutes. Bring the documents for one of your recent handovers and we&rsquo;ll show you what the resident&rsquo;s experience would look like in OpenHouse.
            </p>

            <div className="flex flex-col items-center gap-5">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 min-h-[64px] px-10 sm:px-14 py-5 text-lg sm:text-xl font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_18px_50px_-18px_rgba(212,175,55,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-carbon"
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-gold via-amber-400 to-gold"
                  aria-hidden="true"
                />
                <span className="relative z-10 text-carbon flex items-center gap-3">
                  Request a walkthrough
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
                  className="text-gold hover:text-amber-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
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
              Handover is one module of five. Same data, different surfaces, one platform that runs every stage of a development.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {platformModules.map((mod) => (
              <Link
                key={mod.title}
                href={mod.href}
                className="group flex items-center gap-3 min-h-[64px] px-4 py-3 rounded-2xl border border-carbon/10 bg-white hover:bg-amber-50 hover:border-amber-600/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
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
