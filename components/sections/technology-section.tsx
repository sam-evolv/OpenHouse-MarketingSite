"use client";

import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Reveal } from "../effects/Reveal";
import { Cpu, Smartphone, MessageSquare, Zap, Globe, Shield } from "lucide-react";

const technologies = [
  {
    icon: Smartphone,
    title: "NFC Activation",
    description: "Instant home activation with a single tap. Residents simply touch their phone to activate their personalized AI assistant.",
  },
  {
    icon: Cpu,
    title: "RAG Knowledge Engine",
    description: "Advanced retrieval-augmented generation delivers accurate, context-aware answers from your development's knowledge base.",
  },
  {
    icon: MessageSquare,
    title: "Intelligent Chat",
    description: "Natural language AI that understands home-specific queries and provides instant, accurate responses 24/7.",
  },
  {
    icon: Zap,
    title: "QR Onboarding",
    description: "Seamless resident onboarding through scannable QR codes placed throughout the development.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Serve international buyers and residents in 50+ languages with automatic translation.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "GDPR-compliant, EU data residency, encryption at rest and in transit, with full audit logging.",
  },
];

export function TechnologySection() {
  return (
    <section className="py-28 bg-carbon relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
      
      <Container className="relative z-10">
        <SectionHeading
          title="Unified AI Engine Across Every Home"
          description="NFC activation, QR onboarding, instant RAG chat, and intelligent home support — all powered by one unified platform."
          badge="Technology"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[1fr] gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Reveal key={index} delay={index * 0.1}>
                <div className="group h-full flex flex-col p-8 bg-black/40 border border-white/5 rounded-2xl hover:border-gold/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-6 group-hover:from-gold/30 group-hover:to-gold/10 transition-all duration-300">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-porcelain mb-3">
                    {tech.title}
                  </h3>
                  <p className="text-hint text-body-md leading-relaxed flex-1">
                    {tech.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom accent */}
        <Reveal delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-lg text-hint">
              <span className="text-gold font-semibold">OpenHouse AI</span> — The AI Resident Portal for Modern Developments
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
