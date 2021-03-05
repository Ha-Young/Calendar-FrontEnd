import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [event, setEvent] = useState({
    title: "",
    description: "",
    date: "",
    startHour: "",
    endHour: "",
  });
  const modifyingData = {
    title: "",
    description: "",
    date: "",
    startHour: "",
    endHour: "",
  };

  if (location.state) {
    const modifyingEvent = location.state.modifyingEvent;
    modifyingData.title = modifyingEvent.title;
    modifyingData.description = modifyingEvent.description;
    modifyingData.date = modifyingEvent.date;
    modifyingData.startHour = modifyingEvent.startHour;
    modifyingData.endHour = modifyingEvent.endHour;
  }

  useEffect(() => {
    onPage();
  }, []);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(event);
    alert("Saved Successfully!");
    window.location.replace('/');
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
        <Title saveData={onInputSubmit("title")} value={modifyingData.title} />
        <Description saveData={onInputSubmit("description")} value={modifyingData.description} />
        <Date saveData={onInputSubmit("date")} value={modifyingData.date} />
        <StartHour saveData={onInputSubmit("startHour")} value={modifyingData.startHour} />
        <EndHour saveData={onInputSubmit("endHour")} value={modifyingData.endHour} />
        <SubmitBtn />
      </div>
    </Form>
  );
};

export default Event;
