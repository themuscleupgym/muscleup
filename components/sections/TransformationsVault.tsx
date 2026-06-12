'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const stories = [
  {
    name: 'Vikram Sharma',
    duration: '6 Months',
    beforeWeight: '105 kg',
    afterWeight: '78 kg',
    delta: '-27 kg Recomp',
    type: 'Weight Loss Protocol',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=80',
    quote: "MuscleUp did not just chisel my physical frame. It chiseled how I execute my daily discipline. The scientific assessment removed all guesswork.",
  },
  {
    name: 'Anjali R.',
    duration: '4 Months',
    beforeWeight: '82 kg',
    afterWeight: '62 kg',
    delta: '-20 kg Recomp',
    type: 'Body Recomposition',
    image: 'https://images.unsplash.com/photo-1618151313441-bc79b11e5090?w=900&q=80',
    quote: "Sustainable programming met professional accountability. The outcomes were predictable. I chiseled muscle mass while maintaining joint longevity.",
  },
  {
    name: 'Rohit K.',
    duration: '8 Months',
    beforeWeight: '70 kg',
    afterWeight: '85 kg',
    delta: '+15 kg Density',
    type: 'Hypertrophy Track',
    image: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=900&q=80',
    quote: "From baseline structural strength to advanced load volume. Under coach guidance, I chiseled structural mass that I never thought possible.",
  },
];

export function TransformationsVault() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const prev = () => setCurrent((c) => (c - 1 + stories.length) % stories.length);
  const next = () => setCurrent((c) => (c + 1) % stories.length);

  const story = stories[current];

  return (
    <section
      ref={sectionRef}
      id="transformations"
      className="section-padding relative overflow-hidden bg-obsidian border-b border-white/5"
    >
      {/* Abstract luxury ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gold/2 rounded-full blur-[100px]" />
      </div>

      <div className="container-luxury relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="label-tag mb-4 inline-block">THE TRANSFORMATION VAULT</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-silver tracking-tight uppercase leading-tight">
            Chiseled <span className="text-gold-gradient font-black">Physiques</span>
          </h2>
          <p className="font-body text-xs md:text-sm text-silver-dim/55 mt-4 leading-relaxed max-w-md mx-auto">
            Not your average before/after photos. High-fashion member catalog showcasing verified biometric results. Hover over images to view transitions.
          </p>
        </motion.div>

        {/* Editorial Layout Showcase */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            
            {/* Left Panel: High Fashion Grayscale Image (Color on hover) */}
            <motion.div
              key={`img-${current}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="md:col-span-6 relative h-[400px] md:h-[520px] border border-white/5 group overflow-hidden cursor-pointer rounded-none"
            >
              <Image
                src={story.image}
                alt={story.name}
                fill
                className="object-cover object-center filter grayscale group-hover:grayscale-0 contrast-105 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-all duration-500" />
              
              {/* Floating biometric badge */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center bg-obsidian-200/90 backdrop-blur-md border border-white/5 p-4 rounded-none">
                <div>
                  <span className="font-accent text-[8px] tracking-[0.2em] text-silver-dim/40 block uppercase">
                    BIOMETRIC SHIFT
                  </span>
                  <span className="font-display text-lg font-bold text-gold-gradient tracking-tight">
                    {story.delta}
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-accent text-[8px] tracking-[0.2em] text-silver-dim/40 block uppercase">
                    TIMELINE
                  </span>
                  <span className="font-body text-xs text-silver font-semibold uppercase">
                    {story.duration}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Panel: Testimonial details */}
            <div className="md:col-span-6 text-left flex flex-col justify-center">
              <motion.div
                key={`text-${current}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="font-accent text-[10px] tracking-widest text-gold border border-gold/15 px-3 py-1 uppercase">
                    {story.type}
                  </span>
                </div>

                <h3 className="font-display text-3xl font-black text-silver uppercase tracking-wide">
                  {story.name}
                </h3>

                <div className="w-12 h-[1px] bg-gold/30" />

                <blockquote className="font-display italic text-base md:text-lg text-silver-dim/70 leading-relaxed border-l-2 border-gold pl-6 py-1">
                  "{story.quote}"
                </blockquote>

                {/* Original weight records */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6 mt-6">
                  <div>
                    <span className="font-accent text-[8px] tracking-widest text-silver-dim/30 uppercase block mb-1">
                      BASELINE WEIGHT
                    </span>
                    <span className="font-body text-xs text-silver-dim/60 line-through">
                      {story.beforeWeight}
                    </span>
                  </div>
                  <div>
                    <span className="font-accent text-[8px] tracking-widest text-silver-dim/30 uppercase block mb-1">
                      CURRENT WEIGHT
                    </span>
                    <span className="font-body text-xs text-gold font-bold">
                      {story.afterWeight}
                    </span>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-primary text-[8px] py-3.5 px-8"
                  >
                    Forge Your Path
                  </button>
                </div>
              </motion.div>

              {/* Slide Navigation */}
              <div className="flex gap-4 items-center mt-12 border-t border-white/5 pt-6">
                <button
                  onClick={prev}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold text-silver-dim/50 transition-all"
                  aria-label="Previous story"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="font-accent text-xs text-silver-dim/30">
                  {current + 1} / {stories.length}
                </span>
                <button
                  onClick={next}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold text-silver-dim/50 transition-all"
                  aria-label="Next story"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
