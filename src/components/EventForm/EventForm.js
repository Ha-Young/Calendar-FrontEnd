import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./EventForm.module.css";
import { MAX_MIN_DATE, EVENT_INIT_ID } from "../../constants";
import registerEvent from "./registerEvent";
import checkValidEvent from "./checkValidEvent";


function EventForm({inputData, setEventForm, setUserEvent, eventById}) {
  const [isValidEvent, setIsValidEvent] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsValidEvent(true), 2000);
    return () => clearTimeout(timeoutId);
  }, [isValidEvent]);

  const {
    setTitle,
    setContent,
    setYear,
    setMonth,
    setDate,
    setFromHour,
    setToHour,
    clearForm,
  } = setEventForm;

  const { setEvent } = setUserEvent;

  const {
    title,
    content,
    year,
    month,
    date,
    fromHour,
    toHour,
  } = inputData;

  function handleOnClick() {
    const isValid = checkValidEvent(eventById, inputData);
    if (!isValid) return setIsValidEvent(isValid);
    registerEvent(inputData, {title, content}, setEvent);
    history.push("/calendar");
  }

  return (
    <>
      <header>New Event</header>
      <fieldset>
        <label>
          Title:
          <input
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Year:
          <input
            name="year"
            type="number"
            min={MAX_MIN_DATE.YEAR.MIN}
            max={MAX_MIN_DATE.YEAR.MAX}
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          />
        </label>
        <label>
          Month:
          <input
            name="month"
            type="number"
            min={MAX_MIN_DATE.MONTH.MIN}
            max={MAX_MIN_DATE.MONTH.MAX}
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
          />
        </label>
        <label>
          Date:
          <input
            name="date"
            type="number"
            min={MAX_MIN_DATE.DATE.MIN}
            max={MAX_MIN_DATE.DATE.MAX}
            value={date}
            onChange={(e) => setDate(Number(e.target.value))}
          />
        </label>
        <label>
          From:
          <input
            name="fromHour"
            type="number"
            min={MAX_MIN_DATE.HOUR.MIN}
            max={MAX_MIN_DATE.HOUR.MAX}
            value={fromHour}
            onChange={(e) => setFromHour(Number(e.target.value))}
          />
        </label>
        <label>
          To:
          <input
            name="toHour"
            type="number"
            min={MAX_MIN_DATE.HOUR.MIN}
            max={MAX_MIN_DATE.HOUR.MAX}
            value={toHour}
            onChange={(e) => setToHour(Number(e.target.value))}
          />
        </label>
        <label>
          Content:
          <textarea
            name="eventContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
      </fieldset>
      {isValidEvent ? null : <span className={styles.alert}>중복된 이벤트입니다.</span>}
        <button onClick={handleOnClick}>
          등록
        </button>
      <Link to="/calendar">
        <button onClick={() => clearForm({...inputData, title: "", content: "", eventId: EVENT_INIT_ID})}>취소</button>
      </Link>
    </>
  )
};

export default EventForm;
