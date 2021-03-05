import React, { useEffect } from "react";

import { getNumberOfDivs } from "../../utils/calander";
import { isObj } from "../../utils/typeCheck";
import { getDailyData } from "../../api";
import styles from "./Calendar.module.css";
import WithEvent from "./WithEvent";

export default function DailyBody({ userId, today, isDaily, addEvents, events }) {
  const todayISO = today.toISOString().substring(0, 10);
  const arrayOf24Hours = getNumberOfDivs(24);
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
        {isDaily && arrayOf24Hours.map(each => <div className={styles.eachHour} key={each}>{each}</div>)}
      </div>
      <div className={styles.dailyEventTd}>
        {arrayOf24Hours.map((each, index) => {
          let haveEvent = false;
          let eventText = "";
          let eventData = {};
          
          for (const key in todayEvent) {
            const startHour = todayEvent[key]["startAt"];
            const endHour = todayEvent[key]["endAt"];
            console.log(startHour)
            if (each >= Number(startHour) && each <= Number(endHour)) {
              haveEvent = true;
              eventData = todayEvent[key];
              if (each === Number(startHour)) {
                eventText = todayEvent[key]["title"];
              }
            }
          }

          return (
            haveEvent
            ? <WithEvent 
                key={each + index}
                userId={userId}
                text={eventText}
                eventData={eventData}
                className={`${styles.haveEvent} ${styles.dailyHourDiv}`} 
              /> 
            : <div 
                key={each + index} 
                className={`${styles.dailyHourDiv} ${styles.eachHour}`}
              ></div>
            );
        })}
       </div>
    </div>
  );
}
