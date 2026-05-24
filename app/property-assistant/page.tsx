import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { HeroPhone, MoneyShot, ScenarioPhones } from "@/components/property-assistant/scenes";
import { DashboardGlimpse } from "@/components/property-assistant/DashboardGlimpse";
import heroBackground from "@/attached_assets/stock_images/modern_luxury_apartm_7dec65c9.jpg";
import {
  Smartphone,
  ChevronLeft,
  Home,
  Cog,
  FileText,
  Video,
  Bell,
  Upload,
  Settings,
  QrCode,
  ShieldCheck,
  ArrowRight,
  LayoutDashboard,
  BarChart3,
  HeartHandshake,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Property Assistant - Every Home Gets Its Own | OpenHouse Ai",
  description:
    "Trained on the specific manuals, certs, warranties, and walkthroughs for one specific home. Residents type, residents take photos, and the Property Assistant looks, understands, and answers. Live the moment they pick up the keys.",
};

const knows = [
  {
    icon: Cog,
    title: "Every appliance in this home",
    body: "The Mitsubishi Ecodan heat pump, the solar panels and battery, the kitchen appliances, the EV charger. The Property Assistant knows exactly what is installed, where it lives, and how to self-diagnose a fault.",
  },
  {
    icon: FileText,
    title: "Every document for this home",
    body: "HomeBond cert, BER report at A2, BCAR completion, fire safety, kitchen warranty, and 12 appliance manuals indexed. The Property Assistant has them all and can show any of them on request.",
  },
  {
    icon: Video,
    title: "Every walkthrough your team recorded",
    body: "The 60-second video showing where the stopcock is. The heat pump filter clean. The kitchen orientation tour. Loaded into the assistant for the home they were filmed in.",
  },
  {
    icon: Bell,
    title: "Every reminder this home needs",
    body: "Annual heat pump service due in 47 days. BER valid until 2036. The Property Assistant notifies the resident at the right time and offers to book the right contractor.",
  },
];

const steps = [
  {
    icon: Upload,
    title: "Your team uploads, once.",
    body: "Manuals, certs, warranties, and the walkthroughs your team records for each unit type. Most of this already lives somewhere in your operation. The Property Assistant ingests it once per unit type.",
  },
  {
    icon: Settings,
    title: "Configured for the actual home.",
    body: "For each unit, the Property Assistant inherits the unit type's library and adds the home-specific details: the buyer's name, the actual appliance serials, the BER cert for this address, the warranty for this kitchen.",
  },
  {
    icon: QrCode,
    title: "Live at handover.",
    body: "You hand the buyer a QR code at handover. They scan it. Their phone is linked to their home's Property Assistant. From that moment on, it works.",
  },
];

