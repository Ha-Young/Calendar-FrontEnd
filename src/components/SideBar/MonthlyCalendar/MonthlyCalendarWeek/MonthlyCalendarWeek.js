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
          if (day === 'Sat') return <div style={{color: "blue"}} key={i}>{day}</div>
          if (day === 'Sun') return <div style={{color: "red"}} key={i}>{day}</div>
          return <div key={i}>{day}</div>
        })
      );
    }

    return (
      dates.map((date, i) => {
        // if (i === 6) return <div style={{color: "blue"}} key={i} class={date}>{date}</div>
        // if (i === 0) return <div style={{color: "red"}} key={i} class={date}>{date}</div>
        return <div key={i} class={date}>{date}</div>
      })
    );

  }


  return (
    <Wrapper>{insertDates()}</Wrapper>
  );
}