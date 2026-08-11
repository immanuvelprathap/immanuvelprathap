import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #030307;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  color: var(--glow-cyan);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);

  &.fade-out {
    opacity: 0;
    transform: scale(1.05);
    pointer-events: none;
  }

  .loader-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    max-width: 400px;
    width: 80%;
  }

  .ring-container {
    position: relative;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ring-outer {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px dashed rgba(0, 242, 254, 0.2);
    border-radius: 50%;
    animation: spinHUD 4s linear infinite;
  }

  .ring-inner {
    position: absolute;
    width: 80%;
    height: 80%;
    border: 2px solid transparent;
    border-top: 2px solid var(--glow-purple);
    border-bottom: 2px solid var(--glow-cyan);
    border-radius: 50%;
    animation: spinHUDReverse 2s cubic-bezier(0.68, -0.6, 0.32, 1.6) infinite;
  }

  .percentage {
    font-size: 2.2rem;
    font-weight: bold;
    color: var(--text-primary);
    text-shadow: 0 0 10px rgba(0, 242, 254, 0.5);
  }

  .terminal-readout {
    width: 100%;
    height: 90px;
    background-color: rgba(0, 0, 0, 0.4);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 1.2rem;
    font-size: 1.1rem;
    color: var(--text-secondary);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    overflow: hidden;
  }

  .log-line {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
    span {
      color: var(--glow-cyan);
      margin-right: 0.8rem;
    }
  }
`;

export default function IntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const [isFading, setIsFading] = useState(false);

  const logDatabase = [
    'SYSTEM OK :: DETECTING HARDWARE...',
    'CORE_ENG :: ESTABLISHING WEBGL CANVAS...',
    'DATA_ENG :: CONNECTING MYSQL PIPELINES...',
    'AI_CLINIC :: TRANSLATING CNN BRAIN MAPS...',
    'RESOLVED :: MEDICAL DATA PACKS LOADED.',
    'COMPILING :: IMMANUVEL PORTFOLIO...',
    'STATUS :: PORTFOLIO ONLINE.'
  ];

  useEffect(() => {
    let currentProgress = 0;
    let logIndex = 0;

    const progressInterval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 8) + 4;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(progressInterval);
        
        // Let it display 100% for a moment, then fade out
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800);
        }, 400);
      }
      setProgress(currentProgress);
    }, 80);

    const logInterval = setInterval(() => {
      if (logIndex < logDatabase.length) {
        setLogs((prev) => [...prev, logDatabase[logIndex]]);
        logIndex++;
      } else {
        clearInterval(logInterval);
      }
    }, 300);

    return () => {
      clearInterval(progressInterval);
      clearInterval(logInterval);
    };
  }, [onComplete]);

  return (
    <LoaderOverlay className={isFading ? 'fade-out' : ''}>
      <div className="loader-content">
        <div className="ring-container">
          <div className="ring-outer" />
          <div className="ring-inner" />
          <div className="percentage">{progress}%</div>
        </div>
        <div className="terminal-readout">
          {logs.slice(-3).map((log, index) => (
            <div className="log-line" key={index}>
              <span>&gt;</span> {log}
            </div>
          ))}
        </div>
      </div>
    </LoaderOverlay>
  );
}
