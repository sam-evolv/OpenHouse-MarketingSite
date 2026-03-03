"use client";

import dynamic from "next/dynamic";
import { Container } from "@/components/ui/container";

const FloorplanViewer = dynamic(
  () => import("@/components/three/FloorplanViewer").then((mod) => ({ default: mod.FloorplanViewer })),
  { ssr: false }
);

export default function DemoPage() {
  return (
    <div className="pt-20 min-h-screen bg-carbon">
      <Container className="py-8">
        <h1 className="text-display-md font-bold text-porcelain mb-4">
          Interactive Floorplan Demo
        </h1>
        <p className="text-body-lg text-hint mb-8">
          Explore 3D floorplans with interactive controls. Use your mouse to orbit, zoom, and inspect the model.
        </p>
      </Container>
      
      <div className="h-[600px] border-y border-hint/20">
        <FloorplanViewer />
      </div>

      <Container className="py-8">
        <div className="bg-slate/50 border border-hint/20 rounded-lg p-6">
          <h3 className="text-heading-md font-bold text-porcelain mb-4">
            Interactive 3D Floor Plans
          </h3>
          <p className="text-body-md text-hint mb-4">
            Every OpenHouse portal includes interactive floor plans that residents can explore in 3D. Orbit, zoom, and inspect room dimensions directly from the browser.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-gold text-carbon hover:bg-gold/90 transition-all duration-300"
          >
            See a Live Demo
          </a>
        </div>
      </Container>
    </div>
  );
}
