import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { HandoverFloatingCards } from "@/components/hero/cards/HandoverCards";
import { EnergyIntelligenceDemo } from "@/components/interactive/EnergyIntelligenceDemo";
import { SplitText } from "@/components/effects/SplitText";
import heroBackground from "@/attached_assets/stock_images/modern_luxury_apartm_7dec65c9.jpg";
import {
  Home,
  ChevronLeft,
  MessageCircle,
  Bot,
  Play,
  Send,
  ArrowRight,
  Wrench,
  Zap,
  Receipt,
  Ruler,
  Bell,
  QrCode,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Property Assistant — A 24/7 AI for Every Home | OpenHouse Ai",
  description:
    "Every home OpenHouse hands over comes with its own 24/7 AI assistant — trained on that home's documents and connected to its energy systems. It answers any question, from a bill to a warning light, and helps homeowners run an A-rated home.",
};

const answers = [
  {
    icon: Zap,
    q: "My heat pump flashed E5 — do I need an engineer?",
    a: "Diagnoses the fault from live telemetry, offers a 90-second self-check, and only books a callout if it's genuinely needed.",
    tag: "Energy",
  },
  {
    icon: Receipt,
    q: "Why did my electricity bill jump this month?",
    a: "Reads your usage, points to what changed, and suggests the cheapest fix — off-peak charging, flow temperature, tariff.",
    tag: "Bills",
  },
  {
    icon: Ruler,
    q: "How big is my living room? I'm buying flooring.",
    a: "Returns the exact dimensions from your home's own floor plan (Type 2B), no measuring tape required.",
    tag: "Documents",
  },
  {
    icon: Wrench,
    q: "How do I top up my heat pump pressure?",
    a: "Names your exact unit (Daikin Altherma 3 R, utility room) and plays the walk-through recorded for it.",
    tag: "Maintenance",
  },
];

const steps = [
  {
    icon: QrCode,
    title: "Scan once, at handover.",
    desc: "A QR code links the home to its portal. Every document, manual, cert and walk-through is one tap away.",
  },
  {
    icon: Bot,
    title: "Ask anything, any time.",
    desc: "Trained on this specific home and connected to its energy systems. The right answer, the first time, 24/7.",
  },
  {
    icon: Bell,
    title: "The home reminds you.",
    desc: "Heat pump service due. BER renewal coming up. A system running inefficiently. The assistant nudges at the right moment.",
  },
];

