import React, { useRef, useState } from "react";

import styles from "./NewEventForm.module.css";
import WithLabel from "../WithLabel/WithLabel";
import DaysAndTimeForm from "../DaysAndTimeForm/DaysAndTimeForm";

function NewEventForm({ date, onSubmit }) {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const [start, setStart] = useState(Number(date.format("H")));
  const [end, setEnd] = useState(Number(date.format("H")) + 1);

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
    <div className={styles.newEventForm}>
      <DaysAndTimeForm
        date={date}
        isTheDay={true}
        start={start}
        end={end}
        handleStartTimeChange={handleStartTimeChange}
        handleEndTimeChange={handleEndTimeChange}
      />
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit}
      >
        <WithLabel label="제목">
          <input
            className={styles.title}
            ref={titleRef}
            type="text"
          />
        </WithLabel>
        <WithLabel label="내용">
          <textarea
            className={styles.content}
            ref={contentRef}
          />
        </WithLabel>
        <button>다 ~ 적 었 다 아 아 아</button>
      </form>
    </div>
  );
}

export default NewEventForm;
