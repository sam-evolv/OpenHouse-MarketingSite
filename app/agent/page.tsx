import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { AgentFloatingCards } from "@/components/hero/cards/AgentCards";
import { AgentTryItWidget } from "@/components/interactive/AgentTryItWidget";
import heroBackground from "@/attached_assets/stock_images/platform_aerial_network.png";
import {
  Headphones,
  Home,
  ChevronLeft,
  Mic,
  WandSparkles,
  CheckCheck,
  Mail,
  CalendarClock,
  KeyRound,
  BarChart3,
  HardHat,
  Building2,
  UserRound,
  ArrowRight,
  TrendingUp,
  FolderOpen,
  MessageSquare,
  Sparkles,
  Wrench,
  Apple,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Agent Module, AI Colleague for Estate and Letting Agents | OpenHouse Ai",
  description:
    "OpenHouse Agent listens between viewings, drafts the email, schedules the follow-up, and pulls the report. Voice-first AI for Irish estate and letting agents. You stay in control of everything that leaves your name.",
};

const steps = [
  {
    icon: Mic,
    title: "You speak.",
    desc: "Tap and hold. Talk plainly, in the car or at the desk. No commands, no syntax.",
  },
  {
    icon: WandSparkles,
    title: "Agent drafts.",
    desc: "The system finds the right buyer, unit, and history, then writes the email in your tone. Every output lands in a review drawer.",
  },
  {
    icon: CheckCheck,
    title: "You approve.",
    desc: "One tap to send. One tap to edit. Nothing leaves your phone until you say so.",
  },
];

const features = [
  {
    icon: Mail,
    title: "Drafts every email worth writing.",
    description:
      "Follow-ups, contract chases, kitchen selection nudges, solicitor queries. Agent knows who, why, and when.",
  },
  {
    icon: CalendarClock,
    title: "Schedules viewings on your calendar.",
    description:
      "Connect once. Agent proposes times that work, sends the confirmation, handles the reschedule when buyers cancel.",
  },
  {
    icon: KeyRound,
    title: "Handles lettings end to end.",
    description:
      "RPZ rent caps built in. Rent arrears flags. RTB reminders. Tenant communication.",
  },
  {
    icon: BarChart3,
    title: "Pulls the report you'd build by hand.",
    description:
      "Weekly pipelines for developers. End-of-week summaries for partners. Drafted, formatted, ready to send.",
  },
];

const personas = [
  {
    icon: HardHat,
    title: "New homes sales agents.",
    description:
      "Selling 20 to 200 units across schemes. Agent keeps the pipeline moving and drafts the developer reports without you opening a spreadsheet.",
  },
  {
    icon: Building2,
    title: "Letting agents with full portfolios.",
    description:
      "Tracking 30 to 100 active tenancies. Agent handles renewals at RPZ-permitted rents, flags arrears, and keeps RTB compliance current.",
  },
  {
    icon: UserRound,
    title: "Sole practitioners and small offices.",
    description:
      "The agent is the office. Agent is the colleague who picks up the typing so you can stay on the phone and on the road.",
  },
];

const beforeDay = [
  { time: "07:30", line: "In the car. Phone propped on the dash, reading last night's emails at red lights." },
  { time: "09:00", line: "At a viewing. Buyer asks about the warranty. You promise to dig it out and send it." },
  { time: "10:30", line: "Driving to the next one. Two buyers waiting on contract updates." },
  { time: "13:00", line: "Sandwich at the desk. Six follow-ups to write before the next viewing." },
  { time: "15:00", line: "Show house. Phone buzzing. Three solicitors chasing the same buyer." },
  { time: "17:30", line: "Office. Pulling the weekly pipeline for the developer. Spreadsheet open, no end in sight." },
  { time: "20:45", line: "Home. Replying to the emails you didn't get to today." },
];

