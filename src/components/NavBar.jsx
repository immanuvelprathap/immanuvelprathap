import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu, MdWbSunny, MdNightsStay } from "react-icons/md";

const NavBarStyles = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 0;
  background: rgba(var(--bg-color), 0.8);
  background-color: var(--panel-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);

  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }

  .logo {
    font-family: 'Outfit', sans-serif;
    font-weight: 800;
    font-size: 2.2rem;
    letter-spacing: -0.05em;
    color: var(--text-primary);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    span {
      color: var(--text-secondary);
      font-weight: 300;
      margin-left: 0.3rem;
    }
  }

  .nav-menu {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    li {
      border-radius: 6px;
      transition: background-color 0.2s ease;
      &:hover {
        background-color: var(--border-color);
      }
    }
    
    a {
      display: inline-block;
      padding: 0.8rem 1.6rem;
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--text-secondary);
      transition: color 0.2s ease;
      
      &:hover {
        color: var(--text-primary);
      }
    }
    
    .active {
      color: var(--text-primary);
      font-weight: 600;
      background-color: var(--border-color);
      border-radius: 6px;
    }
  }

  .controls {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .theme-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    background-color: var(--panel-bg);
    cursor: pointer;
    font-size: 2rem;
    transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
    
    &:hover {
      background-color: var(--border-color);
      transform: scale(1.05);
    }
  }

  .mobile-menu-icon {
    display: none;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    cursor: pointer;
    font-size: 2.2rem;
    outline: none;
    
    &:hover {
      background-color: var(--border-color);
    }
  }

  .closeNavIcon {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    padding: 1.2rem 0;

    .mobile-menu-icon {
      display: flex;
    }

    .nav-menu {
      position: absolute;
      top: 7rem;
      right: 5%;
      width: 90%;
      max-width: 280px;
      background-color: var(--panel-bg);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 2rem;
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
      transform: translateY(-20px);
      opacity: 0;
      pointer-events: none;
      transition: transform 0.3s ease, opacity 0.3s ease;
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);

      &.show {
        transform: translateY(0);
        opacity: 1;
        pointer-events: auto;
      }
    }

    ul {
      flex-direction: column;
      width: 100%;
      gap: 1rem;
      
      li, a {
        width: 100%;
      }
      a {
        padding: 1rem 1.5rem;
      }
    }

    .controls {
      width: 100%;
      justify-content: space-between;
      border-top: 1px solid var(--border-color);
      padding-top: 1.5rem;
    }
  }
`;

export default function NavBar({ theme, toggleTheme }) {
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
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about"
                onClick={() => setShowNav(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects"
                onClick={() => setShowNav(false)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact"
                onClick={() => setShowNav(false)}
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
