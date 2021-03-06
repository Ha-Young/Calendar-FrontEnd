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

        return foundEvent
        ?
        (<div className={styles.eventBox} key={time}>
          <EventBox {...foundEvent} />
          <ScheduleBox
            id={{ date: dateId, time }}
          />
        </div>)
        :
        (<ScheduleBox
          id={{ date: dateId, time }}
          key={time}
        />)
      })}
    </div>
  );
}

export default ScheduleContainer;

ScheduleContainer.propTypes = {
  events: PropTypes.object.isRequired,
  dateId: PropTypes.string.isRequired,
};
