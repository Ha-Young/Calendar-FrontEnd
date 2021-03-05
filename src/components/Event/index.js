import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
  const [redirect, setRedirect] = useState(false);
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
    setRedirect(true);
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
        <Date saveData={onInputSubmit("date")} />
        <StartHour saveData={onInputSubmit("startHour")} />
        <EndHour saveData={onInputSubmit("endHour")} />
          <SubmitBtn />
        <Link to="/">
        </Link>
      </div>
    </Form>
  );
};

export default Event;
