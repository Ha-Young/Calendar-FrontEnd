import React from "react";
import { IoHourglass } from "react-icons/io5";
import { Link } from "react-router-dom";
import TimeTable from "../TimeTable/TimeTable";
import styles from "./WeekTable.module.css";

export default function WeekTable ({ currentDate, eventInfo }) {
  const { year, month, date, day } = currentDate;
  const DAYCELL_NUMBER = 7;
  const TIMECELL_NUMBER = 24;
  const timeCells = new Array(TIMECELL_NUMBER).fill(0);
  const dayCells = ["", "일" , "월", "화", "수", "목", "금", "토"];
  const datesOfWeek = [];

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
      const eventId = eventInfo[`id-${year}-${month}-${date}`]
        && eventInfo[`id-${year}-${month}-${date}`][`id-${hour}`]
        && eventInfo[`id-${year}-${month}-${date}`][`id-${hour}`]["evnetId"];

      const event = eventInfo[`id-${year}-${month}-${date}`]
        && eventInfo[`id-${year}-${month}-${date}`][`id-${hour}`]
        && eventInfo[`id-${year}-${month}-${date}`][`id-${hour}`]["title"];

      return (
        <div className={styles.event} key={eventId}>
          <Link to={`/event/${eventId}`}>
            {event}
          </Link>
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
        <TimeTable />
        <div className={styles.weekEvent}>
          {weekEvent}
        </div>
      </div>
    </div>
  );
}
