import React, { useEffect, useState } from "react";
import styles from "./EventDetail.module.css";
import { useParams, useHistory } from "react-router-dom";
import moment from "moment";

export default function EventDetail ({ setEventId, matchEvent, updateEvent }) {
  const [eventDetails, setEventDetails] = useState({});

  const { eventName, eventDescription, eventDate, startTime, endTime } = eventDetails;
  const [isEditButtonClicked, setIsEditButtonClicked] = useState(false);

  const history = useHistory();
  const { eventId } = useParams();

  useEffect(() => {
    setEventId(eventId);
    setEventDetails({
      ...eventDetails,
      eventName : matchEvent?.eventName,
      eventDescription: matchEvent?.eventDescription,
      eventDate: matchEvent?.eventDate,
      startTime: matchEvent?.startTime,
      endTime: matchEvent?.endTime,
    });
  }, [matchEvent]);

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const onChange = (event) => {
    const { value, name } = event.target;
    setEventDetails({
      ...eventDetails,
      [name]: value,
    });
  };

  const handleEditButtonClick = () => {
    if (!isEditButtonClicked) {
      setIsEditButtonClicked(true);
      return;
    }
    updateEvent({...eventDetails, createdAt: moment().toISOString(), id: eventId});
    history.push("/calendar");
  };

  const handleCancelButtonClick = () => {
    history.push("/calendar");
  };

  return (
    <div className={styles.EventDetail}>
      <h2>Event Details</h2>
      <fieldset disabled={isEditButtonClicked ? false : true}>
        <form onSubmit={onSubmit}>
          <label htmlFor="eventName">Event Name</label>
          <input type="text" name="eventName" value={eventName || ""} onChange={onChange} />
          <label htmlFor="eventDescription">Event Description</label>
          <input type="text" name="eventDescription" value={eventDescription || ""} onChange={onChange}/>
          <label htmlFor="eventDate">Event Date</label>
          <input type="date" name="eventDate" value={eventDate || ""} onChange={onChange}/>
          <input type="time" name="startTime" value={startTime || ""} onChange={onChange}/>
          <input type="time" name="endTime" value={endTime || ""} onChange={onChange}/>
        </form>
      </fieldset>
      <button className={styles.editButton} onClick={handleEditButtonClick}>Edit</button>
      <button className={styles.cancelButton} onClick={handleCancelButtonClick}>Cancel</button>
    </div>
  );
}
