import React from "react";
import Form from "../Form/Form";

export default function CreateEvent({ events, onSubmit }) {
  console.log(events)
  return (
    <Form onSubmit={onSubmit} />
  );
}
