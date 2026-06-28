import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/about-sec-img.jpg';
import ThreeDCard from './ThreeDCard';

const AboutStyles = styled.div`
  padding: 10rem 4rem;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    gap: 6rem;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .aboutSection__right {
    border-radius: 12px;
    overflow: hidden;
  }
  .aboutImg {
    max-width: 100%;
    border: 1px solid var(--border-color);
    border-radius: 12px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2.5rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
      gap: 4rem;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
      max-width: 350px;
      margin: 3rem auto 0 auto;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself,"
            heading="About Me"
          />
          <PText>
            I hold a Bachelor Of Technology in Mechanical Engineering from JAIN UNIVERSITY Bangalore, India. Inspired by Art - Writer Hobbyist - Driven by the Entrepreneur Zeal - Qualified as a Mechanical Engineer - Passionate as a Transportation Designer - Aspiring to be Data Scientist One Day.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Projects" btnLink="/projects" />
            <Button btnText="Read More" btnLink="/about" outline />
          </div>
        </div>
        <ThreeDCard maxTilt={15} scale={1.04} className="aboutSection__right" style={{ borderRadius: '12px' }}>
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </ThreeDCard>
      </div>
    </AboutStyles>
  );
}
