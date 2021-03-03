import EventForm from "components/EventForm/EventForm";
import { inputConst, typeConst } from "constants/constants";
import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "actions";
import { getToday } from "utils/utilFunction";

const HandleEvent = ({ type, addEvent, editEvent }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(getToday());
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const parsedStartTime = parseInt(startTime.slice(0, 2));
    const parsedEndTime = parseInt(endTime.slice(0, 2));
    const newEvent = {
      title,
      description,
      date,
      startTime: parsedStartTime,
      endTime: parsedEndTime,
    };

    if (type === typeConst.ADD) {
      addEvent(newEvent);
    } else if (type === typeConst.EDIT) {
      editEvent(newEvent);
    }
    // send to database logic
  };

  const handleInput = (e) => {
    switch (e.target.name) {
      case inputConst.TITLE:
        setTitle(e.target.value);
        break;

      case inputConst.DESCRIPTION:
        setDescription(e.target.value);
        break;

      case inputConst.DATE:
        setDate(e.target.value);
        break;

      case inputConst.START_TIME:
        setStartTime(e.target.value);
        break;

      case inputConst.END_TIME:
        setEndTime(e.target.value);
        break;

      default:
        return;
    }
  };

  return (
    <EventForm
      onSubmit={handleSubmit}
      onChange={handleInput}
      value={{ title, description, date, startTime, endTime }}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEvent: (newEvent) => dispatch(actionCreators.addEvent(newEvent)),
    editEvent: (newEvent) => dispatch(actionCreators.editEvent(newEvent)),
  };
};

export default connect(null, mapDispatchToProps)(HandleEvent);
