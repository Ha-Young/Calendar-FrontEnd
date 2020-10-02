import React from 'react';
import styled from 'styled-components';
import CalendarWeek from './CalendarWeek';

const Wrapper = styled.div`
  display: grid;
`;

export default function CalendarBody ({ type, dates }) {

  return (
    <Wrapper style={{gridTemplateRows: `repeat(${dates.length + 1}, 1fr)`}}>
      <CalendarWeek isHead={true} />
      {
        dates.map((week, i) => {
          return <CalendarWeek key={i} isHead={false} dates={week} type={type}/>
        })
      }
    </Wrapper>
  );
}
