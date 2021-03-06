import React from "react";
import styles from "./ScheduleBar.module.css";
import EventCard from "../EventCard";

const ScheduleBar = ({ dayLength, schedules }) => {
  return (
    <div className={styles.wrapper}>
      {dayLength?.map((item) => (
        <div key={item} className={styles.block} value={item} />
      ))}
      {schedules?.map((schedule) => (
        <EventCard event={schedule} key={schedule.id} />
      ))}
    </div>
  );
};

export default ScheduleBar;
