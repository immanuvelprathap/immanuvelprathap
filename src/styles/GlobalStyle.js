import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
     --dark-bg: #262626;
     --orange: #FF8000;
     --orange-2: #fc9212;
     --whisper: #E4E4E4;
     --silver: #BDBDBD;
     --weldon-blue: #8394A1;
     --cadet-grey: #95A3AE;
     --silver-sand: #C6C6C6;
     --spanish-gray: #989898;
     --gray: #808080;
     --granite-gray: #676767;
     --Quartz: #4B4B4C;
     --dark-charcoal:#333333;
     --gray-1: #BCB4B4;
     --deep-dark: #1E1E1E;
     --gray-2: #363636;
     --white : white;
     --black: #111111;
     --rich-black: #09081F;
     --temptress:  #382124;
     --copper: #C46A33;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none;

  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
 
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
  }
`;
export default GlobalStyles;

// import { createGlobalStyle } from 'styled-components';

// const GlobalStyles = createGlobalStyle`
// *{
//     padding: 0;
//     margin: 0;
//     box-sizing: border-box;
//   }
//   :root{
//     --dark-bg: #262626;
//     --orange: #FF8000;
//     --orange-2: #fc9212;
//     --whisper: #E4E4E4;
//     --silver: #BDBDBD;
//     --weldon-blue: #8394A1;
//     --cadet-grey: #95A3AE;
//     --silver-sand: #C6C6C6;
//     --spanish-gray: #989898;
//     --gray: #808080;
//     --granite-gray: #676767;
//     --Quartz: #4B4B4C;
//     --dark-charcoal:#333333;
//     --gray-1: #BCB4B4;
//     --deep-dark: #1E1E1E;
//     --gray-2: #363636;
//     --white : white;
//     --black: #111111;
//     --rich-black: #09081F;
//     --temptress:  #382124;
//     --copper: #C46A33;
//   }
//   html{
//     font-size: 10px;
//     font-family: 'Roboto Mono', "Amatic SC";
//     /*font-family: "Amatic SC";*/
//     background-color: var(--dark-bg);
//   }
//   ul,li{
//     list-style: none;
//   }
//   a{
//     text-decoration: none;
//   }
//   img, svg{
//     width: 60%;
//     height: 60%;
//     display: inline-block;
//     margin-left: auto;
//     margin-right: auto;
//     object-fit: contain;
//     padding-top: 50px;
//     padding-right: 30px;
//     padding-bottom: 0px;
//     padding-left: 30px; 
//   }

//   .scroll{
//      max-height: 45px;
//      width: 16px;
//      margin: 0 auto;
//     }

//   .button{
//     outline: none
//   }

//   .hero__social,
//   .hero__scrollDown{
//      display: flex;
//      flex-direction: column;
//      gap: 2rem;
//      position: absolute;
//      bottom: 20px;
//      width: 50px;
//  }
//   .hero__social{
//      left: 100px;
//  }
//   .hero__scrollDown{
//      right: 150px;
//  }
//   .hero__social__indicator,
//   .hero__scrollDown{
//     width: 50px;
//     p{
//       font-size: 1.6rem;
//       transform: translateY(-70px) rotate(90deg);
//       letter-spacing: .7rem;
//       text-transform: uppercase;
//     }

// }
//   .centered {
//   position: absolute;
//   top: 103%;
//   left: 45%;
//   transform: translate(-50%, -50%);
//   }
//   .container{
//     max-width: 1200px;
//     width: 90%;
//     margin: auto;
//   }

// /* Smooth Scroll  */
//   [data-scrollbar] {
//     height: 100vh;
//     overflow: hidden;
//     background-color: var(--gray-1);
//     .scroll-content {
//       background-color: var(--whisper);
//     }
//     .scrollbar-track.scrollbar-track-y {
//       background: var(--white);
//       .scrollbar-thumb-y {
//         background: var(--gray-1);
//       }
//     }
//   }
// `;

// export default GlobalStyles;
