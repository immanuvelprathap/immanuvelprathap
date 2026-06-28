import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  p {
    font-family: var(--font-mono);
    font-size: 1.4rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  h2 {
    font-family: 'Outfit', sans-serif;
    font-size: 4.8rem;
    font-weight: 800;
    margin-top: 0.5rem;
    text-transform: uppercase;
    letter-spacing: -0.03em;
    color: var(--text-primary);
  }
  @media only screen and (max-width: 768px) {
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export default function SectionTitle({
  subheading = 'Introduction',
  heading = 'Section Title',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}