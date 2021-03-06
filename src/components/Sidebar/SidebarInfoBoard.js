import React from "react";
import styles from "./Sidebar.module.css";
import { format } from "date-fns";

export default function SideInfoBoard({ currentTime }) {
  const today = format(currentTime, "LLLL dd");

  return (
    <div className={`${styles.box}`}>
      <h1 className={`${styles.today}`}>
        Today
        <br />
        is
        <br />
        {today}
      </h1>
    </div>
  );
}
