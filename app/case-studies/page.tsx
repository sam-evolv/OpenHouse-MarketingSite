import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { IsoGrid } from "@/components/iso/IsoGrid";
import { CASE_STUDIES } from "@/data/caseStudies";
import { SplitText } from "@/components/effects/SplitText";

export const metadata: Metadata = {
  title: "Case Studies - OpenHouse Ai",
  description: "See how OpenHouse Ai transforms resident experience across diverse property developments.",
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-carbon">
      <Container>
        <div className="text-center mb-16">
          <SplitText
            as="h1"
            className="text-display-md font-bold text-porcelain mb-6"
            stagger={0.06}
          >
            Case Studies
          </SplitText>
          <p className="text-body-lg text-hint max-w-3xl mx-auto">
            See how leading developers are using OpenHouse Ai to transform their resident experience.
          </p>
        </div>

        <IsoGrid items={CASE_STUDIES} />
      </Container>
    </div>
  );
}
