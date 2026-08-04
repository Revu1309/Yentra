import React, { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoSrc from '../../assets/logo.png';

// ── Chevron Down Icon ──────────────────────────────────────────────────────────
function ChevronDown() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 14, height: 14, flexShrink: 0 }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// ── Liquid-Glass Logo Badge ────────────────────────────────────────────────────
function LogoBadge({ letter, name }) {
  return (
    <div className="flex items-center gap-3 flex-shrink-0">
      <div
        className="liquid-glass flex items-center justify-center rounded-lg"
        style={{ width: 24, height: 24, fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}
      >
        {letter}
      </div>
      <span className="text-base font-semibold text-foreground whitespace-nowrap">{name}</span>
    </div>
  );
}

const LOGOS = [
  { letter: 'V', name: 'Vortex' },
  { letter: 'N', name: 'Nimbus' },
  { letter: 'P', name: 'Prysma' },
  { letter: 'C', name: 'Cirrus' },
  { letter: 'K', name: 'Kynder' },
  { letter: 'H', name: 'Halcyn' },
];

// ── Hero Section ───────────────────────────────────────────────────────────────
export default function HeroSection() {
  const videoRef  = useRef(null);
  const rafRef    = useRef(null);
  const brushRafs = useRef([]);

  // Paint-brush hover gradient for each letter
  useEffect(() => {
    const letters = document.querySelectorAll('.hero-letter');
    const ids = [];

    letters.forEach((letter) => {
      let targetX = 0, targetY = 0;
      let currentX = 0, currentY = 0;
      let isHovering = false;
      let initialized = false;

      const onMove = (e) => {
        const rect = letter.getBoundingClientRect();
        targetX = e.clientX - rect.left;
        targetY = e.clientY - rect.top;
        if (!initialized) { currentX = targetX; currentY = targetY; initialized = true; }
        isHovering = true;
      };
      const onLeave = () => { isHovering = false; initialized = false; };

      letter.addEventListener('mousemove', onMove);
      letter.addEventListener('mouseleave', onLeave);

      const tick = () => {
        if (isHovering) {
          currentX += (targetX - currentX) * 0.08;
          currentY += (targetY - currentY) * 0.08;
          letter.style.setProperty('--mouse-x', `${currentX}px`);
          letter.style.setProperty('--mouse-y', `${currentY}px`);
        }
        const id = requestAnimationFrame(tick);
        ids.push(id);
      };
      const id = requestAnimationFrame(tick);
      ids.push(id);

      letter._cleanup = () => {
        letter.removeEventListener('mousemove', onMove);
        letter.removeEventListener('mouseleave', onLeave);
      };
    });

    brushRafs.current = ids;
    return () => {
      letters.forEach((l) => l._cleanup && l._cleanup());
      ids.forEach((id) => cancelAnimationFrame(id));
    };
  }, []);

  // Custom JS-controlled fade loop
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const FADE_DURATION = 0.5; // seconds

    function fadeLoop() {
      const duration = video.duration || 0;
      const current  = video.currentTime;
      const timeLeft = duration - current;

      if (timeLeft <= FADE_DURATION && timeLeft >= 0) {
        // Fade out near end
        video.style.opacity = Math.max(0, timeLeft / FADE_DURATION);
      } else if (current <= FADE_DURATION) {
        // Fade in at start
        video.style.opacity = Math.min(1, current / FADE_DURATION);
      } else {
        video.style.opacity = 1;
      }

      rafRef.current = requestAnimationFrame(fadeLoop);
    }

    function handleEnded() {
      video.style.opacity = 0;
      video.currentTime   = 0;
      setTimeout(() => {
        video.play().catch(() => {});
      }, 100);
    }

    function handlePlay() {
      rafRef.current = requestAnimationFrame(fadeLoop);
    }

    video.addEventListener('ended', handleEnded);
    video.addEventListener('play',  handlePlay);

    video.play().catch(() => {});

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('play',  handlePlay);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    /*
     * Wrapper: overflow-hidden so video is clipped to screen edges,
     * but the section itself is overflow-visible so the blurred overlay
     * shape can bleed outside if needed.
     */
    <div className="relative overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* ── Background Video ───────────────────────────────────────────────── */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4"
        muted
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0,
          zIndex: 0,
        }}
      />

      {/* ── Hero Content Layer (z-10, overflow-visible for blur shape) ──────── */}
      <div
        className="relative flex flex-col"
        style={{ minHeight: '100vh', zIndex: 10, overflow: 'visible' }}
      >
        {/* ── Navbar ─────────────────────────────────────────────────────────── */}
        <nav
          className="flex items-center justify-between w-full"
          style={{ padding: '20px 32px 0 32px' }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoSrc}
              alt="Yentra"
              style={{ height: 32, width: 'auto' }}
            />
          </Link>

          {/* Center nav links */}
          <div className="flex items-center gap-7">
            {[
              { name: 'Home',      path: '/' },
              { name: 'About',     path: '/about' },
              { name: 'Services',  path: '/services' },
              { name: 'Portfolio', path: '/portfolio' },
              { name: 'FAQ',       path: '/faq' },
              { name: 'Contact',   path: '/contact' },
            ].map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]'
                      : 'text-foreground/90 hover:text-foreground'
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
          </div>

          {/* CTA button */}
          <Link
            to="/contact"
            className="heroSecondary text-sm"
            style={{ padding: '8px 16px', textDecoration: 'none' }}
          >
            Start Your Project
          </Link>
        </nav>

        {/* Divider line */}
        <div
          className="w-full"
          style={{
            marginTop: 3,
            height: 1,
            background: 'linear-gradient(to right, transparent, rgba(248,243,230,0.2) 50%, transparent)',
          }}
        />

        {/* ── Main hero area (centered, flex-1) ───────────────────────────── */}
        <div className="flex-1 flex items-center justify-center" style={{ position: 'relative' }}>

          {/* Blurred overlay shape — centered, behind text */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 984,
              height: 527,
              opacity: 0.9,
              background: '#030712', /* gray-950 */
              filter: 'blur(82px)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* Content */}
          <div className="relative flex flex-col items-center text-center" style={{ zIndex: 1 }}>
            {/* Headline */}
            <h1
              style={{
                fontFamily: "'General Sans', sans-serif",
                fontSize: 220,
                fontWeight: 400,
                lineHeight: 1.02,
                letterSpacing: '-0.024em',
                margin: 0,
                padding: 0,
              }}
            >
              {'Yentra'.split('').map((char, i) => (
                <span key={i} className="hero-letter" style={{ cursor: 'default' }}>{char}</span>
              ))}
            </h1>


          </div>
        </div>

      </div>

    </div>
  );
}
