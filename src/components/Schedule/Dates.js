import React from "react";
import { formatDate } from "../../utils/SetDate";
import styles from "./Dates.module.scss";

export default function Dates({ calendarMode, today, selectedDate, week }) {
  const formattedTodayDate = formatDate(today, "yyyy-MM-dd-E");
  const formattedSelectedDate = formatDate(selectedDate, "yyyy-MM-dd-E");
  const [ year, month, dateNumber, day ] = formattedSelectedDate.split("-");

  const formatWeek = () => {
    const formattedWeek = week.map((date) => formatDate(date, "yyyy-MM-dd-E"));
    return formattedWeek;
  };

  const checkTodayClass = (date) => {
    if (formattedTodayDate === date) {
      return `${styles.number} ${styles.today}`;
    } else {
      return `${styles.number}`;
    }
  }

  return (
    <ul className={styles.Dates}>
      {calendarMode === "weekly"
       ? (
          formatWeek().map((date) => {
            const [ year, month, dateNumber, day ] = date.split("-");
            return (
              <li key={date}>
                <span className={checkTodayClass(date)}>{dateNumber}</span>
                <span className={styles.day}>{day}</span>
              </li>
            )
          })
        )
        : (
          <li>
            <span
              className={checkTodayClass(formattedSelectedDate)}>
              {dateNumber}
            </span>
            <span className={styles.day}>{day}</span>
          </li>
        )}
    </ul>
  )
}
