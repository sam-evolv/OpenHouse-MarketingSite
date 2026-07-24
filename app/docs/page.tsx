import { Container } from "@/components/ui/container";

export default function DocsPage() {
  return (
    <div className="pt-24 md:pt-28 pb-24 min-h-screen bg-carbon">
      <Container>
        <h1 className="text-display-md font-bold text-porcelain mb-6 text-center">
          Documentation
        </h1>
        <p className="text-body-lg text-hint text-center max-w-3xl mx-auto">
          Everything you need to get started with OpenHouse Ai.
        </p>
        <div className="mt-16 text-center">
          <p className="text-hint mb-8">
            Get a personalised walkthrough of the platform and how it works for your developments.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-gold text-carbon hover:bg-gold/90 transition-all duration-300"
          >
            Book a Demo
          </a>
        </div>
      </Container>
    </div>
  );
}
