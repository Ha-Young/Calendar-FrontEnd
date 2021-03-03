import React, { useState } from "react";
import Form from "./Form";
import styles from "./Events.module.css";
import { useLocation } from "react-router-dom";
import { getOnlyHours, makeOClock } from "../../utils/event";

export default function NewEvent({ writeUserData }) {
  const location = useLocation();

  let initialInputValues = {
    date: "",
    title: "",
    detail: "",
    startAt: "",
    endAt: "",
  }

  // refactor: time;
  
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

    writeUserData("guest", date, title, detail, getOnlyHours(startAt), getOnlyHours(endAt));
  }

  function onChangeInputValues(e) {
    let { value, name } = e.target;

    if (name === "startAt" || name === "endAt") {  //상수관리하기
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
