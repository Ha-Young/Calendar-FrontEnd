import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import SubmitBtn from "./SubmitBtn";
import Input from "./EventInput";
import { MOCK_DATA, INPUT, INPUT_TYPE } from "../../assets/InputData";

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

const Event = ({ onSubmit, onPage, onSendToFirebase, showFirebaseData }) => {
  const location = useLocation();
  const [event, setEvent] = useState(MOCK_DATA);
  const modifyingData = MOCK_DATA;

  useEffect(() => {
    onPage();
  }, []);

  if (location.state) {
    const modifyingEvent = location.state.modifyingEvent;
    
    INPUT_TYPE.forEach((type) => {
      modifyingData[INPUT[type].dataType] = modifyingEvent[INPUT[type].dataType];
    });
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(event);
    onSendToFirebase(event.date, event);
    showFirebaseData();
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
        {INPUT_TYPE.map((type) => {
          return <Input
            name={INPUT[type].name}
            type={INPUT[type].type}
            saveValue={onInputSubmit(INPUT[type].dataType)}
            value={modifyingData[INPUT[type].dataType]}
          />;
        })}
        <SubmitBtn />
      </div>
    </Form>
  );
};

export default Event;

Event.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onPage: PropTypes.func.isRequired,
  onSendToFirebase: PropTypes.func.isRequired,
  showFirebaseData: PropTypes.func.isRequired,
};
