import React from "react";

import HoursColumn from "../HoursColumn";
import DaysInWeekRow from "../DaysInWeekRow";
import CalendarHeader from "../CalendarHeader";

import styles from "./Day.module.css";

export default function Day({
  now,
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
      <DaysInWeekRow now={now} isDayCalendarShown={isDayCalendarShown} />
    </div>
  );
}
