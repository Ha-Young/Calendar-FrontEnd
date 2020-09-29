import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Week from '../Week/Week';
import Day from '../Day/Day';
import EventPage from '../EventPage/EventPage';
import NewEvent from '../NewEvent/NewEvent';
import Event from '../Event/Event';
import Header from '../Header/Header';

const AppRouter = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Week} />
        <Route exact path='/day' component={Day} />
      </Switch>
      <Route path='/events/new'>
        <EventPage>
          <NewEvent />
        </EventPage>
      </Route>
      <Route path='/events/:eventId'>
        <EventPage>
          <Event />
        </EventPage>
      </Route>
    </>
  );
};

export default AppRouter;
