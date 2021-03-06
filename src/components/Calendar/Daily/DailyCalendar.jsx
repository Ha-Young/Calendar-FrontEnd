import React, { useState } from "react";

import CalendarHeader from "../CalendarHeader";
import TimeSidebar from "../SidebarTime";
import CalendarColumn from "../../../containers/CalendarColumnContainer";

import moment from "moment";

import styles from "./DailyCalendar.module.css";

export default function DailyCalendar() {
  const [day, setDay] = useState(moment());

  const referenceDay = day.clone().startOf("day");
  const columnDay = referenceDay.format("D").toString();
  const yearMonthDate = referenceDay.format("YYYY-MM-DD");

  return (
    <div>
      <CalendarHeader
        calendarTime={day}
        onButtonClick={setDay}
        typeOfTime="day"
      />
      <section className={styles.calendar}>
        <TimeSidebar />
        <div className={styles.columnDay}>
          <CalendarColumn
            columnDay={columnDay}
            dayID={yearMonthDate}
          />
        </div>
      </section>
    </div>
  );
}
