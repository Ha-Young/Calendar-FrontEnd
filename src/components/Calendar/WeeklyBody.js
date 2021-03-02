import React from "react";
import { getDivsFor24Hours, getFutureDate, getPastDate } from "../../utils/calander-utils";
import Header from "./Header";
import styles from "./Calendar.module.css";

export default function WeeklyBody({ today }) {
  const dayOfToday = today.getDay();
  const firstDate = getPastDate(today, dayOfToday);
  const thisWeek = [];

  for (let i = 0; i < 7; i++) {
    const date = getFutureDate(firstDate, i);
    thisWeek.push(date);
  }

  const hoursDiv = getDivsFor24Hours();
  
  return (
    <>
      <Header />
      <thead>
        <tr>
          {thisWeek.map(date => {
            return (
              <td className={styles.td} key={date}>
                {date.getDate()}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.hoursSideBar}>
            {hoursDiv.map(each => <div className={styles.eachHour}>{each}</div>)}
          </td>
          {thisWeek.map(date => {
            return (
              <td className={styles.weeklyEventTd} key={date}>
                {hoursDiv.map(() => <div className={styles.eachHour} />)}
              </td>
            );
          })}
        </tr>
      </tbody>
    </>
  );
}
