import React from 'react';

export default function GlassCard({
  children,
  className = '',
  hoverEffect = true,
  glowColor = 'purple', // 'purple' | 'blue' | 'none'
  padding = 'p-6 sm:p-8',
  onClick = null
}) {
  const glowStyles = {
    purple: 'hover:border-neon hover:shadow-none hover:-translate-y-1',
    blue: 'hover:border-coral hover:shadow-none hover:-translate-y-1',
    none: ''
  };

  const baseStyles = `
    relative overflow-hidden
    bg-black border border-white/10
    transition-all duration-300 ease-out
    ${padding}
    ${hoverEffect ? glowStyles[glowColor] : ''}
    ${className}
  `;

  return (
    <div 
      className={baseStyles.trim()} 
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}
