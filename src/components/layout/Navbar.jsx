import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import GlowButton from '../ui/GlowButton.jsx';
import logoSvg from '../../assets/logo.svg';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const getNavLinkClass = ({ isActive }) =>
    `text-sm font-mono uppercase font-bold tracking-widest transition-colors duration-200 ${
      isActive
        ? 'text-neon'
        : 'text-foreground/80 hover:text-foreground'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between" style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logoSvg}
            alt="Yentra Logo"
            width={128}
            height={32}
            style={{ height: '32px', width: 'auto', maxHeight: '32px' }}
            className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8" style={{display:'flex', alignItems:'center', gap:'2rem'}}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={getNavLinkClass}
              end={link.path === '/'}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4" style={{display:'flex', alignItems:'center', gap:'1rem'}}>
          <GlowButton to="/contact" variant="primary" size="sm">
            Start Your Project
          </GlowButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground/80 hover:text-foreground focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" width="24" height="24" style={{width:24,height:24}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" width="24" height="24" style={{width:24,height:24}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-fade-up">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-none font-mono uppercase font-bold tracking-widest text-sm transition-colors ${
                    isActive
                      ? 'bg-neon text-black'
                      : 'text-foreground/80 hover:bg-white/5 hover:text-foreground'
                  }`
                }
                end={link.path === '/'}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-2">
              <GlowButton to="/contact" variant="primary" size="md" className="w-full">
                Start Your Project
              </GlowButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
