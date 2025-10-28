"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { orbVertexShader, orbFragmentShader } from "@/lib/shaders/orb";

export function AssistantOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useRef({
    uTime: { value: 0 },
    uColor: { value: new THREE.Color("#151515") },
    uGlowColor: { value: new THREE.Color("#C8A75E") },
  });

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.elapsedTime;
      
      // Gentle rotation
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} castShadow>
      <icosahedronGeometry args={[1.5, 16]} />
      <shaderMaterial
        vertexShader={orbVertexShader}
        fragmentShader={orbFragmentShader}
        uniforms={uniforms.current}
      />
    </mesh>
  );
}
