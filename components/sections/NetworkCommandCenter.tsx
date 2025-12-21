"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import { Activity, Server, Cpu, Globe, Zap, Database } from "lucide-react";

const STATS_API_URL = "https://portal.openhouseai.ie/api/stats/public";

interface Stats {
  activeUsers: number;
  questionsAnswered: number;
  documentsServed: number;
  totalInteractions: number;
}

const UK_IRELAND_DOTS = [
  { x: 42, y: 18, city: "Edinburgh" },
  { x: 38, y: 25, city: "Glasgow" },
  { x: 48, y: 32, city: "Newcastle" },
  { x: 44, y: 38, city: "Manchester" },
  { x: 46, y: 42, city: "Liverpool" },
  { x: 50, y: 45, city: "Leeds" },
  { x: 52, y: 52, city: "Birmingham" },
  { x: 56, y: 62, city: "London" },
  { x: 48, y: 58, city: "Bristol" },
  { x: 42, y: 65, city: "Cardiff" },
  { x: 22, y: 35, city: "Dublin" },
  { x: 18, y: 28, city: "Belfast" },
  { x: 15, y: 38, city: "Galway" },
  { x: 20, y: 48, city: "Cork" },
  { x: 25, y: 42, city: "Limerick" },
  { x: 28, y: 32, city: "Dundalk" },
  { x: 40, y: 48, city: "Sheffield" },
  { x: 54, y: 68, city: "Brighton" },
  { x: 58, y: 58, city: "Cambridge" },
  { x: 36, y: 55, city: "Plymouth" },
  { x: 60, y: 50, city: "Norwich" },
  { x: 30, y: 22, city: "Derry" },
  { x: 35, y: 15, city: "Inverness" },
  { x: 25, y: 12, city: "Aberdeen" },
];

interface PulseEffect {
  id: number;
  x: number;
  y: number;
  city: string;
}

function SkeletonBar({ width = "5rem" }: { width?: string }) {
  return (
    <span
      className="inline-block h-8 bg-gradient-to-r from-white/5 via-white/15 to-white/5 rounded animate-shimmer"
      style={{ 
        width,
        backgroundSize: "200% 100%",
      }}
      aria-label="Loading..."
    />
  );
}

