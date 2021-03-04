import React from "react";
import { connect } from "react-redux";
import styles from "./Calendar.module.css";
import Schedule from "./Schedule/Schedule";

function CalendarColumn({ events, day, dayID, onClickDate }) {
  const result = [];
  const hasEvent = events && events[dayID];

  for (let i = 0; i < 24; i++) {
    result.push(i);
  }

  return (
    <>
      <div className={styles["day1"]}>
        {day}
      </div>
      <div className={styles.boxList}>
        {result.map((time) => {
          return (
            <div
              // onClick={(e) => onClickDate(`${dayID}-${time}`)}
              onClick={(e) => onClickDate(e)}
              data-id={`${dayID}-${time}`}
              key={time}
              className={styles["day-box"]}
            >
            </div>
          );
        })}
        {hasEvent &&
          events[dayID].map((event) =>
            <Schedule event={event} />
          )
        }
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    events: state
  };
}

export default connect(mapStateToProps, null)(CalendarColumn);
