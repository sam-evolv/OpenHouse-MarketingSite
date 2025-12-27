"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Smartphone, Brain, Database, Monitor } from "lucide-react";

interface Node {
  id: string;
  icon: typeof Smartphone;
  label: string;
  sublabel: string;
  tooltip?: string;
  x: number;
}

const NODES: Node[] = [
  { id: "resident", icon: Smartphone, label: "Resident", sublabel: "Mobile App", x: 0 },
  { id: "ai", icon: Brain, label: "AI Engine", sublabel: "NLP Processing", tooltip: "OpenAI GPT-4o / Claude 3.5 Sonnet Integration", x: 1 },
  { id: "rag", icon: Database, label: "RAG System", sublabel: "Knowledge Base", tooltip: "Vector Database (Pinecone/Weaviate)", x: 2 },
  { id: "dashboard", icon: Monitor, label: "Dashboard", sublabel: "Developer Portal", x: 3 },
];

function BlueprintGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-15">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C8A75E" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

interface NodeComponentProps {
  node: Node;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

function NodeComponent({ node, isHovered, onHover }: NodeComponentProps) {
  const Icon = node.icon;
  
  return (
    <div 
      className="relative flex flex-col items-center"
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={() => onHover(null)}
    >
      <motion.div
        className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-2 flex items-center justify-center cursor-pointer transition-all duration-300 ${
          isHovered 
            ? "border-gold bg-gold/20 shadow-[0_0_30px_rgba(200,167,94,0.5)]" 
            : "border-gold/40 bg-gold/5 hover:border-gold/60"
        }`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={isHovered ? { 
            boxShadow: ["0 0 20px rgba(200,167,94,0.3)", "0 0 40px rgba(200,167,94,0.5)", "0 0 20px rgba(200,167,94,0.3)"]
          } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <Icon className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors ${isHovered ? "text-gold" : "text-gold/80"}`} />
        
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gold"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
      
      <div className="mt-4 text-center">
        <p className="text-sm sm:text-base font-semibold text-porcelain">{node.label}</p>
        <p className="text-xs text-gold/70">{node.sublabel}</p>
      </div>
      
      <AnimatePresence>
        {isHovered && node.tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="relative bg-slate border border-gold/30 rounded-lg px-4 py-2 shadow-xl whitespace-nowrap">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate border-l border-t border-gold/30 rotate-45" />
              <p className="text-xs text-gold font-mono">{node.tooltip}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ConnectionLine({ progress }: { progress: number }) {
  return (
    <div className="hidden md:flex items-center justify-center w-20 lg:w-32 relative">
      <svg className="w-full h-8" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C8A75E" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#C8A75E" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C8A75E" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        <line
          x1="0"
          y1="10"
          x2="100"
          y2="10"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        
        <polygon
          points="95,10 85,5 85,15"
          fill="#C8A75E"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

function DataPacket({ direction }: { direction: "forward" | "backward" }) {
  return (
    <motion.div
      className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold shadow-[0_0_15px_rgba(200,167,94,0.8)]"
      initial={{ left: direction === "forward" ? "0%" : "100%", opacity: 0 }}
      animate={{ 
        left: direction === "forward" ? "100%" : "0%", 
        opacity: [0, 1, 1, 0] 
      }}
      transition={{ 
        duration: 2, 
        ease: "linear",
        opacity: { duration: 2, times: [0, 0.1, 0.9, 1] }
      }}
    />
  );
}

function FlowContainer() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [packets, setPackets] = useState<Array<{ id: number; direction: "forward" | "backward" }>>([]);
  const packetIdRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const direction = packetIdRef.current % 2 === 0 ? "forward" : "backward";
      setPackets(prev => [...prev, { id: packetIdRef.current++, direction }]);
      
      setTimeout(() => {
        setPackets(prev => prev.slice(1));
      }, 2500);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
        {NODES.map((node, index) => (
          <div key={node.id} className="flex items-center">
            <NodeComponent 
              node={node} 
              isHovered={hoveredNode === node.id}
              onHover={setHoveredNode}
            />
            {index < NODES.length - 1 && (
              <>
                <ConnectionLine progress={0} />
                <div className="hidden md:block md:w-20 lg:w-32 h-8 relative">
                  <AnimatePresence>
                    {packets.map(packet => (
                      <DataPacket key={packet.id} direction={packet.direction} />
                    ))}
                  </AnimatePresence>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      
      <div className="md:hidden flex flex-col items-center gap-4 mt-4">
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            className="w-0.5 h-8 bg-gradient-to-b from-gold/60 to-gold/20"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}

export function LiveSchema() {
  return (
    <section className="py-28 relative overflow-hidden bg-carbon">
      <BlueprintGrid />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-carbon to-transparent opacity-80" />
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      <Container className="relative z-10">
        <SectionHeading
          title="System Architecture"
          description="How OpenHouse AI processes resident queries in real-time"
          badge="Live Data Flow"
        />

        <div className="mt-16 relative">
          <FlowContainer />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {[
              { label: "Response Time", value: "<2s", color: "text-green-400" },
              { label: "Reliability", value: "High-availability", color: "text-gold" },
            ].map((stat) => (
              <div key={stat.label} className="text-center px-6">
                <p className={`text-2xl sm:text-3xl font-bold font-mono ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-hint uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center text-hint text-sm max-w-2xl mx-auto"
        >
          Hover over nodes to learn more about our technology stack. Watch the data packets flow in real-time.
        </motion.p>
      </Container>
    </section>
  );
}
