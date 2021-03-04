import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";

import styles from "./NewEventForm.module.css";
import { updateData } from "../../api/index";
import DaysAndTimeForm from "../DaysAndTimeForm/DaysAndTimeForm";
import InputForm from "../InputForm/InputForm";
import { getKeyFormat } from "../../utils/date";

function NewEventForm({ date, onSubmit }) {
  const [start, setStart] = useState(Number(date.format("H")));
  const [end, setEnd] = useState(Number(date.format("H")) + 1);
  const history = useHistory();

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
    updateData({
      date: getKeyFormat(date),
      id: start,
      event: {
        ...input,
        date: getKeyFormat(date),
        start,
        end,
      },
    });
    history.push("/");
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
        <button>
          <FaPaperPlane />
        </button>
      </InputForm>
    </div>
  );
}

export default NewEventForm;
