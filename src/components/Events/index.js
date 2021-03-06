import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { PATH_CALENDAR } from "../../constants/path";
import EventForm from "../EventForm";
import styles from "./Events.module.css";

function Events({ createEvent, updateEvent, deleteEvent, user, events }) {
  const location = useLocation();
  const subPath = location.pathname.split("events/")[1];
  const history = useHistory();

  function goHome() {
    history.push(PATH_CALENDAR);
  }

  function handleEventFormSubmit(newEvent, isUpdate) {
    if (isUpdate) {
      updateEvent({
        userId: user.id,
        event: newEvent,
      });
    } else {
      createEvent({
        userId: user.id,
        event: newEvent,
      });
    }

    goHome();
  }

  function handleEventFormCancel() {
    history.goBack();
  }

  function handleEventFormDelete({ eventId, date }) {
    deleteEvent({
      userId: user.id,
      eventId,
      date,
    });

    goHome();
  }

  return (
    <div className={styles.wrapper}>
      {subPath === "new" ? (
        <EventForm userId={user.id} onSubmit={handleEventFormSubmit} onCancel={handleEventFormCancel} />
      ) : (
        <EventForm
          userId={user.id}
          event={events.byId[subPath]}
          onSubmit={handleEventFormSubmit}
          onCancel={handleEventFormCancel}
          onDelete={handleEventFormDelete}
        />
      )}
    </div>
  );
}

export default Events;
