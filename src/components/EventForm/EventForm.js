import React from "react";
import styles from "./EventForm.module.css";
import FormInput from "../FormInput/FormInput";

function EventForm({ onEventInfo }) {
  const eventInfo = {};

  function handleChange(e) {
    switch (e.target.name) {
      case "title":
        eventInfo.title = e.target.value;
        break;
      case "content":
        eventInfo.content = e.target.value;
        break;
      case "date":
        eventInfo.date = e.target.value;
        break;
      case "startTime":
        eventInfo.startTime = Number(e.target.value);
        break;
      case "endTime":
        eventInfo.endTime = Number(e.target.value);
        break;
      default :
        return eventInfo;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onEventInfo(eventInfo);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>제목<FormInput type={"text"} name={"title"} onChange={handleChange} /></label>
      <label>내용<FormInput type={"text"} name={"content"} onChange={handleChange} /></label>
      <label>날짜<FormInput type={"date"} name={"date"} onChange={handleChange} /></label>
      <label>시작<FormInput type={"number"} name={"startTime"} onChange={handleChange} /></label>
      <label>종료<FormInput type={"number"} name={"endTime"} onChange={handleChange} /></label>
      <button type="submmit" className={styles.button}>저장</button>
    </form>
  );
}

export default EventForm;
