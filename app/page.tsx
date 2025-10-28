import { HeroSectionEnhanced } from "@/components/sections/hero-section-enhanced";
import { ProblemSolutionEnhanced } from "@/components/sections/problem-solution-enhanced";
import { HowItWorksPinned } from "@/components/sections/how-it-works/HowItWorksPinned";
import { FeatureGridEnhanced } from "@/components/sections/feature-grid-enhanced";
import { AudienceSlices } from "@/components/sections/audience-slices";
import { DashboardPreviewEnhanced } from "@/components/sections/dashboard-preview-enhanced";
import { IsoGallerySection } from "@/sections/Gallery/IsoGallerySection";
import { PricingSection } from "@/components/sections/pricing-section";
import { SecurityStrip } from "@/components/sections/security-strip";
import { FAQSection } from "@/components/sections/faq-section";

export default function HomeEnhanced() {
  return (
    <>
      <HeroSectionEnhanced />
      <ProblemSolutionEnhanced />
      <HowItWorksPinned />
      <FeatureGridEnhanced />
      <AudienceSlices />
      <DashboardPreviewEnhanced />
      <IsoGallerySection />
      <PricingSection />
      <SecurityStrip />
      <FAQSection />
    </>
  );
}
