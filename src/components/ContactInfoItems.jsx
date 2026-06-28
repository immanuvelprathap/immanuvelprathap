import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';

const ItemStyles = styled.div`
  padding: 2.5rem;
  background-color: var(--panel-bg);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 2.5rem;
  border-radius: 8px;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: var(--text-secondary);
  }

  .icon {
    color: var(--text-primary);
    background-color: var(--bg-color);
    border: 1px solid var(--border-color);
    width: 6rem;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
    
    svg {
      width: 2.8rem;
      height: 2.8rem;
    }
  }

  .info {
    p {
      font-size: 1.6rem;
      line-height: 1.5;
      color: var(--text-secondary);
      word-break: break-all;
    }
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
    gap: 1.5rem;
  }
`;

export default function ContactInfoItems({
  icon = <MdPlace />,
  text = 'Contact Details',
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <p>{text}</p>
      </div>
    </ItemStyles>
  );
}