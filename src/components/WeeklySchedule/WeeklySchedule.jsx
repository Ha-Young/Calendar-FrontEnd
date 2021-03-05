import React from "react";
import EventCardStyled from "components/EventCard/EventCardStyled";
import { dateConst } from "constants/constants";
import styles from "./WeeklySchedule.module.css";

const WeeklyScedule = ({ daysOfWeek, weeklyEvent }) => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.timeContainer}>
          <div className={styles.tableHeader}></div>
          {dateConst.TIME_LIST.map((time) => (
            <div key={time} className={styles.eachTime}>
              {time}시
            </div>
          ))}
        </div>
        {daysOfWeek.map((date) => (
          <div key={date} className={styles.eachDay}>
            <div className={styles.tableHeader}>
              <p className={styles.date}>
                {date[0]}월 {date[1]}일
              </p>
              <span className={styles.day}>{date[2]}</span>
            </div>
            {dateConst.TIME_LIST.map((time) => (
              <div key={time} className={styles.eachTime}></div>
            ))}
          </div>
        ))}
      </section>
      <section>
        {weeklyEvent &&
          Object.values(weeklyEvent).map((event) => (
            <EventCardStyled key={event.id} {...event} />
          ))}
      </section>
    </>
  );
};

export default WeeklyScedule;
