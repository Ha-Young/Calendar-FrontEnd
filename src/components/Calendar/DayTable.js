import React from "react";
import styles from "./DayTable.module.css";
import { Link } from "react-router-dom";

export default function DayTable ({ year, month, date, day, eventInfo }) {
  const CELL_NUMBER = 24;
  const timeCells = [];
  const eventDateId = `id-${year}-${month}-${date}`;
  const todayEvent = eventInfo[eventDateId];
  const todayEvents = new Array(CELL_NUMBER).fill("");

  for (let i = 0; i < CELL_NUMBER; i++) {
    const time = i < 12 ? `${i} AM` : `${i % 12} PM`;
    const id = i < 12 ? `${i}-AM` : `${i % 12}-PM`;

    timeCells.push({
      time,
      id
    });
  }


  for (const event in todayEvent) {
    const {eventStartHour, eventEndHour, eventTitle, eventDescription } = todayEvent[event];
    const duration = eventEndHour - eventStartHour;

    for (let i = 0; i < duration; i++) {
      todayEvents[eventStartHour + i] = `${eventTitle} - ${eventDescription}`;
    }
  }

  const timeTable = timeCells.map((item, index) => {
     return (
      <>
        <div key={item.id}>
          {item.time}
        </div>
        <div key={`${item.id}-todayEvents`}>
          {todayEvents[index]}
        </div>
      </>
    );
  });

  return (
    <Link to='/event' className={styles.link}>
      <div className={styles.DayTable}>
        {timeTable}
      </div>
    </Link>
  );
}
