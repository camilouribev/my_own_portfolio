import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
} from '../../node_modules/@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '../../node_modules/@fortawesome/free-solid-svg-icons';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--offwhite);
  padding-top: 10rem;
  .container {
    background-color: var(--offwhite);

    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    margin-top: 1rem;
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    font-size: 5rem;
    flex: 1;
    padding-bottom: 1rem;
    color: var(--navy);
    a:hover {
      color: var(--red);
    }
  }

  .footer__col1__title {
    font-size: 3.5rem;
    padding-bottom: 0rem;
  }
  .copyright {
    background-color: var(--offwhite);
    text-align: left;
    padding: 1rem 0;
    margin-top: 1rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 2rem;
      }
    }
    .footer__col1,
    .footer__col2,
    .footer__col3,
    .footer__col4 {
      text-align: center;

      flex: 1;
    }
    .footer__col1 .para {
      max-width: 100%;
    }

    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Camilo Uribe </h1>
        </div>
        <div className="footer__col2">
          <a href="mailto: camiloxj@gmail.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className="upload-icon" />
          </a>
        </div>
        <div className="footer__col3">
          <a
            href="https://www.linkedin.com/in/camilo-uribe-1285581b1/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="upload-icon" />
          </a>
        </div>
        <div className="footer__col4">
          <a
            href="https://github.com/camilouribev"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="upload-icon" />
          </a>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2021 - Camilo Uribe Vargas</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