function CountUpMono({ end, duration = 1.5, isLoading = false }: { end: number; duration?: number; isLoading?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInViewOnce(ref as React.RefObject<Element>, { threshold: 0.3 });
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isInView || isLoading || end === 0 || hasAnimated) return;

    let startTime: number | null = null;
    const startValue = 0;
    const change = end - startValue;

    function easeOutExpo(t: number): number {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function animate(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const easedProgress = easeOutExpo(progress);

      setCount(Math.floor(startValue + change * easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
        setHasAnimated(true);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, end, duration, isLoading, hasAnimated]);

  if (isLoading) {
    return <SkeletonBar width="5rem" />;
  }

  const formatted = count.toLocaleString();
  
  return (
    <span ref={ref} className="font-mono tabular-nums">
      {formatted}
    </span>
  );
}

function UKIrelandMap({ pulses }: { pulses: PulseEffect[] }) {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="pulseGradient">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="1" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {UK_IRELAND_DOTS.map((dot, i) => (
          <circle
            key={i}
            cx={dot.x}
            cy={dot.y}
            r="0.8"
            fill="#ffffff"
            opacity="0.3"
          />
        ))}
        
        <AnimatePresence>
          {pulses.map((pulse) => (
            <motion.g key={pulse.id}>
              <motion.circle
                cx={pulse.x}
                cy={pulse.y}
                r="0.8"
                fill="#D4AF37"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.circle
                cx={pulse.x}
                cy={pulse.y}
                fill="url(#pulseGradient)"
                initial={{ r: 1, opacity: 0.8 }}
                animate={{ r: 8, opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <motion.circle
                cx={pulse.x}
                cy={pulse.y}
                fill="url(#pulseGradient)"
                initial={{ r: 1, opacity: 0.5 }}
                animate={{ r: 12, opacity: 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
              />
            </motion.g>
          ))}
        </AnimatePresence>
      </svg>
    </div>
  );
}

function LiveQueryFeed({ pulses }: { pulses: PulseEffect[] }) {
  return (
    <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 md:w-72">
      <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden">
        <div className="px-3 py-2 border-b border-white/10 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs font-mono text-hint uppercase tracking-wider">Live Queries</span>
        </div>
        <div className="max-h-32 overflow-hidden">
          <AnimatePresence mode="popLayout">
            {pulses.slice(-4).reverse().map((pulse) => (
              <motion.div
                key={pulse.id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-3 py-2 border-b border-white/5 last:border-0"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-3 h-3 text-gold" />
                  <span className="text-xs font-mono text-porcelain">{pulse.city}</span>
                  <span className="text-[10px] text-hint ml-auto">just now</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

interface MetricConfig {
  label: string;
  key: keyof Stats;
  icon: typeof Activity;
  color: string;
}

const metricConfigs: MetricConfig[] = [
  { label: "ACTIVE_USERS", key: "activeUsers", icon: Globe, color: "text-green-400" },
  { label: "QUERIES_PROCESSED", key: "questionsAnswered", icon: Cpu, color: "text-blue-400" },
  { label: "DOCS_SERVED", key: "documentsServed", icon: Database, color: "text-purple-400" },
  { label: "TOTAL_INTERACTIONS", key: "totalInteractions", icon: Activity, color: "text-gold" },
];

export function NetworkCommandCenter() {
  const [stats, setStats] = useState<Stats>({
    activeUsers: 0,
    questionsAnswered: 0,
    documentsServed: 0,
    totalInteractions: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [pulses, setPulses] = useState<PulseEffect[]>([]);
  const pulseIdRef = useRef(0);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch(STATS_API_URL, { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          const activeUsers = Number(data.active_users) || 0;
          const questionsAnswered = Number(data.questions_answered) || 0;
          const documentsServed = Number(data.pdf_downloads) || 0;
          const totalInteractions = Number(data.total_interactions) || (questionsAnswered + documentsServed);
          setStats({
            activeUsers,
            questionsAnswered,
            documentsServed,
            totalInteractions,
          });
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchStats();
    const interval = setInterval(fetchStats, 20000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomDot = UK_IRELAND_DOTS[Math.floor(Math.random() * UK_IRELAND_DOTS.length)];
      const newPulse: PulseEffect = {
        id: pulseIdRef.current++,
        x: randomDot.x,
        y: randomDot.y,
        city: randomDot.city,
      };
      
      setPulses((prev) => [...prev.slice(-10), newPulse]);
      
      setTimeout(() => {
        setPulses((prev) => prev.filter((p) => p.id !== newPulse.id));
      }, 3000);
    }, 1500 + Math.random() * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-carbon relative overflow-hidden">
      <UKIrelandMap pulses={pulses} />
      
      <div className="absolute inset-0 bg-gradient-to-b from-carbon via-transparent to-carbon pointer-events-none" />
      
      <Container className="relative z-10">
        <SectionHeading
          title="Network Command Centre"
          badge="Live Analytics"
        />

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {metricConfigs.map((config, index) => {
              const Icon = config.icon;
              const value = stats[config.key];
              return (
                <motion.div
                  key={config.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative bg-black/40 backdrop-blur-sm border border-white/[0.08] rounded-xl p-6 hover:border-gold/30 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Server className="w-4 h-4 text-hint" />
                        <span className="text-[10px] font-mono text-hint uppercase tracking-wider">
                          NODE_{String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-[10px] font-mono text-green-400">ONLINE</span>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className={`w-5 h-5 ${config.color}`} />
                        <span className="text-xs font-mono text-hint">{config.label}</span>
                      </div>
                      <div className="text-4xl font-bold text-porcelain">
                        <CountUpMono end={value} duration={1.5} isLoading={isLoading} />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 pt-3 border-t border-white/[0.05]">
                      <div className="flex-1 h-1 bg-white/[0.05] rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${
                            config.color.includes('green') ? 'bg-green-400' :
                            config.color.includes('blue') ? 'bg-blue-400' :
                            config.color.includes('purple') ? 'bg-purple-400' :
                            'bg-gold'
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${60 + Math.random() * 30}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                        />
                      </div>
                      <span className="text-[10px] font-mono text-hint">
                        {isLoading ? '--' : Math.floor(80 + Math.random() * 15)}% util
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-hint">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              <span>ALL SYSTEMS OPERATIONAL</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-hint">
              <Activity className="w-4 h-4 text-gold" />
              <span>LATENCY: &lt;50ms</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-hint">
              <Globe className="w-4 h-4 text-blue-400" />
              <span>REGION: EU-WEST-1</span>
            </div>
          </motion.div>
        </div>
      </Container>
      
      <LiveQueryFeed pulses={pulses} />
    </section>
  );
}
