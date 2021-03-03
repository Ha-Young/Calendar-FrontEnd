import React, { useEffect, useState } from "react";
import styles from "./Calendar.module.css";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import CalendarContents from "../CalendarContents/CalendarContents";
import { readDailyData } from "../../api";
import { calculateWeek } from "../../reducers/index";

export default function Calendar({ selectedDate, loadEvents, events }) {
  const [isDailyView, setIsDailyView] = useState(true);

  // useEffect(() => {
  //   console.log('useEffect')
  //   const readData = async () => {
  //     const response = await readDailyData(selectedDate.toFormat("yyyy-LL-dd"));
  //   }

  //   readData();
  // }, [selectedDate]);

  return (
    <div className={styles.calendarWrapper}>
      <div>
        <button onClick={() => setIsDailyView(!isDailyView)}>Daily / Weekly Toggle</button>
      </div>
      <CalendarHeader selectedDate={isDailyView ? [selectedDate] : calculateWeek(selectedDate)} />
      <CalendarContents selectedDate={isDailyView ? [selectedDate] : calculateWeek(selectedDate)} loadEvents={loadEvents} events={events} />
    </div>
  );
}
