import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ClockLoader from 'react-spinners/ClockLoader';
import PropTypes from 'prop-types';

import CalendarContainer from '../container/CalendarContainer';
import CreateEventContainer from '../container/CreateEventContainer';
import EventPageContainer from '../container/EventPageContainer';

export default function MainPage({ isLoading }) {
  return (
    isLoading ?
      <ClockLoader />
    :
      <Switch>
        <Route path='/calendar' exact>
          <CalendarContainer />
        </Route>
        <Route path='/events/new'>
          <CreateEventContainer />
        </Route>
        <Route path='/events/:eventId'>
          <EventPageContainer />
        </Route>
        <Redirect path='/*' to='/calendar'/>
      </Switch>
  );
}

MainPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
