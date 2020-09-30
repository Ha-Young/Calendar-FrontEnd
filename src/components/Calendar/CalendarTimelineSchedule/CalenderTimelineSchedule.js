import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 10px;
  display: grid;
  grid-auto-rows: minmax(100px, auto);
`;

const HourlySchedule = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  justify-content: center;
  border: 3px solid purple;
`;


export default function CalendarTimelineSchedule () {
  
  function hourlySchedule () {
    const scheduleTable = [];
    for (let i = 0; i < 26; i++) {
      scheduleTable[i] = (
        <HourlySchedule key={i}>
          <div style={{border:"3px solid pink"}}></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </HourlySchedule>
      );
    }
    return scheduleTable;
  }
  
  return (
    <Wrapper>
      {hourlySchedule()}
    </Wrapper>
  );
}