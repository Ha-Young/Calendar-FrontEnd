import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import ScheduleHead from './ScheduleHead';
import ScheduleBody from './ScheduleBody';
import Modal from '../Shared/Modal';
import CreateEventContainer from '../../containers/CreateEventContainer';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 12% 1fr;
  border: 3px solid red;
  overflow: hidden;
`;

export default function Schedule ({ dates, updateCalendar }) {
  
  return (
    <Switch>
      <Route path='/event/:event_Id' exact>
        <Modal>
          <CreateEventContainer/>
        </Modal>
      </Route>
      <Route path='/event/new' exact>
        <Modal>
          <CreateEventContainer/>
        </Modal>
      </Route>
      <Route path='/' exact>
        <Wrapper>
          <ScheduleHead
            type='daily'
            dates={dates.weeklyDates}
            updateCalendar={updateCalendar}
          />
          <ScheduleBody type='daily'/>
        </Wrapper>
      </Route>
      <Route path='/weekly'>
        <Wrapper>
          <ScheduleHead
            type='weekly'
            dates={dates.weeklyDates}
            updateCalendar={updateCalendar}
          />
          <ScheduleBody type='weekly'/>
        </Wrapper>
      </Route>
    </Switch>
  );
}
