import { Container } from "@/components/ui/container";
import { ModuleHero } from "@/components/hero/ModuleHero";
import { ChatReplayGrid } from "@/components/social-proof/ChatReplayGrid";
import { TrustVault } from "@/components/sections/TrustVault";
import { HandoverBadge } from "./HandoverBadge";
import heroBackground from "@/attached_assets/stock_images/modern_luxury_apartm_7dec65c9.jpg";
import {
  MessageSquare,
  ArrowRight,
  Shield,
  Brain,
  MapPin,
  Ruler,
  AlertTriangle,
  PhoneForwarded,
  QrCode,
  Languages,
  Clock,
  FileWarning,
  Sparkles,
  Heart,
  Search,
  Home,
  X,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Handover Module — AI Resident Portal | OpenHouse Ai",
  description:
    "Every home gets an AI assistant trained on its handover documentation. 24/7 answers, safety-first design, zero support calls.",
};

/* ── Compact data for visual sections ── */

const aiCapabilities = [
  {
    icon: Brain,
    title: "Trained on Your Docs",
    desc: "Every answer comes from your handover pack — not the internet.",
  },
  {
    icon: MapPin,
    title: "Google Places",
    desc: "\"Where's the nearest pharmacy?\" — answered with live directions.",
  },
  {
    icon: Ruler,
    title: "Room Dimensions",
    desc: "\"How big is my living room?\" — instant floor plan lookup.",
  },
  {
    icon: Clock,
    title: "Warranty Detection",
    desc: "AI checks if appliance issues are still under warranty.",
  },
  {
    icon: Languages,
    title: "Multi-Language",
    desc: "Residents chat in their own language. AI responds in kind.",
  },
  {
    icon: Search,
    title: "Session Memory",
    desc: "Remembers context within a conversation. No repeating yourself.",
  },
];

const safetyFeatures = [
  {
    icon: AlertTriangle,
    title: "Emergency Interception",
    desc: "Gas leak? Carbon monoxide? AI stops everything and shows emergency contacts immediately.",
  },
  {
    icon: Shield,
    title: "Hallucination Firewall",
    desc: "If the AI doesn't know, it says so. No made-up answers about your homes.",
  },
  {
    icon: PhoneForwarded,
    title: "Escalation Routing",
    desc: "Complex issues get routed to your team with full conversation context attached.",
  },
  {
    icon: FileWarning,
    title: "GDPR-First",
    desc: "EU data storage, no LLM training on resident data, full audit logs.",
  },
];

const replacements = [
  "Paper folders",
  "Support phone calls",
  "WhatsApp questions",
  "Lost manuals",
  "Repeated queries",
];

