import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import styles from "./Event.module.css";


function DetailEvent({ eventInformation, onSubmitAddEvent, onSubmitRemoveEvent }) {
  const history = useHistory();
  const { id } = useParams();
  const targetEvent = eventInformation[id];

  const [eventDate, setEventDate] = useState(targetEvent.eventDate);
  const [startTime, setStartTime] = useState(targetEvent.startTime);
  const [endTime, setEndTime] = useState(targetEvent.endTime);
  const [title, setTitle] = useState(targetEvent.title);
  const [description, setDescription] = useState(targetEvent.description);

  function addEvent(event) {
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

    onSubmitAddEvent(eventInformation);
  }

  function handleClickRemoveButton(event) {
    event.preventDefault();

    const defaultStartDate = targetEvent.eventDate;
    const removeEvent = {
      eventDate: defaultStartDate,
      eventId: id,
    };

    history.push("/weekly");
    onSubmitRemoveEvent(removeEvent);
  };

  function handleReviseButton(event) {
    addEvent(event);
    handleClickRemoveButton(event);
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
    <div>
      <div className={styles.dateBoxs}>
        <p>이벤트 날짜</p>
        <input
          value={eventDate}
          type="date"
          name="date"
          onChange={handleChangeInput}
        />
        <p>시작 시간</p>
        <input
          value={startTime}
          type="text"
          name="startTime"
          onChange={handleChangeInput}
        />
        <p>종료 시간</p>
        <input
          value={endTime}
          type="text"
          name="endTime"
          onChange={handleChangeInput}
        />
        <p>이벤트 제목</p>
        <input
          value={title}
          type="text"
          name="title"
          onChange={handleChangeInput}
        />
        <p>이벤트 내용 작성</p>
        <input
          value={description}
          className={styles.textBox}
          type="text"
          name="description"
          onChange={handleChangeInput}
        />
        <div className={styles.submitButton}>
          <input
            onClick={handleReviseButton}
            className={styles.button}
            type="submit"
            value="이벤트 수정"
          />
          <input
            onClick={handleClickRemoveButton}
            className={styles.button}
            type="submit"
            value="이벤트 삭제"
          />
        </div>
      </div>
    </div>
  );
}

export default DetailEvent;
