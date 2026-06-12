'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const items = [
  {
    id: 'equipment',
    spanClass: 'md:col-span-2 md:row-span-2',
    title: 'Top-Tier Equipment',
    label: 'BIOMECHANICALLY CALIBRATED',
    desc: 'Bespoke custom strength machines chiseled for muscle isolation. Standard-setting power racks, custom dumbbell sets up to 60kg, and high-performance biomechanical load lifters that maximize safety and muscle recruitment.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
    tags: ['Custom Strength', 'Olympic Plates', '60kg Dumbbells'],
  },
  {
    id: 'coaching',
    spanClass: 'md:col-span-1 md:row-span-1',
    title: 'Personal Coaching',
    label: '1-ON-1 METRIC AUDIT',
    desc: 'Work with master coaches to audit posture, configure load distribution, and track biological progression.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    tags: ['Biometrics Audit', 'VIP Custom Plans'],
  },
  {
    id: 'zones',
    spanClass: 'md:col-span-1 md:row-span-1',
    title: 'Functional Zones',
    label: 'ATHLETIC SPEED TRACK',
    desc: 'Premium agility turf, kettlebell setups, plyo platforms, and battle ropes built for athletic power.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80',
    tags: ['Agility Turf', 'TRX Systems'],
  },
  {
    id: 'recovery',
    spanClass: 'md:col-span-3 md:row-span-1',
    title: 'Recovery Facilities',
    label: 'KINETIC REBALANCE LOUNGE',
    desc: 'Premium recovery suite for cellular regeneration. Cryotherapy chambers, high-intensity infrared saunas, hyperbaric chambers, and physical therapy mobility rollers to accelerate muscle synthesis and joint rehabilitation.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=80',
    tags: ['Cryotherapy', 'Infrared Sauna', 'VIP Massage Suite'],
  },
];

export function AmenitiesBento() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="amenities"
      className="section-padding relative overflow-hidden bg-obsidian-50 border-b border-white/5"
    >
      {/* Background Grid Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="container-luxury relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="label-tag mb-4 inline-block">WORLD-CLASS AMENITIES</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-silver tracking-tight uppercase leading-tight">
            The MuscleUp <span className="text-gold-gradient font-black">Sanctuary</span>
          </h2>
          <p className="font-body text-xs md:text-sm text-silver-dim/55 mt-4 leading-relaxed max-w-md mx-auto">
            Experience our meticulously designed bento box of high-performance facilities, optimized for elite results.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px] md:auto-rows-[240px]">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
              className={`group relative overflow-hidden border border-white/5 bg-[#0a0a0c] flex flex-col justify-end p-6 md:p-8 cursor-default ${item.spanClass}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-103 brightness-75 filter grayscale group-hover:grayscale-0 group-hover:brightness-90 transition-all"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-obsidian/50 via-transparent to-transparent" />
              </div>

              {/* Text Content */}
              <div className="relative z-10 text-left">
                <span className="font-accent text-[8px] tracking-[0.25em] text-gold uppercase block mb-2">
                  {item.label}
                </span>
                
                <h3 className="font-display text-lg md:text-xl font-bold text-silver uppercase tracking-wide mb-2">
                  {item.title}
                </h3>
                
                <p className="font-body text-[11px] text-silver-dim/50 leading-relaxed max-w-lg mb-4 hidden md:block group-hover:text-silver-dim/80 transition-colors">
                  {item.desc}
                </p>

                {/* Floating Tags */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-accent text-[7px] tracking-[0.1em] text-silver-dim/40 border border-white/5 bg-white/2 px-2 py-0.5 uppercase block rounded-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bento Box Border Accent */}
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
