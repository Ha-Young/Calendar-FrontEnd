import React from "react";

import styles from "./HoursBar.module.css";

function HoursBar() {
  const HOUR = 24;
  const hours = Array.from({length: HOUR}, (v, i) => i);

  return (
    <div className={styles.HoursBar}>
      {hours.map((v) => {
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
