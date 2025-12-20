"use client";

import { useRef, useState, useEffect } from "react";
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
    style: "green" | "gold" | "red";
  };
};

const SCENARIOS: Scenario[] = [
  {
    title: "Maintenance",
    icon: "🔧",
    messages: [
      { sender: "resident", text: "The radiator in the bedroom is making a loud banging noise." },
      { sender: "ai", text: "That sounds like trapped air (kettling). I have a 30-second guide on how to bleed your specific radiator model. Would you like to see it?" },
      { sender: "resident", text: "Yes please." },
    ],
    resultTag: { text: "Ticket Avoided", style: "green" },
  },
  {
    title: "Amenity Booking",
    icon: "🎉",
    messages: [
      { sender: "resident", text: "Is the roof terrace available this Saturday evening for a private event?" },
      { sender: "ai", text: "Yes, the South Terrace is available from 6 PM - 10 PM. The booking fee is £50. Shall I reserve this for you and add it to your monthly bill?" },
    ],
    resultTag: { text: "Revenue Captured", style: "gold" },
  },
  {
    title: "Emergency",
    icon: "🚨",
    messages: [
      { sender: "resident", text: "There is water leaking under my kitchen sink!" },
      { sender: "ai", text: "I am alerting the site manager immediately. In the meantime, your stopcock is located inside the utility cupboard on the bottom left. Here is a diagram." },
    ],
    resultTag: { text: "Emergency Escalated", style: "red" },
  },
];

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      <motion.span
        className="w-2 h-2 bg-gray-400 rounded-full"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
      />
      <motion.span
        className="w-2 h-2 bg-gray-400 rounded-full"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
      />
      <motion.span
        className="w-2 h-2 bg-gray-400 rounded-full"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
      />
    </div>
  );
}

function ChatBubble({ 
  message, 
  index, 
  isVisible 
}: { 
  message: Message; 
  index: number;
  isVisible: boolean;
}) {
  const isResident = message.sender === "resident";
  
  if (!isVisible) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
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

function ResultTag({ tag }: { tag: Scenario["resultTag"] }) {
  const styles = {
    green: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    gold: "bg-gold/20 text-gold border-gold/30",
    red: "bg-red-500/20 text-red-400 border-red-500/30",
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${styles[tag.style]}`}
    >
      <span className="w-2 h-2 rounded-full bg-current" />
      <span className="text-sm font-semibold">{tag.text}</span>
    </motion.div>
  );
}

function ChatCard({ scenario, delay, triggerAnimation }: { scenario: Scenario; delay: number; triggerAnimation: boolean }) {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [showTyping, setShowTyping] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (!triggerAnimation || animationStarted) return;
    
    setAnimationStarted(true);
    
    const startDelay = delay * 400;
    
    const timer = setTimeout(() => {
      let currentIndex = 0;
      
      const showNextMessage = () => {
        if (currentIndex < scenario.messages.length) {
          const message = scenario.messages[currentIndex];
          
          if (message.sender === "ai") {
            setShowTyping(true);
            setTimeout(() => {
              setShowTyping(false);
              setVisibleMessages(currentIndex + 1);
              currentIndex++;
              setTimeout(showNextMessage, 600);
            }, 800);
          } else {
            setVisibleMessages(currentIndex + 1);
            currentIndex++;
            setTimeout(showNextMessage, 400);
          }
        } else {
          setTimeout(() => setShowResult(true), 400);
        }
      };
      
      showNextMessage();
    }, startDelay);
    
    return () => clearTimeout(timer);
  }, [triggerAnimation, animationStarted, delay, scenario.messages]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      className="bg-carbon/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
    >
      <div className="px-5 py-4 border-b border-white/10 flex items-center gap-3">
        <span className="text-xl">{scenario.icon}</span>
        <h3 className="text-lg font-semibold text-porcelain">{scenario.title}</h3>
      </div>
      
      <div className="p-4 min-h-[280px] flex flex-col">
        <div className="flex-1">
          {scenario.messages.map((message, index) => (
            <ChatBubble
              key={index}
              message={message}
              index={index}
              isVisible={index < visibleMessages}
            />
          ))}
          
          {showTyping && (
            <div className="flex justify-start mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-gold/70 flex items-center justify-center mr-2 flex-shrink-0">
                <Bot className="w-4 h-4 text-carbon" />
              </div>
              <div className="bg-gradient-to-br from-[#0a1628] to-[#0f2847] rounded-2xl rounded-bl-md border border-gold/20">
                <TypingIndicator />
              </div>
            </div>
          )}
        </div>
        
        <div className="pt-4 flex justify-center">
          {showResult && <ResultTag tag={scenario.resultTag} />}
        </div>
      </div>
    </motion.div>
  );
}

export function ChatReplayGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 bg-carbon overflow-hidden">
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
            <ChatCard key={scenario.title} scenario={scenario} delay={index} triggerAnimation={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
