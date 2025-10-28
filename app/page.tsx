import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { AudienceSlices } from "@/components/sections/audience-slices";
import { DashboardPreview } from "@/components/sections/dashboard-preview";
import { PricingSection } from "@/components/sections/pricing-section";
import { SecurityStrip } from "@/components/sections/security-strip";
import { FAQSection } from "@/components/sections/faq-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSolution />
      <HowItWorks />
      <FeatureGrid />
      <AudienceSlices />
      <DashboardPreview />
      <PricingSection />
      <SecurityStrip />
      <FAQSection />
    </>
  );
}
