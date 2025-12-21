"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Smartphone, Wifi, Battery, Signal, RotateCcw } from "lucide-react";

type SimulationStep = 0 | 1 | 2 | 3;
type BeamState = "idle" | "sending" | "receiving";

interface DashboardLog {
  id: string;
  timestamp: Date;
  event: string;
  type: "system" | "user" | "ai";
}

interface ChatMessage {
  id: string;
  role: "ai" | "user";
  content: string;
  isTyping?: boolean;
}

const STEP_LABELS: Record<SimulationStep, string> = {
  0: "Locked",
  1: "Scanned / Welcome",
  2: "Query Sent",
  3: "Answered",
};

const QUICK_ACTIONS = [
  { id: "thermostat", label: "How do I fix the thermostat?", query: "How do I reset the heating timer?" },
  { id: "bike", label: "Where is the bike store?", query: "Where is the bike storage located?" },
];

const AI_RESPONSES: Record<string, string> = {
  thermostat: "To reset your heating timer, locate the thermostat control panel in your hallway. Press and hold the 'Menu' button for 3 seconds, then select 'Schedule' → 'Reset'. Your heating will now follow the default schedule. See page 12 of your home manual for detailed instructions.",
  bike: "The bike storage is located in the basement level B1, accessible via the lift or stairwell A. Your fob grants 24/7 access. There are 45 secure bike racks available on a first-come basis. CCTV is monitored throughout.",
};

function DataBeam({ beamState }: { beamState: BeamState }) {
  return (
    <div className="absolute inset-0 pointer-events-none hidden lg:block">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFD700" stopOpacity="1" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        <path
          d="M 20 50 Q 50 35 80 50"
          fill="none"
          stroke="url(#beamGradient)"
          strokeWidth="0.15"
          strokeDasharray="2 2"
          opacity={beamState !== "idle" ? 0.6 : 0.15}
          className="transition-opacity duration-300"
        />
        
        {beamState === "sending" && (
          <motion.circle
            r="1.5"
            fill="#FFD700"
            filter="url(#glow)"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ offsetPath: "path('M 20 50 Q 50 35 80 50')" }}
          >
            <animate
              attributeName="r"
              values="1;2;1"
              dur="0.4s"
              repeatCount="indefinite"
            />
          </motion.circle>
        )}
        
        {beamState === "receiving" && (
          <motion.circle
            r="1.5"
            fill="#22c55e"
            filter="url(#glow)"
            initial={{ offsetDistance: "100%" }}
            animate={{ offsetDistance: "0%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ offsetPath: "path('M 20 50 Q 50 35 80 50')" }}
          >
            <animate
              attributeName="r"
              values="1;2;1"
              dur="0.4s"
              repeatCount="indefinite"
            />
          </motion.circle>
        )}
      </svg>
    </div>
  );
}

