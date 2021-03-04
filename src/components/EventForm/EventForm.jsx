import React, { useRef, useState } from "react";

import TheDate from "../DaysBoard/DaysBoard";
import styles from "./EventForm.module.css";
import TimeSelector from "../TimeSelector/TimeSelector";
import WithLabel from "../WithLabel/WithLabel";

function EventForm({ date, onSubmit, event }) {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const [start, setStart] = useState(event ? event.start : Number(date.format("H")));
  const [end, setEnd] = useState(event ? event.end : Number(date.format("H")) + 1);

  function handleStartTimeChange(time) {
    if (time === end) {
      return;
    }

    setStart(time);
  }

  function handleEndTimeChange(time) {
    if (time === start) {
      return;
    }

    setEnd(time);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const event = {
      date,
      title: titleRef.current.value,
      content: contentRef.current.value,
      start,
      end,
    };

    onSubmit(event);
  }

  return (
    <div className={styles.eventForm}>
      <div className={styles.dateContainer}>
        <TheDate date={date} isTheDay={true} />
        <span className={styles.timeSelectorContainer}>
          <TimeSelector
            time={start}
            onChange={handleStartTimeChange}
          />
          <TimeSelector
            time={end}
            onChange={handleEndTimeChange}
          />
        </span>
      </div>
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit}
      >
        <WithLabel label="제목">
          <input
            className={styles.title}
            value={event ? event.title : ""}
            ref={titleRef}
            type="text"
          />
        </WithLabel>
        <WithLabel label="내용">
          <textarea
            className={styles.content}
            value={event ? event.content : ""}
            ref={contentRef}
          />
        </WithLabel>
        <button>다 ~ 적 었 다 아 아 아</button>
      </form>
    </div>
  );
}

export default EventForm;
