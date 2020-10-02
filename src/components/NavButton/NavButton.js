import React from "react";
import moment from "moment";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./NavButton.module.css";

export default function NavButton ({ date, viewType, clickPrevButton, clickNextButton }) {
  const handleClick = (event) => {
    const { value } = event.target;

    if (viewType === "daily") {
      value === "prev"
        ? clickPrevButton(1)
        : clickNextButton(1);
    } else {
      value === "prev"
        ? clickPrevButton(7)
        : clickNextButton(7);
    }
  };

  return (
    <div className={styles.DatePicker}>
      <button
        onClick={handleClick}
        value="prev"
      >
        <FaArrowLeft size="1.2rem" />
      </button>
      <span className={styles.thisMonth}>
        {moment(date).format("YYYY-MM")}
      </span>
      <button
        onClick={handleClick}
        value="next"
      >
        <FaArrowRight size="1.2rem" />
      </button>
    </div>
  );
}
