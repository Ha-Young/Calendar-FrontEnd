import React from "react";
import Calendar from 'react-calendar'
import styles from "./SideBar.module.css";

export default function SideBar({ selectDay }) {
  return (
    <div className={styles.sidebarWrapper}>
      <Calendar
        onClickDay={(date) => selectDay(date)}
      />
    </div>
  );
}
