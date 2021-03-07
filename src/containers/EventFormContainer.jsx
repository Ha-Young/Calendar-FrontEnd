import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import EventForm from "../components/EventForm/EventForm.jsx";
import { setEvent, removeEvent } from "../api";
import { throwError } from "../actions/index";

const EventFormContainer = ({ events, selectedEventInfo }) => {
  const history = useHistory();
  const currentUrl = useLocation();
  const selectedEvent = currentUrl.pathname === "/events/new"
    ? null
    : events[selectedEventInfo.selectedEventDayIndex][selectedEventInfo.selectedEventId];

  const handleSubmit = (e, title, description, startDateTime, endDateTime) => {
    e.preventDefault();

    const key = currentUrl.pathname === "/events/new" ? null : selectedEvent.uid;
    const date = startDateTime.slice(0, 10);
    const newEvent = {
      title,
      description,
      startDateTime,
      endDateTime,
    };

    setEvent(newEvent, date, key)
      .then(() => history.push("/calendar"))
      .catch((err) => {
        throwError(err);
        history.push("/error");
      });
  };

  const handleRemove = (startDateTime) => {
    const date = startDateTime.slice(0, 10);
    const key = selectedEvent.uid;

    removeEvent(date, key)
      .then(() => history.push("/calendar"))
      .catch((err) => {
        throwError(err);
        history.push("/error");
      });
  };

  return (
    <EventForm
      selectedEvent={selectedEvent}
      handleSubmit={handleSubmit}
      handleRemove={handleRemove}
      currentUrl={currentUrl}
    />
  );
};

const mapStateToProps = (state) => ({
  events: state.events,
  selectedEventInfo: state.selectedEventInfo,
  errorMessage: state.errorMessage,
});

export default connect(mapStateToProps, null)(EventFormContainer);
