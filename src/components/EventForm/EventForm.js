import React, { useState } from "react";
import { connect } from "react-redux";
import { addEvent } from "../../actions/index";
import styles from "./EventForm.module.css";


function EventForm({ addEvent, ...eventInfo }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleChange(e) {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "content":
        setContent(e.target.value);
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
        return eventInfo;
    }

    eventInfo.title = title;
    eventInfo.content = content;
  }

  function handleSubmit(e) {
    e.preventDefault();
    addEvent(eventInfo);
    setTitle("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>제목<input type="text" name="title" onChange={handleChange}/></label>
      <label>내용<input type="text" name="content" onChange={handleChange}/></label>
      <label>날짜<input type="date" name="date" onChange={handleChange}/></label>
      <label>시작시간<input type="number" name="starttime" onChange={handleChange}/></label>
      <label>종료시간<input type="number" name="endtime" onChange={handleChange}/></label>
      <input type="submit"/>
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


// function mapDispatchToProps(dispatch) {
//   return {
//     addEvent: (eventInfo) => dispatch(addEvent(eventInfo))
//   }
// }
