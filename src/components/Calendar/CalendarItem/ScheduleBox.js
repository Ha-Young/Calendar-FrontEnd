import React from "react";
import styles from "./ScheduleBox.module.css";
import PropTypes from "prop-types";

function ScheduleBox({ id }) {
  return (
    <div
      role="button"
      className={styles.scheduleRow}
      id={id}
    />
  );
}

export default ScheduleBox;

ScheduleBox.propTypes = {
  id: PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }),
};
