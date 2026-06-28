import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProjectItem from './ProjectItem';
import SectionTitle from './SectionTitle';
import projects from '../assets/data/projects';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const ProjectSectionStyle = styled.section`
  padding: 10rem 0;
  background-color: var(--bg-color);

  .projects__allItems {
    margin-top: 5rem;
    position: relative;
  }

  .swiper-container {
    padding-top: 6rem;
    max-width: 100%;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 4.5rem;
    width: 4.5rem;
    background-color: var(--panel-bg);
    border: 1px solid var(--border-color);
    z-index: 10;
    right: 5.5rem;
    left: auto;
    top: 0;
    transform: translateY(0);
    color: var(--text-primary);
    border-radius: 8px;
    transition: background-color 0.2s ease, border-color 0.2s ease;
    
    &:hover {
      background-color: var(--border-color);
      border-color: var(--text-primary);
    }
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 1.6rem;
    font-weight: bold;
  }

  @media only screen and (max-width: 768px) {
    .projects__allItems {
      margin-top: 5rem;
    }
    
    .swiper-button-prev,
    .swiper-button-next {
      display: none; /* Hide navigation buttons on mobile to avoid overcrowding */
    }
  }
`;

export default function ProjectsSection() {
  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle subheading="some of my recent works" heading="Projects" />
        <div className="projects__allItems">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.slice(0, 5).map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectItem
                  title={project.name}
                  img={project.img}
                  desc={project.desc}
                  link={project.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  );
}