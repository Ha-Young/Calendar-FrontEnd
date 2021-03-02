import React from "react";
import styles from "./Sidebar.module.css";
import TodayInfo from "./TodayInfo";
import UpcomingEvent from "./UpcomingEvent";

export default function Sidebar() {
  return (
    <div className={`${styles.sidebar}`}>
      <div className={`${styles.today}`}>
        <TodayInfo />
      </div>
      <div className={`${styles.events}`}>
        <UpcomingEvent />
      </div>
    </div>
  );
}
