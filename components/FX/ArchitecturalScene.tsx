// @ts-nocheck - R3F JSX types conflict with strict mode
"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// Architectural building blocks - abstract minimal forms
function BuildingBlocks() {
  const groupRef = useRef<THREE.Group>();
  
  useFrame((state) => {
    if (groupRef.current) {
      // Subtle rotation for cinematic drift
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -2]}>
      {/* Central tall structure - modern tower */}
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 3, 0.8]} />
        <meshStandardMaterial 
          color="#3a3a3a" 
          metalness={0.5} 
          roughness={0.3} 
          envMapIntensity={0.8}
        />
      </mesh>

      {/* Left wing - residential block */}
      <mesh position={[-2.5, 0.8, -1]} castShadow receiveShadow>
        <boxGeometry args={[1.2, 1.6, 1.2]} />
        <meshStandardMaterial 
          color="#3a3a3a" 
          metalness={0.5} 
          roughness={0.3} 
          envMapIntensity={0.8}
        />
      </mesh>

      {/* Right wing - offset building */}
      <mesh position={[2.2, 1.2, 0.5]} castShadow receiveShadow>
        <boxGeometry args={[1, 2.4, 1]} />
        <meshStandardMaterial 
          color="#3a3a3a" 
          metalness={0.5} 
          roughness={0.3} 
          envMapIntensity={0.8}
        />
      </mesh>

      {/* Gold accent strips - window features with strong glow */}
      <mesh position={[0, 2, 0.41]}>
        <boxGeometry args={[0.6, 0.1, 0.02]} />
        <meshStandardMaterial 
          color="#F6C56E" 
          metalness={0.9} 
          roughness={0.1} 
          emissive="#F6C56E" 
          emissiveIntensity={1.5}
        />
      </mesh>

      <mesh position={[-2.5, 1.2, -0.39]}>
        <boxGeometry args={[0.8, 0.08, 0.02]} />
        <meshStandardMaterial 
          color="#F6C56E" 
          metalness={0.9} 
          roughness={0.1} 
          emissive="#F6C56E" 
          emissiveIntensity={1.5}
        />
      </mesh>

      <mesh position={[2.2, 1.8, 1.01]}>
        <boxGeometry args={[0.7, 0.08, 0.02]} />
        <meshStandardMaterial 
          color="#F6C56E" 
          metalness={0.9} 
          roughness={0.1} 
          emissive="#F6C56E" 
          emissiveIntensity={1.5}
        />
      </mesh>

      {/* Floating abstract panels - architectural details */}
      <mesh position={[-1, 2.5, 1]} rotation={[0, 0.3, 0]}>
        <boxGeometry args={[0.5, 1.5, 0.05]} />
        <meshStandardMaterial 
          color="#3a3a3a" 
          metalness={0.5} 
          roughness={0.3} 
          envMapIntensity={0.8}
        />
      </mesh>

      <mesh position={[1.5, 2, -2]} rotation={[0, -0.5, 0]}>
        <boxGeometry args={[0.6, 1.2, 0.05]} />
        <meshStandardMaterial 
          color="#3a3a3a" 
          metalness={0.5} 
          roughness={0.3} 
          envMapIntensity={0.8}
        />
      </mesh>
    </group>
  );
}

// Reflective floor with black-gold gradient
function ReflectiveFloor() {
  return (
    <mesh 
      rotation={[-Math.PI / 2, 0, 0]} 
      position={[0, 0, 0]} 
      receiveShadow
    >
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial 
        color="#1a1a1a" 
        metalness={0.95} 
        roughness={0.05} 
        envMapIntensity={1.2}
      />
    </mesh>
  );
}

