import React, { useState } from "react";
import styles from "./Calendar.module.css";
import PropTypes from 'prop-types';

import WeeklyEvents from "./WeeklyEvents";
import DailyEvents from "./DailyEvents";
import { getFutureDate, getPastDate } from "../../utils/calander";
import CALENDAR from "../../constants/calendar";
import Button from "./Button";

export default function Calendar({ userId, events, fetchDailyEvent }) {
  const [today, setToday] = useState(new Date());
  const [isDaily, setIsDaily] = useState(false);

  const thisYear = today.getFullYear();
  const thisMonth = today.getMonth() + 1;
  const dateOfToday = today.getDate();

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
      <div className={styles.todayDiv}>
        <span>{thisYear}-{thisMonth}-{dateOfToday}</span>
      </div>
      <div className={styles.buttonContainer}>
        <Button text="prev" onClick={handleClickPrev} />
        <Button text="WEEKLY / DAILY" onClick={toggleCalendar} />
        <Button text="TODAY" onClick={handleClickToday} />
        <Button text="NEXT" onClick={handleClickNext} />
      </div>
      <div className={isDaily ? styles.dailyTable : styles.table}>
        {isDaily
          ? <DailyEvents userId={userId} today={today} fetchDailyEvent={fetchDailyEvent} events={events} isDaily={isDaily} />
          : <WeeklyEvents userId={userId} today={today} fetchDailyEvent={fetchDailyEvent} events={events} isDaily={isDaily} />
        }
      </div>
    </>
  );
}

Calendar.propTypes = {
  userId: PropTypes.string.isRequired,
  events: PropTypes.object,
  fetchDailyEvent: PropTypes.bool.isRequired,
};
