import React from 'react';
import ScrollFloat from './ScrollFloat';

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center', // 'center' | 'left'
  className = ''
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const badgeAlign = align === 'center' ? 'justify-center' : 'justify-start';
  const flexAlign = align === 'center' ? 'justify-center' : 'justify-start';

  const fullTitle = `${title} ${highlight || ''}`.trim();

  return (
    <div className={`max-w-3xl mb-16 ${alignClass} ${className}`}>
      {badge && (
        <div className={`flex ${badgeAlign} mb-6`}>
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-neon">
            ↳ {badge}
          </span>
        </div>
      )}
      
      <div className={`mb-6 w-full relative flex ${flexAlign}`}>
        <ScrollFloat
          animationDuration={1.2}
          ease='back.inOut(2)'
          scrollStart='top bottom'
          scrollEnd='center center'
          stagger={0.02}
          textClassName="text-[clamp(3rem,8vw,8rem)] font-display font-black tracking-tighter uppercase text-white leading-[0.85]"
          containerClassName="overflow-visible"
        >
          {fullTitle}
        </ScrollFloat>
      </div>

      {subtitle && (
        <ScrollFloat
          as="p"
          animationDuration={1}
          ease='power2.out'
          scrollStart='top bottom-=10%'
          scrollEnd='center center'
          stagger={0.005}
          textClassName="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed font-normal max-w-2xl mx-auto"
          containerClassName="mt-4 overflow-visible"
        >
          {subtitle}
        </ScrollFloat>
      )}
    </div>
  );
}
