'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader-overlay"
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold/10 rounded-full blur-[100px]" />
          
          <div className="relative flex flex-col items-center">
            {/* Logo Mark */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-4 text-center"
            >
              <h1 className="font-display text-4xl md:text-5xl font-black text-gold-gradient tracking-[0.15em] uppercase leading-none">
                MUSCLEUP
              </h1>
              <p className="font-wide text-[8px] tracking-[0.4em] text-silver-dim/40 uppercase mt-2">
                ELITE SANCTUARY
              </p>
            </motion.div>

            {/* Premium Loading Bar */}
            <div className="w-48 h-[1px] bg-white/5 relative overflow-hidden mt-6">
              <motion.div
                className="absolute left-0 top-0 bottom-0 bg-gold"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
