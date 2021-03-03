import React from "react";
import {
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa"

import { PREV, NEXT } from "../../constants/constants";
import styles from "./TimeSelector.module.css";

function TimeSelector({ time, onChange}) {
  function handlePrevClick() {
    onChange(time.clone().add(-1, "hours"));
  }

  function handleNextClick() {
    onChange(time.clone().add(1, "hours"));
  }

  return (
    <span className={styles.timeSelector}>
      <button data-id={PREV} onClick={handlePrevClick}>
        <FaAngleLeft />
      </button>
      <span>{time.format("HH시")}</span>
      <button data-id={NEXT} onClick={handleNextClick}>
        <FaAngleRight />
      </button>
    </span>
  );
}

export default TimeSelector;
