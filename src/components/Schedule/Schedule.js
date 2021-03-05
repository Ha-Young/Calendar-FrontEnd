import React, { useEffect, useState } from "react";
import ScheduleEvent from "./ScheduleEvent";
import { getEvents } from "../../api/index";
import styles from "./Schedule.module.scss";

const eventBoxes = [...Array(24).keys()];

export default function Schedule({ userId, eventDate, saveEventInStore, eventsInStore }) {
  const [ events, setEvents ] = useState(null);

  useEffect(() => {
    if (eventsInStore.byDates.hasOwnProperty(eventDate)) {
      return;
    }
    fetchEvents(userId, eventDate);
  }, [eventDate]);

  useEffect(() => {
    if (eventsInStore.byDates.hasOwnProperty(eventDate)) {
      const eventList = eventsInStore.byDates[eventDate];
      let result = [];

      for (const event in eventList) {
        result.push(eventList[event]);
      }

      setEvents(result);
    }
  }, [eventDate]);

  const renderScheduleBoxes = () => {
    return eventBoxes.map((box) => (
      <div key={box}></div>
    ))
  };

  const fetchEvents = async (userId, date) => {
    const result = await getEvents(userId, date);
    saveEventInStore(eventDate, result);
    setEvents(result);
  };

  return (
    <div className={styles.Date}>
      <div>
        {renderScheduleBoxes()}
      </div>
      {(events && events.length !== 0) && (
        events.map((event) => {
          return (<ScheduleEvent key={`${event.startTime}-${event.endTime}`} event={event} />)
        })
      )}
    </div>
  );
}
