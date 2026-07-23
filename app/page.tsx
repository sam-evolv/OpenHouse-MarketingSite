import { DeveloperInsightSection } from "@/components/home/DeveloperInsightSection";
import { EnergyDirectionSection } from "@/components/home/EnergyDirectionSection";
import { EvidenceModelSection } from "@/components/home/EvidenceModelSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HomeownerProofSection } from "@/components/home/HomeownerProofSection";
import { LivingHomeHero } from "@/components/home/LivingHomeHero";

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
      <HomeownerProofSection />
      <DeveloperInsightSection />
      <EnergyDirectionSection />
      <FinalCtaSection />
    </div>
  );
}
