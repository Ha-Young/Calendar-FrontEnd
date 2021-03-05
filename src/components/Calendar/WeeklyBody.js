import React from "react";
import { getDivsFor24Hours, getFutureDate, getPastDate } from "../../utils/calander";
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

  const hoursDiv = getDivsFor24Hours();
  
  return (
    <>
      <Header />
      <thead>
        <tr>
          {thisWeek.map((date, index) => {
            return (
              <td className={styles.td} key={date + index}>
                {date.getDate()}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>
      <tr>
        <td className={styles.hoursSideBar}>
          {hoursDiv.map((each, index) => <div key={each + index} className={styles.eachHour}>{each}</div>)}
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
