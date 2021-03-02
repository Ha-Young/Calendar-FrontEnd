import React from 'react';
import styled from 'styled-components';

import CalendarUpperDays from './CalendarUpperDays/CalendarUpperDays';

const CalendarUpperContainer = styled.div`
  display: flex;
  height: 30%;
  margin-top: 7px;
  margin-right: 17px;

  .calendar__upper {
    &__month {
      display: flex;
      justify-content: center;
      align-items:center;
      width: 25%;
      height: 4.2rem;
    }

    &__days {
      display: flex;
      justify-content: space-around;
      width: 75%;
      height: 100%;
    }
  }
`;

const CalendarUpper = () => {

  return (
    <CalendarUpperContainer>
      <div className="calendar__upper__month">Apr 3rd</div>
      <CalendarUpperDays></CalendarUpperDays>
    </CalendarUpperContainer>
  );
};

export default CalendarUpper;