const afterDay = [
  { time: "07:30", line: "In the car. “What's waiting on me today?” Briefing read aloud, twenty seconds." },
  { time: "09:00", line: "At a viewing. “Send John the warranty cert for unit 3.” Drafted by the time you're back in the car." },
  { time: "10:30", line: "Driving. “Status on contracts for Conor and Mark.” Both ready to approve." },
  { time: "13:00", line: "Sandwich at the desk. Six drafts in the queue. Approve all in ninety seconds." },
  { time: "15:00", line: "Show house. Walk-ins logged by voice. Follow-ups drafted before you leave." },
  { time: "17:30", line: "Office. Pipeline report drafted overnight. Read it, tweak it, send it." },
  { time: "20:45", line: "Home. Phone away." },
];

const platformModules = [
  { title: "Sales", href: "/sales", icon: TrendingUp, accent: "text-blue-400", ring: "border-blue-500/30" },
  { title: "Build", href: "/build", icon: FolderOpen, accent: "text-emerald-400", ring: "border-emerald-500/30" },
  { title: "Handover", href: "/handover", icon: MessageSquare, accent: "text-gold", ring: "border-gold/30" },
  { title: "Intelligence", href: "/intelligence", icon: Sparkles, accent: "text-gold", ring: "border-gold/30" },
  { title: "Care", href: "/care", icon: Wrench, accent: "text-emerald-400", ring: "border-emerald-500/30" },
];

