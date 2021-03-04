import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Description from "./Description";
import EndHour from "./EndHour";
import Date from "./Date";
import StartHour from "./StartHour";
import SubmitBtn from "./SubmitBtn";
import Title from "./Title";

const Form = styled.form`
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 30em;
  padding: 0 5em 0;
  padding-top: 8em;

  div {
    position: relative;
  }
`;

const Event = ({ onSubmit, onPage }) => {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    date: "",
    startHour: "",
    endHour: "",
  });

  useEffect(() => {
    onPage();
  }, [])

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(event);
  };

  const onInputSubmit = (prop) => (value) => {
    setEvent({
      ...event,
      [prop]: value
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Title saveData={onInputSubmit("title")} />
        <Description saveData={onInputSubmit("description")} />
        <div>
          <Date saveData={onInputSubmit("date")} />
          <StartHour saveData={onInputSubmit("startHour")} />
        </div>
        <EndHour saveData={onInputSubmit("endHour")} />
        <SubmitBtn />
      </div>
    </Form>
  );
};

export default Event;
