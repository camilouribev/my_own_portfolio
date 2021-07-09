import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 450px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 2px solid var(--navy);
    img {
      height: 100%;
      background-size: cover;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--offwhite);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  link = 'placeholder',
}) {
  return (
    <ProjectItemStyles>
      <a
        href={link}
        className="projectItem__img"
        target="_blank"
        rel="noreferrer"
      >
        <img src={img} alt="project img" />
      </a>
      <div className="projectItem__info">
        <Link to="">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}
