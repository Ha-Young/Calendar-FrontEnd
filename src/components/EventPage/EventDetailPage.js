import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./EventCreationPage.module.scss";

function EventDetailPage({ eventInfo, onEventChange }) {
  const [eventTitle, setEventTitle] = useState(eventInfo.eventTitle);
  const [eventDate, setEventDate] = useState(eventInfo.eventDate);
  const [eventStartTime, setEventStartTime] = useState(
    eventInfo.eventStartTime
  );
  const [eventEndTime, setEventEndTime] = useState(eventInfo.eventEndTime);
  const [eventDescription, setEventDescription] = useState(
    eventInfo.eventDescription
  );
  const eventId = eventInfo.eventId;
  const history = useHistory();

  const handleEventChange = (e) => {
    const changeType = e.target.id;
    const eventInfo = {
      eventTitle,
      eventDate,
      eventStartTime,
      eventEndTime,
      eventDescription,
      eventId,
    };

    onEventChange(changeType, eventInfo);
  };


  return (
    <div className={styles.SubmitForm}>
      <form className={styles.flexColumn}>
        <label htmlFor="title">이벤트 제목 </label>
        <input
          onChange={(e) => setEventTitle(e.target.value)}
          type="text"
          id="title"
          value={eventTitle}
          placeholder="이벤트 제목"
          required
        />
        <label htmlFor="date">이벤트 일자</label>
        <input
          onChange={(e) => setEventDate(e.target.value)}
          type="date"
          id="date"
          value={eventDate}
        ></input>
        <label htmlFor="start-time">이벤트 시작시간 </label>
        <input
          onChange={(e) => setEventStartTime(e.target.value)}
          type="time"
          id="start-time"
          value={eventStartTime}
          placeholder="이벤트 시작"
          required
        />
        <label htmlFor="end-time">이벤트 종료시간</label>
        <input
          onChange={(e) => setEventEndTime(e.target.value)}
          type="time"
          id="end-time"
          value={eventEndTime}
          placeholder="이벤트 종료"
          required
        />
        <label htmlFor="description">이벤트 설명</label>
        <input
          onChange={(e) => setEventDescription(e.target.value)}
          id="description"
          value={eventDescription}
          placeholder="이벤트 설명"
          required
        />
        <div>
          <button onClick={handleEventChange} id="update">
            이벤트 수정
          </button>
          <button onClick={handleEventChange} id="remove">
            이벤트 삭제
          </button>
          <button onClick={() => history.push("/calendar")}>뒤로 가기</button>
        </div>
      </form>
    </div>
  );
}

export default EventDetailPage;
