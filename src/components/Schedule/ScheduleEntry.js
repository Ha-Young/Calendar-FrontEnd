import React from "react";
import styles from "./ScheduleEntry.module.scss";
import Event from "./Event";

const eventBoxes = [...Array(24).keys()];

export default function ScheduleEntry({ events }) {
  const renderScheduleBoxes = () => {
    return eventBoxes.map((box) => (
      <div key={box}></div>
    ))
  };

  console.log(events);

  return (
    <div className={styles.Date}>
      <div>
        {renderScheduleBoxes()}
      </div>
      {events && (
        events.map((event) => {
          if (!event) return null;
          return (<Event key={`${event.startTime}-${event.endTime}`} event={event} />)
        })
      )}
    </div>
  )
}