export default function AgentPage() {
  return (
    <div>
      {/* ── Module Badge (back to platform) ── */}
      <div className="fixed top-36 sm:top-40 left-4 sm:left-6 z-50">
        <Link
          href="/"
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
        imagePosition="object-top"
        backgroundAlt="OpenHouse Agent hero, voice-first AI colleague for Irish estate and letting agents"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
            <Headphones className="w-4 h-4 text-gold" aria-hidden="true" />
            <span className="text-sm font-medium text-gold">Agent Module</span>
          </div>
        }
        title={
          <>
            A colleague who works at the speed of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
              voice
            </span>
            .
          </>
        }
        subtitle="OpenHouse Agent listens between viewings, drafts the email, schedules the follow-up, pulls the report. You stay in your day. The admin stops piling up."
        primaryCta={{ href: "#try-it", label: "Try the voice prompt" }}
        secondaryCta={{ href: "/contact", label: "Book a Demo" }}
      >
        <AgentFloatingCards />
      </ModuleHero>

      {/* ── 2. Try It Widget ── */}
      <section
        id="try-it"
        className="relative py-20 sm:py-24 bg-carbon scroll-mt-32"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.03] via-transparent to-transparent" aria-hidden="true" />
        <Container>
          <div className="max-w-3xl mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              Try It
            </p>
            <h2 className="text-[28px] sm:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight mb-4">
              Try a prompt. No sign-up.
            </h2>
            <p className="text-[17px] sm:text-lg text-porcelain/70 leading-relaxed max-w-2xl">
              This is the actual flow Agent uses on the job. Voice in. Draft out. You approve before anything sends.
            </p>
          </div>

          <AgentTryItWidget />
        </Container>
      </section>

      {/* ── 3. The Money Shot ── */}
      <section className="relative py-24 sm:py-32 bg-carbon overflow-hidden">
        {/* Heavier gold halo for the peak moment */}
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.06] via-transparent to-gold/[0.04]" aria-hidden="true" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1100px] max-h-[1100px] rounded-full bg-gold/[0.04] blur-[120px]" aria-hidden="true" />
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              The Moment
            </p>
            <h2 className="text-[34px] sm:text-5xl lg:text-6xl font-bold text-white font-heading leading-[1.05] mb-6">
              Voice in. Draft out. Day back.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
              The work that used to take an hour at the desk happens in twenty seconds in the car. Same quality of email. Same tone. Same details. You just don&rsquo;t have to type it.
            </p>
          </div>

          {/* Split: iPhone mock + draft drawer */}
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-10 lg:gap-14 items-center">
              {/* iPhone mock */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="absolute -inset-8 bg-gradient-to-br from-gold/30 via-amber-500/10 to-gold/30 rounded-[60px] blur-3xl" aria-hidden="true" />
                <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] rounded-[48px] bg-neutral-900 border-[10px] border-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10" aria-hidden="true" />
                  {/* Screen */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black p-6 pt-12 flex flex-col">
                    <div className="flex items-center justify-between text-[11px] text-porcelain/40 mb-8">
                      <span>9:41</span>
                      <span className="font-semibold">Agent</span>
                      <span>100%</span>
                    </div>

                    {/* Transcribed instruction */}
                    <div className="px-2 mb-8">
                      <p className="text-[10px] uppercase tracking-wider text-gold/80 font-semibold mb-2">
                        Heard you say
                      </p>
                      <p className="text-[15px] sm:text-[16px] text-porcelain leading-relaxed">
                        &ldquo;Reach out to number 3 in &Aacute;rdan View, ask if they&rsquo;ve picked their kitchen.&rdquo;
                      </p>
                    </div>

                    {/* Waveform */}
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <div className="flex items-end gap-1 h-24 mb-8" aria-hidden="true">
                        {Array.from({ length: 28 }).map((_, i) => {
                          const heights = [30, 55, 80, 60, 95, 70, 100, 55, 85, 40, 75, 50, 90, 65];
                          const h = heights[i % heights.length];
                          return (
                            <span
                              key={i}
                              className="w-1 rounded-full bg-gradient-to-t from-gold/40 to-gold"
                              style={{ height: `${h}%`, animation: `agent-wave 1.4s ease-in-out ${i * 0.05}s infinite` }}
                            />
                          );
                        })}
                      </div>

                      {/* Big mic */}
                      <div className="relative">
                        <span className="absolute inset-0 rounded-full bg-gold/30 motion-safe:animate-ping" aria-hidden="true" />
                        <div className="relative w-24 h-24 rounded-full bg-gold flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.45)]">
                          <Mic className="w-10 h-10 text-carbon" strokeWidth={2.4} aria-hidden="true" />
                        </div>
                      </div>
                      <p className="text-[12px] text-porcelain/50 mt-4">Listening</p>
                    </div>

                    {/* Home indicator */}
                    <div className="mx-auto w-32 h-1 bg-porcelain/30 rounded-full mt-4" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Draft drawer */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-transparent to-gold/20 rounded-3xl blur-2xl" aria-hidden="true" />
                <div className="relative rounded-2xl border border-gold/30 bg-neutral-900/95 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-gold" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-gold font-semibold">
                          Draft ready
                        </p>
                        <p className="text-sm text-porcelain/60">
                          Awaiting your approval
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] text-porcelain/40">
                      Drafted in 4s
                    </span>
                  </div>

                  <div className="space-y-3 pb-5 border-b border-white/5">
                    <div className="flex gap-3 text-[13px]">
                      <span className="text-porcelain/40 w-14 flex-shrink-0">To</span>
                      <span className="text-porcelain">
                        Conor Ryan, No. 3 &Aacute;rdan View
                      </span>
                    </div>
                    <div className="flex gap-3 text-[13px]">
                      <span className="text-porcelain/40 w-14 flex-shrink-0">Subject</span>
                      <span className="text-porcelain font-medium">
                        Kitchen selection for No. 3 &Aacute;rdan View
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 py-5">
                    <p className="text-[15px] sm:text-base text-porcelain/85 leading-relaxed">
                      Hi Conor, hope you&rsquo;re keeping well.
                    </p>
                    <p className="text-[15px] sm:text-base text-porcelain/85 leading-relaxed">
                      Just checking in on the kitchen selection for No. 3 &Aacute;rdan View. The developer needs the order placed by Friday to keep your unit on schedule for the September handover. The brochure with the three finish options is attached.
                    </p>
                    <p className="text-[15px] sm:text-base text-porcelain/85 leading-relaxed">
                      Happy to walk you through any of them on a call. Otherwise, reply here with the option you&rsquo;d like and I&rsquo;ll lock it in for you.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 min-h-[48px] px-6 rounded-full bg-gold text-carbon text-sm font-semibold hover:scale-[1.02] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
                    >
                      <CheckCheck className="w-4 h-4" aria-hidden="true" />
                      Approve and send
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 min-h-[48px] px-5 rounded-full border border-white/15 text-sm text-porcelain hover:border-gold/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 min-h-[48px] px-5 rounded-full border border-white/10 text-sm text-porcelain/60 hover:text-porcelain hover:border-white/25 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      Discard
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <style>{`
          @keyframes agent-wave {
            0%, 100% { transform: scaleY(0.45); }
            50% { transform: scaleY(1); }
          }
          @media (prefers-reduced-motion: reduce) {
            .motion-safe\\:animate-ping { animation: none !important; }
          }
        `}</style>
      </section>

      {/* ── 4. Before / After Day ── */}
      <section className="relative py-24 bg-carbon">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              A Day in the Life
            </p>
            <h2 className="text-[28px] sm:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight">
              A Tuesday, before and after.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Before */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-porcelain/50 font-semibold mb-6">
                Tuesday today
              </p>
              <ul className="space-y-5">
                {beforeDay.map((slot) => (
                  <li
                    key={slot.time}
                    className="flex gap-4 sm:gap-5 border-b border-white/5 pb-5 last:border-0 last:pb-0"
                  >
                    <span className="font-mono text-[13px] text-porcelain/45 w-14 flex-shrink-0 pt-0.5">
                      {slot.time}
                    </span>
                    <p className="text-[17px] text-porcelain/80 leading-relaxed">
                      {slot.line}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="rounded-2xl border border-gold/25 bg-gradient-to-b from-gold/[0.05] to-transparent p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-6">
                Tuesday with Agent
              </p>
              <ul className="space-y-5">
                {afterDay.map((slot) => (
                  <li
                    key={slot.time}
                    className="flex gap-4 sm:gap-5 border-b border-white/5 pb-5 last:border-0 last:pb-0"
                  >
                    <span className="font-mono text-[13px] text-gold/80 w-14 flex-shrink-0 pt-0.5">
                      {slot.time}
                    </span>
                    <p className="text-[17px] text-porcelain leading-relaxed">
                      {slot.line}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-[18px] sm:text-xl text-porcelain mt-12 max-w-2xl mx-auto leading-relaxed">
            The point is not to do more. The point is to leave at six.
          </p>
        </Container>
      </section>

      {/* ── 5. How It Works ── */}
      <section className="relative py-24 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" aria-hidden="true" />
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              How It Works
            </p>
            <h2 className="text-[28px] sm:text-4xl font-bold text-white font-heading leading-tight">
              Three steps, no curve.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-gold/30 hover:bg-gold/[0.03] transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-gold" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-mono text-porcelain/40">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 font-heading">
                  {step.title}
                </h3>
                <p className="text-[17px] text-porcelain/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 6. What It Does ── */}
      <section className="relative py-24 bg-porcelain">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-4 font-semibold">
              What It Does
            </p>
            <h2 className="text-[28px] sm:text-4xl font-bold text-carbon font-heading leading-tight">
              Four jobs, off your plate.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 sm:p-8 rounded-2xl border border-carbon/10 bg-white hover:border-amber-600/40 hover:shadow-[0_15px_40px_-15px_rgba(212,175,55,0.3)] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-amber-700" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-carbon mb-3 font-heading">
                  {f.title}
                </h3>
                <p className="text-[17px] text-carbon/70 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 7. Built For You (personas) ── */}
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
                className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-gold/30 hover:bg-gold/[0.03] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-gold" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 font-heading">
                  {p.title}
                </h3>
                <p className="text-[17px] text-porcelain/70 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 8. Quiet Trust Callout ── */}
      <section className="relative py-24 bg-porcelain">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[26px] sm:text-3xl lg:text-[32px] font-bold text-carbon font-heading leading-tight mb-6">
              You stay in control of everything that leaves your name.
            </h2>
            <p className="text-[18px] sm:text-lg text-carbon/75 leading-relaxed">
              Every email, viewing confirmation, and renewal letter sits in a drawer until you tap Approve. Voice doesn&rsquo;t override that. The drawer is not a limitation. It&rsquo;s the part of the design that makes the rest of it possible to trust.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 9. Live Today + Demo CTA (peak-end) ── */}
      <section className="relative py-28 sm:py-36 bg-carbon overflow-hidden">
        {/* Watermark and halo */}
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.04] via-transparent to-gold/[0.06]" aria-hidden="true" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-gold/[0.05] blur-[140px]" aria-hidden="true" />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[700px] opacity-[0.04]"
          aria-hidden="true"
        >
          <div className="aspect-square rounded-full border border-gold/30" />
        </div>

        <Container>
          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-8">
              <span className="w-2 h-2 bg-gold rounded-full motion-safe:animate-pulse" aria-hidden="true" />
              <span className="text-sm font-medium text-gold">Live today</span>
            </div>

            <h2 className="text-[34px] sm:text-5xl lg:text-[64px] font-bold text-white font-heading leading-[1.05] mb-6">
              Live in agents&rsquo; pockets today.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed max-w-2xl mx-auto mb-10">
              Agent runs on iOS and Android. Voice-first on the road. Full keyboard at the desk. We ship new features continuously based on what real agents tell us they need.
            </p>

            <div className="flex flex-col items-center gap-6">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 min-h-[64px] px-10 sm:px-14 py-5 text-lg sm:text-xl font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(212,175,55,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-carbon"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-gold via-amber-400 to-gold" aria-hidden="true" />
                <span className="relative z-10 text-carbon flex items-center gap-3">
                  Book a Demo
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>

              <div className="flex flex-col items-center gap-3 pt-2">
                <span className="text-xs uppercase tracking-[0.25em] text-porcelain/40 font-semibold">
                  Or get the app
                </span>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="/contact"
                    aria-label="Download Agent on the App Store"
                    className="inline-flex items-center gap-3 min-h-[56px] px-5 py-3 rounded-2xl border border-white/15 bg-black/40 hover:border-gold/40 hover:bg-black/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <Apple className="w-7 h-7 text-porcelain" aria-hidden="true" />
                    <span className="text-left leading-tight">
                      <span className="block text-[11px] text-porcelain/60">
                        Download on the
                      </span>
                      <span className="block text-sm font-semibold text-porcelain">
                        App Store
                      </span>
                    </span>
                  </a>
                  <a
                    href="/contact"
                    aria-label="Get Agent on Google Play"
                    className="inline-flex items-center gap-3 min-h-[56px] px-5 py-3 rounded-2xl border border-white/15 bg-black/40 hover:border-gold/40 hover:bg-black/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <Smartphone className="w-7 h-7 text-porcelain" aria-hidden="true" />
                    <span className="text-left leading-tight">
                      <span className="block text-[11px] text-porcelain/60">
                        Get it on
                      </span>
                      <span className="block text-sm font-semibold text-porcelain">
                        Google Play
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 10. Platform strip ── */}
      <section className="relative py-20 bg-porcelain">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-[24px] sm:text-3xl font-bold text-carbon font-heading mb-4">
              Part of the OpenHouse platform.
            </h2>
            <p className="text-[17px] sm:text-lg text-carbon/70 leading-relaxed">
              Developers run the dashboard. Residents get the homeowner app. Installers get Care. Agents get Agent. Same data, different surfaces.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {platformModules.map((mod) => (
              <Link
                key={mod.title}
                href={mod.href}
                className={`group flex items-center gap-3 min-h-[64px] px-4 py-3 rounded-2xl border border-carbon/10 bg-white hover:bg-amber-50 hover:border-amber-600/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold`}
              >
                <span
                  className={`w-9 h-9 rounded-xl bg-carbon/[0.04] flex items-center justify-center flex-shrink-0`}
                >
                  <mod.icon className={`w-4 h-4 ${mod.accent}`} aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-carbon">
                  {mod.title}
                </span>
                <ArrowRight className="w-4 h-4 text-carbon/40 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
