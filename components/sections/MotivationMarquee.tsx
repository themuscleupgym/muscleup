'use client';

const marqueeItems1 = [
  'ELEVATE YOUR BASELINE',
  'DISCIPLINE IS FREEDOM',
  'REDEFINE YOUR LIMITS',
  'FORGE CHAMPIONS',
  'PREDICTABLE OUTCOMES',
  'NO COMPROMISE',
];

const marqueeItems2 = [
  'COMMIT TO EXCELLENCE',
  'CHISEL YOUR FRAME',
  'SCIENTIFIC BIOMECHANICS',
  'ELITE FITNESS SANCTUARY',
  'UNCOMPROMISING RESILIENCE',
  'THE ULTIMATE VERSION',
];

export function MotivationMarquee() {
  return (
    <section className="py-16 relative overflow-hidden bg-obsidian border-b border-white/5 select-none">
      
      {/* Decorative top/bottom boundary lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      {/* Ribbon 1: Moving Left (Standard) */}
      <div className="flex overflow-hidden w-full mb-8">
        <div className="marquee-track flex gap-8 whitespace-nowrap">
          {/* First loop */}
          {marqueeItems1.map((item, i) => (
            <div key={`m1-${i}`} className="flex items-center gap-8">
              <span className="font-wide text-5xl md:text-7xl font-extrabold tracking-wider text-stroke text-white/5 hover:text-gold-gradient transition-all duration-500">
                {item}
              </span>
              <span className="font-wide text-5xl md:text-7xl font-light text-gold/20">
                ·
              </span>
            </div>
          ))}
          {/* Second loop for seamless wrap */}
          {marqueeItems1.map((item, i) => (
            <div key={`m1-dup-${i}`} className="flex items-center gap-8">
              <span className="font-wide text-5xl md:text-7xl font-extrabold tracking-wider text-stroke text-white/5 hover:text-gold-gradient transition-all duration-500">
                {item}
              </span>
              <span className="font-wide text-5xl md:text-7xl font-light text-gold/20">
                ·
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Ribbon 2: Moving Right (Reverse) */}
      <div className="flex overflow-hidden w-full">
        <div className="marquee-track flex gap-8 whitespace-nowrap" style={{ animationDirection: 'reverse' }}>
          {/* First loop */}
          {marqueeItems2.map((item, i) => (
            <div key={`m2-${i}`} className="flex items-center gap-8">
              <span className="font-wide text-5xl md:text-7xl font-extrabold tracking-wider text-silver/5 hover:text-gold-gradient transition-all duration-500">
                {item}
              </span>
              <span className="font-wide text-5xl md:text-7xl font-light text-gold/20">
                ·
              </span>
            </div>
          ))}
          {/* Second loop for seamless wrap */}
          {marqueeItems2.map((item, i) => (
            <div key={`m2-dup-${i}`} className="flex items-center gap-8">
              <span className="font-wide text-5xl md:text-7xl font-extrabold tracking-wider text-silver/5 hover:text-gold-gradient transition-all duration-500">
                {item}
              </span>
              <span className="font-wide text-5xl md:text-7xl font-light text-gold/20">
                ·
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
