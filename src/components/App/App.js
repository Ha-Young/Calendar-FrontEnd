import React from 'react';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import Week from '../Week/Week';
import Day from '../Day/Day';
import EventContainer from 'containers/EventContainer';
import Header from '../Header/Header';
import { Route, Switch } from 'react-router-dom';

export const App = () => {
  
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Week} />
        <Route exact path='/day' component={Day} />
      </Switch>
      <EventContainer />
    </>
  );
};
