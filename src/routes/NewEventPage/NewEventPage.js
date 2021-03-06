import React from "react";
import styles from "./NewEventPage.module.css";
import Form from "../../components/Form/Form";
import { currentDay, today } from "../../utils/date";

const NewEventPage = ({ onSubmit, onLoad }) => {
  const initialEventState = {
    id: "",
    title: "",
    description: "",
    date: currentDay(today),
    startTime: "",
    endTime: "",
    color: null,
  };

  const handleSubmittedEvent = (eventData) => {
    onSubmit(eventData);
    onLoad([eventData.date]);
  };

  return (
    <div className={styles.wrapper}>
      <Form
        onSubmit={handleSubmittedEvent}
        initialFormState={initialEventState}
      />
    </div>
  );
};

export default NewEventPage;
