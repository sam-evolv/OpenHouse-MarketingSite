"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FileText, MessageSquare, Smartphone, CheckCircle, ArrowRight } from "lucide-react";
import heroBackground from "@/attached_assets/stock_images/modern_luxury_apartm_7dec65c9.jpg";

export function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  const bgX = useTransform(smoothMouseX, [0, 1], [15, -15]);
  const bgY = useTransform(smoothMouseY, [0, 1], [10, -10]);
  
  const card1X = useTransform(smoothMouseX, [0, 1], [-20, 20]);
  const card1Y = useTransform(smoothMouseY, [0, 1], [-15, 15]);
  
  const card2X = useTransform(smoothMouseX, [0, 1], [-35, 35]);
  const card2Y = useTransform(smoothMouseY, [0, 1], [-25, 25]);
  
  const card3X = useTransform(smoothMouseX, [0, 1], [-50, 50]);
  const card3Y = useTransform(smoothMouseY, [0, 1], [-35, 35]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMounted, mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-carbon"
    >
      <motion.div
        className="absolute inset-0 scale-110"
        style={{ x: bgX, y: bgY }}
      >
        <Image
          src={heroBackground}
          alt="Modern luxury apartment lobby"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-carbon/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-carbon/30" />
      </motion.div>

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-20"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-carbon/40 backdrop-blur-xl rounded-3xl" />
              <div className="relative p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6"
                >
                  <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-gold">AI-Powered Resident Experience</span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                  The AI resident portal for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
                    modern developments
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-porcelain/80 mb-8 max-w-xl leading-relaxed">
                  Cut support requests by 80%, delight residents with instant answers, 
                  and give your development a premium digital concierge.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-gold via-amber-500 to-gold" />
                    <span className="relative z-10 text-carbon flex items-center gap-2">
                      Book a Demo
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                  
                  <Link
                    href="/features"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-porcelain border border-white/20 hover:border-gold/50 rounded-full transition-all duration-300 hover:bg-white/5"
                  >
                    Explore Features
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative hidden lg:flex items-center justify-center h-[500px]">
            <motion.div
              className="absolute"
              style={{ x: card1X, y: card1Y, zIndex: 10 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="relative -translate-x-16 translate-y-12">
                <DocumentViewerCard />
              </div>
            </motion.div>

            <motion.div
              className="absolute"
              style={{ x: card2X, y: card2Y, zIndex: 20 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="relative translate-x-8 -translate-y-16">
                <ChatBubbleCard />
              </div>
            </motion.div>

            <motion.div
              className="absolute"
              style={{ x: card3X, y: card3Y, zIndex: 30 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="relative translate-x-24 translate-y-20">
                <NfcSuccessCard />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium uppercase tracking-wider text-porcelain/70">Scroll to explore</span>
          <svg className="w-5 h-5 text-porcelain/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

function DocumentViewerCard() {
  return (
    <div className="w-64 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
      <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
          <FileText className="w-4 h-4 text-blue-400" />
        </div>
        <div>
          <p className="text-sm font-medium text-porcelain">Document Viewer</p>
          <p className="text-[10px] text-hint">boiler_manual.pdf</p>
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-2">
          <div className="h-2 bg-white/10 rounded w-full" />
          <div className="h-2 bg-white/10 rounded w-4/5" />
          <div className="h-2 bg-white/10 rounded w-full" />
          <div className="h-2 bg-white/10 rounded w-3/4" />
          <div className="h-2 bg-white/10 rounded w-5/6" />
        </div>
        <div className="mt-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
          <p className="text-[10px] text-blue-300 font-medium mb-1">Highlighted Section</p>
          <p className="text-[9px] text-hint leading-relaxed">
            To reset the timer, press and hold the Mode button for 3 seconds until the display flashes...
          </p>
        </div>
      </div>
    </div>
  );
}

function ChatBubbleCard() {
  return (
    <div className="w-72 bg-slate/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
      <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
          <MessageSquare className="w-4 h-4 text-gold" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-porcelain">OpenHouse Assistant</p>
          <p className="text-[10px] text-green-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
            Online
          </p>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex justify-start">
          <div className="bg-white/10 rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[85%]">
            <p className="text-sm text-porcelain">Your parcel has arrived at reception.</p>
            <p className="text-[9px] text-hint mt-1">Just now</p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white/10 rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[85%]">
            <p className="text-sm text-porcelain">Collection hours: 8am - 8pm daily. Your reference: #PKG-4521</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NfcSuccessCard() {
  return (
    <div className="w-56 bg-gradient-to-br from-green-500/20 to-emerald-500/10 backdrop-blur-md rounded-2xl border border-green-500/30 shadow-2xl overflow-hidden">
      <div className="p-5 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 1.2, stiffness: 200 }}
          className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.4 }}
          >
            <CheckCircle className="w-8 h-8 text-green-400" />
          </motion.div>
        </motion.div>
        
        <div className="flex items-center justify-center gap-2 mb-2">
          <Smartphone className="w-4 h-4 text-green-400" />
          <span className="text-xs font-medium text-green-400 uppercase tracking-wider">NFC Activated</span>
        </div>
        
        <h3 className="text-lg font-semibold text-porcelain mb-1">Welcome Home</h3>
        <p className="text-sm text-hint">Unit 42 • Sarah Mitchell</p>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-4 h-1 bg-green-500/30 rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="h-full w-1/2 bg-green-400 rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
}
