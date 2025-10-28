"use client";

import { useEffect, ReactNode } from "react";
import { createLenis, startLenis, stopLenis, destroyLenis } from "@/lib/scroll/lenis";

export function ScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = createLenis();
    if (lenis) {
      startLenis();
    }

    return () => {
      stopLenis();
      destroyLenis();
    };
  }, []);

  return <>{children}</>;
}
