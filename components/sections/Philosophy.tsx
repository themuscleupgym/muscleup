'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="philosophy"
      className="relative min-h-[85vh] flex items-center justify-center bg-obsidian py-32 md:py-48 overflow-hidden"
    >
      {/* Structural Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gold" />
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Tag */}
          <motion.div variants={wordVariants} className="mb-12">
            <span className="label-tag">THE PHILOSOPHY</span>
          </motion.div>

          {/* Statement */}
          <motion.h2
            variants={wordVariants}
            className="font-display font-light text-silver text-[clamp(1.6rem,4vw,3.5rem)] leading-[1.3] tracking-tight mb-16"
          >
            "Discipline is not a restriction. It is the absolute <span className="font-extrabold text-gold-gradient">redefinition of your limits</span>. At MuscleUp, we construct more than physiques; we forge the uncompromising mindset required to sustain them."
          </motion.h2>

          {/* Divider */}
          <motion.div
            variants={wordVariants}
            className="w-12 h-px bg-gold/30 mx-auto mb-12"
          />

          {/* Subtext */}
          <motion.p
            variants={wordVariants}
            className="font-body text-xs md:text-sm text-silver-dim/40 max-w-lg mx-auto leading-relaxed uppercase tracking-[0.25em]"
          >
            No shortcuts. No compromises. Just elite progress.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
