import { createGlobalStyle } from 'styled-components';
import RobotoMonoRegular from '../assets/fonts/RobotoMono-Regular.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Mono', monospace;;
    font-family: 'Amatic SC', cursive;
    src: url(${'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;1,100&display=swap'}) 
    src url(${'https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto+Mono:ital,wght@0,100;1,100&display=swap'})

  }
  @font-face {
    font-family: 'RobotoMono Regular';
    src: url(${RobotoMonoRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat SemiBold';
    src: url(${MontserratSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Bold';
    src: url(${MontserratBold});
    font-style: normal;
  }

  html{
    font-family: 'Amatic SC';
    color: var(--orange);
  }
  *{
    font-family: 'Roboto Mono', monospace;;
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Amatic SC';
  }
  .centered{
   color: var(--gray-2);
   font-size: 8px;
   font-family: "Amatic SC";
  }
`;

export default Typography;
