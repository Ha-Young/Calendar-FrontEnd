import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display:grid;
  grid-template-columns: repeat(7, 1fr);
  border: 3px solid tomato;
  text-align: center;
`;

export default function MonthlyCalendarWeek ({ isHead, dates }) {
  
  function insertDates () {
    if (isHead) {
      const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      return (
        dayList.map((day, i) => {
          return <div key={i}>{day}</div>
        })
      );
    }

    return (
      dates.map((date, i) => {
        return <div key={i} class={date}>{date}</div>
      })
    );

  }


  return (
    <Wrapper>{insertDates()}</Wrapper>
  );
}