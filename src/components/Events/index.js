import React from "react";
import { useLocation } from "react-router-dom";

import EventCreateForm from "../EventCreateForm";
import EventsDetail from "../EventDetail";
import styles from "./Events.module.css";

function Events({ createEvent, userId }) {
  const location = useLocation();
  const subPath = location.pathname.split('events/')[1];

  return (
    <div className={styles.wrapper}>
      {subPath === "new"
        ? <EventCreateForm userId={userId} onCreate={createEvent}/>
        : <EventsDetail userId={userId} eventId={subPath}/>}
    </div>
  );
}

export default Events;
