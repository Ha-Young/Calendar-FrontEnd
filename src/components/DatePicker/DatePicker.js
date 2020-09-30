import React from "react";
import styles from "./DatePicker.module.css";
import moment from "moment";

export default function DatePicker ({ clickPrevButton, clickNextButton, date, isDailyView }) {
  const handleClick = (event) => {
    if (event.target.value === "prev") {
      isDailyView ? clickPrevButton(1) : clickPrevButton(7);
    } else if (event.target.value === "next") {
      isDailyView ? clickNextButton(1) : clickNextButton(7);
    }
  };

  return (
    <div className={styles.DatePicker}>
      <button onClick={handleClick} value="prev">{`<`}</button>
      <span>{moment(date).format("YYYY-MM")}</span>
      <button onClick={handleClick} value="next">{`>`}</button>
    </div>
  );
}
