"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Smartphone, Wifi, Battery, Signal, RotateCcw } from "lucide-react";

type SimulationStep = 0 | 1 | 2 | 3;

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

export function EcosystemDemo() {
  const [simulationStep, setSimulationStep] = useState<SimulationStep>(0);
  const [dashboardLogs, setDashboardLogs] = useState<DashboardLog[]>([]);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [selectedQuery, setSelectedQuery] = useState<string | null>(null);

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
    setSimulationStep(1);
    addLog("NFC tag scanned - Resident activated", "system");
    
    setChatMessages([
      {
        id: "welcome",
        role: "ai",
        content: "Welcome home, Sarah! I'm your AI assistant for Parkview Residences. How can I help you today?",
      },
    ]);
  }, [addLog]);

  const handleQuickAction = useCallback((actionId: string) => {
    const action = QUICK_ACTIONS.find((a) => a.id === actionId);
    if (!action) return;

    setSelectedQuery(actionId);
    setSimulationStep(2);
    
    setChatMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, role: "user", content: action.query },
    ]);
    addLog(`Query received: '${action.query}'`, "user");

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        { id: `typing-${Date.now()}`, role: "ai", content: "", isTyping: true },
      ]);
    }, 500);

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
    }, 2000);
  }, [addLog]);

  const resetSimulation = useCallback(() => {
    setSimulationStep(0);
    setDashboardLogs([]);
    setChatMessages([]);
    setSelectedQuery(null);
  }, []);

  return (
    <section className="py-28 bg-carbon">
      <Container>
        <SectionHeading
          title="See It In Action"
          badge="Interactive Demo"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="order-1 flex justify-center">
            <PhoneMockup
              step={simulationStep}
              messages={chatMessages}
              onNfcScan={handleNfcScan}
              onQuickAction={handleQuickAction}
              onReset={resetSimulation}
              selectedQuery={selectedQuery}
            />
          </div>

          <div className="order-2">
            <DashboardMockup
              step={simulationStep}
              logs={dashboardLogs}
            />
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {([0, 1, 2, 3] as SimulationStep[]).map((step) => (
              <div
                key={step}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
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

function DashboardMockup({ step, logs }: DashboardMockupProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-zinc-900/80 border border-white/10 rounded-2xl overflow-hidden flex-1 min-h-[560px]">
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-hint text-sm">Developer Dashboard</span>
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${step > 0 ? "bg-green-400 animate-pulse" : "bg-zinc-600"}`} />
            <span className="text-xs text-hint">{step > 0 ? "Live" : "Idle"}</span>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <motion.div
              className="bg-white/5 rounded-lg p-4 text-center"
              animate={{ scale: step === 1 ? [1, 1.05, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl font-bold text-gold">{step > 0 ? 1 : 0}</div>
              <div className="text-xs text-hint">Active Session</div>
            </motion.div>
            <motion.div
              className="bg-white/5 rounded-lg p-4 text-center"
              animate={{ scale: step === 2 ? [1, 1.05, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl font-bold text-porcelain">{step >= 2 ? 1 : 0}</div>
              <div className="text-xs text-hint">Queries</div>
            </motion.div>
            <motion.div
              className="bg-white/5 rounded-lg p-4 text-center"
              animate={{ scale: step === 3 ? [1, 1.05, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl font-bold text-green-400">{step >= 3 ? 1 : 0}</div>
              <div className="text-xs text-hint">Resolved</div>
            </motion.div>
          </div>

          <div className="bg-black/40 rounded-lg p-4">
            <div className="text-xs text-hint mb-3 uppercase tracking-wide">Event Log</div>
            <div className="space-y-2 max-h-[280px] overflow-y-auto">
              <AnimatePresence>
                {logs.length === 0 ? (
                  <div className="text-hint text-sm italic">Waiting for activity...</div>
                ) : (
                  logs.map((log) => (
                    <motion.div
                      key={log.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`text-sm py-2 px-3 rounded-lg ${
                        log.type === "system"
                          ? "bg-blue-500/10 text-blue-300"
                          : log.type === "user"
                          ? "bg-gold/10 text-gold"
                          : "bg-green-500/10 text-green-300"
                      }`}
                    >
                      <span className="text-xs opacity-60 mr-2">
                        {log.timestamp.toLocaleTimeString()}
                      </span>
                      {log.event}
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      
      <p className="mt-4 text-hint text-sm text-center">
        Developer Dashboard (Real-time)
      </p>
    </div>
  );
}
