import React from "react";
import styles from "./WeeklyCalendar.module.scss";
import CalenderBar from "./CalendarBar";
import TimeTableText from "./TimeTableText";

function WeeklyCalender({ currentWeek, events }) {
  const nodeForMap = Array(24).fill(0);
  console.log(currentWeek);
  console.log(events);

  return (
    <div className={styles.WeeklyCalendar}>
      <TimeTableText />
      {currentWeek.map((currentDate, index) => {
        const month = currentDate.slice(5, currentDate.length - 3);
        const day = currentDate.slice(currentDate.length - 2);
        const filteredEvents = events?.filter(
          (event) => event.eventDate === currentDate
        );
        return (
          <div key={index} className={styles.dailyScheduleWrap}>
            <h4>{`${month}월 ${day}일`}</h4>
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

                return (
                  <CalenderBar
                    eventId={isEventIn ? eventId : null}
                    eventTitle={isEventIn ? eventTitle : null}
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

export default WeeklyCalender;
