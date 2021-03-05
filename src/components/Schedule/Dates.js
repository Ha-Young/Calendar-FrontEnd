import React from "react";
import { formatDate } from "../../utils/SetDate";
import styles from "./Dates.module.scss";

export default function Dates({ calendarMode, today, selectedDate, week }) {
  const formattedTodayDate = formatDate(today, "yyyy-MM-dd-E");
  const formattedSelectedDate = formatDate(selectedDate, "yyyy-MM-dd-E");
  const [ dateNumber, day ] = formattedSelectedDate.split("-").slice(2);

  const formatWeek = (weekList) => {
    const formattedWeek = weekList.map((date) => formatDate(date, "yyyy-MM-dd-E"));
    return formattedWeek;
  };

  const checkTodayClass = (date) => {
    if (formattedTodayDate === date) {
      return `${styles.number} ${styles.today}`;
    } else {
      return `${styles.number}`;
    }
  };

  return (
    <ul className={styles.Dates}>
      {calendarMode === "weekly"
       ? (
          formatWeek(week).map((date) => {
            const [ dateNumber, day ] = date.split("-").slice(2);
            return (
              <li key={date}>
                <span className={checkTodayClass(date)}>{dateNumber}</span>
                <span className={styles.day}>{day}</span>
              </li>
            );
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
        )
      }
    </ul>
  );
}
