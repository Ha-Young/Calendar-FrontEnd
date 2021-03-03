import React, { useState } from "react";
import styles from "./Event.module.css";

import { fetchAllEvents } from "../../api/index";

export default function Event() {
  const [eventDate, setEventDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // 이 쪽 컴포넌트에서 리덕스로 데이터 관리
  function onClickInputButton(e) {
    e.preventDefault();

    const editStartTime = `${startTime.slice(0, 2)}:00`;
    const editEndClock = `${Number(endTime.slice(0, 2)) + 1}:00`;

    return {
      [eventDate]: {
        [editStartTime]: {
          editEndClock,
          title,
          description
        }
      }
    };
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
