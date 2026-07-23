"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * ThreadSeam — one segment of the golden thread that stitches the homepage
 * into a single story. Each seam is a centered 1px vertical line that draws
 * itself as it scrolls through the lower third of the viewport; identical
 * position, width and colour across chapters make the segments read as one
 * continuous thread. Gold = knowledge passing between actors; the thread
 * terminates at the final CTA with a larger node.
 */

interface ThreadSeamProps {
  /** dark = gold on carbon; light = amber on porcelain (contrast) */
  tone?: "dark" | "light";
  height?: "sm" | "md";
  /** Larger glowing end-node — use once, at the final CTA */
  terminal?: boolean;
  className?: string;
}

export function ThreadSeam({
  tone = "dark",
  height = "md",
  terminal = false,
  className = "",
}: ThreadSeamProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    // Draw while the seam crosses the lower third of the viewport, finishing
    // before the chapter heading beneath it reaches center.
    offset: ["start 0.92", "end 0.55"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const nodeOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

  const h = height === "sm" ? "h-12 sm:h-16" : "h-16 sm:h-24";
  const line =
    tone === "dark"
      ? "bg-gradient-to-b from-transparent via-gold/60 to-gold"
      : "bg-gradient-to-b from-transparent via-amber-600/50 to-amber-600/70";
  const track =
    tone === "dark"
      ? "bg-gradient-to-b from-transparent via-gold/10 to-gold/15"
      : "bg-gradient-to-b from-transparent via-amber-600/10 to-amber-600/15";
  const dot =
    tone === "dark"
      ? "bg-gold shadow-[0_0_12px_rgba(212,175,55,0.5)]"
      : "bg-amber-600 shadow-[0_0_10px_rgba(217,119,6,0.35)]";
  const dotSize = terminal ? "w-2.5 h-2.5" : "w-1.5 h-1.5";

  if (reducedMotion) {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none relative mx-auto w-px ${h} ${className}`}
      >
        <span className={`absolute inset-0 ${line}`} />
        <span
          className={`absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full ${dotSize} ${dot}`}
        />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none relative mx-auto w-px ${h} ${className}`}
    >
      <span className={`absolute inset-0 ${track}`} />
      <motion.span
        className={`absolute inset-0 origin-top ${line}`}
        style={{ scaleY }}
      />
      <motion.span
        className={`absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full ${dotSize} ${dot}`}
        style={{ opacity: nodeOpacity }}
      />
    </div>
  );
}
