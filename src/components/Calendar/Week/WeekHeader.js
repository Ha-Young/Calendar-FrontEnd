import React, { useState } from "react";
import * as Aioutline from "react-icons/ai";
import styles from "./Week.module.css";
import { formatDate, getDaysInWeek, formatWeek } from "../../../utils/utils";

// TODO: Create your own header.
export default function WeekHeader({ now, onPrevClick, onNextClick }) {
  console.log(getDaysInWeek(now));
  console.log(formatDate(getDaysInWeek(now)[0])); // 이거 그리드로 풀기
  console.log(formatDate(getDaysInWeek(now)[1]));

  return (
    <div className={`${styles.headerWrapper}`}>
      <Aioutline.AiOutlineLeft onClick={() => onPrevClick()} />
      <h1>{formatWeek(now)}</h1>
      <Aioutline.AiOutlineRight onClick={() => onNextClick()} />
    </div>
  );
}
