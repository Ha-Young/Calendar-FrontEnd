import React from "react";
import { generateDate } from "../../utils/calendarUtils";
import Button from "../Button/Button";
import Title from "../Title/Title";
import styles from "./ScheduleHeader.module.css";

const ScheduleHeader = function ({ dateObject }) {
  return (
    <div className={styles["calendar-button-and-title"]}>
      <Button className="prevButton" children="<" />
      <Button className="prevButton" children=">" />
      <Title children={generateDate(dateObject.year, dateObject.month)} />
    </div>
  );
};

export default ScheduleHeader;
