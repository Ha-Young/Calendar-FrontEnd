import React from "react";
import { useLocation } from "react-router-dom";
import Form from "../Form/Form";

export default function CreateEvent({ onSubmit, currentDay }) {
  const params = useLocation();
  const index = Number(params.pathname.split('/')[2]);
  return (
    <Form onSubmit={onSubmit} formTime={index} currentDay={currentDay} />
  );
}
