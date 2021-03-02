import React from "react";
import { useLocation } from "react-router-dom";

import EventsAdd from "../EventsAdd";
import EventsDetail from "../EventsDetail";
import styles from "./Events.module.css";

function Events() {
  const location = useLocation();
  const subPath = location.pathname.split('events/')[1];

  return (
    <div className={styles.wrapper}>
      {subPath === "new"
        ? <EventsAdd />
        : <EventsDetail eventId={subPath}/>}
    </div>
  );
}

export default Events;
