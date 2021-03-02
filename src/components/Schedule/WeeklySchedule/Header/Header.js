import React from "react";
import styles from "./Header.module.css";
import { generateWeekArray } from "../../../../utils/calendarUtils";
import { DAY_LIST } from "../../../../constants/calendarConstants";

const Header = function ({ date }) {
  const weekArray = generateWeekArray(date);

  return (
    <div className={styles["header"]}>
      <div className={styles["time-header"]}>Times</div>
      {weekArray.map((date, i) =>
      (
        <div className={styles["day-header"]} key={`Day${i}`}>
          <div>{DAY_LIST[i]}</div>
          <div>{date}</div>
        </div>
      ))}
    </div>
  );
};

export default Header;
