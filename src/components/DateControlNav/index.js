import moment from "moment";
import React from "react";
import styles from "./DateContorlNav.module.css";
import Button from "../Button";
import {
  CALENDAR_MODE,
  BUTTON_TYPE,
  BUTTON_PAYLOAD,
} from "../../utils/constants";

export default function DateContorlNav({
  currentDate,
  calendarMode,
  moveToPrevDate,
  moveToNextDate,
  moveToToday,
}) {
  function handleButtonClick(e) {
    const buttonType = e.target.title;
    console.log(buttonType, "buttonType")
    let newDate;

    if (buttonType === BUTTON_TYPE.TODAY) {
        console.log("not inside?????????", buttonType)
       newDate = moment().toISOString();
       moveToToday(newDate);
    } else if (buttonType === BUTTON_TYPE.PREV) {
      if (calendarMode === CALENDAR_MODE.DAILY) {
        newDate = moment(currentDate).subtract(BUTTON_PAYLOAD.DAILY_PAYLOAD, "days").toISOString();
        moveToPrevDate(newDate);
      } else {
        newDate = moment(currentDate).subtract(BUTTON_PAYLOAD.WEEKLY_PAYLOAD, "days").toISOString();
        moveToPrevDate(newDate);
      }
    } else if (buttonType === BUTTON_TYPE.NEXT) {
      if (calendarMode === CALENDAR_MODE.DAILY) {
        newDate = moment(currentDate).add(BUTTON_PAYLOAD.DAILY_PAYLOAD, "days").toISOString();
        moveToNextDate(newDate);
      } else {
        newDate = moment(currentDate).add(BUTTON_PAYLOAD.WEEKLY_PAYLOAD, "days").toISOString();
        moveToNextDate(newDate);
      }
     }
    }

  return (
    <div className={styles.DateControlNav}>
      <Button title={BUTTON_TYPE.TODAY} onClick={handleButtonClick}></Button>
      <Button title={BUTTON_TYPE.PREV} onClick={handleButtonClick}></Button>
      <Button title={BUTTON_TYPE.NEXT} onClick={handleButtonClick}></Button>
      { calendarMode === CALENDAR_MODE.DAILY ?
        <span>{currentDate.substr(0, 10)}</span> :
        <span>{`${moment(currentDate).weeks()}th week!`}</span>
      }
    </div>
  )
}
