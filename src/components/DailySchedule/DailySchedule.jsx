import React from "react";
import { dateConst } from "constants/constants";
import styles from "./DailySchedule.module.css";
import { useHistory } from "react-router-dom";

const DailySchedule = ({ dailyEvent }) => {
  const history = useHistory();
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
          Object.values(dailyEvent).map((event) => {
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

export default DailySchedule;
