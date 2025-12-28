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

export default function Home() {
  return (
    <main>
      {/* Section 1: Hero - Core value proposition with single primary CTA */}
      <section id="hero" aria-label="Hero">
        <HeroParallax />
      </section>

      {/* Section 1.5: Two Portals - Resident and Developer clarity */}
      <TwoPortals />

      {/* Section 2: Pain vs Solution - Fragmentation vs AI-powered centralisation */}
      <section 
        id="solution" 
        aria-label="Problem and Solution"
        className="scroll-mt-20"
      >
        <ProblemSolutionEnhanced />
      </section>

      {/* Section 3: Capabilities - Modular feature cards */}
      <section 
        id="capabilities" 
        aria-label="Platform Capabilities"
        className="scroll-mt-20"
      >
        <BentoGrid />
        <NFCDemo />
      </section>

      {/* Section 4: Social Proof - Case studies and testimonials */}
      <section 
        id="proof" 
        aria-label="Social Proof"
        className="scroll-mt-20"
      >
        <ChatReplayGrid />
        <TrustVault />
      </section>

      {/* Section 5: Live Platform Stats */}
      <section 
        id="stats" 
        aria-label="Platform Statistics"
        className="scroll-mt-20"
      >
        <DashboardPreviewEnhanced />
      </section>

      {/* Section 6: Engagement Model - Per-scheme pricing */}
      <EngagementModel />

      {/* Final CTA */}
      <FooterCTA />
    </main>
  );
}
