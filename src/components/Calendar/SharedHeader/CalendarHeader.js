import React, { useState } from "react";
import * as Aioutline from "react-icons/ai";
import styles from "./Calendar.module.css";
import { addDay, subDay, formatDate } from "../../../utils/utils";

// TODO: Create your own header.
export default function CalendarHeader() {
  const [day, setDay] = useState(new Date());

  function onClickAddDate(day) {
    const nextDay = addDay(day);
    setDay(nextDay);
  }

  function onClickSubDate(day) {
    const nextDay = subDay(day);
    setDay(nextDay);
  }

  return (
    <div className={`${styles.headerWrapper}`}>
      <Aioutline.AiOutlineLeft onClick={() => onClickSubDate(day)} />
      <h1>{formatDate(day)}</h1>
      <Aioutline.AiOutlineRight onClick={() => onClickAddDate(day)} />
    </div>
  );
}
