import React from "react";
import { TIME_FROM } from "../../../constants/time";
import styles from "./ScheduleContainer.module.css";
import PropTypes from "prop-types";
import ScheduleBox from "./ScheduleBox";
import { connect } from "react-redux";

function ScheduleContainer({ events, dateId }) {
  console.log(events, dateId)
  if ((events[dateId] && events[dateId][0])) {
    console.log("here")
  }
  return (
    <div className={styles.scheduleContainer} id={dateId}>
      {TIME_FROM.map((time, index) => (
        (events[dateId] && events[dateId][index])
        ?
        <>
          <div className={styles.event}>
          here in event!
          </div>
          <ScheduleBox
            id={{
              date: dateId,
              time,
            }}
            key={time}
            />
        </>
        :
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

function mapStateToProps({ events }) {
  return { events };
}

export default connect(mapStateToProps, null)(ScheduleContainer);

ScheduleContainer.propTypes = {
  dateId: PropTypes.string.isRequired,
};
