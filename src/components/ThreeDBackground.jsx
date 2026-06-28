import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const FullscreenCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: auto; /* Allow mouse interaction directly on background brain */
  background-color: var(--bg-color);
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export default function ThreeDBackground({ hoveredNav }) {
  const canvasRef = useRef(null);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');

  // Mouse drag interaction state
  const mouseState = useRef({ isDown: false, startX: 0, startY: 0, dragX: 0, dragY: 0 });
  // Camera state (lerped values)
  const camera = useRef({
    x: 0,
    y: 0,
    zoom: 1.0,
    angleX: 0.1,
    angleY: 0.5,
  });

  // Track page path changes
  useEffect(() => {
    const path = location.pathname;
    if (path === '/about') {
      setActiveSection('about');
    } else if (path === '/projects') {
      setActiveSection('projects');
    } else if (path === '/contact') {
      setActiveSection('contact');
    } else {
      setActiveSection('home');
    }
  }, [location]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Setup 3D brain particle parameters
    const particleCount = 700;
    const brainParticles = [];

    // Define lobe centers in 3D local coordinate space of the brain
    const lobeCenters = {
      home: { x: 0, y: 0, z: 0 },
      about: { x: -35, y: 35, z: 50 },      // Frontal Lobe (top-front-left)
      projects: { x: 30, y: 15, z: -60 },    // Occipital Lobe (back-right)
      contact: { x: 0, y: -45, z: -10 },     // Brain Stem & Cerebellum (base)
    };

    // Generate 3D brain model procedurally
    for (let i = 0; i < particleCount; i++) {
      let x, y, z, lobeType;
      const rand = Math.random();

      if (rand < 0.65) {
        // CEREBRUM
        const phi = Math.random() * Math.PI * 2;
        const theta = Math.random() * Math.PI;
        // Sulci folds: formula to make it look like brain surface
        const r = 90 + Math.sin(phi * 8) * Math.cos(theta * 8) * 8;
        
        x = r * Math.sin(theta) * Math.cos(phi);
        y = r * Math.sin(theta) * Math.sin(phi) * 0.75;
        z = r * Math.cos(theta) * 1.15;

        // Hemispheric division gap
        if (x > 0) x += 4;
        else x -= 4;

        // Assign lobe type based on coordinate regions
        if (z > 20 && y > -10) {
          lobeType = 'about'; // Frontal
        } else if (z < -15 && y > -15) {
          lobeType = 'projects'; // Occipital
        } else {
          lobeType = 'temporal'; // Temporal / Parietal
        }
      } else if (rand >= 0.65 && rand < 0.85) {
        // CEREBELLUM
        const phi = Math.random() * Math.PI * 2;
        const theta = Math.random() * Math.PI;
        const r = 50 + Math.sin(phi * 6) * 4;
        x = r * Math.sin(theta) * Math.cos(phi) * 0.85;
        y = -45 + r * Math.sin(theta) * Math.sin(phi) * 0.45;
        z = -55 + r * Math.cos(theta) * 0.75;
        lobeType = 'contact'; // Base
      } else {
        // BRAIN STEM
        x = Math.random() * 15 - 7.5;
        y = -50 - Math.random() * 75;
        z = -15 - Math.random() * 15;
        lobeType = 'contact'; // Base
      }

      brainParticles.push({
        x,
        y: y + 10,
        z,
        lobeType,
        baseSize: Math.random() * 1.6 + 1.1,
        pulseOffset: Math.random() * Math.PI * 2,
        speedMultiplier: Math.random() * 0.5 + 0.5,
      });
    }

    // Neuron Firing Spark System
    const sparks = [];
    const maxSparks = 60;

    // Shockwave states
    let shockwave = {
      active: false,
      x: 0,
      y: 0,
      z: 0,
      progress: 0,
      color: 'rgba(0, 242, 254, 1)',
    };

    // Synaptic pulses traveling along connections
    const synapticPulses = [];
    for (let i = 0; i < 15; i++) {
      synapticPulses.push({
        particleIndex: Math.floor(Math.random() * particleCount),
        progress: Math.random(),
        speed: Math.random() * 0.02 + 0.01,
        targetIndex: null,
      });
    }

    // Trigger visual firing effect
    const triggerNeuronFire = (lobeKey) => {
      const center = lobeCenters[lobeKey] || lobeCenters.home;
      
      // Determine theme/color
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      let fireColor = '#00f2fe';
      if (lobeKey === 'about') fireColor = '#a855f7';
      if (lobeKey === 'projects') fireColor = '#ec4899';
      if (lobeKey === 'contact') fireColor = '#3b82f6';

      // 1. Shockwave trigger
      shockwave = {
        active: true,
        x: center.x,
        y: center.y,
        z: center.z,
        progress: 0,
        color: fireColor,
      };

      // 2. Spawn spark particles
      for (let i = 0; i < 40; i++) {
        const angle1 = Math.random() * Math.PI * 2;
        const angle2 = Math.random() * Math.PI;
        const speed = Math.random() * 6 + 4;
        
        sparks.push({
          x: center.x,
          y: center.y,
          z: center.z,
          vx: Math.sin(angle2) * Math.cos(angle1) * speed,
          vy: Math.sin(angle2) * Math.sin(angle1) * speed,
          vz: Math.cos(angle2) * speed,
          alpha: 1.0,
          color: fireColor,
          size: Math.random() * 3 + 2,
          decay: Math.random() * 0.03 + 0.02,
        });
      }
    };

    // Trigger firing whenever active page changes
    triggerNeuronFire(activeSection);

    // Track the target coordinates and settings
    const getCameraTargets = () => {
      // Determine what coordinates are targeted (takes hover state over page state)
      const targetLobe = hoveredNav || activeSection;
      
      const widthVal = window.innerWidth;
      const heightVal = window.innerHeight;

      // Base default targets
      let targetZoom = 1.0;
      let targetX = 0;
      let targetY = 0;
      let targetAngleX = 0.1;
      let targetAngleY = Date.now() * 0.00015; // slow spin

      // Customize camera target vectors based on targeted lobe
      if (targetLobe === 'home') {
        targetZoom = widthVal < 768 ? 0.8 : 1.1;
        targetX = widthVal < 768 ? 0 : widthVal * 0.18; // shift right of hero text
        targetY = widthVal < 768 ? -heightVal * 0.12 : -heightVal * 0.05;
        targetAngleX = 0.05;
        targetAngleY = Date.now() * 0.0001; 
      } else if (targetLobe === 'about') {
        targetZoom = widthVal < 768 ? 1.7 : 2.5;
        targetX = widthVal < 768 ? 0 : widthVal * 0.22; // shift deep right
        targetY = widthVal < 768 ? -heightVal * 0.15 : -heightVal * 0.05;
        targetAngleX = -0.15; // pitch to reveal frontal
        targetAngleY = 1.5;   // roll to frontal lobe
      } else if (targetLobe === 'projects') {
        targetZoom = widthVal < 768 ? 1.5 : 2.2;
        targetX = widthVal < 768 ? 0 : -widthVal * 0.2; // shift left
        targetY = widthVal < 768 ? -heightVal * 0.18 : -heightVal * 0.08;
        targetAngleX = 0.25;  // pitch to reveal occipital
        targetAngleY = 3.65;  // roll to occipital lobe (back)
      } else if (targetLobe === 'contact') {
        targetZoom = widthVal < 768 ? 1.8 : 2.6;
        targetX = 0; // center
        targetY = widthVal < 768 ? -heightVal * 0.15 : -heightVal * 0.12;
        targetAngleX = 0.55;  // roll up to expose brain stem / cerebellum
        targetAngleY = 0.75;
      }

      // If just hovering over a navbar item, we don't zoom all the way, we do a half zoom
      if (hoveredNav && hoveredNav !== activeSection) {
        targetZoom = targetZoom * 0.75;
      }

      return {
        zoom: targetZoom,
        x: targetX,
        y: targetY,
        angleX: targetAngleX,
        angleY: targetAngleY,
      };
    };

    // Keep resize functioning
    const handleResize = () => {
      if (!canvasRef.current) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      ctx.clearRect(0, 0, width, height);

      // 1. Fetch target state and update camera smoothly (lerping)
      const targets = getCameraTargets();
      
      camera.current.zoom += (targets.zoom - camera.current.zoom) * 0.07;
      camera.current.x += (targets.x - camera.current.x) * 0.07;
      camera.current.y += (targets.y - camera.current.y) * 0.07;

      // Handle angles - if mouse is not dragging, lerp to targets.
      if (!mouseState.current.isDown) {
        // Continuous slow rotation modifier on Y-axis for Home
        let targetAngleY = targets.angleY;
        if (hoveredNav === 'home' || (!hoveredNav && activeSection === 'home')) {
          targetAngleY = (Date.now() * 0.00015) % (Math.PI * 2);
        }

        // Handle modular angle wrap to prevent huge spinning rotations during lerp
        let diffY = targetAngleY - camera.current.angleY;
        diffY = Math.atan2(Math.sin(diffY), Math.cos(diffY));
        camera.current.angleY += diffY * 0.06;

        let diffX = targets.angleX - camera.current.angleX;
        diffX = Math.atan2(Math.sin(diffX), Math.cos(diffX));
        camera.current.angleX += diffX * 0.06;
      } else {
        // Drag active - update camera smoothly based on drag delta
        camera.current.angleY += mouseState.current.dragX * 0.001;
        camera.current.angleX += mouseState.current.dragY * 0.001;
        // Clamp pitching
        camera.current.angleX = Math.max(-0.8, Math.min(0.8, camera.current.angleX));
        // Decay drag speed
        mouseState.current.dragX *= 0.9;
        mouseState.current.dragY *= 0.9;
      }

      // Precalculate trig variables
      const cosY = Math.cos(camera.current.angleY);
      const sinY = Math.sin(camera.current.angleY);
      const cosX = Math.cos(camera.current.angleX);
      const sinX = Math.sin(camera.current.angleX);

      // Centering of canvas projection plus lerped camera offset shifts
      const centerX = width / 2 + camera.current.x;
      const centerY = height / 2 - camera.current.y; // invert Y coordinate

      // 2. Projection engine: project 3D coordinates onto 2D viewport
      const projected = brainParticles.map((p, index) => {
        // Rotation about Y axis
        const ry_x = p.x * cosY - p.z * sinY;
        const ry_z = p.z * cosY + p.x * sinY;
        const ry_y = p.y;

        // Rotation about X axis
        const rx_y = ry_y * cosX - ry_z * sinX;
        const rx_z = ry_z * cosX + ry_y * sinX;

        // Perspective scaling
        const depth = 450;
        const scale = (depth / (depth + rx_z)) * camera.current.zoom;

        return {
          index,
          x: centerX + ry_x * scale * 2.2,
          y: centerY - rx_y * scale * 2.2, // flip visual coordinate
          z: rx_z,
          scale,
          lobeType: p.lobeType,
          baseSize: p.baseSize,
          pulseOffset: p.pulseOffset,
        };
      });

      // Sort nodes based on Z-depth (Painters algorithm for standard rendering correctness)
      projected.sort((a, b) => b.z - a.z);

      const time = Date.now() * 0.005;

      // 3. Shockwave progress animation
      if (shockwave.active) {
        shockwave.progress += 0.035;
        if (shockwave.progress >= 1.0) {
          shockwave.active = false;
        }
      }

      // Draw projected brain particles
      projected.forEach((p) => {
        const timePulse = Math.sin(time * p.baseSize + p.pulseOffset);
        const size = p.baseSize * p.scale * (1 + timePulse * 0.15);
        
        let isNodeActive = false;
        let activeGlow = null;
        let lobeColor = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(100, 110, 130, 0.16)';

        // Color coding active nodes by hovered / active regions
        const focusArea = hoveredNav || activeSection;
        if (focusArea === 'about' && p.lobeType === 'about') {
          isNodeActive = true;
          lobeColor = isDark ? '#a855f7' : '#7b2cbf';
          activeGlow = 'rgba(168, 85, 247, 0.6)';
        } else if (focusArea === 'projects' && p.lobeType === 'projects') {
          isNodeActive = true;
          lobeColor = isDark ? '#ec4899' : '#d90429';
          activeGlow = 'rgba(236, 72, 153, 0.6)';
        } else if (focusArea === 'contact' && p.lobeType === 'contact') {
          isNodeActive = true;
          lobeColor = isDark ? '#00f2fe' : '#00b4d8';
          activeGlow = 'rgba(0, 242, 254, 0.6)';
        } else {
          // Idle lobe colorations with subtle glow ripples
          if (p.lobeType === 'about') {
            lobeColor = isDark ? 'rgba(168, 85, 247, 0.28)' : 'rgba(123, 44, 191, 0.3)';
          } else if (p.lobeType === 'projects') {
            lobeColor = isDark ? 'rgba(236, 72, 153, 0.28)' : 'rgba(217, 4, 41, 0.3)';
          } else if (p.lobeType === 'contact') {
            lobeColor = isDark ? 'rgba(0, 242, 254, 0.28)' : 'rgba(79, 172, 254, 0.3)';
          }
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.closePath();

        if (isNodeActive && isDark) {
          ctx.shadowBlur = 10 * p.scale;
          ctx.shadowColor = activeGlow;
        }
        ctx.fillStyle = lobeColor;
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow immediately
      });

      // 4. Draw Synaptic Grid mesh (connecting close particles)
      ctx.lineWidth = 0.5;
      const maxDistance = 38;
      
      // Look up maps for faster spatial queries
      for (let i = 0; i < projected.length; i += 7) {
        for (let j = i + 1; j < projected.length; j += 9) {
          const p1 = projected[i];
          const p2 = projected[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const connectLimit = maxDistance * ((p1.scale + p2.scale) / 2);
          if (dist < connectLimit) {
            let strokeColor = isDark ? 'rgba(255, 255, 255, 0.025)' : 'rgba(0, 0, 0, 0.025)';
            const focusArea = hoveredNav || activeSection;

            // Highlight connections in active region
            if (focusArea === 'about' && p1.lobeType === 'about' && p2.lobeType === 'about') {
              strokeColor = `rgba(168, 85, 247, ${0.16 * p1.scale})`;
            } else if (focusArea === 'projects' && p1.lobeType === 'projects' && p2.lobeType === 'projects') {
              strokeColor = `rgba(236, 72, 153, ${0.16 * p1.scale})`;
            } else if (focusArea === 'contact' && p1.lobeType === 'contact' && p2.lobeType === 'contact') {
              strokeColor = `rgba(0, 242, 254, ${0.16 * p1.scale})`;
            }

            ctx.strokeStyle = strokeColor;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // 5. Update and render synaptic pulses traversing the grid
      synapticPulses.forEach((pulse) => {
        pulse.progress += pulse.speed;
        
        if (pulse.progress >= 1.0 || pulse.targetIndex === null) {
          pulse.progress = 0;
          pulse.particleIndex = Math.floor(Math.random() * particleCount);
          
          // Find adjacent neighbor node to move towards
          const currentProj = projected.find((p) => p.index === pulse.particleIndex);
          if (currentProj) {
            const neighbors = projected.filter((p) => {
              if (p.index === pulse.particleIndex) return false;
              const dx = p.x - currentProj.x;
              const dy = p.y - currentProj.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              return dist < maxDistance * 2.0;
            });
            if (neighbors.length > 0) {
              pulse.targetIndex = neighbors[Math.floor(Math.random() * neighbors.length)].index;
            } else {
              pulse.targetIndex = Math.floor(Math.random() * particleCount);
            }
          }
        }

        const startNode = projected.find((p) => p.index === pulse.particleIndex);
        const endNode = projected.find((p) => p.index === pulse.targetIndex);

        if (startNode && endNode) {
          // Lerp position
          const px = startNode.x + (endNode.x - startNode.x) * pulse.progress;
          const py = startNode.y + (endNode.y - startNode.y) * pulse.progress;
          const scale = startNode.scale + (endNode.scale - startNode.scale) * pulse.progress;

          ctx.beginPath();
          ctx.arc(px, py, 1.8 * scale, 0, Math.PI * 2);
          ctx.closePath();

          const focusArea = hoveredNav || activeSection;
          let pulseColor = isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.4)';
          if (focusArea === 'about') pulseColor = 'rgba(168, 85, 247, 0.8)';
          if (focusArea === 'projects') pulseColor = 'rgba(236, 72, 153, 0.8)';
          if (focusArea === 'contact') pulseColor = 'rgba(0, 242, 254, 0.8)';

          ctx.fillStyle = pulseColor;
          ctx.fill();
        }
      });

      // 6. Draw Prezi Shockwave Firing Rings
      if (shockwave.active) {
        // Project shockwave 3D coordinates into 2D camera viewport
        const ry_x = shockwave.x * cosY - shockwave.z * sinY;
        const ry_z = shockwave.z * cosY + shockwave.x * sinY;
        const rx_y = shockwave.y * cosX - ry_z * sinX;
        const rx_z = ry_z * cosX + shockwave.y * sinX;

        const depth = 450;
        const scale = (depth / (depth + rx_z)) * camera.current.zoom;
        const px = centerX + ry_x * scale * 2.2;
        const py = centerY - rx_y * scale * 2.2;

        const baseRadius = 80 * scale * camera.current.zoom;
        const radius = baseRadius * shockwave.progress;
        const opacity = 1 - shockwave.progress;

        ctx.strokeStyle = shockwave.color;
        ctx.lineWidth = 4 * (1 - shockwave.progress);
        
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.closePath();
        
        if (isDark) {
          ctx.shadowBlur = 20 * (1 - shockwave.progress);
          ctx.shadowColor = shockwave.color;
        }
        ctx.strokeStyle = shockwave.color.replace('1)', `${opacity})`);
        ctx.stroke();
        ctx.shadowBlur = 0; // reset

        // Draw outer ring
        ctx.strokeStyle = shockwave.color.replace('1)', `${opacity * 0.4})`);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(px, py, radius * 1.5, 0, Math.PI * 2);
        ctx.closePath();
        ctx.stroke();
      }

      // 7. Update and Draw Sparks particles
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        
        // Update physics
        s.x += s.vx;
        s.y += s.vy;
        s.z += s.vz;
        s.alpha -= s.decay;

        // Friction slowing sparks down
        s.vx *= 0.95;
        s.vy *= 0.95;
        s.vz *= 0.95;

        // Project spark
        const ry_x = s.x * cosY - s.z * sinY;
        const ry_z = s.z * cosY + s.x * sinY;
        const rx_y = s.y * cosX - ry_z * sinX;
        const rx_z = ry_z * cosX + s.y * sinX;

        const depth = 450;
        const scale = (depth / (depth + rx_z)) * camera.current.zoom;
        const px = centerX + ry_x * scale * 2.2;
        const py = centerY - rx_y * scale * 2.2;

        if (s.alpha <= 0 || px < 0 || px > width || py < 0 || py > height) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(px, py, s.size * scale * s.alpha, 0, Math.PI * 2);
        ctx.closePath();

        if (isDark) {
          ctx.shadowBlur = 8 * s.alpha;
          ctx.shadowColor = s.color;
        }
        ctx.fillStyle = s.color.replace('rgba', 'rgba').replace('1)', `${s.alpha})`);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeSection, hoveredNav]);

  // Handle Drag Interactions to explore the brain structure
  const handleMouseDown = (e) => {
    mouseState.current.isDown = true;
    mouseState.current.startX = e.clientX;
    mouseState.current.startY = e.clientY;
  };

  const handleMouseMove = (e) => {
    if (!mouseState.current.isDown) return;
    const dx = e.clientX - mouseState.current.startX;
    const dy = e.clientY - mouseState.current.startY;

    mouseState.current.dragX = dx;
    mouseState.current.dragY = dy;

    mouseState.current.startX = e.clientX;
    mouseState.current.startY = e.clientY;
  };

  const handleMouseUpOrLeave = () => {
    mouseState.current.isDown = false;
  };

  return (
    <FullscreenCanvas
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
    />
  );
}
