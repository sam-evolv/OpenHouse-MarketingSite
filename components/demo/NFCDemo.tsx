"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Smartphone, Wifi, CheckCircle, Play } from "lucide-react";

export function NFCDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoSupported, setVideoSupported] = useState(true);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    if (!videoSupported || !videoRef.current) {
      const interval = setInterval(() => {
        setAnimationStep((prev) => (prev + 1) % 4);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [videoSupported]);

  const handleVideoError = () => {
    setVideoSupported(false);
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setVideoSupported(false);
      });
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-28 bg-carbon" aria-labelledby="nfc-demo-heading">
      <Container>
        <SectionHeading
          title="Instant Activation with NFC"
          badge="See It In Action"
        />

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video/Animation Panel */}
            <div className="relative">
              <div 
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate to-carbon border border-white/10"
                role="img"
                aria-label="Demonstration of a resident tapping their phone on an NFC tag to activate their personalised AI assistant"
              >
                {videoSupported ? (
                  <>
                    <video
                      ref={videoRef}
                      className="absolute inset-0 w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      autoPlay
                      onError={handleVideoError}
                      onPlay={() => setIsPlaying(true)}
                      aria-label="Video demonstration of NFC phone tap activating AI assistant"
                    >
                      <source src="/videos/nfc-demo.mp4" type="video/mp4" />
                      <source src="/videos/nfc-demo.webm" type="video/webm" />
                    </video>
                    
                    {!isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center bg-carbon/80">
                        <button
                          onClick={handlePlay}
                          className="w-20 h-20 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center hover:bg-gold/30 transition-colors"
                          aria-label="Play NFC demonstration video"
                        >
                          <Play className="w-8 h-8 text-gold ml-1" />
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <NFCAnimatedFallback step={animationStep} />
                )}
              </div>
              
              <p className="mt-4 text-center text-sm text-porcelain/60">
                Resident taps phone to NFC tag, instantly activating their personalised AI assistant
              </p>
            </div>

            {/* Description Panel */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-porcelain">
                One Tap. Instant Access.
              </h3>
              
              <p className="text-porcelain/70 leading-relaxed">
                Residents simply hold their smartphone near the NFC tag in their home. 
                Within seconds, they're connected to their personalised AI assistant — 
                no apps to download, no passwords to remember.
              </p>

              <div className="space-y-4">
                <StepItem 
                  number={1} 
                  title="Tap the NFC Tag" 
                  description="Located at the entrance or in the welcome pack"
                  isActive={animationStep === 0}
                />
                <StepItem 
                  number={2} 
                  title="Instant Recognition" 
                  description="Your phone identifies your unit automatically"
                  isActive={animationStep === 1}
                />
                <StepItem 
                  number={3} 
                  title="AI Assistant Activates" 
                  description="Personalised to your home and development"
                  isActive={animationStep === 2 || animationStep === 3}
                />
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gold/60 text-gold font-medium rounded-lg hover:border-gold hover:bg-gold/10 transition-all"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function StepItem({ 
  number, 
  title, 
  description, 
  isActive 
}: { 
  number: number; 
  title: string; 
  description: string;
  isActive: boolean;
}) {
  return (
    <motion.div 
      className={`flex items-start gap-4 p-4 rounded-xl transition-colors ${
        isActive ? "bg-gold/10 border border-gold/30" : "bg-white/5 border border-transparent"
      }`}
      animate={{ scale: isActive ? 1.02 : 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
        isActive ? "bg-gold text-carbon" : "bg-white/10 text-porcelain"
      }`}>
        {number}
      </div>
      <div>
        <h4 className="font-semibold text-porcelain">{title}</h4>
        <p className="text-sm text-porcelain/60">{description}</p>
      </div>
    </motion.div>
  );
}

function NFCAnimatedFallback({ step }: { step: number }) {
  return (
    <div 
      className="absolute inset-0 flex items-center justify-center"
      role="img"
      aria-label="Animated illustration showing NFC phone tap activation sequence"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-carbon via-slate to-carbon" />
      
      {/* NFC Tag */}
      <motion.div
        className="absolute left-[20%] top-1/2 -translate-y-1/2"
        animate={{ 
          scale: step === 0 ? [1, 1.1, 1] : 1,
          opacity: 1
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          {/* Pulse rings */}
          <AnimatePresence>
            {step === 0 && (
              <>
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-gold/40"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-gold/30"
                  initial={{ scale: 1, opacity: 0.4 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                />
              </>
            )}
          </AnimatePresence>
          
          {/* Tag body */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold/30 to-gold/10 border border-gold/50 flex items-center justify-center">
            <Wifi className="w-8 h-8 text-gold" />
          </div>
          <div className="mt-2 text-center text-xs text-gold font-mono">NFC</div>
        </div>
      </motion.div>

      {/* Phone */}
      <motion.div
        className="absolute"
        animate={{
          x: step === 0 ? "20%" : step === 1 ? "-10%" : "20%",
          scale: step === 1 ? 1.05 : 1
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="relative w-32 h-56 bg-gray-950 rounded-[1.5rem] border-4 border-gray-800 overflow-hidden shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-b-xl z-10" />
          
          {/* Screen */}
          <div className="absolute inset-1 rounded-[1.2rem] overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
            <AnimatePresence mode="wait">
              {step < 2 ? (
                <motion.div
                  key="lock"
                  className="h-full flex flex-col items-center justify-center p-4"
                  exit={{ opacity: 0 }}
                >
                  <Smartphone className="w-8 h-8 text-porcelain/40 mb-2" />
                  <div className="text-[10px] text-porcelain/60 text-center">
                    {step === 1 ? "Connecting..." : "Tap NFC"}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="activated"
                  className="h-full flex flex-col items-center justify-center p-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                  >
                    <CheckCircle className="w-10 h-10 text-green-400 mb-2" />
                  </motion.div>
                  <div className="text-[10px] text-green-400 font-semibold text-center">
                    Welcome Home!
                  </div>
                  <div className="text-[8px] text-porcelain/60 mt-1">
                    AI Assistant Active
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Home indicator */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full" />
        </div>
      </motion.div>

      {/* Connection beam */}
      <AnimatePresence>
        {step === 1 && (
          <motion.div
            className="absolute left-[35%] top-1/2 w-[20%] h-1"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ transformOrigin: "left" }}
          >
            <div className="h-full bg-gradient-to-r from-gold to-green-400 rounded-full" />
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-gold rounded-full"
              animate={{ x: ["0%", "100%"] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              step === i ? "bg-gold" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
