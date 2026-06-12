'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const heroStats = [
  { value: '2,500+', label: 'Elite Members' },
  { value: '800+', label: 'Google Reviews' },
  { value: '4.9★', label: 'Client Rating' },
];

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const yBg = useTransform(scrollY, [0, 800], [0, 250]);
  const opacityOverlay = useTransform(scrollY, [0, 600], [0.4, 0.95]);
  const yContent = useTransform(scrollY, [0, 600], [0, 100]);

  const scrollToNext = () => {
    const el = document.querySelector('#philosophy');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: yBg }}
      >
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=90"
          alt="Luxury Gym Interior"
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-90"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay */}
      <motion.div 
        className="absolute inset-0 bg-obsidian/60 z-0"
        style={{ opacity: opacityOverlay }}
      />

      {/* Content */}
      <motion.div
        style={{ y: yContent }}
        className="relative z-10 container mx-auto px-6 text-center pt-20"
      >
        {/* Main Headline */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            className="font-display font-extrabold leading-[0.95] tracking-tight text-silver text-[clamp(2.6rem,7.5vw,6.5rem)]"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.6, ease: [0.25, 1, 0.5, 1] }}
          >
            ELEVATE YOUR <br />
            <span className="text-gold-gradient font-black block sm:inline">BASELINE</span>
          </motion.h1>
        </div>

        {/* Subheadline description */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          className="mb-10 max-w-xl mx-auto"
        >
          <p className="font-body text-sm md:text-base text-silver-dim/70 leading-relaxed">
            World-class equipment. Scientific methodology. <br className="hidden sm:block" />
            An upscale training destination for those who demand excellence.
          </p>
        </motion.div>

        {/* CTA Buttons - Clean layout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary w-full sm:w-auto text-[9px] py-3.5 px-8"
          >
            <span>Join the Elite</span>
            <ChevronRight size={12} />
          </button>
          
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary w-full sm:w-auto text-[9px] py-3.5 px-8"
          >
            Schedule Assessment
          </button>
        </motion.div>

        {/* Hero Stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
          className="flex flex-row items-center justify-center gap-0 divide-x divide-white/5 max-w-lg mx-auto"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex-1 py-1 text-center">
              <div className="font-display text-2xl md:text-3xl font-extrabold text-silver">
                {stat.value}
              </div>
              <div className="font-wide text-[7px] tracking-[0.2em] text-silver-dim/40 uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6 }}
      >
        <span className="font-wide text-[7px] tracking-[0.3em] text-silver-dim/30 uppercase">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={11} className="text-gold/50" />
        </motion.div>
      </motion.button>
    </section>
  );
}
