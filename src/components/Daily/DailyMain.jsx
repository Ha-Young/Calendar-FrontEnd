import React from "react";
import { dateConst } from "constants/constants";
import styles from "./DailyMain.module.css";

const DailyMain = ({ day }) => {
  return (
    <section className={styles.container}>
      <div className={styles.timeContainer}>
        {dateConst.TIME_LIST.map((time) => (
          <div key={time} className={styles.eachTime}>
            {time}시
          </div>
        ))}
      </div>
      <div className={styles.eventContainer}>
        {dateConst.TIME_LIST.map((time) => (
          <div key={time} className={styles.eachTime}></div>
        ))}
      </div>
    </section>
  );
};

export default DailyMain;
