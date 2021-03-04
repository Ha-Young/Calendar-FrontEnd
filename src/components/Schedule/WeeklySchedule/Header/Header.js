import React from "react";
import styles from "./Header.module.css";
import { DAY_LIST } from "../../../../constants/calendarConstants";

const Header = function ({ weekArray }) {

  return (
    <div className={styles["header"]}>
      <div className={styles["time-header"]}>Times</div>
      {weekArray.map((dateNumber, i) =>
      (
        <div className={styles["day-header"]} key={`Day${i}`}>
          <div>{DAY_LIST[i]}</div>
          <div>{dateNumber}</div>
        </div>
      ))}
    </div>
  );
};

export default Header;
