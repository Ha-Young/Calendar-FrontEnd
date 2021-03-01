import React from "react";
import { getWeek, today, getDay } from "../utils/date";

const CalendarPage = ({ onClickTypeButton }) => { // toglebutton으로 바꾸기..
  return (
    <>
      <button value="day" onClick={onClickTypeButton}>day</button>
      <button value="week" onClick={onClickTypeButton}>week</button>
      <button value="prev">prev</button>
      <button value="next">next</button>
    </>
  );
};

export default CalendarPage;