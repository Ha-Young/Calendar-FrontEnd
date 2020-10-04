import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./DailyCalendar.module.css";

const DailyCalendar = ({
  shownDate,
  onTimeTableEntryClick,
  allEvent
}) => {
  const timeTable = Array(24).fill(0);

  const onClick = (event) => {
    onTimeTableEntryClick(event);
  };

  let startTimeIndex;
  let endTimeIndex;

  for (let i = 0; i < allEvent.length; i++) {
    const eventDate = allEvent[i].eventDate.slice(0, 10);

    if (eventDate === shownDate.date) {
      startTimeIndex = allEvent[i].startTime.slice(0, 2);
      endTimeIndex = allEvent[i].endTime.slice(0, 2);
    }
  }

  return (
    <div className={styles.DailyCalendar}>
      {
        timeTable.map((cur, index) => {
          let isOddIndex = true;
          let isEventIndex = false;

          if (index % 2 === 0) {
            isOddIndex = false;
          }

          if (startTimeIndex <= index && index <= endTimeIndex) {
            isEventIndex = true;
          }

          return (
            <Link to='/event'>
              <div
                key={index}
                className={
                  isEventIndex ? styles.event : (isOddIndex ? styles.odd : styles.even)
                }
                name={index}
                value={index}
                onClick={onClick}>
                {index}:00
              </div>
            </Link>
          );
        })
      }
    </div >
  );
};

export default DailyCalendar;
