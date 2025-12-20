"use client";

import { useState, useCallback } from "react";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";

type SimulationStep = 0 | 1 | 2 | 3;

interface DashboardLog {
  id: string;
  timestamp: Date;
  event: string;
  type: "system" | "user" | "ai";
}

interface SimulationContext {
  step: SimulationStep;
  logs: DashboardLog[];
}

const STEP_LABELS: Record<SimulationStep, string> = {
  0: "Locked",
  1: "Scanned / Welcome",
  2: "Query Sent",
  3: "Answered",
};

export function EcosystemDemo() {
  const [simulationStep, setSimulationStep] = useState<SimulationStep>(0);
  const [dashboardLogs, setDashboardLogs] = useState<DashboardLog[]>([]);

  const handleUserInteraction = useCallback(() => {
    const nextStep = Math.min(simulationStep + 1, 3) as SimulationStep;
    
    const newLog: DashboardLog = {
      id: `log-${Date.now()}`,
      timestamp: new Date(),
      event: getEventForStep(nextStep),
      type: getTypeForStep(nextStep),
    };

    setSimulationStep(nextStep);
    setDashboardLogs((prev) => [...prev, newLog]);
  }, [simulationStep]);

  const resetSimulation = useCallback(() => {
    setSimulationStep(0);
    setDashboardLogs([]);
  }, []);

  return (
    <section className="py-28 bg-carbon">
      <Container>
        <SectionHeading
          title="See It In Action"
          badge="Interactive Demo"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Phone Mockup */}
          <div className="order-1">
            <PhoneMockup
              step={simulationStep}
              onInteraction={handleUserInteraction}
              onReset={resetSimulation}
            />
          </div>

          {/* Right Column: Dashboard View */}
          <div className="order-2">
            <DashboardMockup
              step={simulationStep}
              logs={dashboardLogs}
            />
          </div>
        </div>

        {/* Step Indicator */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2">
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

function getEventForStep(step: SimulationStep): string {
  switch (step) {
    case 1:
      return "NFC tag scanned - Resident activated";
    case 2:
      return "Query received: 'How do I reset the heating timer?'";
    case 3:
      return "AI response delivered (RAG: thermostat_manual.pdf)";
    default:
      return "System idle";
  }
}

function getTypeForStep(step: SimulationStep): "system" | "user" | "ai" {
  switch (step) {
    case 1:
      return "system";
    case 2:
      return "user";
    case 3:
      return "ai";
    default:
      return "system";
  }
}

interface PhoneMockupProps {
  step: SimulationStep;
  onInteraction: () => void;
  onReset: () => void;
}

function PhoneMockup({ step, onInteraction, onReset }: PhoneMockupProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[280px] h-[560px] bg-black rounded-[40px] border-4 border-zinc-800 shadow-2xl overflow-hidden">
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
        
        {/* Phone Screen */}
        <div className="w-full h-full bg-gradient-to-b from-zinc-900 to-black p-6 pt-10 flex flex-col">
          {/* Screen Content Placeholder */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="text-hint text-sm mb-2">Step {step}</div>
            <div className="text-porcelain font-medium">{STEP_LABELS[step]}</div>
            <div className="mt-4 text-hint text-xs">
              {step === 0 && "Tap to scan NFC"}
              {step === 1 && "Welcome! Ask a question"}
              {step === 2 && "Sending query..."}
              {step === 3 && "Answer received!"}
            </div>
          </div>

          {/* Interaction Button */}
          <div className="mt-auto space-y-3">
            {step < 3 ? (
              <button
                onClick={onInteraction}
                className="w-full py-3 bg-gold text-carbon font-semibold rounded-xl hover:bg-gold/90 transition-colors"
              >
                {step === 0 && "Scan NFC Tag"}
                {step === 1 && "Ask a Question"}
                {step === 2 && "Send Query"}
              </button>
            ) : (
              <button
                onClick={onReset}
                className="w-full py-3 bg-white/10 text-porcelain font-semibold rounded-xl hover:bg-white/20 transition-colors"
              >
                Reset Demo
              </button>
            )}
          </div>
        </div>
      </div>
      
      <p className="mt-4 text-hint text-sm text-center">
        Resident&apos;s Phone
      </p>
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
      <div className="bg-zinc-900/80 border border-white/10 rounded-2xl overflow-hidden flex-1 min-h-[500px]">
        {/* Dashboard Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
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

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gold">{step > 0 ? 1 : 0}</div>
              <div className="text-xs text-hint">Active Session</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-porcelain">{step >= 2 ? 1 : 0}</div>
              <div className="text-xs text-hint">Queries</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-400">{step >= 3 ? 1 : 0}</div>
              <div className="text-xs text-hint">Resolved</div>
            </div>
          </div>

          {/* Event Log */}
          <div className="bg-black/40 rounded-lg p-4">
            <div className="text-xs text-hint mb-3 uppercase tracking-wide">Event Log</div>
            <div className="space-y-2 max-h-[200px] overflow-y-auto">
              {logs.length === 0 ? (
                <div className="text-hint text-sm italic">Waiting for activity...</div>
              ) : (
                logs.map((log) => (
                  <div
                    key={log.id}
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
                  </div>
                ))
              )}
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
