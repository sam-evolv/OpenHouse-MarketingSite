"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/container";
import { Home, Building2, MessageCircle, FileText, Bell, BarChart3, Eye, Lightbulb, MapPin } from "lucide-react";

const residentFeatures = [
  { icon: MessageCircle, text: "Instant answers to everyday home questions" },
  { icon: MapPin, text: "Maps for local places and essential services" },
  { icon: FileText, text: "Digital handover documents in one place" },
  { icon: Bell, text: "Development-wide updates via the Resident Notice Board" },
];

const developerFeatures = [
  { icon: Eye, text: "Visibility into resident questions and recurring issues" },
  { icon: BarChart3, text: "Spot patterns early and reduce after-sales overhead" },
  { icon: FileText, text: "Handover files and documentation delivered digitally" },
  { icon: Lightbulb, text: "Understand what residents actually need, post-handover" },
];

interface PortalCardProps {
  title: string;
  icon: React.ElementType;
  features: typeof residentFeatures;
  delay: number;
}

function PortalCard({ title, icon: Icon, features, delay }: PortalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      className="bg-carbon/60 border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-colors elev-1-dark"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
          <Icon className="w-7 h-7 text-gold" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-semibold text-porcelain">{title}</h3>
      </div>
      
      <ul className="space-y-4">
        {features.map((feature, index) => {
          const FeatureIcon = feature.icon;
          return (
            <li key={index} className="flex items-start gap-3">
              <FeatureIcon className="w-5 h-5 text-gold/70 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span className="text-porcelain/80 leading-relaxed">{feature.text}</span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}

export function TwoPortals() {
  return (
    <section className="py-20 sm:py-28 bg-carbon">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-porcelain mb-4">
            Two portals. One platform.
          </h2>
          <p className="text-hint text-lg max-w-2xl mx-auto">
            OpenHouse Ai connects residents and developers through purpose-built experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          <PortalCard
            title="Resident Portal"
            icon={Home}
            features={residentFeatures}
            delay={0.1}
          />
          <PortalCard
            title="Developer Portal"
            icon={Building2}
            features={developerFeatures}
            delay={0.2}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-hint text-sm"
        >
          Built for modern developments, designed for real-world handover.
        </motion.p>
      </Container>
    </section>
  );
}
