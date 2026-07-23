import { EvidenceModelSection } from "@/components/home/EvidenceModelSection";
import { LivingHomeHero } from "@/components/home/LivingHomeHero";
import { ProductShowcase } from "@/components/marketing/ProductShowcase";

export const metadata = {
  title: "OpenHouse AI | A home that can explain itself",
  description:
    "OpenHouse connects each house type’s plans, specifications, systems and approved documents to a practical homeowner assistant and developer insight.",
};

export default function PlatformPage() {
  return (
    <div>
      <LivingHomeHero />
      <EvidenceModelSection />
      <ProductShowcase />
    </div>
  );
}
