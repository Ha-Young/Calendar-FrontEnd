import React from "react";
import { hours } from "../../utils/date";
import styles from "./TimePicker.module.css";

const TimePicker = ({ name, onChange }) => {
  return (
    <select name={name} className={styles.select} onChange={onChange}>
      {hours.map((hour, index) => ( // 숫자 상수처리..!
        index < 10
          ? <option key={hour} value={hour}>{hour}</option>
          : <option key={hour} value={hour}>{hour}</option>
      ))}
    </select>
  );
};

export default TimePicker;
