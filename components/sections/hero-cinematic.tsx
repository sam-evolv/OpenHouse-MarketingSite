"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/interactive/Magnetic";
import content from "@/i18n/en.json";

export function HeroCinematic() {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);
      
      const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
      mediaQuery.addEventListener("change", handleChange);
      
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    let rafId: number;
    let lastUpdate = 0;
    const throttleMs = 50;

    const handleMouse = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastUpdate < throttleMs) return;
      
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        setMousePos({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
        lastUpdate = now;
      });
    };
    
    window.addEventListener("mousemove", handleMouse);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isMounted]);

  return (
    <section 
      className="relative flex items-center justify-center overflow-hidden hero-section"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0A0A0A",
      }}
    >
      {/* Dynamic cursor glow */}
      {isMounted && (
        <div
          className="absolute pointer-events-none cursor-glow"
          style={{
            width: "800px",
            height: "800px",
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(246, 197, 110, 0.2), transparent 70%)",
            filter: "blur(120px)",
            transition: "left 0.5s ease-out, top 0.5s ease-out",
          }}
        />
      )}

      {/* Static ambient glow */}
      <div
        className="absolute pointer-events-none ambient-glow"
        style={{
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "1200px",
          height: "600px",
          borderRadius: "50%",
          background: "rgba(246, 197, 110, 0.1)",
          filter: "blur(120px)",
        }}
      />

      {/* Floating geometric shapes */}
      {isMounted && !prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden floating-shapes">
          {/* Animated gold lines */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={`line-${i}`}
              className={`absolute geometric-line geometric-line-${i % 4}`}
              style={{
                width: "1px",
                height: "128px",
                background: "linear-gradient(to bottom, rgba(246, 197, 110, 0.2), rgba(246, 197, 110, 0.1), transparent)",
                left: `${(i * 13 + 10) % 100}%`,
                top: `${(i * 17 + 5) % 100}%`,
                transform: `rotate(${i * 45}deg)`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${15 + i * 2}s`,
              }}
            />
          ))}
          
          {/* Floating orbs */}
          {[0, 1, 2, 3].map((i) => (
            <div
              key={`orb-${i}`}
              className="absolute rounded-full floating-orb"
              style={{
                width: "8px",
                height: "8px",
                background: "rgba(246, 197, 110, 0.3)",
                left: `${(i * 25 + 10) % 90}%`,
                top: `${(i * 30 + 15) % 85}%`,
                filter: "blur(2px)",
                animationDuration: `${12 + i * 3}s`,
                animationDelay: `${i * 1.5}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto hero-content">
        {/* Headline with glow */}
        <div className="mb-8 relative fade-in-up" style={{ animationDelay: "0.2s" }}>
          {/* Pulsing light behind text */}
          <div className="absolute inset-0 opacity-30 text-glow">
            <div style={{
              background: "linear-gradient(to right, transparent, rgba(246, 197, 110, 0.4), transparent)",
              height: "100%",
            }} />
          </div>

          <h1 
            className="relative"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "0",
              background: "linear-gradient(to bottom, #ffffff 0%, #ffffff 50%, rgba(255,255,255,0.9) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {content.hero.title}
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="mb-12 max-w-3xl mx-auto fade-in-up"
          style={{
            fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
            lineHeight: 1.6,
            color: "rgba(255, 255, 255, 0.8)",
            animationDelay: "0.5s",
          }}
        >
          {content.hero.subtitle}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <Magnetic>
            <Button 
              size="lg"
              className="text-lg font-semibold px-8 py-6 transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "#F6C56E",
                color: "#000",
                boxShadow: "0 20px 60px rgba(246, 197, 110, 0.2)",
              }}
              asChild
            >
              <a href="/contact">{content.hero.cta_primary}</a>
            </Button>
          </Magnetic>
          
          <Magnetic>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              style={{
                borderWidth: "2px",
                borderColor: "rgba(246, 197, 110, 0.4)",
                color: "#F6C56E",
              }}
              asChild
            >
              <a href="#features">{content.hero.cta_secondary}</a>
            </Button>
          </Magnetic>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute left-1/2 scroll-indicator fade-in"
          style={{
            bottom: "3rem",
            transform: "translateX(-50%)",
            color: "rgba(246, 197, 110, 0.6)",
            fontSize: "0.875rem",
            textAlign: "center",
            animationDelay: "1.2s",
          }}
        >
          <div style={{ marginBottom: "0.5rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll</div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ margin: "0 auto" }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.02,
          backgroundImage: `
            linear-gradient(rgba(246, 197, 110, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(246, 197, 110, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Global CSS animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }

        @keyframes floatLine0 {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg); 
            opacity: 0.2; 
          }
          50% { 
            transform: translate(20px, -30px) rotate(180deg); 
            opacity: 0.4; 
          }
        }

        @keyframes floatLine1 {
          0%, 100% { 
            transform: translate(0, 0) rotate(45deg); 
            opacity: 0.15; 
          }
          50% { 
            transform: translate(-25px, 40px) rotate(225deg); 
            opacity: 0.35; 
          }
        }

        @keyframes floatLine2 {
          0%, 100% { 
            transform: translate(0, 0) rotate(90deg); 
            opacity: 0.25; 
          }
          50% { 
            transform: translate(30px, 20px) rotate(270deg); 
            opacity: 0.45; 
          }
        }

        @keyframes floatLine3 {
          0%, 100% { 
            transform: translate(0, 0) rotate(135deg); 
            opacity: 0.2; 
          }
          50% { 
            transform: translate(-20px, -35px) rotate(315deg); 
            opacity: 0.4; 
          }
        }

        @keyframes floatOrb {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
            opacity: 0.3; 
          }
          50% { 
            transform: translate(15px, -25px) scale(1.5); 
            opacity: 0.6; 
          }
        }

        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }

        .fade-in {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }

        .ambient-glow {
          animation: pulse 8s ease-in-out infinite;
        }

        .text-glow {
          filter: blur(60px);
          animation: pulse 8s ease-in-out infinite;
        }

        .scroll-indicator {
          animation: fadeIn 1s ease-out forwards, bounce 3s ease-in-out 1.2s infinite;
        }

        .geometric-line-0 {
          animation: floatLine0 ease-in-out infinite;
        }

        .geometric-line-1 {
          animation: floatLine1 ease-in-out infinite;
        }

        .geometric-line-2 {
          animation: floatLine2 ease-in-out infinite;
        }

        .geometric-line-3 {
          animation: floatLine3 ease-in-out infinite;
        }

        .floating-orb {
          animation: floatOrb ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
