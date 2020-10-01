import React from "react";
import styles from "./NavButton.module.css";
import moment from "moment";

export default function NavButton ({ clickPrevDateButton, clickNextDateButton, date, isDailyView }) {
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
        {`<`}
      </button>
      <span>
        {moment(date).format("YYYY-MM")}
      </span>
      <button
        onClick={handleClick}
        value="next"
      >
        {`>`}
      </button>
    </div>
  );
}
