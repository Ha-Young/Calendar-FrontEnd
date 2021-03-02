import React from "react";
import styles from "./Calendar.module.css";
import { getDivsFor24Hours } from "../../utils/calander-utils";

export default function DailyBody({ today }) {
  const hoursDiv = getDivsFor24Hours();
  
  return (
    <tbody className={styles.dailyTbody}>
      <tr className={styles.dailyTr}>
      <td className={styles.hoursSideBar}>
        {hoursDiv.map(each => <div className={styles.eachHour}>{each}</div>)}
      </td>
      <td className={styles.dailyEventTd}>
        {hoursDiv.map(() => <div className={`${styles.dailyHourDiv} ${styles.eachHour}`} />)}
      </td>
      </tr>
    </tbody>
  );
}
