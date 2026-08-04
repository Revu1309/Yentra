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
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 relative group overflow-hidden whitespace-nowrap";
  
  const sizeStyles = {
    sm: "px-5 py-2 text-xs",
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-base"
  };

  const variants = {
    primary: "bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] text-white shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] hover:bg-right border border-purple-400/30",
    secondary: "bg-white/10 hover:bg-white/15 text-foreground backdrop-blur-md border border-white/10 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]",
    outline: "bg-transparent hover:bg-purple-500/10 text-foreground border border-purple-500/40 hover:border-purple-500 transition-colors"
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
