"use client";

import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  stagger?: boolean;
  staggerDelay?: number;
}

/**
 * Keeps meaningful content visible in the server-rendered page. The site still
 * uses motion in its hero and interactive chapters, but core cards and copy do
 * not depend on IntersectionObserver or JavaScript to appear.
 */
export function Reveal({
  children,
  className = "",
  stagger = false,
}: RevealProps) {
  return (
    <div className={className}>
      {stagger && Array.isArray(children)
        ? children.map((child, index) => <div key={index}>{child}</div>)
        : <div>{children}</div>}
    </div>
  );
}
