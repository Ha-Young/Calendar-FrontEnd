import React, { useEffect, useState } from "react";
import Form from "./Form";
import styles from "./Events.module.css";
import { useLocation } from "react-router-dom";
import { getOnlyHours } from "../../utils/event";

export default function NewEvent({ writeUserData }) {
  const location = useLocation();

  let initialInputValues = {
    date: "",
    title: "",
    detail: "",
    startAt: "",
    endAt: "",
  }

  if (location.state) {
    initialInputValues = {...location.state};
  }

  const [inputValues, setInputValues] = useState(initialInputValues);

  // const [date, setDate] = useState("");
  // const [title, setTitle] = useState("");
  // const [detail, setDetail] = useState("");
  // const [startAt, setStartAt] = useState("");
  // const [endAt, setEndAt] = useState("");
  

  // useEffect(() => {
  //   if (location.state) {
  //     setDate(location.state.date);
  //     setTitle(location.state.title);
  //     setDetail(location.state.detail);
  //     setStartAt(getOnlyHours(location.state.startAt));
  //     setEndAt(getOnlyHours(location.state.endAt));
  //   }
  // }, [])

  // function onSubmit(e) {
  //   e.preventDefault();
  //   const startHour = startAt.substring(11,13);
  //   const endHour = endAt.substring(11,13);
  //   writeUserData("guest", date, title, detail, startHour, endHour);
  // }

  function onChangeInputValues(e) {
    const [value, name] = e.target;

  }

  // function onTitleChange(value) {
  //   setTitle(value);
  // }

  // function onDetailChange(value) {
  //   setDetail(value);
  // }

  // function onStartAtChange(value) {
  //   value = getOnlyHours(value);
  //   setStartAt(value);
  // }

  // function onEndAtChange(value) {
  //   value = getOnlyHours(value);
  //   setEndAt(value);
  // }

  // function onDateChange(value) {
  //   setDate(value);
  // }
  return (
    <div className={`${styles.eventFormContainer} ${styles.flexCenter}`}>
      <Form
        inputValues={inputValues}
        onChangeInputValues={onChangeInputValues}
        // date={date}
        // title={title}
        // detail={detail}
        // startAt={startAt}
        // endAt={endAt}
        // onDateChange={onDateChange}
        // onSubmit={onSubmit}
        // onTitleChange={onTitleChange}
        // onDetailChange={onDetailChange}
        // onStartAtChange={onStartAtChange}
        // onEndAtChange={onEndAtChange}
      />
    </div>
  );
}
