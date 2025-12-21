"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { 
  FileText, 
  Phone, 
  Mail, 
  MessageSquare, 
  AlertTriangle,
  FileQuestion,
  PhoneMissed,
  MailWarning,
  Smartphone,
  X
} from "lucide-react";

const CHAOS_ICONS = [
  { Icon: FileText, x: 5, y: 10, rotation: -15, delay: 0, color: "text-red-400" },
  { Icon: Phone, x: 20, y: 30, rotation: 12, delay: 0.1, color: "text-orange-400" },
  { Icon: Mail, x: 10, y: 55, rotation: -8, delay: 0.2, color: "text-red-500" },
  { Icon: MessageSquare, x: 35, y: 15, rotation: 20, delay: 0.15, color: "text-yellow-500" },
  { Icon: AlertTriangle, x: 50, y: 50, rotation: -25, delay: 0.25, color: "text-red-500" },
  { Icon: FileQuestion, x: 65, y: 25, rotation: 15, delay: 0.3, color: "text-orange-400" },
  { Icon: PhoneMissed, x: 25, y: 70, rotation: -12, delay: 0.35, color: "text-red-400" },
  { Icon: MailWarning, x: 55, y: 65, rotation: 8, delay: 0.4, color: "text-yellow-500" },
  { Icon: FileText, x: 75, y: 40, rotation: -20, delay: 0.45, color: "text-orange-400" },
  { Icon: Phone, x: 40, y: 80, rotation: 25, delay: 0.5, color: "text-red-400" },
  { Icon: X, x: 70, y: 75, rotation: -18, delay: 0.55, color: "text-red-500" },
  { Icon: AlertTriangle, x: 15, y: 40, rotation: 10, delay: 0.6, color: "text-yellow-500" },
  { Icon: X, x: 85, y: 20, rotation: 45, delay: 0.65, color: "text-red-400" },
  { Icon: MailWarning, x: 80, y: 60, rotation: -30, delay: 0.7, color: "text-orange-400" },
];

function ChaosIcon({ 
  Icon, 
  x, 
  y, 
  rotation, 
  progress,
  color
}: { 
  Icon: typeof FileText; 
  x: number; 
  y: number; 
  rotation: number; 
  progress: number;
  color: string;
}) {
  return (
    <div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
    >
      <Icon 
        className={`w-8 h-8 sm:w-10 sm:h-10 ${color}`}
        strokeWidth={2.5}
      />
    </div>
  );
}

