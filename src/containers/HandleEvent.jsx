import EventForm from "components/EventForm/EventForm";
import { inputConst, typeConst } from "constants/constants";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { actionCreators } from "actions/actionCreators";
import { generateKey, getDateISO } from "utils/utilFunction";
import { useHistory, useParams } from "react-router-dom";

const HandleEvent = ({ type, weeklyEvent, addEvent, editEvent }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(getDateISO(0));
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const param = useParams();
  const history = useHistory();

  useEffect(() => {
    if (type === typeConst.EDIT) {
      const currentEvent = weeklyEvent[param.eventId];
      const { title, description, date, startTime, endTime } = currentEvent;

      setTitle(title);
      setDescription(description);
      setDate(date);
      setStartTime(("0" + startTime + "시").slice(-3));
      setEndTime(("0" + endTime + "시").slice(-3));
    }
  }, [param.eventId, type, weeklyEvent]);

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
      const id = generateKey();
      addEvent(newEvent, id);
    } else if (type === typeConst.EDIT) {
      editEvent(newEvent, param.eventId);
      history.push(`/events/${param.eventId}`);
    }

    setTitle("");
    setDescription("");
    setDate(getDateISO(0));
    setStartTime("");
    setEndTime("");

    alert("submit complete");
  };

  const handleInput = (e) => {
    const {
      target: { name, value },
    } = e;

    switch (name) {
      case inputConst.TITLE:
        setTitle(value);
        break;

      case inputConst.DESCRIPTION:
        setDescription(value);
        break;

      case inputConst.DATE:
        setDate(value);
        break;

      case inputConst.START_TIME:
        setStartTime(value);
        break;

      case inputConst.END_TIME:
        setEndTime(value);
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

const mapStateToProps = (state) => {
  const { weeklyEvent } = state;
  return { weeklyEvent };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEvent: (newEvent, id) => dispatch(actionCreators.addEvent(newEvent, id)),
    editEvent: (editedEvent, id) =>
      dispatch(actionCreators.editEvent(editedEvent, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HandleEvent);
