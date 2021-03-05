import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import styles from "./Column.module.css"
import EventBar from "./EventBar";

export default function Column({ day, isEventBarWide, events, isColorReverse }) {
  const cells = Array.from({ length: 24 });
  const COLOR_SET_LENGTH = 5;

  if (events) {
    for (const [i, event] of events.entries()) {
      const startTime = Number(event.startTime);
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
                startTime: hour < 10 ? `0${hour}` : `${hour}`,
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
