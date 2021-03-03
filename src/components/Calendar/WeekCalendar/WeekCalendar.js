import React, { useEffect } from "react";
import { connect } from "react-redux";
import { periodUnit } from "../../../actions";
import { WEEK } from "../../../constants/time";
import { getCurrentWeek } from "../../../utils/getDate";
import ScheduleContainer from "../ScheduleContainer/ScheduleContainer";
import TimeContainer from "../TimeContainer/TimeContainer";
import styles from "./WeekCalendar.module.css"

function WeekCalendar({ week, onLoad }) {
  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div>
      <div className={styles.top}>
        <div></div>
        <div className={styles.week}>
          {week.map(({string, number, id}) => (
            <div className={styles.day} key={id}>
              <h6>{string}</h6>
              <h3>{number}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.wrapper}>
        <TimeContainer />
        <div className={styles.weekContainer}>
          {WEEK.map((item) => (
            <ScheduleContainer
              className={styles.ScheduleContainer}
              key={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    week: getCurrentWeek(state.currentDay),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { match: { params: { unit } } } = ownProps;

  return {
    onLoad: () => dispatch(periodUnit(unit)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeekCalendar);
