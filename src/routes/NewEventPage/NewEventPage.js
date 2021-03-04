import React from "react";
import styles from "./NewEventPage.module.css";
import Form from "../../components/Form/Form";
import { currentDay, today } from "../../utils/date";

const NewEventPage = ({ onSubmit }) => {
  const initialFormState = { // 상수로 빼줄지 말지..
    id: "",
    title: "",
    description: "",
    date: currentDay(today),
    startTime: "",
    endTime: "",
    color: null,
  };

  return (
    <div className={styles.wrapper}>
      <Form onSubmit={onSubmit} initialState={initialFormState} />
    </div>
  );
};

export default NewEventPage;
