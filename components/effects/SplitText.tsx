"use client";

import { useEffect, useRef, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import SplitType from "split-type";

interface SplitTextProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  stagger?: number;
  delay?: number;
  className?: string;
}

export function SplitText({
  children,
  as: Component = "h1",
  stagger = 0.06,
  delay = 0.1,
  className = "",
}: SplitTextProps) {
  const textRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!textRef.current || reducedMotion) return;

    const split = new SplitType(textRef.current, {
      types: "lines",
      lineClass: "split-line",
    });

    return () => split.revert();
  }, [reducedMotion]);

  if (reducedMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component ref={textRef} className={className}>
      {typeof children === "string"
        ? children.split("\n").map((line, i) => (
            <motion.span
              key={i}
              className="block overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: delay + i * stagger }}
            >
              <motion.span
                className="block"
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
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
