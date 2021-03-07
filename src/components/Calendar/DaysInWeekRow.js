import React from "react";
import { formatDate, getDaysInWeek } from "utils";
import styles from "./Calendar.module.css";
import HourInDaysColumn from "./HourInDaysColumn";

export default function DaysInWeekRow({
  now,
  calendarMode,
  events,
  onDeleteEvent,
  onClickGetEventInfo,
  showModal,
}) {
  const daysInWeek = getDaysInWeek(now).map((dayObj, index) => {
    return formatDate(dayObj);
  });
  const today = formatDate(now);

  return (
    <div className={`${styles.rowWrapper}`}>
      {calendarMode === "day" ? (
        <HourInDaysColumn
          day={today}
          calendarMode={calendarMode}
          events={events}
          onDeleteEvent={onDeleteEvent}
          onClickGetEventInfo={onClickGetEventInfo}
          showModal={showModal}
        />
      ) : (
        daysInWeek.map((day, index) => {
          return (
            <HourInDaysColumn
              day={day}
              key={index}
              calendarMode={calendarMode}
              events={events}
              onDeleteEvent={onDeleteEvent}
              onClickGetEventInfo={onClickGetEventInfo}
              showModal={showModal}
            />
          );
        })
      )}
    </div>
  );
}
