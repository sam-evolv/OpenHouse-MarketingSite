import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-carbon flex items-center">
      <Container className="text-center">
        <h1 className="text-display-lg font-bold text-gold mb-4">404</h1>
        <h2 className="text-heading-xl font-bold text-porcelain mb-6">
          Page not found
        </h2>
        <p className="text-body-lg text-hint mb-8 max-w-2xl mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">Go home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact support</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
