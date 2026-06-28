import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone, MdPlace } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItems from './ContactInfoItems';
import SectionTitle from './SectionTitle';
import ThreeDCard from './ThreeDCard';

const ContactSectionStyle = styled.section`
  padding: 18rem 0 10rem 0;
  background: transparent;

  /* Prezi zoom-in entry animation */
  animation: preziZoomIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  transform-style: preserve-3d;
  
  @keyframes preziZoomIn {
    0% {
      opacity: 0;
      transform: scale(0.92) translateY(20px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  .contactSection__wrapper {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 8rem;
    margin-top: 7rem;
    position: relative;
  }

  .left {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
  }

  .right {
    width: 100%;
    background-color: var(--panel-bg);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 4rem;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  @media only screen and (max-width: 960px) {
    .contactSection__wrapper {
      grid-template-columns: 1fr;
      gap: 5rem;
    }
    .right {
      padding: 3rem 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    padding-top: 14rem;
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Contact" subheading="To get in touch," />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItems 
              icon={<MdLocalPhone />} 
              text="+91 70222 07916" 
            />
            <ContactInfoItems 
              icon={<MdEmail />} 
              text="mailtoimmanuvel@gmail.com" 
            />
            <ContactInfoItems 
              icon={<MdPlace />} 
              text="Bern, Switzerland / Bangalore, India" 
            />
          </div>
          <ThreeDCard maxTilt={8} scale={1.01} className="right" style={{ borderRadius: '12px' }}>
            <ContactForm />
          </ThreeDCard>
        </div>
      </div>
    </ContactSectionStyle>
  );
}