import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DATE } from "constants/constants";

import { INPUT_TYPE, FORM_TYPE } from "constants/constants";
import { getDateISO } from "utils/utilFunction";
import styles from "./EventForm.module.css";

const EventForm = ({ type, weeklyEvent, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(getDateISO(0));
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [alertMessage, setAlertMessage] = useState("");
  const { eventId } = useParams();

  useEffect(() => {
    if (type === FORM_TYPE.EDIT) {
      const currentEvent = weeklyEvent[eventId];
      const { title, description, date, startTime, endTime } = currentEvent;

      setTitle(title);
      setDescription(description);
      setDate(date);
      setStartTime(startTime);
      setEndTime(endTime);
    }
  }, [eventId, type, weeklyEvent]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const currentInput = { title, description, date, startTime, endTime };
    const alertMessage = getAlertMessage(currentInput);

    if (alertMessage) {
      setAlertMessage(alertMessage);
      return;
    }

    if (type === FORM_TYPE.EDIT) {
      currentInput.id = eventId;
    }

    onSubmit(currentInput, type);

    setTitle("");
    setDescription("");
    setDate(getDateISO(0));
    setStartTime(0);
    setEndTime(0);
    setAlertMessage("");
  };

  const getAlertMessage = ({
    title,
    description,
    date,
    startTime,
    endTime,
  }) => {
    if (title === "") {
      return "제목을 입력하세요";
    }

    if (description === "") {
      return "내용을 입력하세요";
    }

    if (startTime === 0) {
      return "시작 시간을 입력하세요";
    }

    if (endTime === 0) {
      return "종료 시간을 입력하세요";
    }

    if (startTime >= endTime) {
      return "종료 시간은 시작 시간 이후여야 합니다";
    }

    return null;
  };

  const handleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case INPUT_TYPE.TITLE:
        setTitle(value);
        break;

      case INPUT_TYPE.DESCRIPTION:
        setDescription(value);
        break;

      case INPUT_TYPE.DATE:
        setDate(value);
        break;

      case INPUT_TYPE.START_TIME:
        setStartTime(parseInt(value.slice(0, 2)));
        break;

      case INPUT_TYPE.END_TIME:
        setEndTime(parseInt(value.slice(0, 2)));
        break;

      default:
        return;
    }
  };

  return (
    <>
      <h1 className={styles.formTitle}>
        {type === FORM_TYPE.ADD ? "이벤트 추가하기" : "이벤트 수정하기"}
      </h1>
      <section className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <span className={styles.inputType}>제목</span>
            <input
              className={styles.title}
              name={INPUT_TYPE.TITLE}
              type="text"
              placeholder="Event Title"
              value={title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <span className={styles.inputType}>상세</span>
            <input
              className={styles.description}
              name={INPUT_TYPE.DESCRIPTION}
              type="textarea"
              placeholder="Event Description"
              value={description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <span className={styles.inputType}>날짜</span>
            <input
              className={styles.date}
              name={INPUT_TYPE.DATE}
              type="date"
              value={date}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <span className={styles.inputType}>시작</span>
            <select
              className={styles.startTime}
              name={INPUT_TYPE.START_TIME}
              value={("0" + startTime + "시").slice(-3)}
              onChange={handleInputChange}
              required
            >
              {DATE.TIME_LIST.map((time) => (
                <option key={time}>{time}시</option>
              ))}
            </select>
          </div>
          <div className={styles.inputContainer}>
            <span className={styles.inputType}>종료</span>
            <select
              className={styles.endTime}
              name={INPUT_TYPE.END_TIME}
              onChange={handleInputChange}
              value={("0" + endTime + "시").slice(-3)}
              required
            >
              {DATE.TIME_LIST.map((time) => (
                <option key={time}>{time}시</option>
              ))}
            </select>
          </div>
          {alertMessage && (
            <p className={styles.alertMessage}>{alertMessage}</p>
          )}
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.addButton}>
              제출하기
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default EventForm;
