"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/container";
import { Shield, Lock, Database, Globe, FileCheck, Server } from "lucide-react";

const SECURITY_FEATURES = [
  { label: "GDPR-First", icon: FileCheck },
  { label: "EU Data Storage", icon: Globe },
  { label: "Audit Logs", icon: Database },
  { label: "No LLM Training", icon: Lock },
  { label: "Encrypted Data", icon: Server },
  { label: "Scheme Sandboxing", icon: Shield },
];

function CentralShield() {
  const [glowPhase, setGlowPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowPhase(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const glowIntensity = 0.5 + Math.sin(glowPhase * (Math.PI / 180)) * 0.3;
  const goldGlow = `rgba(200, 167, 94, ${glowIntensity})`;
  const greenGlow = `rgba(34, 197, 94, ${glowIntensity * 0.6})`;

  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full"
        style={{
          background: `radial-gradient(circle, ${goldGlow} 0%, ${greenGlow} 50%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-gold/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-green-500/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-gold/20 to-green-500/10 border border-gold/40 flex items-center justify-center backdrop-blur-sm"
        animate={{
          boxShadow: [
            "0 0 30px rgba(200, 167, 94, 0.3), 0 0 60px rgba(34, 197, 94, 0.1)",
            "0 0 50px rgba(200, 167, 94, 0.5), 0 0 80px rgba(34, 197, 94, 0.2)",
            "0 0 30px rgba(200, 167, 94, 0.3), 0 0 60px rgba(34, 197, 94, 0.1)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-gold" strokeWidth={1.5} />
      </motion.div>
    </div>
  );
}

function OrbitingFeatures() {
  const radius = 180;
  const mobileRadius = 140;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      animate={{ rotate: 360 }}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {SECURITY_FEATURES.map((feature, index) => {
        const angle = (index / SECURITY_FEATURES.length) * 360;
        const radian = (angle * Math.PI) / 180;

        return (
          <motion.div
            key={feature.label}
            className="absolute"
            style={{
              transform: `rotate(${angle}deg)`,
            }}
            animate={{ rotate: -360 }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full border border-white/10 bg-slate/80 backdrop-blur-sm hover:border-gold/40 hover:bg-gold/5 transition-all cursor-default group"
              style={{
                transform: `translateX(${Math.cos(radian) * mobileRadius}px) translateY(${Math.sin(radian) * mobileRadius}px) rotate(${-angle}deg)`,
              }}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <feature.icon className="w-4 h-4 text-gold/80 group-hover:text-gold transition-colors" />
              <span 
                className="text-xs sm:text-sm font-medium whitespace-nowrap group-hover:text-white transition-colors"
                style={{
                  background: "linear-gradient(135deg, #e8e8e8 0%, #a8a8a8 50%, #d0d0d0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {feature.label}
              </span>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

function MobileOrbitingFeatures() {
  return (
    <div className="grid grid-cols-2 gap-3 mt-12">
      {SECURITY_FEATURES.map((feature, index) => (
        <motion.div
          key={feature.label}
          className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/10 bg-slate/80 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
        >
          <feature.icon className="w-4 h-4 text-gold/80" />
          <span 
            className="text-xs font-medium"
            style={{
              background: "linear-gradient(135deg, #e8e8e8 0%, #a8a8a8 50%, #d0d0d0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {feature.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export function TrustVault() {
  return (
    <section className="py-28 bg-carbon relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,167,94,0.05)_0%,transparent_70%)]" />
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-sm font-medium mb-6">
            Trust Vault
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto"
            style={{
              background: "linear-gradient(135deg, #f0f0f0 0%, #c0c0c0 25%, #e8e8e8 50%, #a0a0a0 75%, #d8d8d8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Enterprise-Grade Security by Default
          </h2>
          <p className="mt-4 text-hint text-lg max-w-xl mx-auto">
            Your data is protected by industry-leading security measures and compliance standards.
          </p>
        </motion.div>

        <div className="hidden md:block relative h-[450px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <CentralShield />
            <OrbitingFeatures />
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex justify-center">
            <CentralShield />
          </div>
          <MobileOrbitingFeatures />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-6 text-center"
        >
          {[
            { value: "SOC 2", label: "Compliant" },
            { value: "256-bit", label: "Encryption" },
            { value: "99.9%", label: "Uptime SLA" },
          ].map((stat) => (
            <div key={stat.label} className="px-6">
              <p className="text-2xl sm:text-3xl font-bold font-mono text-gold">{stat.value}</p>
              <p className="text-xs text-hint uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
