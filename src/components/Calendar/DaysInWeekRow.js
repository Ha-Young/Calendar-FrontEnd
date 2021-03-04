import React from "react";
import { formatDate, getDaysInWeek } from "../../utils/utils";
import styles from "./Calendar.module.css";
import HourInDaysRow from "./HourInDaysColumn";

export default function DaysInWeekRow({ now, isDayCalendarShown, events }) {
  const daysInWeek = getDaysInWeek(now).map((dayObj, index) => {
    return formatDate(dayObj);
  });
  const today = formatDate(now);

  return (
    <div className={`${styles.rowWrapper}`}>
      {isDayCalendarShown ? (
        <HourInDaysRow
          day={today}
          isDayCalendarShown={isDayCalendarShown}
          events={events}
        />
      ) : (
        daysInWeek.map((day, index) => {
          return (
            <HourInDaysRow
              day={day}
              key={index}
              isDayCalendarShown={isDayCalendarShown}
              events={events}
            />
          );
        })
      )}
    </div>
  );
}
