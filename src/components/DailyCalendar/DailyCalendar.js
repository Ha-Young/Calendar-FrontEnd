import React, { useState, useEffect } from "react";
import styles from "./DailyCalendar.module.css"
import CalendarRow from "../CalendarRow/CalendarRow";
import TimeSidebar from "../TimeSidebar/TimeSidebar";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

function DailyCalendar({ eventInfo }) {
  const [todayDate, setTodayDate] = useState(dayjs());
  const [date, setDate] = useState(todayDate.format("YYYY-MM-DD"));

  const prevMonthSelector = "<";
  const nextMonthSelector = ">";

  function goNextDay() {
    setTodayDate(todayDate.add(1, "day"));
  }

  function goPrevDay() {
    setTodayDate(todayDate.subtract(1, "day"));
  }

  useEffect(() => {
    setDate(todayDate.format("YYYY-MM-DD"));
  }, [todayDate]);

  return (
    <>
      <div>
        <button className={styles.button} onClick={goPrevDay}>{prevMonthSelector}</button>
        <span className="current-month-selector">{date}</span>
        <button className={styles.button} onClick={goNextDay}>{nextMonthSelector}</button>
      </div>
      <div className={styles.div}>
        <TimeSidebar />
          <div className={styles.grid}>
              <CalendarRow currentDate={date} eventInfo={eventInfo}/>
          </div>
      </div>
    </>
  );
}

export default DailyCalendar;
