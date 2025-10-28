import Lenis from "@studio-freight/lenis";

let lenisInstance: Lenis | null = null;
let rafId: number | null = null;

export function createLenis() {
  if (typeof window === "undefined") return null;

  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  });

  return lenisInstance;
}

export function startLenis() {
  if (!lenisInstance) return;

  function raf(time: number) {
    lenisInstance?.raf(time);
    rafId = requestAnimationFrame(raf);
  }

  rafId = requestAnimationFrame(raf);
}

export function stopLenis() {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
}

export function destroyLenis() {
  stopLenis();
  lenisInstance?.destroy();
  lenisInstance = null;
}

export function getLenis() {
  return lenisInstance;
}

export function onScroll(callback: (lenis: Lenis) => void) {
  if (!lenisInstance) return () => {};
  lenisInstance.on("scroll", callback);
  return () => lenisInstance?.off("scroll", callback);
}
