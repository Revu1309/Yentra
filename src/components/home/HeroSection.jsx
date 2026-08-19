import React, { useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import TrueFocus from '../TrueFocus.jsx';

const HeroSection = forwardRef((props, ref) => {
  const sceneRef = useRef(null);
  const wallTopRef = useRef(null);
  const wallBottomRef = useRef(null);
  const wallLeftRef = useRef(null);
  const wallRightRef = useRef(null);
  const heroCopyRef = useRef(null);

  const scrollProgressRef = useRef(0);

  useImperativeHandle(ref, () => ({
    setScrollProgress: (progress) => {
      scrollProgressRef.current = progress;
      const zoomScale = 1 + progress * 25; 
      const fadeOut = Math.max(0, 1 - (Math.max(0, progress - 0.4) * 1.66));

      if (heroCopyRef.current) {
        heroCopyRef.current.style.transform = `scale(${zoomScale})`;
        heroCopyRef.current.style.opacity = fadeOut;
      }
    }
  }));

  // Parallax effect for 3D tunnel and Fly-through
  useEffect(() => {
    let animationFrameId;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    const onMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 10;
      targetY = (e.clientY / window.innerHeight - 0.5) * 10;
    };

    const animate = () => {
      if (sceneRef.current) {
        currentX += (targetX - currentX) * 0.05;
        currentY += (targetY - currentY) * 0.05;
        
        // Translate the scene on Z-axis to create the fly-through, then apply parallax rotations
        const zTranslation = scrollProgressRef.current * 1500; // Fly forward 1500px
        sceneRef.current.style.transform = `translateZ(${zTranslation}px) rotateX(${-currentY}deg) rotateY(${currentX}deg)`;
        
        // Fade out the entire scene slightly at the very end to hide clipping
        sceneRef.current.style.opacity = Math.max(0, 1 - Math.max(0, (scrollProgressRef.current - 0.8) * 5));
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col bg-transparent">
      {/* ── 3D Text Tunnel ─────────────────────────────────────────────────── */}
      <div className="tunnel-container z-10" aria-hidden="true">
        <div className="tunnel-scene" ref={sceneRef}>
          <div ref={wallTopRef} className="tunnel-wall wall-top text-foreground" style={{ willChange: 'transform, opacity' }}>YENTRA</div>
          <div ref={wallBottomRef} className="tunnel-wall wall-bottom text-foreground" style={{ willChange: 'transform, opacity' }}>YENTRA</div>
          <div ref={wallLeftRef} className="tunnel-wall wall-left text-neon" style={{ willChange: 'transform, opacity' }}>CREATE</div>
          <div ref={wallRightRef} className="tunnel-wall wall-right text-coral" style={{ willChange: 'transform, opacity' }}>BEYOND</div>
        </div>
      </div>

      {/* ── Hero Content Layer ────────────────────────────────────────────── */}
      <div className="relative flex flex-col items-center justify-center h-full z-20 overflow-visible">
        {/* Content */}
        <div ref={heroCopyRef} className="relative flex flex-col items-center text-center z-10" style={{ willChange: 'transform, opacity' }}>
          <h1
            className="yentra-gradient-text"
            style={{
              fontFamily: "'General Sans', sans-serif",
              fontSize: 220,
              fontWeight: 400,
              lineHeight: 1.02,
              letterSpacing: '-0.024em',
              margin: 0,
              padding: 0,
              cursor: 'pointer'
            }}
          >
            YENTRA
          </h1>

          <div style={{ marginTop: '1.5rem' }}>
            <TrueFocus 
              sentence="Create Beyond"
              manualMode={false}
              blurAmount={5}
              borderColor="#CCFF00"
              glowColor="transparent"
              animationDuration={1.5}
              pauseBetweenAnimations={0.5}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default HeroSection;
