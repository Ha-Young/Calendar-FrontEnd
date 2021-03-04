import React from "react";

import DaysInWeekRow from "../DaysInWeekRow";
import CalendarHeader from "../CalendarHeader";

import styles from "./Day.module.css";

export default function Day({
  now,
  events,
  onPrevClick,
  onNextClick,
  isDayCalendarShown,
}) {
  return (
    <div className={styles.wrapper}>
      <CalendarHeader
        now={now}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
        isDayCalendarShown={isDayCalendarShown}
      />
      <DaysInWeekRow
        now={now}
        isDayCalendarShown={isDayCalendarShown}
        events={events}
      />
    </div>
  );
}
