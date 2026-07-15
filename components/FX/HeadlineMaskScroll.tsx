"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface HeadlineMaskScrollProps {
  text: string;
  sub?: string;
  sweep?: "vertical" | "horizontal";
  className?: string;
}

export function HeadlineMaskScroll({
  text,
  sub,
  sweep = "vertical",
  className = "",
}: HeadlineMaskScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const maskStart = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    sweep === "vertical" ? [-100, 0, 100] : [-200, 0, 200]
  );

  const maskEnd = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    sweep === "vertical" ? [100, 200, 300] : [0, 200, 400]
  );

  useEffect(() => {
    const words = text.split(" ");
    const wordsPerLine = Math.ceil(words.length / 3);
    const newLines: string[] = [];

    for (let i = 0; i < words.length; i += wordsPerLine) {
      newLines.push(words.slice(i, i + wordsPerLine).join(" "));
    }

    setLines(newLines);
  }, [text]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2,
      },
    },
  };

  const lineVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  if (prefersReducedMotion) {
    return (
      <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
        <motion.h1
          className="oh-mask-headline text-display-lg font-bold text-porcelain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {text}
        </motion.h1>
        {sub && (
          <motion.p
            className="mt-4 text-heading-md text-hint max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {sub}
          </motion.p>
        )}
      </div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.h1
        className="oh-mask-headline text-display-lg font-bold text-porcelain"
        style={
          sweep === "vertical"
            ? {
                WebkitMaskImage: useTransform(
                  [maskStart, maskEnd],
                  ([start, end]) =>
                    `linear-gradient(180deg, transparent ${start}px, black ${end}px)`
                ),
                maskImage: useTransform(
                  [maskStart, maskEnd],
                  ([start, end]) =>
                    `linear-gradient(180deg, transparent ${start}px, black ${end}px)`
                ),
              }
            : {
                WebkitMaskImage: useTransform(
                  [maskStart, maskEnd],
                  ([start, end]) =>
                    `linear-gradient(90deg, transparent ${start}px, black ${end}px)`
                ),
                maskImage: useTransform(
                  [maskStart, maskEnd],
                  ([start, end]) =>
                    `linear-gradient(90deg, transparent ${start}px, black ${end}px)`
                ),
              }
        }
      >
        {lines.map((line, i) => (
          <motion.span
            key={i}
            className="block"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: i * 0.06 + 0.2,
              ease: [0.22, 1, 0.36, 1] as any,
            }}
          >
            {line}
          </motion.span>
        ))}
      </motion.h1>
      {sub && (
        <motion.p
          className="mt-4 text-heading-md text-hint max-w-3xl mx-auto"
          variants={lineVariant}
        >
          {sub}
        </motion.p>
      )}
    </motion.div>
  );
}
