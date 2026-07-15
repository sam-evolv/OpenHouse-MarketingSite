import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { PlatformFloatingCards } from "@/components/hero/cards/PlatformCards";
import heroBackground from "@/attached_assets/stock_images/platform_aerial_network.png";
import {
  MessageSquare,
  House,
  Zap,
  Building2,
  ArrowRight,
  Check,
  ShieldCheck,
  Upload,
  CircleDollarSign,
  ThermometerSun,
} from "lucide-react";

export const metadata = {
  title: "OpenHouse Ai, The intelligence layer for modern homes",
  description:
    "OpenHouse gives every modern home a living model, a practical homeowner assistant, and a path to energy intelligence.",
};

const modules = [
  {
    title: "Home assistant",
    href: "/property-assistant",
    icon: MessageSquare,
    desc: "Answers grounded in the actual home, its documents, systems and warranties.",
    accent: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/30",
  },
  {
    title: "Living home model",
    href: "/developer-dashboard",
    icon: House,
    desc: "A structured record of what was built, what was installed and how the home changes over time.",
    accent: "text-blue-300",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
  },
  {
    title: "Energy intelligence",
    href: "/intelligence",
    icon: Zap,
    desc: "Explains what is happening in the home, why it is happening and what to do next.",
    accent: "text-emerald-300",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
  },
  {
    title: "Developer visibility",
    href: "/developer-dashboard",
    icon: Building2,
    desc: "Portfolio insight after handover, without turning homeowner data into surveillance.",
    accent: "text-violet-300",
    bg: "bg-violet-500/10",
    border: "border-violet-400/30",
  },
];

const everydayQuestions = [
  "Where is my stopcock?",
  "How do I reset the heat pump?",
  "What warranty covers this appliance?",
  "Can I hang a TV on this wall?",
  "Is this crack normal?",
  "Who installed this system?",
];

const developerOutcomes = [
  "Capture build context once, while it is still available.",
  "Give homeowners useful answers without adding another support queue.",
  "See recurring questions, documentation gaps and system issues across a portfolio.",
  "Build toward measurable energy guidance and optimisation over time.",
];

const trustLines = [
  { icon: ShieldCheck, title: "Consent before control.", body: "Advice first. Connected actions only within clear rules and overrides." },
  { icon: Upload, title: "Context at the source.", body: "The best time to make a home intelligent is while it is being built." },
  { icon: CircleDollarSign, title: "Useful before it is autonomous.", body: "The everyday assistant is the adoption layer. Energy intelligence is the expansion." },
];

