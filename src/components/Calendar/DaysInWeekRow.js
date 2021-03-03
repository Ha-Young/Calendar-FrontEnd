import React from "react";
import { formatDate, getDaysInWeek } from "../../utils/utils";
import styles from "./Calendar.module.css";
import HourInDaysRow from "./HourInDaysRow";

export default function DaysInWeekRow({ now, isDayCalendarShown }) {
  const daysInWeek = getDaysInWeek(now).map((dayObj, index) => {
    return formatDate(dayObj);
  });

  const today = formatDate(now);
  console.log("today is", today);

  return (
    <div className={`${styles.rowWrapper}`}>
      {isDayCalendarShown ? (
        <HourInDaysRow day={today} isDayCalendarShown={isDayCalendarShown} />
      ) : (
        daysInWeek.map((day, index) => {
          console.log("day is", day);
          return (
            <HourInDaysRow
              day={day}
              key={index}
              isDayCalendarShown={isDayCalendarShown}
            />
          );
        })
      )}
    </div>
  );
}
