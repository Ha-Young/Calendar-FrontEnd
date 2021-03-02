import React from "react";
import { generateDateString } from "../../../utils/calendarUtils";
import Button from "../../Button/Button";
import Title from "../../Title/Title";
import styles from "./ScheduleHeader.module.css";

const ScheduleHeader = function ({
  date,
  onPreButtonClick,
  onNextButtonClick
}) {
  return (
    <div className={styles["schedule-header"]}>
      <Button
        className={styles["prev-button"]}
        children="<"
        onClick={onPreButtonClick}
      />
      <Button
        className={styles["next-button"]}
        children=">"
        onClick={onNextButtonClick}
      />
      <Title
        className={styles["date-title"]}
        children={generateDateString(date)}
      />
    </div>
  );
};

export default ScheduleHeader;