export default function PlatformPage() {
  return (
    <div>
      <ModuleHero
        backgroundImage={heroBackground}
        accentColor="gold"
        imagePosition="object-top"
        backgroundAlt="Aerial view of a residential development at golden hour, connected lines suggesting a platform"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
            <span className="w-2 h-2 bg-gold rounded-full motion-safe:animate-pulse" />
            <span className="text-sm font-medium text-gold">Installed at construction. Useful for the life of the home.</span>
          </div>
        }
        title={
          <>
            The intelligence layer for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">modern homes.</span>
          </>
        }
        subtitle="OpenHouse gives every home a living model, a practical assistant for everyday questions, and a path to clearer, more efficient energy decisions."
        primaryCta={{ href: "#platform", label: "See how it works" }}
        secondaryCta={{ href: "/contact", label: "Book a Demo" }}
      >
        <PlatformFloatingCards />
      </ModuleHero>

      <section className="relative py-16 sm:py-20 bg-porcelain">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-5 font-semibold">The shift</p>
            <h2 className="text-[32px] sm:text-5xl font-bold text-carbon font-heading leading-tight mb-6">
              Modern homes are becoming energy systems. The software around them is still fragmented.
            </h2>
            <p className="text-[17px] sm:text-xl text-carbon/70 leading-relaxed max-w-3xl mx-auto">
              Smart meters show what happened. Manuals explain individual devices. Handover folders capture documents. OpenHouse connects the context so people can understand what is happening in the home and decide what to do next.
            </p>
          </div>
        </Container>
      </section>

      <section id="platform" className="relative py-24 sm:py-32 bg-carbon overflow-hidden scroll-mt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.06] via-transparent to-gold/[0.04]" aria-hidden="true" />
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">The platform</p>
            <h2 className="text-[32px] sm:text-5xl lg:text-[60px] font-bold text-white font-heading leading-[1.05] mb-6">
              One home model. Several useful surfaces.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed">
              The assistant is the interface. The living home model is the asset underneath it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {modules.map((mod) => (
              <Link
                key={mod.title}
                href={mod.href}
                className={`group p-6 sm:p-8 rounded-2xl border ${mod.border} ${mod.bg} backdrop-blur-sm hover:-translate-y-1 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl ${mod.bg} border ${mod.border} flex items-center justify-center flex-shrink-0`}>
                    <mod.icon className={`w-5 h-5 ${mod.accent}`} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 font-heading">{mod.title}</h3>
                    <p className="text-[15px] text-porcelain/70 leading-relaxed">{mod.desc}</p>
                  </div>
                </div>
                <span className={`mt-5 inline-flex items-center gap-1.5 text-xs font-semibold ${mod.accent}`}>
                  Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-24 bg-porcelain">
        <Container>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-700 mb-4 font-semibold">Useful from day one</p>
            <h2 className="text-[32px] sm:text-5xl font-bold text-carbon font-heading leading-tight mb-6">
              The assistant homeowners actually use.
            </h2>
            <p className="text-[17px] sm:text-xl text-carbon/70 leading-relaxed">
              Before OpenHouse helps optimise energy, it helps people live in the home they have just bought. Answers are grounded in the drawings, manuals, warranties, systems and build data for that home.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 max-w-5xl mx-auto items-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {everydayQuestions.map((question) => (
                <div key={question} className="p-5 rounded-2xl border border-carbon/10 bg-white text-carbon/85 text-[16px] leading-relaxed">
                  “{question}”
                </div>
              ))}
            </div>
            <div className="p-7 rounded-2xl bg-carbon text-porcelain">
              <ThermometerSun className="w-7 h-7 text-gold mb-5" aria-hidden="true" />
              <h3 className="text-2xl font-bold font-heading mb-4">Energy intelligence is the expansion.</h3>
              <p className="text-porcelain/70 leading-relaxed">
                The everyday property assistant creates the habit. The home model then makes energy guidance more accurate, more personal and more useful than a generic dashboard.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-24 sm:py-32 bg-carbon overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.04] via-transparent to-gold/[0.06]" aria-hidden="true" />
        <Container>
          <div className="relative max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-5 font-semibold">For developers</p>
            <h2 className="text-[32px] sm:text-5xl lg:text-[60px] font-bold text-white font-heading leading-[1.05] mb-8">
              Developers are not just the first customer. They are the source of truth.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/80 leading-relaxed">
              After construction, home context is fragmented and expensive to reconstruct. OpenHouse captures it while the home is being built, then turns it into a useful homeowner experience and portfolio-level insight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mt-14">
            {developerOutcomes.map((item) => (
              <div key={item} className="flex items-start gap-3 p-5 rounded-2xl border border-white/10 bg-white/[0.04]">
                <span className="w-6 h-6 rounded-md bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-gold" aria-hidden="true" strokeWidth={3} />
                </span>
                <span className="text-[15px] sm:text-base text-porcelain/80 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-20 bg-porcelain">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustLines.map((line) => (
              <div key={line.title} className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                  <line.icon className="w-5 h-5 text-amber-700" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[16px] font-semibold text-carbon leading-snug">{line.title}</p>
                  <p className="text-[14px] text-carbon/65 leading-relaxed mt-1">{line.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-28 sm:py-36 bg-carbon overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.05] via-transparent to-gold/[0.07]" aria-hidden="true" />
        <Container>
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-[32px] sm:text-5xl lg:text-[60px] font-bold text-white font-heading leading-[1.05] mb-6">
              See it on one of your own schemes.
            </h2>
            <p className="text-[17px] sm:text-xl text-porcelain/75 leading-relaxed max-w-2xl mx-auto mb-10">
              Bring the context from one development. We will show you how OpenHouse turns it into a more useful home experience and a clearer operating layer.
            </p>
            <Link href="/contact" className="group inline-flex items-center justify-center gap-3 min-h-[64px] px-10 sm:px-14 py-5 text-lg sm:text-xl font-semibold rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(212,175,55,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-carbon bg-gradient-to-r from-gold via-amber-400 to-gold text-carbon">
              Book a Demo <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <p className="text-sm text-porcelain/60 mt-5">
              Or email <a href="mailto:sam@openhouseai.ie" className="text-gold hover:text-amber-300 transition-colors">sam@openhouseai.ie</a> if you would rather start with a few questions.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
