import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--copper)'};
    padding: 0.7em 2em;
    border: 2px solid var(--orange);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--black)' : 'black')};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({
  btnText = 'test',
  btnLink = 'test',
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
// import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const ButtonStyle = styled.div`
//   margin-top: 2rem;
//   .button {
//     position: absolute;
//     font-size: 2rem;
//     background-color: ${(props => 
//       props.outline ? 'transparent' : 'var(--copper)')};
//     padding: 1rem;
//     border: 2px solid var(--orange);
//     border-radius: 8px;
//     display: block;
//     /* align-items: center; */
//     color: ${props => 
//       props.outline ? 'var(--black)' : 'black'
//     };
//   }
//   @media only screen and (max-width: 768px) {
//     .button {
//       font-size: 1.8rem;
//     }
//   }
// `;

// function Button(
//   { btnLink= 'test',
//     btnText='Test', 
//     outline= false,
//   }) {
//     return (
//         <ButtonStyle outline={outline}>
//             <Link className="button" to={ btnLink}>
//                 {btnText}
//             </Link>
//         </ButtonStyle>
//     )
// }

// export default Button



   
