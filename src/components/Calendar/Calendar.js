import React from 'react';
import styles from './Calendar.module.css';
import Header from '../Header/Header'
import { Route, Switch } from 'react-router-dom';
import Daily from './Daily';
import Weekly from './Weekly'
import HeaderContainer from '../../containers/HeaderContainer'

export default function Calendar () {
  return (
    <div className={styles.calendar_wrap}>
    <div className={styles.Calendar}>
      <Header />
      <Switch>
        <Route path="/" exact component={Daily} />
        <Route path="/weekly" component={Weekly} />
      </Switch>
    </div>
    </div>
  );
}
