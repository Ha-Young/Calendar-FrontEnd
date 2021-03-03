import React, { useState } from "react";
import styles from "./DailyCalendar.module.css";

import CalendarHeader from "../CalendarHeader";
import TimeSidebar from "../SidebarTime";
import CalendarColumn from "../CalendarColumn";

import moment from "moment";

export default function DailyCalendar({ history }) {
  const [day, setDay] = useState(moment());

  const startDay = day.clone().startOf("day");
  const newDate = startDay.format("D").toString();
  const dateID = startDay.format("YYYYMMMMDD");

  function handleClickDateBox(e) {
    if (e.target.hasAttribute("data-event")) {
      const eventQuery = e.target.getAttribute("data-id");

      history.push(`/event/${eventQuery}`);
    } else {
      console.log(e.target.getAttribute("data-id"));
      // history.push("/event/new");
    }
  }

  return (
    <div className={styles.calendar}>
      <CalendarHeader
        value={day}
        setValue={setDay}
        TypeOfTime="day"
      />
      <section className={styles.content}>
        <TimeSidebar />
        <div className={styles["flex-item"]}>
          <CalendarColumn
            day={newDate}
            dayID={dateID}
            onClickDate={handleClickDateBox}
          />
        </div>
      </section>
    </div>
  );
}
