import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.jpeg';
import AboutInfoItems from '../components/AboutInfoItems';
import Footer from '../components/Footer';
import ThreeDCard from '../components/ThreeDCard';

const AboutPageStyles = styled.div`
  padding: 20rem 4rem 10rem 4rem;
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

  .top-section {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 6rem;
    align-items: center;
  }
  
  .left {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .about__subheading {
    font-family: var(--font-mono);
    font-size: 1.6rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    
    span {
      color: var(--text-primary);
      font-weight: 600;
    }
  }

  .about__heading {
    font-family: 'Outfit', sans-serif;
    font-size: 5rem;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.04em;
  }

  .about__info {
    .para {
      font-size: 1.6rem;
      line-height: 1.7;
      color: var(--text-secondary);
    }
  }

  .right {
    position: relative;
    width: 100%;
    aspect-ratio: 4/5;
    background-color: var(--panel-bg);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .about__info__items {
    margin-top: 15rem;
    display: flex;
    flex-direction: column;
    gap: 10rem;
  }

  .about__info__item {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .about__info__heading {
    font-family: 'Outfit', sans-serif;
    font-size: 3.2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 2px solid var(--text-primary);
    padding-bottom: 1rem;
    display: inline-block;
    max-width: fit-content;
  }

  /* Timeline Styling */
  .timeline {
    position: relative;
    padding-left: 3rem;
    margin-top: 2rem;
    
    &::before {
      content: '';
      position: absolute;
      left: 0.8rem;
      top: 0;
      width: 1px;
      height: 100%;
      background-color: var(--border-color);
    }
  }

  .timeline__item {
    position: relative;
    margin-bottom: 6rem;
    
    &:last-child {
      margin-bottom: 0;
    }

    &::before {
      content: '';
      position: absolute;
      left: -2.7rem;
      top: 0.6rem;
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      background-color: var(--bg-color);
      border: 2px solid var(--text-primary);
      transition: background-color 0.3s ease;
    }
    
    &:hover::before {
      background-color: var(--text-primary);
    }
  }

  .timeline__header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .timeline__title {
    font-family: 'Outfit', sans-serif;
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .timeline__company {
    font-family: var(--font-mono);
    font-size: 1.4rem;
    color: var(--text-secondary);
  }

  .timeline__date {
    font-family: var(--font-mono);
    font-size: 1.3rem;
    color: var(--text-muted);
    background-color: var(--panel-bg);
    border: 1px solid var(--border-color);
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
  }

  .timeline__desc {
    font-size: 1.5rem;
    line-height: 1.6;
    color: var(--text-secondary);
  }

  @media only screen and (max-width: 960px) {
    .top-section {
      grid-template-columns: 1fr;
      gap: 6rem;
      text-align: center;
    }
    .left {
      align-items: center;
    }
    .right {
      max-width: 380px;
      margin: 0 auto;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 12rem 2rem 6rem 2rem;
    
    .timeline__header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
  }
`;

