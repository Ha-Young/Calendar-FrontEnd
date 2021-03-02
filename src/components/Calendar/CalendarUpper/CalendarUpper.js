import React from 'react';
import styled from 'styled-components';

import CalendarUpperDays from './CalendarUpperDays/CalendarUpperDays';

const CalendarUpperStyle = styled.div`
  display: flex;
  height: 30%;
  margin-right: 17px;

  .calendar__upper {
    &__month {
      width: 25%;
      height: 100%;
    }

    &__days {
      display: flex;
      justify-content: space-around;
      width: 75%;
      background-color: red;
    }
  }
`;

const CalendarUpper = () => {

  return (
    <CalendarUpperStyle>
      <div className="calendar__upper__month">Apr 3rd</div>
      <CalendarUpperDays></CalendarUpperDays>
    </CalendarUpperStyle>
  );
};

export default CalendarUpper;
