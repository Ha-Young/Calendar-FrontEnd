import React, { useEffect, useState } from "react";
import styles from "./Daily.module.css";

import buildDaily from "./buildDaily";
import Header from "./DailyHeader";
import TimeSidebar from "../SidebarTime";

import moment from "moment";

export default function Daily() {
  const [day, setDay] = useState("");
  const [dayValue, setDayValue] = useState(moment());

  useEffect(() => {
    setDay(buildDaily(dayValue));
  }, [dayValue]);

  return (
    <div className={styles.calendar}>
      <Header value={dayValue} setValue={setDayValue} />
      <section className={styles.content}>
        <TimeSidebar />
        <div className={styles["flex-item"]}>
          <div className={styles.today}>
            {day ? day.format("D").toString() : null}
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
      </section>
    </div>
  );
}
