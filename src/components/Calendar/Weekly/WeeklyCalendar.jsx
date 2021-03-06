import React, { useState } from "react";
import styles from "./WeeklyCalendar.module.css";

import buildWeekly from "../../../util/buildWeekly";
import CalendarHeader from "../CalendarHeader";
import TimeSidebar from "../SidebarTime";
import CalendarColumn from "../../../containers/CalendarColumnContainer";

import moment from "moment";

export default function WeeklyCalendar() {
  const [weekly, setWeekly] = useState(moment());

  const weekList = buildWeekly(weekly);
  const dayOfWeek = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];

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
              dayOfWeek.map(day => (
                <div key={day} className={styles.dayWeek}>{day}</div>
              ))
            }
          </div>
          {weekList.map((week) => (
            <div key={week}>
              {week.map((day) => (
                <div key={day} className={styles.day}>
                  <CalendarColumn
                    columnDay={day.format("D").toString()}
                    dayID={day.format("YYYY-MM-DD")}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
