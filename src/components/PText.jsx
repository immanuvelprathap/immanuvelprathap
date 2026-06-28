import React from 'react';
import styled from 'styled-components';

const Pstyle = styled.div`
  max-width: 600px;
  margin: 0 auto;
  font-family: var(--font-sans);
  font-size: 1.6rem;
  line-height: 1.6;
  color: var(--text-secondary);

  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

function PText({ children }) {
  return (
    <Pstyle className="para">
      <p>{children}</p>
    </Pstyle>
  );
}

export default PText;
