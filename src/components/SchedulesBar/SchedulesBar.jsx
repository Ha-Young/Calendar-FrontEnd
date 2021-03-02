import React from "react";

import styles from "./SchedulesBar.module.css";

function SchedulesBar() {
  const HOUR = 24;
  const hours = Array.from({length: HOUR}, (v, i) => i);

  return (
    <div
      className={styles.SchedulesBar}
    >
      {hours.map((v) => {
        return (
          <li key={v}>{v}</li>
        );
      })}
    </div>
  );
}

export default SchedulesBar;
