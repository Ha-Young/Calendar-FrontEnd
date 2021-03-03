import React, { useState } from "react";
import styles from "./EventForm.module.css";

export default function EventForm ({ onEventInfoSubmit }) {
  const [eventInfo, setEventIfo] = useState({});

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setEventIfo({...eventInfo, [name]: value})
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onEventInfoSubmit(eventInfo);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.eventInput}>
        <div>
          일정 이름
          <input type="text" name="event-name" onChange={handleChange} />
        </div>
        <div>
          일정 내용
          <input type="text" name="event-description" onChange={handleChange} />
        </div>
        <div>
          일정 시작 시간
          <div className={styles.timeInputContainer}>
            <input
              type="number"
              name="event-start-year"
              value={eventInfo["event-start-year"]}
              placeholder="2022"
              onChange={handleChange}
            />
              년
            <input
              type="number"
              name="event-start-month"
              value={eventInfo["event-start-month"]}
              placeholder="3"
              onChange={handleChange}
            />
              월
            <input
              type="number"
              name="event-start-date"
              value={eventInfo["event-start-date"]}
              placeholder="11"
              onChange={handleChange}
            />
              일
            <input
              type="number"
              name="event-start-hour"
              value={eventInfo["event-start-hour"]}
              placeholder="8"
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
              placeholder="2021"
              onChange={handleChange}
            />
              년
            <input
              type="number"
              name="event-end-month"
              value={eventInfo["event-end-month"]}
              placeholder="3"
              onChange={handleChange}
            />
              월
            <input
              type="number"
              name="event-end-date"
              value={eventInfo["event-end-date"]}
              placeholder="11"
              onChange={handleChange}
            />
              일
            <input
              type="number"
              name="event-end-hour"
              value={eventInfo["event-end-hour"]}
              placeholder="8"
              onChange={handleChange}
            />
              시
          </div>
        </div>
        <input type="submit" value="등록"/>
      </form>
    </>
  );
}
