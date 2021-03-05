import React from "react";
import { formatDate, getDaysInWeek } from "../../utils/utils";
import styles from "./Calendar.module.css";
import HourInDaysColumn from "./HourInDaysColumn";

export default function DaysInWeekRow({
  now,
  isDayCalendarShown,
  events,
  onDeleteEvent,
}) {
  const daysInWeek = getDaysInWeek(now).map((dayObj, index) => {
    return formatDate(dayObj);
  });
  const today = formatDate(now);

  return (
    <div className={`${styles.rowWrapper}`}>
      {isDayCalendarShown ? (
        <HourInDaysColumn
          day={today}
          isDayCalendarShown={isDayCalendarShown}
          events={events}
          onDeleteEvent={onDeleteEvent}
        />
      ) : (
        daysInWeek.map((day, index) => {
          return (
            <HourInDaysColumn
              day={day}
              key={index}
              isDayCalendarShown={isDayCalendarShown}
              events={events}
              onDeleteEvent={onDeleteEvent}
            />
          );
        })
      )}
    </div>
  );
}
