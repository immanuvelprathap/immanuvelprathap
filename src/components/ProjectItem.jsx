import React from 'react';
import styled from 'styled-components';
import ProjectImg from '../assets/images/projectImg.png';
import ThreeDCard from './ThreeDCard';

const ProjectItemStyles = styled.div`
  background-color: var(--panel-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(0, 242, 254, 0.35);
    
    .projectItem__img img {
      transform: scale(1.05);
      filter: grayscale(0%) contrast(1.1) brightness(1.05);
    }

    .projectItem__title {
      background: var(--grad-hybrid);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .projectItem__img {
    width: 100%;
    height: 220px;
    overflow: hidden;
    display: block;
    border-bottom: 1px solid var(--border-color);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(180deg, transparent 60%, rgba(3, 3, 7, 0.4) 100%);
      pointer-events: none;
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
    }
  }

  .projectItem__info {
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 1.5rem;
  }

  .projectItem__title {
    font-family: 'Outfit', sans-serif;
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--text-primary);
    transition: color 0.3s ease;
  }

  .projectItem__desc {
    font-size: 1.4rem;
    line-height: 1.6;
    color: var(--text-secondary);
    flex-grow: 1;
  }

  .projectButton {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    font-family: var(--font-mono);
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--glow-cyan);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: auto;
    align-self: flex-start;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s ease, gap 0.2s ease, color 0.2s ease;
    
    &:hover {
      border-color: var(--glow-cyan);
      color: var(--text-primary);
      gap: 1.2rem;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  link,
}) {
  return (
    <ThreeDCard maxTilt={12} scale={1.03} style={{ height: '100%', borderRadius: '8px' }}>
      <ProjectItemStyles>
        <a 
          href={link || '#'} 
          target={link ? "_blank" : "_self"} 
          rel="noreferrer" 
          className="projectItem__img"
        >
          <img src={img} alt={title} />
        </a>
        <div className="projectItem__info">
          <h3 className="projectItem__title">{title}</h3>
          <p className="projectItem__desc">{desc}</p>
          {link && (
            <a 
              className="projectButton" 
              target="_blank" 
              rel="noreferrer" 
              href={link}
            >
              Explore Project <span>→</span>
            </a>
          )}
        </div>
      </ProjectItemStyles>
    </ThreeDCard>
  );
}