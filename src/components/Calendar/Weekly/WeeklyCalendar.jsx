import React, { useState } from "react";

import buildWeekly from "./buildWeekly";
import CalendarHeader from "../CalendarHeader";
import TimeSidebar from "../SidebarTime";
import CalendarColumn from "../../../containers/CalendarColumnContainer";
import TIME_FORM from "../../../constants/dayForm";

import styles from "./WeeklyCalendar.module.css";

import moment from "moment";

export default function WeeklyCalendar() {
  const [targetDate, setTargetDate] = useState(moment());

  const weekList = buildWeekly(targetDate);
  const week = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];

  return (
    <div className={styles.calendar}>
      <CalendarHeader
        calendarTime={targetDate}
        onButtonClick={setTargetDate}
        typeOfTime={TIME_FORM.WEEK}
      />
      <section className={styles.content}>
        <TimeSidebar />
        <div className={styles.colummDay}>
          <div className={styles.weeks}>
            {
              week.map(day => (
                <div key={day} className={styles.dayWeek}>{day}</div>
              ))
            }
          </div>
          {weekList.map((week) => (
            week.map((day) => (
              <div key={day} className={styles.day}>
                <CalendarColumn
                  columnDay={day.format(TIME_FORM.DAY).toString()}
                  dayID={day.format(TIME_FORM.YEAR_MONTH_DAY)}
                />
              </div>
            ))
          ))}
        </div>
      </section>
    </div>
  );
}
