import React from 'react';
import styled from 'styled-components';
import MonthlyCalendarWeek from '../MonthlyCalendarWeek/MonthlyCalendarWeek.js';

const Wrapper = styled.div`
  display: grid;
`;

export default function MonthlyCalendarBody ({ type, dates }) {
  

  // const chooseType = function (type, dates) {
  //   if (type === 'weekly') {
  //     return (
  //       <Wrapper style={{gridTemplateRows: `repeat(${dates.length + 1}, 1fr)`}}>
  //         <MonthlyCalendarWeek isHead={true} />
  //         {
  //           dates.map((week, i) => {
  //             return <MonthlyCalendarWeek key={i} isHead={false} dates={week} />
  //           })
  //         }
  //       </Wrapper>
  //     );
  //   }
  // };
  
  // return chooseType(type, dates);
  return (
    <Wrapper style={{gridTemplateRows: `repeat(${dates.length + 1}, 1fr)`}}>
      <MonthlyCalendarWeek isHead={true} />
      {
        dates.map((week, i) => {
          return <MonthlyCalendarWeek key={i} isHead={false} dates={week} type={type} />
        })
      }
    </Wrapper>
  );
  

  
}