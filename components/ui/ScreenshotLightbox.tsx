"use client";

import { useState, useCallback, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { X, ZoomIn } from "lucide-react";

interface ScreenshotLightboxProps {
  src: StaticImageData;
  alt: string;
  quality?: number;
}

export function ScreenshotLightbox({
  src,
  alt,
  quality = 95,
}: ScreenshotLightboxProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, handleClose]);

  return (
    <>
      {/* Clickable thumbnail */}
      <button
        onClick={handleOpen}
        className="group relative w-full cursor-zoom-in rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:border-white/20 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
        aria-label={`View full size: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          className="w-full h-auto"
          quality={quality}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-carbon text-sm font-medium shadow-lg backdrop-blur-sm">
            <ZoomIn className="w-4 h-4" />
            Click to enlarge
          </div>
        </div>
      </button>

      {/* Full-screen lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hint text */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-sm">
            Click anywhere or press Esc to close
          </p>

          {/* Full-size image */}
          <div
            className="relative w-[95vw] max-h-[90vh] overflow-auto rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              className="w-full h-auto rounded-xl"
              quality={100}
              priority
              sizes="95vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
