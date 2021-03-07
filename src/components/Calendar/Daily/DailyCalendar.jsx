import React, { useState } from "react";

import CalendarHeader from "../CalendarHeader";
import TimeSidebar from "../SidebarTime";
import CalendarColumn from "../../../containers/CalendarColumnContainer";
import TIME_FORM from "../../../constants/dayForm";

import moment from "moment";

import styles from "./DailyCalendar.module.css";

export default function DailyCalendar() {
  const [targetDate, setTargetDate] = useState(moment());

  const referenceDay = targetDate.clone().startOf(TIME_FORM.DATE);
  const columnDay = referenceDay.format(TIME_FORM.DAY).toString();
  const yearMonthDate = referenceDay.format(TIME_FORM.YEAR_MONTH_DAY);

  return (
    <div>
      <CalendarHeader
        calendarTime={targetDate}
        onButtonClick={setTargetDate}
        typeOfTime={TIME_FORM.DATE}
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
