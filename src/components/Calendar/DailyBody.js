import React, { useEffect, useState } from "react";
import styles from "./Calendar.module.css";
import firebase from "../../api/firebase"
import { getDivsFor24Hours } from "../../utils/calander-utils";

export default function DailyBody({ today, getUserData }) {
  const [allEvents, setAllEvents] = useState([]);
  
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
        {hoursDiv.map(each => <div className={styles.eachHour}>{each}</div>)}
      </td>
      <td className={styles.dailyEventTd}>
        {hoursDiv.map((each) => {
          let haveEvent = false;
          let keyHour = Object.keys(allEvents);

          // for (const key in allEvents) {
          //   const startHour = allEvents[key]["startAt"];
          //   const endHour = allEvents[key]["endAt"];

          //   if (each >= Number(startHour) && each <= Number(endHour)) {
          //     haveEvent = true;
          //   }
          // }


          return (
            <div className={`${styles.dailyHourDiv} ${styles.eachHour} ${haveEvent ? styles.haveEvent : ""}`}>
              {haveEvent && allEvents[each]["title"]}
            </div>
            );
        })}
      </td>
      </tr>
    </tbody>
  );
}
