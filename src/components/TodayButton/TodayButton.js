import React from 'react';
import styles from './TodayButton.module.css';

const TodayButton = () => {
  return (
    <div className={styles.TodayButton}>
      <button>오늘</button>
    </div>
  );
};

export default TodayButton;