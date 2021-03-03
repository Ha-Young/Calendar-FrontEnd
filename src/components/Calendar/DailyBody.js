import React, { useEffect, useState } from "react";
import styles from "./Calendar.module.css";
import firebase from "../../api/firebase"
import { getDivsFor24Hours } from "../../utils/calander";

export default function DailyBody({ today, isSideBarOn = true }) {
  const [allEvents, setAllEvents] = useState({});
  
  const todayISO = today.toISOString().substring(0, 10);
  const hoursDiv = getDivsFor24Hours();

  useEffect(() => {
    const userId = "guest";
    const userRef = firebase.database().ref(`users/${userId}/${todayISO}`);
    
    userRef.on("value", (snapshot) => {
      const events = snapshot.val();
      const result = {};
      for (const date in events) {
        result[date] = events[date];
      }
      setAllEvents(result);
    });
  }, [today]);

  return (
    <tbody className={styles.dailyTbody}>
      <tr className={styles.dailyTr}>
        <td className={styles.hoursSideBar}>
          {isSideBarOn && hoursDiv.map(each => <div className={styles.eachHour} key={each}>{each}</div>)}
        </td>
      <td className={styles.dailyEventTd}>
        {hoursDiv.map((each, index) => {
          let haveEvent = false;
          let haveText = "";
          for (const key in allEvents) {
            const startHour = allEvents[key]["startAt"];
            const endHour = allEvents[key]["endAt"];

            if (each >= Number(startHour) && each <= Number(endHour)) {
              haveEvent = true;
              if (each === Number(startHour)) {
                haveText = allEvents[key]["title"];
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
      </td>
      </tr>
    </tbody>
  );
}
