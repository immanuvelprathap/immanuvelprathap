import React from 'react';
// import { TiHtml5 } from '@react-icons/all-files/ti/TiHtml5';
// import { SiCsswizardry } from '@react-icons/all-files/si/SiCsswizardry';
// import { SiJavascript } from '@react-icons/all-files/si/SiJavascript';
// import { SiPython } from '@react-icons/all-files/si/SiPython';
// import { DiDatabase } from '@react-icons/all-files/di/DiDatabase';
// import { SiMysql } from '@react-icons/all-files/si/SiMysql'; 
import { MdDesktopMac } from '@react-icons/all-files/md/MdDesktopMac';
import { MdCode } from '@react-icons/all-files/md/MdCode';
import {MdPhonelinkSetup } from '@react-icons/all-files/md/MdPhonelinkSetup';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import SkillsSectionItems from './SkillsSectionItems';

const SkillsStyles = styled.div`
  padding: 10rem 4rem;
  .Skills__allItems {
    display: flex;
    gap: 4rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .Skills__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function Skills() {
  return (
    <SkillsStyles>
      <div className="container">
        <SectionTitle subheading="Areas of Expertise," heading="Skills" />
        <div className="Skills__allItems">
          <SkillsSectionItems
            icon={<MdDesktopMac />}
            desc="SDLC (Agile), Extract transform and load(ETL)."
            title="Software Development"
          />

          <SkillsSectionItems
            icon={<MdCode />}
            title=" ML and AI"
            desc=" Web Scrapping, Data PreProcessing, EDA, Data Visualization, Predictive - Descriptive Analysis, Regression, Clustering and Classification."
          />
          <SkillsSectionItems
            icon={<MdPhonelinkSetup />}
            title="Application Development"
            desc=" Web apps, cross-platform apps and UI/UX design. "
          />
          {/* <SkillsSectionItems
            icon={<SiCsswizardry />}
            title="CSS"
            // desc="I also develop the websites. I create high performance website with blazing fast speed."
          />
          <SkillsSectionItems
            icon={<SiJavascript />}
            title="JavaScript"
            // desc="I develop mobile application. I create mobile app with eye catching ui. "
          />
          <SkillsSectionItems
            icon={<SiPython />}
            title='PYTHON'
          />
          <SkillsSectionItems
            icon={<DiDatabase />}
            title='SQL - ETL'
          />
          <SkillsSectionItems
            icon={<SiMysql />}
            title='MySQL - RDBMS'
          />
          <SkillsSectionItems
            icon={<MdDesktopMac />}
            title='SDLC (Agile)'
          /> */}
          {/* <SkillsSectionItems
            icon={<MdDesktopMac />}
            title='SDLC (Agile)'
          /> */}
        </div>
      </div>
    </SkillsStyles>
  );
}
