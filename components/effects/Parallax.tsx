"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useHydratedReducedMotion } from "@/hooks/useHydratedReducedMotion";

interface ParallaxProps {
  children: ReactNode;
  strength?: number;
  start?: number;
  end?: number;
  className?: string;
}

export function Parallax({
  children,
  strength = 50,
  start = 0,
  end = 1,
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useHydratedReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [start, end],
    [strength, -strength]
  );

  return (
    <motion.div ref={ref} style={{ y: reducedMotion ? 0 : y }} className={className}>
      {children}
    </motion.div>
  );
}
