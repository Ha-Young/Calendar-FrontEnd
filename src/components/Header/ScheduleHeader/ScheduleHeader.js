import React from "react";
import { generateDateString } from "../../../utils/calendarUtils";
import Button from "../../Button/Button";
import Title from "../../Title/Title";
import Dropdown from "../../Dropdown/Dropdown";
import styles from "./ScheduleHeader.module.css";

const ScheduleHeader = function ({
  date,
  isWeeklySchedule,
  updateLastWeek,
  updateNextWeek,
  updatePrevDay,
  updateNextDay,
  changeScheduleType,
}) {
  const title = generateDateString(isWeeklySchedule, date);
  const list = ["day", "week"];

  function onPrevButtonClick() {
    isWeeklySchedule ? updateLastWeek() : updatePrevDay();
  }

  function onNextButtonClick() {
    isWeeklySchedule ? updateNextWeek() : updateNextDay();
  }

  return (
    <div className={styles["schedule-header"]}>
      <Button
        className={styles["prev-button"]}
        children="<"
        onClick={onPrevButtonClick}
      />
      <Button
        className={styles["next-button"]}
        children=">"
        onClick={onNextButtonClick}
      />
      <Title
        className={styles["date-title"]}
        children={title}
      />
      <Dropdown
        chooseItem={changeScheduleType}
        list={list}
      />
    </div>
  );
};

export default ScheduleHeader;

