import React from "react";
import styles from "./NewEvent.module.css";

/*
  이벤트 제목
  이벤트 설명
  이벤트 시작 날짜 및 시간
  이벤트 종료 날짜 및 시간
*/

export default function NewEvent() {
  return (
    <div className={styles.NewEvent}>
      <form className={styles.NewEventForm}>
        <div className={styles.InputTitleBox}>
          <label htmlFor="event-title">Title :</label>
          <input type="text" name="event-title" />
        </div>
        <div className={styles.InputDescriptionBox}>
          <label htmlFor="event-description">Description</label>
          <input type="text" name="event-description"/>
        </div>
      </form>
    </div>
  );
}