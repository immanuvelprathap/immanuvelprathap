import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  position: relative;
  transition: transform 0.25s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.25s cubic-bezier(0.25, 1, 0.5, 1);
  transform-style: preserve-3d;
  will-change: transform;

  /* Force child components to respect 3D space if they utilize translateZ */
  > * {
    transform-style: preserve-3d;
  }

  .sheen {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 10;
    border-radius: inherit;
    mix-blend-mode: screen;
    opacity: 0;
    transition: opacity 0.4s ease;
    will-change: background, opacity;
  }

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 242, 254, 0.1), 0 0 30px rgba(168, 85, 247, 0.05);
    border-color: var(--border-hover);
    
    .sheen {
      opacity: 1;
    }
  }
`;

export default function ThreeDCard({ children, maxTilt = 12, scale = 1.03, className, style }) {
  const [transformStyle, setTransformStyle] = useState('');
  const [sheenStyle, setSheenStyle] = useState({});
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Mouse coordinates relative to card bounds
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates from -0.5 to 0.5
    const normX = (x / rect.width) - 0.5;
    const normY = (y / rect.height) - 0.5;
    
    // Interpolate rotation angles based on sensitivity bounds
    const rotateX = -normY * maxTilt;
    const rotateY = normX * maxTilt;
    
    setTransformStyle(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`);
    
    // Sheen glowing position percentages
    const sheenPctX = (x / rect.width) * 100;
    const sheenPctY = (y / rect.height) * 100;
    
    setSheenStyle({
      background: `radial-gradient(circle 180px at ${sheenPctX.toFixed(1)}% ${sheenPctY.toFixed(1)}%, rgba(0, 242, 254, 0.22) 0%, rgba(168, 85, 247, 0.08) 50%, transparent 100%)`
    });
  };

  const handleMouseLeave = () => {
    // Reset transforms smoothly
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setSheenStyle({ opacity: 0 });
  };

  return (
    <CardWrapper
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, transform: transformStyle }}
      className={className}
    >
      <div className="sheen" style={sheenStyle} />
      {children}
    </CardWrapper>
  );
}
