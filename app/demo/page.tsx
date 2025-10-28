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
            About this demo
          </h3>
          <p className="text-body-md text-hint mb-4">
            This is a placeholder demonstration. To see your own floorplans:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-body-md text-hint">
            <li>Export your 3D models as .glb files (see /public/models/README.md)</li>
            <li>Place them in the /public/models/ directory</li>
            <li>Refresh this page to load your models</li>
          </ol>
        </div>
      </Container>
    </div>
  );
}
