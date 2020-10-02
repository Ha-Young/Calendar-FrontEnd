import React from "react";
import PropTypes from "prop-types";
import CalenderBar from "./CalendarBar";
import TimeTableText from "./TimeTableText";
import styles from "./DailyCalendar.module.scss";

function DailyCalender({ currentDate, events }) {
  const nodeForMap = Array(24).fill(0);
  const filteredEvents = [];

  for (let prop in events) {
    if (events[prop].eventDate === currentDate) {
      filteredEvents.push(events[prop]);
    }
  }

  return (
    <div className={styles.DailyCalendar}>
      <TimeTableText />
      <div className={styles.rowWrap}>
        <h2>{currentDate}</h2>
        <div className={styles.CalenderBarWrap}>
          {nodeForMap.map((node, index) => {
            let isEventIn;
            let eventTitle;
            let eventId;

            for (let i = 0; i < filteredEvents.length; i++) {
              const start = filteredEvents[i].eventStartTime.slice(0, 2);
              const end = filteredEvents[i].eventEndTime.slice(0, 2);

              isEventIn = index >= start && index <= end;

              if (isEventIn) {
                eventTitle = filteredEvents[i].eventTitle;
                eventId = filteredEvents[i].eventId;
                break;
              }
            }

            return isEventIn ? (
              <CalenderBar
                eventId={eventId}
                eventTitle={eventTitle}
                key={index}
              />
            ) : (
              <CalenderBar key={index} />
            );
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
