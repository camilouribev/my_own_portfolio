import React from 'react';
import styled from 'styled-components';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiPython,
  SiDjango,
  SiPostman,
  SiGit,
} from 'react-icons/si';
import { GiGears } from 'react-icons/gi';
import TechInfoItem from './TechInfoItem';

const TechIcons = styled.div`
  * {
    color: #a1a1a1;
  }
  svg {
    width: 7rem;
  }

  .container2 {
    height: 40vh;
    margin-top: 4rem;
    margin-bottom: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 0.3fr 0.3fr;
    grid-gap: 10px 10px;
  }

  .cell {
    color: white;
    font-size: 3rem;
    text-align: center;
    padding: 4rem;
  }
  .cell-1:hover {
    color: var(--red);
  }
  .cell-2 {
  }
  .cell-3 {
  }
  .cell-4 {
  }
  .cell-5 {
  }
  .cell-6 {
  }
  .cell-7 {
  }
  .cell-8 {
  }
  .cell-9 {
  }
  .cell-10 {
  }
  @media only screen and (max-width: 768px) {
    .container2 {
      margin-left: 0px;
      height: 80vh;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: repeat(4, 0.1fr);
    }
    svg {
      width: 5.5rem;
    }
  }
  @media only screen and (max-width: 500px) {
    .container2 {
      margin-left: 0px;
      height: 130vh;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(5, 0.1fr);
    }
    svg {
      width: 4.5rem;
    }
  }
`;

function IconGrid() {
  return (
    <TechIcons>
      <div className="container2">
        <div className="cell cell-1">
          <TechInfoItem icon={<SiHtml5 />} text="HTML" />
        </div>
        <div className="cell cell-2">
          <TechInfoItem icon={<SiCss3 />} text="CSS" />
        </div>
        <div className="cell cell-3">
          <TechInfoItem icon={<SiJavascript />} text="JavaScript" />
        </div>
        <div className="cell cell-4">
          <TechInfoItem icon={<SiReact />} text="React" />
        </div>
        <div className="cell cell-5">
          <TechInfoItem icon={<SiRedux />} text="Redux" />
        </div>

        <div className="cell cell-6">
          <TechInfoItem icon={<SiPython />} text="Python" />
        </div>
        <div className="cell cell-7">
          <TechInfoItem icon={<SiDjango />} text="Django" />
        </div>
        <div className="cell cell-8">
          <TechInfoItem icon={<SiPostman />} text="Postman" />
        </div>
        <div className="cell cell-9">
          <TechInfoItem icon={<SiGit />} text="Git" />
        </div>
        <div className="cell cell-10">
          <TechInfoItem icon={<GiGears />} text="REST APIS" />
        </div>
      </div>
    </TechIcons>
  );
}

export default IconGrid;
