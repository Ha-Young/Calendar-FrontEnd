import React from 'react';
import styled from "styled-components";
import CalendarDateBar from '../CalendarDateBar/CalendarDateBar';
import CalendarTimeline from '../CalendarTimeline/CalendarTimeline';
import CalendarSchedule from '../CalendarSchedule/CalendarSchedule';

const Wrapper = styled.div`
display:grid;
grid-template-rows: 20% 1fr;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 7.5fr;
  background: green;
`;

export default function CalendarContainer () {

return (
  <Wrapper style={{border: "3px solid red"}}>
    <CalendarDateBar />
    <Main>
      <CalendarTimeline />
      <CalendarSchedule />  
    </Main>
  </Wrapper>
);
}