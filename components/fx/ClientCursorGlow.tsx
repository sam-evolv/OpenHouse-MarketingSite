"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { CursorGlow } from "./CursorGlow";

export function ClientCursorGlow() {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return null;
  }

  return <CursorGlow />;
}
