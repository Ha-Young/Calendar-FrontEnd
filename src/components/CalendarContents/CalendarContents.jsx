import React from "react";
import { useHistory } from "react-router-dom";
import { DateTime } from "luxon";
import styles from "./CalendarContents.module.css";

export default function CalendarContents({ displayDates, events, selectEvent }) {
  const history = useHistory();

  const handleEventClick = (id, dayIndex) => {
    selectEvent(id, dayIndex);
    history.push(`/events/${id}`);
  }

  const days = displayDates.map((date, index) => {
    const event = events[index];
    const items = [];

    for (let hour = 0; hour < 24; hour++) {
      let isEventExist = false;

      for (let eventKey in event) {
        const isTimeToDisplayEvent = event.hasOwnProperty(eventKey) && (hour >= DateTime.fromISO(event[eventKey].startDateTime).hour && hour <= DateTime.fromISO(event[eventKey].endDateTime).hour);

        if (isTimeToDisplayEvent) {
          isEventExist = true;
          const isStartTimeOfEvent = DateTime.fromISO(event[eventKey].startDateTime).hour === hour;

          if (isStartTimeOfEvent) {
            items.push(
              <div
                key={hour}
                className={styles.filledItem}
                onClick={() => handleEventClick(event[eventKey].uid, index)}
              >
                {event[eventKey].title}
              </div>
            );
          } else {
            items.push(
              <div
                key={hour}
                className={styles.filledItem}
                onClick={() => handleEventClick(event[eventKey].uid, index)}
              />
            );
          }
        }
      }

      if (!isEventExist) {
        items.push(
          <div
            key={hour}
            className={styles.calendarItem}
          />
        );
      }
    }

    return (
      <div key={index} className={styles.dayWrapper}>
        {items}
      </div>
    );
  });

  return (
    <div className={styles.calendarContentsWrapper}>
      {days}
    </div>
  );
}
