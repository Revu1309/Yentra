import React from 'react';
import GlassCard from '../ui/GlassCard.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';

import { testimonials } from '../../data/testimonials.js';

export default function TestimonialsSection() {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="Client Testimonials"
        title="Loved by"
        highlight="Founders"
        subtitle="Don't just take our word for it. Here is what engineering leaders and CEOs say about partnering with Yentra."
      />

      <div className={`grid grid-cols-1 ${testimonials.length === 1 ? 'max-w-xl mx-auto' : testimonials.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'} gap-8`}>
        {testimonials.map((testi, index) => (
          <GlassCard key={index} className="flex flex-col justify-between hover:border-neon transition-colors duration-500" glowColor="none">
            <div>
              {/* Stars */}
              <div className="flex items-center gap-1 text-neon mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="font-mono text-xs uppercase text-foreground/85 leading-relaxed mb-8 tracking-widest">
                “{testi.quote}”
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
              {testi.avatar ? (
                <img
                  src={testi.avatar}
                  alt={testi.author}
                  className="w-12 h-12 rounded-none object-cover border-2 border-neon grayscale"
                />
              ) : (
                <div className="w-12 h-12 rounded-none bg-neon text-black font-display font-black flex items-center justify-center text-lg">
                  {testi.author ? testi.author.charAt(0).toUpperCase() : 'Y'}
                </div>
              )}
              <div>
                <h4 className="font-display font-black text-white text-sm sm:text-base uppercase tracking-tighter">
                  {testi.author}
                </h4>
                <p className="font-mono text-xs text-foreground/60 uppercase">
                  {testi.role} • <span className="text-neon font-bold">{testi.company}</span>
                </p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
