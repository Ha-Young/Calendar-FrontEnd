import React from 'react';
import styles from './Timeline.module.css';
import { connect } from 'react-redux';
import { week } from '../../constants';

function DailyDayAndDate(props) {
  const updateDate = props.updateDateReducer;
  const date = updateDate.date;
  const month = updateDate.monthDaily + 1;
  let day = updateDate.day - 1;

  if (day < 0) {
    while (day < 0) {
      day += 7;
    }
  }

  if (day >= 7) {
    day = day % 7;
  }

  return (
    <div className={styles.DailyDayAndDate}>
      <span className={styles.Month}>{month}월</span>
      <span className={styles.Date}>{date}일</span>
      <span className={styles.Day}>{week[day]}</span>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    updateDateReducer: state.updateDateReducer
  };
};

export default connect(mapStateToProps)(DailyDayAndDate);
