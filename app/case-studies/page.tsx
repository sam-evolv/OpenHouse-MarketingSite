import { Container } from "@/components/ui/container";

export default function CaseStudiesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-carbon">
      <Container>
        <h1 className="text-display-md font-bold text-porcelain mb-6 text-center">
          Case Studies
        </h1>
        <p className="text-body-lg text-hint text-center max-w-3xl mx-auto">
          See how leading developers are using OpenHouse AI to transform their resident experience.
        </p>
        <div className="mt-16 text-center text-hint">
          Case studies coming soon.
        </div>
      </Container>
    </div>
  );
}
