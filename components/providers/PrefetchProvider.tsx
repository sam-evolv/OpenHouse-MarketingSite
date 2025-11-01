"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const routesToPrefetch = [
  "/",
  "/features",
  "/solutions",
  "/pricing",
  "/case-studies",
  "/docs",
  "/contact",
];

export function PrefetchProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    // Prefetch all main routes on mount for instant navigation
    routesToPrefetch.forEach((route) => {
      router.prefetch(route);
    });
  }, [router]);

  return <>{children}</>;
}
