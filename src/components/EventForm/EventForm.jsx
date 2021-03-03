import React, { useRef, useState } from "react";

import TheDate from "../TheDate/TheDate";
import styles from "./EventForm.module.css";
import TimeSelector from "../TimeSelector/TimeSelector";
import WithLabel from "../WithLabel/WithLabel";
import { START, END } from "../../constants/constants";

function EventForm({ date, onSubmit }) {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const [start, setStart] = useState(date.clone());
  const [end, setEnd] = useState(date.clone().add(1, "hours"));

  function handleTimeChange({ id, time }) {
    switch (id) {
      case START:
        if (time.format("H") === end.format("H")) {
          break;
        }

        setStart(time);
        break;
      case END:
        if (time.format("H") === start.format("H")) {
          break;
        }

        setEnd(time);
        break;
      default:
        throw new Error({message: "handleTimeChange error"});
    }
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
        <TheDate date={date} today={true} />
        <span className={styles.timeSelectorContainer}>
          <TimeSelector
            time={start}
            onChange={(time) => handleTimeChange({id: START, time})}
          />
          <TimeSelector
            time={end}
            onChange={(time) => handleTimeChange({id: END, time})}
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

export default EventForm;
