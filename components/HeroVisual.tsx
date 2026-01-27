"use client";

import { FileText } from "lucide-react";
import { useReducedMotion } from "framer-motion";

const HeroVisual = () => {
  const prefersReducedMotion = useReducedMotion();

  const particles = [
    { id: 0, delay: 0, yOffset: 0, size: 4 },
    { id: 1, delay: 0.2, yOffset: 7, size: 6 },
    { id: 2, delay: 0.4, yOffset: 14, size: 8 },
    { id: 3, delay: 0.6, yOffset: 10, size: 4 },
    { id: 4, delay: 0.8, yOffset: -5, size: 6 },
    { id: 5, delay: 1.0, yOffset: -12, size: 8 },
    { id: 6, delay: 1.2, yOffset: -8, size: 4 },
    { id: 7, delay: 1.4, yOffset: 3, size: 6 },
    { id: 8, delay: 1.6, yOffset: 11, size: 8 },
    { id: 9, delay: 1.8, yOffset: 6, size: 4 },
    { id: 10, delay: 2.0, yOffset: -3, size: 6 },
    { id: 11, delay: 2.2, yOffset: -10, size: 8 },
    { id: 12, delay: 2.4, yOffset: -6, size: 4 },
    { id: 13, delay: 2.6, yOffset: 8, size: 6 },
    { id: 14, delay: 2.8, yOffset: 13, size: 8 },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="relative flex items-center justify-center gap-8 md:gap-16 py-8">
        
        {/* Light trail (behind everything) */}
        <div 
          className="absolute h-[2px] opacity-20 pointer-events-none hidden md:block"
          style={{
            left: 'calc(50% - 200px)',
            right: 'calc(50% - 200px)',
            top: '50%',
            background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3) 20%, rgba(212, 175, 55, 0.3) 80%, transparent)',
          }}
        />
        
        {/* Document Stack - with hover fan effect */}
        <div className="relative w-[120px] h-[160px] md:w-[140px] md:h-[180px] flex-shrink-0 group cursor-pointer">
          {/* Back document */}
          <div 
            className={`absolute inset-0 w-[100px] h-[140px] md:w-[120px] md:h-[160px] rounded-xl 
              bg-gradient-to-br from-[#1a1d24] to-[#14161b]
              border border-[#2a2f3a] shadow-2xl
              transition-all duration-300 ease-out
              -rotate-6 translate-x-4 -translate-y-2 opacity-40
              group-hover:-rotate-12 group-hover:translate-x-6 group-hover:-translate-y-4 group-hover:opacity-60
              ${prefersReducedMotion ? '' : 'animate-float-back'}`}
          />
          
          {/* Middle document */}
          <div 
            className={`absolute inset-0 w-[100px] h-[140px] md:w-[120px] md:h-[160px] rounded-xl 
              bg-gradient-to-br from-[#1a1d24] to-[#14161b]
              border border-[#2a2f3a] shadow-2xl
              transition-all duration-300 ease-out
              -rotate-3 translate-x-2 -translate-y-1 opacity-70
              group-hover:-rotate-6 group-hover:translate-x-3 group-hover:-translate-y-2 group-hover:opacity-85
              ${prefersReducedMotion ? '' : 'animate-float-middle'}`}
          />
          
          {/* Front document */}
          <div 
            className={`absolute inset-0 w-[100px] h-[140px] md:w-[120px] md:h-[160px] rounded-xl 
              bg-gradient-to-br from-[#1e222a] to-[#15181f]
              border border-[#2a2f3a] shadow-2xl
              transition-all duration-300 ease-out
              group-hover:rotate-2 group-hover:-translate-x-1 group-hover:border-amber-400/30
              ${prefersReducedMotion ? '' : 'animate-float-front'}`}
          >
            <div className="p-4 md:p-5 space-y-2 md:space-y-3">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-[#2a2f3a] flex items-center justify-center mb-3 md:mb-4 transition-colors duration-300 group-hover:bg-amber-400/20">
                <FileText className="w-3 h-3 md:w-4 md:h-4 text-neutral-500 transition-colors duration-300 group-hover:text-amber-400" />
              </div>
              <div className="h-1.5 md:h-2 bg-[#2a2f3a] rounded-full w-full" />
              <div className="h-1.5 md:h-2 bg-[#2a2f3a] rounded-full w-4/5" />
              <div className="h-1.5 md:h-2 bg-[#2a2f3a] rounded-full w-full" />
              <div className="h-1.5 md:h-2 bg-[#2a2f3a] rounded-full w-3/5" />
              <div className="h-1.5 md:h-2 bg-[#2a2f3a] rounded-full w-4/5" />
            </div>
          </div>
          
          {/* Hover hint */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Your documents
          </div>
        </div>

        {/* Particles - hidden on mobile, show on md+ */}
        <div className="relative w-[120px] md:w-[200px] h-[100px] hidden sm:block flex-shrink-0">
          {!prefersReducedMotion && particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full bg-amber-400 animate-particle"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                left: '0',
                top: `calc(50% + ${p.yOffset}px)`,
                filter: 'blur(1px)',
                boxShadow: '0 0 8px rgba(212, 175, 55, 0.4)',
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
          {/* Static fallback for reduced motion */}
          {prefersReducedMotion && (
            <div 
              className="absolute left-0 right-0 top-1/2 h-[2px] opacity-40"
              style={{
                background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.8), rgba(212, 175, 55, 0.3))',
              }}
            />
          )}
        </div>

        {/* Chat Interface - with hover effects */}
        <div className="relative flex-shrink-0 group/chat cursor-pointer">
          {/* Glow - intensifies on hover */}
          <div className="absolute -inset-4 bg-amber-400/5 rounded-3xl blur-2xl transition-all duration-500 group-hover/chat:bg-amber-400/15 group-hover/chat:-inset-6" />
          
          {/* Chat container */}
          <div 
            className={`relative w-[220px] md:w-[280px] rounded-2xl overflow-hidden
              bg-gradient-to-br from-[#1e222a] to-[#15181f]
              border border-amber-400/20 shadow-2xl
              transition-all duration-300 ease-out
              group-hover/chat:border-amber-400/40 group-hover/chat:scale-[1.02] group-hover/chat:shadow-amber-400/10
              ${prefersReducedMotion ? '' : 'animate-float-chat'}`}
          >
            {/* Header */}
            <div className="px-3 md:px-4 py-2 md:py-3 border-b border-[#2a2f3a] flex items-center gap-2 md:gap-3 transition-colors duration-300 group-hover/chat:border-amber-400/20">
              <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 
                flex items-center justify-center shadow-lg transition-transform duration-300 group-hover/chat:scale-110">
                <span className="text-xs md:text-sm font-bold text-neutral-900">AI</span>
              </div>
              <div>
                <div className="text-xs md:text-sm font-medium text-white">OpenHouse</div>
                <div className="flex items-center gap-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full bg-emerald-400 ${prefersReducedMotion ? '' : 'animate-pulse'}`} />
                  <span className="text-[10px] md:text-xs text-emerald-400">Online</span>
                </div>
              </div>
            </div>
            
            {/* Messages */}
            <div className="p-3 md:p-4 space-y-2 md:space-y-3">
              {/* User message */}
              <div className="flex justify-end">
                <div className="px-3 md:px-4 py-2 md:py-2.5 rounded-2xl rounded-br-md 
                  bg-amber-400/10 border border-amber-400/20
                  text-xs md:text-sm text-neutral-200
                  transition-all duration-300 group-hover/chat:bg-amber-400/15">
                  What size is my living room?
                </div>
              </div>
              
              {/* AI message */}
              <div className={`flex justify-start ${prefersReducedMotion ? '' : 'animate-message-appear'}`}>
                <div className="px-3 md:px-4 py-2 md:py-2.5 rounded-2xl rounded-bl-md 
                  bg-[#2a2f3a] text-xs md:text-sm text-neutral-200
                  transition-all duration-300 group-hover/chat:bg-[#323844]">
                  Your living room is{' '}
                  <span className="text-amber-400 font-medium transition-all duration-300 group-hover/chat:text-amber-300">4.2m × 5.1m</span>{' '}
                  (21.4m²).
                </div>
              </div>
            </div>
            
            {/* Typing indicator on hover */}
            <div className="px-3 md:px-4 pb-3 opacity-0 group-hover/chat:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-1 text-[10px] text-neutral-500">
                <span className="w-1 h-1 rounded-full bg-amber-400/60 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1 h-1 rounded-full bg-amber-400/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1 h-1 rounded-full bg-amber-400/60 animate-bounce" style={{ animationDelay: '300ms' }} />
                <span className="ml-1">AI is ready to help</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
