'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Dumbbell, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Science', href: '#performance-science' },
  { label: 'The Edge', href: '#muscleup-edge' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Transformations', href: '#transformations' },
  { label: 'Tour', href: '#tour' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled py-4' : 'py-6'}`}>
        <div className="container-luxury flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 border border-gold/20 rounded-full flex items-center justify-center group-hover:border-gold/60 transition-colors duration-500">
              <Dumbbell size={14} className="text-gold" />
            </div>
            <div className="text-left">
              <span className="font-display text-lg font-black text-gold-gradient tracking-wide block leading-none">
                MUSCLEUP
              </span>
              <span className="font-wide text-[7px] tracking-[0.3em] text-silver-dim/60 uppercase block mt-1">
                Elite Sanctuary
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="font-wide text-[9px] tracking-[0.2em] text-silver-dim/75 hover:text-gold transition-colors duration-300 uppercase relative group cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-light group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+918955694983"
              className="flex items-center gap-2 font-wide text-[9px] tracking-[0.15em] text-silver-dim/50 hover:text-gold transition-colors duration-300 uppercase"
            >
              <Phone size={11} className="text-gold/60" />
              <span>+91 89556 94983</span>
            </a>
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-primary text-[9px] py-2.5 px-6 tracking-[0.18em]"
            >
              Join Now
            </button>
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center border border-white/5 rounded-sm hover:border-gold/30 transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {menuOpen ? (
              <X size={16} className="text-gold" />
            ) : (
              <Menu size={16} className="text-silver-dim" />
            )}
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[900] bg-obsidian-50/98 backdrop-blur-2xl flex flex-col items-center justify-center"
            initial={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 95% 5%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Mobile Header */}
            <div className="absolute top-6 left-6 flex items-center gap-3">
              <Dumbbell size={16} className="text-gold" />
              <span className="font-display text-lg font-black text-gold-gradient tracking-wider">MUSCLEUP</span>
            </div>
            
            <button
              className="absolute top-5 right-6 w-10 h-10 border border-white/5 rounded-full flex items-center justify-center hover:border-gold/40"
              onClick={() => setMenuOpen(false)}
            >
              <X size={16} className="text-gold" />
            </button>

            {/* Link Stack */}
            <div className="flex flex-col items-center gap-7">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="font-display text-3xl font-light text-silver-dim hover:text-gold hover:font-bold transition-all duration-300 uppercase tracking-wide cursor-pointer"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.15 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            {/* Bottom Call to Action */}
            <motion.div
              className="absolute bottom-12 flex flex-col items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-primary py-3 px-8 text-[10px]"
              >
                Join the Elite
              </button>
              <a href="tel:+918955694983" className="font-wide text-[9px] tracking-[0.1em] text-silver-dim/40 mt-2">
                +91 89556 94983
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
