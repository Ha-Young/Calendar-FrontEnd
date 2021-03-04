import React, { useEffect, useState } from "react";
import ScheduleEvent from "./ScheduleEvent";
import { getEvents } from "../../api/index";
import styles from "./Schedule.module.scss";

const eventBoxes = [...Array(24).keys()];

export default function Schedule({ eventDate }) {
  const [ events, setEvents ] = useState(null);

  useEffect(() => {
    fetchEvents(eventDate);
  }, [eventDate]);

  const renderScheduleBoxes = () => {
    return eventBoxes.map((box) => (
      <div key={box}></div>
    ))
  };

  const fetchEvents = async (date) => {
    const result = await getEvents(date);
    console.log(result);
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
  )
}
