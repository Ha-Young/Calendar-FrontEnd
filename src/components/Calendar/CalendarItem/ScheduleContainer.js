import React from "react";
import { TIME } from "../../../constants/time";
import styles from "./ScheduleContainer.module.css";
import PropTypes from "prop-types";
import ScheduleBox from "./ScheduleBox";

function ScheduleContainer({ dateId }) {
  return (
    <div className={styles.scheduleContainer} id={dateId}>
      {TIME.map((time) => (
        <ScheduleBox
          id={{
            date: dateId,
            time,
          }}
          key={time}
        />
      ))}
    </div>
  );
}

export default ScheduleContainer;

ScheduleContainer.propTypes = {
  dateId: PropTypes.string.isRequired,
};
