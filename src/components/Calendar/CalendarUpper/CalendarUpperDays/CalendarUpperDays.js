import React from 'react';
import styled from 'styled-components';

import RoundShape from '../../../publicComponent/RoundShape/RoundShape';

const OneDay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .date {
    font-size: 20px;
  }
`;

const CalendarUpperDays = () => {
  // 둥글게 찍어낸 날짜랑 요일을 나타낸다

  function getDayArray() {
    const dayArray = [];
    for (let i = 0; i < 7; i++) {
      dayArray.push(
        <OneDay>
          <RoundShape textContext={i+8}></RoundShape>
          <div className="date">date</div>
        </OneDay>
      )
    }

    return dayArray;
  }

  return (
    <div className="calendar__upper__days">
      {getDayArray()}
    </div>
  );
}

export default CalendarUpperDays;
