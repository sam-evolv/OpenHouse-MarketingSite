"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouteFx } from "./useRouteFx";

export function RouteTransitionHandler() {
  const pathname = usePathname();
  const { start, done } = useRouteFx();

  useEffect(() => {
    // Start transition
    start();

    // End transition after a brief delay to allow page to mount
    const timer = setTimeout(() => {
      done();
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname, start, done]);

  return null;
}
