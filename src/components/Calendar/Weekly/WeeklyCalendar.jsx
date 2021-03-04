import React, { useState } from "react";
import styles from "./WeeklyCalendar.module.css";

import buildWeekly from "./buildWeekly";
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
        calendarDate={weekly}
        setCalendarDate={setWeekly}
        typeOfTime="week"
      />
      <section className={styles.contents}>
        <TimeSidebar />
        <div className={styles.flexItem}>
          <div className={styles.weeks}>
            {
              dayOfWeek.map(day => (
                <div className={styles.dayWeek}>{day}</div>
              ))
            }
          </div>
          {weekList.map((week) => (
            <div>
              {week.map((day) => (
                <div className={styles.day}>
                  <CalendarColumn
                    colummDay={day.format("D").toString()}
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
