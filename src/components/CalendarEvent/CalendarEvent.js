import React from 'react';
import { Route, Switch } from "react-router-dom";
import EventForm from '../../containers/EventForm';

import styles from "./CalendarEvent.module.css";


export default function CalendarEvent() {
  return (
    <div className={styles.CalendarEvent}>
      <Switch>
        <Route path="/events/new" component={EventForm} />
      </Switch>
    </div>
  );
}
