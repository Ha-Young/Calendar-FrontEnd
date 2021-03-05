import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { dateConst } from "constants/constants";

import { inputConst, typeConst } from "constants/constants";
import { getDateISO } from "utils/utilFunction";
import styles from "./EventForm.module.css";

const EventForm = ({ type, weeklyEvent, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(getDateISO(0));
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const { eventId } = useParams();

  useEffect(() => {
    if (type === typeConst.EDIT) {
      const currentEvent = weeklyEvent[eventId];
      const { title, description, date, startTime, endTime } = currentEvent;

      setTitle(title);
      setDescription(description);
      setDate(date);
      setStartTime(("0" + startTime + "시").slice(-3));
      setEndTime(("0" + endTime + "시").slice(-3));
    }
  }, [eventId, type, weeklyEvent]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateInput()) {
      const parsedStartTime = parseInt(startTime.slice(0, 2));
      const parsedEndTime = parseInt(endTime.slice(0, 2));
      const newEvent = {
        title,
        description,
        date,
        startTime: parsedStartTime,
        endTime: parsedEndTime,
      };

      if (type === typeConst.EDIT) {
        newEvent.id = eventId;
      }

      onSubmit(newEvent, type);

      setTitle("");
      setDescription("");
      setDate(getDateISO(0));
      setStartTime("");
      setEndTime("");
    } else {
      return;
    }
  };

  const validateInput = () => {
    if (title === "") {
      setAlertMessage("제목을 입력하세요");
      return false;
    } else if (description === "") {
      setAlertMessage("내용을 입력하세요");
      return false;
    } else if (startTime === "") {
      setAlertMessage("시작 시간을 입력하세요");
      return false;
    } else if (endTime === "") {
      setAlertMessage("종료 시간을 입력하세요");
      return false;
    } else if (
      parseInt(startTime.slice(0, 2)) >= parseInt(endTime.slice(0, 2))
    ) {
      setAlertMessage("종료 시간은 시작 시간 이후여야 합니다");
      return false;
    } else {
      setAlertMessage("");
      return true;
    }
  };

  const handleInput = (event) => {
    const {
      target: { name, value },
    } = event;

    switch (name) {
      case inputConst.TITLE:
        setTitle(value);
        break;

      case inputConst.DESCRIPTION:
        setDescription(value);
        break;

      case inputConst.DATE:
        setDate(value);
        break;

      case inputConst.START_TIME:
        setStartTime(value);
        break;

      case inputConst.END_TIME:
        setEndTime(value);
        break;

      default:
        return;
    }
  };

  return (
    <>
      <h1 className={styles.formTitle}>
        {type === typeConst.ADD ? "이벤트 추가하기" : "이벤트 수정하기"}
      </h1>
      <section className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <span className={styles.inputType}>제목</span>
            <input
              className={styles.title}
              name="title"
              type="text"
              placeholder="Event Title"
              value={title}
              onChange={(event) => handleInput(event)}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <span className={styles.inputType}>상세</span>
            <input
              className={styles.description}
              name="description"
              type="textarea"
              placeholder="Event Description"
              value={description}
              onChange={(event) => handleInput(event)}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <span className={styles.inputType}>날짜</span>
            <input
              className={styles.date}
              name="date"
              type="date"
              value={date}
              onChange={(event) => handleInput(event)}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <span className={styles.inputType}>시작</span>
            <select
              className={styles.startTime}
              name="startTime"
              id="start-time"
              value={startTime}
              onChange={(event) => handleInput(event)}
              required
            >
              {dateConst.TIME_LIST.map((time) => (
                <option key={time}>{time}시</option>
              ))}
            </select>
          </div>
          <div className={styles.inputContainer}>
            <span className={styles.inputType}>종료</span>
            <select
              className={styles.endTime}
              name="endTime"
              id="end-time"
              onChange={(event) => handleInput(event)}
              value={endTime}
              required
            >
              {dateConst.TIME_LIST.map((time) => (
                <option key={time}>{time}시</option>
              ))}
            </select>
          </div>
          {alertMessage && (
            <p className={styles.alertMessage}>{alertMessage}</p>
          )}
          <div className={styles.buttonContainer}>
            <button className={styles.addButton}>제출하기</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default EventForm;
