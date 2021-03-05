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
      flex-direction: column;
      justify-content: center;
      align-items:center;
      width: 25%;
      height: 4.5rem;
      margin-top: 0.5%;
    }

    &__days {
      display: flex;
      justify-content: space-around;
      width: 75%;
      height: 100%;
    }
  }
`;

const CalendarUpper = ({ dateArr }) => {
  console.log(dateArr);
  const year = dateArr.length ? dateArr[0].year : '';
  const month = dateArr.length ? dateArr[0].monthAlphaBet : '';
  return (
    <CalendarUpperContainer>
      <div className="calendar__upper__month">
        <div>{year}</div>
        <div>{month}</div>
      </div>
      <CalendarUpperDays dateArr={dateArr}></CalendarUpperDays>
    </CalendarUpperContainer>
  );
};

export default CalendarUpper;
