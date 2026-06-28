import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  
  .button {
    font-family: var(--font-mono);
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 1.2rem 3rem;
    border-radius: 6px;
    display: inline-block;
    transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.2s ease;
    
    background-color: ${(props) => (props.outline ? 'transparent' : 'var(--text-primary)')};
    color: ${(props) => (props.outline ? 'var(--text-primary)' : 'var(--bg-color)')};
    border: 1px solid ${(props) => (props.outline ? 'var(--border-color)' : 'var(--text-primary)')};

    &:hover {
      transform: translateY(-2px);
      background-color: ${(props) => (props.outline ? 'var(--border-color)' : 'var(--text-secondary)')};
      border-color: ${(props) => (props.outline ? 'var(--text-primary)' : 'var(--text-secondary)')};
    }
    
    &:active {
      transform: translateY(0);
    }
  }

  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.3rem;
      padding: 1rem 2.5rem;
    }
  }
`;

export default function Button({
  btnText = 'Link',
  btnLink = '#',
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