function NFCTag({ progress }: { progress: number }) {
  const opacity = Math.min(1, progress * 2);
  const scale = 0.85 + progress * 0.15;
  
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity }}
    >
      <motion.div
        className="relative"
        animate={{ rotateY: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ scale, transformStyle: "preserve-3d" }}
      >
        <div className="relative w-32 h-32 sm:w-40 sm:h-40">
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/30 to-gold/10 border border-gold/50"
            animate={{
              boxShadow: [
                "0 0 20px rgba(200,167,94,0.3), 0 0 40px rgba(200,167,94,0.1)",
                "0 0 40px rgba(200,167,94,0.5), 0 0 80px rgba(200,167,94,0.2)",
                "0 0 20px rgba(200,167,94,0.3), 0 0 40px rgba(200,167,94,0.1)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <Smartphone className="w-14 h-14 sm:w-16 sm:h-16 text-gold" strokeWidth={1.5} />
          </div>
          
          <motion.div
            className="absolute -inset-4 rounded-3xl border border-gold/20"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -inset-8 rounded-3xl border border-gold/10"
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
        </div>
        
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-gold/20 border border-gold/40 rounded-full">
          <span className="text-xs font-mono text-gold">NFC</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function DragHandle({ isDragging }: { isDragging: boolean }) {
  return (
    <svg 
      width="48" 
      height="48" 
      viewBox="0 0 48 48" 
      className="drop-shadow-lg"
      aria-hidden="true"
    >
      <circle 
        cx="24" 
        cy="24" 
        r="22" 
        fill="#0A0A0A"
        stroke="#C8A75E"
        strokeWidth="3"
      />
      <circle 
        cx="24" 
        cy="24" 
        r="18" 
        fill="none"
        stroke="rgba(200,167,94,0.3)"
        strokeWidth="1"
      />
      <line x1="18" y1="16" x2="18" y2="32" stroke="#C8A75E" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <line x1="24" y1="14" x2="24" y2="34" stroke="#C8A75E" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="30" y1="16" x2="30" y2="32" stroke="#C8A75E" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      {isDragging && (
        <circle 
          cx="24" 
          cy="24" 
          r="22" 
          fill="none"
          stroke="#C8A75E"
          strokeWidth="2"
          opacity="0.5"
        >
          <animate attributeName="r" values="22;28;22" dur="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="1s" repeatCount="indefinite" />
        </circle>
      )}
    </svg>
  );
}

export function ChaosControlSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  
  const sliderPosition = useMotionValue(50);
  const smoothPosition = useSpring(sliderPosition, { damping: 30, stiffness: 300 });
  
  const progress = useTransform(smoothPosition, [0, 100], [0, 1]);
  const [progressValue, setProgressValue] = useState(0.5);

  useEffect(() => {
    const unsubscribe = progress.on("change", (v) => setProgressValue(v));
    return () => unsubscribe();
  }, [progress]);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || !isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    sliderPosition.set(percentage);
  }, [isDragging, sliderPosition]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    handleMove(e.clientX);
  }, [handleMove]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 2;
    let newPosition = sliderPosition.get();
    
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        newPosition = Math.max(5, newPosition - step);
        sliderPosition.set(newPosition);
        break;
      case "ArrowRight":
        e.preventDefault();
        newPosition = Math.min(95, newPosition + step);
        sliderPosition.set(newPosition);
        break;
      case "Home":
        e.preventDefault();
        sliderPosition.set(5);
        break;
      case "End":
        e.preventDefault();
        sliderPosition.set(95);
        break;
    }
  }, [sliderPosition]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      {/* Top Labels */}
      <div className="flex justify-between items-center mb-4 px-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <span className="text-sm font-semibold text-red-400">Before: Fragmentation</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gold">After: Centralised Intelligence</span>
          <div className="w-3 h-3 rounded-full bg-gold" />
        </div>
      </div>

      <div 
        ref={containerRef}
        className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden border border-white/10 select-none"
        style={{ touchAction: "none" }}
        role="group"
        aria-label="Before and after comparison slider"
      >
        {/* Before Panel */}
        <motion.div 
          className="absolute inset-0"
          style={{ 
            clipPath: `inset(0 ${smoothPosition.get()}% 0 0)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 30%, rgba(239,68,68,0.25) 0%, transparent 40%),
                  radial-gradient(circle at 70% 60%, rgba(249,115,22,0.2) 0%, transparent 35%),
                  radial-gradient(circle at 40% 80%, rgba(234,179,8,0.15) 0%, transparent 30%),
                  radial-gradient(circle at 80% 20%, rgba(239,68,68,0.2) 0%, transparent 30%)
                `,
              }}
            />
            
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 50px,
                rgba(255,255,255,0.03) 50px,
                rgba(255,255,255,0.03) 51px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 50px,
                rgba(255,255,255,0.03) 50px,
                rgba(255,255,255,0.03) 51px
              )`
            }} />
            
            {CHAOS_ICONS.map((icon, index) => (
              <ChaosIcon
                key={index}
                Icon={icon.Icon}
                x={icon.x}
                y={icon.y}
                rotation={icon.rotation}
                progress={progressValue}
                color={icon.color}
              />
            ))}
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8 py-6 bg-black/60 backdrop-blur-sm rounded-2xl border border-red-500/30">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  The Old Way
                </h3>
                <p className="text-sm text-gray-400 mt-4 max-w-xs">
                  Scattered emails, missed calls, and traditional Handover Files lost in transit
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* After Panel */}
        <motion.div 
          className="absolute inset-0"
          style={{ 
            clipPath: `inset(0 0 0 ${100 - smoothPosition.get()}%)`,
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #0a1628 0%, #050a12 50%, #000000 100%)",
            }}
          >
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 70% 40%, rgba(200,167,94,0.15) 0%, transparent 40%),
                  radial-gradient(circle at 30% 70%, rgba(200,167,94,0.1) 0%, transparent 30%)
                `,
              }}
            />
            
            <NFCTag progress={progressValue} />
            
            <div 
              className="absolute inset-0 flex flex-col items-center justify-end pb-24 sm:pb-28 z-10"
              style={{ opacity: Math.min(1, (progressValue - 0.2) * 2) }}
            >
              <div className="text-center px-8 py-6 bg-black/60 backdrop-blur-sm rounded-2xl border border-gold/30">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-porcelain">
                  The OpenHouse Way
                </h3>
                <p className="text-sm text-gray-400 mt-4 max-w-xs">
                  One AI portal that knows everything about your home
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Draggable Handle */}
        <motion.div
          ref={handleRef}
          className={`absolute top-0 bottom-0 w-1 cursor-ew-resize z-20 ${
            isFocused ? "outline-none" : ""
          }`}
          style={{ left: `${smoothPosition.get()}%`, marginLeft: "-24px", width: "48px" }}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="slider"
          aria-label="Comparison slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(sliderPosition.get())}
          aria-valuetext={`${Math.round(100 - sliderPosition.get())}% Before, ${Math.round(sliderPosition.get())}% After`}
        >
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5 bg-gradient-to-b from-gold/80 via-gold to-gold/80" />
          
          {/* Center handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <DragHandle isDragging={isDragging || isFocused} />
          </div>
          
          {/* Glow effect */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-px -ml-px bg-gold/30"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>

        {/* Bottom instruction */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs text-hint/60 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
          <span>← Drag or use arrow keys →</span>
        </div>

        {/* Focus ring for accessibility */}
        {isFocused && (
          <div className="absolute inset-0 rounded-2xl ring-2 ring-gold/50 ring-offset-2 ring-offset-carbon pointer-events-none" />
        )}
      </div>
    </div>
  );
}
