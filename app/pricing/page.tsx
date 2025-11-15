import { PricingSection } from "@/components/sections/pricing-section";
import { PricingComparison } from "@/components/sections/pricing-comparison";
import { FAQAccordion } from "@/components/sections/faq-accordion";

export default function PricingPage() {
  return (
    <div className="pt-32 min-h-screen bg-carbon">
      <PricingSection />
      <PricingComparison />
      <FAQAccordion />
    </div>
  );
}
