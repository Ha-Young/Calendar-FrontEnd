import React from "react";
import { NavLink } from "react-router-dom";
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

  function createNavLinkToCalendar(item) {
    return (
      <NavLink to="/calendar">{item}</NavLink>
    );
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
        createItemTag={createNavLinkToCalendar}
      />
    </div>
  );
};

export default ScheduleHeader;

