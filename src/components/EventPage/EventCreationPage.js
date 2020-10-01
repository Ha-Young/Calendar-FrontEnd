import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./EventCreationPage.module.scss";

function EventCreationPage({ onEventCreate }) {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventInfo = {
      eventTitle,
      eventDate,
      eventStartTime,
      eventEndTime,
      eventDescription,
      eventId: new Date().getTime(),
    };

    onEventCreate(eventInfo);
  };

  return (
    <div className={styles.SubmitForm}>
      <form className={styles.flexColumn} onSubmit={handleSubmit}>
        <label htmlFor="title">이벤트 제목 </label>
        <input
          onChange={(e) => setEventTitle(e.target.value)}
          type="text"
          id="title"
          placeholder="이벤트 제목"
          required
        />
        <label htmlFor="date">이벤트 일자</label>
        <input
          onChange={(e) => setEventDate(e.target.value)}
          type="date"
          id="date"
        ></input>
        <label htmlFor="start-time">이벤트 시작시간 </label>
        <input
          onChange={(e) => setEventStartTime(e.target.value)}
          type="time"
          id="start-time"
          placeholder="이벤트 시작"
          required
        />
        <label htmlFor="end-time">이벤트 종료시간</label>
        <input
          onChange={(e) => setEventEndTime(e.target.value)}
          type="time"
          id="end-time"
          placeholder="이벤트 종료"
          required
        />
        <label htmlFor="description">이벤트 설명</label>
        <input
          onChange={(e) => setEventDescription(e.target.value)}
          id="description"
          placeholder="이벤트 설명"
          required
        />
        <div>
          <button type="submit">이벤트 등록</button>
          <button onClick={() => history.push("/calendar")}>뒤로 가기</button>
        </div>
      </form>
    </div>
  );
}

export default EventCreationPage;
