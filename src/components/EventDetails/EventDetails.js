import React, { useState } from "react";
import { MAX_MIN_DATE } from "../../constants"
import { letItDispatch } from "../../utils/eventHandlers";
import { getFromStringDateTo } from "../../utils";
export default function EventDetails({dispatches}) {
  const {
    setYear,
    setMonth,
    setDate,
    setFromHour,
    setToHour,
  } = dispatches;
  const [content, setContent] = useState("");

  return (
    <>
      <header>New Event</header>
      <fieldset>
        <label>
          Title:
          <input name="title" type="text" />
        </label>

        <label>
          Year:
          <input
            name="year"
            type="number"
            min={MAX_MIN_DATE.YEAR.MIN}
            max={MAX_MIN_DATE.YEAR.MAX}
            value={""}
            onChange={(e) => letItDispatch(Number(e.target.value), setYear)}
          />
        </label>
        <label>
          Month:
          <input
            name="month"
            type="number"
            min={MAX_MIN_DATE.MONTH.MIN}
            max={MAX_MIN_DATE.MONTH.MAX}
            value={""}
            onChange={(e) => letItDispatch(Number(e.target.value), setMonth)}
          />
        </label>
        <label>
          Date:
          <input
            name="date"
            type="number"
            min={MAX_MIN_DATE.DATE.MIN}
            max={MAX_MIN_DATE.DATE.MAX}
            value={""}
            onChange={(e) => letItDispatch(Number(e.target.value), setDate)}
          />
        </label>

      <label>
        From:
        <input
          name="fromHour"
          type="number"
          min={MAX_MIN_DATE.HOUR.MIN}
          max={MAX_MIN_DATE.HOUR.MAX}
          value={""}
          onChange={(e) => letItDispatch(Number(e.target.value), setFromHour)}
        />
      </label>
      <label>
        To:
        <input
          name="toHour"
          type="number"
          min={MAX_MIN_DATE.HOUR.MIN}
          max={MAX_MIN_DATE.HOUR.MAX}
          value={""}
          onChange={(e) => letItDispatch(Number(e.target.value), setToHour)}
        />
      </label>
      <label>
        Content:
        <textarea name="eventContent" value={content} onChange={(e) => letItDispatch(e.target.value, setContent)}></textarea>
      </label>
      </fieldset>
      <button>등록</button>
      <button>취소</button>
    </>
  )
};