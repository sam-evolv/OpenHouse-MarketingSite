"use client";

import { useEffect, useRef, useState } from "react";

interface Point {
  x: number;
  y: number;
  v: number;
}

interface CursorGlowProps {
  reducedMotion?: boolean;
  enableTouch?: boolean;
  theme?: "dark" | "light";
}

export function CursorGlow({
  reducedMotion = false,
  enableTouch = false,
  theme = "dark",
}: CursorGlowProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const pointsRef = useRef<Point[]>([]);
  const smoothedRef = useRef<Point>({ x: 0, y: 0, v: 0 });
  const lastPosRef = useRef<{ x: number; y: number; time: number }>({
    x: 0,
    y: 0,
    time: 0,
  });
  const isPausedRef = useRef(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(checkTouch);
  }, []);

  useEffect(() => {
    if (reducedMotion || (isTouchDevice && !enableTouch)) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 1.75);

    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(DPR, DPR);
    };

    resize();

    let resizeTimeout: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 150);
    };

    window.addEventListener("resize", debouncedResize);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const drawGlow = (x: number, y: number, radius: number, velocity: number) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      const alpha = Math.min(velocity * 1.2, 1);

      gradient.addColorStop(0, `rgba(200, 167, 94, ${0.35 * alpha})`);
      gradient.addColorStop(0.5, `rgba(200, 167, 94, ${0.18 * alpha})`);
      gradient.addColorStop(1, `rgba(200, 167, 94, ${0.06 * alpha})`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      if (isPausedRef.current) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      const decayAlpha = theme === "dark" ? 0.08 : 0.04;
      const decayColor = theme === "dark" 
        ? `rgba(0, 0, 0, ${decayAlpha})`
        : `rgba(255, 255, 255, ${decayAlpha})`;
      
      ctx.fillStyle = decayColor;
      ctx.fillRect(0, 0, canvas.width / DPR, canvas.height / DPR);

      ctx.globalCompositeOperation = "lighter";

      if (pointsRef.current.length > 0) {
        pointsRef.current.forEach((point, i) => {
          const age = pointsRef.current.length - i;
          const ageFactor = age / pointsRef.current.length;
          const radius = lerp(10, 38, point.v) * ageFactor;

          drawGlow(point.x, point.y, radius, point.v * ageFactor);
        });
      }

      ctx.globalCompositeOperation = "source-over";

      rafRef.current = requestAnimationFrame(animate);
    };

    const handlePointerMove = (e: PointerEvent) => {
      const now = performance.now();
      const dt = now - lastPosRef.current.time;

      if (dt > 0) {
        const dx = e.clientX - lastPosRef.current.x;
        const dy = e.clientY - lastPosRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const velocity = Math.min(distance / dt, 1);

        smoothedRef.current.x = lerp(
          smoothedRef.current.x,
          e.clientX,
          0.18
        );
        smoothedRef.current.y = lerp(
          smoothedRef.current.y,
          e.clientY,
          0.18
        );
        smoothedRef.current.v = lerp(smoothedRef.current.v, velocity, 0.18);

        pointsRef.current.push({
          x: smoothedRef.current.x,
          y: smoothedRef.current.y,
          v: smoothedRef.current.v,
        });

        if (pointsRef.current.length > 24) {
          pointsRef.current.shift();
        }
      }

      lastPosRef.current = { x: e.clientX, y: e.clientY, time: now };
    };

    const handleBlur = () => {
      isPausedRef.current = true;
    };

    const handleFocus = () => {
      isPausedRef.current = false;
    };

    const handleVisibilityChange = () => {
      isPausedRef.current = document.hidden;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearTimeout(resizeTimeout);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [reducedMotion, isTouchDevice, enableTouch, theme]);

  if (reducedMotion || (isTouchDevice && !enableTouch)) {
    return null;
  }

  return <canvas ref={canvasRef} className="oh-cursor-canvas" />;
}
