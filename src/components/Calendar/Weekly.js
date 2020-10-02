import React from "react";
import TimeTable from "./TimeTable";
import styles from "./Calendar.module.css";
import TimeView from "./TimeView";

export default function Weekly ({
  times,
  openEvent,
  isModalOpen,
  eventArea,
  eventInfo
}) {
  return (
    <div className={styles.weekly_container}>
      <TimeView times={times}/>
      {[...Array(7)].map(() => {
        return (
          <TimeTable
            times={times}
            openEvent={openEvent}
            isModalOpen={isModalOpen}
            eventArea={eventArea}
            eventInfo={eventInfo}
          />
        );
      })
      }
    </div>
  );
}