export function EcosystemDemo() {
  const [simulationStep, setSimulationStep] = useState<SimulationStep>(0);
  const [dashboardLogs, setDashboardLogs] = useState<DashboardLog[]>([]);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [selectedQuery, setSelectedQuery] = useState<string | null>(null);
  const [beamState, setBeamState] = useState<BeamState>("idle");

  const addLog = useCallback((event: string, type: "system" | "user" | "ai") => {
    const newLog: DashboardLog = {
      id: `log-${Date.now()}-${Math.random()}`,
      timestamp: new Date(),
      event,
      type,
    };
    setDashboardLogs((prev) => [...prev, newLog]);
  }, []);

  const handleNfcScan = useCallback(() => {
    setBeamState("sending");
    
    setTimeout(() => {
      setSimulationStep(1);
      addLog("NFC tag scanned - Resident activated", "system");
      setBeamState("idle");
      
      setChatMessages([
        {
          id: "welcome",
          role: "ai",
          content: "Welcome home, Sarah! I'm your AI assistant for Parkview Residences. How can I help you today?",
        },
      ]);
    }, 800);
  }, [addLog]);

  const handleQuickAction = useCallback((actionId: string) => {
    const action = QUICK_ACTIONS.find((a) => a.id === actionId);
    if (!action) return;

    setSelectedQuery(actionId);
    setBeamState("sending");
    
    setTimeout(() => {
      setSimulationStep(2);
      setChatMessages((prev) => [
        ...prev,
        { id: `user-${Date.now()}`, role: "user", content: action.query },
      ]);
      addLog(`Query received: '${action.query}'`, "user");
      setBeamState("idle");
    }, 800);

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        { id: `typing-${Date.now()}`, role: "ai", content: "", isTyping: true },
      ]);
      setBeamState("receiving");
    }, 1300);

    setTimeout(() => {
      setChatMessages((prev) => {
        const filtered = prev.filter((m) => !m.isTyping);
        return [
          ...filtered,
          { id: `ai-${Date.now()}`, role: "ai", content: AI_RESPONSES[actionId] || "I can help you with that." },
        ];
      });
      setSimulationStep(3);
      addLog(`AI response delivered (RAG: ${actionId === "thermostat" ? "thermostat_manual.pdf" : "building_guide.pdf"})`, "ai");
      setBeamState("idle");
    }, 2500);
  }, [addLog]);

  const resetSimulation = useCallback(() => {
    setSimulationStep(0);
    setDashboardLogs([]);
    setChatMessages([]);
    setSelectedQuery(null);
    setBeamState("idle");
  }, []);

  return (
    <section className="py-28 bg-carbon font-sans">
      <Container>
        <SectionHeading
          title="See It In Action"
          badge="Interactive Demo"
        />

        <div className="relative mt-16">
          <DataBeam beamState={beamState} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="order-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-gold/10 via-transparent to-transparent rounded-3xl blur-xl opacity-50" />
                <PhoneMockup
                  step={simulationStep}
                  messages={chatMessages}
                  onNfcScan={handleNfcScan}
                  onQuickAction={handleQuickAction}
                  onReset={resetSimulation}
                  selectedQuery={selectedQuery}
                />
              </div>
            </div>

            <div className="order-2 flex justify-center lg:justify-start">
              <div className="w-full max-w-lg relative">
                <div className="absolute -inset-4 bg-gradient-to-l from-blue-500/10 via-transparent to-transparent rounded-3xl blur-xl opacity-50" />
                <DashboardMockup
                  step={simulationStep}
                  logs={dashboardLogs}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {([0, 1, 2, 3] as SimulationStep[]).map((step) => (
              <div
                key={step}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  simulationStep >= step
                    ? "bg-gold/20 text-gold border border-gold/40"
                    : "bg-white/5 text-hint border border-white/10"
                }`}
              >
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-current/20 text-xs font-bold">
                  {step}
                </span>
                <span className="hidden sm:inline">{STEP_LABELS[step]}</span>
              </div>
            ))}
          </div>
        </div>
        
        <p className="mt-8 text-center text-hint text-sm max-w-xl mx-auto">
          Tap the NFC button on the phone to start the demo. Watch as data flows between the resident&apos;s device and the developer dashboard in real-time.
        </p>
      </Container>
    </section>
  );
}

interface PhoneMockupProps {
  step: SimulationStep;
  messages: ChatMessage[];
  onNfcScan: () => void;
  onQuickAction: (actionId: string) => void;
  onReset: () => void;
  selectedQuery: string | null;
}

function PhoneMockup({ step, messages, onNfcScan, onQuickAction, onReset, selectedQuery }: PhoneMockupProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[300px] h-[620px] bg-gray-950 rounded-[3rem] border-[6px] border-gray-900 shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-20 flex items-center justify-center">
          <div className="w-16 h-4 bg-gray-900 rounded-full" />
        </div>
        
        <div className="absolute top-2 left-6 right-6 z-10 flex items-center justify-between text-[10px] text-white/60">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <Signal className="w-3 h-3" />
            <Wifi className="w-3 h-3" />
            <Battery className="w-4 h-3" />
          </div>
        </div>

        <div className="absolute inset-[2px] rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
          <AnimatePresence mode="wait">
            {step === 0 ? (
              <LockScreen key="lock" onNfcScan={onNfcScan} />
            ) : (
              <ChatScreen
                key="chat"
                messages={messages}
                onQuickAction={onQuickAction}
                onReset={onReset}
                step={step}
                selectedQuery={selectedQuery}
              />
            )}
          </AnimatePresence>
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full" />
      </div>
      
      <p className="mt-4 text-hint text-sm text-center flex items-center gap-2">
        <Smartphone className="w-4 h-4" />
        Resident&apos;s Phone
      </p>
    </div>
  );
}

function LockScreen({ onNfcScan }: { onNfcScan: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full flex flex-col items-center justify-center p-8 pt-16"
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <motion.div
          className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center mb-6"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-10 h-10 text-gold"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            <path d="M12 6v6l4 2" />
          </svg>
        </motion.div>
        
        <h3 className="text-xl font-semibold text-porcelain mb-2">Parkview Residences</h3>
        <p className="text-hint text-sm mb-8">Unit 42, Block A</p>

        <motion.div
          className="absolute bottom-32 left-8 right-8"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="text-center text-hint text-xs mb-3">Hold your phone to the NFC tag</div>
          <div className="flex justify-center">
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gold/20 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 bg-gold/10 rounded-full"
                animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={onNfcScan}
        className="w-full py-4 bg-gold text-carbon font-semibold rounded-2xl relative overflow-hidden"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="absolute inset-0 bg-white/20"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="relative flex items-center justify-center gap-2">
          <Wifi className="w-5 h-5" />
          Tap NFC Tag to Unlock
        </span>
      </motion.button>
    </motion.div>
  );
}

interface ChatScreenProps {
  messages: ChatMessage[];
  onQuickAction: (actionId: string) => void;
  onReset: () => void;
  step: SimulationStep;
  selectedQuery: string | null;
}

function ChatScreen({ messages, onQuickAction, onReset, step, selectedQuery }: ChatScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full flex flex-col pt-12"
    >
      <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-amber-600 flex items-center justify-center">
          <span className="text-carbon font-bold text-sm">AI</span>
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium text-porcelain">OpenHouse Assistant</div>
          <div className="text-xs text-green-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
            Online
          </div>
        </div>
        {step === 3 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={onReset}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <RotateCcw className="w-4 h-4 text-hint" />
          </motion.button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  message.role === "user"
                    ? "bg-gold text-carbon rounded-br-md"
                    : "bg-white/10 text-porcelain rounded-bl-md"
                }`}
              >
                {message.isTyping ? (
                  <TypingIndicator />
                ) : (
                  message.content
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {step === 1 && !selectedQuery && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-4 border-t border-white/10 space-y-2"
        >
          <div className="text-xs text-hint mb-2">Quick Actions</div>
          {QUICK_ACTIONS.map((action) => (
            <motion.button
              key={action.id}
              onClick={() => onQuickAction(action.id)}
              className="w-full py-3 px-4 bg-white/5 border border-white/10 rounded-xl text-left text-sm text-porcelain hover:bg-white/10 hover:border-gold/30 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {action.label}
            </motion.button>
          ))}
        </motion.div>
      )}

      {(step === 2 || step === 3) && (
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-2 px-4 py-3 bg-white/5 rounded-xl">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-sm text-porcelain placeholder:text-hint outline-none"
              disabled
            />
            <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 py-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-hint rounded-full"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

interface DashboardMockupProps {
  step: SimulationStep;
  logs: DashboardLog[];
}

interface MetricCardProps {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  isActive: boolean;
}

function MetricCard({ label, value, icon, color, isActive }: MetricCardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl p-4 backdrop-blur-sm border transition-all duration-300 ${
        isActive
          ? `bg-${color}/10 border-${color}/40`
          : "bg-white/[0.03] border-white/[0.08]"
      }`}
      animate={isActive ? { scale: [1, 1.03, 1] } : { scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      {isActive && (
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-${color}/20 to-transparent`}
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
      )}
      <div className="relative flex items-center gap-3">
        <div className={`p-2 rounded-lg bg-${color}/10`}>
          {icon}
        </div>
        <div>
          <motion.div
            key={value}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`text-2xl font-bold text-${color}`}
          >
            {value}
          </motion.div>
          <div className="text-xs text-hint">{label}</div>
        </div>
      </div>
    </motion.div>
  );
}

