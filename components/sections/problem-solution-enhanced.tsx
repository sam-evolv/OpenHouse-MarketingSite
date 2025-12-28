"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Reveal } from "../effects/Reveal";
import { ChaosControlSlider } from "../comparison/ChaosControlSlider";
import { 
  Users, 
  Brain, 
  QrCode, 
  LayoutDashboard, 
  MapPin, 
  BarChart3, 
  Shield,
  TrendingDown,
  Sparkles,
  Star,
  Database,
  Zap,
  Heart,
  Layers
} from "lucide-react";

const platformFeatures = [
  { icon: Users, title: "Multi-Tenant Core", description: "Developers, OMCs, and residents on one unified platform" },
  { icon: Brain, title: "RAG Knowledge Engine", description: "AI-powered document understanding and retrieval" },
  { icon: QrCode, title: "Smart Onboarding", description: "Instant activation via QR codes and NFC tags" },
  { icon: LayoutDashboard, title: "Developer Dashboard", description: "Complete visibility across all your developments" },
  { icon: MapPin, title: "POI Engine", description: "Local area intelligence for every resident" },
  { icon: BarChart3, title: "Analytics Layer", description: "Query trends, knowledge gaps, monthly reporting" },
  { icon: Shield, title: "Enterprise Security", description: "Built to support EU data residency, audit logging, and privacy-first data handling" },
];

const businessOutcomes = [
  { icon: TrendingDown, title: "Reduce Manual Enquiries", description: "Decrease after-sales support volumes" },
  { icon: Sparkles, title: "Effortless Handover", description: "Automated, seamless resident onboarding experience" },
  { icon: Star, title: "Premium Experience", description: "Modern resident experience from day one" },
  { icon: Database, title: "Centralised Knowledge", description: "Single source of truth reduces repeated queries" },
  { icon: Zap, title: "Faster Resolution", description: "Accelerate warranty issue handling" },
  { icon: Heart, title: "Better Satisfaction", description: "Improved resident satisfaction and brand perception" },
  { icon: Layers, title: "Instant Scale", description: "Deploy across all developments instantly" },
];

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ 
        y: -4,
        boxShadow: "0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(200, 167, 94, 0.1)"
      }}
      className="flex-shrink-0 w-[280px] md:w-auto bg-carbon/60 border border-white/10 rounded-xl p-6 cursor-pointer transition-colors hover:border-gold/30 elev-1-dark"
    >
      <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 hover-animate">
        <Icon className="w-6 h-6 text-gold" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-porcelain mb-2">{title}</h3>
      <p className="text-sm text-porcelain/70 leading-relaxed">{description}</p>
    </motion.div>
  );
}

interface CardCarouselProps {
  features: typeof platformFeatures;
  title: string;
}

function CardCarousel({ features, title }: CardCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      return () => ref.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Reveal>
      <div className="bg-black/20 border border-white/5 rounded-2xl p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight text-porcelain mb-8">
          {title}
        </h2>

        {/* Mobile: Horizontal scroll carousel */}
        <div className="md:hidden relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {features.map((feature, index) => (
              <div key={index} className="snap-start">
                <FeatureCard {...feature} index={index} />
              </div>
            ))}
          </div>
          
          {/* Scroll indicators */}
          <div className="flex justify-center gap-2 mt-4">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                canScrollLeft 
                  ? "border-gold/50 text-gold hover:bg-gold/10" 
                  : "border-white/10 text-white/20 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                canScrollRight 
                  ? "border-gold/50 text-gold hover:bg-gold/10" 
                  : "border-white/10 text-white/20 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function ProblemSolutionEnhanced() {
  return (
    <section className="section-padding bg-slate">
      <Container>
        <SectionHeading
          title="Built for Developers. Loved by Residents."
          badge="Why OpenHouse AI"
        />

        <p className="text-center text-porcelain/60 text-lg max-w-3xl mx-auto mt-4 mb-10">
          Every home includes an AI assistant trained on its handover files, maps, and local development information.
        </p>

        <Reveal className="mt-12">
          <ChaosControlSlider />
        </Reveal>

        <div className="mt-20 space-y-8">
          <CardCarousel 
            features={platformFeatures} 
            title="A Modern Multi-Tenant Platform Architected for Scale" 
          />
          
          <CardCarousel 
            features={businessOutcomes} 
            title="Measurable Business Outcomes" 
          />
        </div>
      </Container>
    </section>
  );
}
