import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';
import ThreeDCard from './ThreeDCard';

const SkillsItemStyles = styled.div`
  text-align: center;
  padding: 4rem 2.5rem;
  background-color: var(--panel-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(0, 242, 254, 0.35);
    
    .SkillsItem__icon {
      border-color: var(--glow-cyan);
      box-shadow: 0 0 15px rgba(0, 242, 254, 0.2);
      
      &::after {
        border-color: var(--glow-cyan);
      }
    }
  }

  .SkillsItem__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: 1px solid var(--border-color);
    background-color: var(--bg-color);
    margin: 0 auto 2.5rem auto;
    position: relative;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    
    &::after {
      content: '';
      position: absolute;
      width: 7.4rem;
      height: 7.4rem;
      border-radius: 50%;
      border: 1px dashed var(--border-color);
      animation: spinHUD 16s linear infinite;
      transition: border-color 0.3s ease;
    }
    
    svg {
      width: 2.8rem;
      height: 2.8rem;
      color: var(--glow-cyan);
    }
  }

  .SkillsItem__title {
    font-family: 'Outfit', sans-serif;
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
  }

  .para {
    font-size: 1.4rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

export default function SkillsSectionItems({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
}) {
  return (
    <ThreeDCard maxTilt={15} scale={1.04} style={{ flex: '1', borderRadius: '8px' }}>
      <SkillsItemStyles className="SkillsItem">
        <div className="SkillsItem__icon">{icon}</div>
        <h3 className="SkillsItem__title">{title}</h3>
        <PText>{desc}</PText>
      </SkillsItemStyles>
    </ThreeDCard>
  );
}