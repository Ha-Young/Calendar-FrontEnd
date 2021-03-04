import { waitForElementToBeRemoved } from "@testing-library/react";
import React, { useState } from "react";
import styles from "./EventForm.module.css";

export default function EventForm ({ onEventInfoSubmit }) {
  const initialEventInfo = {
    "event-title": "",
    "event-description": "",
    "event-start-year": new Date().getFullYear(),
    "event-start-month": new Date().getMonth() + 1,
    "event-start-date": new Date().getDate(),
    "event-start-hour": new Date().getHours(),
    "event-end-year": new Date().getFullYear(),
    "event-end-month": new Date().getMonth() + 1,
    "event-end-date": new Date().getDate(),
    "event-end-hour": new Date().getHours() + 1,
  }

  const [eventInfo, setEventIfo] = useState(initialEventInfo);

  const handleChange = (ev) => {
    const { name } = ev.target;
    let { value } = ev.target;

    if (ev.target.type === "number") {
      value = parseInt(value, 10);
    }

    setEventIfo({...eventInfo, [name]: value});
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onEventInfoSubmit(eventInfo);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.eventInput}>
        <div>
          일정 제목
          <input
            type="text"
            name="event-title"
            placeholder="일정 제목을 입력하세요."
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div>
          일정 내용
          <input
            type="text"
            name="event-description"
            placeholder="일정 내용을 입력하세요."
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div>
          일정 시작 시간
          <div className={styles.timeInputContainer}>
            <input
              type="number"
              name="event-start-year"
              value={eventInfo["event-start-year"]}
              onChange={handleChange}
            />
              년
            <input
              type="number"
              name="event-start-month"
              value={eventInfo["event-start-month"]}
              max="12"
              min="1"
              onChange={handleChange}
            />
              월
            <input
              type="number"
              name="event-start-date"
              value={eventInfo["event-start-date"]}
              max="31"
              min="1"
              onChange={handleChange}
            />
              일
            <input
              type="number"
              name="event-start-hour"
              value={eventInfo["event-start-hour"]}
              max="23"
              min="1"
              onChange={handleChange}
            />
              시
          </div>
        </div>
        <div>
          일정 종료 시간
          <div className={styles.timeInputContainer}>
            <input
              type="number"
              name="event-end-year"
              value={eventInfo["event-end-year"]}
              onChange={handleChange}
            />
              년
            <input
              type="number"
              name="event-end-month"
              value={eventInfo["event-end-month"]}
              max="12"
              min="1"
              onChange={handleChange}
            />
              월
            <input
              type="number"
              name="event-end-date"
              value={eventInfo["event-end-date"]}
              max="31"
              min="1"
              onChange={handleChange}
            />
              일
            <input
              type="number"
              name="event-end-hour"
              value={eventInfo["event-end-hour"]}
              max="23"
              min="0"
              onChange={handleChange}
            />
              시
          </div>
        </div>
        <input
          className={styles.submitButton}
          type="submit"
          value="등록"
        />
      </form>
    </>
  );
}
