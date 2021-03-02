import React from "react";

import { getHourList } from "../../utils/date";
import styles from "./HoursBar.module.css";

function HoursBar() {
  const hourList = getHourList();

  return (
    <div className={styles.HoursBar}>
      {hourList.map((v) => {
        const time = v < 10 ? `0${v}` : v;

        return (
          <li key={v}>
            <label>{`${time}:00`}</label>
          </li>
        );
      })}
    </div>
  );
}

export default HoursBar;
