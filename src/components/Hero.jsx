import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/Hero.jpg';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    margin-top: 30rem ;
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 6rem;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    /* border: 2px solid var(--orange); */
  }
  .hero__info {
    margin-top: 0rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-top: 6rem;
        a {
          display: inline-block;
          font-size: 1.8rem;
          transform: rotate(-90deg);
          letter-spacing: 2px;
          margin-bottom: 6rem;
          color: var(--orange);
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              color: var(--orange);
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function Hero() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, I am</span>
            <span className="hero__name">Immanuvel Prathap</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              I am a Tech-Business-Savvy individual, aspiring to be a Data Scientist with 2+ years of progressive experience demonstrating ability to deliver valuable insights via Data Analytics and Advanced data-driven methods. Most valuable qualities of myself is to incline quickly to learn the additional skills as needed to fit into those challenging tasks, if so, put forward by your organisation. Team player, Indeed.

            </PText>
            <Button btnText="Projects" btnLink="/projects" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://twitter.com/ImmanuvelPrath1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/immanuvelprathap"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/immanuvel-prathap-/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}

// import React from 'react';
// import HeroImg from "../assets/images/Hero.jpg";
// import Button from './Button';
// import PText from './PText';
// import SocialMediaArrow from"../assets/images/social-media-arrow.svg";
// import ScrollDownArrow from"../assets/images/scroll-down-arrow.svg";
// import styled from 'styled-components';

// const HeroStyles = styled.div`
//  .hero{
//      height: 200vh;
//      padding-top: 8rem;
//      max-height: 1000px;
//      width: 100%;
//      text-align: center;
//      display: flex;
//      align-items: center;
//      justify-content: center;
//      position: relative;
//  }
//  .hero__heading{
//      font-size: 2rem;
//      margin-bottom: -15rem;
//      position: relative;
//      span{
//          display: inline-block;
//          width: 100%;
//      }
//      .greeting{
//          color: var(--gray-1);
//          font-size: 2rem;
//          padding-top: 10rem;
//      }
//      .hero__name{
//          font-size: 4rem;
//          font-family: "Amatic SC", cursive;
//          color: var(--white);

//      }
//  }
//  .hero__img{
//      width: 70%;
//      height: 100%;
//      display: inline-block;
//      margin-left: auto;
//      margin-right: auto;
//      object-fit: contain;
//      padding-top: 150px;
//      padding-right: 30px;
//      padding-bottom: 0px;
//      padding-left: 30px; 
//  }
//  .hero__social,
//  .hero__scrollDown{
//      display: flex;
//      flex-direction: column;
//      gap: 2rem;
//      position: absolute;
//      bottom: 20px;
//      width: 50px;
//  }
//  .hero__social{
//      left: 50px;
//  }
//  .hero__scrollDown{
//      right: 50px;
//  }
//  .hero__social__indicator,
//  .hero__scrollDown{
//      width: 50px;
//      p{
//          font-size: 1.6rem;
//          transform: translateY(-70px) rotate(90deg);
//          color: var(--orange);
//          letter-spacing: .7rem;
//          text-transform: uppercase;
//      }
//      img{
//          max-height: 45px;
//          width: 16px;
//          margin: 0 auto;
//          object-fit: contain;
//      }
//  }
//  .hero__info{

//      /* display: block; */
//      /* margin: 0 auto; */
//      text-align: center;
//      align-items: center;
//      justify-content: center;
//  }
//  .hero__scrollDown{
//      img{
//          max-height: 70px;
//      }
//  }
//  .hero__social__text{
//      ul{
//          li{
//              margin-bottom: 1rem;

//          }
//          a{
//              display: inline-block;
//              font-size: 1.6rem;
//              transform: rotate(-90deg);
//              color: var(--orange);
//              letter-spacing: 5px;
//              margin-bottom: 4rem;
//              padding-right: 2.5rem;
//              padding-bottom: 2rem;
//              padding-left: -50rem;
//          }
//      }
//  }
//  @media only screen and (max-width: 768px){
//      .hero{
//          min-height: 750px;
//      }
//      .hero__heading{
//          font-size: 1.4rem;
//          margin-bottom: -3rem;
//          .hero_name{
//              font-size: 4.5rem;
//          } 
//      }
//      .hero__img{
//          height: 300px;
//      }
//      .hero__info{
//          margin-top: 3rem;
//      }
//      .hero__social{
//          left: 0px;
//          bottom: 15%;
//          width: 20px;
//          .hero__social__indicator{
//              width: 20px;
//             p{
//                  font-size: 1.2rem;  
//              }
//             img{
//                 max-height: 22px;
//             }   
//         }
//         .hero__social__text{
//             ul{
//                 li{
//                     a{
//                         font-size: 1.2rem;
//                         margin-bottom: 1rem;
//                     }
//                 }
//             }
//         }
//         .hero__scrollDown{
//             right: 0;
//             width: 20px;
//             gap: 1rem;
//             p{
//                 font-size: 1.3rem;
//             }
//         }
//     }
//  }
// `;


// export default function Hero() {
//   return (
//       <HeroStyles>
//           <div className="hero">
//               <div className="container">
//                   <h1 className="hero__heading">
//                       <span className="greeting">Hello, I am </span>
//                       <span className="hero__name">Immanuvel Prathap </span>
//                  </h1>
//              </div>

//               <div className="hero__img">
//                      <img src={HeroImg} alt="" />
//               </div>
              
//               <div className="hero__info">
//                   <PText>I'm a Tech-Business-Savvy. Also, an aspiring Data Scientist. </PText>
//                   <Button btnLink={"/projects"} btnText="view my projects"/>
//              </div>
             
//              <div className="hero__social">
//                  <div className="hero__social__indicator">
//                      <p>Follow</p>
//                      <img src={SocialMediaArrow} alt=" social media arrow" />
//                  </div>

//                  <div className="__text">
//                      <ul>
//                          <li>
//                              <a href="https://twitter.com/ImmanuvelPrath1" target="_blank" rel="noreferrer">
//                                   Twitter
//                              </a>
//                          </li>
//                          <li>
//                              <a href="https://github.com/immanuvelprathap" target="_blank" rel="noreferrer">
//                                  Github
//                              </a>
//                          </li>
//                          <li>
//                              <a href="https://www.linkedin.com/in/immanuvel-prathap-/" target="_blank" rel="noreferrer">
//                                  LinkedIn
//                              </a>
//                          </li>
//                      </ul>
//                  </div>
//              </div>
    
//              <div className="hero__scrollDown">
//                  <p>Scroll</p>
//                  <img src={ScrollDownArrow} alt="scroll down arrow"/>
//              </div>
//          </div>
//      </HeroStyles>
//     );
// }