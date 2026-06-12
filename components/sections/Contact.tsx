'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, MessageSquare, Navigation, Send, Check } from 'lucide-react';

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding relative bg-obsidian border-b border-white/5">
      {/* Background bleed details */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-gold/2 rounded-full blur-[120px]" />
      </div>

      <div className="container-luxury relative z-10">
        
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="label-tag mb-4 inline-block">VIP INVITATION</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-silver tracking-tight uppercase">
            Connect with <span className="text-gold-gradient font-black">Concierge</span>
          </h2>
          <p className="font-body text-xs md:text-sm text-silver-dim/55 mt-4 leading-relaxed max-w-md mx-auto">
            Ready to elevate your baseline? Reach out to schedule a private sanctuary tour and biometrics diagnostic.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Panel: Location & Direct Contact details */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quick action grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp Action */}
              <a
                href="https://wa.me/918955694983"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 border border-white/5 bg-[#0a0a0c] hover:border-gold/30 hover:bg-gold/3 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <MessageSquare size={16} className="text-gold" />
                </div>
                <div>
                  <div className="font-display text-xs font-bold uppercase tracking-wider text-silver group-hover:text-gold transition-colors">
                    WhatsApp Concierge
                  </div>
                  <div className="font-body text-[10px] text-silver-dim/40 mt-0.5">Chat Instantly</div>
                </div>
              </a>

              {/* Phone Action */}
              <a
                href="tel:+918955694983"
                className="flex items-center gap-4 p-5 border border-white/5 bg-[#0a0a0c] hover:border-gold/30 hover:bg-gold/3 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-gold" />
                </div>
                <div>
                  <div className="font-display text-xs font-bold uppercase tracking-wider text-silver group-hover:text-gold transition-colors">
                    Direct Line
                  </div>
                  <div className="font-body text-[10px] text-silver-dim/40 mt-0.5">+91 89556 94983</div>
                </div>
              </a>

              {/* Email Action */}
              <a
                href="mailto:musclesupgymoffical@gmail.com"
                className="flex items-center gap-4 p-5 border border-white/5 bg-[#0a0a0c] hover:border-gold/30 hover:bg-gold/3 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-gold" />
                </div>
                <div>
                  <div className="font-display text-xs font-bold uppercase tracking-wider text-silver group-hover:text-gold transition-colors">
                    Email Dispatch
                  </div>
                  <div className="font-body text-[10px] text-silver-dim/40 mt-0.5">musclesupgymoffical@gmail.com</div>
                </div>
              </a>

              {/* Instagram Action */}
              <a
                href="https://www.instagram.com/muscle.up.gym.official?igsh=MXM4YjFpemM5dDc5cw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 border border-white/5 bg-[#0a0a0c] hover:border-gold/30 hover:bg-gold/3 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <Instagram size={16} className="text-gold" />
                </div>
                <div>
                  <div className="font-display text-xs font-bold uppercase tracking-wider text-silver group-hover:text-gold transition-colors">
                    Instagram Feed
                  </div>
                  <div className="font-body text-[10px] text-silver-dim/40 mt-0.5">@muscle.up.gym.official</div>
                </div>
              </a>
            </div>

            {/* Address Box */}
            <div className="glass-gold border border-gold/15 p-6 flex items-start gap-4">
              <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
              <div>
                <h3 className="font-display text-md font-bold text-silver uppercase tracking-wide mb-1">MuscleUp Sanctuary</h3>
                <address className="font-body text-xs text-silver-dim/60 not-italic leading-relaxed">
                  Road No.1, Murlipura,<br />
                  Jaipur, Rajasthan, 302039
                </address>
                <div className="mt-4">
                  <a
                    href="https://maps.app.goo.gl/yfKRmGSgC7ma39nD6?g_st=ic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary py-2.5 px-6 text-[8px] tracking-widest uppercase inline-flex items-center gap-1.5"
                  >
                    <Navigation size={10} />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Gray Map Embed */}
            <div className="border border-white/5 h-64 overflow-hidden relative shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.7!2d75.7348!3d26.9488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU2JzU1LjciTiA3NcKwNDQnMDUuMyJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(95%) contrast(85%) opacity(80%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              />
            </div>

          </div>

          {/* Right Panel: Clean Form */}
          <div className="lg:col-span-5">
            <div className="bg-obsidian-200 border border-white/5 p-8 shadow-xl relative">
              <h3 className="font-display text-lg font-bold text-silver uppercase tracking-wider mb-1">
                Book Consultation
              </h3>
              <p className="font-body text-[10px] text-silver-dim/40 mb-8 uppercase tracking-wide">
                Schedule your private assessment
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-wide text-[8px] tracking-[0.2em] text-silver-dim/40 uppercase block mb-1.5">
                      Full Name *
                    </label>
                    <input type="text" className="calc-input" placeholder="Enter your full name" required />
                  </div>
                  
                  <div>
                    <label className="font-wide text-[8px] tracking-[0.2em] text-silver-dim/40 uppercase block mb-1.5">
                      Phone Number *
                    </label>
                    <input type="tel" className="calc-input" placeholder="Enter phone number" required />
                  </div>
                  
                  <div>
                    <label className="font-wide text-[8px] tracking-[0.2em] text-silver-dim/40 uppercase block mb-1.5">
                      Email Address
                    </label>
                    <input type="email" className="calc-input" placeholder="you@domain.com" />
                  </div>
                  
                  <div>
                    <label className="font-wide text-[8px] tracking-[0.2em] text-silver-dim/40 uppercase block mb-1.5">
                      Select Fitness Goal
                    </label>
                    <select className="calc-input bg-obsidian-200">
                      <option className="bg-obsidian-200">Recomposition & Tone</option>
                      <option className="bg-obsidian-200">Hypertrophy & Strength</option>
                      <option className="bg-obsidian-200">Cardiovascular & Endurance</option>
                    </select>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="btn-primary w-full text-[9px] py-4 tracking-widest uppercase flex items-center justify-center gap-2"
                    >
                      <span>Book Free Assessment</span>
                      <Send size={11} />
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center flex flex-col items-center justify-center"
                >
                  <div className="w-12 h-12 rounded-full border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                    <Check size={20} />
                  </div>
                  <h4 className="font-display text-md font-bold text-silver uppercase tracking-wider mb-2">
                    Request Received
                  </h4>
                  <p className="font-body text-xs text-silver-dim/50 max-w-xs leading-relaxed">
                    Our VIP onboarding manager will contact you within 24 hours to schedule your private tour.
                  </p>
                </motion.div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
