import React from "react";
import EventBox from "./EventBox";
import ScheduleBox from "../../../containers/CalendarContainer/ScheduleBox";
import { TIME_FROM } from "../../../constants/time";
import { findEvent } from "../../../utils/findEvent";
import styles from "./ScheduleContainer.module.css";
import PropTypes from "prop-types";

function ScheduleContainer({ events, dateId }) {
  return (
    <div className={styles.scheduleContainer} id={dateId}>
      {TIME_FROM.map((time, index) => {
        const foundEvent = findEvent(events[dateId], index);

        if (foundEvent) {
          return (
            <div className={styles.eventBox} key={time}>
              <EventBox {...foundEvent} />
              <ScheduleBox
                date={dateId}
                time={time}
              />
            </div>
          );
        }

        return (
          <ScheduleBox
            date={dateId}
            time={time}
            key={time}
          />
        );
      })}
    </div>
  );
}

export default ScheduleContainer;

ScheduleContainer.propTypes = {
  events: PropTypes.object.isRequired,
  dateId: PropTypes.string.isRequired,
};
