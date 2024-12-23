import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.jpeg';
import AboutInfoItems from '../components/AboutInfoItems';
import Footer from '../components/Footer';

const AboutPageStyles = styled.div`
  padding: 20rem 4rem 10rem 4rem;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 6px solid var(--orange);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;

  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Immanuvel Prathap</span>
              </p>
              <h2 className="about__heading">Tech-Business-Savvy</h2>
              <div className="about__info">
                <PText>
                  I am from Bangalore, Karnataka. The Silicon Valley of India.
                  Since my childhood, i love art and design/ automation and technology. I believe all go hand-in-hand from the place surrounding me.
                  <br /> <br />
                  I started coding since I finished my Bachelors. Coding is also an
                  art for me. I eagerly explore the extreme nature to code and automate stuffs using technology. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. To begin with in your immediate surroundings. Now almost
                  everything is becoming better than ever. And we have the Information for pretty much everything happening 
                  in our immediate surrounding. It is time for us to dig into the data and optimize the solutions of our past, present and future.
                  Let's go!
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItems
                title="School"
                items={['St.Josephs Boys High School, Bangalore.']}
              />
              <AboutInfoItems
                title="Collage"
                items={['St.Josephs Pre-University College, Bangalore.']}
              />
              <AboutInfoItems
                title="Varsity"
                items={['Jain University, Bangalore.']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skillsets</h1>

              <AboutInfoItems
                title="FrontEnd Languages"
                items={['HTML', 'CSS', 'JavaScript']}
              />
              
              <AboutInfoItems
                title="FrontEnd Frameworks and Libraries"
                items={['React.js', 'CSS', 'JavaScript']}
              />

              <AboutInfoItems
                title="BackEnd Languages"
                items={['PHP','Python', 'JavaScript']}
              />

              <AboutInfoItems
                title="BackEnd Frameworks and Libraries"
                items={['Django']}
              />
              <AboutInfoItems
                title="Design"
                items={['Photoshop', 'InDesign', 'Adobe Illustrator', 'Keyshot']}
              />

              <AboutInfoItems
                title="Manufacturing"
                items={['CATIA V5', 'FEA', 'Matlab']}
              />   
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItems
                title="2017-2019"
                items={['Application Development Analyst at ESOFTCUBE TECHNOLOGY, Tamil Nadu- India.']}
              />
              <AboutInfoItems
                title="2019-2020"
                items={[' Design Student at Scuola Politecnica di Design, Milan-Italy.']}
              />
              <AboutInfoItems
                title="2020-2022"
                items={['Data Engineer at EdgeRock Software Solutions, Bangalore- India.']}
              />
              <AboutInfoItems
                title="01/2023-04/2023"
                items={['Senior Data Engineer at CIGNEX  DATAMATICS Pvt Ltd, Bangalore- India.']}
              />
              <AboutInfoItems
                title="04/2023-Present"
                items={['Senior Data Engineer at CIGRES  TECHNOLOGIES Pvt Ltd, Bangalore- India.']}
              />
            </div>
          </div>
        </div>
      </AboutPageStyles>
      <Footer />
    </>
  );
}