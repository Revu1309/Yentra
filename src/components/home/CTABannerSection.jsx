import React from 'react';
import GlowButton from '../ui/GlowButton.jsx';

export default function CTABannerSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12">
      <div className="relative border-y sm:border border-white/20 sm:rounded-none bg-background p-10 sm:p-16 lg:p-20 text-center hover:border-neon transition-colors duration-500">
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-neon">
              ↳ READY TO SCALE?
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tighter text-white uppercase leading-[0.85] mb-8">
            LET'S BUILD <br />
            SOMETHING <span className="text-neon">EXTRAORDINARY.</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-foreground/60 leading-relaxed mb-10 max-w-2xl mx-auto uppercase tracking-widest">
            Whether you need a full-scale enterprise web application, AI transformation, or a high-converting digital presence, our team is ready to execute.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlowButton to="/contact" variant="primary" size="lg">
              Start Your Project Now
            </GlowButton>
            <GlowButton to="/services" variant="secondary" size="lg">
              Explore Our Services
            </GlowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
