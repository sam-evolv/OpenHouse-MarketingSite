"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function PortalFooter() {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = isHovered ? 1.5 : 0.5;
    }
  }, [isHovered]);

  return (
    <footer className="relative bg-carbon overflow-hidden">
      <div 
        className="relative min-h-[80vh] flex flex-col items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute inset-0"
            animate={{
              filter: isHovered ? "brightness(1.3)" : "brightness(0.6)",
            }}
            transition={{ duration: 0.5 }}
          >
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="/video-poster.jpg"
            >
              <source src="/nfc-activation.mp4" type="video/mp4" />
            </video>
            
            <div 
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 80% 50% at 50% 50%, transparent 0%, #0A0A0A 100%),
                  linear-gradient(180deg, transparent 0%, transparent 60%, #0A0A0A 100%)
                `,
              }}
            />
            
            <motion.div 
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(circle at 50% 40%, rgba(200,167,94,0.3) 0%, transparent 50%),
                  radial-gradient(circle at 30% 60%, rgba(200,167,94,0.15) 0%, transparent 40%),
                  radial-gradient(circle at 70% 70%, rgba(200,167,94,0.2) 0%, transparent 35%)
                `,
              }}
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.div
              className="absolute inset-0"
              animate={{
                background: isHovered 
                  ? [
                      "radial-gradient(circle at 50% 45%, rgba(200,167,94,0.4) 0%, transparent 60%)",
                      "radial-gradient(circle at 55% 50%, rgba(200,167,94,0.5) 0%, transparent 55%)",
                      "radial-gradient(circle at 45% 48%, rgba(200,167,94,0.4) 0%, transparent 60%)",
                    ]
                  : "radial-gradient(circle at 50% 45%, rgba(200,167,94,0.2) 0%, transparent 50%)",
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </div>

        <div className="relative z-10 text-center px-4 w-full">
          <motion.div
            className="relative inline-block"
            animate={{ 
              filter: isHovered ? "drop-shadow(0 0 60px rgba(200,167,94,0.5))" : "none" 
            }}
          >
            <h2 
              className="text-[12vw] sm:text-[10vw] lg:text-[9vw] font-black tracking-tighter leading-none select-none"
              style={{
                background: "linear-gradient(180deg, #C8A75E 0%, #8B7340 50%, #C8A75E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: isHovered ? "0 0 80px rgba(200,167,94,0.4)" : "none",
              }}
            >
              READY TO
            </h2>
            <h2 
              className="text-[14vw] sm:text-[12vw] lg:text-[11vw] font-black tracking-tighter leading-none select-none -mt-4 sm:-mt-8"
              style={{
                background: "linear-gradient(180deg, #E8D9A0 0%, #C8A75E 50%, #8B7340 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              DEPLOY?
            </h2>
          </motion.div>

          <motion.p 
            className="text-hint text-lg sm:text-xl mt-8 mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Transform your development into an intelligent, connected community
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/demo">
              <motion.button
                className="relative px-12 py-5 text-xl font-bold text-carbon rounded-xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #C8A75E 0%, #E8D9A0 50%, #C8A75E 100%)",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(200,167,94,0.4), 0 0 40px rgba(200,167,94,0.2)",
                      "0 0 40px rgba(200,167,94,0.6), 0 0 80px rgba(200,167,94,0.3)",
                      "0 0 20px rgba(200,167,94,0.4), 0 0 40px rgba(200,167,94,0.2)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="relative z-10">Get Started</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-0 right-0 flex justify-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link 
            href="/privacy" 
            className="text-xs text-hint/40 hover:text-hint/60 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/terms" 
            className="text-xs text-hint/40 hover:text-hint/60 transition-colors"
          >
            Terms of Service
          </Link>
        </motion.div>

        <div className="absolute bottom-2 left-0 right-0 text-center">
          <p className="text-[10px] text-hint/30">
            © {new Date().getFullYear()} OpenHouse AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
