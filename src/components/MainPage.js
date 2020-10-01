import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import CalendarContainer from '../container/CalendarContainer';
import CreateEventContainer from '../container/CreateEventContainer';
import EventPageContainer from '../container/EventPageContainer';

export default function MainPage() {
  const history = useHistory();

  useEffect(() => {
    history.push('/calendar');
  }, [history]);

  return (
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
    </Switch>
  );
}
