import React from "react";
import { getNumberOfDivs, getFutureDate, getPastDate } from "../../utils/calander";
import Header from "./Header";
import styles from "./Calendar.module.css";
import DailyBody from "./DailyBody";

export default function WeeklyBody({ userId, today, addEvents, events, isDaily }) {
  const dayOfToday = today.getDay();
  const firstDate = getPastDate(today, dayOfToday);
  const thisWeek = [];

  for (let i = 0; i < 7; i++) {
    const date = getFutureDate(firstDate, i);
    thisWeek.push(date);
  }

  const arrayOf24Hours = getNumberOfDivs(24);
  
  return (
    <>
      <Header />
      <div className={styles.dateHeader}>
        {thisWeek.map((date, index) => {
          return (
            <div className={styles.date} key={date + index}>
              {date.getDate()}
            </div>
          );
        })}
      </div>
      <tbody>
      <tr>
        <td className={styles.hoursSideBar}>
          {arrayOf24Hours.map((each, index) => <td key={each + index} className={styles.eachHour}>{each}</td>)}
        </td>
        {thisWeek.map((date, index) => {
          return (
            <td className={styles.weeklyEventTd} key={date + index}>
              <DailyBody userId={userId} today={date} isDaily={isDaily} addEvents={addEvents} events={events} />
            </td>
          );
        })}
      </tr>
      </tbody>
    </>
  );
}
