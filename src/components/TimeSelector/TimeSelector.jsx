import React from "react";
import {
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa"

import styles from "./TimeSelector.module.css";

function TimeSelector({ time, onChange}) {
  function handleClick(e) {
    e.preventDefault();

    switch (e.target.dataset.id) {
      case "prev":
        if (time.format("H") === "0") {
          break;
        }

        onChange(time.clone().add(-1, "hours"));
        break;
      case "next":
        if (time.format("H") === "23") {
          break;
        }

        onChange(time.clone().add(1, "hours"));
        break;
      default:
        throw new Error({message: "TimeSelector"});
    }
  }

  return (
    <span className={styles.timeSelector}>
      <button data-id="prev" onClick={handleClick}>
        <FaAngleLeft />
      </button>
      <span>{time.format("HH시")}</span>
      <button data-id="next" onClick={handleClick}>
        <FaAngleRight />
      </button>
    </span>
  );
}

export default TimeSelector;
