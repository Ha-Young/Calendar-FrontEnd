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

const CalendarUpperDays = ({ dateArr }) => {
  function getDayArray() {
    const dayArray = [];
    
    dateArr.map((el, index) => {
      dayArray.push(
        <OneDay key={index}>
          <RoundShape textContext={el.day}></RoundShape>
          <div className="date">{el.date}</div>
        </OneDay>
      )
    })

      
    

    return dayArray;
  }

  return (
    <div className="calendar__upper__days">
      {getDayArray()}
    </div>
  );
}

export default CalendarUpperDays;
