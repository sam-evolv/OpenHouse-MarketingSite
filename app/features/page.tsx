import { Container } from "@/components/ui/container";
import { FeatureGrid } from "@/components/sections/feature-grid";

export default function FeaturesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-carbon">
      <Container>
        <h1 className="text-display-md font-bold text-porcelain mb-6 text-center">
          Features that deliver results
        </h1>
        <p className="text-body-lg text-hint mb-12 text-center max-w-3xl mx-auto">
          Everything you need to provide exceptional support and engagement for your development.
        </p>
      </Container>
      <FeatureGrid />
    </div>
  );
}
