import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const BrainContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 440px;
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
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
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

    .active-lobe {
      color: var(--glow-purple);
      font-weight: bold;
      text-shadow: 0 0 8px rgba(168, 85, 247, 0.4);
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

export default function ThreeDBrain() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState('INTEGRATING');
  const mouseState = useRef({ isDown: false, startX: 0, startY: 0 });
  const rotationState = useRef({ angleY: 0.5, angleX: 0.1, speedY: 0.005 });

  useEffect(() => {
    // Detect active section based on scroll position to light up specific brain lobes!
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos < 450) {
        setActiveSection('SYNAPSE::DEFAULT_STATE');
      } else if (scrollPos >= 450 && scrollPos < 1100) {
        setActiveSection('FRONTAL_LOBE::ABOUT_ME');
      } else if (scrollPos >= 1100 && scrollPos < 1700) {
        setActiveSection('CEREBELLUM::EXPERTISE');
      } else {
        setActiveSection('OCCIPITAL::PROJECTS');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      width = canvas.width = rect.width * 1.5;
      height = canvas.height = rect.height * 1.5;
    };
    
    resizeCanvas();
    const observer = new ResizeObserver(() => resizeCanvas());
    if (containerRef.current) observer.observe(containerRef.current);

    // Procedural 3D Brain Particle Generation
    const brainParticles = [];
    const particleCount = 220;

    for (let i = 0; i < particleCount; i++) {
      let x, y, z, lobeType;
      
      // Determine what structure of the brain this particle belongs to
      const sectionRand = Math.random();

      if (sectionRand < 0.65) {
        // CEREBRUM (Left and Right Hemispheres)
        const phi = Math.random() * Math.PI * 2;
        const theta = Math.random() * Math.PI;
        // Sulci folds mapping formula
        const r = 70 + Math.sin(phi * 8) * Math.cos(theta * 8) * 6;
        
        x = r * Math.sin(theta) * Math.cos(phi);
        y = r * Math.sin(theta) * Math.sin(phi) * 0.8; // flattened
        z = r * Math.cos(theta) * 1.1; // elongated

        // Hemisphere split separation
        if (x > 0) x += 4;
        else x -= 4;

        // Classify lobes by coordinates
        if (z > 20 && y > -10) {
          lobeType = 'FRONTAL';
        } else if (z < -20 && y > -10) {
          lobeType = 'OCCIPITAL';
        } else {
          lobeType = 'TEMPORAL';
        }
      } else if (sectionRand >= 0.65 && sectionRand < 0.85) {
        // CEREBELLUM (dense nodes under back cerebrum)
        const phi = Math.random() * Math.PI * 2;
        const theta = Math.random() * Math.PI;
        const r = 38 + Math.sin(phi * 6) * 3;
        x = r * Math.sin(theta) * Math.cos(phi) * 0.9;
        y = -35 + r * Math.sin(theta) * Math.sin(phi) * 0.5;
        z = -45 + r * Math.cos(theta) * 0.8;
        lobeType = 'CEREBELLUM';
      } else {
        // BRAIN STEM (stem extending downwards)
        x = Math.random() * 12 - 6;
        y = -40 - Math.random() * 65;
        z = -10 - Math.random() * 15;
        lobeType = 'STEM';
      }

      brainParticles.push({
        x,
        y: y + 10, // vertical centering adjustment
        z,
        lobeType,
        baseSize: Math.random() * 1.5 + 1.2,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      const centerX = width / 2;
      const centerY = height / 2;
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

      // Auto rot when mouse is idle
      if (!mouseState.current.isDown) {
        rotationState.current.angleY += rotationState.current.speedY;
        rotationState.current.angleX += (0.1 - rotationState.current.angleX) * 0.03;
      }

      const cosY = Math.cos(rotationState.current.angleY);
      const sinY = Math.sin(rotationState.current.angleY);
      const cosX = Math.cos(rotationState.current.angleX);
      const sinX = Math.sin(rotationState.current.angleX);

      // Map particles into 3D projection space
      const projected = brainParticles.map((p) => {
        // Y rotate
        const ry_x = p.x * cosY - p.z * sinY;
        const ry_z = p.z * cosY + p.x * sinY;
        const ry_y = p.y;

        // X rotate
        const rx_y = ry_y * cosX - ry_z * sinX;
        const rx_z = ry_z * cosX + ry_y * sinX;

        const depth = 350;
        const scale = depth / (depth + rx_z);
        
        return {
          x: centerX + ry_x * scale * 1.5,
          y: centerY - rx_y * scale * 1.5, // flip Y axis to orient brain stem downwards
          z: rx_z,
          scale,
          lobeType: p.lobeType,
          baseSize: p.baseSize,
          pulseOffset: p.pulseOffset
        };
      });

      // Sort by depth for correct 3D layers rendering
      projected.sort((a, b) => b.z - a.z);

      const time = Date.now() * 0.005;

      // Draw projected nodes
      projected.forEach((p) => {
        const size = p.baseSize * p.scale * (1 + Math.sin(time + p.pulseOffset) * 0.2);
        
        // Active section lobe pulse highlighting
        let isNodeActive = false;
        let lobeColor = isDark ? 'rgba(0, 242, 254, 0.2)' : 'rgba(79, 172, 254, 0.3)';
        let activeGlow = null;

        if (activeSection.includes('FRONTAL') && p.lobeType === 'FRONTAL') {
          isNodeActive = true;
          lobeColor = isDark ? '#00f2fe' : '#00b4d8';
          activeGlow = '#00f2fe';
        } else if (activeSection.includes('CEREBELLUM') && p.lobeType === 'CEREBELLUM') {
          isNodeActive = true;
          lobeColor = isDark ? '#a855f7' : '#7b2cbf';
          activeGlow = '#a855f7';
        } else if (activeSection.includes('OCCIPITAL') && p.lobeType === 'OCCIPITAL') {
          isNodeActive = true;
          lobeColor = isDark ? '#ec4899' : '#d90429';
          activeGlow = '#ec4899';
        } else {
          // Default idle fires (neural ripples)
          if (p.lobeType === 'FRONTAL') {
            lobeColor = isDark ? 'rgba(0, 242, 254, 0.3)' : 'rgba(79, 172, 254, 0.4)';
          } else if (p.lobeType === 'CEREBELLUM') {
            lobeColor = isDark ? 'rgba(168, 85, 247, 0.3)' : 'rgba(123, 44, 191, 0.4)';
          } else if (p.lobeType === 'OCCIPITAL') {
            lobeColor = isDark ? 'rgba(236, 72, 153, 0.3)' : 'rgba(217, 4, 41, 0.4)';
          } else {
            lobeColor = isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(100, 110, 130, 0.3)';
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.closePath();

        if (isNodeActive && isDark) {
          ctx.shadowBlur = 12;
          ctx.shadowColor = activeGlow;
        }
        ctx.fillStyle = lobeColor;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      // Render synaptic micro-pulses (lines firing between neighboring active points)
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projected.length; i += 8) {
        for (let j = i + 1; j < projected.length; j += 12) {
          const p1 = projected[i];
          const p2 = projected[j];

          if (p1.lobeType === p2.lobeType) {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Connect if nodes are close
            if (dist < 40 * ((p1.scale + p2.scale) / 2)) {
              let isLinkActive = false;
              let strokeColor = isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)';

              if (activeSection.includes('FRONTAL') && p1.lobeType === 'FRONTAL') {
                isLinkActive = true;
                strokeColor = `rgba(0, 242, 254, ${0.15 * p1.scale})`;
              } else if (activeSection.includes('CEREBELLUM') && p1.lobeType === 'CEREBELLUM') {
                isLinkActive = true;
                strokeColor = `rgba(168, 85, 247, ${0.15 * p1.scale})`;
              } else if (activeSection.includes('OCCIPITAL') && p1.lobeType === 'OCCIPITAL') {
                isLinkActive = true;
                strokeColor = `rgba(236, 72, 153, ${0.15 * p1.scale})`;
              }

              ctx.strokeStyle = strokeColor;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [activeSection]);

  const handleMouseDown = (e) => {
    mouseState.current.isDown = true;
    mouseState.current.startX = e.clientX;
    mouseState.current.startY = e.clientY;
  };

  const handleMouseMove = (e) => {
    if (!mouseState.current.isDown) return;
    const dx = e.clientX - mouseState.current.startX;
    const dy = e.clientY - mouseState.current.startY;
    
    rotationState.current.angleY += dx * 0.005;
    rotationState.current.angleX += dy * 0.005;
    rotationState.current.angleX = Math.max(-0.8, Math.min(0.8, rotationState.current.angleX));

    mouseState.current.startX = e.clientX;
    mouseState.current.startY = e.clientY;
  };

  const handleMouseUpOrLeave = () => {
    mouseState.current.isDown = false;
  };

  // Human-readable labels mapping for HUD readout
  const getReadableLabel = () => {
    if (activeSection.includes('DEFAULT')) return 'COGNITIVE::IDLE';
    if (activeSection.includes('FRONTAL')) return 'FRONTAL_LOBE::RETRIEVING_ABOUT';
    if (activeSection.includes('CEREBELLUM')) return 'CEREBELLUM::MOTOR_SKILLS_ACTIVE';
    if (activeSection.includes('OCCIPITAL')) return 'OCCIPITAL_LOBE::RENDERING_PROJECTS';
    return 'COGNITIVE::ANALYZING';
  };

  return (
    <BrainContainer
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
    >
      <div className="hud-overlay">
        <span><div className="indicator" /> CORE::MEDICAL_AI</span>
        <span>SECTOR: <span className="active-lobe">{getReadableLabel()}</span></span>
      </div>
      <CanvasElement ref={canvasRef} />
      <div className="hud-title">Drag to Rotate Synapse</div>
    </BrainContainer>
  );
}
