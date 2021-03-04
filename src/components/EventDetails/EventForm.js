import React, { useState } from "react";
import { MAX_MIN_DATE } from "../../constants";
import registerEvent from "../../utils/registerEvent";

function EventForm({inputData, setEventForm, setUserEvent}) {
  const {
    setTitle,
    setContent,
    setYear,
    setMonth,
    setDate,
    setFromHour,
    setToHour,
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

  return (
    <>
      <header>New Event</header>
      <fieldset>
        <label>
          Title:
          <input onChange={(e) => setTitle(e.target.value)} name="title" type="text" />
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
        <textarea name="eventContent" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      </label>
      </fieldset>
      <button onClick={() => registerEvent(inputData, {title, content}, setEvent)}>등록</button>
      <button>취소</button>
    </>
  )
};

export default EventForm;