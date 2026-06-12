'use client';

import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { PageLoader } from '@/components/ui/PageLoader';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { LeadPopup } from '@/components/ui/LeadPopup';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Sections
import { Hero } from '@/components/sections/Hero';
import { Philosophy } from '@/components/sections/Philosophy';
import { PerformanceScience } from '@/components/sections/PerformanceScience';
import { MuscleUpEdge } from '@/components/sections/MuscleUpEdge';
import { AmenitiesBento } from '@/components/sections/AmenitiesBento';
import { TransformationsVault } from '@/components/sections/TransformationsVault';
import { VisualTourSlider } from '@/components/sections/VisualTourSlider';
import { MotivationMarquee } from '@/components/sections/MotivationMarquee';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <SmoothScrollProvider>
      {/* Global UI */}
      <PageLoader />
      <CustomCursor />
      <ScrollProgress />
      <LeadPopup />

      {/* Layout */}
      <Navbar />

      <main className="bg-obsidian">
        {/* S1 – Cinematic Hero */}
        <Hero />

        {/* S2 – The Philosophy */}
        <Philosophy />

        {/* S3 – Body & Performance Science */}
        <PerformanceScience />

        {/* S4 – The MuscleUp Edge */}
        <MuscleUpEdge />

        {/* S5 – World-Class Amenities (Bento Grid) */}
        <AmenitiesBento />

        {/* S6 – The Transformation Vault */}
        <TransformationsVault />

        {/* S7 – Immersive Visual Tour (Photo Slider) */}
        <VisualTourSlider />

        {/* S8 – Dynamic Motivation Marquee */}
        <MotivationMarquee />

        {/* S10 – Contact Experience */}
        <Contact />
      </main>

      {/* S10 – Executive Footer */}
      <Footer />
    </SmoothScrollProvider>
  );
}
