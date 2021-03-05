import React from "react";
import { TIME_FROM } from "../../../constants/time";
import styles from "./ScheduleContainer.module.css";
import PropTypes from "prop-types";
import ScheduleBox from "./ScheduleBox";
import { connect } from "react-redux";
import EventBox from "./EventBox";

function ScheduleContainer({ events, dateId }) {
  function findEvent(daySchedule, index) {
    if (!daySchedule) {
      return;
    }

    for (const event in daySchedule) {
      if (daySchedule[event].from === index) {
        return daySchedule[event];
      }
    }
  }

  return (
    <div className={styles.scheduleContainer} id={dateId}>
      {TIME_FROM.map((time, index) => {
        const foundEvent = findEvent(events[dateId], index);

        return foundEvent
        ?
        <div className={styles.eventBox} key={time}>
          <EventBox {...foundEvent} />
          <ScheduleBox
            id={{ date: dateId, time }}
          />
        </div>
        :
        <ScheduleBox
          id={{ date: dateId, time }}
          key={time}
        />
      })}
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
