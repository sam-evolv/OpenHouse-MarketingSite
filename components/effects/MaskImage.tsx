"use client";

import Image, { ImageProps } from "next/image";

type MaskImageProps = Omit<ImageProps, "alt" | "className"> & {
  alt: string;
  className?: string;
  imageClassName?: string;
};

/**
 * Server-visible image wrapper. It retains the established framing while
 * avoiding a fully closed clip path before hydration or intersection.
 */
export function MaskImage({
  alt,
  className = "",
  imageClassName = "",
  ...props
}: MaskImageProps) {
  return (
    <div className={className}>
      <div className="relative h-full w-full">
        {/* @ts-expect-error - ImageProps spread is valid */}
        <Image alt={alt} className={imageClassName} {...props} />
      </div>
    </div>
  );
}
