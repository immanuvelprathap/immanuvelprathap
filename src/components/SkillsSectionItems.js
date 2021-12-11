import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const SkillsItemStyles = styled.div`
  text-align: center;
  .SkillsItem__icon {
    svg {
      width: 3rem;
    }
  }
  .SkillsItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function SkillsSectionItems({
  icon = <MdDesktopMac />,
  title = 'Web Design',
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
}) {
  return (
    <SkillsItemStyles className="SkillsItem">
      <div className="SkillsItem__icon">{icon}</div>
      <div className="SkillsItem__title">{title}</div>
      <PText>{desc}</PText>
    </SkillsItemStyles>
  );
}