import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import moment from "moment";
import PropTypes from "prop-types";
import styles from "./EventDetail.module.css";
import Modal from "../Modal/Modal";

export default function EventDetail (props) {
  const {
    setEventId,
    matchedEvent,
    updateEvent,
    deleteEvent,
    errorMessage,
  } = props;

  const history = useHistory();
  const { eventId } = useParams();
  const [eventDetails, setEventDetails] = useState({});
  const [isEditButtonClicked, setIsEditButtonClicked] = useState(false);
  const {
    eventName,
    eventDescription,
    eventDate,
    startTime,
    endTime,
  } = eventDetails;

  useEffect(() => {
    setEventId(eventId);
    setEventDetails({
      ...eventDetails,
      eventName: matchedEvent?.eventName,
      eventDescription: matchedEvent?.eventDescription,
      eventDate: matchedEvent?.eventDate,
      startTime: matchedEvent?.startTime,
      endTime: matchedEvent?.endTime,
    });
  }, [eventId, matchedEvent]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputsChange = (event) => {
    const { value, id } = event.target;
    setEventDetails({
      ...eventDetails,
      [id]: value,
    });
  };

  const handleEditButton = async () => {
    if (!isEditButtonClicked) {
      setIsEditButtonClicked(true);
      return;
    }

    await updateEvent({
      id: eventId,
      createdAt: moment().toISOString(),
      ...eventDetails,
    });

    history.push("/calendar");
  };

  const handleDeleteButton = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");

    if (confirmDelete) {
      await deleteEvent({
        id: eventId,
        createdAt: moment().toISOString(),
        ...eventDetails,
      });

      history.push("/calendar");
    }
  };

  const handleCancelButton = () => {
    history.push("/calendar");
  };

  return (
    <>
      {
        errorMessage
        && <Modal title={errorMessage} />
      }
      <div className={styles.EventDetail}>
        <h2>Event Details</h2>
        <fieldset disabled={isEditButtonClicked ? false : true}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="eventName">Event Name</label>
            <input
              type="text"
              id="eventName"
              value={eventName || ""}
              onChange={handleInputsChange}
            />
            <label htmlFor="eventDescription">Event Description</label>
            <input
              type="text"
              id="eventDescription"
              value={eventDescription || ""}
              onChange={handleInputsChange}
            />
            <label htmlFor="eventDate">Event Date</label>
            <input
              type="date"
              id="eventDate"
              value={eventDate || ""}
              onChange={handleInputsChange}
            />
            <input
              type="time"
              id="startTime"
              value={startTime || ""}
              onChange={handleInputsChange}
            />
            <input
              type="time"
              id="endTime"
              value={endTime || ""}
              onChange={handleInputsChange}
            />
          </form>
        </fieldset>
        <button
          className={styles.editButton}
          onClick={handleEditButton}
        >
          Edit
        </button>
        <button
          className={styles.deleteButton}
          onClick={handleDeleteButton}
        >
          Delete
        </button>
        <button
          className={styles.cancelButton}
          onClick={handleCancelButton}
        >
          Cancel
        </button>
      </div>
    </>
  );
}

EventDetail.propTypes = {
  setEventId: PropTypes.func.isRequired,
  matchedEvent: PropTypes.object,
  updateEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};
