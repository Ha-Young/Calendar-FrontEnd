import React from "react";
import styles from "./Header.module.css";
import { generateWeekArray } from "../../../../utils/calendarUtils";
import { DAY_LIST } from "../../../../constants/calendarConstants";

const Header = function ({ dateObject }) {
  const { year, month, date, day } = dateObject;
  //console.log(dateObject);
  const weekArray = generateWeekArray(year, month, date, day);

  return (
    <div className={styles["header"]}>
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
