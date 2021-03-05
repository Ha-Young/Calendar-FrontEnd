import React from 'react';

import styles from "./DailyTimeBar.module.css";

export default function DailyTimeBar({eachTime}) {
  return (
    <div className={styles.DailyTimeBar}>
      <span>{eachTime}</span>
    </div>
  );
}
