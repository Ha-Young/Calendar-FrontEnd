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

  function onChangeDate(e) {
    setEventDate(e.target.value);
  }

  function onChangeStartTime(e) {
    setStartTime(e.target.value);
  }

  function onChangeEndTime(e) {
    setEndTime(e.target.value);
  }

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  function onChangeDescription(e) {
    setDescription(e.target.value);
  }

  return (
    <div>
      <div className={styles["date-boxs"]}>
        <p>이벤트 날짜</p>
        <input type="date" name="date" onChange={onChangeDate} />
        <p>시작 시간</p>
        <input type="time" name="startTime" onChange={onChangeStartTime} />
        <p>종료 시간</p>
        <input type="time" name="endTime" onChange={onChangeEndTime} />
        <p>이벤트 제목</p>
        <input type="text" name="title" onChange={onChangeTitle} />
        <p>이벤트 내용 작성</p>
        <input
          className={styles["text-box"]}
          type="text"
          onChange={onChangeDescription}
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
