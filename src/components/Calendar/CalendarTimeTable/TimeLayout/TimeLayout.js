import React from 'react';
import styled from 'styled-components';

import Content from '../../../publicComponent/Content/Content';

const TimeLayoutContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;

  .time {
    height: 30px;
    text-align: center;
    padding-right: 0.3em;
    border-right: solid 1px;
  }
`;

const TimeLayout = () => {

  function makeOneHourString(index) {
    const fromHour = index / 10 < 1 ? `0${index}` : index;
    const nextHour = index + 1;
    const middle = '~';
    const toHour = nextHour / 10 < 1 ? `0${nextHour}` : nextHour;

    return (fromHour + middle + toHour);
  }

  function getContentArray() {
    const contentArray = [];
    for (let i = 0; i < 24; i++) {
      contentArray.push(<Content key={i} className={"time"} textContent={makeOneHourString(i)} />)
    }

    return contentArray;
  }

  return (
    <TimeLayoutContainer>
      {getContentArray()}
    </TimeLayoutContainer>
  );
};

export default TimeLayout;