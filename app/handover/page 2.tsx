import { HeroParallax } from "@/components/hero/HeroParallax";
import { TwoPortals } from "@/components/sections/TwoPortals";
import { ProblemSolutionEnhanced } from "@/components/sections/problem-solution-enhanced";
import { BentoGrid } from "@/components/features/BentoGrid";
import { NFCDemo } from "@/components/demo/NFCDemo";
import { ChatReplayGrid } from "@/components/social-proof/ChatReplayGrid";
import { TrustVault } from "@/components/sections/TrustVault";
import { DashboardPreviewEnhanced } from "@/components/sections/dashboard-preview-enhanced";
import { EngagementModel } from "@/components/sections/EngagementModel";
import { FooterCTA } from "@/components/sections/footer-cta";
import { HandoverBadge } from "./HandoverBadge";

export const metadata = {
  title: "OpenHouse Handover — AI-Powered Resident Portal | OpenHouse Ai",
  description:
    "The digital home bible with AI-powered resident support. Every home gets an AI assistant trained on its handover documentation, maps, and development information.",
};

export default function HandoverPage() {
  return (
    <main>
      {/* Module breadcrumb badge */}
      <HandoverBadge />

      <section id="hero" aria-label="Hero">
        <HeroParallax />
      </section>

      <TwoPortals />

      <section id="solution" aria-label="Problem and Solution" className="scroll-mt-20">
        <ProblemSolutionEnhanced />
      </section>

      <section id="capabilities" aria-label="Platform Capabilities" className="scroll-mt-20">
        <BentoGrid />
        <NFCDemo />
      </section>

      <section id="proof" aria-label="Social Proof" className="scroll-mt-20">
        <ChatReplayGrid />
        <TrustVault />
      </section>

      <section id="stats" aria-label="Platform Statistics" className="scroll-mt-20">
        <DashboardPreviewEnhanced />
      </section>

      <EngagementModel />
      <FooterCTA />
    </main>
  );
}
