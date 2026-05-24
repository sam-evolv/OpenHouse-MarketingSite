import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { PlatformFloatingCards } from "@/components/hero/cards/PlatformCards";
import { MoneyShot } from "@/components/property-assistant/scenes";
import heroBackground from "@/attached_assets/stock_images/platform_aerial_network.png";
import developerDashboard from "@/attached_assets/stock_images/developer_dashboard.png";
import communicationsHub from "@/attached_assets/stock_images/communications_hub.png";
import homeownersManagement from "@/attached_assets/stock_images/homeowners_management.png";
import { ScreenshotLightbox } from "@/components/ui/ScreenshotLightbox";
import {
  ArrowRight,
  X,
  LayoutDashboard,
  Smartphone,
  Headphones,
  Sparkles,
  LifeBuoy,
  Send,
  Users,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "OpenHouse Ai - The Developer Operating System",
  description:
    "One platform for every stage of residential property development. Two products, the Developer Dashboard for your team and the Property Assistant for every resident, plus Agent, Intelligence, and Care.",
};

/* The two main products, side by side: the developer-facing control room and
   the resident-facing app. This is the beat that teaches the simplified map. */
const twoProducts = [
  {
    icon: LayoutDashboard,
    label: "For developers",
    title: "Developer Dashboard",
    lines: [
      "The control room for everything you build.",
      "Live pipeline, documents, handover, compliance, residents, reports.",
      "Works for build-to-sell, build-to-rent, and student accommodation.",
    ],
    href: "/developer-dashboard",
    cta: "See the Developer Dashboard",
  },
  {
    icon: Smartphone,
    label: "For residents",
    title: "Property Assistant",
    lines: [
      "The app every buyer and resident gets in their pocket.",
      "Documents, manuals, walkthroughs, and an AI that answers questions from text or photos.",
      "Available the moment they pick up the keys.",
    ],
    href: "/property-assistant",
    cta: "See the Property Assistant",
  },
];

/* The three specialist tools, at smaller weight than the two main products. */
const specialists = [
  {
    icon: Headphones,
    title: "Agent",
    body: "Voice-first AI for estate and letting agents.",
    href: "/agent",
    cta: "See Agent",
  },
  {
    icon: Sparkles,
    title: "Intelligence",
    body: "Ask anything across your portfolio, get the answer with sources.",
    href: "/intelligence",
    cta: "See Intelligence",
  },
  {
    icon: LifeBuoy,
    title: "Care",
    body: "Aftercare AI for renewable energy installers.",
    href: "/care",
    cta: "See Care",
  },
];

/* Verified Irish-market context. Every number is sourced in the footnote
   beneath the strip (see VERIFIED-STATS-REPLACEMENTS.md). */
const marketStats = [
  { value: "36,284", unit: "new homes", label: "Completed in Ireland in 2025" },
  { value: "240,964", unit: "tenancies", label: "Registered with the RTB" },
  {
    value: "3,609",
    unit: "heat pumps",
    label: "Installed under SEAI schemes in 2024",
  },
];

const replacements = [
  "Excel Spreadsheets",
  "WhatsApp Groups",
  "Email Chains",
  "Paper Folders",
  "Phone Calls",
];

