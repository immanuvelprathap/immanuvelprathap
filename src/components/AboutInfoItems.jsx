import React from 'react';
import styled from 'styled-components';

const AboutItemsStyles = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 3rem;
  gap: 2rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 2rem;

  .title {
    font-family: 'Outfit', sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--text-primary);
    width: 200px;
    flex-shrink: 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .item {
    background-color: var(--panel-bg);
    border: 1px solid var(--border-color);
    padding: 0.8rem 1.6rem;
    border-radius: 6px;
    font-size: 1.4rem;
    color: var(--text-secondary);
    transition: border-color 0.2s ease, color 0.2s ease;
    
    &:hover {
      border-color: var(--text-primary);
      color: var(--text-primary);
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    
    .title {
      width: 100%;
    }
    
    .items {
      width: 100%;
    }
  }
`;

export default function AboutInfoItem({
  title = 'Title',
  items = ['HTML', 'CSS'],
}) {
  return (
    <AboutItemsStyles>
      <h3 className="title">{title}</h3>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </AboutItemsStyles>
  );
}