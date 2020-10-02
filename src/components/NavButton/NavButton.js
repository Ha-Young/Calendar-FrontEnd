import React from "react";
import moment from "moment";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./NavButton.module.css";

export default function NavButton ({ date, viewType, clickPrevButton, clickNextButton }) {
  const handleClick = (event) => {
    if (event.target.value === "prev") {
      viewType
        ? clickPrevButton(1)
        : clickPrevButton(7);
    } else if (event.target.value === "next") {
      viewType
        ? clickNextButton(1)
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
