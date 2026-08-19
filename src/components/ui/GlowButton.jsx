import React from 'react';
import { Link } from 'react-router-dom';

export default function GlowButton({ 
  children, 
  to, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  icon = null,
  type = 'button'
}) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-mono uppercase tracking-widest transition-all duration-300 relative group overflow-hidden whitespace-nowrap border";
  
  const sizeStyles = {
    sm: "px-5 py-2 text-xs",
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-base"
  };

  const variants = {
    primary: "bg-neon text-black border-neon hover:bg-transparent hover:text-neon",
    secondary: "bg-transparent text-white border-white/20 hover:border-coral hover:text-coral",
    outline: "bg-transparent text-white border-white/20 hover:border-neon hover:text-neon"
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        <span>{children}</span>
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedStyles}>
        <span>{children}</span>
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      <span>{children}</span>
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
    </button>
  );
}
