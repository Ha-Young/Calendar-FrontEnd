import React from "react";
import * as Aioutline from "react-icons/ai";
import styles from "./Calendar.module.css";
import { formatDate, formatWeek } from "../../utils/utils";

// TODO: Create your own header.
export default function CalendarHeader({
  now,
  onPrevClick,
  onNextClick,
  isDayCalendarShown,
}) {
  return (
    <div className={`${styles.headerWrapper}`}>
      <Aioutline.AiFillLeftCircle
        fontSize={"30px"}
        onClick={() => {
          onPrevClick();
        }}
      />
      <h1 className={`${styles.font}`}>
        {isDayCalendarShown ? formatDate(now) : formatWeek(now)}
      </h1>
      <Aioutline.AiFillRightCircle
        fontSize={"30px"}
        onClick={() => {
          onNextClick();
        }}
      />
    </div>
  );
}
