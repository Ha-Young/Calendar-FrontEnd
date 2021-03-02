import React, { useEffect, useState } from "react";
import styles from "./Weekly.module.css";

import buildWeekly from "./buildWeekly";
import Header from "./weeklyHeader";
import TimeSidebar from "../SidebarTime";

import moment from "moment";

export default function Weekly() {
  const [weekly, setWeekly] = useState([]);
  const [weeklyValue, setWeeklyValue] = useState(moment());
  console.log(weeklyValue);
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
                  <div className={styles["day-box"]}>테스트</div>
                  <div className={styles["day-box"]}>테스트</div>
                  <div className={styles["day-box"]}>테스트</div>
                  <div className={styles["day-box"]}>테스트</div>
                  <div className={styles["day-box"]}>테스트</div>
                  <div className={styles["day-box"]}>테스트</div>
                  <div className={styles["day-box"]}>테스트</div>
                  <div className={styles["day-box"]}>테스트</div>
                  <div className={styles["day-box"]}>테스트</div>
                  <div className={styles["day-box"]}>테스트</div>
                  <div className={styles["day-box"]}>테스트</div>
                  <div className={styles["day-box"]}>테스트</div>
                  <div className={styles["day-box"]}>테스트</div>
                  <div className={styles["day-box"]}>테스트</div>
                  <div className={styles["day-box"]}>테스트</div>
                  <div className={styles["day-box"]}>테스트</div>
                  <div className={styles["day-box"]}>테스트</div>
                  <div className={styles["day-box"]}>테스트</div>
                  <div className={styles["day-box"]}>테스트</div>
                  <div className={styles["day-box"]}>테스트</div>
                  <div className={styles["day-box"]}>테스트</div>
                  <div className={styles["day-box"]}>테스트</div>
                  <div className={styles["day-box"]}>테스트</div>
                  <div className={styles["day-box"]}>테스트</div>
                </div>
              ))}
            </div>
          ))}
      </div>
      </section>
    </div>
  );
}
