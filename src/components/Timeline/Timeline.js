import React from 'react';
import styles from './Timeline.module.css';

const timeRange = new Array(24).fill(0);
const AM_PM_DIVIDE = 11;

function TimeLine () {
  return (
    <div className={styles.Timeline}>
      {
        timeRange.map((item, index) => {
          return (
            <>
              <div className={styles.Time}>
                <span className={styles.Hour}>
                  { index <= AM_PM_DIVIDE ? `오전 ${index}시` : `오후 ${index - AM_PM_DIVIDE}시` }
                </span>
              </div>
            </>
          );
        })
      }
    </div>
  );
}

export default TimeLine;
