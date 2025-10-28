"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useRouteFx } from "./useRouteFx";

type WipeVariant = "left" | "up" | "radial";

interface RouteWipeProps {
  variant?: WipeVariant;
  duration?: number;
  color?: string;
}

const variants = {
  left: {
    initial: { x: "-100%" },
    animate: { x: "0%" },
    exit: { x: "100%" },
  },
  up: {
    initial: { y: "100%" },
    animate: { y: "0%" },
    exit: { y: "-100%" },
  },
  radial: {
    initial: { scale: 0.8, clipPath: "circle(0% at 50% 50%)" },
    animate: { scale: 1, clipPath: "circle(150% at 50% 50%)" },
    exit: { scale: 1.1, clipPath: "circle(0% at 50% 50%)" },
  },
};

export function RouteWipe({
  variant = "left",
  duration = 0.7,
  color = "bg-gradient-to-br from-gold via-[#9B8446] to-carbon",
}: RouteWipeProps) {
  const pathname = usePathname();
  const { isTransitioning } = useRouteFx();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const animation = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : variants[variant];

  const easing = [0.22, 1, 0.36, 1];

  return (
    <AnimatePresence mode="wait">
      {isTransitioning && (
        <motion.div
          key={pathname}
          className={`fixed inset-0 z-[9999] ${color} flex items-center justify-center`}
          initial={animation.initial}
          animate={animation.animate}
          exit={animation.exit}
          transition={{
            duration,
            ease: easing,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: duration * 0.3, duration: 0.4 }}
            className="text-porcelain text-display-sm font-bold tracking-tight"
          >
            Loading...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
