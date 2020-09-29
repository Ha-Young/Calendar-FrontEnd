import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom'
import CalendarDateBar from '../CalendarDateBar/CalendarDateBar';
import CalendarTimeline from '../CalendarTimeline/CalendarTimeline';
import CalendarSchedule from '../CalendarSchedule/CalendarSchedule';
import CalendarEvent from '../CalendarEvent/CalendarEvent';

const Wrapper = styled.div`
display:grid;
grid-template-rows: 20% 1fr;
`;

const Daily = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 7.5fr;
`;

const Weekly = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;


export default function CalendarContainer () {

return (
  <Wrapper style={{border: "3px solid red"}}>
    <CalendarDateBar />
    <Route path="/weekly">
      <Weekly>
        <CalendarSchedule />
      </Weekly>
    </Route>
    <Route path="/" exact>
      <Daily>
        <CalendarTimeline />
        <CalendarSchedule />
      </Daily>
    </Route>

    <Route path="/event">
      <CalendarEvent />
    </Route>

  </Wrapper>
);
}



