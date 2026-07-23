import { Parallax } from "@/components/effects/Parallax";
import { MaskImage } from "@/components/effects/MaskImage";
import { SplitText } from "@/components/effects/SplitText";
import interior from "@/attached_assets/stock_images/modern_apartment_liv_8293bb50.jpg";

/**
 * CinematicInterlude — a single full-bleed breath between the technical
 * Energy chapter and the credibility chapter: a real home, one line.
 * No CTA, no icons.
 */
export function CinematicInterlude() {
  return (
    <section className="relative h-[70vh] min-h-[420px] overflow-hidden bg-carbon">
      {/* Image bleeds beyond the frame so the parallax never shows edges */}
      <Parallax strength={40} className="absolute -inset-y-12 inset-x-0">
        <MaskImage
          src={interior}
          alt="Living room of a newly handed-over A-rated home"
          fill
          sizes="100vw"
          quality={70}
          loading="eager"
          className="absolute inset-0"
          imageClassName="object-cover"
        />
      </Parallax>

      <div className="absolute inset-0 bg-carbon/55" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-carbon to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-carbon to-transparent"
        aria-hidden="true"
      />

      <div className="relative h-full flex items-center justify-center px-6">
        <SplitText
          as="p"
          className="text-center font-heading font-bold text-[26px] sm:text-4xl lg:text-[44px] text-porcelain tracking-[-0.02em] leading-tight max-w-3xl"
        >
          Every home keeps what its builder knew.
        </SplitText>
      </div>
    </section>
  );
}
