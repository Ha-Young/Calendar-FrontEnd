import React from "react";
import { connect } from "react-redux";
import styles from "./Calendar.module.css";
import Schedule from "./Schedule/Schedule";

function CalendarColumn({ events, colummDay, dayID }) {
  const hasEvent = events && events.byId[dayID];
  const result = [];

  for (let i = 0; i < 24; i++) {
    result.push(i);
  }

  return (
    <>
      <div className={styles.day}>
        {colummDay}
      </div>
      <div className={styles.boxList}>
        {result.map((time) => {
          return (
            <div
              data-id={`${dayID}-${time}`}
              key={time}
              className={styles.dayBox}
            >
            </div>
          );
        })}
        {hasEvent &&
          events.byId[dayID].map((event) =>
            <Schedule event={event} dayID={dayID} />
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
