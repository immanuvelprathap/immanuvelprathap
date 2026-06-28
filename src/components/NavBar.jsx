import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu, MdWbSunny, MdNightsStay } from "react-icons/md";

const NavBarStyles = styled.header`
  position: fixed;
  z-index: 100;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  padding: 0.8rem 2.5rem;
  background: var(--panel-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border-color);
  border-radius: 50px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.05);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: var(--border-hover);
    box-shadow: 0 20px 40px rgba(0, 242, 254, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.08);
  }

  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .logo {
    font-family: 'Outfit', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    letter-spacing: -0.03em;
    color: var(--text-primary);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    background: var(--grad-hybrid);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    span {
      font-weight: 300;
      margin-left: 0.2rem;
    }
  }

  .nav-menu {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    
    li {
      border-radius: 20px;
      transition: background-color 0.2s ease;
      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }
    }
    
    a {
      display: inline-block;
      padding: 0.8rem 1.8rem;
      font-size: 1.4rem;
      font-weight: 500;
      color: var(--text-secondary);
      transition: color 0.2s ease, transform 0.2s ease;
      
      &:hover {
        color: var(--text-primary);
        transform: translateY(-1px);
      }
    }
    
    .active {
      color: var(--text-primary);
      font-weight: 600;
      background-color: rgba(0, 242, 254, 0.1);
      border-radius: 20px;
      border: 1px solid rgba(0, 242, 254, 0.2);
      box-shadow: 0 0 15px rgba(0, 242, 254, 0.08);
    }
  }

  .controls {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  .theme-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    background-color: rgba(255, 255, 255, 0.03);
    cursor: pointer;
    font-size: 1.8rem;
    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.2s ease, border-color 0.2s ease;
    
    &:hover {
      background-color: rgba(0, 242, 254, 0.08);
      border-color: var(--glow-cyan);
      transform: rotate(180deg) scale(1.1);
      box-shadow: 0 0 10px rgba(0, 242, 254, 0.2);
    }
  }

  .mobile-menu-icon {
    display: none;
    align-items: center;
    justify-content: center;
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    cursor: pointer;
    font-size: 2rem;
    outline: none;
    
    &:hover {
      background-color: var(--border-color);
      border-color: var(--glow-cyan);
    }
  }

  .closeNavIcon {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    top: 1rem;
    padding: 0.6rem 1.5rem;
    border-radius: 30px;

    .mobile-menu-icon {
      display: flex;
    }

    .nav-menu {
      position: absolute;
      top: 6rem;
      right: 0;
      width: 100%;
      max-width: 250px;
      background-color: var(--panel-bg);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      padding: 2rem;
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
      transform: translateY(-20px) scale(0.95);
      opacity: 0;
      pointer-events: none;
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
      box-shadow: 0 15px 35px rgba(0,0,0,0.3);

      &.show {
        transform: translateY(0) scale(1);
        opacity: 1;
        pointer-events: auto;
      }
    }

    ul {
      flex-direction: column;
      width: 100%;
      gap: 0.8rem;
      
      li, a {
        width: 100%;
      }
      a {
        padding: 0.8rem 1.2rem;
      }
    }

    .controls {
      width: 100%;
      justify-content: space-between;
      border-top: 1px solid var(--border-color);
      padding-top: 1.2rem;
    }
  }
`;

export default function NavBar({ theme, toggleTheme, setHoveredNav }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <NavBarStyles>
      <div className="nav-container">
        <NavLink to="/" className="logo">
          Prathap<span>.in</span>
        </NavLink>

        <div className={`nav-menu ${showNav ? 'show' : ''}`}>
          <ul>
            <li>
              <NavLink 
                to="/" 
                end
                onClick={() => setShowNav(false)}
                onMouseEnter={() => setHoveredNav && setHoveredNav('home')}
                onMouseLeave={() => setHoveredNav && setHoveredNav(null)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about"
                onClick={() => setShowNav(false)}
                onMouseEnter={() => setHoveredNav && setHoveredNav('about')}
                onMouseLeave={() => setHoveredNav && setHoveredNav(null)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects"
                onClick={() => setShowNav(false)}
                onMouseEnter={() => setHoveredNav && setHoveredNav('projects')}
                onMouseLeave={() => setHoveredNav && setHoveredNav(null)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact"
                onClick={() => setShowNav(false)}
                onMouseEnter={() => setHoveredNav && setHoveredNav('contact')}
                onMouseLeave={() => setHoveredNav && setHoveredNav(null)}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="controls">
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <MdWbSunny /> : <MdNightsStay />}
            </button>
          </div>
        </div>

        <div 
          className="mobile-menu-icon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setShowNav(!showNav);
          }}
          aria-label="Toggle Navigation Menu"
        >
          {showNav ? <MdClose /> : <MdMenu />}
        </div>
      </div>
    </NavBarStyles>
  );
}
