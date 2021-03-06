import React from "react";
import styles from "./CalendarRow.module.css";
import { Link } from "react-router-dom";

function CalendarRow({ currentDate, eventInfo, setId}) {
  const hours = [1, 2, 3, 4, 5,
                6, 7, 8, 9, 10,
                11, 12, 13, 14,
                15, 16, 17, 18,
                19, 20, 21, 22,
                23, 24];
  const dailyEvents = eventInfo[currentDate];

  return (
    <>
      {hours.map(hour => {
        let isColored = false;
        let text = "";
        let date;
        let startTime;
        let id;
      
        if (dailyEvents) {
          dailyEvents.map((dailyEvent, index) => {
            const startHour = dailyEvent.startTime;
            const endHour = dailyEvent.endTime;

            if (startHour <= hour && endHour >= hour) {
              isColored = true;
              date = dailyEvent.date;
              startTime = dailyEvent.startTime;

              if (startHour === hour) {
                text = dailyEvent.title;
                id = index;
              }
            }
          });
        }

        return (
          <div className={isColored ? styles.pick : styles.row} key={hour} onClick={() => setId(id)}>
            {isColored &&
              <Link to={`/event/:${date}+${startTime}`} >{text}</Link>
            }
          </div>
        );
      })}
    </>
  );
}

export default CalendarRow;