// Moving warm key light - simulates sunlight through architecture
function MovingKeyLight() {
  const lightRef = useRef<THREE.DirectionalLight>();

  useFrame((state) => {
    if (lightRef.current) {
      const time = state.clock.elapsedTime * 0.3;
      lightRef.current.position.x = Math.sin(time) * 5;
      lightRef.current.position.z = Math.cos(time) * 3;
    }
  });

  return (
    <>
      <directionalLight
        ref={lightRef}
        position={[3, 6, 2]}
        intensity={1.5}
        color="#F5C66B"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  );
}

// Cinematic camera with slow drift
function CinematicCamera() {
  const { camera } = useThree();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Subtle parallax pan
    camera.position.x = Math.sin(time * 0.15) * 0.3;
    camera.position.y = 1.5 + Math.sin(time * 0.1) * 0.2;
    
    // Look at center with slight drift
    const lookAtX = Math.sin(time * 0.1) * 0.5;
    const lookAtY = 1 + Math.cos(time * 0.12) * 0.3;
    camera.lookAt(lookAtX, lookAtY, 0);
  });

  return null;
}

// Main scene composition
function Scene({ reduceEffects }: { reduceEffects: boolean }) {
  return (
    <>
      {/* Camera setup */}
      <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={50} />

      {/* Very bright lighting for testing */}
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={3} color="#ffffff" />
      <pointLight position={[0, 3, 3]} intensity={5} color="#F6C56E" />

      {/* Test cube - bright and emissive */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial 
          color="#F6C56E" 
          emissive="#F6C56E"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Simple floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#444444" />
      </mesh>

      {/* Scene objects - commented for testing */}
      {/* <BuildingBlocks />
      <ReflectiveFloor /> */}

      {/* Gold volumetric bloom effect */}
      {!reduceEffects && (
        <EffectComposer>
          <Bloom
            intensity={1.5}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
            height={300}
          />
        </EffectComposer>
      )}
    </>
  );
}

// Fallback for WebGL failure
function FallbackBackground() {
  return (
    <div 
      className="absolute inset-0 bg-gradient-to-br from-carbon via-slate-900 to-carbon"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 30% 40%, rgba(246, 197, 110, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 60%, rgba(200, 167, 94, 0.1) 0%, transparent 50%)
        `
      }}
    />
  );
}

export function ArchitecturalScene() {
  const [reduceEffects, setReduceEffects] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [webglError, setWebglError] = useState(false);
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

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setWebglError(true);
      }
    } catch (e) {
      setWebglError(true);
    }
  }, []);

  // Show fallback if WebGL fails or reduced motion preferred
  if (webglError || prefersReducedMotion) {
    return <FallbackBackground />;
  }

  return (
    <div ref={canvasRef} className="w-full h-full relative">
      {/* Debug indicator */}
      <div className="absolute top-4 left-4 bg-gold/20 text-gold px-3 py-1 text-xs rounded z-50">
        3D Scene Active
      </div>
      
      <Canvas
        shadows={false}
        dpr={[1, 1.5]} // Performance balance
        gl={{ 
          antialias: true, 
          alpha: false,
          powerPreference: "high-performance",
        }}
        frameloop="always"
        onCreated={({ gl, scene }) => {
          console.log("Canvas created successfully!");
          gl.setClearColor("#0A0A0A", 1);
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        }}
        style={{ background: "#0A0A0A" }}
      >
        <Suspense fallback={<mesh><boxGeometry /><meshBasicMaterial color="red" /></mesh>}>
          <Scene reduceEffects={reduceEffects} />
        </Suspense>
      </Canvas>

      {/* Optional effects toggle for performance testing */}
      <button
        onClick={() => setReduceEffects(!reduceEffects)}
        className="absolute bottom-4 right-4 px-3 py-1.5 text-xs text-gold/80 border border-gold/20 rounded-md bg-carbon/30 backdrop-blur-sm hover:bg-carbon/50 hover:border-gold/40 transition-all duration-200 z-50"
        aria-label="Toggle visual effects"
      >
        {reduceEffects ? "Enable" : "Reduce"} FX
      </button>
    </div>
  );
}
