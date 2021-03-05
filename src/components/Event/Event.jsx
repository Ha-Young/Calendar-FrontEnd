import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Event.module.css";

function Event({ onSubmitAddEvent }) {
  const [eventDate, setEventDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const history = useHistory();

  function onClickInputButton(event) {
    event.preventDefault();

    const editStartTime = `${startTime.slice(0, 2)}:00`;
    const editEndClock = `${endTime.slice(0, 2)}:00`;

    const eventInformation = {
      startTime: editStartTime,
      endTime: editEndClock,
      eventDate,
      title,
      description,
    };

    history.push("/weekly");
    onSubmitAddEvent(eventInformation);
  }

  function handleChangeInput(event) {
    event.preventDefault();

    const { target } = event;

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
    <div className={styles.dateBoxs}>
      <div>
        <p>이벤트 날짜</p>
        <input type="date" name="date" onChange={handleChangeInput} />
        <p>시작 시간 (0부터 24까지 입력해주세요)</p>
        <input
          type="text"
          name="startTime"
          onChange={handleChangeInput}
        />
        <p>종료 시간 (0부터 24까지 입력해주세요)</p>
        <input
          type="text"
          name="endTime"
          onChange={handleChangeInput}
        />
        <p>이벤트 제목</p>
        <input type="text" name="title" onChange={handleChangeInput} />
      </div>
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
        type="submit"
        value="제출"
      />
    </div>
  );
}

export default Event;
