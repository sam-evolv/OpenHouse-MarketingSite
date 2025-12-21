"use client";

import { useRef, useEffect, useState } from "react";
import { useInViewOnce } from "@/hooks/useInViewOnce";

interface CountUpProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  isLoading?: boolean;
}

export function CountUp({
  end,
  duration = 1.5,
  decimals = 0,
  suffix = "",
  prefix = "",
  className = "",
  isLoading = false,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInViewOnce(ref as React.RefObject<Element>, { threshold: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || isLoading) return;

    let startTime: number | null = null;
    const startValue = 0;
    const change = end - startValue;

    function easeOutExpo(t: number): number {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function animate(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const easedProgress = easeOutExpo(progress);

      setCount(startValue + change * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, end, duration, isLoading]);

  if (isLoading) {
    return (
      <span ref={ref} className={className}>
        <SkeletonLoader width="4rem" />
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function SkeletonLoader({ 
  width = "100%", 
  height = "1em",
  className = "" 
}: { 
  width?: string; 
  height?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-block bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded animate-shimmer ${className}`}
      style={{ 
        width, 
        height,
        backgroundSize: "200% 100%",
      }}
      aria-hidden="true"
    />
  );
}
