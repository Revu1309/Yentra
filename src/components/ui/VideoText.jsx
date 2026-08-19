"use client"

import React, { useEffect, useState, useMemo } from "react"

export function VideoText({
  src,
  children,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  preload = "auto",
  fontWeight = "900", // Bolder for more video visibility
  fontFamily = "Inter, sans-serif",
  as: Component = "div",
}) {
  const [svgMask, setSvgMask] = useState("")
  const content = React.Children.toArray(children).join("")

  // Dynamically calculate viewBox width so the text perfectly hugs the edges
  // This ensures the text scales up massively to fill whatever container it's in.
  const charWidth = 95; // Approximate width of a bold character at 160px font size
  const padding = 100; // Extra padding so edges aren't clipped
  const calculatedWidth = content.length * charWidth + padding;
  const viewBoxWidth = Math.max(calculatedWidth, 400); // Minimum width
  
  const viewBox = `0 0 ${viewBoxWidth} 220`; // Height 220 to comfortably fit 160px font
  const internalFontSize = "160";

  useEffect(() => {
    // We use a fixed viewBox and font-size. The SVG will scale automatically via CSS.
    // dominant-baseline="central" ensures vertical centering is perfectly consistent.
    const newSvgMask = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='${viewBox}' preserveAspectRatio='xMidYMid meet'><text x='50%' y='50%' font-size='${internalFontSize}' font-weight='${fontWeight}' text-anchor='middle' dominant-baseline='central' font-family='${fontFamily}'>${content}</text></svg>`
    setSvgMask(newSvgMask)
  }, [content, fontWeight, fontFamily, viewBox, internalFontSize])

  const dataUrlMask = `url("data:image/svg+xml,${encodeURIComponent(svgMask)}")`

  return (
    <Component className={`relative w-full ${className}`.trim()}>
      
      {/* 
        Inline SVG overlay dictating the height of the container natively via its viewBox.
        This forces the container to mathematically match the exact aspect ratio of the mask.
        It also provides the stroke outline and a subtle fill, ensuring readability.
      */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox={viewBox}
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto block"
      >
        <text 
          x="50%" 
          y="50%" 
          fontSize={internalFontSize}
          fontWeight={fontWeight} 
          textAnchor="middle" 
          dominantBaseline="central" 
          fontFamily={fontFamily}
          fill="rgba(255, 255, 255, 0.2)"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="2.5"
        >
          {content}
        </text>
      </svg>

      {/* Masked video container, stretching absolutely over the inline SVG */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          maskImage: dataUrlMask,
          WebkitMaskImage: dataUrlMask,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          filter: "drop-shadow(0px 0px 16px rgba(168, 85, 247, 0.4))",
        }}
      >
        <video
          className="h-full w-full object-cover"
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          preload={preload}
          playsInline
          style={{ filter: "brightness(2) contrast(1.2) saturate(1.5)" }}
        >
          <source src={src} />
        </video>
      </div>

      <span className="sr-only">{content}</span>
    </Component>
  )
}
