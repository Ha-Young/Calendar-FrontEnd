import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

import styles from "./NewEventForm.module.css";
import DaysAndTimeForm from "../DaysAndTimeForm/DaysAndTimeForm";
import InputForm from "../InputForm/InputForm";
import { getKeyFormat } from "../../utils/date";

function NewEventForm({ date, onSubmit }) {
  const currentTime = Number(date.format("H"));
  const [start, setStart] = useState(currentTime);
  const [end, setEnd] = useState(currentTime + 1);

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
    const keyFormatDate = getKeyFormat(date);
    const event = {...input, date: keyFormatDate, start, end};

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
      <InputForm onSubmit={handleInputSubmit}>
        <button>
          <FaPaperPlane />
        </button>
      </InputForm>
    </div>
  );
}

export default NewEventForm;
