import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/Hero.jpg';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import PText from './PText';
import InteractiveConsole from './InteractiveConsole';

const HeroStyles = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 12rem 0 8rem 0;
  overflow: hidden;

  /* Backdrop outlined name */
  .hero__backdrop {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Outfit', sans-serif;
    font-size: 15vw;
    font-weight: 900;
    color: transparent;
    -webkit-text-stroke: 1px var(--border-color);
    white-space: nowrap;
    pointer-events: none;
    z-index: 1;
    text-transform: uppercase;
  }

  .hero__container {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 6rem;
    align-items: center;
    position: relative;
    z-index: 2;
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }

  .hero__left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero__img-wrapper {
    position: relative;
    width: 100%;
    max-width: 380px;
    aspect-ratio: 4/5;
    background-color: var(--panel-bg);
    border: 1px solid var(--border-color);
    box-shadow: 15px 15px 0 var(--border-color);
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .hero__right {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .hero__intro {
    font-family: var(--font-mono);
    font-size: 1.4rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }

  .hero__name {
    font-family: 'Outfit', sans-serif;
    font-size: 5.5rem;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.04em;
    color: var(--text-primary);
  }

  .hero__desc {
    .para {
      font-size: 1.6rem;
      line-height: 1.6;
      color: var(--text-secondary);
      max-width: 500px;
    }
  }

  .hero__actions {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .hero__social {
    position: absolute;
    left: 3rem;
    bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    z-index: 5;
    
    .social-indicator {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      
      p {
        font-size: 1.2rem;
        transform: rotate(90deg) translateY(-20px);
        color: var(--text-secondary);
        text-transform: uppercase;
      }
      
      img {
        width: 1.2rem;
        filter: invert(var(--theme-invert, 0));
      }
    }
    
    ul {
      display: flex;
      flex-direction: column;
      gap: 5rem;
      margin-top: 2rem;
      
      li a {
        font-family: var(--font-mono);
        font-size: 1.2rem;
        color: var(--text-secondary);
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        transition: color 0.2s ease;
        
        &:hover {
          color: var(--text-primary);
        }
      }
    }
  }

  .hero__scrollDown {
    position: absolute;
    right: 3rem;
    bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    z-index: 5;
    
    p {
      font-size: 1.2rem;
      writing-mode: vertical-rl;
      color: var(--text-secondary);
      text-transform: uppercase;
    }
    
    img {
      width: 1.2rem;
      animation: bounce 2s infinite;
      filter: invert(var(--theme-invert, 0));
    }
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-8px);
    }
    60% {
      transform: translateY(-4px);
    }
  }

  @media only screen and (max-width: 960px) {
    .hero__backdrop {
      font-size: 18vw;
    }
    .hero__container {
      grid-template-columns: 1fr;
      gap: 5rem;
      text-align: center;
      justify-items: center;
    }
    .hero__right {
      align-items: center;
    }
    .hero__desc .para {
      margin: 0 auto;
    }
    .hero__img-wrapper {
      max-width: 320px;
    }
    .hero__social, .hero__scrollDown {
      display: none;
    }
  }

  @media only screen and (max-width: 580px) {
    padding-top: 10rem;
    .hero__name {
      font-size: 4rem;
    }
  }
`;

export default function Hero() {
  return (
    <HeroStyles>
      <div className="hero__backdrop">Prathap</div>
      <div className="hero__container">
        <div className="hero__left">
          <div className="hero__img-wrapper">
            <img src={HeroImg} alt="Immanuvel Prathap S" />
          </div>
        </div>
        <div className="hero__right">
          <span className="hero__intro">Hello, I am</span>
          <h1 className="hero__name">Immanuvel Prathap</h1>
          <div className="hero__desc">
            <PText>
              I am a Senior Data Engineer & AI Researcher in Medicine with experience demonstrating ability to deliver valuable insights via Data Analytics and Advanced data-driven methods. Always eager to learn additional skills and solve complex challenges.
            </PText>
          </div>
          <div className="hero__actions">
            <Button btnText="View Projects" btnLink="/projects" />
            <Button btnText="More About Me" btnLink="/about" outline />
          </div>
          <InteractiveConsole />
        </div>
      </div>

      <div className="hero__social">
        <div className="social-indicator">
          <p>Follow</p>
          <img src={SocialMediaArrow} alt="Social indicator arrow" />
        </div>
        <ul>
          <li>
            <a href="https://github.com/immanuvelprathap" target="_blank" rel="noreferrer">
              Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/immanuvel-prathap-/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ImmanuvelPrath1" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </li>
        </ul>
      </div>

      <div className="hero__scrollDown">
        <p>Scroll</p>
        <img src={ScrollDownArrow} alt="Scroll down indicator" />
      </div>
    </HeroStyles>
  );
}