import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import React from 'react';
import './StrokeText.css';

const StrokeText = ({
  text,
  strokeColor = '#c4ff00',
  fillColor = '#ffffff',
  strokeWidth = 1.5,
  fontSize = 180,
  fontWeight = 600,
  letterSpacing = -3.6,
  style = {}
}) => {
  return (
    <div 
      className="stroke-text-container"
      style={{
        ...style,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '--stroke-color': strokeColor,
        '--fill-color': fillColor
      }}
    >
      <svg
        style={{ width: '100%', height: '250px', overflow: 'visible' }}
      >
        <style>
          {`
            .robust-stroke-text {
              font-size: clamp(40px, 10vw, ${fontSize}px) !important;
              font-family: 'General Sans', sans-serif !important;
            }
          `}
        </style>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          className="robust-stroke-text"
          style={{
            fontWeight,
            letterSpacing: '-0.5px'
          }}
        >
          {text}
        </text>
      </svg>
    </div>
  );
};

export default StrokeText;
