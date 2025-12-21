"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBackground from "@/attached_assets/stock_images/smart_home_tablet_co_c1a3a7dd.jpg";

export function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  const bgX = useTransform(smoothMouseX, [0, 1], [10, -10]);
  const bgY = useTransform(smoothMouseY, [0, 1], [5, -5]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMounted, mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-carbon"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 scale-105"
        style={{ x: bgX, y: bgY }}
      >
        <Image
          src={heroBackground}
          alt="Resident using smart home tablet in modern apartment"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-carbon/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/40 via-carbon/60 to-carbon" />
      </motion.div>

      {/* Hero Content - Centered */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold/15 border border-gold/40 mb-8"
          >
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gold tracking-wide">AI-Powered Resident Experience</span>
          </motion.div>

          {/* Main Headline - Larger */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-8">
            The AI resident portal for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
              modern developments
            </span>
          </h1>

          {/* Sub-headline - Improved readability */}
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Cut support requests by 80%. Delight residents with instant answers. 
            Give your development a premium digital concierge.
          </p>

          {/* Single Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gold via-amber-500 to-gold" />
              <span className="relative z-10 text-carbon flex items-center gap-3">
                Book a Demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - High Contrast */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-white/80">
            Scroll
          </span>
          <div className="w-8 h-12 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-gold rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
