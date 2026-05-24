import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { PlatformFloatingCards } from "@/components/hero/cards/PlatformCards";
import heroBackground from "@/attached_assets/stock_images/platform_aerial_network.png";
import developerDashboard from "@/attached_assets/stock_images/developer_dashboard.png";
import communicationsHub from "@/attached_assets/stock_images/communications_hub.png";
import homeownersManagement from "@/attached_assets/stock_images/homeowners_management.png";
import { ScreenshotLightbox } from "@/components/ui/ScreenshotLightbox";
import {
  Smartphone,
  Sparkles,
  LifeBuoy,
  ArrowRight,
  X,
  LayoutDashboard,
  Send,
  Users,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "OpenHouse Ai - The Developer Operating System",
  description:
    "One platform for every stage of residential property development. The Property Assistant for your residents, the Developer Dashboard for your team, with Intelligence and Care alongside.",
};

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
              Live on active developments today
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

      {/* ── Two products. One platform. ── */}
      <section id="products" className="relative py-24 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.04] via-transparent to-transparent" />
        <Container>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              The platform
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-4">
              Two products. One platform.
            </h2>
            <p className="text-lg text-porcelain/60 leading-relaxed">
              Both connect to the same data. Your residents and your team see
              different views of the same source of truth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Developer Dashboard */}
            <Link
              href="/developer-dashboard"
              className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-gold/30 hover:bg-gold/[0.03] hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5">
                <LayoutDashboard className="w-6 h-6 text-gold" />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold/70 mb-2 font-semibold">
                For developers
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                Developer Dashboard
              </h3>
              <ul className="space-y-2 text-sm text-porcelain/70 leading-relaxed mb-6">
                <li>The control room for everything you build.</li>
                <li>
                  Live pipeline, documents, handover, compliance, residents, and
                  reports.
                </li>
                <li>
                  Works for build-to-sell, build-to-rent, and student
                  accommodation.
                </li>
              </ul>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                See the Developer Dashboard
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            {/* Property Assistant */}
            <Link
              href="/property-assistant"
              className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-gold/30 hover:bg-gold/[0.03] hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5">
                <Smartphone className="w-6 h-6 text-gold" />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold/70 mb-2 font-semibold">
                For residents
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                Property Assistant
              </h3>
              <ul className="space-y-2 text-sm text-porcelain/70 leading-relaxed mb-6">
                <li>The app every buyer and resident gets in their pocket.</li>
                <li>
                  Documents, manuals, walkthroughs, and an AI that answers
                  questions from text or photos.
                </li>
                <li>Available the moment they pick up the keys.</li>
              </ul>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                See the Property Assistant
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* ── Two specialist tools ── */}
      <section className="relative py-24 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />
        <Container>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-3">
              Two specialist tools that fit the same platform.
            </h2>
            <p className="text-base text-porcelain/60 leading-relaxed">
              Built for the people working alongside you on every scheme.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {/* Intelligence */}
            <Link
              href="/intelligence"
              className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-500 hover:border-gold/20 hover:bg-gold/[0.03] hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1.5 font-heading">
                Intelligence
              </h3>
              <p className="text-sm text-porcelain/60 leading-relaxed mb-4">
                Ask anything across your portfolio, get the answer with sources.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                See Intelligence
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            {/* Care */}
            <Link
              href="/care"
              className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-500 hover:border-gold/20 hover:bg-gold/[0.03] hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                <LifeBuoy className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1.5 font-heading">
                Care
              </h3>
              <p className="text-sm text-porcelain/60 leading-relaxed mb-4">
                Aftercare AI for renewable energy installers.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                See Care
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
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

      {/* ── Stats ── */}
      <section className="relative py-24 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: "Live", label: "On Real Homes", suffix: "" },
              { value: "24/7", label: "AI Support", suffix: "" },
              { value: "1–2s", label: "Response Time", suffix: "" },
              { value: "100%", label: "AI Resolution", suffix: "" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold text-gold font-heading">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="text-sm text-porcelain/60 mt-1">{stat.label}</p>
              </div>
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
              Built by a developer, for developers
            </h2>
            <p className="text-lg text-porcelain/70 leading-relaxed mb-4">
              OpenHouse wasn&apos;t designed in a lab. It was built on live
              developments in Cork City because the founder needed it
              for his own builds.
            </p>
            <p className="text-lg text-porcelain/70 leading-relaxed">
              Every feature exists because it solved a real problem - not because
              it looked good on a pitch deck.
            </p>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
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
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
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
