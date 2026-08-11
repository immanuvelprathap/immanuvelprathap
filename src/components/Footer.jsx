import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';

const FooterStyle = styled.footer`
  background-color: var(--panel-bg);
  border-top: 1px solid var(--border-color);
  padding: 8rem 0 4rem 0;
  margin-top: auto;

  .footer__container {
    display: grid;
    grid-template-columns: 2fr 1fr 1.5fr 1fr;
    gap: 4rem;
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }

  .footer__col1 {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    
    .footer__title {
      font-family: 'Outfit', sans-serif;
      font-size: 2.5rem;
      font-weight: 800;
      letter-spacing: -0.05em;
      
      span {
        font-weight: 300;
        color: var(--text-secondary);
      }
    }
    
    p {
      font-size: 1.4rem;
      line-height: 1.6;
      color: var(--text-secondary);
      max-width: 250px;
    }
  }

  .footer__col2,
  .footer__col3,
  .footer__col4 {
    color: var(--text-secondary);
    
    .heading {
      font-family: 'Outfit', sans-serif;
      font-size: 1.8rem;
      font-weight: 600;
      color: var(--text-primary);
      text-transform: uppercase;
      margin-bottom: 2rem;
      letter-spacing: 0.05em;
    }
    
    a {
      font-size: 1.4rem;
      color: var(--text-secondary);
      transition: color 0.2s ease;
      
      &:hover {
        color: var(--text-primary);
      }
    }
    
    li {
      margin-bottom: 1.2rem;
    }
  }

  .copyright {
    margin-top: 6rem;
    padding-top: 3rem;
    border-top: 1px solid var(--border-color);
    
    .copyright-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      width: 90%;
      margin: 0 auto;
      font-family: var(--font-mono);
      font-size: 1.2rem;
      color: var(--text-muted);
    }
  }

  @media only screen and (max-width: 960px) {
    .footer__container {
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
    }
  }

  @media only screen and (max-width: 580px) {
    padding: 6rem 0 3rem 0;
    
    .footer__container {
      grid-template-columns: 1fr;
      gap: 4rem;
    }
    
    .copyright {
      margin-top: 4rem;
      
      .copyright-container {
        flex-direction: column;
        gap: 1.5rem;
        text-align: center;
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="footer__container">
        <div className="footer__col1">
          <div className="footer__title">
            Prathap<span>.in</span>
          </div>
          <p>
            Data Engineer and AI Researcher, building optimization and automated systems. Inspired by art, design, and technology.
          </p>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Explore"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Get in Touch"
            links={[
              {
                title: '+91 70222 07916',
                path: 'tel:+917022207916',
              },
              {
                title: 'mailtoimmanuvel@gmail.com',
                path: 'mailto:mailtoimmanuvel@gmail.com',
              },
              {
                title: 'Bern, Switzerland',
                path: 'https://maps.google.com/?q=Bern,Switzerland',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Connect"
            links={[
              {
                title: 'GitHub',
                path: 'https://github.com/immanuvelprathap',
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/immanuvel-prathap-/',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/ImmanuvelPrath1',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="copyright-container">
          <p>© {new Date().getFullYear()} - Immanuvel Prathap</p>
          <p>Designed & Engineered in Monochrome</p>
        </div>
      </div>
    </FooterStyle>
  );
}