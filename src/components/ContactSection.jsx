import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone, MdPlace } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItems from './ContactInfoItems';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.section`
  padding: 18rem 0 10rem 0;
  background-color: var(--bg-color);

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
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
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
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}