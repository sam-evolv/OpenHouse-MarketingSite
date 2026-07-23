import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

type SectionShellProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  tone?: "carbon" | "ink" | "porcelain";
  labelledBy?: string;
};

const toneStyles = {
  carbon: "bg-carbon text-white",
  ink: "bg-[#0d0d0b] text-white",
  porcelain: "bg-[#eee9df] text-carbon",
};

export function SectionShell({
  children,
  id,
  className = "",
  tone = "carbon",
  labelledBy,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative overflow-hidden py-24 sm:py-28 lg:py-36 ${toneStyles[tone]} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
