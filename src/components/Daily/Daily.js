import React from "react";
import { Route, Switch, Link, useRouteMatch, useLocation } from "react-router-dom";
import Event from "../Event/Event";
import styles from "./Daily.module.css";
import Create from "../../containers/CreateEvent";
import Update from "../../containers/UpdateEvent";



export default function Daily({ currentDay, events }) {
  const { year, month, date } = currentDay;
  const match = useRouteMatch();

  console.log(events)

  return (
    <div className={styles.daily_container}>
      <h3>{year} / {month} / {date}</h3>
      <ul>
        <Link to="/event/1"><li>1</li></Link>
      </ul>
      {/* <Route path={`${match.path}/:time/:id`} component={Update} /> */}
    </div>
  );
}
