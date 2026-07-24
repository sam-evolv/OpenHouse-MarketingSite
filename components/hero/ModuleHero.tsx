"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  ReactNode,
} from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

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
  children?: ReactNode; // The product stage
}

const accentOverlays: Record<string, string> = {
  blue: "bg-gradient-to-br from-blue-950/40 via-transparent to-blue-900/20",
  emerald: "bg-gradient-to-br from-emerald-950/40 via-transparent to-emerald-900/20",
  violet: "bg-gradient-to-br from-violet-950/50 via-transparent to-purple-900/30",
  gold: "bg-gradient-to-br from-amber-950/25 via-transparent to-amber-900/10",
};

/**
 * Cursor depth is calibrated once for the whole hero and shared by every
 * card, so the stage moves as one object. Previously each card attached
 * its own pointer listener, which both cost more and let the cards drift
 * independently — reading as loose widgets rather than one system.
 */
interface HeroPointer {
  x: MotionValue<number>;
  y: MotionValue<number>;
}
const HeroPointerContext = createContext<HeroPointer | null>(null);

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
  const reducedMotion = usePrefersReducedMotion();

  // Normalised pointer position, -0.5 to 0.5 on each axis.
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 110, mass: 0.6 };
  const smoothX = useSpring(pointerX, springConfig);
  const smoothY = useSpring(pointerY, springConfig);

  const bgX = useTransform(smoothX, (v) => v * -22);
  const bgY = useTransform(smoothY, (v) => v * -14);

  useEffect(() => {
    if (reducedMotion) return;
    // Desktop, fine-pointer devices only. Touch users get the composed
    // static stage, which is the same composition without the drift.
    const mq = window.matchMedia("(pointer: fine) and (min-width: 1024px)");
    if (!mq.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      pointerX.set(e.clientX / window.innerWidth - 0.5);
      pointerY.set(e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [reducedMotion, pointerX, pointerY]);

  return (
    <HeroPointerContext.Provider value={{ x: smoothX, y: smoothY }}>
      <section
        ref={containerRef}
        className="surface-grain relative min-h-screen flex items-center bg-carbon overflow-hidden"
      >
        {/* Architectural backdrop. Tonal grading is layered rather than a
            single flat scrim, so the photograph keeps its depth while the
            left column stays type-safe without a glass panel over it. */}
        <motion.div
          className="absolute inset-0 scale-[1.06]"
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
          <div className="absolute inset-0 bg-carbon/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/70 to-carbon/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/25 to-carbon/50" />
          {accentColor && accentOverlays[accentColor] && (
            <div className={`absolute inset-0 ${accentOverlays[accentColor]}`} />
          )}
        </motion.div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-20 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,1fr)] gap-12 lg:gap-6 items-center min-h-[68vh] lg:min-h-[74vh]">
            {/* Left: text. CSS entrance so hero copy is server-rendered and
                visible before JavaScript loads. */}
            <div
              className="relative z-20 anim-rise max-w-[39rem]"
              style={{ "--anim-delay": "0.05s" } as React.CSSProperties}
            >
              <div
                className="mb-7 anim-pop"
                style={{ "--anim-delay": "0.3s" } as React.CSSProperties}
              >
                {badge}
              </div>

              <h1 className="text-[2.6rem] sm:text-5xl lg:text-[3.6rem] xl:text-[4.2rem] font-bold text-white leading-[1.03] tracking-[-0.035em] mb-6 font-heading [text-wrap:balance]">
                {title}
              </h1>

              <p className="text-[1.0625rem] sm:text-lg text-porcelain/75 mb-9 max-w-[33rem] leading-[1.65]">
                {subtitle}
              </p>

              {/* Buttons never break their own label; the row wraps instead,
                  so a narrow lg column can't clip a CTA. */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3.5">
                <Link
                  href={primaryCta.href}
                  className="group relative inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-4 text-base font-semibold rounded-full overflow-hidden transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-carbon"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-gold via-amber-400 to-gold" />
                  <span className="relative z-10 text-carbon flex items-center gap-2">
                    {primaryCta.label}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-4 text-base font-medium text-porcelain border border-white/20 hover:border-gold/50 hover:text-white rounded-full transition-colors duration-300 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-carbon"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            </div>

            {/* Right: the product stage.
                Mobile keeps a deliberate horizontal snap row so the product
                is legible on a phone. Desktop (lg+) becomes one composed
                stage: cards are centred siblings offset from a shared
                origin, which is what lets the connectors line up. */}
            {children && (
              <div className="relative flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:px-0 lg:pb-0 lg:overflow-visible lg:snap-none lg:items-center lg:justify-center lg:h-[520px] lg:scale-[0.78] xl:scale-[0.98] lg:origin-center">
                {children}
              </div>
            )}
          </div>
        </div>
      </section>
    </HeroPointerContext.Provider>
  );
}

/* ─── Stage card ───
   Three nested elements, each owning exactly one transform: the outer
   holds layout position, the middle holds shared cursor depth, the inner
   holds the CSS entrance. Collapsing these would make the animations
   overwrite each other. */
interface FloatingCardProps {
  children: ReactNode;
  depth: 1 | 2 | 3;
  className?: string;
  delay?: number;
  /** Stacking order. Defaults to depth, but the focal card is anchored
   *  (low depth, little drift) while still sitting on top. */
  elevation?: number;
}

export function FloatingCard({
  children,
  depth,
  className = "",
  delay = 0.6,
  elevation,
}: FloatingCardProps) {
  const pointer = useContext(HeroPointerContext);
  const fallbackX = useMotionValue(0);
  const fallbackY = useMotionValue(0);
  const sourceX = pointer?.x ?? fallbackX;
  const sourceY = pointer?.y ?? fallbackY;

  const multiplier = depth === 1 ? 1 : depth === 2 ? 1.8 : 2.6;
  const x = useTransform(sourceX, (v) => v * 24 * multiplier);
  const y = useTransform(sourceY, (v) => v * 16 * multiplier);

  return (
    <div
      className="relative shrink-0 snap-center lg:absolute"
      style={{ zIndex: (elevation ?? depth) * 10 }}
    >
      <motion.div style={{ x, y }}>
        <div className={`relative ${className}`}>
          <div
            className="anim-rise"
            style={{ "--anim-delay": `${delay}s` } as React.CSSProperties}
          >
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
