import React from "react";

import HoursColumn from "../HoursColumn";
import DaysInWeekRow from "../DaysInWeekRow";
import CalendarHeader from "../CalendarHeader";

import styles from "./Week.module.css";

export default function Week({
  now,
  events,
  onPrevClick,
  onNextClick,
  onDeleteEvent,
  onClickGetEventInfo,
  isDayCalendarShown,
  showModal,
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
        showModal={showModal}
        onDeleteEvent={onDeleteEvent}
        onClickGetEventInfo={onClickGetEventInfo}
      />
    </div>
  );
}
