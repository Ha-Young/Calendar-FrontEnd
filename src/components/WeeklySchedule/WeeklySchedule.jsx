import React from "react";
import { dateConst } from "constants/constants";
import styles from "./WeeklySchedule.module.css";
import { useHistory } from "react-router-dom";

const WeeklyScedule = ({ daysOfWeek, weeklyEvent }) => {
  const history = useHistory();

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
          Object.values(weeklyEvent).map((event) => {
            return (
              <div
                key={event.id}
                onClick={() => history.push(`/events/${event.id}`)}
              >
                <h1>{event.title}</h1>
                <p>{event.description}</p>
                <p>{event.date}</p>
                <p>{event.startTime}</p>
                <p>{event.endTime}</p>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default WeeklyScedule;
