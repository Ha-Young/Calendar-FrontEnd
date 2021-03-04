import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "./Event.module.css";

import { addToEvent } from "../../actions";
import { addEvent } from "../../api";

const Event = ({ onSubmitEvent }) => {
  const [eventDate, setEventDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function onClickInputButton(e) {
    e.preventDefault();

    const editStartTime = `${startTime.slice(0, 2)}:00`;
    const editEndClock = `${endTime.slice(0, 2)}:00`;

    const eventInformation = {
      eventDate,
      startTime: editStartTime,
      endTime: editEndClock,
      title,
      description,
      eventDate
    };

    onSubmitEvent(eventInformation);
    // addEvent(eventInformation);
  }

  function handleChangeInput(e) {
    const { target } = e;

    switch (target.name) {
      case "date":
        setEventDate(target.value);
        break;

      case "startTime":
        setStartTime(target.value);
        break;

      case "endTime":
        setEndTime(target.value);
        break;

      case "title":
        setTitle(target.value);
        break;

      case "description":
        setDescription(target.value);
        break;

      default:
        break;
    }
  }

  return (
    <div>
      <div className={styles.dateBoxs}>
        <p>이벤트 날짜</p>
        <input type="date" name="date" onChange={handleChangeInput} />
        <p>시작 시간</p>
        <input type="time" name="startTime" onChange={handleChangeInput} />
        <p>종료 시간</p>
        <input type="time" name="endTime" onChange={handleChangeInput} />
        <p>이벤트 제목</p>
        <input type="text" name="title" onChange={handleChangeInput} />
        <p>이벤트 내용 작성</p>
        <input
          className={styles.textBox}
          type="text"
          name="description"
          onChange={handleChangeInput}
        />
        <input
          onClick={onClickInputButton}
          className={styles.button}
          type="button"
          value="제출"
        />
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onSubmitEvent: (eventInformation) => {
    dispatch(addToEvent(eventInformation));
  }
});

export default connect(null, mapDispatchToProps)(Event);
