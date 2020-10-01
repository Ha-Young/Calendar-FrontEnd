import React from 'react';
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components';
import ScheduleHead from './ScheduleHead';
import ScheduleBody from './ScheduleBody';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 10% 1fr;
  border: 3px solid red;
  overflow: hidden;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 35% 1fr;
  overflow: hidden;
`;

export default function Schedule ({ weeklyDates, onClickPrevWeek, onClickNextWeek, openModal }) { //CalendarContainer
  
  return (
    <Switch>
      <Route path='/' exact>
        <Wrapper>
            <ScheduleHead
              type='daily'
              dates={weeklyDates.weeklyDates}
              onClickPrevWeek={onClickPrevWeek}
              onClickNextWeek={onClickNextWeek}
            />
            <ScheduleBody type='daily'  />    
        </Wrapper>
      </Route>

      <Route path='/weekly'>
        <Wrapper>
          <ScheduleHead
            type='weekly'
            dates={weeklyDates.weeklyDates}
            onClickPrevWeek={onClickPrevWeek}
            onClickNextWeek={onClickNextWeek}
          />
          <ScheduleBody type='weekly' />
        </Wrapper>
      </Route>
    </Switch>
  );
}
