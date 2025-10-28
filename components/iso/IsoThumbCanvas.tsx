"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrthographicCamera, useTexture } from "@react-three/drei";
import * as THREE from "three";

interface ThumbMeshProps {
  texture: string;
}

function ThumbMesh({ texture }: ThumbMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const textureMap = useTexture(texture);

  useFrame(() => {
    if (meshRef.current) {
      const targetY = hovered ? 0.12 : 0;
      const targetRotation = hovered ? -0.06 : 0;

      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        targetY,
        0.1
      );
      meshRef.current.rotation.z = THREE.MathUtils.lerp(
        meshRef.current.rotation.z,
        targetRotation,
        0.1
      );
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <planeGeometry args={[2, 1.5]} />
      <meshStandardMaterial map={textureMap} />
    </mesh>
  );
}

interface IsoThumbCanvasProps {
  thumb: string;
}

export function IsoThumbCanvas({ thumb }: IsoThumbCanvasProps) {
  return (
    <div className="w-full h-full">
      <Canvas
        dpr={Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 1.5)}
        gl={{ antialias: true, alpha: true }}
      >
        <OrthographicCamera
          makeDefault
          position={[8, 10, 8]}
          zoom={120}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <Suspense fallback={null}>
          <ThumbMesh texture={thumb} />
        </Suspense>
      </Canvas>
    </div>
  );
}
