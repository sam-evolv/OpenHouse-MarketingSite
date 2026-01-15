"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { ArrowRight, Layers, GitBranch, Smartphone, Handshake } from "lucide-react";
import Link from "next/link";

const engagementCards = [
  {
    icon: Layers,
    title: "Per-scheme scope",
    description: "Define what is included per development, based on your handover needs and resident experience.",
  },
  {
    icon: GitBranch,
    title: "Rollout by phase",
    description: "Start with one block or phase, then expand across the full scheme once the model is proven.",
  },
  {
    icon: Smartphone,
    title: "Clear onboarding model",
    description: "QR and NFC activation aligned to your handover process, with documentation structured per home.",
  },
  {
    icon: Handshake,
    title: "Long-term partnership",
    description: "Designed to leave room for continuous improvement and new modules over time.",
  },
];

export function EngagementModel() {
  return (
    <section 
      id="engagement-model" 
      className="section-padding bg-slate scroll-mt-20" 
      aria-labelledby="engagement-heading"
    >
      <Container>
        <SectionHeading
          title="Designed around each development"
          description="Every scheme is different. OpenHouse Ai is structured per development, taking into account scale, phase, and operational needs. We work directly with developers to define the right rollout and scope."
          badge="Engagement Model"
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagementCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative flex flex-col h-full rounded-2xl border border-white/10 bg-carbon/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-gold/40 elev-1-dark"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-6 h-6 text-gold" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-porcelain mb-3">{card.title}</h3>
                <p className="text-sm text-porcelain/70 leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-gold text-carbon hover:bg-gold/90 transition-all duration-300 shadow-lg shadow-gold/20"
          >
            Book a Demo
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-porcelain border border-white/20 hover:border-gold/50 rounded-full transition-all duration-300 hover:bg-white/5"
          >
            Discuss your scheme
          </Link>
        </motion.div>

        <p className="mt-8 text-center text-sm text-porcelain/50">
          No fixed tiers. Scope agreed per development.
        </p>
      </Container>
    </section>
  );
}
