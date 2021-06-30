import React from 'react';
import styled from 'styled-components';
import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper,
  .contactSection__wrapper2 {
    display: flex;
    gap: 0rem;
    margin-top: 12rem;
    position: relative;
    div:hover {
      color: var(--red);
    }
  }

  .left {
    width: 100%;
    /* max-width: 500px; */
    padding-left: 0rem;
  }
  .right {
    width: 100%;
    padding-left: 0rem;
  }

  @media only screen and (max-width: 768px) {
    height: 100vh;
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper2 {
      flex-direction: column;
      margin-top: 2rem;
    }

    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding-top: 3rem;
    }
    .location {
      display: none;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <a
              href="https://www.linkedin.com/in/camilo-uribe-1285581b1/"
              target="_blank"
              rel="noreferrer"
            >
              <ContactInfoItem icon={<SiLinkedin />} text="LinkedIn" />
            </a>
          </div>
          <div className="right">
            <a
              href="mailto: camiloxj@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <ContactInfoItem icon={<SiGmail />} text="Gmail" />
            </a>
          </div>
        </div>
        <div className="contactSection__wrapper2">
          <div className="left">
            <a
              href="https://github.com/camilouribev"
              target="_blank"
              rel="noreferrer"
            >
              <ContactInfoItem icon={<SiGithub />} text="Github" />
            </a>
          </div>
          <div className="right location">
            <ContactInfoItem text="Medellín, Colombia" />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
