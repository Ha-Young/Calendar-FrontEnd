import React, { useState } from "react";
import Form from "./Form";
import styles from "./Events.module.css";
import { useLocation } from "react-router-dom";
import { getOnlyHours, makeOClock } from "../../utils/event";
import { deleteTargetData, writeUserData } from "../../api";

export default function NewEvent({ userId }) {
  const location = useLocation();

  let initialInputValues = {
    date: "",
    title: "",
    detail: "",
    startAt: "",
    endAt: "",
  };

  if (location.state) {
    initialInputValues = {
      ...location.state,
      startAt: makeOClock(location.state.startAt),
      endAt: makeOClock(location.state.endAt),
    };
  }

  const [inputValues, setInputValues] = useState(initialInputValues);

  function onSubmit(e) {
    e.preventDefault();

    const {
      date, 
      title,
      detail,
      startAt,
      endAt,
    } = inputValues;

    if (location.state) {
      deleteTargetData(
        userId, 
        initialInputValues.date,
        getOnlyHours(initialInputValues.startAt), 
        getOnlyHours(initialInputValues.endAt)
      );
    }

    writeUserData(userId, date, title, detail, getOnlyHours(startAt), getOnlyHours(endAt));
  }

  function onChangeInputValues(e) {
    let { value, name } = e.target;

    if (name === "startAt" || name === "endAt") {
      value = makeOClock(value);
    }

    setInputValues(prev => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  return (
    <div className={`${styles.eventFormContainer} ${styles.flexCenter}`}>
      <Form
        inputValues={inputValues}
        onChangeInputValues={onChangeInputValues}
        onSubmit={onSubmit}
      />
    </div>
  );
}
