import React from "react";
import styles from "./Column.module.css"
import EventBar from "./EventBar";
import { getHours, format } from "date-fns";
import { Link } from "react-router-dom";

export default function Column({ day, isEventBarWide, events, isColorReverse }) {
  const cells = Array.from({ length: 24 });
  const COLOR_SET_LENGTH = 4

  if (events) {
    for (const [i, event] of events.entries()) {
      const startTime = getHours(event.startDate);
      cells[startTime] = { 
        event, 
        colorNum: isColorReverse ? COLOR_SET_LENGTH - 1 - i : i,
      };
    }
  }

  return (
    <div className={styles.Column}>
      {cells.map((val, hour) => {
        if (val) {
          const {event, colorNum} = val;
          return (
            <div 
              className={styles.Cell}
              key={hour}
            >
              <EventBar 
                isWide={isEventBarWide} 
                event={event}
                colorNum = {colorNum}
              />
            </div>
          );
        }

        return (
          <Link
            to={{
              pathname:"/events/new",
              state: { selectedEvent: {
                date: format(day, "yyyy-MM-dd"),
                start: hour < 10 ? `0${hour}:00` : `${hour}:00`,
              }},
            }}
            key={hour}
          >
            <div 
              className={styles.Cell}
            />
          </Link>
        );
      })}
    </div>
  );
}