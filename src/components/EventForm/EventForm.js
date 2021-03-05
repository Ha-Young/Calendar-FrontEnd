import React, { useState } from 'react';
import EventTitle from './EventTitle/EventTitle';
import EventDescription from './EventDescription/EventDescription';
import EventDate from './EventDate/EventDate';
import EventTime from './EventTime/EventTime';
import EventAddButton from './EventAddButton/EventAddButton';

import styles from "./EventForm.module.css";

export default function EventForm({ onSubmitEvent }) {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitEvent(eventData);
  }

  return (
    <form
      id="eventForm"
      onSubmit={handleSubmit}
      className={styles.EventForm}
    >
      <EventTitle
        value={eventData.title}
        onChange={
          event => setEventData({...eventData, title: event.target.value})
        }
      />
      <EventDescription
        value={eventData.description}
        onChange={
          event => setEventData({...eventData, description: event.target.value})
        }
      />
      <EventDate
        onChange={
          event => setEventData({...eventData, date: event.target.value})
        }
        value={eventData.date}
      />
      <EventTime
        name="이벤트 시작 시간"
        onChange={
          event => setEventData({...eventData, startTime: event.target.value})
        }
        value={eventData.startTime}
      />
      <EventTime
        name="이벤트 종료 시간"
        onChange={
          event => setEventData({...eventData, endTime: event.target.value})
        }
        value={eventData.endTime}
      />
      <EventAddButton />
    </form>
  );
}

