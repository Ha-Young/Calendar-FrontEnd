import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./EventForm.module.css";
import { saveToFirebaseDB } from "../../api/index";
import { MAX_MIN_DATE } from "../../constants";
import { getDateISOstring, getPathString } from "../../utils";
import checkValidEvent from "./checkValidEvent";


function EventForm({ inputData, updateEventForm, updateUserEvent, eventById }) {
  const [isValidEvent, setIsValidEvent] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsValidEvent(true), 2000);
    return () => clearTimeout(timeoutId);
  }, [isValidEvent]);

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

  const maxDate = new Date(year, month, 0).getDate();

  function addNewEvent() {
    const isValid = checkValidEvent(eventById, inputData);
    if (!isValid) return setIsValidEvent(isValid);

    const period = {
      from: getDateISOstring(year, month, date, fromHour),
      to: getDateISOstring(year, month, date, toHour),
    };
    const timeStamp = Date.now();
    const id = eventId ? eventId : "event" + timeStamp;
    const pathForEvent = getPathString(year, month, "events", id);
    const pathForContent = getPathString(year, month, "contents", id);

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
        updateUserEvent({
          [id]: { id, title, period, content, timeStamp }
        });
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
            onChange={(e) => {
              updateEventForm({ title: e.target.value });
            }}
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
            onChange={(e) => {
              updateEventForm({ year: Number(e.target.value) });
            }}
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
            onChange={(e) => {
              updateEventForm({ month: Number(e.target.value) });
            }}
          />
        </label>
        <label>
          Date:
          <input
            name="date"
            type="number"
            min={MAX_MIN_DATE.DATE.MIN}
            max={maxDate}
            value={date <= maxDate ? date : maxDate}
            onChange={(e) => {
              updateEventForm({ date: Number(e.target.value) });
            }}
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
            onChange={(e) => {
              updateEventForm({ fromHour: Number(e.target.value) });
            }}
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
            onChange={(e) => {
              updateEventForm({ toHour: Number(e.target.value) });
            }}
          />
        </label>
        <label>
          Content:
          <textarea
            name="eventContent"
            value={content}
            onChange={(e) => {
              updateEventForm({ content: e.target.value });
            }}
          />
        </label>
      </fieldset>
      {isValidEvent ? null : <span className={styles.alert}>중복된 이벤트입니다.</span>}
        <button onClick={() => {
          addNewEvent();
          updateEventForm({ ...inputData, id: "", title: "", content: "" })
        }}>
          등록
        </button>
      <Link to="/calendar">
        <button onClick={() => {
          updateEventForm({
            ...inputData,
            title: "",
            content: "",
            id: ""
          });
        }}>취소</button>
      </Link>
    </>
  )
};

export default EventForm;
