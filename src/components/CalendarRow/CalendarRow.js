import React from "react";
import styles from "./CalendarRow.module.css";
import { connect } from "react-redux";

function CalendarRow({ currentDate, ...eventInfo }) {
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
      
        if (dailyEvents) {
          dailyEvents.map((dailyEvent) => {
            const start = dailyEvent.startTime;
            const end = dailyEvent.endTime;

            if (start <= hour && end >= hour) {
              isColored = true;
              if (start === hour) {
                text = dailyEvent.title;
              }
            }
          });
        }

        return (
          <div className={isColored ? styles.pick : styles.row} key={hour}>{text}</div>
        );
      })}
    </>
  );
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(CalendarRow);
