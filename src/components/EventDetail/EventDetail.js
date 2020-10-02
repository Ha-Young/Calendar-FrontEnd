import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import moment from "moment";
import styles from "./EventDetail.module.css";
import Modal from "../Modal/Modal";

export default function EventDetail (props) {
  const {
    setEventId,
    matchedEvent,
    onUpdateEvent,
    onDeleteEvent,
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
    const { value, name } = event.target;
    setEventDetails({
      ...eventDetails,
      [name]: value,
    });
  };

  const handleEditButton = async () => {
    if (!isEditButtonClicked) {
      setIsEditButtonClicked(true);
      return;
    }

    await onUpdateEvent({
      id: eventId,
      createdAt: moment().toISOString(),
      ...eventDetails,
    });

    history.push("/calendar");
  };

  const handleDeleteButton = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");

    if (confirmDelete) {
      await onDeleteEvent({
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
              name="eventName"
              value={eventName || ""}
              onChange={handleInputsChange}
            />
            <label htmlFor="eventDescription">Event Description</label>
            <input
              type="text"
              name="eventDescription"
              value={eventDescription || ""}
              onChange={handleInputsChange}
            />
            <label htmlFor="eventDate">Event Date</label>
            <input
              type="date"
              name="eventDate"
              value={eventDate || ""}
              onChange={handleInputsChange}
            />
            <input
              type="time"
              name="startTime"
              value={startTime || ""}
              onChange={handleInputsChange}
            />
            <input
              type="time"
              name="endTime"
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
