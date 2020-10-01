import React from "react";
import styles from "./DateDisplay.module.scss";
import getConnectedMonth from "../../utils/getConnectedMonth";
import getCurrentWeek from "../../utils/getCurrentWeek";

function DateDisplay({ dateUnit, currentDate }) {
  const dateWrap = currentDate.split("-");
  const year = dateWrap[0];
  const month = dateWrap[1];
  const date = dateWrap[2];
  let dateText = `${year}년 ${month}월 ${date}일`;

  if (dateUnit === "주") {
    const currentWeek = getCurrentWeek(currentDate);
    const monthArray = getConnectedMonth(currentWeek);

    dateText = `${year}년 ${monthArray[0]}월`;

    if (monthArray.length > 1) {
      dateText = dateText + ` - ${monthArray[1]}월`;
    }
  }

  return <h1 className={styles.DateDisplay}>{dateText}</h1>;
}

export default DateDisplay;
