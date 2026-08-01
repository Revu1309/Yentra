import React from 'react';
import { createRoot } from 'react-dom/client';
import TrueFocus from './src/components/TrueFocus.jsx';
import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // --- React TrueFocus Slogan ---
  const sloganRootElement = document.getElementById('slogan-focus-root');
  if (sloganRootElement) {
    const root = createRoot(sloganRootElement);
    root.render(
      <TrueFocus 
        sentence="Create Beyond" 
        manualMode={false} 
        blurAmount={3} 
        borderColor="#a855f7" 
        glowColor="rgba(168, 85, 247, 0.5)" 
        animationDuration={1.2} 
        pauseBetweenAnimations={0.5} 
      />
    );
  }

  // --- Background Video Logic ---
  const video = document.getElementById('hero-video');
  
  if (!video) return;

  // Set initial opacity to 0
  video.style.opacity = '0';
  video.style.transition = 'opacity 0.1s linear';
  
  let isPlaying = false;
  
  function updateOpacity() {
    if (!isPlaying) {
      requestAnimationFrame(updateOpacity);
      return;
    }
    
    // Fallback duration if metadata isn't fully loaded
    const duration = video.duration || 0;
    const currentTime = video.currentTime;
    
    if (duration > 0) {
      const fadeInDuration = 0.5;
      const fadeOutDuration = 0.5;
      let opacity = 0;
      
      if (currentTime <= fadeInDuration) {
        opacity = currentTime / fadeInDuration;
      } else if (currentTime >= duration - fadeOutDuration) {
        opacity = (duration - currentTime) / fadeOutDuration;
      } else {
        opacity = 1;
      }
      
      // Clamp between 0 and 1
      opacity = Math.max(0, Math.min(1, opacity));
      video.style.opacity = opacity.toString();
    }
    
    requestAnimationFrame(updateOpacity);
  }
  
  // Wait until video can play
  video.addEventListener('canplay', () => {
    if(!isPlaying) {
      setTimeout(() => {
        video.play().catch(e => console.log('Autoplay blocked:', e));
      }, 100);
    }
  });

  video.addEventListener('play', () => {
    isPlaying = true;
  });

  video.addEventListener('pause', () => {
    isPlaying = false;
  });

  // Handle loop reset
  video.addEventListener('ended', () => {
    isPlaying = false;
    video.style.opacity = '0';
    
    // Reset and replay after 100ms
    setTimeout(() => {
      video.currentTime = 0;
      video.play().catch(e => console.log('Autoplay blocked:', e));
      isPlaying = true;
    }, 100);
  });
  
  // Start animation frame loop
  requestAnimationFrame(updateOpacity);
});
