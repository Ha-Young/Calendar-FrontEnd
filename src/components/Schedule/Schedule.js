import React from 'react';
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components';
import ScheduleHead from './ScheduleHead';
import ScheduleBody from './ScheduleBody';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 12% 1fr;
  border: 3px solid red;
  overflow: hidden;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 35% 1fr;
  overflow: hidden;
`;

export default function Schedule ({ dates, updateCalendar }) { //CalendarContainer
  
  
  return (
    <Switch>
      <Route path='/' exact>
        <Wrapper>
            <ScheduleHead
              type='daily'
              dates={dates.weeklyDates}
              updateCalendar={updateCalendar}
            />
            <ScheduleBody type='daily'  />    
        </Wrapper>
      </Route>

      <Route path='/weekly'>
        <Wrapper>
          <ScheduleHead
            type='weekly'
            dates={dates.weeklyDates}
            updateCalendar={updateCalendar}
          />
          <ScheduleBody type='weekly' />
        </Wrapper>
      </Route>
    </Switch>
  );
}
