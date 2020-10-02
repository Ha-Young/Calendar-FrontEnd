import React from "react";
import PropTypes from "prop-types";
import CalenderBar from "./CalendarBar";
import TimeTableText from "./TimeTableText";
import styles from "./WeeklyCalendar.module.scss";

function WeeklyCalender({ currentWeek, events }) {
  return (
    <div className={styles.WeeklyCalendar}>
      <TimeTableText />
      {currentWeek.map((currentDate, index) => {
        const month = currentDate.slice(5, currentDate.length - 3);
        const day = currentDate.slice(currentDate.length - 2);
        const nodeForMap = Array(24).fill(0);
        const filteredEvents = [];

        for (let prop in events) {
          if (events[prop].eventDate === currentDate) {
            filteredEvents.push(events[prop]);
          }
        }

        return (
          <div key={index} className={styles.dailyScheduleWrap}>
            <h4>{`${month}월 ${day}일`}</h4>
            <div className={styles.CalenderBarWrap}>
              {nodeForMap.map((node, index) => {
                let isEventInNode;
                let eventTitle;
                let eventId;

                for (let i = 0; i < filteredEvents.length; i++) {
                  const eventStartTime = filteredEvents[i].eventStartTime.slice(0, 2);
                  const eventEndTime = filteredEvents[i].eventEndTime.slice(0, 2);

                  isEventInNode =
                    index >= eventStartTime && index <= eventEndTime;

                  if (isEventInNode) {
                    eventTitle = filteredEvents[i].eventTitle;
                    eventId = filteredEvents[i].eventId;
                    break;
                  }
                }

                return (
                  <CalenderBar
                    eventId={isEventInNode ? eventId : null}
                    eventTitle={isEventInNode ? eventTitle : null}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

WeeklyCalender.propTypes = {
  currentWeek: PropTypes.arrayOf(PropTypes.string).isRequired,
  events: PropTypes.shape({
    eventDate: PropTypes.string,
    eventDescription: PropTypes.string,
    eventEndTime: PropTypes.string,
    eventStartTime: PropTypes.string,
    eventId: PropTypes.number,
    eventTitle: PropTypes.string,
  }),
};

export default WeeklyCalender;
