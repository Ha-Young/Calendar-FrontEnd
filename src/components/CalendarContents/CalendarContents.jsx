import React, { useEffect } from "react";
import styles from "./CalendarContents.module.css";
import { readWeeklyData } from "../../api";
import { calculateWeek } from "../../reducers";

// TODO component로 빼기
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

// TODO component로 빼기
const createCalendarItem = () => {
  const items = [];

  for (let i = 0; i < 24; i++) {
    items.push(<div key={i} className={styles.calendarItem}></div>);
  }

  return items;
}

export default function CalendarContents({ selectedDate, loadEvents, events, isDailyView }) {
  let localDate = calculateWeek(selectedDate, isDailyView);

  // console.log('calendar content render')
  // console.log(localDate)
  // console.log(localDate.map(date => date.toFormat("yyyy-LL-dd")))
  console.log(events)

  useEffect(() => {
    const readData = async () => {
      // console.log('get firebase data')
      // console.log(localDate);
      const events = await readWeeklyData(localDate.map(date => date.toFormat("yyyy-LL-dd")));
      // console.log('after get events')
      loadEvents(events);
      // console.log('after dispatch action')
    }

    readData();
  }, [selectedDate, isDailyView]);

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
