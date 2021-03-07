import React from 'react';

import styles from "./DailyTimeBar.module.css";
import EventTitle from '../../EventForm/EventTitle/EventTitle';

export default function DailyTimeBar({eachTime}) {
  return (
    <div className={styles.DailyTimeBar}>
      {EventTitle}
      <span>{eachTime}</span>
    </div>
  );
}
