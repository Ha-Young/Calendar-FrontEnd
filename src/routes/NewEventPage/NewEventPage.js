import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./NewEventPage.module.css";
import Form from "../../components/Form/Form";
import Modal from "../../components/Modal/Modal";
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
    <Form onSubmit={onSubmit} initialState={initialFormState} />
  );
};

export default NewEventPage;
