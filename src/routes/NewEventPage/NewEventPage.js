import React from "react";
import styles from "./NewEventPage.module.css";
import PropTypes from "prop-types";
import Form from "../../components/Form";
import { currentDay, today } from "../../utils/date";

const NewEventPage = ({ onSubmit, loadMoreEventData }) => {
  const initialEventDataState = {
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
    loadMoreEventData([eventData.date]);
  };

  return (
    <div className={styles.wrapper}>
      <Form
        onSubmit={handleSubmittedEvent}
        initialFormState={initialEventDataState}
      />
    </div>
  );
};

export default NewEventPage;

NewEventPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loadMoreEventData: PropTypes.func.isRequired,
};
