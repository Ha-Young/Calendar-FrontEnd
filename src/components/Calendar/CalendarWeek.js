import React, {useState, useEffect} from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display:grid;
  grid-template-columns: repeat(7, 1fr);
  border: 3px solid tomato;
  text-align: center;
`;

export default function CalendarWeek ({ isHead, dates, type }) { //MonthlyCalendarWeek
  const [ today, setToday ] = useState(new Date().getDate());

  useEffect (()=>{
    if (today !== new Date().getDate()) setToday(new Date().getDate());
    console.log(today, 'date changed');
  }, [today]);

  function onClick () {
    console.log('date clicked')
  }

  function renderHead () {
    const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      dayList.map((day, i) => {
        if (day === 'Sat') return <div style={{color: "blue"}} key={i}>{day}</div>
        if (day === 'Sun') return <div style={{color: "red"}} key={i}>{day}</div>
        return <div key={i}>{day}</div>
      })
    );
  }

  function renderByTypeBody () {
    if (type === 'weekly') {
      return (
        dates.map((date, i) => {
          if (date === today) return <div key={i} class={date} style={{backgroundColor:"blue"}}>{date}</div>
          return <div key={i} class={date}>{date}</div>
        })
      );
    }
    return (
      dates.map((date, i) => {
        if (date === today) return <div key={i} class={date} style={{backgroundColor:"blue"}}>{date}</div>
        return <div key={i} class={date} onClick={onClick}>{date}</div>
      })
    );
  }

  return (
    <Wrapper>
      {
        isHead
        ? renderHead()
        : renderByTypeBody()
      }
    </Wrapper>
  );
}