import React from "react";
import styles from "./DayTable.module.css";
import { Link } from "react-router-dom";
import { routeEventId } from "../../actions";

export default function DayTable ({ year, month, date, eventInfo, onEventIdClick }) {
  const CELL_NUMBER = 24;
  const timeCells = [];
  const eventDateId = `id-${year}-${month}-${date}`;
  const todayEvent = eventInfo[eventDateId];
  const todayEvents = new Array(CELL_NUMBER).fill("");

  const handleEventIdClick = (ev) => {
    console.log(ev.target)
    console.log(ev.currentTarget)
    onEventIdClick(ev.target.dataset.eventId);
  }

  for (let i = 0; i < CELL_NUMBER; i++) {
    const time = i < 12 ? `${i} AM` : `${i % 12} PM`;
    const id = i < 12 ? `${i}-AM` : `${i % 12}-PM`;

    timeCells.push({
      time,
      id
    });
  }

  for (const event in todayEvent) {
    const {eventId, eventStartHour, eventEndHour, eventTitle, eventDescription } = todayEvent[event];
    const duration = eventEndHour - eventStartHour;
    const content = `${eventTitle} - ${eventDescription}`;

    for (let i = 0; i < duration; i++) {
      todayEvents[eventStartHour + i] = {
        content,
        eventId
      }
    }
  }

  const timeTable = timeCells.map((item, index) => {
     return (
      <>
        <div key={item.id}>
          {item.time}
        </div>
        <div key={todayEvents[index].eventId}>
          <Link
            to={`/event/${todayEvents[index].eventId}`}
            data-event-id={`${todayEvents[index].eventId}`}
            onClick={handleEventIdClick}
          >
            {todayEvents[index].content}
          </Link>
        </div>
      </>
    );
  });

  return (
    // <Link to='/event' className={styles.link}>
      <div className={styles.DayTable}>
        {timeTable}
      </div>
    // </Link>
  );
}