function DashboardMockup({ step, logs }: DashboardMockupProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="relative overflow-hidden rounded-2xl min-h-[620px] backdrop-blur-xl bg-gradient-to-br from-zinc-900/90 via-zinc-900/80 to-black/90 border border-white/[0.08] shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/[0.03] via-transparent to-transparent pointer-events-none" />
        
        <div className="relative px-6 py-4 border-b border-white/[0.06] flex items-center justify-between bg-black/20">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
              <svg className="w-3 h-3 text-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="text-xs text-porcelain font-medium">Seaview Apartments</span>
            </div>
            <motion.div 
              className="flex items-center gap-2 px-3 py-1 rounded-full"
              animate={{ 
                backgroundColor: step > 0 ? "rgba(34, 197, 94, 0.1)" : "rgba(255, 255, 255, 0.03)"
              }}
            >
              <motion.span 
                className="w-2 h-2 rounded-full"
                animate={{ 
                  backgroundColor: step > 0 ? "#22c55e" : "#52525b",
                  boxShadow: step > 0 ? "0 0 8px #22c55e" : "none"
                }}
              />
              <span className="text-xs text-hint">{step > 0 ? "LIVE" : "IDLE"}</span>
            </motion.div>
          </div>
        </div>

        <div className="relative p-6 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-4 bg-gold rounded-full" />
              <h3 className="text-sm font-medium text-porcelain uppercase tracking-wider">Real-time Metrics</h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <motion.div
                className={`relative overflow-hidden rounded-xl p-4 backdrop-blur-sm border transition-all duration-300 ${
                  step === 1 ? "bg-gold/10 border-gold/40" : "bg-white/[0.03] border-white/[0.08]"
                }`}
                animate={step === 1 ? { scale: [1, 1.03, 1] } : { scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                {step === 1 && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                )}
                <div className="relative text-center">
                  <motion.div
                    key={step > 0 ? 1 : 0}
                    initial={{ scale: 1.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-2xl font-bold text-gold"
                  >
                    {step > 0 ? 1 : 0}
                  </motion.div>
                  <div className="text-xs text-hint mt-1">Active Sessions</div>
                </div>
              </motion.div>

              <motion.div
                className={`relative overflow-hidden rounded-xl p-4 backdrop-blur-sm border transition-all duration-300 ${
                  step === 2 ? "bg-blue-500/10 border-blue-500/40" : "bg-white/[0.03] border-white/[0.08]"
                }`}
                animate={step === 2 ? { scale: [1, 1.03, 1] } : { scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                {step === 2 && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                )}
                <div className="relative text-center">
                  <motion.div
                    key={step >= 2 ? 1 : 0}
                    initial={{ scale: 1.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-2xl font-bold text-blue-400"
                  >
                    {step >= 2 ? 1 : 0}
                  </motion.div>
                  <div className="text-xs text-hint mt-1">Queries</div>
                </div>
              </motion.div>

              <motion.div
                className={`relative overflow-hidden rounded-xl p-4 backdrop-blur-sm border transition-all duration-300 ${
                  step === 3 ? "bg-green-500/10 border-green-500/40" : "bg-white/[0.03] border-white/[0.08]"
                }`}
                animate={step === 3 ? { scale: [1, 1.03, 1] } : { scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                {step === 3 && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                )}
                <div className="relative text-center">
                  <motion.div
                    key={step >= 3 ? 1 : 0}
                    initial={{ scale: 1.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-2xl font-bold text-green-400"
                  >
                    {step >= 3 ? 1 : 0}
                  </motion.div>
                  <div className="text-xs text-hint mt-1">Resolved</div>
                </div>
              </motion.div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-blue-400 rounded-full" />
                <h3 className="text-sm font-medium text-porcelain uppercase tracking-wider">Live Event Feed</h3>
              </div>
              {logs.length > 0 && (
                <span className="text-xs text-hint px-2 py-1 rounded-full bg-white/[0.03]">
                  {logs.length} event{logs.length !== 1 ? "s" : ""}
                </span>
              )}
            </div>
            
            <div className="relative rounded-xl overflow-hidden border border-white/[0.06] bg-black/30 backdrop-blur-sm">
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/50 to-transparent pointer-events-none z-10" />
              
              <div className="p-4 space-y-2 max-h-[260px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10">
                <AnimatePresence mode="popLayout">
                  {logs.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col items-center justify-center py-8 text-center"
                    >
                      <div className="w-12 h-12 rounded-full bg-white/[0.03] flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-hint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="text-hint text-sm">Awaiting resident activity...</div>
                      <div className="text-hint/50 text-xs mt-1">Events will appear here in real-time</div>
                    </motion.div>
                  ) : (
                    logs.map((log, index) => (
                      <motion.div
                        key={log.id}
                        initial={{ opacity: 0, x: -20, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="group"
                      >
                        <motion.div
                          className={`relative overflow-hidden rounded-lg p-3 border transition-all ${
                            log.type === "system"
                              ? "bg-blue-500/[0.08] border-blue-500/20 hover:border-blue-500/40"
                              : log.type === "user"
                              ? "bg-gold/[0.08] border-gold/20 hover:border-gold/40"
                              : "bg-green-500/[0.08] border-green-500/20 hover:border-green-500/40"
                          }`}
                          initial={index === logs.length - 1 ? { boxShadow: log.type === "system" ? "0 0 20px rgba(59, 130, 246, 0.3)" : log.type === "user" ? "0 0 20px rgba(234, 179, 8, 0.3)" : "0 0 20px rgba(34, 197, 94, 0.3)" } : {}}
                          animate={{ boxShadow: "0 0 0px transparent" }}
                          transition={{ duration: 1 }}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                              log.type === "system" ? "bg-blue-500/20" : log.type === "user" ? "bg-gold/20" : "bg-green-500/20"
                            }`}>
                              {log.type === "system" && (
                                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                              )}
                              {log.type === "user" && (
                                <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                              )}
                              {log.type === "ai" && (
                                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                                  log.type === "system" ? "bg-blue-500/20 text-blue-300" : log.type === "user" ? "bg-gold/20 text-gold" : "bg-green-500/20 text-green-300"
                                }`}>
                                  {log.type === "system" ? "SYSTEM" : log.type === "user" ? "USER" : "AI"}
                                </span>
                                <span className="text-xs text-hint">
                                  {log.timestamp.toLocaleTimeString()}
                                </span>
                              </div>
                              <p className={`text-sm leading-relaxed ${
                                log.type === "system" ? "text-blue-200" : log.type === "user" ? "text-amber-200" : "text-green-200"
                              }`}>
                                {log.event}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
      
      <p className="mt-4 text-hint text-sm text-center flex items-center justify-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Live Developer Console
      </p>
    </div>
  );
}
