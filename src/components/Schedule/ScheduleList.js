import React from 'react';
import styled from 'styled-components';
import { Link, useRouteMatch } from 'react-router-dom';

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


export default function ScheduleList ({ eventInfo }) {
  let path = useRouteMatch().path

  function renderByType () {
    let scheduleTable;
    if (path === '/weekly') {
      scheduleTable = [];
      for (let i = 0; i < 26; i++) {
        scheduleTable[i] = (
          <HourlySchedule key={i}>
            <Link to={`/event/${i}`}><div style={{border:"3px solid pink"}}></div></Link>
            <Link to={`/event/${i}`}><div></div></Link>
            <Link to={`/event/${i}`}><div></div></Link>
            <Link to={`/event/${i}`}><div></div></Link>
            <Link to={`/event/${i}`}><div></div></Link>
            <Link to={`/event/${i}`}><div></div></Link>
            <Link to={`/event/${i}`}><div></div></Link>
          </HourlySchedule>
        );
      }
      return scheduleTable;
    }
    
    scheduleTable = [];
      for (let i = 0; i < 26; i++) {
        scheduleTable[i] = <Link to={`/event/${i}`}><HourlySchedule key={i} /></Link>
      }
      return scheduleTable;
  }
  
  return (
    <Wrapper>
      {renderByType()}
    </Wrapper>
  );
}