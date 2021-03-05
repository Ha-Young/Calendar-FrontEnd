import React from "react";
import styles from "./TwoOptionSelector.module.css";

export default function TwoOptionSelector ({
  firstOption,
  secondOption,
  onFirstOptionClick,
  onSecondOptionClick
}) {
  return (
    <div className={styles.TwoOptionSelector}>
      <div
        className={styles.option}
        onClick={() => onFirstOptionClick()}
      >
        {firstOption}
      </div>
      <div
        className={styles.option}
        onClick={() => onSecondOptionClick()}
      >
        {secondOption}
      </div>
    </div>
  );
}
