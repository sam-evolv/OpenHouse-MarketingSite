import { HeroCinematic } from "@/components/sections/hero-cinematic";
import { ProblemSolutionEnhanced } from "@/components/sections/problem-solution-enhanced";
import { ArchitectureDiagram } from "@/components/sections/architecture-diagram";
import { HowItWorksPinned } from "@/components/sections/how-it-works/HowItWorksPinned";
import { FeatureGridEnhanced } from "@/components/sections/feature-grid-enhanced";
import { AudienceSlices } from "@/components/sections/audience-slices";
import { TechnologySection } from "@/components/sections/technology-section";
import { DashboardPreviewEnhanced } from "@/components/sections/dashboard-preview-enhanced";
import { IsoGallerySection } from "@/sections/Gallery/IsoGallerySection";
import { PricingSection } from "@/components/sections/pricing-section";
import { SecurityStrip } from "@/components/sections/security-strip";
import { FAQSection } from "@/components/sections/faq-section";
import { WhyOpenHouse } from "@/components/sections/why-openhouse";
import { FooterCTA } from "@/components/sections/footer-cta";

export default function HomeEnhanced() {
  return (
    <>
      <HeroCinematic />
      <ProblemSolutionEnhanced />
      <ArchitectureDiagram />
      <HowItWorksPinned />
      <FeatureGridEnhanced />
      <AudienceSlices />
      <TechnologySection />
      <DashboardPreviewEnhanced />
      <IsoGallerySection />
      <PricingSection />
      <SecurityStrip />
      <FAQSection />
      <WhyOpenHouse />
      <FooterCTA />
    </>
  );
}
