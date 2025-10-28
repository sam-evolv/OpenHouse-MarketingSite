"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouteFx } from "./useRouteFx";

export function ProgressBar() {
  const { isTransitioning } = useRouteFx();

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-[10000] h-[2px] bg-gold origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 1, opacity: 0 }}
          transition={{
            scaleX: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.2, delay: 0.6 },
          }}
        />
      )}
    </AnimatePresence>
  );
}
