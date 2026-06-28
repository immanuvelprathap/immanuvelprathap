import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import ProjectsInfo from '../assets/data/projects';
import ProjectItem from '../components/ProjectItem';
import Footer from '../components/Footer';

const ProjectStyle = styled.div`
  padding: 18rem 0 10rem 0;
  background-color: var(--bg-color);

  .projects__searchBar {
    position: relative;
    width: 320px;
    margin-top: 5rem;
    margin-bottom: 2rem;
  }

  .projects__searchBar input {
    width: 100%;
    font-size: 1.6rem;
    font-family: var(--font-mono);
    padding: 1.2rem 4.5rem 1.2rem 1.6rem;
    color: var(--text-primary);
    background-color: var(--panel-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    outline: none;
    transition: border-color 0.25s ease;
    
    &::placeholder {
      color: var(--text-muted);
    }

    &:focus {
      border-color: var(--text-primary);
    }
  }

  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2.2rem;
    height: 2.2rem;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: var(--text-secondary);
  }

  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 4rem;
    margin-top: 5rem;
  }

  @media only screen and (max-width: 768px) {
    padding-top: 14rem;
    
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
    
    .projects__allItems {
      gap: 3rem;
    }
  }
`;

export default function Projects() {
  const [searchText, setSearchText] = useState('');
  const [projectsData, setProjectsData] = useState(ProjectsInfo);

  useEffect(() => {
    if (searchText === '') {
      setProjectsData(ProjectsInfo);
      return;
    }
    setProjectsData(() =>
      ProjectsInfo.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  return (
    <>
      <ProjectStyle>
        <div className="container">
          <SectionTitle
            heading="Projects"
            subheading="some of my recent"
          />
          <div className="projects__searchBar">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Search projects..."
                aria-label="Search Projects"
              />
              <MdSearch className="searchIcon" />
            </form>
          </div>
          <div className="projects__allItems">
            {projectsData.map((item) => (
              <ProjectItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </ProjectStyle>
      <Footer />
    </>
  );
}
