import React, { useState } from "react";
import styles from "./DailyCalendar.module.css";

import CalendarHeader from "../CalendarHeader";
import TimeSidebar from "../SidebarTime";
import CalendarColumn from "../../../containers/CalendarColumnContainer";

import moment from "moment";

export default function DailyCalendar() {
  const [day, setDay] = useState(moment());

  const startDay = day.clone().startOf("day");
  const columnDay = startDay.format("D").toString();
  const yearMonthDate = startDay.format("YYYY-MM-DD");

  return (
    <div className={styles.calendar}>
      <CalendarHeader
        calendarDate={day}
        setCalendarDate={setDay}
        typeOfTime="day"
      />
      <section className={styles.content}>
        <TimeSidebar />
        <div className={styles.flexItem}>
          <CalendarColumn
            colummDay={columnDay}
            dayID={yearMonthDate}
          />
        </div>
      </section>
    </div>
  );
}
