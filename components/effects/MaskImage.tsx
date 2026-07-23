"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import Image, { ImageProps } from "next/image";

type MaskImageProps = Omit<ImageProps, "alt" | "className"> & {
  alt: string;
  className?: string;
  /** Class applied to the underlying <img> (e.g. object-cover). */
  imageClassName?: string;
};

export function MaskImage({
  alt,
  className = "",
  imageClassName = "",
  ...props
}: MaskImageProps) {
  // Observe an UNCLIPPED outer wrapper: clip-path on the observed element
  // clips its intersection rect (Blink), so a fully-clipped target reports
  // ratio 0 forever and the reveal would deadlock.
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInViewOnce(ref as React.RefObject<Element>, { threshold: 0.3 });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div ref={ref} className={className}>
        {/* @ts-expect-error - ImageProps spread is valid */}
        <Image alt={alt} className={imageClassName} {...props} />
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <motion.div
        className="relative h-full w-full"
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={
          isInView
            ? { clipPath: "inset(0 0 0% 0)" }
            : { clipPath: "inset(0 0 100% 0)" }
        }
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* @ts-expect-error - ImageProps spread is valid */}
        <Image alt={alt} className={imageClassName} {...props} />
      </motion.div>
    </div>
  );
}
