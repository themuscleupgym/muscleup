'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [triggered, setTriggered] = useState(false);

  const open = useCallback(() => {
    if (!triggered && !isOpen) {
      setIsOpen(true);
      setTriggered(true);
    }
  }, [triggered, isOpen]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('leadPopupShown')) return;

    // 1. Time-based trigger: 12 seconds
    const timer = setTimeout(() => open(), 12000);

    // 2. Scroll trigger: 50%
    const handleScroll = () => {
      const scrollPct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPct > 0.5) open();
    };

    // 3. Exit intent trigger
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10) open();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('leadPopupShown', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    sessionStorage.setItem('leadPopupShown', 'true');
    setTimeout(() => setIsOpen(false), 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          {/* Backdrop with elegant blur */}
          <motion.div
            className="absolute inset-0 bg-obsidian/85 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal Container */}
          <motion.div
            className="relative z-10 w-full max-w-lg bg-[#0c0c0e] border border-white/5 shadow-2xl p-8 md:p-10 text-center"
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/5 flex items-center justify-center hover:border-gold/30 hover:text-gold text-silver-dim transition-all"
              aria-label="Close dialog"
            >
              <X size={14} />
            </button>

            {!submitted ? (
              <div>
                <div className="mb-8 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold mb-4">
                    <Zap size={16} />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-extrabold text-silver tracking-tight uppercase">
                    Your Transformation <span className="text-gold-gradient block font-black">Awaits</span>
                  </h3>
                  <p className="font-body text-xs text-silver-dim/50 mt-2 leading-relaxed max-w-sm">
                    Claim your complimentary private sanctuary tour, body composition diagnostics, and physical consultation.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    className="calc-input"
                    placeholder="Full Name *"
                    required
                  />
                  <input
                    type="tel"
                    className="calc-input"
                    placeholder="Phone Number *"
                    required
                  />
                  <select className="calc-input bg-obsidian-200" required>
                    <option value="" className="bg-obsidian-200">Select Transformation Goal *</option>
                    <option className="bg-obsidian-200">Recomposition & Tone</option>
                    <option className="bg-obsidian-200">Hypertrophy & Strength</option>
                    <option className="bg-obsidian-200">Cardiovascular & Endurance</option>
                  </select>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="btn-primary w-full py-4 text-[10px] tracking-widest flex items-center justify-center gap-2"
                    >
                      <span>Submit Request</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </form>

                <div className="mt-6 flex items-center justify-center gap-2 text-silver-dim/35 text-[9px]">
                  <ShieldCheck size={11} className="text-gold" />
                  <span className="font-body uppercase tracking-wider">Privacy Guaranteed. Zero Solicitation.</span>
                </div>
              </div>
            ) : (
              <div className="py-12 flex flex-col items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mb-6"
                >
                  <Zap size={24} className="text-gold animate-pulse" />
                </motion.div>
                <h4 className="font-display text-xl font-bold text-gold-gradient uppercase mb-2">
                  ITINERARY REGISTERED
                </h4>
                <p className="font-body text-xs text-silver-dim/50 max-w-xs leading-relaxed">
                  Your luxury guest session has been logged. Our VIP concierge team will reach out via call within 24 hours.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
