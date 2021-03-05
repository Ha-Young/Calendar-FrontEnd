import React, { useState } from "react";
import styles from "./Event.module.css";

import { useHistory, useParams } from "react-router-dom";

function DetailEvent({ eventInformation, onSubmitAddEvent, onSubmitRemoveEvent }) {
  const history = useHistory();
  const { id } = useParams();
  const targetEvent = eventInformation[id];
  console.log(eventInformation);
  const [eventDate, setEventDate] = useState(targetEvent.eventDate);
  const [startTime, setStartTime] = useState(targetEvent.startTime);
  const [endTime, setEndTime] = useState(targetEvent.endTime);
  const [title, setTitle] = useState(targetEvent.title);
  const [description, setDescription] = useState(targetEvent.description);

  function handleClickInputButton(event) {
    event.preventDefault();

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

    onSubmitAddEvent(eventInformation);
  }

  function handleClickRemoveButton(event) {
    event.preventDefault();

    const defaultStartDate = targetEvent.eventDate; // 여기에 시작 날짜가 젹혀있음
    const removeEvent = {
      eventDate: defaultStartDate,
      eventId: id,
    };

    history.push("/weekly");
    onSubmitRemoveEvent(removeEvent);
  };

  function handlereviseButton(event) {
    handleClickInputButton(event);
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
      <div>여기는 상세 페이지입니다.</div>
      <div className={styles.dateBoxs}>
        <p>이벤트 날짜</p>
        <input value={eventDate} type="date" name="date" onChange={handleChangeInput} />
        <p>시작 시간</p>
        <input value={startTime} type="time" name="startTime" onChange={handleChangeInput} />
        <p>종료 시간</p>
        <input value={endTime} type="time" name="endTime" onChange={handleChangeInput} />
        <p>이벤트 제목</p>
        <input value={title} type="text" name="title" onChange={handleChangeInput} />
        <p>이벤트 내용 작성</p>
        <input
          value={description}
          className={styles.textBox}
          type="text"
          name="description"
          onChange={handleChangeInput}
        />
        <button
          onClick={handlereviseButton}
          className={styles.button}
          type="submit"
        >
          제출
        </button>
        <button
          onClick={handleClickRemoveButton}
          className={styles.button}
          type="submit"
        >
          리셋
        </button>
      </div>
    </div>
  );
}

export default DetailEvent;
