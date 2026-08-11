import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const HelixContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  aspect-ratio: 1 / 1;
  background: var(--panel-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: var(--border-hover);
    box-shadow: 0 15px 35px rgba(0, 242, 254, 0.08), 0 0 20px rgba(168, 85, 247, 0.04);
  }
  
  &:active {
    cursor: grabbing;
  }

  .hud-overlay {
    position: absolute;
    top: 2rem;
    left: 2rem;
    pointer-events: none;
    font-family: var(--font-mono);
    color: var(--text-secondary);
    font-size: 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    opacity: 0.8;
    z-index: 5;
    
    span {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    .indicator {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: var(--glow-cyan);
      box-shadow: 0 0 10px var(--glow-cyan);
      animation: pulseGlow 1.5s infinite;
    }
  }

  .hud-title {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    pointer-events: none;
    font-family: var(--font-mono);
    color: var(--text-muted);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    z-index: 5;
  }
`;

const CanvasElement = styled.canvas`
  width: 100%;
  height: 100%;
  display: block;
`;

export default function InteractiveHelix() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [coords, setCoords] = useState({ x: '0.00', y: '0.00' });
  const mouseState = useRef({ isDown: false, startX: 0, startY: 0 });
  const rotationState = useRef({ angleY: 0, angleX: 0.2, speedY: 0.006, speedX: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let width = (canvas.width = 420);
    let height = (canvas.height = 420);

    const resizeCanvas = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      width = canvas.width = rect.width * 1.5; // Scale slightly for crisp rendering
      height = canvas.height = rect.height * 1.5;
    };
    
    resizeCanvas();
    
    // Resize Observer for robust bounds tracking
    const observer = new ResizeObserver(() => resizeCanvas());
    if (containerRef.current) observer.observe(containerRef.current);

    const nodeCount = 24;
    const radius = 65;
    const helixLength = 220;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      const centerX = width / 2;
      const centerY = height / 2;
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

      // Draw background vector rings (HUD style)
      ctx.strokeStyle = isDark ? 'rgba(0, 242, 254, 0.02)' : 'rgba(79, 172, 254, 0.04)';
      ctx.lineWidth = 1;
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, Math.min(width, height) * 0.38, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX, centerY, Math.min(width, height) * 0.24, 0, Math.PI * 2);
      ctx.stroke();

      // Spin HUD crosshairs
      ctx.strokeStyle = isDark ? 'rgba(168, 85, 247, 0.015)' : 'rgba(168, 85, 247, 0.03)';
      ctx.beginPath();
      ctx.moveTo(centerX - 100, centerY);
      ctx.lineTo(centerX + 100, centerY);
      ctx.moveTo(centerX, centerY - 100);
      ctx.lineTo(centerX, centerY + 100);
      ctx.stroke();

      // Auto rotation velocity when not interacting
      if (!mouseState.current.isDown) {
        rotationState.current.angleY += rotationState.current.speedY;
        rotationState.current.angleX += (0.2 - rotationState.current.angleX) * 0.03; // Smooth back to base tilt
      }

      const cosY = Math.cos(rotationState.current.angleY);
      const sinY = Math.sin(rotationState.current.angleY);
      const cosX = Math.cos(rotationState.current.angleX);
      const sinX = Math.sin(rotationState.current.angleX);

      const points = [];

      for (let i = 0; i < nodeCount; i++) {
        const t = (i / (nodeCount - 1)) - 0.5;
        const hY = t * helixLength;
        const theta = t * Math.PI * 3.5; // Helix spiral density

        // Local coords for double strands
        const x1 = Math.cos(theta) * radius;
        const z1 = Math.sin(theta) * radius;
        const y1 = hY;

        const x2 = Math.cos(theta + Math.PI) * radius;
        const z2 = Math.sin(theta + Math.PI) * radius;
        const y2 = hY;

        // 3D projection pipeline
        const project = (x, y, z) => {
          // Rotate on Y
          const ry_x = x * cosY - z * sinY;
          const ry_z = z * cosY + x * sinY;
          const ry_y = y;

          // Rotate on X
          const rx_y = ry_y * cosX - ry_z * sinX;
          const rx_z = ry_z * cosX + ry_y * sinX;

          // Perspective depth calculation
          const depth = 280;
          const scale = depth / (depth + rx_z);
          
          return {
            x: centerX + ry_x * scale * 1.3,
            y: centerY + rx_y * scale * 1.3,
            z: rx_z,
            scale
          };
        };

        points.push({
          pt1: project(x1, y1, z1),
          pt2: project(x2, y2, z2),
          index: i
        });
      }

      // Sort by depth (average of pt1 and pt2)
      points.sort((a, b) => b.pt1.z + b.pt2.z - (a.pt1.z + a.pt2.z));

      // Draw connection lines and node vertices
      points.forEach(({ pt1, pt2 }) => {
        const avgScale = (pt1.scale + pt2.scale) / 2;
        const alpha = Math.max(0.08, avgScale * 0.55);

        // Strand connector rungs
        if (isDark) {
          const rungGrad = ctx.createLinearGradient(pt1.x, pt1.y, pt2.x, pt2.y);
          rungGrad.addColorStop(0, `rgba(0, 242, 254, ${alpha * 0.6})`);
          rungGrad.addColorStop(0.5, `rgba(255, 255, 255, ${alpha * 0.15})`);
          rungGrad.addColorStop(1, `rgba(168, 85, 247, ${alpha * 0.6})`);
          ctx.strokeStyle = rungGrad;
        } else {
          ctx.strokeStyle = `rgba(79, 172, 254, ${alpha * 0.35})`;
        }
        
        ctx.lineWidth = 1.8 * avgScale;
        ctx.beginPath();
        ctx.moveTo(pt1.x, pt1.y);
        ctx.lineTo(pt2.x, pt2.y);
        ctx.stroke();

        // Vertex Node 1 (electric cyan/blue)
        const size1 = 5.2 * pt1.scale;
        ctx.beginPath();
        ctx.arc(pt1.x, pt1.y, size1, 0, Math.PI * 2);
        ctx.closePath();
        
        if (isDark) {
          ctx.fillStyle = `rgba(0, 242, 254, ${0.45 + pt1.scale * 0.5})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#00f2fe';
        } else {
          ctx.fillStyle = '#4facfe';
        }
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow

        // Vertex Node 2 (purple/pink)
        const size2 = 5.2 * pt2.scale;
        ctx.beginPath();
        ctx.arc(pt2.x, pt2.y, size2, 0, Math.PI * 2);
        ctx.closePath();
        
        if (isDark) {
          ctx.fillStyle = `rgba(168, 85, 247, ${0.45 + pt2.scale * 0.5})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#a855f7';
        } else {
          ctx.fillStyle = '#a855f7';
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Update rotation status in state readout periodically
      if (Math.random() < 0.1) {
        setCoords({
          x: (rotationState.current.angleY % (Math.PI * 2)).toFixed(2),
          y: (rotationState.current.angleX % (Math.PI * 2)).toFixed(2)
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  const handleMouseDown = (e) => {
    mouseState.current.isDown = true;
    mouseState.current.startX = e.clientX;
    mouseState.current.startY = e.clientY;
  };

  const handleMouseMove = (e) => {
    if (!mouseState.current.isDown) return;
    const dx = e.clientX - mouseState.current.startX;
    const dy = e.clientY - mouseState.current.startY;
    
    rotationState.current.angleY += dx * 0.006;
    rotationState.current.angleX += dy * 0.006;
    
    // Pitch bounds protection
    rotationState.current.angleX = Math.max(-1.1, Math.min(1.1, rotationState.current.angleX));

    mouseState.current.startX = e.clientX;
    mouseState.current.startY = e.clientY;
  };

  const handleMouseUpOrLeave = () => {
    mouseState.current.isDown = false;
  };

  return (
    <HelixContainer
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
    >
      <div className="hud-overlay">
        <span><div className="indicator" /> MEDICAL_AI::VISUALIZER</span>
        <span>PHI: {coords.x} rad</span>
        <span>THETA: {coords.y} rad</span>
      </div>
      <CanvasElement ref={canvasRef} />
      <div className="hud-title">Drag to Rotate Strand</div>
    </HelixContainer>
  );
}
