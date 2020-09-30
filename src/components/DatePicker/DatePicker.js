import React from "react";
import styles from "./DatePicker.module.css";
import moment from "moment";

export default function DatePicker ({ clickPrevButton, clickNextButton, date }) {
  return (
    <div className={styles.DatePicker}>
      <button onClick={clickPrevButton}>{`<`}</button>
      <span>{moment(date).format("YYYY-MM")}</span>
      <button onClick={clickNextButton}>{`>`}</button>
    </div>
  );
}
