import React from "react";
import styles from "./WeekTable.module.css";
import { Link } from "react-router-dom";

export default function WeekTable ({ currentDate, eventInfo, onEventIdClick }) {
  const { year, month, date, day } = currentDate;
  const TIMECELL_NUMBER = 24;
  const DAYCELL_NUMBER = 7;
  const timeCells = [];
  const dayCells = ["", "일" , "월", "화", "수", "목", "금", "토"];
  const datesOfWeek = [];
  const dayEvents = [];
  const weekEvents = [];

  for (let i = 0; i < DAYCELL_NUMBER; i++) {
    weekEvents.push([]);
  }

  for (let i = 0; i < DAYCELL_NUMBER; i++) {
    datesOfWeek.push(date - (day - 1 - i));
  }

  for (let i = 0; i < DAYCELL_NUMBER; i++) {
    dayEvents[i] = eventInfo[`id-${year}-${month}-${datesOfWeek[i]}`];
  }

  for (let i = 0; i < dayEvents.length; i++) {
    for (const event in dayEvents[i]) {
      const eventInfo = dayEvents[i][event];
      const duration = eventInfo["end-hour"] - eventInfo["start-hour"];
      const content = `${eventInfo["title"]} - ${eventInfo["description"]}`;
      const eventId = `${eventInfo["start-year"]}-${eventInfo["start-month"]}-${eventInfo["start-date"]}-${eventInfo["start-hour"]}`;
      for (let j = 0; j < duration; j++) {
        console.log(weekEvents[i]);
        weekEvents[i][eventInfo["start-hour"] + j] = {
          content,
          eventId
        }
      }
    }
  }

  const eventTable = [];
  console.log(weekEvents);
  for (let i = 0; i < weekEvents.length; i++) {
    eventTable[i] = weekEvents[i].map((item, index) => {
      return (
        <>
          <div key={weekEvents[i][index].eventId}>
            <Link
              to={`/event/${weekEvents[i][index].eventId}`}
              data-event-id={`${weekEvents[i][index].eventId}`}
              // onClick={handleEventIdClick}
            >
              {weekEvents[i][index].content}
            </Link>
          </div>
        </>
      );
    });
  }


  for (let i = 0; i < TIMECELL_NUMBER; i++) {
    const time = i < 12 ? `${i} AM` : `${i % 12} PM`;
    const id = i < 12 ? `${i}-AM` : `${i % 12}-PM`;

    timeCells.push({
      time,
      id
    });
  }

  const timeTable = timeCells.map((item) => {
    return (
    <div
      key={item.id}
      className={styles.timeCell}
    >
      {item.time}
    </div>
    );
  });

  const dayTable = dayCells.map((item, index) => {
    return (
    <div
      key={`${item}-${index}`}
      className={styles.dayCell}
    >
      {item}
    </div>
    );
  });


  return (
    <div className={styles.WeekTable}>
      <div className={styles.dayTable}>
        {dayTable}
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.timeTable}>
          {timeTable}
        </div>
        <div className={styles.eventTable}>
          {eventTable[0]}
        </div>
        <div className={styles.eventTable}>
          {eventTable[1]}
        </div>
        <div className={styles.eventTable}>
          {eventTable[1]}
        </div>
        <div className={styles.eventTable}>
          {eventTable[1]}
        </div>
        <div className={styles.eventTable}>
          {eventTable[1]}
        </div>
        <div className={styles.eventTable}>
          {eventTable[1]}
        </div>
        <div className={styles.eventTable}>
          {eventTable[1]}
        </div>
      </div>
    </div>
  );
}
