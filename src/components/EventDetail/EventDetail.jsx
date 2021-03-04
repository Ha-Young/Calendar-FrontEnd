import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import moment from "moment";

import { updateData } from "../../api/index";
import { getKeyFormat } from "../../utils/date";
import DaysAndTimeForm from "../DaysAndTimeForm/DaysAndTimeForm";
import InputForm from "../InputForm/InputForm";
import styles from "./EventDetail.module.css";

function EventDetail({ event = {}, onSubmit, match}) {
  const [edit, setEdit] = useState(false);
  const [start, setStart] = useState(event.start ? event.start : 0);
  const [end, setEnd] = useState(event.end ? event.end : 1);
  const history = useHistory();
  const date = moment(event.date);

  console.log(event);

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

  function handleEditClick(e) {
    e.stopPropagation();
    setEdit((prev) => !prev);
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
    <div className={styles.eventDetail}>
      <DaysAndTimeForm
        date={date}
        isTheDay={true}
        start={start}
        end={end}
        handleStartChange={handleStartChange}
        handleEndChange={handleEndChange}
        disable={!edit}
      />
      <InputForm
        onSubmit={handleInputSubmit}
        title={event.title}
        content={event.content}
        disable={!edit}
      >
        {edit
          ? <button className={styles.button}><FaPaperPlane /></button>
          : <button className={styles.button} onClick={handleEditClick}>수정</button>
        }
      </InputForm>
    </div>
  );
}

export default EventDetail;
