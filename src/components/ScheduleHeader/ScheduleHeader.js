import React from "react";
import { generateDateString } from "../../utils/calendarUtils";
import Button from "../Button/Button";
import Title from "../Title/Title";
import styles from "./ScheduleHeader.module.css";

const ScheduleHeader = function ({
  date,
  onPreButtonClick,
  onNextButtonClick
}) {
  return (
    <div className={styles["calendar-button-and-title"]}>
      <Button
        className="prevButton"
        children="<"
        onClick={onPreButtonClick}
      />
      <Button
        className="nextButton"
        children=">"
        onClick={onNextButtonClick}
      />
      <Title children={generateDateString(date)} />
    </div>
  );
};

export default ScheduleHeader;
