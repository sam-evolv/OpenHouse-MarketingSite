"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Returns false during SSR and the first client render, then reflects the
 * user's reduced-motion preference. This keeps server and client markup
 * identical during hydration while still disabling motion immediately after
 * mount.
 */
export function useHydratedReducedMotion(): boolean {
  const prefersReducedMotion = useReducedMotion();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated && Boolean(prefersReducedMotion);
}
