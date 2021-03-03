import React from "react";

import HoursColumn from "../HoursColumn";
import DaysInWeekRow from "../DaysInWeekRow";
import CalendarHeader from "../CalendarHeader";

import styles from "./Week.module.css";

export default function Week({
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
