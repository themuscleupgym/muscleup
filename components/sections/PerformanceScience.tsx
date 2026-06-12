'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Activity, Shield, Cpu } from 'lucide-react';

const trainingStyles = [
  {
    id: 'hypertrophy',
    name: 'Hypertrophy',
    tagline: 'Sarcoplasmic & Myofibrillar Growth',
    desc: 'Focused on structural muscle enlargement. High-volume, moderate-intensity loading cycles optimized for muscle fiber recruitment, local anabolic hormone production, and protein synthesis acceleration.',
    metrics: [
      { label: 'Fiber Recruitment', value: '95%' },
      { label: 'Sarcoplasmic Vol', value: '+35%' },
      { label: 'Recovery Window', value: '48 Hrs' },
      { label: 'Hypertrophic index', value: '9.8 / 10' }
    ],
    highlightedMuscles: 'Pectorals, Deltoids, Lats, Quadriceps',
    system: 'Anaerobic Lactic System',
    icon: Activity,
  },
  {
    id: 'strength',
    name: 'Maximum Strength',
    tagline: 'Neuro-Muscular Recruitment',
    desc: 'Developing absolute force output by enhancing central nervous system adaptation. Lower repetition ranges, high-load intensity (>85% 1RM) that increases myofibrillar density and motor unit synchronization.',
    metrics: [
      { label: 'CNS Stimulation', value: 'Maximum' },
      { label: 'Myofibrillar Density', value: '98%' },
      { label: 'Peak Force Gain', value: '+45%' },
      { label: 'Synaptic Drive', value: 'High' }
    ],
    highlightedMuscles: 'Posterior Chain, Core stabilizers, Erector Spinae',
    system: 'ATP-CP Energy System',
    icon: Shield,
  },
  {
    id: 'endurance',
    name: 'Kinetic Endurance',
    tagline: 'Mitochondrial Resiliency',
    desc: 'Boosting cellular aerobic capacity and metabolic efficiency. Higher rep structures and low recovery intervals designed to elevate mitochondrial density, capillary supply, and systemic VO2 Max limits.',
    metrics: [
      { label: 'Mitochondrial Density', value: '+60%' },
      { label: 'VO2 Max Delta', value: '+25%' },
      { label: 'Lactate Threshold', value: 'Elevated' },
      { label: 'Vascular Supply', value: 'Peak' }
    ],
    highlightedMuscles: 'Cardiovascular system, Slow-twitch fibers',
    system: 'Aerobic Oxidative System',
    icon: Cpu,
  },
];

export function PerformanceScience() {
  const [activeTab, setActiveTab] = useState('hypertrophy');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const activeStyle = trainingStyles.find((s) => s.id === activeTab)!;

  return (
    <section
      ref={sectionRef}
      id="performance-science"
      className="section-padding relative overflow-hidden bg-obsidian-50 border-b border-white/5"
    >
      {/* Accent Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[140px] opacity-70" />
      </div>

      <div className="container-luxury relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center lg:text-left"
        >
          <span className="label-tag mb-4 inline-block">PERFORMANCE SCIENCE</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-silver tracking-tight uppercase leading-tight max-w-2xl">
            Optimizing Human <span className="text-gold-gradient font-black">Biomechanics</span>
          </h2>
          <p className="font-body text-xs md:text-sm text-silver-dim/55 mt-4 leading-relaxed max-w-md">
            Interactive breakdown of scientific physical protocols. Hover over each training style to inspect biological transitions.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
          
          {/* Left Panel: Tabs */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-4">
            {trainingStyles.map((style) => {
              const Icon = style.icon;
              const isActive = activeTab === style.id;
              
              return (
                <div
                  key={style.id}
                  onMouseEnter={() => setActiveTab(style.id)}
                  onClick={() => setActiveTab(style.id)}
                  className={`relative p-6 border transition-all duration-500 cursor-pointer text-left ${
                    isActive 
                      ? 'border-gold bg-gold/4 shadow-lg shadow-gold/2' 
                      : 'border-white/5 bg-[#0a0a0c] hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 flex items-center justify-center border transition-all duration-300 ${
                      isActive ? 'border-gold text-gold bg-gold/10' : 'border-white/10 text-silver-dim/60'
                    }`}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <h3 className={`font-display text-md font-bold uppercase tracking-wider transition-colors duration-300 ${
                        isActive ? 'text-gold' : 'text-silver'
                      }`}>
                        {style.name}
                      </h3>
                      <p className="font-body text-[10px] text-silver-dim/40 tracking-wide uppercase mt-0.5">
                        {style.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Right chevron indicator */}
                  <div className={`absolute right-6 top-1/2 -translate-y-1/2 transition-transform duration-300 ${
                    isActive ? 'translate-x-0 opacity-100 text-gold' : 'translate-x-2 opacity-0'
                  }`}>
                    →
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Panel: Biomechanical Blueprint display */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[460px] bg-[#0c0c0e] border border-white/5 p-8 flex flex-col justify-between overflow-hidden shadow-2xl">
              
              {/* Fine tech grid background */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              {/* Diagnostic scanning sweep line */}
              <motion.div 
                className="absolute left-0 right-0 h-px bg-gold/20 shadow-[0_0_10px_rgba(197,160,89,0.5)] z-1 pointer-events-none"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                  className="relative z-10 flex flex-col h-full justify-between gap-8"
                >
                  {/* Top diagnostics stats */}
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-white/5 pb-6">
                    <div>
                      <span className="font-accent text-[9px] tracking-[0.25em] text-gold uppercase block">
                        ANALYTICAL METRICS
                      </span>
                      <h4 className="font-display text-2xl font-bold text-silver uppercase tracking-wide mt-1">
                        {activeStyle.name} Output
                      </h4>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="font-accent text-[9px] tracking-[0.2em] text-silver-dim/30 uppercase block">
                        PRIMARY ENERGY SYSTEM
                      </span>
                      <span className="font-body text-xs text-gold/80 font-semibold uppercase mt-1 block">
                        {activeStyle.system}
                      </span>
                    </div>
                  </div>

                  {/* Middle scientific breakdown */}
                  <div>
                    <p className="font-body text-xs md:text-sm text-silver-dim/60 leading-relaxed mb-6">
                      {activeStyle.desc}
                    </p>

                    {/* Muscle focus metrics */}
                    <div className="bg-white/1 border border-white/5 p-4 flex flex-col sm:flex-row justify-between gap-4">
                      <div>
                        <span className="font-accent text-[8px] tracking-[0.2em] text-silver-dim/40 uppercase block mb-1">
                          FOCUS MUSCLE CHAIN
                        </span>
                        <span className="font-body text-xs text-silver-dim/80">
                          {activeStyle.highlightedMuscles}
                        </span>
                      </div>
                      <div>
                        <span className="font-accent text-[8px] tracking-[0.2em] text-silver-dim/40 uppercase block mb-1">
                          STATUS
                        </span>
                        <span className="font-body text-xs text-emerald-400 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          OPTIMIZED FOR RECOMP
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom metrics numbers grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/5 pt-6 mt-auto">
                    {activeStyle.metrics.map((metric) => (
                      <div key={metric.label} className="text-left">
                        <div className="font-display text-xl font-bold text-silver">
                          {metric.value}
                        </div>
                        <div className="font-accent text-[8px] tracking-wider text-silver-dim/40 uppercase mt-0.5">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
