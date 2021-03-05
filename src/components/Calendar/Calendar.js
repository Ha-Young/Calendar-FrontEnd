import React, { useState } from "react";
import styles from "./Calendar.module.css";

import WeeklyBody from "./WeeklyBody";
import DailyBody from "./DailyBody";
import { getFutureDate, getPastDate } from "../../utils/calander";
import CALENDAR from "../../constants/calendar";

export default function Calendar({ userId, events, addEvents }) {
  const [today, setToday] = useState(new Date());
  const [isDaily, setIsDaily] = useState(false);

  const GAP = isDaily ? CALENDAR.ONEDAY : CALENDAR.ONEWEEK;

  function handleClickPrev() {
    setToday(prevDay => getPastDate(prevDay, GAP));
  }

  function handleClickNext() {
    setToday(prevDay => getFutureDate(prevDay, GAP));
  }

  function toggleCalendar() {
    setIsDaily(prev => !prev);
  }

  function handleClickToday() {
    setToday(new Date());
  }

  return (
    <>
      <button onClick={handleClickPrev}>
        <span>prev</span>
      </button>
      <button onClick={toggleCalendar}>
        <span>WEEKLY / DAILY</span>
      </button>
      <button onClick={handleClickNext}>
        <span>next</span>
      </button>
      <div className={styles.todayDiv}>
        <span>{today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일</span>
        <button onClick={handleClickToday}>TODAY</button>
      </div>
      <div className={styles.table}>
        {isDaily
          ? <DailyBody userId={userId} today={today} addEvents={addEvents} events={events} isDaily={isDaily} />
          : <WeeklyBody userId={userId} today={today} addEvents={addEvents} events={events} isDaily={isDaily} />
        }
      </div>
    </>
  );
}
