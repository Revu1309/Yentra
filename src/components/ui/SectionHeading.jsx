import React from 'react';

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

  return (
    <div className={`max-w-3xl mb-16 ${alignClass} ${className}`}>
      {badge && (
        <div className={`flex ${badgeAlign} mb-4`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-foreground leading-tight mb-4">
        {title}{' '}
        {highlight && (
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-foreground/70 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
