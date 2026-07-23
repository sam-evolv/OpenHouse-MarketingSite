"use client";

import { ReactNode } from "react";

interface SplitTextProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  stagger?: number;
  delay?: number;
  className?: string;
}

/**
 * Preserves the original line treatment without hiding meaningful text before
 * hydration or intersection. Motion remains in the site's interactive layers.
 */
export function SplitText({
  children,
  as: Component = "h1",
  className = "",
}: SplitTextProps) {
  return (
    <Component className={className}>
      {typeof children === "string"
        ? children.split("\n").map((line, index) => (
            <span key={index} className="block overflow-hidden">
              <span className="block">{line}</span>
            </span>
          ))
        : children}
    </Component>
  );
}
