import EventForm from "components/EventForm/EventForm";
import { inputConst } from "constants/constants";
import React, { useState } from "react";
import { connect } from "react-redux";
import moment from "moment";

const HandleEvent = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEvent = { title, description, date, startTime, endTime };
    console.log(newEvent);
    // send to database
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
        const startTime = parseInt(e.target.value.slice(0, 2));
        setStartTime(startTime);
        break;

      case inputConst.END_TIME:
        const endTime = parseInt(e.target.value.slice(0, 2));
        setEndTime(endTime);
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

const mapDispatchToProps = () => {
  return {
    // addEvent: (EventForm) => dispatch({[ACTION.ADD_EVENT]}),
  };
};

export default connect(null, mapDispatchToProps)(HandleEvent);
