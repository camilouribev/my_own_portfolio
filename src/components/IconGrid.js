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
  SiPostgresql,
  SiGit,
} from 'react-icons/si';
import { GiGears } from 'react-icons/gi';
import TechInfoItem from './TechInfoItem';

const TechIcons = styled.div`
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
    color: #a1a1a1;
    font-size: 3rem;
    text-align: center;
    padding: 4rem;
  }

  .cell-1 .item-styles:hover {
    -webkit-transition: color 0.5s;
    -moz-transition: color 1s;
    -ms-transition: color 1s;
    -o-transition: color 1s;
    transition: color 1s;
    color: #f06529;
    .info {
      visibility: visible;
    }
  }

  .cell-2 .item-styles:hover {
    -webkit-transition: color 0.5s;
    -moz-transition: color 1s;
    -ms-transition: color 1s;
    -o-transition: color 1s;
    transition: color 1s;
    color: #2965f1;
    .info {
      visibility: visible;
    }
  }

  .cell-3 .item-styles:hover {
    -webkit-transition: color 0.5s;
    -moz-transition: color 1s;
    -ms-transition: color 1s;
    -o-transition: color 1s;
    transition: color 1s;
    color: #f0db4f;
    .info {
      visibility: visible;
    }
  }
  .cell-4 .item-styles:hover {
    -webkit-transition: color 0.5s;
    -moz-transition: color 1s;
    -ms-transition: color 1s;
    -o-transition: color 1s;
    transition: color 1s;
    color: #61dbfb;
    .info {
      visibility: visible;
    }
  }
  .cell-5 .item-styles:hover {
    -webkit-transition: color 0.5s;
    -moz-transition: color 1s;
    -ms-transition: color 1s;
    -o-transition: color 1s;
    transition: color 1s;
    color: #764abc;
    .info {
      visibility: visible;
    }
  }

  .cell-6 .item-styles:hover {
    -webkit-transition: color 0.5s;
    -moz-transition: color 1s;
    -ms-transition: color 1s;
    -o-transition: color 1s;
    transition: color 1s;
    color: #4b8bbe;
    .info {
      visibility: visible;
    }
  }

  .cell-7 .item-styles:hover {
    -webkit-transition: color 0.5s;
    -moz-transition: color 1s;
    -ms-transition: color 1s;
    -o-transition: color 1s;
    transition: color 1s;
    color: #092e20;
    .info {
      visibility: visible;
    }
  }

  .cell-8 .item-styles:hover {
    -webkit-transition: color 0.5s;
    -moz-transition: color 1s;
    -ms-transition: color 1s;
    -o-transition: color 1s;
    transition: color 1s;
    color: #0064a5;
    .info {
      visibility: visible;
    }
  }
  .cell-9 .item-styles:hover {
    -webkit-transition: color 0.5s;
    -moz-transition: color 1s;
    -ms-transition: color 1s;
    -o-transition: color 1s;
    transition: color 1s;
    color: #f1502f;
    .info {
      visibility: visible;
    }
  }

  .cell-10 .item-styles:hover {
    -webkit-transition: color 0.5s;
    -moz-transition: color 1s;
    -ms-transition: color 1s;
    -o-transition: color 1s;
    transition: color 1s;
    color: var(--navy);
    .info {
      visibility: visible;
    }
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
    .info {
      visibility: visible;
    }
  }
  @media only screen and (max-width: 500px) {
    .container2 {
      margin-bottom: 5rem;
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
          <TechInfoItem icon={<SiPostgresql />} text="PostgreSQL" />
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
