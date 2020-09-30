import React from 'react';
import styled from 'styled-components';
import MonthlyCalendarWeek from '../MonthlyCalendarWeek/MonthlyCalendarWeek.js';

const Wrapper = styled.div`
  display:grid;  
  border: 3px solid tomato;
`;

export default function MonthlyCalendarBody ({ weeks }) {

  return (
    <Wrapper style={{gridTemplateRows: `repeat(${weeks.length + 1}, 1fr)`}}>
      <MonthlyCalendarWeek isHead={true} />
      {
        weeks.map((week, i) => {
          return <MonthlyCalendarWeek key={i} isHead={false} dates={week} />
        })
      }
    </Wrapper>
  );
}