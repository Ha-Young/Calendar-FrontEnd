import React from "react";
import {
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa"

import styles from "./TimeSelector.module.css";

function TimeSelector({ time = 0, onChange, disabled }) {
  function handlePrevClick() {
    if (time === 0) {
      return;
    }
    onChange(time - 1);
  }

  function handleNextClick() {
    if (time === 24) {
      return;
    }
    onChange(time + 1);
  }

  return (
    <span className={styles.timeSelector}>
      <button onClick={handlePrevClick} disabled={disabled}>
        <FaAngleLeft />
      </button>
      <span>{`${time}시`}</span>
      <button onClick={handleNextClick} disabled={disabled}>
        <FaAngleRight />
      </button>
    </span>
  );
}

export default TimeSelector;