const products = [
  {
    icon: LayoutDashboard,
    title: "Developer Dashboard",
    blurb: "Your control room for every scheme.",
    href: "/developer-dashboard",
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

export default function PropertyAssistantPage() {
  return (
    <main>
      {/* ── Module Badge ── */}
      <div className="fixed top-36 sm:top-40 left-4 sm:left-6 z-50">
        <Link
          href="/"
          className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-medium backdrop-blur-md hover:bg-gold/20 transition-all duration-300 min-h-[48px] sm:min-h-0"
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
        backgroundAlt="A bright, modern living room in a newly handed-over home"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
            <Smartphone className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">Property Assistant</span>
          </div>
        }
        title={
          <>
            Every home gets its{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
              own
            </span>{" "}
            assistant.
          </>
        }
        subtitle="Trained on the specific manuals, certs, warranties, and walkthroughs for one specific home. Residents ask in their own words. The Property Assistant understands, answers, and shows the source it answered from. Live the moment they pick up the keys."
        primaryCta={{ href: "#the-moment", label: "See it in action" }}
        secondaryCta={{ href: "/contact", label: "Book a Demo" }}
      >
        <HeroPhone />
      </ModuleHero>

      {/* ── [2] The moment (money shot) ── */}
      <section
        id="the-moment"
        className="relative overflow-hidden bg-carbon py-24 sm:py-28"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.06] via-transparent to-gold/[0.04]" />
        <Container>
          <div className="relative mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              The moment
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Now it sees
              <br />
              what your residents see.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-porcelain/70">
              A resident takes a photo of the boiler, the heat pump display, a
              damaged tile, anything visual. The Property Assistant looks at the
              image, identifies the specific equipment, checks against the manuals
              you uploaded for this home, and walks them through the fix. Or raises
              a snag to your customer care team if it cannot.
            </p>
          </div>

          <MoneyShot />

          {/* Grounded, sourced context */}
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-sm leading-relaxed text-porcelain/70">
                Practically every new Irish home now uses a heat pump as its
                primary heating system, with oil and gas boilers no longer
                permitted in new builds. Equipment like this is exactly what
                generates the questions residents used to ring about.
              </p>
              <p className="mt-2 text-xs italic text-hint">
                Source: SEAI; oil and gas boilers are banned in new Irish builds
                under current building regulations.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── [3] What it knows (four-card grid) ── */}
      <section className="relative overflow-hidden bg-carbon py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.07] via-transparent to-gold/[0.05]" />
        <Container>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
              It knows this home,
              <br />
              not just any home.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-porcelain/70">
              Configured at handover from the documents your team has already
              gathered. Updated whenever you upload something new. Residents get
              answers that match their actual home, every time.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            {knows.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:border-gold/20 hover:bg-gold/[0.03]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/10">
                  <card.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-white">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-porcelain/70">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── [4] How residents use it (three scenarios) ── */}
      <section className="relative overflow-hidden bg-carbon py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
              The questions
              <br />
              their handover folder was supposed to answer.
            </h2>
          </div>
          <ScenarioPhones />
        </Container>
      </section>

      {/* ── [5] What developers get (the visibility loop) ── */}
      <section className="relative overflow-hidden bg-carbon py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.07] via-transparent to-gold/[0.05]" />
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              For the developer
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
              You see every snag.
              <br />
              You learn from every question.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-porcelain/70">
              Two streams. Escalated snags come to you with full context: names,
              units, photos, history. General questions are anonymised and
              aggregated, so you see patterns across schemes without seeing what
              any individual resident asks day to day. The first solves problems.
              The second improves your next scheme.
            </p>
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-gold/15 via-transparent to-gold/15 blur-2xl" />
            <div className="relative">
              <DashboardGlimpse />
            </div>
          </div>
        </Container>
      </section>

      {/* ── [6] Configured at handover (three steps) ── */}
      <section className="relative overflow-hidden bg-carbon py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.04] via-transparent to-transparent" />
        <Container>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
              From upload to live, in one workflow.
            </h2>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:border-gold/20 hover:bg-gold/[0.03]"
              >
                <span className="absolute right-6 top-6 font-heading text-4xl font-bold text-white/[0.06]">
                  {i + 1}
                </span>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/10">
                  <step.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mb-3 font-heading text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-porcelain/70">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── [7] Doesn't make things up (trust line) ── */}
      <section className="relative overflow-hidden bg-carbon py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.06] via-transparent to-gold/[0.05]" />
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/10">
              <ShieldCheck className="h-6 w-6 text-gold" />
            </div>
            <h2 className="mb-5 font-heading text-2xl font-bold text-white sm:text-3xl">
              The assistant doesn&apos;t make things up.
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-porcelain/70">
              Every answer comes from the documents your team uploaded for that
              specific home. If the assistant does not know, it says so and routes
              the question to your customer care team. No hallucinations, no fake
              confidence, no answers pulled from the wider internet. The resident
              either gets the right answer from the documents, or they get put
              through to a human.
            </p>
          </div>
        </Container>
      </section>

      {/* ── [8] Peak-end CTA ── */}
      <section className="relative overflow-hidden bg-carbon py-28">
        <div className="absolute inset-0 bg-gradient-to-t from-gold/[0.08] to-transparent" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2 select-none font-heading text-[18rem] font-bold leading-none text-white/[0.02]"
        >
          OH
        </span>
        <Container>
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="mb-6 font-heading text-3xl font-bold text-white sm:text-5xl">
              See it configured for one of your homes.
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-porcelain/70">
              A demo takes thirty minutes. Bring the documents you would hand over
              for one of your typical units and we will show you exactly what the
              resident&apos;s experience would look like.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex min-h-[48px] items-center justify-center gap-2 overflow-hidden rounded-full px-10 py-5 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-carbon"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gold via-amber-500 to-gold" />
              <span className="relative z-10 flex items-center gap-2 text-carbon">
                Book a Demo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
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

      {/* ── [9] Platform strip ── */}
      <section className="relative overflow-hidden bg-carbon py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />
        <Container>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              The rest of the platform.
            </p>
            <p className="text-lg leading-relaxed text-porcelain/70">
              The Property Assistant is what your residents get. The Developer
              Dashboard is your control room. Intelligence and Care are
              specialist tools for the partners working alongside you.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/20 hover:bg-gold/[0.03]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/10">
                  <product.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="mb-1.5 font-heading text-base font-semibold text-white">
                  {product.title}
                </h3>
                <p className="text-xs leading-relaxed text-porcelain/60">
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