export default function About() {
  const experiences = [
    {
      date: '09/2025 - Present',
      title: 'Research Masters in Artificial Intelligence in Medicine',
      company: 'University of Bern (Bern, Switzerland)',
      desc: 'Developing specialized machine learning and deep learning methodologies applied directly in clinical and medical settings.'
    },
    {
      date: '04/2023 - 03/2025',
      title: 'Senior Data Engineer',
      company: 'Schneider Electric (CIGRES Technologies Pvt Ltd, Bangalore)',
      desc: 'Optimized enterprise database warehouse infrastructure, built resilient ETL pipelines, and engineered data flows handling high-frequency metrics.'
    },
    {
      date: '01/2023 - 04/2023',
      title: 'Senior Data Engineer',
      company: 'Schneider Electric (CIGNEX Datamatics Pvt Ltd, Bangalore)',
      desc: 'Designed robust data modeling systems, managed database integrations, and worked in Agile/Scrub structures to deliver critical sales data engineering utilities.'
    },
    {
      date: '2020 - 2022',
      title: 'Data Engineer',
      company: 'EdgeRock Software Solutions (Bangalore)',
      desc: 'Formulated Extract-Transform-Load frameworks, cleaned and wrangled large datasets for descriptive analytics, and built initial data pipeline structures using Python.'
    },
    {
      date: '2019 - 2020',
      title: 'Transportation Design Student',
      company: 'Scuola Politecnica di Design (Milan, Italy)',
      desc: 'Merged mechanical concepts with automotive design aesthetics, training heavily in structural blueprints, sketching, and 3D rendering methodologies.'
    },
    {
      date: '2017 - 2019',
      title: 'Application Development Analyst',
      company: 'ESOFTCUBE Technology (Tamil Nadu)',
      desc: 'Coordinated infrastructure deployments and supported application development, database queries, and system engineering procedures.'
    }
  ];

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
                  I am a passionate researcher and engineer originally from Bangalore, Karnataka (the Silicon Valley of India) and currently pursuing advanced research in Switzerland. 
                  My background is uniquely cross-disciplinary, starting with Mechanical Engineering, evolving into Data Engineering, and now transitioning into Artificial Intelligence in Medicine.
                  <br /> <br />
                  To me, code is an art form. It is the framework through which we observe, structure, and optimize the complexity of the world around us. With over 3 years of professional engineering experience, I specialize in building robust pipelines and systems that transform raw data into critical insights.
                  <br /> <br />
                  My vision is to optimize the systems of our past and present to build a highly optimized future—focusing on healthcare, technology, and commercial automation. Let's build!
                </PText>
              </div>
              <Button btnText="Explore Projects" btnLink="/projects" />
            </div>
            <ThreeDCard maxTilt={15} scale={1.03} className="right" style={{ borderRadius: '16px' }}>
              <img src={AboutImg} alt="Immanuvel Prathap S" />
            </ThreeDCard>
          </div>
          
          <div className="about__info__items">
            {/* Education section */}
            <div className="about__info__item">
              <h2 className="about__info__heading">Education</h2>
              <AboutInfoItems
                title="Varsity (AI)"
                items={['Research Masters in AI in Medicine', 'University of Bern, Switzerland']}
              />
              <AboutInfoItems
                title="Varsity (Eng)"
                items={['B.Tech in Mechanical Engineering', 'Jain University, Bangalore']}
              />
              <AboutInfoItems
                title="College"
                items={['St.Josephs Pre-University College, Bangalore']}
              />
              <AboutInfoItems
                title="School"
                items={['St.Josephs Boys High School, Bangalore']}
              />
            </div>

            {/* Skills section */}
            <div className="about__info__item">
              <h2 className="about__info__heading">My Skillsets</h2>
              <AboutInfoItems
                title="AI & Machine Learning"
                items={['Deep Learning', 'CNN / RNN', 'LSTM', 'OpenCV', 'Clustering', 'Classification', 'NLP', 'Computer Vision']}
              />
              <AboutInfoItems
                title="Data Engineering"
                items={['ETL Processes', 'Data Modeling', 'Data Warehousing', 'Data Wrangling', 'Informatica']}
              />
              <AboutInfoItems
                title="Languages & DB"
                items={['Python', 'SQL (MySQL)', 'PHP', 'HTML5', 'CSS3', 'JavaScript']}
              />
              <AboutInfoItems
                title="Tools & Design"
                items={['Power BI', 'Tableau', 'Docker', 'Git', 'Matlab', 'CATIA V5', 'Adobe Photoshop', 'Illustrator', 'Keyshot']}
              />
            </div>

            {/* Experience section */}
            <div className="about__info__item">
              <h2 className="about__info__heading">Experiences</h2>
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <div className="timeline__item" key={index}>
                    <div className="timeline__header">
                      <h3 className="timeline__title">{exp.title}</h3>
                      <span className="timeline__date">{exp.date}</span>
                    </div>
                    <div className="timeline__company">{exp.company}</div>
                    <p className="timeline__desc">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AboutPageStyles>
      <Footer />
    </>
  );
}