"use client";

import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Download, Eye, EyeOff, Grid3x3 } from "lucide-react";

function PlaceholderGrid({ wireframe, clipPlane }: { wireframe: boolean; clipPlane: boolean }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[10, 10, 10]} />
      <OrbitControls enableDamping dampingFactor={0.05} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Placeholder grid structure */}
      <gridHelper args={[20, 20, "#C8A75E", "#151515"]} />
      
      {/* Sample walls with wireframe toggle */}
      <mesh position={[0, 1, -5]}>
        <boxGeometry args={[10, 2, 0.2]} />
        <meshStandardMaterial color="#9EA3AE" wireframe={wireframe} />
      </mesh>
      <mesh position={[-5, 1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[10, 2, 0.2]} />
        <meshStandardMaterial color="#9EA3AE" wireframe={wireframe} />
      </mesh>
      <mesh position={[5, 1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[10, 2, 0.2]} />
        <meshStandardMaterial color="#9EA3AE" wireframe={wireframe} />
      </mesh>
      <mesh position={[0, 1, 5]}>
        <boxGeometry args={[10, 2, 0.2]} />
        <meshStandardMaterial color="#9EA3AE" wireframe={wireframe} />
      </mesh>
      
      {/* Section cut plane visualization when enabled */}
      {clipPlane && (
        <mesh position={[0, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
          <planeGeometry args={[20, 10]} />
          <meshBasicMaterial color="#C8A75E" transparent opacity={0.2} side={2} />
        </mesh>
      )}
    </>
  );
}

export function FloorplanViewer() {
  const [wireframe, setWireframe] = useState(false);
  const [clipPlane, setClipPlane] = useState(false);

  return (
    <div className="w-full h-full flex flex-col">
      {/* Controls */}
      <div className="bg-slate/50 border-b border-hint/20 p-4">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <h3 className="text-lg font-semibold text-porcelain">3D Floorplan Viewer</h3>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant={wireframe ? "default" : "outline"}
              onClick={() => setWireframe(!wireframe)}
            >
              <Grid3x3 className="w-4 h-4 mr-2" />
              Wireframe
            </Button>
            <Button
              size="sm"
              variant={clipPlane ? "default" : "outline"}
              onClick={() => setClipPlane(!clipPlane)}
            >
              {clipPlane ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
              Section Cut
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href="/floorplans/sample.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="flex-1 bg-carbon relative">
        <Canvas
          shadows
          dpr={typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 1.5) : 1}
        >
          <Suspense fallback={null}>
            <PlaceholderGrid wireframe={wireframe} clipPlane={clipPlane} />
          </Suspense>
        </Canvas>

        {/* Info overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <Card className="bg-slate/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-sm">Placeholder Floorplan</CardTitle>
              <CardDescription className="text-xs">
                No 3D models found. Add your .glb files to /public/models/
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-hint">
                Expected files: site.glb, floorplan.glb. See /public/models/README.md for export instructions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
