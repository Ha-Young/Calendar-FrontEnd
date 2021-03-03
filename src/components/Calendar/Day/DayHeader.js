import React, { useState } from "react";
import * as Aioutline from "react-icons/ai";
import styles from "./Day.module.css";
import { addDay, subDay, formatDate } from "../../../utils/utils";

// TODO: Create your own header.
export default function DayHeader({ now, onPrevClick, onNextClick }) {
  return (
    <div className={`${styles.headerWrapper}`}>
      <Aioutline.AiFillLeftCircle
        fontSize={"30px"}
        onClick={() => {
          onPrevClick();
        }}
      />
      <h1 className={`${styles.font}`}>{formatDate(now)}</h1>
      <Aioutline.AiFillRightCircle
        fontSize={"30px"}
        onClick={() => {
          onNextClick();
        }}
      />
    </div>
  );
}
