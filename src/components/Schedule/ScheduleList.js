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


export default function ScheduleList ({ type, openModal }) { //CalendarTimelineSchedule
  
  function renderByType () {
    let scheduleTable;
    if (type === 'weekly') {
      scheduleTable = [];
      for (let i = 0; i < 26; i++) {
        scheduleTable[i] = (
          <HourlySchedule key={i}>
            <div onClick={openModal} style={{border:"3px solid pink"}}></div>
            <div onClick={openModal}></div>
            <div onClick={openModal}></div>
            <div onClick={openModal}></div>
            <div onClick={openModal}></div>
            <div onClick={openModal}></div>
            <div onClick={openModal}></div>
          </HourlySchedule>
        );
      }
      return scheduleTable;
    }
    
    scheduleTable = [];
      for (let i = 0; i < 26; i++) {
        scheduleTable[i] = <HourlySchedule onClick={openModal} key={i} />
      }
      return scheduleTable;
  }
  
  return (
    <Wrapper>
      {renderByType()}
    </Wrapper>
  );
}