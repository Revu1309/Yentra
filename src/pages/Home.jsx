import React from 'react';
import HeroSection from '../components/home/HeroSection.jsx';
import TrustedBySection from '../components/home/TrustedBySection.jsx';
import WhatWeBuildSection from '../components/home/WhatWeBuildSection.jsx';
import FeaturedProjectsSection from '../components/home/FeaturedProjectsSection.jsx';
import WhyChooseSection from '../components/home/WhyChooseSection.jsx';
import HowWeWorkSection from '../components/home/HowWeWorkSection.jsx';
import TestimonialsSection from '../components/home/TestimonialsSection.jsx';
import CTABannerSection from '../components/home/CTABannerSection.jsx';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <TrustedBySection />
      <WhatWeBuildSection />
      <FeaturedProjectsSection />
      <WhyChooseSection />
      <HowWeWorkSection />
      <TestimonialsSection />
      <CTABannerSection />
    </div>
  );
}
