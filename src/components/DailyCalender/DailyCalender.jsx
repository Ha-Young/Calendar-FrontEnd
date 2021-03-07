import React from "react";
import EventCardStyled from "components/EventCard/EventCard";
import { DATE } from "constants/constants";
import styles from "./DailyCalender.module.css";

const DailyCalender = ({ dailyEvent }) => {
  return (
    <div className={styles.container}>
      <section className={styles.timeContainer}>
        {DATE.TIME_LIST.map((time) => (
          <div key={time} className={styles.eachTime}>
            {time}시
          </div>
        ))}
      </section>
      <section className={styles.scheduleContainer}>
        {DATE.TIME_LIST.map((time) => (
          <div key={time} className={styles.eachTime} />
        ))}
        <div>
          {dailyEvent &&
            Object.values(dailyEvent).map((event) => (
              <EventCardStyled key={event.id} {...event} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default DailyCalender;