export default function HandoverPage() {
  return (
    <main>
      <HandoverBadge />

      {/* ── Hero ── */}
      <ModuleHero
        backgroundImage={heroBackground}
        accentColor="gold"
        backgroundAlt="Modern luxury apartment interior with warm lighting"
        badge={
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
            <MessageSquare className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">
              Handover Module
            </span>
          </div>
        }
        title={
          <>
            Every home gets its own{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
              AI assistant
            </span>
          </>
        }
        subtitle="Trained on your handover docs, floor plans, and development info. Residents get 24/7 answers. You get zero support calls."
        primaryCta={{ href: "/contact", label: "Book a Demo" }}
        secondaryCta={{ href: "#how-it-works", label: "See How It Works" }}
      />

      {/* ── What You're Replacing — compact pills ── */}
      <section className="relative py-16 bg-carbon">
        <Container>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {replacements.map((item) => (
              <div
                key={item}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] hover:border-red-500/30 transition-all duration-300"
              >
                <X className="w-3.5 h-3.5 text-red-400/60 group-hover:text-red-400 transition-colors" />
                <span className="text-sm text-porcelain/60 group-hover:text-porcelain/40 line-through decoration-red-400/40 transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── How It Works — 3-step flow ── */}
      <section id="how-it-works" className="relative py-24 bg-carbon">
        <Container>
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              Live in under 5 minutes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Upload your docs",
                desc: "Drag in your handover pack — specs, manuals, certs, plans. AI reads and indexes everything.",
              },
              {
                step: "2",
                title: "Residents scan & chat",
                desc: "NFC tag, QR code, or direct link. No app download needed — works in any browser.",
              },
              {
                step: "3",
                title: "AI answers, you relax",
                desc: "Residents get instant answers 24/7. You see analytics on what they're asking.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="relative p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
              >
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center mb-4">
                  <span className="text-sm font-bold text-gold">{s.step}</span>
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

      {/* ── AI In Action — existing ChatReplayGrid ── */}
      <section className="relative bg-carbon">
        <Container>
          <div className="text-center mb-2">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              See It In Action
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              Real conversations, real answers
            </h2>
          </div>
        </Container>
        <ChatReplayGrid />
      </section>

      {/* ── AI Capabilities — icon grid, minimal text ── */}
      <section className="relative py-24 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.02] via-transparent to-transparent" />
        <Container>
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              What The AI Can Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              Way more than a chatbot
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {aiCapabilities.map((c) => (
              <div
                key={c.title}
                className="flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-gold/20 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{c.title}</h3>
                  <p className="text-sm text-porcelain/60 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Safety-First — the trust section ── */}
      <section className="relative py-24 bg-carbon">
        <Container>
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              Safety First
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-4">
              AI you can trust with your homeowners
            </h2>
            <p className="text-lg text-porcelain/60 max-w-2xl mx-auto">
              This isn&apos;t ChatGPT with a skin. Every response is grounded
              in your documentation with safety rails built in.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {safetyFeatures.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl border border-gold/10 bg-gold/[0.02] hover:border-gold/25 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {f.title}
                    </h3>
                    <p className="text-sm text-porcelain/60 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Stats Strip ── */}
      <section className="relative py-16 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: "24/7", label: "AI Availability" },
              { value: "1–2s", label: "Response Time" },
              { value: "100%", label: "AI Resolution" },
              { value: "0", label: "App Downloads Required" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold text-gold font-heading">
                  {stat.value}
                </p>
                <p className="text-sm text-porcelain/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Access Methods — NFC, QR, Link ── */}
      <section className="relative py-24 bg-carbon">
        <Container>
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              Access
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              Three ways in, zero friction
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: QrCode,
                title: "QR Code",
                desc: "Printed in the handover pack or stuck to the fuse board. Scan and go.",
              },
              {
                icon: Sparkles,
                title: "NFC Tag",
                desc: "Tap your phone to a tag in the property. Instant portal access.",
              },
              {
                icon: Home,
                title: "Direct Link",
                desc: "Unique URL per development. Bookmark it, share it, works anywhere.",
              },
            ].map((a) => (
              <div
                key={a.title}
                className="text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4">
                  <a.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-white font-semibold mb-2">{a.title}</h3>
                <p className="text-sm text-porcelain/60">{a.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Resident Experience — what homeowners see ── */}
      <section className="relative py-24 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.02] via-transparent to-transparent" />
        <Container>
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
              The Resident Experience
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-4">
              What your homeowners actually get
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: MessageSquare, label: "AI Chat Assistant" },
              { icon: Ruler, label: "Floor Plans & Dimensions" },
              { icon: MapPin, label: "Local Area Guide" },
              { icon: Heart, label: "Home Care Tips" },
              { icon: Clock, label: "Warranty Tracker" },
              { icon: FileWarning, label: "Emergency Contacts" },
              { icon: Languages, label: "Any Language" },
              { icon: Brain, label: "Noticeboard & Updates" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-gold/20 transition-all duration-300"
              >
                <item.icon className="w-6 h-6 text-gold/70" />
                <span className="text-xs text-porcelain/70 text-center font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Trust Vault — existing animated security component ── */}
      <TrustVault />

      {/* ── CTA ── */}
      <section className="relative py-24 bg-carbon">
        <div className="absolute inset-0 bg-gradient-to-t from-gold/[0.04] to-transparent" />
        <Container>
          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-heading">
              See the AI answer real questions
            </h2>
            <p className="text-lg text-porcelain/70 mb-8">
              We&apos;ll demo the resident portal live — ask it anything about a
              real home and watch it respond in seconds.
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
