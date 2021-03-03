import React, { useEffect } from "react";
import styles from "./CalendarContents.module.css";
import { readWeeklyData } from "../../api";

const createTimeLineItem = () => {
  const items = [];

  for (let i = 0; i < 24; i++) {
    let prefix;

    if (i < 12) prefix = "오전";
    else prefix = "오후";

    items.push(<div key={i * 2} className={styles.timeLineItem}>{`${prefix} ${i}시`}</div>);
  }

  return items;
}

const createCalendarItem = () => {
  const items = [];

  for (let i = 0; i < 24; i++) {
    items.push(<div key={i} className={styles.calendarItem}></div>);
  }

  return items;
}

export default function CalendarContents({ selectedDate, loadEvents, events }) {
  debugger
  console.log('calendar content render')
  console.log(selectedDate)
  console.log(selectedDate.map(date => date.toFormat("yyyy-LL-dd")))
  console.log(events)

  useEffect(() => {
    const readData = async () => {
      console.log('get firebase data')
      console.log(selectedDate);
      const events = await readWeeklyData(selectedDate.map(date => date.toFormat("yyyy-LL-dd")));
      console.log('after get events')
      loadEvents(events);
      console.log('after dispatch action')
    }

    readData();
  }, [selectedDate]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.timeLineWrapper}>
        {createTimeLineItem()}
      </div>
      <div className={styles.calendarItemWrapper}>
        {createCalendarItem()}
      </div>
    </div>
  );
}
