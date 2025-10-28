import { Container } from "@/components/ui/container";

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-carbon">
      <Container className="max-w-4xl">
        <h1 className="text-display-md font-bold text-porcelain mb-6">
          Privacy Policy
        </h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-hint mb-4">
            Last updated: October 28, 2025
          </p>
          <h2 className="text-heading-md font-bold text-porcelain mt-8 mb-4">
            Data Collection
          </h2>
          <p className="text-hint mb-4">
            OpenHouse AI is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your data.
          </p>
          <h2 className="text-heading-md font-bold text-porcelain mt-8 mb-4">
            Data Security
          </h2>
          <p className="text-hint mb-4">
            All data is encrypted at rest and in transit. We offer EU hosting options for GDPR compliance.
          </p>
        </div>
      </Container>
    </div>
  );
}
