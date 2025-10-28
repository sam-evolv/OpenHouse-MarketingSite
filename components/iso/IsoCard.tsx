"use client";

import Image from "next/image";
import Link from "next/link";
import { CaseItem } from "@/data/caseStudies";
import { useRouteFx } from "@/components/transitions/useRouteFx";

interface IsoCardProps {
  item: CaseItem;
  elevate?: boolean;
}

export function IsoCard({ item, elevate = true }: IsoCardProps) {
  const { start } = useRouteFx();

  const handleClick = () => {
    start();
  };

  return (
    <div className="iso-scene">
      <div className="iso">
        <Link
          href={item.href}
          onClick={handleClick}
          className="block iso-card"
          data-elevate={elevate}
          aria-label={`View ${item.title} case study`}
        >
          <div className="rounded-2xl overflow-hidden bg-[#151515] border border-hint/10">
            <div className="relative aspect-[4/3] bg-slate">
              <Image
                src={item.thumb}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="mt-3 flex items-start justify-between gap-2">
            <div>
              <h3 className="text-porcelain text-lg font-semibold">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-hint text-sm mt-0.5">{item.subtitle}</p>
              )}
            </div>
            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 justify-end">
                {item.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 py-0.5 rounded-full text-xs bg-gold/10 text-gold border border-gold/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}
