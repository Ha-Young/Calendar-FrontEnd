import React from "react";

import DaysInWeekRow from "components/Calendar/DaysInWeekRow";
import CalendarHeader from "components/Calendar/CalendarHeader";
import HoursColumn from "components/Calendar/HoursColumn";
import styles from "./Calendar.module.css";

export default function Calendar({
  now,
  events,
  onPrevClick,
  onNextClick,
  onDeleteEvent,
  onClickGetEventInfo,
  calendarMode,
  showModal,
}) {
  return (
    <div className={styles.wrapper}>
      <CalendarHeader
        now={now}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
        calendarMode={calendarMode}
      />
      <DaysInWeekRow
        now={now}
        calendarMode={calendarMode}
        events={events}
        showModal={showModal}
        onDeleteEvent={onDeleteEvent}
        onClickGetEventInfo={onClickGetEventInfo}
      />
      <HoursColumn />
    </div>
  );
}
