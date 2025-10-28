import { cn } from "@/lib/utils";
import React from "react";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  badge?: string;
}

export function SectionHeading({
  title,
  description,
  badge,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center space-y-4", className)} {...props}>
      {badge && (
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-gold uppercase border border-gold/30 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-heading-xl sm:text-display-md font-bold text-porcelain">
        {title}
      </h2>
      {description && (
        <p className="text-body-lg text-hint max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
