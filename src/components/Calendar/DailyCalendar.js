import React from "react";
import PropTypes from "prop-types";
import CalenderBar from "./CalendarBar";
import getEventInCurrentTime from "../../utils/getEventInCurrentTime";
import styles from "./DailyCalendar.module.scss";

function DailyCalender({ currentDate, events }) {
  const month = currentDate.slice(5, currentDate.length - 3);
  const day = currentDate.slice(currentDate.length - 2);
  const nodeForMap = Array(24).fill(0);
  const eventsInCurrentDate = [];

  for (let prop in events) {
    if (events[prop].eventDate === currentDate) {
      eventsInCurrentDate.push(events[prop]);
    }
  }

  return (
    <div className={styles.DailyCalendar}>
      <div className={styles.rowWrap}>
        <h3>{`${month}월 ${day}일`}</h3>
        <div className={styles.CalenderBarWrap}>
          {nodeForMap.map((node, index) => {
            const events = getEventInCurrentTime(eventsInCurrentDate, index);

            return <CalenderBar events={events ? events : null} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

DailyCalender.propTypes = {
  currentDate: PropTypes.string.isRequired,
  events: PropTypes.shape({
    eventDate: PropTypes.string,
    eventDescription: PropTypes.string,
    eventEndTime: PropTypes.string,
    eventStartTime: PropTypes.string,
    eventId: PropTypes.number,
    eventTitle: PropTypes.string,
  }),
};

export default DailyCalender;
