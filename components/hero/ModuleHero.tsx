"use client";

import { useEffect, useState, useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";

interface ModuleHeroProps {
  backgroundImage: StaticImageData;
  backgroundAlt: string;
  accentColor?: string; // e.g. "blue" | "emerald" | "violet" | "gold"
  imagePosition?: string; // e.g. "object-bottom" | "object-top"
  badge: ReactNode;
  title: ReactNode;
  subtitle: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  children?: ReactNode; // Floating cards
}

const accentOverlays: Record<string, string> = {
  blue: "bg-gradient-to-br from-blue-950/40 via-transparent to-blue-900/20",
  emerald: "bg-gradient-to-br from-emerald-950/40 via-transparent to-emerald-900/20",
  violet: "bg-gradient-to-br from-violet-950/50 via-transparent to-purple-900/30",
  gold: "bg-gradient-to-br from-amber-950/30 via-transparent to-amber-900/10",
};

export function ModuleHero({
  backgroundImage,
  backgroundAlt,
  accentColor,
  imagePosition,
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  children,
}: ModuleHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const bgX = useTransform(smoothMouseX, [0, 1], [15, -15]);
  const bgY = useTransform(smoothMouseY, [0, 1], [10, -10]);

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
      className="relative min-h-screen flex items-center bg-carbon"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 scale-110 overflow-hidden"
        style={{ x: bgX, y: bgY }}
      >
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          priority
          className={`object-cover ${imagePosition || ""}`}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-carbon/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-carbon/30" />
        {accentColor && accentOverlays[accentColor] && (
          <div className={`absolute inset-0 ${accentOverlays[accentColor]}`} />
        )}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 sm:pt-48 md:pt-40 lg:pt-32 pb-20 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[70vh] lg:min-h-[75vh]">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-20"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-carbon/40 backdrop-blur-xl rounded-3xl" />
              <div className="relative p-4">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mb-6"
                >
                  {badge}
                </motion.div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 font-heading">
                  {title}
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-porcelain/80 mb-8 max-w-xl leading-relaxed">
                  {subtitle}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={primaryCta.href}
                    className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-gold via-amber-500 to-gold" />
                    <span className="relative z-10 text-carbon flex items-center gap-2">
                      {primaryCta.label}
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                  {secondaryCta && (
                    <Link
                      href={secondaryCta.href}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-porcelain border border-white/20 hover:border-gold/50 rounded-full transition-all duration-300 hover:bg-white/5"
                    >
                      {secondaryCta.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Floating cards */}
          {children && (
            <div className="relative hidden lg:flex items-center justify-center h-[500px]">
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium uppercase tracking-wider text-porcelain/70">
            Scroll to explore
          </span>
          <svg
            className="w-5 h-5 text-porcelain/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Parallax card wrapper ─── */
interface FloatingCardProps {
  children: ReactNode;
  depth: 1 | 2 | 3;
  className?: string;
  delay?: number;
}

export function FloatingCard({ children, depth, className = "", delay = 0.6 }: FloatingCardProps) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const multiplier = depth === 1 ? 1 : depth === 2 ? 1.75 : 2.5;
  const cardX = useTransform(smoothX, [0, 1], [-20 * multiplier, 20 * multiplier]);
  const cardY = useTransform(smoothY, [0, 1], [-15 * multiplier, 15 * multiplier]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="absolute"
      style={{ x: cardX, y: cardY, zIndex: depth * 10 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className={`relative ${className}`}>
        {children}
      </div>
    </motion.div>
  );
}

