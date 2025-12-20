import { HeroParallax } from "@/components/hero/HeroParallax";
import { ProblemSolutionEnhanced } from "@/components/sections/problem-solution-enhanced";
import { LiveSchema } from "@/components/architecture/LiveSchema";
import { EcosystemDemo } from "@/components/interactive-demo/EcosystemDemo";
import { BentoGrid } from "@/components/features/BentoGrid";
import { AudienceSlices } from "@/components/sections/audience-slices";
import { TechnologySection } from "@/components/sections/technology-section";
import { NetworkCommandCenter } from "@/components/sections/NetworkCommandCenter";
import { IsoGallerySection } from "@/sections/Gallery/IsoGallerySection";
import { PricingSection } from "@/components/sections/pricing-section";
import { SecurityStrip } from "@/components/sections/security-strip";
import { FAQSection } from "@/components/sections/faq-section";
import { WhyOpenHouse } from "@/components/sections/why-openhouse";
import { FooterCTA } from "@/components/sections/footer-cta";

export default function HomeEnhanced() {
  return (
    <>
      <HeroParallax />
      <ProblemSolutionEnhanced />
      <LiveSchema />
      <EcosystemDemo />
      <BentoGrid />
      <AudienceSlices />
      <TechnologySection />
      <NetworkCommandCenter />
      <IsoGallerySection />
      <PricingSection />
      <SecurityStrip />
      <FAQSection />
      <WhyOpenHouse />
      <FooterCTA />
    </>
  );
}
