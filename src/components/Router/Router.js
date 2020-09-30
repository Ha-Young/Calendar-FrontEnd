import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Week from '../Week/Week';
import Day from '../Day/Day';
import EventContainer from 'containers/EventContainer';
import Header from '../Header/Header';

const AppRouter = ({ isLoggedIn, setIsLoggedIn }) => {

  return (
    <>
      <Header login={isLoggedIn} setLogin={setIsLoggedIn} />
      <Switch>
        <Route exact path='/' component={Week} />
        <Route exact path='/day' component={Day} />
      </Switch>
      <Route path='/events/new'>
        <EventContainer />
      </Route>
    </>
  );
};

export default AppRouter;
