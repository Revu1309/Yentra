import React, { useRef, useEffect } from 'react';
import HeroSection from '../components/home/HeroSection.jsx';
import WhatWeBuildSection from '../components/home/WhatWeBuildSection.jsx';
import FeaturedProjectsSection from '../components/home/FeaturedProjectsSection.jsx';
import WhyChooseSection from '../components/home/WhyChooseSection.jsx';
import HowWeWorkSection from '../components/home/HowWeWorkSection.jsx';
import TestimonialsSection from '../components/home/TestimonialsSection.jsx';
import CTABannerSection from '../components/home/CTABannerSection.jsx';

export default function Home() {
  const heroOverlayRef = useRef(null);
  const normalContentRef = useRef(null);
  const whatWeBuildRef = useRef(null);
  const heroSectionRef = useRef(null);

  // Scroll Animation Logic
  useEffect(() => {
    let animationFrameId;
    let lastScrollY = -1;
    let lastWindowHeight = -1;

    const animate = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Only perform expensive DOM updates if scroll or resize occurred
      if (scrollY !== lastScrollY || windowHeight !== lastWindowHeight) {
        lastScrollY = scrollY;
        lastWindowHeight = windowHeight;

        const heroProgress = Math.min(Math.max(scrollY / windowHeight, 0), 1);
        const isTransitioning = scrollY < windowHeight;
        const translateY = isTransitioning ? scrollY - windowHeight : 0;

        if (heroOverlayRef.current) {
          if (heroProgress < 1) {
            heroOverlayRef.current.style.display = 'block';
            heroOverlayRef.current.style.pointerEvents = heroProgress < 0.1 ? 'auto' : 'none';
            
            if (heroSectionRef.current) {
              heroSectionRef.current.setScrollProgress(heroProgress);
            }
          } else {
            heroOverlayRef.current.style.display = 'none';
          }
        }

        if (normalContentRef.current) {
          normalContentRef.current.style.transform = `translateY(${translateY}px)`;
        }

        if (whatWeBuildRef.current) {
          const nextProgress = Math.max(0, (heroProgress - 0.5) * 2);
          whatWeBuildRef.current.style.transform = `scale(${Math.max(0.7, 0.7 + nextProgress * 0.3)})`;
          whatWeBuildRef.current.style.opacity = nextProgress;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full bg-background overflow-x-hidden">
      
      {/* ── 100vh Spacer ────────────────────────────────────────────────────── */}
      <div style={{ height: '100vh', width: '100%' }} />

      {/* ── Hero Section Overlay ────────────────────────────────────────────── */}
      <div 
        ref={heroOverlayRef}
        className="fixed inset-0 z-40 w-full h-screen overflow-hidden pointer-events-none"
      >
        <div className="w-full h-full pointer-events-auto">
          <HeroSection ref={heroSectionRef} />
        </div>
      </div>

      {/* ── Normal Document Flow (The Rest of the Page) ─────────────────────── */}
      <div 
        ref={normalContentRef}
        className="relative z-10 w-full"
      >
        <div ref={whatWeBuildRef} style={{ transformOrigin: 'center 50vh', willChange: 'transform, opacity' }}>
          <WhatWeBuildSection />
        </div>
        <FeaturedProjectsSection />
        <WhyChooseSection />
        <HowWeWorkSection />
        <TestimonialsSection />
        <CTABannerSection />
      </div>

    </div>
  );
}
