import React, { useState } from 'react';
import moment from 'moment';
import { setEventData } from '../../utils/api';
import styles from './EventForm.module.css';

const EventForm = ({
  onAddEvent
}) => {
  const today = moment().format('YYYY-MM-DD');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(today);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const eventInfo = {
      eventId: '',
      title: '',
      description: '',
      date: '',
      startTime: '',
      endTime: ''
    };

    eventInfo.title = title;
    eventInfo.description = description;
    eventInfo.date = date;
    eventInfo.startTime = startTime;
    eventInfo.endTime = endTime;
    eventInfo.eventId = `${date}-${startTime}`;

    try {
      const sendEventInfoToDB = async () => {
        await setEventData(eventInfo);
        onAddEvent(eventInfo);
        alert('등록 되었습니다');
      }

      sendEventInfoToDB();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className={styles.EventForm}>
      <h1>Event Registration</h1>
      <label className={styles.title} htmlFor='title' >
        <div>Title</div>
        <input
          className={styles.title}
          type='text'
          name='title'
          size='60'
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
          placeholder='title'
          required
        />
      </label>

      <label htmlFor='description' className={styles.descriptionLabel} >
        <div className={styles.inputName}>Description</div>
        <input
          className={styles.description}
          type='text'
          name='description'
          size='60'
          value={description}
          onChange={e => {
            setDescription(e.target.value);
          }}
          placeholder='description'
          required />
      </label>

      <label htmlFor='date' className={styles.date}>
        <div>Date</div>
        <input
          type='date'
          name='date'
          size='40'
          value={date}
          onChange={e => {
            setDate(e.target.value)
          }}
          required></input>
      </label>

      <div className={styles.time}>
        <label htmlFor='startTime' className={styles.startTime}>
          <div>Start Time</div>
          <input
            type='time'
            name='startTime'
            size='60'
            step='3600'
            value={startTime}
            onChange={e => {
              setStartTime(e.target.value)
            }}
            required></input>
        </label>

        <label htmlFor='EndTime' className={styles.endTime}>
          <div>End Time</div>
          <input
            type='time'
            name='EndTime'
            size='60'
            step='3600'
            value={endTime}
            onChange={e => {
              setEndTime(e.target.value);
            }}
            required></input>
        </label>
      </div>

      <input
        className={styles.submitButton}
        type='submit'
        value='Add'
        onClick={onSubmit}>
      </input>
    </form>
  );
};

export default EventForm;
