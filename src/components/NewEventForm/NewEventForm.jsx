import React, { useState } from "react";

import styles from "./NewEventForm.module.css";
import DaysAndTimeForm from "../DaysAndTimeForm/DaysAndTimeForm";
import InputForm from "../InputForm/InputForm";

function NewEventForm({ date, onSubmit }) {
  const [start, setStart] = useState(Number(date.format("H")));
  const [end, setEnd] = useState(Number(date.format("H")) + 1);

  function handleStartChange(time) {
    if (time === end) {
      return;
    }

    setStart(time);
  }

  function handleEndChange(time) {
    if (time === start) {
      return;
    }

    setEnd(time);
  }

  function handleInputSubmit(input) {
    const event = {
      ...input,
      date,
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
        handleStartChange={handleStartChange}
        handleEndChange={handleEndChange}
      />
      <InputForm
        onSubmit={handleInputSubmit}
      >
        <button>다 ~ 적 었 다 아 아 아</button>
      </InputForm>
    </div>
  );
}

export default NewEventForm;
