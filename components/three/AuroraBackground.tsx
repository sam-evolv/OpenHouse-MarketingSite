// @ts-nocheck - R3F JSX types conflict with strict mode
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { auroraVertexShader, auroraFragmentShader } from "@/lib/shaders/aurora";

export function AuroraBackground() {
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useRef({
    uTime: { value: 0 },
    uColorA: { value: new THREE.Color("#0A0A0A") },
    uColorB: { value: new THREE.Color("#151515") },
    uColorC: { value: new THREE.Color("#C8A75E") },
  });

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -10]} rotation={[0, 0, 0]}>
      <planeGeometry args={[100, 100]} />
      <shaderMaterial
        vertexShader={auroraVertexShader}
        fragmentShader={auroraFragmentShader}
        uniforms={uniforms.current}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
