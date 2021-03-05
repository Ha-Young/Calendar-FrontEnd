import React, { useEffect } from "react";
import styles from "./Calendar.module.css";
import { getDivsFor24Hours } from "../../utils/calander";
import { getDailyData } from "../../api";
import { isObj } from "../../utils/typeCheck";

export default function DailyBody({ userId, today, isDaily, addEvents, events }) {
  const todayISO = today.toISOString().substring(0, 10);
  const hoursDiv = getDivsFor24Hours();

  const todayEvent = events[todayISO];

  async function fetchDailyData() {
    const result = await getDailyData(userId, todayISO);

    if(isObj(result)) {
      addEvents(todayISO, result);
    }
  }

  useEffect(() => {
    if (!todayEvent) {
      fetchDailyData();
    }
  }, []);

  return (
    <div className={styles.eventsContainer}>
      <div className={styles.hoursSideBar}>
          {isDaily && hoursDiv.map(each => <div className={styles.eachHour} key={each}>{each}</div>)}
      </div>
      <div className={styles.dailyEventTd}>
        {hoursDiv.map((each, index) => {
          let haveEvent = false;
          let haveText = "";
          
          for (const key in todayEvent) {
            const startHour = todayEvent[key]["startAt"];
            const endHour = todayEvent[key]["endAt"];

            if (each >= Number(startHour) && each <= Number(endHour)) {
              haveEvent = true;
              if (each === Number(startHour)) {
                haveText = todayEvent[key]["title"];
              }
            }
          }

          return (
            <div 
              key={each + index}
              className={`${styles.dailyHourDiv} ${haveEvent ? styles.haveEvent : styles.eachHour}`}>
              {haveText && haveText}
            </div>
            );
        })}
       </div>
    </div>
  );
}