export default function PlatformPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <ModuleHero
        backgroundImage={heroBackground}
        accentColor="gold"
        imagePosition="object-top"
        backgroundAlt="Modern apartment lobby with warm golden light"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gold">
              Live on a 1,000-home pipeline at Longview Estates Cork
            </span>
          </div>
        }
        title={
          <>
            One platform for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
              every stage
            </span>{" "}
            of property development
          </>
        }
        subtitle="Replace the spreadsheets, WhatsApp groups, and paper folders. OpenHouse gives developers a single system from first sale to long-term resident engagement."
        primaryCta={{ href: "/contact", label: "Book a Demo" }}
        secondaryCta={{ href: "#products", label: "See the products" }}
      >
        <PlatformFloatingCards />
      </ModuleHero>

      {/* ── Two products. One platform. (the simplification beat) ── */}
      <section
        id="products"
        className="relative overflow-hidden bg-carbon py-24"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.07] via-transparent to-gold/[0.05]" />
        <Container>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              The platform
            </p>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Two products. One platform.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-porcelain/70">
              Both connect to the same data. Your residents and your team see
              different views of the same source of truth.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {twoProducts.map((product) => (
              <div
                key={product.title}
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-gold/30 hover:bg-gold/[0.04] motion-safe:hover:-translate-y-1 sm:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10">
                  <product.icon className="h-7 w-7 text-gold" />
                </div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {product.label}
                </p>
                <h3 className="mb-5 font-heading text-2xl font-bold text-white">
                  {product.title}
                </h3>
                <ul className="flex-1 space-y-2.5 text-[17px] leading-relaxed text-porcelain/70">
                  {product.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <Link
                  href={product.href}
                  className="mt-7 inline-flex min-h-[48px] items-center gap-2 text-base font-semibold text-gold transition-all hover:gap-3"
                >
                  {product.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── What You're Replacing ── */}
      <section className="relative py-24 bg-carbon">
        <Container>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              Before OpenHouse
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              What you&apos;re replacing
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {replacements.map((item) => (
              <div
                key={item}
                className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/[0.02] hover:border-red-500/30 transition-all duration-300"
              >
                <X className="w-4 h-4 text-red-400/60 group-hover:text-red-400 transition-colors" />
                <span className="text-porcelain/60 group-hover:text-porcelain/40 line-through decoration-red-400/40 transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Journey Flow ── */}
      <section className="relative py-24 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />
        <Container>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              The Developer Journey
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              From first sale to long-term insight
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0">
            {["Sell", "Build", "Handover", "Learn"].map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03]">
                  <span className="w-7 h-7 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-xs font-bold text-gold">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-porcelain">{step}</span>
                </div>
                {i < 3 && (
                  <ArrowRight className="hidden md:block w-5 h-5 text-white/20 mx-3" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── See Inside the Platform ── */}
      <section className="relative py-24 bg-carbon overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.03] via-transparent to-transparent" />
        <Container>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              See Inside
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-4">
              This is what your dashboard looks like
            </h2>
            <p className="text-lg text-porcelain/60 max-w-2xl mx-auto">
              No mockups, no concepts. This is the actual platform running on
              live developments today. Click any screenshot to view full size.
            </p>
          </div>

          {/* Dashboard - full width */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gold/20 border border-gold/30 flex items-center justify-center">
                <LayoutDashboard className="w-4 h-4 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Developer Command Centre
              </h3>
            </div>
            <p className="text-sm text-porcelain/60 max-w-2xl mb-6">
              Log in and instantly see total units, registrations, active
              homeowners, messages, and documents - with quick actions to add
              units, send emails, or export reports.
            </p>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-amber-500/5 to-gold/20 rounded-3xl blur-2xl" />
              <div className="relative">
                <ScreenshotLightbox
                  src={developerDashboard}
                  alt="OpenHouse developer dashboard showing total units, registrations, active homeowners, messages, recent activity feed, and quick links"
                />
              </div>
            </div>
          </div>

          {/* Communications Hub - full width */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gold/20 border border-gold/30 flex items-center justify-center">
                <Send className="w-4 h-4 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Communications Hub
              </h3>
            </div>
            <p className="text-sm text-porcelain/60 max-w-2xl mb-6">
              Send emails, push notifications, and bulk messages to homeowners.
              Track delivery, open rates, and failed sends - all in one place.
            </p>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/15 via-transparent to-gold/15 rounded-3xl blur-2xl" />
              <div className="relative">
                <ScreenshotLightbox
                  src={communicationsHub}
                  alt="Communications Hub showing messages sent, scheduled, failed, team members online, 78% open rate, recent communications timeline, and quick actions"
                />
              </div>
            </div>
          </div>

          {/* Homeowner Management - full width */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gold/20 border border-gold/30 flex items-center justify-center">
                <Users className="w-4 h-4 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Homeowner Management
              </h3>
            </div>
            <p className="text-sm text-porcelain/60 max-w-2xl mb-6">
              Every resident across every development. Filter by status,
              generate QR codes for NFC access, and see who&apos;s acknowledged
              their portal at a glance.
            </p>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/15 via-transparent to-gold/15 rounded-3xl blur-2xl" />
              <div className="relative">
                <ScreenshotLightbox
                  src={homeownersManagement}
                  alt="Homeowners management showing total residents, acknowledged and pending status, filterable by development, private/social, sale status, with QR code downloads"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Verified Irish-market context (sourced) ── */}
      <section className="relative py-24 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              Live in the market
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              A market this scale runs on the tools we replace
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto text-center">
            {marketStats.map((stat) => (
              <div key={stat.value}>
                <p className="text-4xl sm:text-5xl font-bold text-gold font-heading">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-porcelain">
                  {stat.unit}
                </p>
                <p className="mt-1 text-sm text-porcelain/60">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-center text-xs leading-relaxed text-porcelain/40">
            Sources: CSO New Dwelling Completions Q4 2025. RTB Q4 2024 Profile of
            the Register. SEAI Record Year of Progress 2024.
          </p>
        </Container>
      </section>

      {/* ── Flagship Property Assistant money shot (the visual peak) ── */}
      <section className="relative overflow-hidden bg-carbon py-24 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.06] via-transparent to-gold/[0.04]" />
        <Container>
          <div className="relative mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              The main event
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Now it sees
              <br />
              what your residents see.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-porcelain/70">
              A resident takes a photo. The Property Assistant reads the image,
              identifies the exact equipment, checks it against the manuals you
              uploaded for that home, and walks them through the fix. When it
              cannot resolve something itself, it raises a snag to your customer
              care team automatically. Not a generic chatbot. The actual help,
              for the actual home, from the actual photo.
            </p>
          </div>

          <MoneyShot />

          <div className="mt-14 text-center">
            <Link
              href="/property-assistant"
              className="group inline-flex min-h-[48px] items-center gap-2 text-base font-medium text-porcelain/80 transition-colors hover:text-gold"
            >
              See how the Property Assistant works
              <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ── Three specialist tools (smaller weight) ── */}
      <section className="relative overflow-hidden bg-carbon py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.07] via-transparent to-gold/[0.05]" />
        <Container>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Specialist tools
            </p>
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Three specialist tools that fit the same platform.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-porcelain/70">
              Built for the people working alongside you on every scheme.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-3">
            {specialists.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="group relative flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:border-gold/20 hover:bg-gold/[0.03] motion-safe:hover:-translate-y-1"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/10">
                  <tool.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-white">
                  {tool.title}
                </h3>
                <p className="flex-1 text-[17px] leading-relaxed text-porcelain/70">
                  {tool.body}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-all group-hover:gap-2.5">
                  {tool.cta}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Built by a Developer ── */}
      <section className="relative py-24 bg-carbon">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              Why OpenHouse
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-heading">
              Built by a developer, for developers.
            </h2>
            <p className="text-lg text-porcelain/70 leading-relaxed">
              OpenHouse was built by Sam Donworth, founder of Longview Estates
              Cork, while running a 1,000-home development pipeline. Every
              workflow exists because it was missing from a real developer&apos;s
              day. We use it on our own schemes.
            </p>
          </div>
        </Container>
      </section>

      {/* ── CTA (peak-end) ── */}
      <section className="relative py-24 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-t from-gold/[0.04] to-transparent" />
        <Container>
          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-heading">
              See it running on a live development
            </h2>
            <p className="text-lg text-porcelain/70 mb-8">
              Book a 20-minute walkthrough and we&apos;ll show you OpenHouse
              running on real homes today.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex min-h-[48px] items-center justify-center gap-2 px-10 py-5 text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-carbon"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gold via-amber-500 to-gold" />
              <span className="relative z-10 text-carbon flex items-center gap-2">
                Book a Demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
