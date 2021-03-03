import React, { useEffect } from "react";
import ScheduleContainer from "../CalendarItem/ScheduleContainer";
import TimeContainer from "../CalendarItem/TimeContainer";
import styles from "./DayCalendar.module.css";
import { getCurrentDay } from "../../../utils/getDate";
import { connect } from "react-redux";
import { periodUnit } from "../../../actions";


function DayCalendar({
  date,
  day: { string, number },
  onLoad,
}) {
  useEffect(() => {
    onLoad();
  }, []);

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
        <ScheduleContainer dateId={date}/>
      </div>
    </div>
  );
}

function mapStateToProps({ currentDay }) {
  return {
    date: currentDay.toLocaleDateString(),
    day: getCurrentDay(currentDay),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(periodUnit()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DayCalendar);
