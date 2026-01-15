import { Container } from "@/components/ui/container";

export default function DocsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-carbon">
      <Container>
        <h1 className="text-display-md font-bold text-porcelain mb-6 text-center">
          Documentation
        </h1>
        <p className="text-body-lg text-hint text-center max-w-3xl mx-auto">
          Everything you need to get started with OpenHouse Ai.
        </p>
        <div className="mt-16 text-center text-hint">
          Documentation coming soon.
        </div>
      </Container>
    </div>
  );
}
