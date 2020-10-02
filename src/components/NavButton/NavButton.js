import React from "react";
import styles from "./NavButton.module.css";
import moment from "moment";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function NavButton ({ clickPrevDateButton, clickNextDateButton, todayDate, isDailyView }) {
  const handleClick = (event) => {
    if (event.target.value === "prev") {
      isDailyView
        ? clickPrevDateButton(1)
        : clickPrevDateButton(7);
    } else if (event.target.value === "next") {
      isDailyView
        ? clickNextDateButton(1)
        : clickNextDateButton(7);
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
        {moment(todayDate).format("YYYY-MM")}
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
