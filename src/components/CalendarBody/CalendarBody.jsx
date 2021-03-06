import React from "react";
import styles from "./CalendarBody.module.css";
import CalendarTimeLine from "../CalendarTimeLine/CalendarTimeLine";
import CalendarContentsContainer from "../../containers/CalendarContentsContainer";

export default function CalendarBody() {
  return (
    <div className={styles.wrapper}>
      <CalendarTimeLine />
      <CalendarContentsContainer />
    </div>
  );
}
