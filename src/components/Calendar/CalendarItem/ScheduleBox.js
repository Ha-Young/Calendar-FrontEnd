import React from "react";
import { Link } from "react-router-dom";
import { EVENT } from "../../../constants/address";
import styles from "./ScheduleBox.module.css";
import PropTypes from "prop-types";

function ScheduleBox({
  periodToDay,
  updateCurrentDay,
  updateSelectedTime,
}) {
  return (
    <Link
      to={EVENT.NEW}
      className={styles.ScheduleBox}
      onClick={() => {
        periodToDay();
        updateCurrentDay();
        updateSelectedTime();
      }}
    >
      <div
        className={styles.ScheduleBox}
      />
    </Link>
  );
}

export default ScheduleBox;

ScheduleBox.propTypes = {
  periodToDay: PropTypes.func.isRequired,
  updateCurrentDay: PropTypes.func.isRequired,
  updateSelectedTime: PropTypes.func.isRequired,
};
