import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from './App.module.css';

import Header from '../Header/Header';
import CalendarContainer from '../../containers/CalendarContainer/CalendarContainer';
import NewEventContainer from '../../containers/NewEventContainer/NewEventContainer';
import UpdateEventContainer from '../../containers/UpdateEventContainer/UpdateEventContainer';

// Feel free to modify as you need.
function App() {
  return (
    <div className={styles.App}>
      <Switch>
        <Route path='/calendar' exact>
          <Header />
          <CalendarContainer />
        </Route>
        <Route path='/event/new'>
          <NewEventContainer />
        </Route>
        <Route path="/event/:eventId">
          <UpdateEventContainer />
        </Route>
        <Redirect to='/calendar' />
      </Switch>
    </div>
  );
}

export default App;
