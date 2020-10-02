import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from './App.module.css';
import { getEventData } from '../../utils/api';
import HeaderContainer  from '../../containers/HeaderContainer';
import CalendarContainer  from '../../containers/CalendarContainer';
import NewEventContainers from '../../containers/NewEventContainers';

// Feel free to modify as you need.
function App() {
  useEffect(() => {
    getEventData();
  }, []);

  return (
    <div className={styles.App}>
      <HeaderContainer/>
      <Switch>
        <Route path='/' exact>
          <div>Main</div>
          <CalendarContainer/>
        </Route>
        <Route path='/event/new'>
          <NewEventContainers/>
        </Route>
        <Redirect to='/'/>
      </Switch>
    </div>
  );
}

export default App;
