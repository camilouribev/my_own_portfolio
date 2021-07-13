import React from 'react';
import styled from 'styled-components';
import pdf from '../assets/data/Camilo-Uribe-CV.pdf';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/6-small.jpg';
import ContactBanner from '../components/ContactBanner';
import IconGrid from '../components/IconGrid';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  background-color: var(--semiwhite);
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--offwhite);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hello, I am <span>Camilo Uribe </span>
              </p>
              <h2 className="about__heading">Junior Web developer</h2>
              <div className="about__info">
                <PText>
                  I am from Medellín, Colombia. With a background in mechanical
                  and chemical engineering, I started writing code for the
                  modelling of thermochemical processes , but my curiosity made
                  me realize the endless possibilities of programming, and ended
                  up with a passion for all things web related.
                  <br /> <br />
                  Now, I'm a self-taught developer, with a keen interest in
                  software and improving my coding skills day by day. I would
                  love to be part of a good team and create together!
                  <br />
                </PText>
              </div>
              <Button btnText="Download CV" btnLink={pdf} target="_blank" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>
              <IconGrid />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
