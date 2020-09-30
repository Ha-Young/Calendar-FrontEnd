import React from 'react';
import styles from './Calendar.module.css';
import Header from '../Header/Header'
import { Route, Switch } from 'react-router-dom';
import Daily from './Daily';
import Weekly from './Weekly';
import format from 'date-fns/format'

export default function Calendar ({
  getDate,
  handleYesterday,
  handleTomorrow,
}) {

  const formatDate = getDate.date;
  const formatYear = format(formatDate, "yyyy");
  const formatMonth = format(formatDate, "MMM");
  const formatDay = format(formatDate, "do");

  return (
    <div className={styles.calendar_wrap}>
      <div className={styles.Calendar}>
        <Header
          year={formatYear}
          month={formatMonth}
          day={formatDay}
          handleYesterday={handleYesterday}
          handleTomorrow={handleTomorrow}
        />
        <Switch>
          <Route path="/" exact component={Daily} />
          <Route path="/weekly" component={Weekly} />
        </Switch>
      </div>
    </div>
  );
}
