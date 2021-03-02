import React, { useState } from "react";
import * as Aioutline from "react-icons/ai";
import styles from "./Week.module.css";
import {
  addDay,
  subDay,
  formatDate,
  getDaysInWeek,
  addWeek,
  subWeek,
  formatWeek,
} from "../../../utils/utils";

// TODO: Create your own header.
export default function DayHeader() {
  const [week, setWeek] = useState(new Date());

  function onClickAddWeek(week) {
    const nextWeek = addWeek(week);
    setWeek(nextWeek);
  }

  function onClickSubWeek(week) {
    const prevWeek = subWeek(week);
    setWeek(prevWeek);
  }

  console.log(getDaysInWeek(week));
  console.log(formatDate(getDaysInWeek(week)[0])); // 이거 그리드로 풀기

  return (
    <div className={`${styles.headerWrapper}`}>
      <Aioutline.AiOutlineLeft onClick={() => onClickSubWeek(week)} />
      <h1>{formatWeek(week)}</h1>
      <Aioutline.AiOutlineRight onClick={() => onClickAddWeek(week)} />
    </div>
  );
}
