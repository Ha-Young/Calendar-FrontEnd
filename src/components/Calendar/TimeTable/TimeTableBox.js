import React from "react";
import styles from "./TimeTableBox.module.css";
import TimeDisplayBox from "./TimeDisplayBox";
import TimeTableColumnBox from "../../../containers/ColumnBox";

export default function TimeTableBox() {
  return (
    <div className={styles.TimeTableBox}>
      <TimeDisplayBox />
      <TimeTableColumnBox />
    </div>
  );
}