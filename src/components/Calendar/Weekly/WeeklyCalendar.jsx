import React, { useState } from "react";
import styles from "./WeeklyCalendar.module.css";

import buildWeekly from "./buildWeekly";
import CalendarHeader from "../CalendarHeader";
import TimeSidebar from "../SidebarTime";
import Calendar from "../CalendarColumn";

import moment from "moment";

export default function WeeklyCalendar({ history }) {
  const [weekly, setWeekly] = useState(moment());

  const weekList = buildWeekly(weekly);

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
        value={weekly}
        setValue={setWeekly}
        TypeOfTime="week"
      />
      <section className={styles.contents}>
        <TimeSidebar />
        <div className={styles["flex-item"]}>
          <div className={styles.weeks}>
            {
              ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"].map(day => (
                <div className={styles["day-week"]}>{day}</div>
              ))
            }
          </div>
          {weekList.map((week) => (
            <div>
              {week.map((day) => (
                <div className={styles.day}>
                  <Calendar
                    day={day.format("D").toString()}
                    dayID={day.format("YYYY-MM-DD")}
                    onClickDate={handleClickDateBox}
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
