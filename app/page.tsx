import { ModuleHero } from "@/components/hero/ModuleHero";
import { AssistantHeroVisual, ProductShowcase } from "@/components/marketing/ProductShowcase";
import heroBackground from "@/attached_assets/stock_images/platform_aerial_network.png";
import { House } from "lucide-react";

export const metadata = {
  title: "OpenHouse Ai, The intelligence layer for modern homes",
  description:
    "See how OpenHouse gives every modern home a living model, a practical homeowner assistant and energy intelligence grounded in the home itself.",
};

export default function PlatformPage() {
  return (
    <div>
      <ModuleHero
        backgroundImage={heroBackground}
        accentColor="gold"
        imagePosition="object-top"
        backgroundAlt="Aerial view of a residential development at golden hour"
        badge={
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2 ring-1 ring-gold/30">
            <House className="h-4 w-4 text-gold" aria-hidden="true" />
            <span className="text-sm font-medium text-gold">Built into the home. Useful from day one.</span>
          </div>
        }
        title={
          <>
            The intelligence layer for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">modern homes.</span>
          </>
        }
        subtitle="A living home model, a practical assistant and energy guidance grounded in the home itself."
        primaryCta={{ href: "#product", label: "Watch it work" }}
        secondaryCta={{ href: "/contact", label: "Book a Demo" }}
      >
        <AssistantHeroVisual />
      </ModuleHero>

      <section className="bg-carbon px-4 pb-16 lg:hidden" aria-label="OpenHouse assistant product preview">
        <AssistantHeroVisual />
      </section>

      <ProductShowcase />
    </div>
  );
}
