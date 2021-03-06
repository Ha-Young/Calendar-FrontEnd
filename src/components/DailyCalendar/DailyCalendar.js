import React, { useState, useEffect } from "react";
import styles from "./DailyCalendar.module.css"
import CalendarRow from "../CalendarRow/CalendarRow";
import TimeSidebar from "../TimeSidebar/TimeSidebar";
// import dayjs from "dayjs";

function DailyCalendar({ eventInfo, date, goNextDay, goPrevDay, setId }) {
  const prevMonthSelector = "<";
  const nextMonthSelector = ">";

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
              <CalendarRow currentDate={date} eventInfo={eventInfo} setId={setId}/>
          </div>
      </div>
    </>
  );
}

export default DailyCalendar;
