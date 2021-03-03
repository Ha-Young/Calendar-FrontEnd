import React, { useEffect, useState } from "react";
import styles from "./Weekly.module.css";

import buildWeekly from "./buildWeekly";
import Header from "../header";
import TimeSidebar from "../SidebarTime";
import Calendar from "../Calendar";

import moment from "moment";

export default function Weekly() {
  const [weekly, setWeekly] = useState([]);
  const [weeklyValue, setWeeklyValue] = useState(moment());

  const dateID = weeklyValue.format("YYYYMMMMDD");

  function handleClickDateBox(e) {
    console.log(e.target.getAttribute("data-id"));
  }

  useEffect(() => {
    setWeekly(buildWeekly(weeklyValue));
  }, [weeklyValue]);

  return (
    <div className={styles.calendar}>
      <Header
        value={weeklyValue}
        setValue={setWeeklyValue}
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
          {weekly.map((week) => (
            <div>
              {week.map((day) => (
                <div
                  className={styles.day}
                  onClick={() => setWeeklyValue(day)}
                >
                  <Calendar
                    day={day.format("D").toString()}
                    dayID={dateID}
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
