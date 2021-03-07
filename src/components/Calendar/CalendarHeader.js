import React from "react";
import * as Aioutline from "react-icons/ai";
import styles from "./Calendar.module.css";
import { formatDate, formatWeek } from "utils";

// TODO: Create your own header.
export default function CalendarHeader({
  now,
  onPrevClick,
  onNextClick,
  calendarMode,
}) {
  return (
    <div className={`${styles.headerWrapper}`}>
      <Aioutline.AiFillLeftCircle fontSize={"30px"} onClick={onPrevClick} />
      <h1 className={`${styles.font}`}>
        {calendarMode === "day" ? formatDate(now) : formatWeek(now)}
      </h1>
      <Aioutline.AiFillRightCircle fontSize={"30px"} onClick={onNextClick} />
    </div>
  );
}