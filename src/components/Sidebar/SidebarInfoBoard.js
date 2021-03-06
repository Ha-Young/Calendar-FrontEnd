import React from "react";
import styles from "./Sidebar.module.css";

export default function SideInfoBoard() {
  return (
    <div className={`${styles.box}`}>
      <h1 className={`${styles.today}`}>
        Today
        <br />
        is
        <br />
        Feb 28
      </h1>
    </div>
  );
}
