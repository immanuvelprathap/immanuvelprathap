import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  }

  :root {
    /* Monochrome Palette - Dark Mode (Default) */
    --bg-color: #0a0a0c;
    --panel-bg: #141416;
    --border-color: #222225;
    --text-primary: #ffffff;
    --text-secondary: #a0a0a5;
    --text-muted: #55555c;
    
    /* Legacy variables mapping to prevent breaking old styled-components */
    --dark-bg: var(--bg-color);
    --deep-dark: var(--panel-bg);
    --gray-2: var(--border-color);
    --white: var(--text-primary);
    --gray-1: var(--text-secondary);
    --black: var(--bg-color);
    --orange: var(--text-primary);
    --orange-2: var(--text-secondary);
    
    /* Typography Font Sizes */
    --font-mono: 'Space Mono', 'Roboto Mono', monospace;
    --font-sans: 'Outfit', 'Inter', sans-serif;
  }

  [data-theme='light'] {
    /* Monochrome Palette - Light Mode */
    --bg-color: #f7f7f9;
    --panel-bg: #ffffff;
    --border-color: #e5e5eb;
    --text-primary: #0a0a0c;
    --text-secondary: #5a5a60;
    --text-muted: #a0a0a5;
    
    --white: var(--text-primary);
    --black: #ffffff;
  }

  html, body {
    font-size: 10px;
    font-family: var(--font-sans);
    background-color: var(--bg-color);
    color: var(--text-primary);
    overflow-x: hidden;
    scroll-behavior: smooth;
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
    filter: grayscale(100%) contrast(1.1) brightness(0.95);
    transition: filter 0.4s ease, transform 0.4s ease, opacity 0.4s ease;
  }

  img:hover {
    filter: grayscale(100%) contrast(1.25) brightness(1.05);
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

  /* Fine mechanical grid border styling */
  .grid-border {
    position: relative;
  }
  .grid-border::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--border-color);
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
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--text-muted);
  }
`;

export default GlobalStyles;
