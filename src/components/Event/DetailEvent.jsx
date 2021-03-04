import React, { useEffect, useState } from "react";
import styles from "./Event.module.css";

import { addEvent } from "../../api";

function DetailEvent({ onSubmitAddEvent, onSubmitRemoveEvent }) {
  const [eventDate, setEventDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // useEffect(() => {

  // }, []);

  function handleClickInputButton(e) {
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

    onSubmitAddEvent(eventInformation);
    // addEvent(eventInformation);
  }

  function handleClickRemoveButton(e) {
    e.preventDefault();

    const removeEvent = {
      id: eventDate,
      startTime,
    }

    onSubmitRemoveEvent(removeEvent); // 얘는 redux에서 내용 제거용
    // 여기에 파이어 베이스에서 데이터 제거하는 거
  }

  function handleChangeInput(e) {
    e.preventDefault();

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
      <div>여기는 상세 페이지입니다.</div>
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
        <button
          onClick={handleClickInputButton}
          className={styles.button}
          type="submit"
          value="제출"
        />
        <button
          onClick={handleClickRemoveButton}
          className={styles.button}
          type="submit"
          value="리셋"
        />
      </div>
    </div>
  );
}

export default DetailEvent;
