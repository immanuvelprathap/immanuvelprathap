import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';

const FooterStyle = styled.div`
  background-color: var(--orange);
  padding-top: 6rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
    padding-left: 10rem;
    color: var(--black);
    title{
        color: var(--dark-bg);
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col2">
          <FooterCol
            heading="Go to"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+91 7022207916',
                path: 'tel:+91 7022207916',
              },
              {
                title: 'mailtoimmanuvel@gmail.com',
                path: 'mailto:mailtoimmanuvel@gmail.com',
              },
              {
                title: '#421,Hommadevanahalli, Gottigere Post, Bannerghatta Road, Bangalore 560083.',
                path: 'https://www.google.com/maps/place/Akshay+Mosaic+Flooring/@12.8462151,77.5980938,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae6ae45f2a6c89:0x84d875d2e48b9a74!8m2!3d12.8462099!4d77.6002825',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Let's be Social"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                title: 'LinkedIn',
                path: 'https://linkedin.com',
              },
            ]}
          />
        </div>
      </div>
    </FooterStyle>
  );
}