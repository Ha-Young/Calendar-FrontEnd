import React, { useEffect } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import ClockLoader from 'react-spinners/ClockLoader';

import CalendarContainer from '../container/CalendarContainer';
import CreateEventContainer from '../container/CreateEventContainer';
import EventPageContainer from '../container/EventPageContainer';

export default function MainPage({ isLoading }) {
  const history = useHistory();

  useEffect(() => {
    history.push('/calendar');
  }, [history]);

  return (
    isLoading ?
      <ClockLoader />
    :
      <Switch>
        <Route path='/calendar'>
          <CalendarContainer />
        </Route>
        <Route path='/events/new'>
          <CreateEventContainer />
        </Route>
        <Route path='/events/:eventId'>
          <EventPageContainer />
        </Route>
        <Redirect path='*' to='/'/>
      </Switch>
  );
}
