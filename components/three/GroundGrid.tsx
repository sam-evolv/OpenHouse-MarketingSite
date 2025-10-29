// @ts-nocheck - R3F JSX types conflict with strict mode
"use client";

import { useRef } from "react";
import * as THREE from "three";

export function GroundGrid() {
  const gridRef = useRef<THREE.GridHelper>(null);

  return (
    <>
      <gridHelper
        ref={gridRef}
        args={[50, 50, "#C8A75E", "#151515"]}
        position={[0, -2, 0]}
      />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.01, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial
          color="#0A0A0A"
          transparent
          opacity={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}
