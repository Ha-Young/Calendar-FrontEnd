import React, { useState, useEffect } from "react";
import { FaPaperPlane, FaTrashAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import moment from "moment";

import { deleteData } from "../../api/index";
import { getKeyFormat } from "../../utils/date";
import DaysAndTimeForm from "../DaysAndTimeForm/DaysAndTimeForm";
import InputForm from "../InputForm/InputForm";
import styles from "./EventDetail.module.css";

function EventDetail({ event = {}, onEditSubmit, onDeleteEvent, onLoadEvent}) {
  const [edit, setEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [start, setStart] = useState(event.start ?? 0);
  const [end, setEnd] = useState(event.end ?? 1);
  const history = useHistory();
  const date = moment(event.date);
  const prevId = event.start;

  useEffect(() => {
    onLoadEvent();
    setStart(event.start);
    setEnd(event.end);
  }, [event, onLoadEvent])

  function handleInputSubmit(input) {
    const keyFormatDate = getKeyFormat(date);

    if (isDelete) {
      onDeleteEvent(keyFormatDate, prevId);
      deleteData({
        date: keyFormatDate,
        prevId,
      });
    } else {
      const event = {...input, date: keyFormatDate, start, end};

      onEditSubmit(event, prevId);
    }

    history.push("/");
  }

  return (
    <div className={styles.eventDetail}>
      <DaysAndTimeForm
        date={date}
        isTheDay={true}
        start={start}
        end={end}
        handleStartChange={(time) => (time !== end) && setStart(time)}
        handleEndChange={(time) => (time !== start) && setEnd(time)}
        disabled={!edit}
      />
      <InputForm
        onSubmit={handleInputSubmit}
        title={event.title}
        content={event.content}
        disabled={!edit}
      >
        {edit
          ? <div className={styles.buttonContainer}>
              <button className={styles.button}><FaPaperPlane /></button>
              <button
                className={`${styles.button} ${styles.deleteButton}`}
                onClick={() => setIsDelete((prev) => !prev)}
              ><FaTrashAlt /></button>
            </div>
          : <button
              className={styles.button}
              onClick={() => setEdit((prev) => !prev)}
            >수정</button>
        }
      </InputForm>
    </div>
  );
}

export default EventDetail;
