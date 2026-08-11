import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 100%;
  background: var(--panel-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2.5rem;
  font-family: var(--font-mono);
  color: var(--text-secondary);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 242, 254, 0.02) 0%, transparent 100%);
    pointer-events: none;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 242, 254, 0.1);
    padding-bottom: 1.2rem;
  }

  .title {
    font-size: 1.2rem;
    color: var(--text-primary);
    font-weight: bold;
    letter-spacing: 0.1em;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .pulse-dot {
    width: 8px;
    height: 8px;
    background-color: var(--glow-cyan);
    border-radius: 50%;
    box-shadow: 0 0 8px var(--glow-cyan);
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.3;
      transform: scale(0.8);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
    }
  }

  .status {
    font-size: 1.1rem;
    color: var(--glow-purple);
  }

  .readouts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .readout-item {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.03);
    padding: 1rem 1.2rem;
    border-radius: 6px;
  }

  .label {
    font-size: 0.9rem;
    color: var(--text-muted);
    text-transform: uppercase;
  }

  .value {
    font-size: 1.5rem;
    color: var(--text-primary);
    font-weight: bold;
  }

  .chart-container {
    height: 110px;
    width: 100%;
    position: relative;
    border: 1px solid rgba(0, 242, 254, 0.08);
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }

  .grid-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(rgba(0, 242, 254, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 242, 254, 0.03) 1px, transparent 1px);
    background-size: 10px 10px;
  }

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .activity-log {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    font-size: 1rem;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    padding: 1.2rem;
    height: 75px;
    overflow: hidden;
  }

  .log-row {
    display: flex;
    gap: 1rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    .time {
      color: var(--glow-purple);
    }
    .msg {
      color: var(--text-secondary);
    }
  }
`;

export default function TelemetryCard() {
  const canvasRef = useRef(null);
  const [load, setLoad] = useState(42.5);
  const [synapses, setSynapses] = useState(1402);
  const [signals, setSignals] = useState('OPTIMAL');
  const [logs, setLogs] = useState([
    { time: '11:28:02', text: 'INITIALIZED COGNITIVE MODEL' },
    { time: '11:28:15', text: 'SYNAPTIC PORTS ENGAGED' },
    { time: '11:28:44', text: 'WEBGL MESH LOADED: 700 NODES' }
  ]);

  useEffect(() => {
    // Dynamic values simulation
    const interval = setInterval(() => {
      setLoad((prev) => {
        const next = prev + (Math.random() * 4 - 2);
        return Math.max(30, Math.min(85, parseFloat(next.toFixed(1))));
      });
      setSynapses((prev) => prev + Math.floor(Math.random() * 5 - 2));
      
      if (Math.random() < 0.15) {
        const statuses = ['OPTIMAL', 'SYNC_ACTIVE', 'COMPUTING', 'ANALYZING'];
        setSignals(statuses[Math.floor(Math.random() * statuses.length)]);
      }

      if (Math.random() < 0.2) {
        const messages = [
          'NEURAL WAVEFORM SCANNING...',
          'INTERPOLATING CAMERA COORDS',
          'EMITTING SYNAPSE PULSES',
          'SPARK VECTOR COMPILING',
          'RECALIBRATING SHOCKWAVES',
          'UPDATING RADAR READOUT'
        ];
        const now = new Date();
        const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
        setLogs((prev) => [
          ...prev.slice(-2),
          { time: timeStr, text: messages[Math.floor(Math.random() * messages.length)] }
        ]);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Wave animation canvas
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let frameId;
    let offset = 0;

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      offset += 0.05;

      // Draw standard sine EEG wave
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.45)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      
      const width = canvas.width;
      const height = canvas.height;

      for (let x = 0; x < width; x++) {
        // Compose multiple sine waves for brain wave simulation
        const y = height / 2 + 
          Math.sin(x * 0.03 + offset) * 15 + 
          Math.sin(x * 0.08 - offset * 1.5) * 6 +
          Math.cos(x * 0.015 + offset * 0.5) * 10;
        
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw secondary purple pulse wave
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.35)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      for (let x = 0; x < width; x++) {
        const y = height / 2 + 
          Math.sin(x * 0.02 - offset * 0.8) * 12 + 
          Math.cos(x * 0.07 + offset * 1.2) * 8;
        
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Scanline bar
      const barX = (offset * 120) % (width + 100) - 50;
      const grad = ctx.createLinearGradient(barX - 20, 0, barX + 20, 0);
      grad.addColorStop(0, 'rgba(0, 242, 254, 0)');
      grad.addColorStop(0.5, 'rgba(0, 242, 254, 0.15)');
      grad.addColorStop(1, 'rgba(0, 242, 254, 0)');
      
      ctx.fillStyle = grad;
      ctx.fillRect(barX - 20, 0, 40, height);

      frameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => resize();
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <CardWrapper>
      <div className="header">
        <div className="title">
          <div className="pulse-dot" />
          NEURO_TELEMETRY::OK
        </div>
        <div className="status">AI_CLINICAL_COGNITIVE</div>
      </div>

      <div className="readouts">
        <div className="readout-item">
          <span className="label">Neural Core Load</span>
          <span className="value">{load}%</span>
        </div>
        <div className="readout-item">
          <span className="label">Active Synapses</span>
          <span className="value">{synapses}</span>
        </div>
        <div className="readout-item">
          <span className="label">Signal Integrity</span>
          <span className="value">{signals}</span>
        </div>
        <div className="readout-item">
          <span className="label">Medical Sector</span>
          <span className="value">LOBE_ACTIVE</span>
        </div>
      </div>

      <div className="chart-container">
        <div className="grid-bg" />
        <canvas ref={canvasRef} />
      </div>

      <div className="activity-log">
        {logs.map((log, i) => (
          <div className="log-row" key={i}>
            <span className="time">[{log.time}]</span>
            <span className="msg">{log.text}</span>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
}
