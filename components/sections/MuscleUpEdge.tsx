'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const edges = [
  {
    num: '01',
    title: 'Posture Correction',
    label: 'KINETIC REALIGNMENT',
    desc: 'Desk-bound working habits lead to muscular imbalances, spinal decompression, and restricted joint mechanics. Our physical program isolates weak posture muscles, strengthens core stabilizing chains, and optimizes joint pathways to restore your tall, powerful structural alignment.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
  },
  {
    num: '02',
    title: 'Cardiovascular Supremacy',
    label: 'METABOLIC THRESHOLD',
    desc: 'Build an engine built for endurance. We program precise high-intensity intervals and low-intensity steady-state cardiovascular work that expands heart stroke volume, improves vascular oxygen transport, and optimizes mitochondrial cellular energy production.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
  },
  {
    num: '03',
    title: 'Mental Endurance',
    label: 'COGNITIVE FORTITUDE',
    desc: 'Physical change is chiseled through cerebral resilience. Training at high capacity triggers nervous system adaptation that directly builds discipline, heightens stress tolerance, and refines cognitive focus, allowing you to execute with peak clarity in high-pressure lives.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80',
  },
  {
    num: '04',
    title: 'Peak Physical Conditioning',
    label: 'BIOMETRIC EXCELLENCE',
    desc: 'Unlocking your ultimate visual frame and movement capability. Combining resistance load, science-backed volume distribution, and custom metabolic audits to lower body adipose index and build high-density, chiseled skeletal muscle tissue.',
    image: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=800&q=80',
  },
];

function EdgeItem({ item, index }: { item: (typeof edges)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center py-16 border-b border-white/5 last:border-0 ${
        !isEven ? 'lg:grid-flow-row-dense' : ''
      }`}
    >
      {/* Image Panel */}
      <motion.div
        className={`lg:col-span-6 relative h-[300px] md:h-[400px] overflow-hidden border border-white/5 ${
          !isEven ? 'lg:col-start-7' : ''
        }`}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-1000 hover:scale-103 filter grayscale contrast-110"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
        <div className="absolute top-6 left-6 font-wide text-[10px] tracking-widest text-gold bg-obsidian-200 border border-white/5 px-3 py-1 font-bold">
          {item.num}
        </div>
      </motion.div>

      {/* Text Panel */}
      <motion.div
        className={`lg:col-span-6 text-left ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
      >
        <span className="font-accent text-[9px] tracking-[0.25em] text-gold uppercase block mb-3">
          {item.label}
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-extrabold text-silver uppercase tracking-wide mb-6">
          {item.title}
        </h3>
        <div className="w-10 h-px bg-gold/30 mb-6" />
        <p className="font-body text-xs md:text-sm text-silver-dim/60 leading-relaxed max-w-xl">
          {item.desc}
        </p>
      </motion.div>
    </div>
  );
}

export function MuscleUpEdge() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      id="muscleup-edge"
      className="section-padding relative overflow-hidden bg-obsidian border-b border-white/5"
    >
      {/* Accent Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gold/2 rounded-full blur-[120px]" />
      </div>

      <div className="container-luxury relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="label-tag mb-4 inline-block">THE MUSCLEUP EDGE</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-silver tracking-tight uppercase leading-tight">
            How We Elevate <span className="text-gold-gradient font-black">Your Base</span>
          </h2>
          <p className="font-body text-xs md:text-sm text-silver-dim/55 mt-4 leading-relaxed max-w-md mx-auto">
            Not just sweat; structural change. We target concrete physical pillars that improve health and optimize focus.
          </p>
        </motion.div>

        {/* Staggered List */}
        <div className="mt-8">
          {edges.map((item, index) => (
            <EdgeItem key={item.num} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
