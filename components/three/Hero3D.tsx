"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { AuroraBackground } from "./AuroraBackground";
import { GroundGrid } from "./GroundGrid";
import { AssistantOrb } from "./AssistantOrb";

function Scene({ reduceEffects }: { reduceEffects: boolean }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={50} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
        autoRotate
        autoRotateSpeed={0.5}
        dampingFactor={0.05}
        enableDamping
      />
      
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.8}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-5, 5, -5]} intensity={0.3} color="#C8A75E" />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#C8A75E" />

      {/* Scene objects */}
      <AuroraBackground />
      <GroundGrid />
      <AssistantOrb />

      {/* Post-processing */}
      {!reduceEffects && (
        <EffectComposer>
          <Bloom
            intensity={0.5}
            luminanceThreshold={0.3}
            luminanceSmoothing={0.9}
            height={300}
          />
          <Vignette eskil={false} offset={0.1} darkness={0.5} />
        </EffectComposer>
      )}
    </>
  );
}

function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="text-gold">Loading 3D scene...</div>
    </div>
  );
}

export function Hero3D() {
  const [reduceEffects, setReduceEffects] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (prefersReducedMotion) {
    return null; // Parent will show fallback
  }

  return (
    <div ref={canvasRef} className="w-full h-full">
      <Canvas
        shadows
        dpr={typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 1.5) : 1}
        gl={{ antialias: true, alpha: true }}
        frameloop="always"
      >
        <Suspense fallback={null}>
          <Scene reduceEffects={reduceEffects} />
        </Suspense>
      </Canvas>
      
      {/* Effects toggle */}
      <button
        onClick={() => setReduceEffects(!reduceEffects)}
        className="absolute bottom-4 right-4 px-4 py-2 text-xs text-gold border border-gold/30 rounded-lg bg-carbon/50 backdrop-blur-sm hover:bg-carbon/70 transition-colors"
        aria-label="Toggle visual effects"
      >
        {reduceEffects ? "Enable" : "Reduce"} Effects
      </button>
    </div>
  );
}
