import React, { useState } from "react";
import styles from "./EventForm.module.css";
import firebase from "../../api/firebase";

export default function EventForm ({ onEventInfoSubmit, isCreateMode, eventInfo, eventIdRoute }) {
  let initialEventData = {};

  if (isCreateMode) {
    initialEventData = {
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
  } else {
    const eventDateId = "id-".concat(eventIdRoute.substring(3, 11));
    const eventHourId = "id-".concat(eventIdRoute.substring(12));

    initialEventData = {
      "event-title": eventInfo[eventDateId][eventHourId]["eventTitle"],
      "event-description": eventInfo[eventDateId][eventHourId]["eventDescription"],
      "event-start-year": eventInfo[eventDateId][eventHourId]["eventStartYear"],
      "event-start-month": eventInfo[eventDateId][eventHourId]["eventStartMonth"],
      "event-start-date": eventInfo[eventDateId][eventHourId]["eventStartDate"],
      "event-start-hour": eventInfo[eventDateId][eventHourId]["eventStartHour"],
      "event-end-year": eventInfo[eventDateId][eventHourId]["eventEndYear"],
      "event-end-month": eventInfo[eventDateId][eventHourId]["eventEndMonth"],
      "event-end-date": eventInfo[eventDateId][eventHourId]["eventEndDate"],
      "event-end-hour": eventInfo[eventDateId][eventHourId]["eventEndHour"],
    }
  }

  const [eventData, setEventIfo] = useState(initialEventData);

  const handleChange = (ev) => {
    const { name } = ev.target;
    let { value } = ev.target;

    if (ev.target.type === "number") {
      value = parseInt(value, 10);
    }

    setEventIfo({...eventData, [name]: value});
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
            name="event-title"
            value={eventData["event-title"]}
            placeholder="일정 제목을 입력하세요."
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          일정 내용
          <input
            type="text"
            name="event-description"
            value={eventData["event-description"]}
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
              name="event-start-year"
              value={eventData["event-start-year"]}
              onChange={handleChange}
            />
              년
            <input
              type="number"
              name="event-start-month"
              value={eventData["event-start-month"]}
              max="12"
              min="1"
              onChange={handleChange}
            />
              월
            <input
              type="number"
              name="event-start-date"
              value={eventData["event-start-date"]}
              max="31"
              min="1"
              onChange={handleChange}
            />
              일
            <input
              type="number"
              name="event-start-hour"
              value={eventData["event-start-hour"]}
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
              name="event-end-year"
              value={eventData["event-end-year"]}
              onChange={handleChange}
            />
              년
            <input
              type="number"
              name="event-end-month"
              value={eventData["event-end-month"]}
              max="12"
              min="1"
              onChange={handleChange}
            />
              월
            <input
              type="number"
              name="event-end-date"
              value={eventData["event-end-date"]}
              max="31"
              min="1"
              onChange={handleChange}
            />
              일
            <input
              type="number"
              name="event-end-hour"
              value={eventData["event-end-hour"]}
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
