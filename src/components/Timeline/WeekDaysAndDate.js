import React from 'react';
import styles from './Timeline.module.css';
import { connect } from 'react-redux';
import { week } from '../../constants';
import { monthDays } from '../../constants';

function WeekDaysAndDate( { updateDateReducer } ) {
    const day = updateDateReducer.day;
    const monthWeekly = updateDateReducer.monthWeekly;
    let monday = updateDateReducer.monday;

    return (
      week.map((week, i) => {
        const todayCheking = (day === i + 1 || day - 1 === i) ? "Today" : "Days";

        if (i !== 0) monday++;

        if (monday >= monthDays[monthWeekly] + 1) {
          monday = 1;
        }

        return (
          <div key={i} className={styles[todayCheking]}>
            <div className={styles.Week}> {week} </div>
            <div> {monday} </div>
          </div>
        );
      })
    );
  }

  const mapStateToProps = state => {
    return {
      updateDateReducer: state.updateDateReducer
    };
  };
  
  export default connect(mapStateToProps)(WeekDaysAndDate);
