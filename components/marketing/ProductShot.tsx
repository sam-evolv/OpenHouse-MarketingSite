import Image, { StaticImageData } from "next/image";

/**
 * ProductShot — the framed real-product screenshot: accent glow behind a
 * bordered, deep-shadowed frame. Extracted from the pattern repeated on the
 * sales, build, and intelligence pages.
 */

const ACCENTS = {
  gold: {
    glow: "from-gold/25 via-amber-500/10 to-gold/25",
    border: "border-gold/25",
  },
  emerald: {
    glow: "from-emerald-500/25 via-emerald-400/10 to-emerald-500/25",
    border: "border-emerald-500/25",
  },
  violet: {
    glow: "from-violet-500/30 via-purple-500/10 to-violet-500/30",
    border: "border-violet-400/30",
  },
} as const;

interface ProductShotProps {
  src: StaticImageData;
  alt: string;
  accent?: keyof typeof ACCENTS;
  sizes?: string;
  className?: string;
}

export function ProductShot({
  src,
  alt,
  accent = "gold",
  sizes = "(min-width: 1280px) 1100px, 100vw",
  className = "",
}: ProductShotProps) {
  const a = ACCENTS[accent];
  return (
    <div className={`relative ${className}`}>
      <div
        className={`absolute -inset-4 sm:-inset-6 bg-gradient-to-r ${a.glow} rounded-3xl blur-2xl`}
        aria-hidden="true"
      />
      <div
        className={`relative rounded-2xl overflow-hidden border ${a.border} shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]`}
      >
        <Image
          src={src}
          alt={alt}
          className="w-full h-auto"
          placeholder="blur"
          sizes={sizes}
        />
      </div>
    </div>
  );
}
