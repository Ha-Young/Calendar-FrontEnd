import React from "react";
import ScheduleContainer from "../ScheduleContainer/ScheduleContainer";
import TimeContainer from "../TimeContainer/TimeContainer";
import styles from "./DayCalendar.module.css";
import { getCurrentDay } from "../../../utils/getDate";
import { connect } from "react-redux";


function DayCalendar({ day: { string, number } }) {
  return (
    <div>
      <div className={styles.top}>
        <div></div>
        <div className={styles.day}>
          <h6>{string}</h6>
          <h3>{number}</h3>
        </div>
      </div>
      <div className={styles.wrapper}>
        <TimeContainer />
        <ScheduleContainer />
      </div>
    </div>
  );
}

function mapStateToProps({ current }) {
  return { day: getCurrentDay(current) };
}

export default connect(mapStateToProps, null)(DayCalendar);