export default function AssistantPage() {
  return (
    <div>
      {/* ── Home Badge ── */}
      <div className="fixed top-36 sm:top-40 left-4 sm:left-6 z-50">
        <Link
          href="/"
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-medium backdrop-blur-md hover:bg-gold/20 transition-all duration-300"
        >
          <ChevronLeft className="w-3 h-3" aria-hidden="true" />
          <Home className="w-3 h-3" aria-hidden="true" />
          <span className="hidden sm:inline">OpenHouse</span>
        </Link>
      </div>

      {/* ── 1. Hero ── */}
      <ModuleHero
        backgroundImage={heroBackground}
        accentColor="gold"
        imagePosition="object-center"
        backgroundAlt="Modern home interior at golden hour"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
            <MessageCircle className="w-4 h-4 text-gold" aria-hidden="true" />
            <span className="text-sm font-medium text-gold">Property Assistant</span>
          </div>
        }
        title={
          <>
            A 24/7 AI for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
              every home
            </span>{" "}
            you build.
          </>
        }
        subtitle="Every home comes with its own assistant — trained on that home's documents and connected to its energy systems. It answers any question, from a bill to a warning light, and helps the homeowner run an efficient, A-rated home."
        primaryCta={{ href: "#energy", label: "See energy intelligence" }}
        secondaryCta={{ href: "/contact", label: "Book a Demo" }}
      >
        <HandoverFloatingCards />
      </ModuleHero>

      {/* ── 2. Assistant money shot ── */}
      <section className="relative py-24 sm:py-32 bg-carbon overflow-hidden">
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
            <SplitText
              as="h2"
              className="text-[32px] sm:text-5xl lg:text-[56px] font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-6"
            >
              {"Not a chatbot.\nYour home, answering."}
            </SplitText>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
              Trained on the documents for this specific home — your heat pump model, your kitchen warranty, your BER cert, your developer&rsquo;s walk-through videos. It answers with the right detail for the right home.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-10 lg:gap-14 items-center">
              {/* iPhone mock */}
              <div className="relative flex justify-center lg:justify-end">
                <div
                  className="absolute -inset-8 bg-gradient-to-br from-gold/25 via-amber-500/10 to-gold/25 rounded-[60px] blur-3xl"
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
                        <p className="text-[12px] font-semibold text-porcelain">Home assistant</p>
                        <p className="text-[9px] text-gold">AI online</p>
                      </div>
                    </div>

                    <div className="flex-1 space-y-3 overflow-hidden">
                      <div className="flex justify-end">
                        <div className="bg-gold/20 rounded-2xl rounded-br-md px-3 py-2 max-w-[85%]">
                          <p className="text-[12px] text-porcelain leading-relaxed">
                            Why did my electricity bill jump this month?
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-white/10 rounded-2xl rounded-bl-md px-3 py-2 max-w-[88%]">
                          <p className="text-[12px] text-porcelain leading-relaxed mb-1.5">
                            Your EV charged at the full day rate three times this week instead of your off-peak window. That&rsquo;s about &euro;28 of the rise.
                          </p>
                          <p className="text-[11px] text-porcelain/70 leading-relaxed">
                            I can move charging back to your off-peak window. Want me to?
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/5">
                      <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">
                        <span className="text-[11px] text-porcelain/40 flex-1">Ask about your home</span>
                        <span className="w-6 h-6 rounded-full bg-gold flex items-center justify-center">
                          <Send className="w-3 h-3 text-carbon" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                    <div className="mx-auto w-32 h-1 bg-porcelain/30 rounded-full mt-3" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Response drawer */}
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
                        Connected to your home
                      </p>
                      <p className="text-sm text-porcelain/60">
                        EV charger &amp; smart meter &middot; live telemetry
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-5">
                    <p className="text-[15px] sm:text-base text-porcelain/85 leading-relaxed">
                      Your bill rose because the EV charged at the full day rate instead of your off-peak window — three sessions this week, roughly &euro;28 of the increase.
                    </p>
                    <p className="text-[15px] sm:text-base text-porcelain/85 leading-relaxed">
                      This usually happens after a charger app update resets the schedule. I can restore your cheapest off-peak charging window now.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 min-h-[48px] px-5 rounded-full bg-gold text-carbon text-sm font-semibold hover:scale-[1.02] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
                    >
                      <Play className="w-4 h-4 fill-carbon" aria-hidden="true" />
                      Fix the schedule
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 min-h-[48px] px-5 rounded-full border border-white/15 text-sm text-porcelain hover:border-gold/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      Explain my bill
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. Energy Intelligence (signature) ── */}
      <section
        id="energy"
        className="relative py-24 sm:py-32 bg-carbon overflow-hidden scroll-mt-32"
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-emerald-900/[0.10] via-transparent to-emerald-900/[0.06]"
          aria-hidden="true"
        />
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4 font-semibold">
              Energy Intelligence
            </p>
            <h2 className="text-[32px] sm:text-5xl lg:text-[56px] font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-6">
              A home that watches its own energy.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
              The assistant has full context of every energy system in the home. It monitors around the clock, diagnoses issues before they become callouts, teaches the homeowner how to reach an A rating, and shows exactly what that saves.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <EnergyIntelligenceDemo accent="emerald" />
          </div>
        </Container>
      </section>

      {/* ── 4. What it answers ── */}
      <section className="relative py-24 bg-porcelain">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-4 font-semibold">
              What it answers
            </p>
            <h2 className="text-[28px] sm:text-4xl font-bold text-carbon font-heading leading-tight">
              Any question. Any time. Answered from this home.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {answers.map((item) => (
              <div
                key={item.q}
                className="p-6 sm:p-7 rounded-2xl border border-carbon/10 bg-white hover:border-amber-600/40 hover:shadow-[0_15px_40px_-15px_rgba(212,175,55,0.25)] transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-amber-700" aria-hidden="true" />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-amber-700/80">
                    {item.tag}
                  </span>
                </div>
                <p className="text-[17px] font-semibold text-carbon font-heading leading-snug mb-2">
                  &ldquo;{item.q}&rdquo;
                </p>
                <p className="text-[15px] text-carbon/70 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. How it works ── */}
      <section className="relative py-24 bg-carbon">
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.03] to-transparent"
          aria-hidden="true"
        />
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              How it works
            </p>
            <h2 className="text-[28px] sm:text-4xl font-bold text-white font-heading leading-tight">
              Three steps, no curve.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-gold/30 hover:bg-gold/[0.04] transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-gold" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-mono text-porcelain/40">Step {i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 font-heading">{step.title}</h3>
                <p className="text-[17px] text-porcelain/75 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 6. Trust line ── */}
      <section className="relative py-24 bg-porcelain">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 mb-6">
              <ShieldCheck className="w-4 h-4 text-amber-700" aria-hidden="true" />
              <span className="text-sm font-medium text-amber-700">Grounded, not guessing</span>
            </div>
            <h2 className="text-[26px] sm:text-3xl lg:text-[32px] font-bold text-carbon font-heading leading-tight mb-6">
              The assistant doesn&rsquo;t make things up.
            </h2>
            <p className="text-[18px] sm:text-lg text-carbon/75 leading-relaxed">
              Every answer comes from this home&rsquo;s own documents and live system data. If it doesn&rsquo;t know, it says so and offers to message the developer directly. No hallucinations, no fake confidence, no answers pulled from the wider internet.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 7. Peak-end CTA ── */}
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
            <h2 className="text-[32px] sm:text-5xl lg:text-[56px] font-bold text-white font-heading leading-[1.05] tracking-[-0.02em] mb-6">
              See it on one of your own homes.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed max-w-2xl mx-auto mb-10">
              A demo takes thirty minutes. Bring the documents for one of your recent handovers and we&rsquo;ll show you what the homeowner&rsquo;s experience — assistant and energy intelligence — looks like in OpenHouse.
            </p>

            <div className="flex flex-col items-center gap-6">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 min-h-[64px] px-10 sm:px-14 py-5 text-lg sm:text-xl font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(212,175,55,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-carbon"
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-gold via-amber-400 to-gold"
                  aria-hidden="true"
                />
                <span className="relative z-10 text-carbon flex items-center gap-3">
                  Book a Demo
                  <ArrowRight
                    className="w-6 h-6 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-sm text-porcelain/80 hover:text-porcelain hover:border-gold/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  The developer platform
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/care"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-sm text-porcelain/80 hover:text-porcelain hover:border-emerald-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  Care for installers
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
