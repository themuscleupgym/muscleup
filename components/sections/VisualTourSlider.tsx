'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
    title: 'The Elite Floor',
    subtitle: '10,000 sq ft chiseled layout with titanium equipment lines.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
    title: 'Power Station',
    subtitle: 'Bespoke custom machines chiseled for myofibrillar recruitment.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80',
    title: 'Functional Turf',
    subtitle: 'Sleek speed track optimized for conditioning acceleration.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=80',
    title: 'Recovery Vault',
    subtitle: 'Cryotherapy and diagnostic therapy cells for adaptation rest.',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80',
    title: 'Mobility Studio',
    subtitle: 'Warm ambient environment for flexibility and postural reset.',
  },
];

export function VisualTourSlider() {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current && innerRef.current) {
      setWidth(innerRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section
      id="tour"
      className="section-padding relative overflow-hidden bg-obsidian-50 border-b border-white/5"
    >
      {/* Top ambient highlight line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      <div className="container-luxury text-center lg:text-left mb-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div>
            <span className="label-tag mb-4 inline-block">IMMERSIVE VISUAL TOUR</span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-silver tracking-tight uppercase leading-tight">
              The Gym <span className="text-gold-gradient font-black">Environment</span>
            </h2>
          </div>
          <div>
            <span className="font-accent text-[9px] tracking-[0.2em] text-silver-dim/35 uppercase block">
              CLICK & DRAG TO DISCOVER
            </span>
          </div>
        </div>
      </div>

      {/* Draggable Carousel Container */}
      <div 
        ref={carouselRef}
        className="w-full overflow-hidden px-4 md:px-8 cursor-grab active:cursor-grabbing"
      >
        <motion.div
          ref={innerRef}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-6 select-none"
          whileTap={{ cursor: 'grabbing' }}
          transition={{ type: 'spring', damping: 25, stiffness: 120 }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative min-w-[280px] sm:min-w-[420px] md:min-w-[540px] h-[300px] md:h-[420px] overflow-hidden border border-white/5 bg-[#0a0a0c]"
            >
              {/* Visual */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover pointer-events-none filter brightness-90 contrast-102"
                sizes="(max-width: 768px) 300px, 600px"
              />
              
              {/* Soft gradient bottom layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-85" />
              
              {/* Details overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="font-accent text-[8px] tracking-[0.3em] text-gold uppercase block mb-1">
                  ZONE 0{slide.id}
                </span>
                <h3 className="font-display text-lg md:text-xl font-bold text-silver uppercase tracking-wide">
                  {slide.title}
                </h3>
                <p className="font-body text-[11px] text-silver-dim/60 leading-relaxed mt-1.5 max-w-sm">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Progress Bar */}
      <div className="container-luxury mt-8 flex justify-center">
        <div className="w-24 h-[1px] bg-white/10 relative">
          {/* We can animate this bar based on drag state, but keeping it as a sleek minimalist static decoration is also very premium */}
          <div className="absolute top-0 bottom-0 left-1/4 right-1/4 bg-gold/50" />
        </div>
      </div>
    </section>
  );
}
