import React from 'react';
import styles from './EventContainer.module.css';

import DailyCard from '../../components/DailyCard/DailyCard';

export default function EventContainer() {
  return (
    <div className={styles.EventContainer}>
      <DailyCard />
      <DailyCard />
      <DailyCard />
      <DailyCard />
      <DailyCard />
      <DailyCard />
      <DailyCard />
    </div>
  );
}