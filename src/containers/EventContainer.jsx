import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import Event from "../components/Event/Event";
import { addEvent } from "../actions";

import { addEventDatabase, getEventKey } from "../api";

function EventContainer({ onSubmitAddEvent }) {
  const [eventDate, setEventDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const history = useHistory();

  function setInputInformation(event) {
    event.preventDefault();

    const editStartTime = `${startTime.slice(0, 2)}:00`;
    const editEndClock = `${endTime.slice(0, 2)}:00`;

    const eventInformation = {
      startTime: editStartTime,
      endTime: editEndClock,
      eventDate,
      title,
      description,
    };

    history.push("/weekly");
    onSubmitAddEvent(eventInformation);
  }

  function handleChangeInput(event) {
    event.preventDefault();

    const { target } = event;

    switch (target.name) {
      case "date":
        setEventDate(target.value);
        break;

      case "startTime":
        setStartTime(target.value);
        break;

      case "endTime":
        setEndTime(target.value);
        break;

      case "title":
        setTitle(target.value);
        break;

      case "description":
        setDescription(target.value);
        break;

      default:
        break;
    }
  }

  return (
    <Event
      onClickInputButton={setInputInformation}
      handleChangeInput={handleChangeInput}
    />
  );
}

const mapDispatchToProps = dispatch => ({
  onSubmitAddEvent: (eventInformation) => {
    const eventKey = getEventKey();
    const event = {
      ...eventInformation,
      eventId: eventKey
    };

    addEventDatabase(event, eventKey);
    dispatch(addEvent(event));
  }
});

export default connect(null, mapDispatchToProps)(EventContainer);
