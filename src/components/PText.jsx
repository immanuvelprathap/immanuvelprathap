import React from 'react'
import styled from 'styled-components';

const Pstyle = styled.div`
max-width: 500px;
margin-left: auto;
margin-right: auto;
font-family: 'Roboto Mono', monospace;;
font-size: 2rem;
line-height: 1.3em;
color: var(--white);

@media only screen and (max-width: 768px){
    font-size: 1.5rem;
}
`;

function PText({children}) {
    return (
        <Pstyle>
            <p>{children}</p>
        </Pstyle>
    )
}

export default PText
