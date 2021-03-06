import React, { useState } from "react";

import buildWeekly from "./buildWeekly";
import CalendarHeader from "../CalendarHeader";
import TimeSidebar from "../SidebarTime";
import CalendarColumn from "../../../containers/CalendarColumnContainer";

import styles from "./WeeklyCalendar.module.css";

import moment from "moment";

export default function WeeklyCalendar() {
  const [weekly, setWeekly] = useState(moment());

  const weekList = buildWeekly(weekly);
  const week = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];

  return (
    <div className={styles.calendar}>
      <CalendarHeader
        calendarTime={weekly}
        onButtonClick={setWeekly}
        typeOfTime="week"
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
                  columnDay={day.format("D").toString()}
                  dayID={day.format("YYYY-MM-DD")}
                />
              </div>
            ))
          ))}
        </div>
      </section>
    </div>
  );
}
