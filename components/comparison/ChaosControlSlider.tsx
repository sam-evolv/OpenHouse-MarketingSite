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
  Smartphone
} from "lucide-react";

const CHAOS_ICONS = [
  { Icon: FileText, x: 8, y: 15, rotation: -15, delay: 0 },
  { Icon: Phone, x: 25, y: 35, rotation: 12, delay: 0.1 },
  { Icon: Mail, x: 15, y: 60, rotation: -8, delay: 0.2 },
  { Icon: MessageSquare, x: 40, y: 20, rotation: 20, delay: 0.15 },
  { Icon: AlertTriangle, x: 55, y: 55, rotation: -25, delay: 0.25 },
  { Icon: FileQuestion, x: 70, y: 30, rotation: 15, delay: 0.3 },
  { Icon: PhoneMissed, x: 30, y: 75, rotation: -12, delay: 0.35 },
  { Icon: MailWarning, x: 60, y: 70, rotation: 8, delay: 0.4 },
  { Icon: FileText, x: 80, y: 45, rotation: -20, delay: 0.45 },
  { Icon: Phone, x: 45, y: 85, rotation: 25, delay: 0.5 },
  { Icon: Mail, x: 75, y: 80, rotation: -18, delay: 0.55 },
  { Icon: MessageSquare, x: 20, y: 45, rotation: 10, delay: 0.6 },
];

function ChaosIcon({ 
  Icon, 
  x, 
  y, 
  rotation, 
  delay, 
  progress 
}: { 
  Icon: typeof FileText; 
  x: number; 
  y: number; 
  rotation: number; 
  delay: number;
  progress: number;
}) {
  const scatterX = (Math.random() - 0.5) * 200;
  const scatterY = (Math.random() - 0.5) * 200;
  const scatterRotation = (Math.random() - 0.5) * 180;
  
  const opacity = Math.max(0, 1 - progress * 1.5);
  const translateX = progress * scatterX;
  const translateY = progress * scatterY;
  const rotate = rotation + progress * scatterRotation;
  const scale = 1 - progress * 0.5;

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        opacity,
        transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale})`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: opacity, scale: scale }}
      transition={{ delay, duration: 0.3 }}
    >
      <Icon 
        className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500/60" 
        strokeWidth={1.5}
      />
    </motion.div>
  );
}

function NFCTag({ progress }: { progress: number }) {
  const opacity = Math.min(1, progress * 2);
  const scale = 0.5 + progress * 0.5;
  
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
        <div className="relative w-24 h-24 sm:w-32 sm:h-32">
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
            <Smartphone className="w-10 h-10 sm:w-14 sm:h-14 text-gold" strokeWidth={1.5} />
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

export function ChaosControlSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
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
      <div 
        ref={containerRef}
        className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden border border-white/10 select-none"
        style={{ touchAction: "none" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200/10 via-gray-300/5 to-gray-400/10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(239,68,68,0.1) 0%, transparent 30%),
                radial-gradient(circle at 70% 60%, rgba(239,68,68,0.08) 0%, transparent 25%),
                radial-gradient(circle at 40% 80%, rgba(239,68,68,0.06) 0%, transparent 20%)
              `,
            }}
          />
          
          {CHAOS_ICONS.map((icon, index) => (
            <ChaosIcon
              key={index}
              Icon={icon.Icon}
              x={icon.x}
              y={icon.y}
              rotation={icon.rotation}
              delay={icon.delay}
              progress={progressValue}
            />
          ))}
          
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: Math.max(0, 1 - progressValue * 2) }}
          >
            <div className="text-center px-8">
              <p className="text-xs uppercase tracking-[0.3em] text-red-400/70 mb-2">Before</p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-400">
                The Old Way:
              </h3>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-500 mt-1">
                Fragmentation
              </h3>
            </div>
          </div>
        </div>

        <motion.div 
          className="absolute inset-0"
          style={{ 
            clipPath: `inset(0 0 0 ${smoothPosition.get()}%)`,
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
              className="absolute inset-0 flex items-center justify-center"
              style={{ opacity: Math.min(1, progressValue * 2) }}
            >
              <div className="text-center px-8 mt-48 sm:mt-56">
                <p className="text-xs uppercase tracking-[0.3em] text-gold/70 mb-2">After</p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-porcelain">
                  The OpenHouse Way:
                </h3>
                <h3 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-1"
                  style={{
                    background: "linear-gradient(135deg, #C8A75E 0%, #E8D9A0 50%, #C8A75E 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Centralised Intelligence
                </h3>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-gold/80 via-gold to-gold/80 cursor-ew-resize z-20"
          style={{ left: `${smoothPosition.get()}%`, marginLeft: "-2px" }}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-carbon border-2 border-gold flex items-center justify-center shadow-lg shadow-gold/20">
            <div className="flex items-center gap-0.5">
              <div className="w-0.5 h-4 bg-gold/60 rounded-full" />
              <div className="w-0.5 h-6 bg-gold rounded-full" />
              <div className="w-0.5 h-4 bg-gold/60 rounded-full" />
            </div>
          </div>
          
          <motion.div
            className="absolute top-0 bottom-0 w-px bg-gold/30"
            style={{ left: "50%" }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>

        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs text-hint/60">
          <span className={progressValue < 0.3 ? "text-red-400/80" : ""}>
            Chaos
          </span>
          <span className="text-hint/40">← Drag to compare →</span>
          <span className={progressValue > 0.7 ? "text-gold" : ""}>
            Control
          </span>
        </div>
      </div>
    </div>
  );
}
