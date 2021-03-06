import React from "react";
import styles from "./WeekTable.module.css";
import { Link } from "react-router-dom";

export default function WeekTable ({ currentDate, eventInfo }) {
  const { year, month, date, day } = currentDate;
  const TIMECELL_NUMBER = 24;
  const DAYCELL_NUMBER = 7;
  const timeCells = [];
  const dayCells = ["", "일" , "월", "화", "수", "목", "금", "토"];
  const datesOfWeek = [];

  for (let i = 0; i < TIMECELL_NUMBER; i++) {
    const time = i < 12 ? `${i} AM` : `${i % 12} PM`;
    const id = i < 12 ? `${i}-AM` : `${i % 12}-PM`;

    timeCells.push({time, id});
  }

  const timeTable = timeCells.map((item) => {
    return (
    <div key={item.id} className={styles.timeCell}>
      {item.time}
    </div>
    );
  });

  const dayTable = dayCells.map((item, index) => {
    return (
    <div key={`${item}-${index}`} className={styles.dayCell}>
      {item}
    </div>
    );
  });

  for (let i = 0; i < DAYCELL_NUMBER; i++) {
    const calendarDate = new Date(year, month - 1, date);
    calendarDate.setDate(calendarDate.getDate() - day + i);
    datesOfWeek.push([calendarDate.getFullYear(), calendarDate.getMonth() + 1, calendarDate.getDate()]);
  }

  const weekEvent = datesOfWeek.map((day) => {
    const year = day[0];
    const month = day[1];
    const date = day[2];

    const dayEvent = timeCells.map((item, hour) => {
      const event = eventInfo[`id-${year}-${month}-${date}`]
        && eventInfo[`id-${year}-${month}-${date}`][`id-${hour}`]
        && eventInfo[`id-${year}-${month}-${date}`][`id-${hour}`]["title"];

      return (
        <div className={styles.event}>
          {event}
        </div>
      );
    });

    return (
      <div className={styles.dayEvent}>
        {dayEvent}
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
        <div className={styles.weekEvent}>
          {weekEvent}
        </div>
      </div>
    </div>
  );
}
