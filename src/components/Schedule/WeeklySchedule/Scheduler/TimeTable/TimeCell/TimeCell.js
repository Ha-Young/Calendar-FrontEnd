import React from "react";
import styles from "./TimeCell.module.css";

const TimeCell = function ({ time }) {
  return (
    <div className={styles["time-cell"]}>
      <p className={styles["time-description"]}>{`${time}`}</p>
    </div>
  );
};

export default TimeCell;