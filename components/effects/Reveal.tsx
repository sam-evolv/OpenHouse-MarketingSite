"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInViewOnce } from "@/hooks/useInViewOnce";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  stagger?: boolean;
  staggerDelay?: number;
}

/**
 * Scroll-entrance reveal that never hides server-rendered content.
 * The markup ships visible (initial={false}); after hydration, elements
 * still below the viewport are "armed" hidden and animate in on view.
 * Without JavaScript, or with reduced motion, everything simply shows.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  stagger = false,
  staggerDelay = 0.06,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInViewOnce(ref as React.RefObject<Element>, { threshold: 0.2 });
  const reducedMotion = useReducedMotion();
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (reducedMotion || armed) return;
    const el = ref.current;
    if (!el) return;
    // Arm the entrance only for content still below the fold at hydration.
    if (el.getBoundingClientRect().top > window.innerHeight) {
      setArmed(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  const hidden = armed && !isInView;

  const containerVariants = {
    hidden: { transition: { duration: 0 } },
    visible: {
      transition: {
        staggerChildren: stagger ? staggerDelay : 0,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 24,
      opacity: 0,
      transition: { duration: 0 },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={hidden ? "hidden" : "visible"}
      variants={stagger ? containerVariants : undefined}
    >
      {stagger ? (
        Array.isArray(children) ? (
          children.map((child, i) => (
            <motion.div key={i} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        ) : (
          <motion.div variants={itemVariants}>{children}</motion.div>
        )
      ) : (
        <motion.div variants={itemVariants}>{children}</motion.div>
      )}
    </motion.div>
  );
}
