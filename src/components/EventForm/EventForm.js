import React, { useState } from "react";
import styles from "./EventForm.module.css";

export default function EventForm ({ onEventInfoSubmit, isCreateMode }) {
  const currentDate = new Date();
  const initialYear = currentDate.getFullYear();
  const initialMonth = currentDate.getMonth() + 1;
  const initialDate = currentDate.getDate();
  const initialHour = currentDate.getHours();

  const initialEventData = {
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

  const [eventData, setEventData] = useState(initialEventData);

  const handleChange = (ev) => {
    const { name } = ev.target;
    let { value } = ev.target;

    if (ev.target.type === "number") {
      value = parseInt(value, 10);
    }

    setEventData({...eventData, [name]: value});
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onEventInfoSubmit(eventData);
  }

  return (
    <>
      <div className={styles.EventForm}>
      <form onSubmit={handleSubmit} className={styles.eventInput}>
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
          {!isCreateMode && <input
            className={styles.submitButton}
            type="submit"
            value="삭제"
          />}
        </div>
      </form>
      </div>
    </>
  );
}
