import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";

import { addEvent, removeEvent } from "../actions";
import DetailEvent from "../components/Event/DetailEvent";

import { addEventDatabase, getEventKey, removeEventDatabase } from "../api";

function DetailEventContainer({
  eventInformation,
  onSubmitAddEvent,
  onSubmitRemoveEvent
}) {
  const history = useHistory();
  const { id } = useParams();
  const targetEvent = eventInformation[id];

  const [eventDate, setEventDate] = useState(targetEvent.eventDate);
  const [startTime, setStartTime] = useState(targetEvent.startTime);
  const [endTime, setEndTime] = useState(targetEvent.endTime);
  const [title, setTitle] = useState(targetEvent.title);
  const [description, setDescription] = useState(targetEvent.description);

  function addEvent(event) {
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

    onSubmitAddEvent(eventInformation);
  }

  function handleClickRemoveButton(event) {
    event.preventDefault();

    const defaultStartDate = targetEvent.eventDate;
    const removeEvent = {
      eventDate: defaultStartDate,
      eventId: id,
    };

    history.push("/weekly");
    onSubmitRemoveEvent(removeEvent);
  };

  function handleReviseButton(event) {
    addEvent(event);
    handleClickRemoveButton(event);
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
    <DetailEvent
      eventDate={eventDate}
      startTime={startTime}
      endTime={endTime}
      title={title}
      description={description}
      handleChangeInput={handleChangeInput}
      handleReviseButton={handleReviseButton}
      handleClickRemoveButton={handleClickRemoveButton}
    />
  );
}

const mapStateToProps = state => ({
  eventInformation: state
});

const mapDispatchToProps = dispatch => ({
  onSubmitAddEvent: (eventInformation) => {
    const eventKey = getEventKey();
    const event = {
      ...eventInformation,
      eventId: eventKey
    };

    addEventDatabase(event, eventKey);
    dispatch(addEvent(event));
  },
  onSubmitRemoveEvent: (eventInformation) => {
    removeEventDatabase(eventInformation);
    dispatch(removeEvent(eventInformation));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailEventContainer);
