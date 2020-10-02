import React from 'react';
import styles from './TimeLine.module.css';

const TimeLine = () => {
  const timeLines = [];

  for (let i = 1; i < 25; i++) {
    timeLines.push(<div className={styles.Time}>{i}시</div>);
  }

  return (
    <div className={styles.TimeLine}>
      {
        timeLines.map(timeLine => timeLine)
      }
    </div>
  );
};

export default TimeLine;
