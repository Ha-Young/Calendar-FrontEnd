import React, { useState } from "react";
import styles from "./EventForm.module.css";

export default function EventForm ({ onEventInfoSubmit, isCreateMode, eventInfo, urlInfo }) {
  const currentDate = new Date();
  const initialYear = currentDate.getFullYear();
  const initialMonth = currentDate.getMonth() + 1;
  const initialDate = currentDate.getDate();
  const initialHour = currentDate.getHours();

  let initialEventData = {
    "eventId": `${initialYear}-${initialMonth}-${initialDate}-${initialHour}`,
    "title": "",
    "description": "",
    "start-year": initialYear,
    "start-month": initialMonth,
    "start-date": initialDate,
    "start-hour": initialHour,
    "end-year": initialYear,
    "end-month": initialMonth,
    "end-date": initialDate,
    "end-hour": initialHour + 1
  };

  if (!isCreateMode) {
    const numOfEventId = urlInfo.location.pathname.match(/\d+/g);
    const dateId = `id-${numOfEventId[0]}-${numOfEventId[1]}-${numOfEventId[2]}`;
    const hourId = `id-${numOfEventId[3]}`;
    const selectedInfo = eventInfo[dateId][hourId];
    initialEventData = selectedInfo;
  }

  const [eventData, setEventData] = useState(initialEventData);

  const handleChange = (ev) => {
    const { name } = ev.target;
    let { value } = ev.target;
    let eventIds = [
      eventData["start-year"],
      eventData["start-month"],
      eventData["start-date"],
      eventData["start-hour"]
    ];

    switch (name) {
      case "start-year":
        eventIds[0] = ev.target.value;
        break;
      case "start-month":
        eventIds[1] = ev.target.value;
        break;
      case "start-date":
        eventIds[2] = ev.target.value;
        break;
      case "start-hour":
        eventIds[3] = ev.target.value;
    }

    const eventId = eventIds.join("-");

    if (ev.target.type === "number") {
      value = parseInt(value, 10);
    }

    setEventData({...eventData, [name]: value, "eventId": eventId});
  }

  const handleDeleteClcik = (ev) => {
    const numOfEventId = urlInfo.location.pathname.match(/\d+/g);
    const dateId = `id-${numOfEventId[0]}-${numOfEventId[1]}-${numOfEventId[2]}`;
    const hourId = `id-${numOfEventId[3]}`;
    delete eventInfo[dateId][hourId];
  }

  const handleFormSubmit = (ev) => {
    ev.preventDefault();

    if (!isCreateMode) {
      const numOfEventId = urlInfo.location.pathname.match(/\d+/g);
      const dateId = `id-${numOfEventId[0]}-${numOfEventId[1]}-${numOfEventId[2]}`;
      const hourId = `id-${numOfEventId[3]}`;
      delete eventInfo[dateId][hourId];
    }

    onEventInfoSubmit(eventData);
  }

  return (
    <>
      <div className={styles.EventForm}>
      <form onSubmit={handleFormSubmit} className={styles.eventInput}>
        <div className={styles.inputContainer}>
          일정 제목
          <input
            type="text"
            name="title"
            value={eventData["title"]}
            placeholder="일정 제목을 입력하세요."
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          일정 내용
          <input
            type="text"
            name="description"
            value={eventData["description"]}
            placeholder="일정 내용을 입력하세요."
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          일정 시작 시간
          <div className={styles.timeInputContainer}>
            <input
              type="number"
              name="start-year"
              value={eventData["start-year"]}
              onChange={handleChange}
            />
              년
            <input
              type="number"
              name="start-month"
              value={eventData["start-month"]}
              max="12"
              min="1"
              onChange={handleChange}
            />
              월
            <input
              type="number"
              name="start-date"
              value={eventData["start-date"]}
              max="31"
              min="1"
              onChange={handleChange}
            />
              일
            <input
              type="number"
              name="start-hour"
              value={eventData["start-hour"]}
              max="23"
              min="1"
              onChange={handleChange}
            />
              시
          </div>
        </div>
        <div className={styles.inputContainer}>
          일정 종료 시간
          <div className={styles.timeInputContainer}>
            <input
              type="number"
              name="end-year"
              value={eventData["end-year"]}
              onChange={handleChange}
            />
              년
            <input
              type="number"
              name="end-month"
              value={eventData["end-month"]}
              max="12"
              min="1"
              onChange={handleChange}
            />
              월
            <input
              type="number"
              name="end-date"
              value={eventData["end-date"]}
              max="31"
              min="1"
              onChange={handleChange}
            />
              일
            <input
              type="number"
              name="end-hour"
              value={eventData["end-hour"]}
              max="23"
              min="0"
              onChange={handleChange}
            />
              시
          </div>
        </div>
        <div className={styles.buttonContainer}>
          {isCreateMode && <input
            className={styles.submitButton}
            type="submit"
            value="등록"
          />}
          {!isCreateMode && <input
            className={styles.submitButton}
            type="submit"
            value="수정"
          />}
          {!isCreateMode && <button
            className={styles.submitButton}
            type="button"
            onClick={handleDeleteClcik}
          >
            삭제
          </button>}
        </div>
      </form>
      </div>
    </>
  );
}
