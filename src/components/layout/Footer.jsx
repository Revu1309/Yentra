import React from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../../assets/logo.svg';
import { companyInfo } from '../../data/company.js';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Web Development', path: '/services#web-development' },
    { name: 'Web Applications', path: '/services#web-applications' },
    { name: 'Custom Software', path: '/services#custom-software' },
    { name: 'SEO Optimization', path: '/services#seo-optimization' },
    { name: 'UI/UX Design', path: '/services#ui-ux-design' },
    { name: 'AI Integration', path: '/services#ai-integration' },
    { name: 'E-commerce', path: '/services#e-commerce' },
    { name: 'Website Maintenance', path: '/services#website-maintenance' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Yentra', path: '/about' },
    { name: 'All Services', path: '/services' },
    { name: 'Featured Work', path: '/portfolio' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const companyLinks = [
    { name: 'Our Mission & Vision', path: '/about#mission' },
    { name: 'Technology Stack', path: '/about#tech-stack' },
    { name: 'Case Studies', path: '/portfolio#case-studies' },
    { name: 'Why Choose Us', path: '/#why-choose-us' },
    { name: 'How We Work', path: '/#how-we-work' },
  ];

  return (
    <footer className="relative bg-background/90 border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Subtle Glow Overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-background pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand / Tagline */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block">
              <img
                src={logoSvg}
                alt="Yentra Logo"
                width={144}
                height={36}
                style={{ height: '36px', width: 'auto', maxHeight: '36px' }}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-foreground/70 text-sm leading-relaxed max-w-sm">
              Yentra builds modern websites, web applications, custom software, SEO strategies, and AI-powered digital solutions tailored to visionary enterprises.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={companyInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-none bg-transparent hover:bg-neon border border-white/20 hover:border-neon flex items-center justify-center text-foreground/80 hover:text-black transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.67a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6z"/>
                </svg>
              </a>
              <a
                href={companyInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-none bg-transparent hover:bg-neon border border-white/20 hover:border-neon flex items-center justify-center text-foreground/80 hover:text-black transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={companyInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-none bg-transparent hover:bg-neon border border-white/20 hover:border-neon flex items-center justify-center text-foreground/80 hover:text-black transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/>
                </svg>
              </a>
              <a
                href={companyInfo.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-none bg-transparent hover:bg-neon border border-white/20 hover:border-neon flex items-center justify-center text-foreground/80 hover:text-black transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-neon">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="font-mono text-xs uppercase tracking-widest text-foreground/70 hover:text-neon transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-neon">
              SERVICES
            </h3>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="font-mono text-xs uppercase tracking-widest text-foreground/70 hover:text-neon transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-neon">
              COMPANY
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="font-mono text-xs uppercase tracking-widest text-foreground/70 hover:text-neon transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider & Bottom Row */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-foreground/60">
          <p>© {currentYear} Yentra Digital Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-neon transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-neon transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
