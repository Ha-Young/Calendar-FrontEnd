import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import EventForm from "./EventForm";
import styles from "./Event.module.css";

export default function Event ({ onEventInfoSubmit }) {
  return (
    <>
      <div className={styles.Event}>
        <Switch>
          <Route path="/event" exact>
            <Link to="/event/new" className={styles.createEvent}>
              일정 추가
            </Link>
            <div className={styles.eventsContainer}>
              이벤트 목록
            </div>
          </Route>
          <Route path="/event/new">
            <EventForm onEventInfoSubmit={onEventInfoSubmit} />
          </Route>
        </Switch>
      </div>
    </>
  );
}
