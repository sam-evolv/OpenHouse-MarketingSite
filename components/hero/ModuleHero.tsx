"use client";

import { useEffect, useState, useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { EASE } from "@/lib/motion";

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
  const reducedMotion = usePrefersReducedMotion();

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
    if (!isMounted || reducedMotion) return;

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
  }, [isMounted, reducedMotion, mouseX, mouseY]);

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
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-40 lg:pt-32 pb-20 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[70vh] lg:min-h-[75vh]">
          {/* Left: Text content.
              CSS entrance (anim-*) instead of JS animation: the hero copy is
              server-rendered and visible before JavaScript loads. */}
          <div
            className="relative z-20 anim-rise"
            style={{ "--anim-delay": "0.1s" } as React.CSSProperties}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-carbon/40 backdrop-blur-xl rounded-3xl" />
              <div className="relative p-4">
                {/* Badge */}
                <div
                  className="mb-6 anim-pop"
                  style={{ "--anim-delay": "0.45s" } as React.CSSProperties}
                >
                  {badge}
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-6 font-heading">
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
          </div>

          {/* Right: product cards.
              Mobile: a normal-flow horizontal snap row so the product is
              visible on phones too. Desktop (lg+): the absolute parallax
              stage, unchanged. */}
          {children && (
            <div className="relative flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:px-0 lg:pb-0 lg:overflow-visible lg:snap-none lg:items-center lg:justify-center lg:h-[500px]">
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Thread stub — plants the golden-thread motif; drawn once, then still */}
      <div
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-porcelain/50">
          Scroll
        </span>
        <span className="relative block w-px h-12 overflow-hidden">
          <span className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/20 to-gold/30" />
          <motion.span
            className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/60 to-gold origin-top"
            initial={reducedMotion ? false : { scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 1.1, ease: EASE }}
          />
        </span>
        <motion.span
          className="block w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.5)]"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.6, ease: EASE }}
        />
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
  const reducedMotion = usePrefersReducedMotion();
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const multiplier = depth === 1 ? 1 : depth === 2 ? 1.75 : 2.5;
  const cardX = useTransform(smoothX, [0, 1], [-20 * multiplier, 20 * multiplier]);
  const cardY = useTransform(smoothY, [0, 1], [-15 * multiplier, 15 * multiplier]);

  useEffect(() => {
    if (reducedMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [reducedMotion, mouseX, mouseY]);

  return (
    <motion.div
      className="relative shrink-0 snap-center lg:absolute"
      style={{ x: cardX, y: cardY, zIndex: depth * 10 }}
    >
      {/* CSS entrance so the cards render without JavaScript; the framer
          wrapper above only adds mouse parallax as an enhancement. The
          entrance lives on its own inner wrapper because anim-rise ends on
          `transform: none`, which would override the positional translate
          classes if they shared an element. */}
      <div className={`relative ${className}`}>
        <div
          className="anim-rise"
          style={{ "--anim-delay": `${delay}s` } as React.CSSProperties}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}

