import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ROUTER } from '../../router';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from './App.module.css';

import HeaderContainer from '../../containers/HeaderContainer/HeaderContainer';
import CalendarContainer from '../../containers/CalendarContainer/CalendarContainer';
import NewEventContainer from '../../containers/NewEventContainer/NewEventContainer';
import UpdateEventContainer from '../../containers/UpdateEventContainer/UpdateEventContainer';

// Feel free to modify as you need.
function App() {
  return (
    <div className={styles.App}>
      <Switch>
        <Route path={ROUTER.CALENDAR} exact>
          <HeaderContainer />
          <CalendarContainer />
        </Route>
        <Route path={ROUTER.EVENT_NEW}>
          <NewEventContainer />
        </Route>
        <Route path={ROUTER.EVENT_ID}>
          <UpdateEventContainer />
        </Route>
        <Redirect to={ROUTER.CALENDAR} />
      </Switch>
    </div>
  );
}

export default App;
