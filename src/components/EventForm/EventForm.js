import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./EventForm.module.css";
import { saveToFirebaseDB } from "../../api/index";
import { MAX_MIN_DATE } from "../../constants";
import { getDateISOstring, getPathString } from "../../utils";
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
    id: eventId,
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

    const period = {
      from: getDateISOstring(year, month, date, fromHour),
      to: getDateISOstring(year, month, date, toHour),
    };
    const timeStamp = Date.now();
    const id = eventId ? eventId : "event" + timeStamp;

    setEvent({id, title, period, content, timeStamp});

    const pathForEvent = getPathString(year, month, date, "events", id);
    const pathForContent = getPathString(year, month, date, "contents", id);

    const resultBySavingEvent = saveToFirebaseDB(
      pathForEvent,
      {id, title, period, timeStamp},
    );
    const resultBySavingContent = saveToFirebaseDB(
      pathForContent,
      {id, content},
    );

    Promise.all([resultBySavingEvent, resultBySavingContent])
      .then((res) => {
        history.push("/calendar");
      })
      .catch((err) => {
        // Add Error Handling when got a failure to save a data
      });
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
        <button onClick={() => clearForm({ ...inputData, title: "", content: "", id: "" })}>취소</button>
      </Link>
    </>
  )
};

export default EventForm;
