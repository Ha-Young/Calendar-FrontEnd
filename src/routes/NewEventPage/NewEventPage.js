import React, { useState } from "react";
import styles from "./NewEventPage.module.css";
import Form from "../../components/Form/Form";
import { currentDay, today } from "../../utils/date";

const NewEventPage = ({ onSubmit }) => {
  const initialFormState = {
    id: "",
    title: "",
    description: "",
    date: currentDay(today),
    startTime: "",
    endTime: "",
    color: null,
  };

  return (
    <Form onSubmit={onSubmit} initialState={initialFormState} />
  );
};

export default NewEventPage;
