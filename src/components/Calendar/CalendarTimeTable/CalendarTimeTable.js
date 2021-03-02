import React from 'react';
import styled from 'styled-components';

import TimeLayout from './TimeLayout/TimeLayout';
import ContentLayout from './ContentLayout/ContentLayout';

const CalendarTimeTableStyle = styled.div`
  display: flex;
  text-align: start;
  heigth: 70%;
  font-size: 20px;
  overflow-y: scroll;
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
