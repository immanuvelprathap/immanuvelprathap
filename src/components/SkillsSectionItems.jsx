import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const SkillsItemStyles = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background-color: var(--panel-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  flex: 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    border-color: var(--text-secondary);
  }

  .SkillsItem__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 1px solid var(--border-color);
    background-color: var(--bg-color);
    margin: 0 auto 2rem auto;
    
    svg {
      width: 2.8rem;
      height: 2.8rem;
      color: var(--text-primary);
    }
  }

  .SkillsItem__title {
    font-family: 'Outfit', sans-serif;
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
  }

  .para {
    font-size: 1.4rem;
    color: var(--text-secondary);
    line-height: 1.5;
  }
`;

export default function SkillsSectionItems({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
}) {
  return (
    <SkillsItemStyles className="SkillsItem">
      <div className="SkillsItem__icon">{icon}</div>
      <h3 className="SkillsItem__title">{title}</h3>
      <PText>{desc}</PText>
    </SkillsItemStyles>
  );
}