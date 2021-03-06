import React from "react";
import styles from "./ScheduleBar.module.css";
import PropTypes from "prop-types";
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

ScheduleBar.propTypes = {
  dayLength: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ),
  schedules: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};
