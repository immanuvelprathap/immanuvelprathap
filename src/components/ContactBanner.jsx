import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';

const ContactBannerStyles = styled.div`
  padding: 10rem 0;
  
  .contactBanner__wrapper {
    background-color: var(--panel-bg);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 6rem 2rem;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  }

  .contactBanner__heading {
    font-family: 'Outfit', sans-serif;
    font-size: 4rem;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 2rem;
    color: var(--text-primary);
  }

  @media only screen and (max-width: 768px) {
    padding: 6rem 0;
    
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>Have a project in mind?</PText>
          <h3 className="contactBanner__heading">Let me help you build it</h3>
          <Button btnText="Contact Now" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}