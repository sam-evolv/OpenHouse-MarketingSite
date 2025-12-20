"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const interactiveSelectors = [
      'a',
      'button',
      '[role="button"]',
      'input',
      'textarea',
      'select',
      '[data-cursor-hover]',
      '.bento-card',
      '.phone-demo',
      '.ecosystem-demo',
      '.orbit-item',
    ];

    const addHoverListeners = () => {
      const elements = document.querySelectorAll(interactiveSelectors.join(', '));
      elements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    const observer = new MutationObserver(() => {
      addHoverListeners();
    });

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    addHoverListeners();
    
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      <style jsx global>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: isHovering ? 48 : 16,
            height: isHovering ? 48 : 16,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              backgroundColor: isHovering ? "transparent" : "#C8A75E",
              borderWidth: isHovering ? 2 : 0,
              borderColor: "#C8A75E",
            }}
            transition={{ duration: 0.2 }}
            style={{
              borderStyle: "solid",
            }}
          />
        </motion.div>
      </motion.div>
      
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-gold pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
