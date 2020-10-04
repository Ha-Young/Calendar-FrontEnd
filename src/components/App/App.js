import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ROUTERS } from '../../router';
import styles from './App.module.css';

import HeaderContainer from '../../containers/HeaderContainer/HeaderContainer';
import CalendarContainer from '../../containers/CalendarContainer/CalendarContainer';
import NewEventContainer from '../../containers/NewEventContainer/NewEventContainer';
import UpdateEventContainer from '../../containers/UpdateEventContainer/UpdateEventContainer';

function App() {
  return (
    <div className={styles.App}>
      <Switch>
        <Route exact path={ROUTERS.CALENDAR}>
          <HeaderContainer />
          <CalendarContainer />
        </Route>
        <Route path={ROUTERS.EVENT_NEW}>
          <NewEventContainer />
        </Route>
        <Route path={ROUTERS.EVENT_ID}>
          <UpdateEventContainer />
        </Route>
        <Redirect to={ROUTERS.CALENDAR} />
      </Switch>
    </div>
  );
}

export default App;
