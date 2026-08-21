import React, { useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import TrueFocus from '../TrueFocus.jsx';

import StrokeText from '../ui/StrokeText.jsx';

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
      // Only recalculate if progress changed significantly (avoid micro-jitter thrashing)
      if (Math.abs(scrollProgressRef.current - progress) < 0.0001 && progress !== 0 && progress !== 1) {
        return;
      }
      
      scrollProgressRef.current = progress;
      const exactScale = 800 / Math.max(0.1, 800 - progress * 1500);
      const fadeOut = Math.max(0, 1 - (Math.max(0, progress - 0.4) * 1.66));

      if (wallTopRef.current) wallTopRef.current.style.opacity = fadeOut;
      if (wallBottomRef.current) wallBottomRef.current.style.opacity = fadeOut;
      if (wallLeftRef.current) wallLeftRef.current.style.opacity = fadeOut;
      if (wallRightRef.current) wallRightRef.current.style.opacity = fadeOut;
      
      if (heroCopyRef.current) {
        heroCopyRef.current.style.transform = `translate(-50%, -50%) scale(${exactScale})`;
        heroCopyRef.current.style.opacity = fadeOut;
      }
    }
  }));

  // Parallax effect for 3D tunnel and Fly-through
  useEffect(() => {
    let animationFrameId;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let lastZ = -1, lastX = -999, lastY = -999;

    const onMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 10;
      targetY = (e.clientY / window.innerHeight - 0.5) * 10;
    };

    const animate = () => {
      if (sceneRef.current) {
        currentX += (targetX - currentX) * 0.05;
        currentY += (targetY - currentY) * 0.05;
        
        const zTranslation = scrollProgressRef.current * 1500;
        
        // Only update DOM if the difference is noticeable (> 0.01 threshold for rotation/translation)
        if (Math.abs(lastZ - zTranslation) > 0.01 || Math.abs(lastX - currentX) > 0.01 || Math.abs(lastY - currentY) > 0.01) {
          sceneRef.current.style.transform = `translateZ(${zTranslation}px) rotateX(${-currentY}deg) rotateY(${currentX}deg)`;
          
          // Fade out the entire scene slightly at the very end to hide clipping
          sceneRef.current.style.opacity = Math.max(0, 1 - Math.max(0, (scrollProgressRef.current - 0.8) * 5));
          
          lastZ = zTranslation;
          lastX = currentX;
          lastY = currentY;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
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

      {/* ── Hero Content Layer (2D Overlay) ─────────────────────────────── */}
      {!props.hideText && (
        <div 
          ref={heroCopyRef} 
          className="absolute flex flex-col items-center text-center pointer-events-auto z-30" 
          style={{ 
            top: '50%',
            left: '50%',
            willChange: 'transform, opacity', 
            transform: 'translate(-50%, -50%) scale(1)',
            width: '100%',
            maxWidth: '1200px'
          }}
        >
          <div style={{ transform: 'translateY(12%)', width: '100%' }}>
            <StrokeText
              text="YENTRA"
              strokeColor="#c4ff00"
              fillColor="#ffffff"
              strokeWidth={1.5}
              fontSize={120}
              fontWeight={600}
              letterSpacing={-0.02 * 120}
              style={{ fontFamily: "'General Sans', sans-serif" }}
            />
          </div>

          <div className="absolute top-full mt-20" style={{ opacity: 0, animation: 'fadeInSlogan 1.5s ease-in-out 3.8s forwards' }}>
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
      )}
      <style>{`
        @keyframes fadeInSlogan {
          0% { opacity: 0; filter: blur(10px); transform: translateY(10px); }
          100% { opacity: 1; filter: blur(0px); transform: translateY(0); }
        }
      `}</style>
    </div>
  );
});

export default HeroSection;
