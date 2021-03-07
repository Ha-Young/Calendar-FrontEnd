import React, { useEffect } from "react";
import PropTypes from 'prop-types';

import { getNumberOfDivs } from "../../utils/calander";
import styles from "./Calendar.module.css";
import WithEvent from "./WithEvent";

export default function DailyEvents({ userId, today, isDaily, fetchDailyEvent, events }) {
  const todayInISO = today.toISOString().substring(0, 10);
  const arrayOf24Divs = getNumberOfDivs(24);
  const eventsOfToday = events[todayInISO];

  useEffect(() => {
    if (!eventsOfToday) {
      fetchDailyEvent(userId, todayInISO);
    }
  }, []);

  return (
    <div className={styles.eventsContainer}>
      <div className={styles.hoursSideBar}>
        {isDaily && arrayOf24Divs.map(each => <div className={styles.eachHour} key={each}>{each}</div>)}
      </div>
      <div className={styles.dailyEventTd}>
        {arrayOf24Divs.map((each, index) => {
          let haveEvent = false;
          let eventText = "";
          let eventData = {};
          
          for (const key in eventsOfToday) {
            const startHour = eventsOfToday[key]["startAt"];
            const endHour = eventsOfToday[key]["endAt"];

            if (each >= Number(startHour) && each <= Number(endHour)) {
              haveEvent = true;
              eventData = eventsOfToday[key];
              if (each === Number(startHour)) {
                eventText = eventsOfToday[key]["title"];
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

DailyEvents.propTypes = {
  userId: PropTypes.string.isRequired,
  today: PropTypes.string.isRequired,
  fetchDailyEvent: PropTypes.func.isRequired,
  events: PropTypes.func.isRequired,
  isDaily: PropTypes.bool.isRequired,
};
