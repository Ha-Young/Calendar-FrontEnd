import React, { useEffect } from "react";
import styles from "./WeeklyCalendarContents.module.css";
import { readWeeklyData } from "../../api";

const createCalendarItem = (dayIndex) => {
  const items = [];

  for (let i = 0; i < 24; i++) {
    items.push(
      <div
        key={i * 2}
        className={styles.calendarItem}
      />
    );
  }

  return items;
}

const createCalendar = (week) => {
  const days = week.map((day, dayIndex) => {
    return (
      <div key={dayIndex} className={styles.calendarItemWrapper}>
        <div className={styles.calendarItem}>
          <div>{day.weekdayShort}</div>
          <div>{day.day}</div>
        </div>
        {createCalendarItem(dayIndex)}
      </div>
    );
  });

  return days;
}

export default function WeeklyCalendarContents({ selectedWeek, loadEvents, events }) {
  useEffect(() => {
    const readData = async () => {
      const events = await readWeeklyData(selectedWeek.map(date => date.toFormat("yyyy-LL-dd")));
      loadEvents(events);
    }

    readData();
  }, [selectedWeek]);

  useEffect(() => {
    console.log(document.querySelector(`div[data-dayindex="1"]`).classList);
    // events.map((dailyEvent, dayIndex) => {
    //   document.querySelector(`div[data-dayindex=${dayIndex}]`).className
    // })
  }, [events]);

  return (
    <div className={styles.wrapper}>
      {selectedWeek && createCalendar(selectedWeek)}
    </div>
  );
}
