"use client";

import { useEffect, useState } from "react";
import { CaseItem } from "@/data/caseStudies";
import { IsoCard } from "./IsoCard";

interface IsoGridProps {
  items: CaseItem[];
}

export function IsoGrid({ items }: IsoGridProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div
      className={`grid gap-12 ${
        prefersReducedMotion
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      }`}
      style={
        prefersReducedMotion
          ? {}
          : {
              gridAutoRows: "auto",
            }
      }
    >
      {items.map((item, index) => (
        <div
          key={item.id}
          className={prefersReducedMotion ? "" : ""}
          style={
            prefersReducedMotion
              ? {}
              : {
                  transform:
                    index % 3 === 2 ? "rotate(0.5deg)" : "rotate(-0.3deg)",
                }
          }
        >
          <IsoCard item={item} elevate={!prefersReducedMotion} />
        </div>
      ))}
    </div>
  );
}
