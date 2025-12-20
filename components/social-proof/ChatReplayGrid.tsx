"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bot } from "lucide-react";

type Message = {
  sender: "resident" | "ai";
  text: string;
};

type Scenario = {
  title: string;
  icon: string;
  messages: Message[];
  resultTag: {
    text: string;
    style: "green" | "gold" | "purple";
  };
};

const SCENARIOS: Scenario[] = [
  {
    title: "Maintenance",
    icon: "🔧",
    messages: [
      { sender: "resident", text: "The radiator in the bedroom is making a loud banging noise." },
      { sender: "ai", text: "That sounds like trapped air (kettling). I have a 30-second guide on how to bleed your specific radiator model. Would you like to see it?" },
    ],
    resultTag: { text: "Ticket Avoided", style: "green" },
  },
  {
    title: "Local Knowledge",
    icon: "🗺️",
    messages: [
      { sender: "resident", text: "How far is the closest convenience store? We need milk." },
      { sender: "ai", text: "The closest is Spar on High Street, which is about 800 meters away (a 10-minute walk). Would you like me to send the walking directions to your phone?" },
    ],
    resultTag: { text: "Local Area Guide", style: "purple" },
  },
  {
    title: "Home Specifications",
    icon: "📐",
    messages: [
      { sender: "resident", text: "I'm looking at buying new flooring. Do you know exactly how big my living room is?" },
      { sender: "ai", text: "I can help with that! Here is your unit's architectural floor plan (Type 2B) with room dimensions marked. You can check the exact measurements there." },
    ],
    resultTag: { text: "Instant Documentation", style: "gold" },
  },
];

function ChatBubble({ 
  message, 
  delay 
}: { 
  message: Message; 
  delay: number;
}) {
  const isResident = message.sender === "resident";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={`flex ${isResident ? "justify-end" : "justify-start"} mb-3`}
    >
      {!isResident && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold/70 flex items-center justify-center mr-2 flex-shrink-0">
          <Bot className="w-4 h-4 text-carbon" />
        </div>
      )}
      <div
        className={`max-w-[85%] px-4 py-3 rounded-2xl ${
          isResident
            ? "bg-gray-700/80 text-gray-100 rounded-br-md"
            : "bg-gradient-to-br from-[#0a1628] to-[#0f2847] text-gray-100 rounded-bl-md border border-gold/20"
        }`}
      >
        <p className="text-sm leading-relaxed">{message.text}</p>
      </div>
    </motion.div>
  );
}

function ResultTag({ tag, delay }: { tag: Scenario["resultTag"]; delay: number }) {
  const styles = {
    green: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    gold: "bg-gold/20 text-gold border-gold/30",
    purple: "bg-violet-500/20 text-violet-400 border-violet-500/30",
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${styles[tag.style]}`}
    >
      <span className="w-2 h-2 rounded-full bg-current" />
      <span className="text-sm font-semibold">{tag.text}</span>
    </motion.div>
  );
}

function ChatCard({ scenario, cardDelay }: { scenario: Scenario; cardDelay: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  const baseDelay = cardDelay * 0.3;
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: baseDelay }}
      className="bg-carbon/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
    >
      <div className="px-5 py-4 border-b border-white/10 flex items-center gap-3">
        <span className="text-xl">{scenario.icon}</span>
        <h3 className="text-lg font-semibold text-porcelain">{scenario.title}</h3>
      </div>
      
      <div className="p-4 h-[320px] flex flex-col">
        <div className="flex-1 overflow-hidden">
          {isInView && scenario.messages.map((message, index) => (
            <ChatBubble
              key={index}
              message={message}
              delay={baseDelay + 0.3 + index * 0.4}
            />
          ))}
        </div>
        
        <div className="pt-4 flex justify-center flex-shrink-0">
          {isInView && (
            <ResultTag 
              tag={scenario.resultTag} 
              delay={baseDelay + 0.3 + scenario.messages.length * 0.4 + 0.3} 
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function ChatReplayGrid() {
  return (
    <section className="relative py-24 sm:py-32 bg-carbon overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,167,94,0.03)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-semibold">
            Live Demonstrations
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-porcelain mb-6">
            Real conversations.{" "}
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #C8A75E 0%, #E8D9A0 50%, #C8A75E 100%)",
              }}
            >
              Real solutions.
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Watch how OpenHouse AI handles real resident enquiries in real-time
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SCENARIOS.map((scenario, index) => (
            <ChatCard key={scenario.title} scenario={scenario} cardDelay={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
