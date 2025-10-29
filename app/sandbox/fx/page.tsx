"use client";

import { useState } from "react";
import { HeadlineMaskScroll } from "@/components/fx/HeadlineMaskScroll";
import { Button } from "@/components/ui/button";

export default function FXSandbox() {
  const [glowEnabled, setGlowEnabled] = useState(true);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [sweep, setSweep] = useState<"vertical" | "horizontal">("vertical");

  return (
    <div className="min-h-screen bg-carbon text-porcelain p-8">

      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-gold mb-8">
          FX Components Sandbox
        </h1>

        <section className="space-y-4 border border-gold/20 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-porcelain">Cursor Glow Controls</h2>
          
          <div className="flex gap-4">
            <Button
              onClick={() => setGlowEnabled(!glowEnabled)}
              variant={glowEnabled ? "default" : "outline"}
              className={glowEnabled ? "bg-gold text-carbon" : ""}
            >
              Glow: {glowEnabled ? "ON" : "OFF"}
            </Button>

            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              variant="outline"
            >
              Theme: {theme}
            </Button>
          </div>

          <div className="text-sm text-hint">
            Move your mouse around to see the cursor glow effect.
            <br />
            DPR is capped at 1.75 for performance.
          </div>
        </section>

        <section className="space-y-4 border border-gold/20 p-6 rounded-lg min-h-[600px]">
          <h2 className="text-2xl font-bold text-porcelain mb-4">Headline Mask Scroll</h2>
          
          <Button
            onClick={() =>
              setSweep(sweep === "vertical" ? "horizontal" : "vertical")
            }
            variant="outline"
            className="mb-8"
          >
            Sweep: {sweep}
          </Button>

          <div className="space-y-16">
            <HeadlineMaskScroll
              text="The AI resident assistant for modern developments"
              sub="Cut support requests, wow buyers, and give residents answers in seconds. One assistant that knows your development inside out."
              sweep={sweep}
            />

            <div className="h-[400px] flex items-center justify-center border border-gold/10 rounded">
              <p className="text-hint">Scroll down to see the mask effect reveal</p>
            </div>

            <HeadlineMaskScroll
              text="Experience the future of property management"
              sub="Powered by advanced AI and designed for modern living"
              sweep={sweep}
            />

            <div className="h-[400px] flex items-center justify-center border border-gold/10 rounded">
              <p className="text-hint">Keep scrolling...</p>
            </div>

            <HeadlineMaskScroll
              text="Built for developers who demand excellence"
              sweep={sweep}
            />
          </div>
        </section>

        <section className="space-y-4 border border-gold/20 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-porcelain">Technical Details</h2>
          
          <div className="space-y-2 text-sm text-hint">
            <p><strong className="text-porcelain">Cursor Glow:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>GPU-accelerated 2D canvas with additive blending</li>
              <li>Ring buffer of 24 points with velocity tracking</li>
              <li>DPR capped at 1.75 for performance</li>
              <li>Pauses on blur and when document is hidden</li>
              <li>Disabled on touch devices by default</li>
              <li>Respects prefers-reduced-motion</li>
            </ul>

            <p className="pt-4"><strong className="text-porcelain">Headline Mask Scroll:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>CSS mask-image gradient tied to scroll progress</li>
              <li>Framer Motion useScroll and useTransform</li>
              <li>Vertical or horizontal sweep options</li>
              <li>Line-by-line animation with stagger</li>
              <li>Reduced motion fallback to simple fade</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
