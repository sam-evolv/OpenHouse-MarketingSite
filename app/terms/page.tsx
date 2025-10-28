import { Container } from "@/components/ui/container";

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-carbon">
      <Container className="max-w-4xl">
        <h1 className="text-display-md font-bold text-porcelain mb-6">
          Terms of Service
        </h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-hint mb-4">
            Last updated: October 28, 2025
          </p>
          <h2 className="text-heading-md font-bold text-porcelain mt-8 mb-4">
            Agreement to Terms
          </h2>
          <p className="text-hint mb-4">
            By accessing OpenHouse AI, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>
        </div>
      </Container>
    </div>
  );
}
