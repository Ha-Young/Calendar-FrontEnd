import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Form from "./Form";
import styles from "./Events.module.css";
import { getOnlyHours, floorMinutes } from "../../utils/event";
import { deleteTargetData, writeUserData } from "../../api";

export default function NewEvent({ userId }) {
  const location = useLocation();
  const history = useHistory();

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
      startAt: floorMinutes(location.state.startAt),
      endAt: floorMinutes(location.state.endAt),
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

    writeUserData({
      userId,
      date,
      title,
      detail,
      startAt: getOnlyHours(startAt),
      endAt: getOnlyHours(endAt),
    });
    
    history.push("/calendar");
  }

  function onChangeInputValues(e) {
    let { value, name } = e.target;

    if (name === "startAt" || name === "endAt") {
      value = floorMinutes(value);
    }

    setInputValues(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
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
