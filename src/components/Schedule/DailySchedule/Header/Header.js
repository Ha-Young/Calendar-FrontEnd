import React from "react";
import styles from "./Header.module.css";
import { DAY_LIST } from "../../../../constants/calendarConstants";

const Header = function ({ date }) {

  return (
    <div className={styles["header"]}>
      <div className={styles["time-header"]}>Times</div>
      <div className={styles["day-header"]} >
        <div>{DAY_LIST[date.getDay()]}</div>
        <div className={styles["date"]}>{date.getDate()}</div>
      </div>
    </div>
  );
};

export default Header;
