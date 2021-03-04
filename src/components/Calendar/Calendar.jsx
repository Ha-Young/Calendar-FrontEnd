import React, { useEffect, useState } from "react";
import styles from "./Calendar.module.css";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import CalendarContents from "../../containers/CalendarContents";
import { readDailyData } from "../../api";

export default function Calendar({ selectedDate, loadEvents, events }) {
  // TODO sotre로 빼고 버튼 onClick에 action 만들어서 넣어주기
  const [isDailyView, setIsDailyView] = useState(true);

  return (
    <div className={styles.calendarWrapper}>
      <div>
        <button onClick={() => setIsDailyView(!isDailyView)}>Daily / Weekly Toggle</button>
      </div>
      <CalendarHeader selectedDate={selectedDate} isDailyView={isDailyView} />
      <CalendarContents />
    </div>
  );
}
