"use client";

import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { motion, useReducedMotion } from "framer-motion";
import * as THREE from "three";

function IsometricTile({ position, delay }: { position: [number, number, number]; delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useFrame((state) => {
    if (!meshRef.current) return;

    if (isAnimated) {
      const target = position[1] + 0.12;
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        target,
        0.1
      );

      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[position[0], 0, position[2]]}>
      <boxGeometry args={[0.9, 0.2, 0.9]} />
      <meshStandardMaterial color="#C8A75E" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

function Scene() {
  const tiles = [
    [-1.5, 0, -1.5],
    [-0.5, 0, -1.5],
    [0.5, 0, -1.5],
    [1.5, 0, -1.5],
    [-1.5, 0, -0.5],
    [-0.5, 0, -0.5],
    [0.5, 0, -0.5],
    [1.5, 0, -0.5],
  ] as [number, number, number][];

  return (
    <>
      <PerspectiveCamera makeDefault position={[4, 4, 4]} fov={35} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
        maxPolarAngle={Math.PI / 2.2}
        minPolarAngle={Math.PI / 3}
      />

      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <pointLight position={[-5, 5, 0]} intensity={0.5} color="#C8A75E" />

      <gridHelper args={[10, 20, "#C8A75E", "#1a1a1a"]} position={[0, -0.5, 0]} />

      {tiles.map((pos, i) => (
        <IsometricTile key={i} position={pos} delay={i * 0.1} />
      ))}
    </>
  );
}

export function CanvasHUD() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className="w-full h-[400px] bg-slate/50 border border-hint/20 rounded-lg flex items-center justify-center">
        <p className="text-hint text-sm">3D visualization disabled (reduced motion)</p>
      </div>
    );
  }

  return (
    <motion.div
      className="w-full h-[400px] bg-carbon border border-hint/20 rounded-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <Canvas
        shadows
        dpr={typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 1.5) : 1}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
