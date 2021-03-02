import React from 'react';
import styled from 'styled-components';

import TimeLayout from './TimeLayout/TimeLayout';
import ContentLayout from './ContentLayout/ContentLayout';

const CalendarTimeTableStyle = styled.div`
  display: flex;
  text-align: start;
  max-height: 400px;
  font-size: 20px;
  padding-right: 3px;
  margin-right: 3px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;

    &-thumb {
      background-color: #2f3542;
      border-radius: 10px;
    }

    &-track {
      background-color: grey;
      border-radius: 10px;
      box-shadow: inset 0px 0px 5px white;
    }
  }
`;

const CalendarTimeTable = () => {
  return (
    <CalendarTimeTableStyle className="calendar__timeline">
      <TimeLayout></TimeLayout>
      <ContentLayout></ContentLayout>
    </CalendarTimeTableStyle>
  )
}

export default CalendarTimeTable;
