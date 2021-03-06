import React from "react";
import styles from "./CalendarModeSelector.module.css";
import { CALENDAR_MODE } from "../../utils/constants";

export default function CalendarModeSelector({ changeCalendarMode }) {
  function handleSelectChange(e) {
    let mode = e.target.value;

    mode === CALENDAR_MODE.DAILY ?
    changeCalendarMode(CALENDAR_MODE.DAILY) :
    changeCalendarMode(CALENDAR_MODE.WEEKLY);
  }

  return (
    <select onChange={handleSelectChange}>
      <option value={CALENDAR_MODE.DAILY} defaultValue>Daily</option>
      <option value={CALENDAR_MODE.WEEKLY}>Weekly</option>
    </select>
  );
}
