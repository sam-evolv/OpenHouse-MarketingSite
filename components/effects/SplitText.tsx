"use client";

import { useRef, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInViewOnce } from "@/hooks/useInViewOnce";

interface SplitTextProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  stagger?: number;
  delay?: number;
  className?: string;
}

/**
 * Per-line masked rise for string children (split on \n).
 * The in-view trigger observes the component root — never the translated
 * inner spans, whose intersection is clipped by their overflow-hidden
 * parents and can deadlock a threshold.
 */
export function SplitText({
  children,
  as: Component = "h1",
  stagger = 0.06,
  delay = 0.1,
  className = "",
}: SplitTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInViewOnce(ref as React.RefObject<Element>, { threshold: 0.3 });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component ref={ref as any} className={className}>
      {typeof children === "string"
        ? children.split("\n").map((line, i) => (
            <motion.span
              key={i}
              className="block overflow-hidden"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: delay + i * stagger }}
            >
              <motion.span
                className="block"
                initial={{ y: 24, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
                transition={{
                  duration: 0.7,
                  delay: delay + i * stagger,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line}
              </motion.span>
            </motion.span>
          ))
        : children}
    </Component>
  );
}
