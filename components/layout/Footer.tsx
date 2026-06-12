'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Heart, ArrowUp, Instagram, Phone, MessageSquare } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-obsidian border-t border-white/5 overflow-hidden">
      {/* Background ambient shade */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-200/20 to-obsidian pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Main Footer Column Section */}
      <div className="container-luxury py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Brand & Description */}
          <div className="lg:col-span-5 text-left">
            <div className="flex flex-col mb-6">
              <span className="font-display text-3xl font-black tracking-[0.1em] text-gold-gradient leading-none">
                MUSCLEUP
              </span>
              <span className="font-wide text-[7px] tracking-[0.3em] text-silver-dim/40 uppercase mt-2 block">
                ELITE FITNESS SANCTUARY
              </span>
            </div>

            <p className="font-body text-xs text-silver-dim/50 leading-relaxed mb-6 max-w-sm">
              Jaipur's elite physical destination. Where discipline converges with science and high-standard trainees construct their ultimate physiques.
            </p>

            {/* Direct Contact Icons */}
            <div className="flex items-center gap-3">
              {/* Call Icon */}
              <a
                href="tel:+918955694983"
                className="w-10 h-10 border border-white/5 flex items-center justify-center text-silver-dim/60 hover:text-gold hover:border-gold/30 transition-all duration-300"
                title="Call Us Directly"
                aria-label="Direct Phone Line"
              >
                <Phone size={14} />
              </a>
              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/918955694983"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/5 flex items-center justify-center text-silver-dim/60 hover:text-gold hover:border-gold/30 transition-all duration-300"
                title="WhatsApp Concierge"
                aria-label="Direct WhatsApp Message"
              >
                <MessageSquare size={14} />
              </a>
              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/muscle.up.gym.official?igsh=MXM4YjFpemM5dDc5cw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/5 flex items-center justify-center text-silver-dim/60 hover:text-gold hover:border-gold/30 transition-all duration-300"
                title="Follow Us on Instagram"
                aria-label="Instagram Link"
              >
                <Instagram size={14} />
              </a>
            </div>
          </div>

          {/* Middle Column: Physical Location Details */}
          <div className="lg:col-span-4 text-left">
            <h4 className="font-wide text-[8px] tracking-[0.2em] text-gold uppercase mb-5">
              THE SANCTUARY
            </h4>
            <div className="flex items-start gap-3 mb-6">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              <div>
                <address className="font-body text-xs text-silver-dim/60 not-italic leading-relaxed">
                  Road No.1, Murlipura,<br />
                  Jaipur, Rajasthan, 302039
                </address>
                <div className="mt-4">
                  <a
                    href="https://maps.app.goo.gl/yfKRmGSgC7ma39nD6?g_st=ic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary py-2.5 px-5 text-[8px] tracking-widest uppercase inline-flex items-center gap-1.5"
                  >
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mail dispatcher */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-wide text-[8px] tracking-[0.2em] text-gold uppercase mb-5">
              INQUIRIES
            </h4>
            <div className="flex items-start gap-3">
              <Mail size={16} className="text-gold mt-0.5 shrink-0" />
              <div>
                <p className="font-body text-xs text-silver-dim/50 leading-relaxed mb-3">
                  Have questions about VIP memberships?
                </p>
                <a
                  href="mailto:musclesupgymoffical@gmail.com"
                  className="font-wide text-[8px] tracking-wider text-gold hover:text-gold-light transition-colors duration-300 pb-0.5 border-b border-gold/20 uppercase"
                >
                  Drop us a line
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-white/5 py-6 relative z-10">
        <div className="container-luxury flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[10px] text-silver-dim/30 tracking-wider">
            © 2026 MuscleUp Gym. All rights reserved. Murlipura, Jaipur, Rajasthan 302039.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-body text-[10px] text-silver-dim/30 flex items-center gap-1">
              Made with <Heart size={9} className="text-gold" fill="currentColor" /> in Jaipur
            </span>
            
            <button
              onClick={scrollToTop}
              className="w-8 h-8 border border-white/5 flex items-center justify-center hover:border-gold/30 hover:text-gold text-silver-dim/30 transition-all duration-300 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp size={11} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
