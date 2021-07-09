import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  padding: 0rem;
  background-color: var(--semiwhite);
  display: grid;
  gap: 0rem;
  margin-bottom: 2rem;
  .icon {
    margin: 0 auto;
    background-color: var(--semiwhite);
    display: flex;
    justify-content: center;
  }

  svg {
    width: 7rem;
    align-items: center;
  }
  .info {
    padding-top: 3rem;
    margin: 0 auto;
    visibility: hidden;
  }

  @media only screen and (max-width: 768px) {
    .svg {
      width: 5rem;
      margin-top: 5rem;
    }
  }
`;

export default function TechInfoItem({
  icon = <MdPlace />,
  text = 'I need text ',
}) {
  return (
    <ItemStyles className="item-styles">
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}
