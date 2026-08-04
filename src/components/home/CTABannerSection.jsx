import React from 'react';
import GlowButton from '../ui/GlowButton.jsx';

export default function CTABannerSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-purple-900/40 border border-purple-500/30 backdrop-blur-2xl p-10 sm:p-16 lg:p-20 text-center shadow-[0_0_50px_rgba(168,85,247,0.2)]">
        {/* Animated Background Glow Circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/40 mb-6">
            Ready to scale?
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight text-foreground leading-tight mb-6">
            Let's build something{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
              extraordinary
            </span>{' '}
            together.
          </h2>
          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed mb-10 max-w-2xl mx-auto">
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
