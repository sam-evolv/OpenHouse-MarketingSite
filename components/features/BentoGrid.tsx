"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Smartphone, FileText, Languages, QrCode, Sparkles, Activity } from "lucide-react";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

function BentoCard({ children, className = "", glowColor = "gold" }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowColors: Record<string, string> = {
    gold: "rgba(212, 175, 55, 0.4)",
    blue: "rgba(59, 130, 246, 0.4)",
    green: "rgba(34, 197, 94, 0.4)",
    purple: "rgba(168, 85, 247, 0.4)",
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl bg-slate-900/80 border border-white/[0.08] backdrop-blur-sm transition-all duration-300 elev-1-dark ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColors[glowColor]}, transparent 70%)`,
            inset: 0,
          }}
        />
      )}
      <div
        className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          boxShadow: `inset 0 0 0 1px ${glowColors[glowColor]}`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}

function ResidentPortalCard() {
  return (
    <BentoCard className="col-span-2 row-span-2 min-h-[400px]" glowColor="gold">
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
            <Smartphone className="w-5 h-5 text-gold" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-porcelain">Resident Portal</h3>
            <p className="text-xs text-hint">Native mobile experience</p>
          </div>
        </div>
        
        <div className="flex-1 relative rounded-xl overflow-hidden bg-gradient-to-b from-zinc-800 to-zinc-900 border border-white/[0.05]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-48 h-80 bg-gray-950 rounded-[2rem] border-4 border-gray-800 overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl" />
              
              <div className="absolute inset-1 rounded-[1.5rem] overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
                <div className="p-4 pt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-amber-600 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-carbon">AI</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-medium text-porcelain">OpenHouse</div>
                      <div className="text-[8px] text-green-400">Online</div>
                    </div>
                  </div>
                  
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="bg-white/10 rounded-lg p-2 text-[9px] text-porcelain max-w-[80%]">
                      Welcome home! How can I assist you today?
                    </div>
                    
                    <motion.div
                      className="flex justify-end"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5, duration: 0.3 }}
                    >
                      <div className="bg-gold rounded-lg p-2 text-[9px] text-carbon max-w-[80%]">
                        When is bin collection?
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.5, duration: 0.3 }}
                    >
                      <div className="bg-white/10 rounded-lg p-2 text-[9px] text-porcelain max-w-[90%]">
                        Bin collection is every Tuesday. Recycling is collected on Fridays.
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
              
              <motion.div
                className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent" />
        </div>
      </div>
    </BentoCard>
  );
}

function KnowledgeEngineCard() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <BentoCard className="col-span-1 row-span-2 min-h-[400px]" glowColor="blue">
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
            <FileText className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-porcelain">Knowledge Engine</h3>
            <p className="text-xs text-hint">RAG-powered ingestion</p>
          </div>
        </div>
        
        <div className="flex-1 relative flex items-center justify-center">
          <div className="relative">
            <motion.div
              className="w-20 h-24 bg-gradient-to-b from-blue-500/20 to-blue-600/10 rounded-lg border border-blue-500/30 flex flex-col items-center justify-center"
              animate={{ 
                scale: [1, 0.95, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <FileText className="w-8 h-8 text-blue-400 mb-1" />
              <span className="text-[8px] text-blue-300 font-mono">.PDF</span>
            </motion.div>
            
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex items-center gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 bg-blue-400 rounded-full"
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    x: [0, 8, 0]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    delay: i * 0.2 
                  }}
                />
              ))}
            </div>
            
            <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-12 h-12 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center overflow-hidden">
              {particles.slice(0, 8).map((p) => (
                <motion.span
                  key={p.id}
                  className="absolute text-[6px] text-green-400 font-mono"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    y: [-10, 10]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: p.delay
                  }}
                  style={{ left: `${p.x}%` }}
                >
                  {Math.random() > 0.5 ? "1" : "0"}
                </motion.span>
              ))}
              <Sparkles className="w-5 h-5 text-green-400 z-10" />
            </div>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <p className="text-xs text-hint">
              Documents transform into searchable knowledge vectors
            </p>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}

function MultiLanguageCard() {
  const languages = [
    { text: "Hello", lang: "English", flag: "🇬🇧" },
    { text: "Hola", lang: "Spanish", flag: "🇪🇸" },
    { text: "Bonjour", lang: "French", flag: "🇫🇷" },
    { text: "Ciao", lang: "Italian", flag: "🇮🇹" },
    { text: "Hallo", lang: "German", flag: "🇩🇪" },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % languages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [languages.length]);

  return (
    <BentoCard className="col-span-1 row-span-1" glowColor="purple">
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
            <Languages className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-porcelain">Multi-Language</h3>
            <p className="text-xs text-hint">50+ languages supported</p>
          </div>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-[200px]">
            <div className="bg-white/5 rounded-2xl rounded-bl-md p-4 border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <span className="text-3xl mb-2 block">{languages[currentIndex].flag}</span>
                  <span className="text-2xl font-semibold text-porcelain block">
                    {languages[currentIndex].text}
                  </span>
                  <span className="text-xs text-hint mt-1 block">
                    {languages[currentIndex].lang}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="absolute -bottom-1 left-0 w-3 h-3 bg-white/5 border-l border-b border-white/10 transform -skew-x-12" />
          </div>
        </div>
      </div>
    </BentoCard>
  );
}

function HandoverAutomationCard() {
  const [scanProgress, setScanProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsScanning(true);
      setScanProgress(0);
      
      const scanInterval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            clearInterval(scanInterval);
            setTimeout(() => setIsScanning(false), 500);
            return 100;
          }
          return prev + 5;
        });
      }, 50);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <BentoCard className="col-span-1 row-span-1" glowColor="green">
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
            <QrCode className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-porcelain">Handover Automation</h3>
            <p className="text-xs text-hint">Instant NFC/QR onboarding</p>
          </div>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-white rounded-xl p-2 relative overflow-hidden">
              <div className="absolute inset-2 grid grid-cols-5 gap-[2px]">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-sm ${
                      [0, 1, 4, 5, 6, 9, 10, 12, 14, 15, 19, 20, 21, 24].includes(i)
                        ? "bg-gray-900"
                        : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
              
              {isScanning && (
                <motion.div
                  className="absolute left-0 right-0 h-1 bg-green-400 shadow-[0_0_10px_rgba(34,197,94,0.8)]"
                  initial={{ top: 0 }}
                  animate={{ top: "100%" }}
                  transition={{ duration: 1, ease: "linear" }}
                />
              )}
            </div>
            
            {scanProgress === 100 && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </BentoCard>
  );
}

function AnalyticsCard() {
  return (
    <BentoCard className="col-span-1 row-span-1" glowColor="gold">
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-porcelain">Live Analytics</h3>
            <p className="text-xs text-hint">Real-time insights</p>
          </div>
        </div>
        
        <div className="flex-1 flex items-end gap-2 pb-2">
          {[60, 80, 45, 90, 70, 85, 65].map((height, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-gradient-to-t from-gold/60 to-gold/20 rounded-t"
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            />
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

function PlatformActivityCard() {
  return (
    <BentoCard className="col-span-1 row-span-1" glowColor="gold">
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
            <Activity className="w-5 h-5 text-gold" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-porcelain">Platform Activity</h3>
            <p className="text-xs text-hint">Ongoing interaction across documents, queries, and resident usage</p>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col justify-center gap-3 overflow-hidden">
          {[0, 1, 2].map((i) => (
            <div key={i} className="relative h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold/40 via-gold/60 to-gold/40 rounded-full"
                initial={{ x: "-100%", width: "60%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.8,
                }}
                style={{ 
                  width: `${40 + i * 15}%`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

function SecurityCard() {
  return (
    <BentoCard className="col-span-2 row-span-1" glowColor="blue">
      <div className="p-6 h-full flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-porcelain">Enterprise Security</h3>
            <p className="text-xs text-hint">Designed with GDPR principles in mind and aligned to recognised security frameworks</p>
          </div>
        </div>
        
        <div className="flex-1 flex items-center justify-end gap-4">
          {["AES-256", "OAuth 2.0", "SSO"].map((badge) => (
            <motion.div
              key={badge}
              className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-300 font-mono"
              whileHover={{ scale: 1.05 }}
            >
              {badge}
            </motion.div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

export function BentoGrid() {
  return (
    <section className="py-28 bg-carbon">
      <Container>
        <SectionHeading
          title="Everything You Need"
          badge="Platform Features"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          <ResidentPortalCard />
          <KnowledgeEngineCard />
          <MultiLanguageCard />
          <HandoverAutomationCard />
          <AnalyticsCard />
          <PlatformActivityCard />
          <SecurityCard />
        </div>
      </Container>
    </section>
  );
}
