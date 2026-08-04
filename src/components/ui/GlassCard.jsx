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
    purple: 'hover:border-purple-500/40 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.2)] hover:-translate-y-1',
    blue: 'hover:border-blue-500/40 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.2)] hover:-translate-y-1',
    none: ''
  };

  const baseStyles = `
    relative overflow-hidden rounded-3xl
    bg-gradient-to-b from-white/[0.07] to-white/[0.02]
    border border-white/10
    backdrop-blur-xl
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
      {/* Subtle top inner light highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      {children}
    </div>
  );
}
