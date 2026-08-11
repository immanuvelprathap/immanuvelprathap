import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                color 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  :root {
    /* Cybernetic Obsidian Palette - Dark Mode (Default) */
    --bg-color: #030307;
    --panel-bg: rgba(10, 10, 16, 0.65);
    --border-color: rgba(0, 242, 254, 0.12);
    --border-hover: rgba(0, 242, 254, 0.35);
    --text-primary: #ffffff;
    --text-secondary: #a2a8b9;
    --text-muted: #52596d;
    
    /* Neon glow color points */
    --glow-cyan: #00f2fe;
    --glow-blue: #4facfe;
    --glow-purple: #a855f7;
    --glow-pink: #ec4899;
    
    /* Gradients */
    --grad-data: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
    --grad-ai: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
    --grad-hybrid: linear-gradient(135deg, #00f2fe 0%, #a855f7 100%);
    
    /* Legacy variables mapping to prevent breaking old styled-components */
    --dark-bg: var(--bg-color);
    --deep-dark: var(--panel-bg);
    --gray-2: var(--border-color);
    --white: var(--text-primary);
    --gray-1: var(--text-secondary);
    --black: var(--bg-color);
    
    /* Typography Font Sizes */
    --font-mono: 'Space Mono', 'Roboto Mono', monospace;
    --font-sans: 'Outfit', 'Inter', sans-serif;
  }

  [data-theme='light'] {
    /* Cybernetic Light Theme - Glassmorphism */
    --bg-color: #f3f5f9;
    --panel-bg: rgba(255, 255, 255, 0.7);
    --border-color: rgba(79, 172, 254, 0.15);
    --border-hover: rgba(79, 172, 254, 0.4);
    --text-primary: #0b0c10;
    --text-secondary: #4a5568;
    --text-muted: #8a99ad;
    
    --white: var(--text-primary);
    --black: #ffffff;
  }

  /* 3D Cybernetic Entry animations */
  @keyframes entry3D {
    0% {
      opacity: 0;
      transform: translateY(35px) rotateX(-10deg) scale(0.97);
    }
    100% {
      opacity: 1;
      transform: translateY(0) rotateX(0deg) scale(1);
    }
  }

  .animate-entry {
    opacity: 0;
    animation: entry3D 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .delay-1 { animation-delay: 0.1s; }
  .delay-2 { animation-delay: 0.22s; }
  .delay-3 { animation-delay: 0.35s; }
  .delay-4 { animation-delay: 0.48s; }
  .delay-5 { animation-delay: 0.6s; }
  .delay-6 { animation-delay: 0.75s; }


  html, body {
    font-size: 10px;
    font-family: var(--font-sans);
    background-color: var(--bg-color);
    color: var(--text-primary);
    overflow-x: hidden;
    scroll-behavior: smooth;
    /* Enable global 3D environment perspective */
    perspective: 1200px;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img, svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(80%) contrast(1.1) brightness(0.95);
    transition: filter 0.4s ease, transform 0.4s ease, opacity 0.4s ease;
  }

  img:hover {
    filter: grayscale(20%) contrast(1.2) brightness(1.05);
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
    background: none;
    color: inherit;
    font-family: inherit;
  }

  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }

  /* Custom styling for scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: var(--bg-color);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--border-color);
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.05);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--text-muted);
  }

  /* Keyframe Animations for Creative 3D/Hologram Elements */
  @keyframes pulseGlow {
    0%, 100% {
      opacity: 0.15;
      transform: scale(1);
    }
    50% {
      opacity: 0.35;
      transform: scale(1.05);
    }
  }

  @keyframes floatSlow {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-8px) rotate(1deg);
    }
  }

  @keyframes spinHUD {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spinHUDReverse {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes scanline {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }

`;

export default GlobalStyles;
