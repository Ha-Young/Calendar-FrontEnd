import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styles from "./EventDetail.module.css";
import moment from "moment";

export default function EventDetail ({ setEventId, matchedEvent, updateEvent, deleteEvent }) {
  const history = useHistory();
  const [eventDetails, setEventDetails] = useState({});
  const [isEditButtonClicked, setIsEditButtonClicked] = useState(false);
  const { eventId } = useParams();
  const {
    eventName,
    eventDescription,
    eventDate,
    startTime,
    endTime
  } = eventDetails;

  useEffect(() => {
    setEventId(eventId);
    setEventDetails({
      ...eventDetails,
      eventName : matchedEvent?.eventName,
      eventDescription: matchedEvent?.eventDescription,
      eventDate: matchedEvent?.eventDate,
      startTime: matchedEvent?.startTime,
      endTime: matchedEvent?.endTime,
    });
  }, [matchedEvent]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setEventDetails({
      ...eventDetails,
      [name]: value,
    });
  };

  const handleEditButton = () => {
    if (!isEditButtonClicked) {
      setIsEditButtonClicked(true);
      return;
    }

    updateEvent({
      id: eventId,
      createdAt: moment().toISOString(),
      ...eventDetails,
    });
    history.push("/calendar");
  };

  const handleDeleteButton = () => {
    const confirmDelete = window.confirm("삭제하시겠습니까?");

    if (confirmDelete) {
      deleteEvent({
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
    <div className={styles.EventDetail}>
      <h2>Event Details</h2>
      <fieldset disabled={isEditButtonClicked ? false : true}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            name="eventName"
            value={eventName || ""}
            onChange={handleChange}
          />
          <label htmlFor="eventDescription">Event Description</label>
          <input
            type="text"
            name="eventDescription"
            value={eventDescription || ""}
            onChange={handleChange}
          />
          <label htmlFor="eventDate">Event Date</label>
          <input
            type="date"
            name="eventDate"
            value={eventDate || ""}
            onChange={handleChange}
          />
          <input
            type="time"
            name="startTime"
            value={startTime || ""}
            onChange={handleChange}
          />
          <input
            type="time"
            name="endTime"
            value={endTime || ""}
            onChange={handleChange}
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
  );
}
