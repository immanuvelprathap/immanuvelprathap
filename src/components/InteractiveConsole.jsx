import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const ConsoleStyles = styled.div`
  background-color: var(--panel-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  font-family: var(--font-mono);
  font-size: 1.3rem;
  line-height: 1.5;
  color: var(--text-primary);
  text-align: left;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .console-header {
    background-color: var(--border-color);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--border-color);
    
    .dots {
      display: flex;
      gap: 0.6rem;
      .dot {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        background-color: var(--text-muted);
        opacity: 0.6;
      }
    }
    .title {
      font-size: 1.1rem;
      color: var(--text-secondary);
      font-weight: 500;
    }
    .status {
      font-size: 1rem;
      color: var(--text-muted);
    }
  }

  .console-body {
    padding: 2rem;
    height: 250px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: rgba(10, 10, 12, 0.6);
  }

  .output-line {
    white-space: pre-wrap;
    word-break: break-all;
    
    &.system {
      color: var(--text-secondary);
    }
    &.command {
      color: var(--text-primary);
      font-weight: bold;
    }
    &.response {
      color: var(--text-secondary);
    }
  }

  .input-line {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    
    .prompt {
      color: var(--text-secondary);
      white-space: nowrap;
    }
    
    input {
      background: transparent;
      border: none;
      outline: none;
      color: var(--text-primary);
      font-family: inherit;
      font-size: inherit;
      flex-grow: 1;
      width: 100%;
    }
  }

  .console-suggestions {
    padding: 1.2rem 2rem;
    background-color: var(--panel-bg);
    border-top: 1px solid var(--border-color);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    
    span {
      font-size: 1.1rem;
      color: var(--text-secondary);
    }

    button {
      background-color: var(--border-color);
      border: 1px solid var(--border-color);
      padding: 0.4rem 1rem;
      border-radius: 4px;
      font-size: 1.1rem;
      font-family: inherit;
      color: var(--text-primary);
      transition: background-color 0.2s ease, border-color 0.2s ease;
      
      &:hover {
        background-color: var(--text-primary);
        color: var(--bg-color);
        border-color: var(--text-primary);
      }
    }
  }
`;

export default function InteractiveConsole() {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Initialize Prathap Shell v1.0.0...' },
    { type: 'system', text: 'Type "help" or click suggestions below to explore.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCommand = (cmdText) => {
    const trimmedCmd = cmdText.trim().toLowerCase();
    if (!trimmedCmd) return;

    const newHistory = [...history, { type: 'command', text: `visitor@prathap.in:~$ ${cmdText}` }];

    let responseText = '';
    switch (trimmedCmd) {
      case 'help':
        responseText = `Available Commands:
  about       - Brief introduction about me
  skills      - Technical expertise grid
  experience  - Professional journey timeline
  education   - Academic background
  clear       - Clear screen console`;
        break;
      case 'about':
        responseText = `Immanuvel Prathap S
---------------------------------------
Data Engineer & AI Researcher based in Bern, Switzerland. 
Driven by data analytics, automation, and optimizing medical solutions using AI.
Team player with 3+ years of professional engineering experience.`;
        break;
      case 'skills':
        responseText = `Technical Skillsets:
---------------------------------------
Languages   : Python, SQL (MySQL), PHP, HTML, CSS, JavaScript
Frameworks  : Django, React.js, Swiper, Styled-Components
Data Eng.   : ETL Pipelines, Informatica, Data Warehousing, Modeling
ML / AI     : CNN, RNN, OpenCV, LSTM, Clustering, OCR, NLP
Tools       : Power BI, Tableau, Git, Docker, Matlab, CATIA V5`;
        break;
      case 'experience':
        responseText = `Professional Experience:
---------------------------------------
2025 - Present : Research Masters in AI in Medicine (Univ. of Bern)
2023 - 2025   : Senior Data Engineer (Schneider Electric / Cigres)
2023 - 2023   : Senior Data Engineer (Schneider Electric / Cignex)
2020 - 2022   : Data Engineer (EdgeRock Software Solutions)
2017 - 2019   : Application Development Analyst (Esoftcube Tech)`;
        break;
      case 'education':
        responseText = `Academic Qualifications:
---------------------------------------
- Research Masters in AI in Medicine
  University of Bern, Switzerland (2025 - Present)
- Bachelor of Technology in Mechanical Engineering
  Jain University, Bangalore, India`;
        break;
      case 'clear':
        setHistory([]);
        setInputValue('');
        return;
      default:
        responseText = `Command not recognized: "${trimmedCmd}". Type "help" for a list of available commands.`;
    }

    setHistory([...newHistory, { type: 'response', text: responseText }]);
    setInputValue('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputValue);
  };

  return (
    <ConsoleStyles onClick={focusInput}>
      <div className="console-header">
        <div className="dots">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
        <div className="title">sh - visitor@prathap.in</div>
        <div className="status">active</div>
      </div>
      <div className="console-body" ref={bodyRef}>
        {history.map((line, idx) => (
          <div key={idx} className={`output-line ${line.type}`}>
            {line.text}
          </div>
        ))}
        <form onSubmit={handleSubmit} className="input-line">
          <span className="prompt">visitor@prathap.in:~$</span>
          <input
            type="text"
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            aria-label="Terminal Input"
          />
        </form>
      </div>
      <div className="console-suggestions">
        <span>Quick Run:</span>
        {['about', 'skills', 'experience', 'education', 'clear'].map((cmd) => (
          <button key={cmd} onClick={() => handleCommand(cmd)}>
            {cmd}
          </button>
        ))}
      </div>
    </ConsoleStyles>
  );
}
