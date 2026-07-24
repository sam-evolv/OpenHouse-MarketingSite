"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
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
 *
 * Text is server-rendered visible; the entrance is armed after hydration
 * only when the heading is still below the viewport, so nothing is hidden
 * before JavaScript runs.
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
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (reducedMotion || armed) return;
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top > window.innerHeight) {
      setArmed(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]);

  if (reducedMotion) {
    return <Component className={className}>{children}</Component>;
  }

  const show = !armed || isInView;

  return (
    <Component ref={ref as any} className={className}>
      {typeof children === "string"
        ? children.split("\n").map((line, i) => (
            <motion.span
              key={i}
              className="block overflow-hidden"
              initial={false}
              animate={show ? { opacity: 1 } : { opacity: 0 }}
              transition={show ? { delay: delay + i * stagger } : { duration: 0 }}
            >
              <motion.span
                className="block"
                initial={false}
                animate={show ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
                transition={
                  show
                    ? {
                        duration: 0.7,
                        delay: delay + i * stagger,
                        ease: [0.22, 1, 0.36, 1],
                      }
                    : { duration: 0 }
                }
              >
                {line}
              </motion.span>
            </motion.span>
          ))
        : children}
    </Component>
  );
}
