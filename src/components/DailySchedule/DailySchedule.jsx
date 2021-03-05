import React from "react";
import { dateConst } from "constants/constants";
import styles from "./DailySchedule.module.css";
import EventCardStyled from "components/EventCard/EventCardStyled";

const DailySchedule = ({ dailyEvent }) => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.timeContainer}>
          {dateConst.TIME_LIST.map((time) => (
            <div key={time} className={styles.eachTime}>
              {time}시
            </div>
          ))}
        </div>
        <div className={styles.eventContainer}>
          {dateConst.TIME_LIST.map((time) => (
            <div key={time} className={styles.eachTime}></div>
          ))}
        </div>
      </section>
      <section>
        {dailyEvent &&
          Object.values(dailyEvent).map((event) => (
            <EventCardStyled key={event.id} {...event} />
          ))}
      </section>
    </>
  );
};

export default DailySchedule;
