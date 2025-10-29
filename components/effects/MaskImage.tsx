"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import Image, { ImageProps } from "next/image";

type MaskImageProps = Omit<ImageProps, "alt" | "className"> & {
  alt: string;
  className?: string;
};

export function MaskImage({ alt, className = "", ...props }: MaskImageProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInViewOnce(ref as React.RefObject<Element>, { threshold: 0.3 });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div ref={ref} className={className}>
        {/* @ts-expect-error - ImageProps spread is valid */}
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
      {/* @ts-expect-error - ImageProps spread is valid */}
      <Image alt={alt} {...props} />
    </motion.div>
  );
}
