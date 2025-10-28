"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import Image, { ImageProps } from "next/image";

interface MaskImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
  className?: string;
}

export function MaskImage({ alt, className = "", ...props }: MaskImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInViewOnce(ref, { threshold: 0.3 });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className={className}>
        <Image alt={alt} {...props} />
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={
        isInView
          ? { clipPath: "inset(0 0 0% 0)" }
          : { clipPath: "inset(0 0 100% 0)" }
      }
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image alt={alt} {...props} />
    </motion.div>
  );
}
