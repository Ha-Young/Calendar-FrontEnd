import React, { useEffect } from "react";

import Schedule from "./Schedule";
import { formatDate } from "../../utils/SetDate";

import styles from "./ScheduleList.module.scss";

const timeLine = [...Array(24).keys()].slice(1);

export default function ScheduleList({ calendarMode, selectedDate, week }) {
  const renderTimeLine = (timeline) => {
    return timeline.map((time, index) => {
      return <li key={`time-${time}`}><span>{time}:00</span></li>
    });
  };

  const renderWeeklySchedule = (dateList) => {
    const weeklyDateList = dateList.map((date) => formatDate(date, "yyyy-MM-dd"));
    return (
      weeklyDateList.map((date) => (
        <Schedule key={date} eventDate={date} />
      ))
    );
  };

  const renderDailySchedule = (date) => {
    const dailyDate = formatDate(date, "yyyy-MM-dd");
    return (
      <Schedule eventDate={dailyDate} />
    );
  };

  return (
    <div className={styles.Schedule}>
      <ul className={styles.Timeline}>
        {renderTimeLine(timeLine)}
      </ul>
      {calendarMode === "weekly"
        ? renderWeeklySchedule(week)
        : renderDailySchedule(selectedDate)
      }
    </div>
  )
}
