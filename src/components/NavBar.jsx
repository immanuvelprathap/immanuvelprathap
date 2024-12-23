import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from "react-icons/md"

const NavBarStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  color: var(--orange);
  background: var(--dark-bg);
 
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--gray-2);
      }
    }
    a {
      display: inline-block;
      font-family: 'Roboto Mono', monospace;;
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--orange);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
  .mobile-menu-icon{
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
  }
  .closeNavIcon{
    display: none;
  }
  @media only screen and (max-width: 768px){
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems{
      --top: 1rem;
      transition: .3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon{
      display: block;
      width: 3rem;
      margin: 0 0 0 auto;
      cursor: pointer;
      *{
        pointer-events: none;
      }
    }
    li{
      display: block;
      margin-bottom: 1rem;
    }

    }
  }
`;

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavBarStyles>
      <div className="mobile-menu-icon"
       onClick={()=> setShowNav(!showNav)}
       role="button"
       onKeyDown={()=> setShowNav(!showNav)}
       tabIndex={0} 
      >
        <MdMenu></MdMenu>
      </div>  
      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div className="closeNavIcon"
         onClick={()=> setShowNav(!showNav)}
         role="button"
         onKeyDown={()=> setShowNav(!showNav)}
         tabIndex={0} 
        >
          <MdClose></MdClose>
        </div> 
        <li>
          <NavLink 
           to="/"
           onClick={()=> setShowNav(!showNav)}
           role="button"
           onKeyDown={()=> setShowNav(!showNav)}
           tabIndex={0}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
           to="/about"
           onClick={()=> setShowNav(!showNav)}
           role="button"
           onKeyDown={()=> setShowNav(!showNav)}
           tabIndex={0}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
           to="/projects"
           onClick={()=> setShowNav(!showNav)}
           role="button"
           onKeyDown={()=> setShowNav(!showNav)}
           tabIndex={0}
          >
           Projects
          </NavLink>
        </li>
        <li>
          <NavLink 
           to="/contact"
           onClick={()=> setShowNav(!showNav)}
           role="button"
           onKeyDown={()=> setShowNav(!showNav)}
           tabIndex={0}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </NavBarStyles>
  );
}

/*<div>
<ul>
    <li>
        <NavLink to="/">Home</NavLink>
    </li>
    <li>
       <NavLink to="/about">About</NavLink> 
    </li>
    <li>
        <NavLink to="/projects">Projects</NavLink>
    </li>
    <li>
        <NavLink to="/Contact">Contact</NavLink>
    </li>
</ul>
</div>*/
