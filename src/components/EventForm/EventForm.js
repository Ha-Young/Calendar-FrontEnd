import React from "react";
import { connect } from "react-redux";
import { addEvent } from "../../actions/index";
import styles from "./EventForm.module.css";

function EventForm({ addEvent, ...eventInfo }) {
  function handleChange(e) {
    switch (e.target.name) {
      case "title":
        eventInfo.title = e.target.value
        break;
      case "content":
        eventInfo.content = e.target.value;
        break;
      case "date":
        eventInfo.date = e.target.value;
        break;
      case "starttime":
        eventInfo.startTime = Number(e.target.value);
        break;
      case "endtime":
        eventInfo.endTime = Number(e.target.value);
        break;
      default:
        return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    addEvent(eventInfo);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>제목<input className={styles.input} type="text" name="title" onChange={handleChange}/></label>
      <label>내용<input className={styles.input} type="text" name="content" onChange={handleChange}/></label>
      <label>날짜<input className={styles.input} type="date" name="date" onChange={handleChange}/></label>
      <label>시작<input className={styles.input} type="number" name="starttime" onChange={handleChange}/></label>
      <label>종료<input className={styles.input} type="number" name="endtime" onChange={handleChange}/></label>
      <button type="submmit" className={styles.button}>저장</button>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    title: state.title,
    content: state.content,
    date: state.date,
    startTime: state.startTime,
    endTime: state.endTime,
  };
}

export default connect(mapStateToProps, { addEvent })(EventForm);
