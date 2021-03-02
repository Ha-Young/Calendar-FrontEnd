import React from "react";
import { startOfMonth, endOfMonth, format } from "date-fns";
import buildCalendar from "../../utils/buildCalendar";
import styles from "./Calendar.module.css";

export default function Calendar(props) {
  const days = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];
  const selectedDate = new Date();
  const selectedYear = format(selectedDate, "yyyy");
  const endDate = endOfMonth(selectedDate).getDate();
  const firstDay = startOfMonth(selectedDate).getDay(); // 요일
  // const initialToday = new Date();

  // const initialState = {
  //   year: format(initialToday, "yyyy"),
  //   month: format(initialToday, "MMMM"),
  //   date: format(initialToday, "dd")
  // };

  const calendar = buildCalendar(endDate, firstDay);

  return (
    <div>
      <h3>{selectedYear}</h3>
      <div className={styles.monthly_day}>
        {days.map((item, index) => {
          return (
            <div key={index + item}>{item}</div>
          );
        })}
      </div>
      <div className={styles.monthly_date}>
        {calendar.map((item, index) => {
          return (
            <div key={item + index}>{item[0]}</div>
          );
        })}
      </div>
    </div>
  );
}