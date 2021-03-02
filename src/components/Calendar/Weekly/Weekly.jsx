import React, { useEffect, useState } from "react";
import styles from "./Weekly.module.css";

import buildWeekly from "./buildWeekly";
import Header from "./weeklyHeader";
import TimeSidebar from "../SidebarTime";

import moment from "moment";

export default function Weekly() {
  const [weekly, setWeekly] = useState([]);
  const [weeklyValue, setWeeklyValue] = useState(moment());

  const result = [];

  function handleClickDateBox(e) {
    console.log(e.target.getAttribute("data-id"));
  }

  for (let i = 0; i < 24; i++) {
    result.push(i);
  }

  useEffect(() => {
    setWeekly(buildWeekly(weeklyValue));
  }, [weeklyValue]);

  return (
    <div className={styles.calendar}>
      <Header value={weeklyValue} setValue={setWeeklyValue} />
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
                  <div className={styles["day-box"]}>
                    {day.format("D").toString()}
                  </div>
                  {result.map((value) => {
                    return (
                      <div
                        onClick={(e) => handleClickDateBox(e)}
                        data-id={`${day.format("YYMMDD")}_${value}`}
                        key={value}
                        className={styles["day-box"]}
                      >
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
