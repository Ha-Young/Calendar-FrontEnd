import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import Header from '../Header/Header';
import { saveSampleData } from '../../utils/api';
import Daily from '../Daily/Daily';
import Weekly from '../Weekly/Weekly';
import Event from '../Events/Event';

// Feel free to modify as you need.
function App ({ handleNextButtonClick, currentDisplayToday, currentDisplayDate, currentDisplayDay }) {
  useEffect(() => {
    saveSampleData();
  }, []);

  return (
    <div className={styles.App}>
      <Header
        onNextButtonClick={handleNextButtonClick}
        currentDisplayToday={currentDisplayToday}
      />

      <Switch>
        <Route exact path='/' exact>
          <Daily
            currentDisplayDate={currentDisplayDate}
            currentDisplayDay={currentDisplayDay}
          />
        </Route>
        <Route path='/calendar'>
          <Daily
            currentDisplayDate={currentDisplayDate}
            currentDisplayDay={currentDisplayDay}
          />
        </Route>
        <Route exact path='/weekly'>
          <Weekly />
        </Route>
        <Route path='/events'>
          <Event />
        </Route>
        {/* <Route path='/events/:eventId' component={}/> */}
      </Switch>
    </div>
  );
}

export default App;
