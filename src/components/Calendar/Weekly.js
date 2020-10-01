import React from 'react';
import TimeTable from './TimeTable';
import styles from "./Calendar.module.css";

export default function Weekly({
  times,
  openEvent,
  isModalOpen,
  eventArea,
  eventInfo
}) {
  return (
    <div className={styles.weekly_container}>
      {[...Array(8)].map(() => {
        return (
          <TimeTable
            times={times}
            openEvent={openEvent}
            isModalOpen={isModalOpen}
            eventArea={eventArea}
            eventInfo={eventInfo}
          />
        );
      })}
    </div>
  );
}

   // <Header />